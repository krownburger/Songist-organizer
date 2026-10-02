// Minimal PDF writer for the setlist export (A4, Helvetica).
// Encodes text as WinAnsi and supports auto-scaling to fit a single page.

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

function makePdf(lines, opts) {
  const pageWidth = 595.28, pageHeight = 841.89, margin = 34;
  const fitOnePage = !opts || opts.fitOnePage !== false;
  const factors = [1, 0.92, 0.84, 0.76, 0.68, 0.6, 0.52];

  const widthOf = (text, size) => text.length * size * 0.5;

  const textOp = (cell, size, x) =>
    `BT /${cell.bold ? 'F2' : 'F1'} ${size} Tf ${cell.color || '0 0 0 rg'} 1 0 0 1 ${x.toFixed(2)} ${(0).toFixed(2)} Tm (${makePdfEscape(encodePdfText(cell.text))}) Tj ET`;

  const layout = (factor) => {
    const pages = [];
    let current = [];
    let y = pageHeight - margin;
    const newPage = () => {
      pages.push(current);
      current = [];
      y = pageHeight - margin;
    };
    const ensureRoom = (need) => {
      if (y - need < margin) newPage();
    };
    const addLine = (line) => {
      const size = Math.max(6, (line.size || 12) * factor);
      const lineH = size * 1.6;
      ensureRoom(lineH);
      y -= lineH;
      if (line.cells) {
        for (const cell of line.cells) {
          const cSize = Math.max(6, (cell.size || line.size || 12) * factor);
          let x;
          if (cell.align === 'right') x = cell.x - widthOf(cell.text, cSize);
          else if (cell.align === 'center') x = cell.x - widthOf(cell.text, cSize) / 2;
          else x = cell.x;
          const op = `BT /${cell.bold ? 'F2' : 'F1'} ${cSize} Tf ${cell.color || line.color || '0 0 0 rg'} 1 0 0 1 ${x.toFixed(2)} ${y.toFixed(2)} Tm (${makePdfEscape(encodePdfText(cell.text))}) Tj ET`;
          current.push(op);
        }
      } else {
        let x;
        if (line.right) {
          const w = widthOf(line.text, size);
          x = pageWidth - margin - w;
        } else {
          x = margin;
        }
        current.push(`BT /${line.bold ? 'F2' : 'F1'} ${size} Tf ${line.color || '0 0 0 rg'} 1 0 0 1 ${x.toFixed(2)} ${y.toFixed(2)} Tm (${makePdfEscape(encodePdfText(line.text))}) Tj ET`);
      }
    };
    const addRule = () => {
      ensureRoom(10);
      y -= 8 * factor;
      current.push(`0.8 w ${margin} ${y.toFixed(2)} m ${(pageWidth - margin).toFixed(2)} ${y.toFixed(2)} l S`);
    };

    for (const line of lines) {
      if (line.pageBreak) { newPage(); continue; }
      if (line.spacer) { y -= line.spacer * factor; continue; }
      if (line.rule) { addRule(); continue; }
      addLine(line);
    }
    if (current.length) pages.push(current);
    if (!pages.length) pages.push([]);
    return pages;
  };

  let pages = layout(factors[0]);
  if (fitOnePage) {
    for (const f of factors) {
      pages = layout(f);
      if (pages.length === 1) break;
    }
  }

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
