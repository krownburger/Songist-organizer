"""Generer SLO/g-nogle app-ikon i tre stoerrelser."""
from PIL import Image, ImageDraw
import math

BG = (15, 23, 42)        # #0f172a
ACCENT = (99, 102, 241)  # #6366f1
ACCENT_LIGHT = (129, 140, 248)  # #818cf8
GOLD = (245, 158, 11)    # #f59e0b


def draw_icon(size, pad_ratio=0.08, path=None):
    scale = size / 512.0
    img = Image.new('RGBA', (size, size), BG + (255,))
    d = ImageDraw.Draw(img)
    S = lambda v: v * scale

    cx = size / 2
    top = S(90)
    line_w = S(56)

    # O: stoer cirkel i toppen (g-noglens oevre loekke)
    ox, oy = cx, S(190)
    orad = S(120)
    d.ellipse([ox - orad, oy - orad, ox + orad, oy + orad],
              outline=ACCENT_LIGHT, width=max(2, int(line_w)))

    # S: lodret streg fra O og ned gennem hele ikonet (g-noglens stamme)
    # buer let som en S-kurve
    stem_top = S(110)
    stem_bot = S(440)
    d.line([cx, stem_top, cx, stem_bot], fill=ACCENT, width=max(2, int(line_w)))

    # L: vandret fod i bunden (L'ens fod) + lille lodret start
    foot_y = S(440)
    foot_x1 = cx - S(10)
    foot_x2 = cx + S(180)
    d.line([foot_x1, foot_y, foot_x2, foot_y], fill=ACCENT, width=max(2, int(line_w)))

    # S-kurven i bunden: buet del (nederste loekke paa g-noglen)
    srx, sry = cx, S(340)
    srr = S(92)
    d.arc([srx - srr, sry - srr, srx + srr, sry + srr],
          start=90, end=330, fill=ACCENT, width=max(2, int(line_w)))

    # lille g-nogle-detalje: prik under (typisk for g-noglen)
    dot_r = S(14)
    dy = S(470)
    d.ellipse([cx - dot_r, dy - dot_r, cx + dot_r, dy + dot_r], fill=GOLD + (255,))

    if path:
        img.save(path)
    return img


def draw_icon_maskable(size, path):
    # maskable: samme motiv, men skaleret ned med mere margen
    img = Image.new('RGBA', (size, size), BG + (255,))
    inner = draw_icon(size, pad_ratio=0.30)
    # tegn motivet mindre: simuler ved at tegne paa og skalere
    big = draw_icon(size)
    small = big.resize((int(size * 0.62), int(size * 0.62)), Image.LANCZOS)
    off = (size - small.width) // 2
    img.paste(small, (off, off), small)
    img.save(path)


if __name__ == '__main__':
    draw_icon(192, path='icons/icon-192.png')
    draw_icon(512, path='icons/icon-512.png')
    draw_icon_maskable(512, path='icons/icon-maskable-512.png')
    print('ok')
