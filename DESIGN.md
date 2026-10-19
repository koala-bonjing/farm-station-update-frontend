# DESIGN.md - FarmStation Agrivet Design System

## Visual Direction & Domain Anchor
- **Domain:** Agricultural & veterinary trade supply network (52+ branches across the Bicol Region, founded in Goa, Camarines Sur in 2012).
- **Aesthetic Persona:** **Authentic FarmStation Dark Navy Brand Identity** — deep midnight navy canvas (`#0A1936`) matching the official FarmStation logo emblem, elevated navy section wells (`#07132B`), rich navy card surfaces (`#0F2758`), high-contrast crisp white typography (`#F8FAFC`), botanical green accents (`#22C55E` / `#4ADE80`), and warm harvest gold (`#FBBF24` / `#FDE68A`).
- **Anti-Slop Contract (Impeccable Craft Floor):**
  - **Zero Eyebrow / Kicker Pills:** Section headings stand on their own typographic authority without pill badges above them.
  - **Zero Unicode Emoji Icons:** Every icon is a crisp `1.75px` or `2px` stroke SVG using `currentColor`.
  - **Zero Image Hover Zoom:** `<img>` tags never scale on hover (`group-hover:scale-105` is banned); interactive feedback belongs to the card container (`--shadow-card-hover` and `-2px` translate).
  - **Zero Generic Template Grids:** Replaced 4-box glassmorphic hero counters and 4-box emoji grids with an architectural ledger strip, editorial specifications table, and structured catalog index.

---

## Typography
- **Display / Headings (`--font-display`):** `'Bricolage Grotesque', sans-serif` — high-character geometric grotesque with warm agrarian authority, tight tracking (`-0.025em`), and `text-wrap: balance`.
- **Body / UI (`--font-sans`):** `'Public Sans', sans-serif` — crisp, high-legibility trade and catalog sans-serif with `text-wrap: pretty` and `max-w-[65ch]` measure.
- **Technical / SKU / Numeric (`--font-mono`):** `'JetBrains Mono', monospace` — strictly for SKU codes, branch counts, ratings, and coordinates with `font-variant-numeric: tabular-nums`.

---

## Colors (FarmStation Dark Navy Brand Identity)
| Token | Value | Role |
|---|---|---|
| `--surface-canvas` | `#0A1936` | Primary deep navy canvas (FarmStation brand blue) |
| `--surface-elevated` | `#07132B` | Secondary elevated section & card well |
| `--surface-card` | `#0F2758` | Dark navy card surface for products & branches |
| `--surface-hover` | `#143372` | Interactive hover state for cards & active pills |
| `--surface-canopy` | `#061024` | Deep midnight header/ledger/footer anchor |
| `--ink-primary` | `#F8FAFC` | Primary crisp white heading & text |
| `--ink-secondary` | `#CBD5E1` | Secondary high-contrast slate editorial copy |
| `--ink-muted` | `#94A3B8` | Metadata, SKU labels, timestamps |
| `--accent-agri` | `#22C55E` / `#4ADE80` | Botanical field green accent (leaf emblem) |
| `--accent-harvest` | `#FBBF24` / `#FDE68A` | Harvest amber accent for verified ratings & highlights |
| `--border-hairline` | `rgba(255, 255, 255, 0.08)` | Whisper-quiet hairline structural border |

---

## Components
- **Concentric Border Radii (`Make Interfaces Feel Better`):** Outer container radius equals inner radius plus padding (`outerRadius = innerRadius + padding`), e.g.:
  - Product & Promo Cards: outer `rounded-[20px]` (`20px`) + `p-2` (`8px`) → inner image frame `rounded-[12px]` (`12px`).
  - Hero Banner & Branch Cards: outer `rounded-[24px]` (`24px`) + `p-2.5` (`10px`) → inner media `rounded-[14px]` (`14px`).
- **Layered Transparent Shadows:**
  - `--shadow-card`: `0 0 0 1px oklch(0.2 0.03 155 / 0.07), 0 1px 2px oklch(0.2 0.03 155 / 0.04), 0 8px 20px -6px oklch(0.2 0.03 155 / 0.06)`
  - `--shadow-card-hover`: `0 0 0 1px oklch(0.35 0.09 152 / 0.24), 0 4px 10px -2px oklch(0.2 0.03 155 / 0.07), 0 18px 32px -10px oklch(0.2 0.03 155 / 0.13)`
- **Subtle Image Outlines:** Every media frame carries `outline: 1px solid oklch(0 0 0 / 0.08); outline-offset: -1px;` (or `oklch(1 0 0 / 0.12)` on dark canopy surfaces).
- **Optical Alignment & Press States:** Buttons with trailing icons use asymmetric optical padding (`pl-5 pr-4`) and tactile `active:scale-[0.96]`.
- **Asymmetric Modal (`.t-modal`):** `250ms` enter (`--ease-out`) / `150ms` exit (`--ease-in`) from `scale(0.96)`.
- **Sliding Tab Indicator (`.t-tabs`):** Smooth `260ms var(--ease-out)` sliding pill indicator for Product Groups (`Products.html`) and Province Tabs (`Branches.html`).

---

## Motion & Performance
- **Motion Tokens (`_root.css`):**
  - `--ease-out: cubic-bezier(0.22, 1, 0.36, 1)`
  - `--ease-in: cubic-bezier(0.64, 0, 0.78, 0)`
  - `--ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1)`
- **GSAP Scroll Choreography:** Wrapped in `gsap.matchMedia()` respecting `(prefers-reduced-motion: no-preference)`.
- **Preloaded LCP Hero Banner:** First hero banner is embedded directly in HTML with `<link rel="preload" as="image" href="assets/cache/banner-1.jpg" fetchpriority="high">` and `fetchpriority="high" decoding="async" width="1400" height="332"`.
- **Zero-Blocking Initial Render:** All known CDN assets (`Banners`, `FeaturedProducts`, `PromoEvents`, `FSstore.png`, `History1..3.png`, `default.png`) are pre-compressed into `assets/cache/*.jpg` (~89–97% payload reduction) and rendered at `0ms` on DOMContentLoaded with automatic `onerror` fallback to `https://portal.farmstation.ph/...`.
