"""Kunstnerisk SLO/g-nogle ikon: glidende kurver med tyk-tynd streg, gradient og gloed."""
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


def stroke_path(d, pts, radii, colors):
    for i, (p, r, c) in enumerate(zip(pts, radii, colors)):
        d.ellipse([p[0] - r, p[1] - r, p[0] + r, p[1] + r], fill=c + (255,))
        if i > 0:
            q = pts[i - 1]
            d.line([q[0], q[1], p[0], p[1]], fill=c + (255,), width=int(2 * r))


def sample_bez(p0, p1, p2, p3, n):
    return [bez(p0, p1, p2, p3, i / (n - 1)) for i in range(n)]


def circle_pts(cx, cy, rad, start_deg, end_deg, n):
    pts = []
    for i in range(n):
        a = math.radians(start_deg + (end_deg - start_deg) * i / (n - 1))
        pts.append((cx + rad * math.cos(a), cy + rad * math.sin(a)))
    return pts


def build_paths(S):
    """Returner liste af (points, start_radius, end_radius, start_color, end_color)."""
    paths = []
    # O: oevre loekke - naesten helt cirkel, aaben i bunden
    pts = circle_pts(256, 148, 92, 60, 390, 60)
    paths.append((pts, 30, 20, VIOLET, VIOLET))
    # S: den snoede stamme fra loekken og helt i bund - som en kaldigrafisk S
    stem = sample_bez((300, 205), (330, 330), (160, 400), (256, 470), 90)
    paths.append((stem, 24, 13, VIOLET, INDIGO))
    # L: elegant fod der sveiper til hoejre og loeber op i en lille krølle
    foot = sample_bez((256, 470), (330, 505), (420, 470), (440, 430), 80)
    paths.append((foot, 13, 9, INDIGO, INDIGO))
    # lille nedad-bue paa venstre side af stammen (g-noglens krop)
    body = sample_bez((215, 330), (150, 430), (215, 490), (256, 500), 60)
    paths.append((body, 10, 12, INDIGO, INDIGO))
    return paths


def draw_icon(size, scale_motif=1.0, path=None):
    SS = 4  # supersampling
    W = size * SS
    img = Image.new('RGBA', (W, W), BG + (255,))

    glow = Image.new('RGBA', (W, W), (0, 0, 0, 0))
    gd = ImageDraw.Draw(glow)
    art = Image.new('RGBA', (W, W), (0, 0, 0, 0))
    d = ImageDraw.Draw(art)

    S = W / 512.0 * scale_motif
    offset = (1 - scale_motif) * W / 2

    for pts, r0, r1, c0, c1 in build_paths(S):
        n = len(pts)
        pts = [(p[0] * S + offset, p[1] * S + offset) for p in pts]
        radii = [(r0 + (r1 - r0) * i / (n - 1)) * S for i in range(n)]
        colors = [lerp(c0, c1, i / (n - 1)) for i in range(n)]
        stroke_path(d, pts, radii, colors)
        stroke_path(gd, pts, [r * 1.5 for r in radii], [(99, 102, 241)] * n)

    # guld-prik under stammen
    dot_c = (256 * S + offset, 508 * S + offset)
    dot_r = 14 * S
    d.ellipse([dot_c[0]-dot_r, dot_c[1]-dot_r, dot_c[0]+dot_r, dot_c[1]+dot_r], fill=GOLD + (255,))
    gd.ellipse([dot_c[0]-dot_r*1.8, dot_c[1]-dot_r*1.8, dot_c[0]+dot_r*1.8, dot_c[1]+dot_r*1.8], fill=GOLD + (160,))

    glow = glow.filter(ImageFilter.GaussianBlur(W // 40))
    img = Image.alpha_composite(img, glow)
    img = Image.alpha_composite(img, art)

    img = img.resize((size, size), Image.LANCZOS)
    if path:
        img.save(path)
    return img


if __name__ == '__main__':
    draw_icon(192, path='icons/icon-192.png')
    draw_icon(512, path='icons/icon-512.png')
    draw_icon(512, scale_motif=0.72, path='icons/icon-maskable-512.png')
    print('ok')
