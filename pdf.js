// Minimal PDF writer for the setlist export (A4, Helvetica).
// Encodes text as WinAnsi and embeds fonts as compressed streams.

function makePdfEscape(str) {
  return String(str).replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)');
}

function encodePdfText(str) {
  let out = '';
  for (const ch of String(str)) {
    const code = ch.codePointAt(0);
    if (ch === 'æ') out += '\xe6';
    else if (ch === 'Æ') out += '\xc6';
    else if (ch === 'ø') out += '\xf8';
    else if (ch === 'Ø') out += '\xd8';
    else if (ch === 'å') out += '\xe5';
    else if (ch === 'Å') out += '\xc5';
    else if (code >= 32 && code <= 255) out += ch;
    else out += '?';
  }
  return out;
}

function makePdf(lines) {
  const pageWidth = 595.28, pageHeight = 841.89, margin = 34;
  const maxWidth = pageWidth - margin * 2;

  const widthOf = (text, size) => text.length * size * 0.5;

  const pages = [];
  let current = [];
  let y = pageHeight - margin;
  const newPage = () => {
    if (current.length) pages.push(current);
    current = [];
    y = pageHeight - margin;
  };
  const addLine = (text, size, bold, color, right) => {
    y -= size * 1.6;
    if (y < margin + size) {
      pages.push(current);
      current = [];
      y = pageHeight - margin - size * 1.6;
    }
    let x = margin;
    if (right) {
      const w = widthOf(text, size);
      if (w > maxWidth) x = margin;
      else x = pageWidth - margin - w;
    }
    current.push(`BT /${bold ? 'F2' : 'F1'} ${size} Tf ${color || '0 0 0 rg'} 1 0 0 1 ${x.toFixed(2)} ${y.toFixed(2)} Tm (${makePdfEscape(encodePdfText(text))}) Tj ET`);
  };
  const addRule = () => {
    y -= 8;
    if (y < margin + 10) {
      pages.push(current);
      current = [];
      y = pageHeight - margin;
    }
    current.push(`0.8 w ${margin} ${y.toFixed(2)} m ${(pageWidth - margin).toFixed(2)} ${y.toFixed(2)} l S`);
  };

  for (const line of lines) {
    if (line.pageBreak) { newPage(); continue; }
    if (line.spacer) { y -= line.spacer; continue; }
    if (line.rule) { addRule(); continue; }
    addLine(line.text, line.size || 12, line.bold, line.color, line.right);
  }
  if (current.length) pages.push(current);
  if (!pages.length) pages.push([]);

  const objects = [];
  objects.push('<< /Type /Catalog /Pages 2 0 R >>');
  const pageIds = pages.map((_, i) => 5 + i * 2);
  objects.push(`<< /Type /Pages /Kids [${pageIds.map(id => `${id} 0 R`).join(' ')}] /Count ${pages.length} >>`);
  objects.push('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>');
  objects.push('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>');

  pages.forEach((content, i) => {
    const contentId = 6 + i * 2;
    objects.push(`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${pageWidth} ${pageHeight}] /Resources << /Font << /F1 3 0 R /F2 4 0 R >> >> /Contents ${contentId} 0 R >>`);
    const stream = content.join('\n');
    objects.push(`<< /Length ${stream.length} >>\nstream\n${stream}\nendstream`);
  });

  let pdf = '%PDF-1.4\n';
  const offsets = [];
  objects.forEach((obj, i) => {
    offsets.push(pdf.length);
    pdf += `${i + 1} 0 obj\n${obj}\nendobj\n`;
  });
  const xrefPos = pdf.length;
  pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  for (const off of offsets) pdf += `${String(off).padStart(10, '0')} 00000 n \n`;
  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefPos}\n%%EOF`;
  return pdf;
}
