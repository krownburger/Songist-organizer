"""Kunstnerisk SLO/g-nogle ikon i trebra versioner - med kryds som en aegte g-nogle."""
from PIL import Image, ImageDraw, ImageFilter
import math

BG = (15, 23, 42)
VIOLET = (129, 140, 248)
INDIGO = (99, 102, 241)
GOLD = (245, 158, 11)


def lerp(a, b, t):
    return tuple(int(a[i] + (b[i] - a[i]) * t) for i in range(3))


def bez(p0, p1, p2, p3, t):
    mt = 1 - t
    return (mt**3 * p0[0] + 3 * mt**2 * t * p1[0] + 3 * mt * t**2 * p2[0] + t**3 * p3[0],
            mt**3 * p0[1] + 3 * mt**2 * t * p1[1] + 3 * mt * t**2 * p2[1] + t**3 * p3[1])


def sample_bez(p0, p1, p2, p3, n):
    return [bez(p0, p1, p2, p3, i / (n - 1)) for i in range(n)]


def stroke(d, pts, radii, colors):
    for i, (p, r, c) in enumerate(zip(pts, radii, colors)):
        d.ellipse([p[0] - r, p[1] - r, p[0] + r, p[1] + r], fill=c + (255,))
        if i > 0:
            q = pts[i - 1]
            d.line([q[0], q[1], p[0], p[1]], fill=c + (255,), width=int(2 * r))


def spiral_pts(cx, cy, r0, r1, a0, a1, n):
    pts = []
    for i in range(n):
        t = i / (n - 1)
        a = math.radians(a0 + (a1 - a0) * t)
        r = r0 + (r1 - r0) * t
        pts.append((cx + r * math.cos(a), cy + r * math.sin(a)))
    return pts


def build_layer1():
    """Stammen: lang, let snoet lodret linje fra top til bund (S'ets rygrad)."""
    return sample_bez((268, 60), (246, 180), (246, 340), (256, 452), 100), 22, 16, VIOLET, INDIGO


def build_layer2():
    """Den store nederste loekke (O'et): spiral der krydser stammen midt paa ikonet."""
    # ydre baue fra hoejre over toppen og ned til venstre, derefter ind i spiralen
    outer = sample_bez((256, 300), (400, 300), (400, 180), (256, 180), 50)
    # fra venstre side krydser vi stammen og snoer os ind i midten (her opstaar KRYDSET)
    cross = sample_bez((112, 180), (110, 330), (230, 340), (256, 300), 50)
    # indre spiral ind mod midten
    inner = spiral_pts(256, 300, 46, 8, 180, 480, 40)
    return outer + cross + inner, 26, 10, VIOLET, INDIGO


def build_layer3():
    """L'et: fod nederst der loeber til hoejre og krøller op."""
    foot = sample_bez((256, 452), (330, 486), (410, 462), (432, 420), 80)
    return foot, 16, 8, INDIGO, INDIGO


def draw_icon(size, scale_motif=1.0, path=None):
    SS = 4
    W = size * SS
    base = Image.new('RGBA', (W, W), BG + (255,))
    glow = Image.new('RGBA', (W, W), (0, 0, 0, 0))
    gd = ImageDraw.Draw(glow)
    art = Image.new('RGBA', (W, W), (0, 0, 0, 0))
    d = ImageDraw.Draw(art)

    S = W / 512.0 * scale_motif
    off = (1 - scale_motif) * W / 2

    layers = [build_layer1(), build_layer2(), build_layer3()]
    for pts, r0, r1, c0, c1 in layers:
        n = len(pts)
        pts = [(x * S + off, y * S + off) for (x, y) in pts]
        radii = [(r0 + (r1 - r0) * i / (n - 1)) * S for i in range(n)]
        colors = [lerp(c0, c1, i / (n - 1)) for i in range(n)]
        stroke(d, pts, radii, colors)
        stroke(gd, pts, [r * 1.6 for r in radii], [(99, 102, 241)] * n)

    dot_c = (256 * S + off, 470 * S + off)
    dot_r = 13 * S
    d.ellipse([dot_c[0]-dot_r, dot_c[1]-dot_r, dot_c[0]+dot_r, dot_c[1]+dot_r], fill=GOLD + (255,))
    gd.ellipse([dot_c[0]-dot_r*2, dot_c[1]-dot_r*2, dot_c[0]+dot_r*2, dot_c[1]+dot_r*2], fill=GOLD + (150,))

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
    draw_icon(512, scale_motif=0.74, path='icons/icon-maskable-512.png')
    print('ok')
