"""Songlist Organizer-ikon: S, L, O stablet lodret (S oeverst, L midt, O nederst)."""
from PIL import Image, ImageDraw, ImageFilter, ImageFont

BG = (15, 23, 42)
VIOLET = (129, 140, 248)
INDIGO = (99, 102, 241)
GOLD = (245, 158, 11)


def draw_icon(size, scale=1.0, path=None):
    SS = 4
    W = size * SS
    base = Image.new('RGBA', (W, W), BG + (255,))
    glow = Image.new('RGBA', (W, W), (0, 0, 0, 0))
    gd = ImageDraw.Draw(glow)
    art = Image.new('RGBA', (W, W), (0, 0, 0, 0))
    d = ImageDraw.Draw(art)

    font_size = int(W * 0.26 * scale)
    font = ImageFont.load_default(size=font_size)

    letters = [('S', VIOLET), ('L', INDIGO), ('O', VIOLET)]
    n = len(letters)
    slot = W * scale / n
    x0 = (W - W * scale) / 2

    for i, (ch, col) in enumerate(letters):
        cy = x0 + slot * (i + 0.5)
        bbox = d.textbbox((0, 0), ch, font=font)
        tw, th = bbox[2] - bbox[0], bbox[3] - bbox[1]
        pos = (W / 2 - tw / 2 - bbox[0], cy - th / 2 - bbox[1])
        w = max(2, int(font_size * 0.045))
        for dx in range(-w, w + 1, max(1, w // 2)):
            for dy in range(-w, w + 1, max(1, w // 2)):
                if dx * dx + dy * dy <= w * w:
                    d.text((pos[0] + dx, pos[1] + dy), ch, font=font, fill=col + (255,))
                    gd.text((pos[0] + dx, pos[1] + dy), ch, font=font, fill=col + (160,))

    glow = glow.filter(ImageFilter.GaussianBlur(W // 40))
    out = Image.alpha_composite(base, glow)
    out = Image.alpha_composite(out, art)
    out = out.resize((size, size), Image.LANCZOS)
    if path:
        out.save(path)
    return out


if __name__ == '__main__':
    draw_icon(192, path='icons/icon-192.png')
    draw_icon(512, path='icons/icon-512.png')
    draw_icon(512, scale=0.72, path='icons/icon-maskable-512.png')
    print('ok')
