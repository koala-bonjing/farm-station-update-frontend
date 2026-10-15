# CLAUDE.md - Farm Station Website Redesign & Skills Configuration

## 🌾 Project Overview
**Workspace:** `d:\farm-station-site-update`  
**Purpose:** Upgrading and modernizing the website design for **Farm Station** (fresh agricultural produce, organic farm market, and seasonal harvests).

---

## 🎨 Installed Frontend Design Skills & Triggers

When working on UI and frontend design in this project, use the following specialized skills:

| Skill | Trigger / Command | Core Focus | Location |
|---|---|---|---|
| **Antigravity Design Expert** | `/antigravity-design-expert` | Spatial depth, weightlessness, subtle 3D CSS transforms, glassmorphic cards, GSAP scroll triggers, GPU-safe motion. | `.claude/skills/antigravity-design-expert/SKILL.md` |
| **UI/UX Pro Max** | `/ui-ux-pro-max` | 79 searchable styles, 192 product palettes, 74 font pairings, 119 UX/a11y guidelines, and complete design-system generation. | `.claude/skills/ui-ux-pro-max/SKILL.md` |
| **Frontend Design** (Anthropic) | `/frontend-design` | High-craft, distinctive visual identity tailored to agriculture/nature; two-pass token planning; avoids generic AI template clichés. | `.claude/skills/frontend-design/SKILL.md` |
| **Impeccable** | `/impeccable` | Design director critiques, heuristic audits, typography polish, and automated craft defect detection. | `.claude/skills/impeccable/SKILL.md` |

---

## ⚡ Guiding Engineering Principles

Always harmonize design creation with these three disciplines:

1. **`/ponytail` (Lazy Senior Developer / Minimum Essential Code):**
   - **YAGNI:** Never create speculative abstractions, wrapper libraries, or unnecessary components.
   - **Native Platform First:** Prefer modern native CSS (`subgrid`, `:has()`, `color-mix()`, CSS 3D transforms) over heavy JavaScript animation bundles.
   - **Shortest Working Diff:** Minimal, elegant code that directly satisfies the user's design requirements.

2. **`/andrej-karpathy` (Disciplined & Surgical):**
   - **Think Before Coding:** Define design tokens (colors, typography, spacing) and layout hierarchy before writing code.
   - **Surgical Changes:** Modify only the targeted UI components; zero orthogonal refactoring of unrelated styles or logic.
   - **Simplicity First:** Concise, readable code. If 100 lines of CSS/JS can be 30, keep it at 30.

3. **`/boost` (60fps & Core Web Vitals):**
   - **GPU Compositing:** Animate *only* `transform` and `opacity`. Never transition layout properties (`top`, `left`, `width`, `height`, `margin`, `padding`, `box-shadow`).
   - **Zero CLS (Cumulative Layout Shift < 0.1):** Explicit `width`/`height` or CSS `aspect-ratio` on every image, video, and banner.
   - **Fast LCP (Largest Contentful Paint < 2.5s):** Preload hero imagery with `fetchpriority="high"`; serve next-gen formats (WebP/AVIF).
   - **Smooth INP (Interaction to Next Paint < 200ms):** Yield to the main thread during heavy operations; passive touch/wheel listeners.

---

## 🛠️ Workspace CLI Tools

Use these local runners directly from the workspace root:

```bash
# 1. UI/UX Pro Max Search & Design System Generation
python uipro.py "farm agriculture produce fresh" --domain style
python uipro.py "fresh organic produce" --domain color
python uipro.py "accessible button" --domain ux
python uipro.py "farm agriculture fresh produce" --design-system -p "Farm Station"

# 2. Impeccable Design Context & Auditing
node impeccable.mjs context            # Inspect design briefs and project truth
node impeccable.mjs doctor             # Check artifact integrity and rule drift
node impeccable.mjs detect <ui-file>   # Scan UI code for design defects and anti-patterns
```

---

## 📋 Recommended Workflow for Farm Station Website Redesign

1. **Token & Theme Definition:**
   Run `python uipro.py "farm agriculture fresh produce" --design-system -p "Farm Station"` or follow `frontend-design` two-pass planning to establish a 4–6 color palette (e.g., lush foliage green `#15803D`, golden harvest `#A16207`, clean cream `#F0FDF4`).
2. **Semantic Scaffolding:**
   Build semantic, accessible HTML5 structures (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`) adhering to WCAG 2.2 AA/AAA contrast guidelines.
3. **Spatial Craft & Polish:**
   Apply `antigravity-design-expert` floating cards with soft diffused shadows and subtle glassmorphic navigation blur.
4. **Performance Verification:**
   Verify responsive layouts across mobile (390px) and desktop (1440px), guaranteeing 60fps scroll animations and zero layout shift.
