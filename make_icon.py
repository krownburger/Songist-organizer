"""Songlist Organizer-ikon: g-nogle + listestroeger (simg saetliste)."""
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
    return (mt**3*p0[0] + 3*mt**2*t*p1[0] + 3*mt*t**2*p2[0] + t**3*p3[0],
            mt**3*p0[1] + 3*mt**2*t*p1[1] + 3*mt*t**2*p2[1] + t**3*p3[1])


def sample_bez(p0, p1, p2, p3, n):
    return [bez(p0, p1, p2, p3, i/(n-1)) for i in range(n)]


def arc_pts(cx, cy, r, a0, a1, n):
    return [(cx + r*math.cos(math.radians(a0 + (a1-a0)*i/(n-1))),
             cy + r*math.sin(math.radians(a0 + (a1-a0)*i/(n-1)))) for i in range(n)]


def stroke(d, pts, radii, colors):
    for i, (p, r, c) in enumerate(zip(pts, radii, colors)):
        d.ellipse([p[0]-r, p[1]-r, p[0]+r, p[1]+r], fill=c+(255,))
        if i > 0:
            q = pts[i-1]
            d.line([q[0], q[1], p[0], p[1]], fill=c+(255,), width=int(2*r))


def clef_layers():
    """Aegte g-nogle-form: bundspiral, lang stamme, krølle i toppen."""
    layers = []
    # 1) Bundspiral: stor rund loekke der snor sig ind i en spiral (g-noglens krop)
    loop = arc_pts(250, 400, 88, 300, 980, 70)          # helt rundt og videre
    spiral_in = arc_pts(250, 400, 88, 260, 500, 40)      # anden runde, let mindre
    layers.append((loop, 20, 26, INDIGO, INDIGO))
    layers.append((spiral_in, 26, 10, INDIGO, VIOLET))
    # spiralens midtprik (g-noglens indre cirkel)
    # 2) Stammen: fra loekkens topkryds og op til hoejre, let boejende
    stem = sample_bez((300, 330), (330, 200), (300, 100), (280, 52), 100)
    layers.append((stem, 22, 14, INDIGO, VIOLET))
    # 3) Krøllen i toppen: snoer til venstre og ned igen (flaget)
    top = sample_bez((280, 52), (210, 40), (180, 90), (210, 150), 60)
    layers.append((top, 14, 9, VIOLET, INDIGO))
    # 4) lille hage paa venstre side af loekken (som paa aegte noder)
    chin = sample_bez((162, 400), (150, 470), (190, 505), (250, 490), 50)
    layers.append((chin, 12, 20, INDIGO, INDIGO))
    return layers


def list_rows():
    """Tre saetliste-raekker: guldprik + vandret streg."""
    rows = []
    ys = [150, 256, 362]
    for i, y in enumerate(ys):
        dot = [(392, y)]
        line = sample_bez((392, y), (430, y), (460, y), (492, y), 30)
        rows.append((dot, 13, 13, GOLD, GOLD))
        rows.append((line, 13, 8, GOLD, (217, 119, 6)))
    return rows


def draw_icon(size, scale_motif=1.0, path=None):
    SS = 4
    W = size * SS
    base = Image.new('RGBA', (W, W), BG+(255,))
    glow = Image.new('RGBA', (W, W), (0, 0, 0, 0))
    gd = ImageDraw.Draw(glow)
    art = Image.new('RGBA', (W, W), (0, 0, 0, 0))
    d = ImageDraw.Draw(art)

    S = W/512.0*scale_motif
    off = (1-scale_motif)*W/2

    all_layers = clef_layers() + list_rows()
    for pts, r0, r1, c0, c1 in all_layers:
        n = len(pts)
        pts = [(x*S+off, y*S+off) for (x, y) in pts]
        div = max(n - 1, 1)
        radii = [(r0 + (r1-r0)*i/div)*S for i in range(n)]
        colors = [lerp(c0, c1, i/div) for i in range(n)]
        stroke(d, pts, radii, colors)
        stroke(gd, pts, [r*1.5 for r in radii], [c0]*n)

    glow = glow.filter(ImageFilter.GaussianBlur(W//40))
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
