# CLAUDE.md - FarmStation Agrivet Website Redesign & Skills Configuration

## Project Overview
**Workspace:** `d:\farm-station-site-update`  
**Purpose:** Editorial, high-craft agri-vet supply & field manual website for **FarmStation Agrivet (Farm Station Inc.)** — Bicol's premier one-stop agricultural and veterinary supply network across 52+ branches.

---

## Installed Frontend Design & Animation Skills

All skills are mirrored across `.agents/skills/`, `.claude/skills/`, `.gemini/skills/`, `C:\Users\sonny\.gemini\config\skills\`, and `C:\Users\sonny\.claude\skills\`:

| Skill | Trigger / Command | Core Focus | Location |
|---|---|---|---|
| **Impeccable** | `/impeccable` | Designer's vocabulary, craft floor, anti-AI-slop enforcement (no eyebrow pills, no unicode emoji icons, no image hover scaling, no `Outfit`/`Inter` defaults), and automated defect detection. | `.claude/skills/impeccable/SKILL.md` |
| **Make Interfaces Feel Better** | `/make-interfaces-feel-better` | Concentric border radii (`outer = inner + padding`), layered transparent `--shadow-border`, `1px oklch(0 0 0 / 0.1)` image outlines, optical alignment (`pl-5 pr-4`), `scale(0.96)` press states, `text-wrap: balance`/`pretty`, and `tabular-nums`. | `.claude/skills/make-interfaces-feel-better/SKILL.md` |
| **Transitions.dev** | `/transitions-dev`, `/transitions-polish`, `/transitions-ui-generation` | Production UI transition patterns, `_root.css` motion tokens (`--ease-out`, `--ease-spring`), asymmetric modal timing (`250ms` enter / `150ms` exit), sliding tab indicators (`.t-tabs`), skeleton-to-content reveals, and spreading chevron hover links (`.t-learn`). | `.claude/skills/transitions-dev/SKILL.md` |
| **Official GSAP Skills** | `/gsap-skills`, `/gsap-core`, `/gsap-scrolltrigger`, `/gsap-timeline`, `/gsap-performance`, `/gsap-plugins`, `/gsap-utils`, `/gsap-react`, `/gsap-frameworks` | Official GreenSock animation architecture: `gsap.matchMedia()` reduced-motion accessibility, GPU-composited `x`/`y`/`autoAlpha` entrance reveals, `ScrollTrigger` batching, and timeline choreography. | `.claude/skills/gsap-skills/SKILL.md` |
| **Frontend Design** | `/frontend-design` | Two-pass design system planning (`DESIGN.md`), domain-rooted palette & typography (`Bricolage Grotesque` + `Public Sans` + `JetBrains Mono`). | `.claude/skills/frontend-design/SKILL.md` |
| **UI/UX Pro Max** | `/ui-ux-pro-max` | Searchable style, color palette, typography pairing, and UX/accessibility reference engine. | `.claude/skills/ui-ux-pro-max/SKILL.md` |
| **Antigravity Design Expert** | `/antigravity-design-expert` | Spatial depth, subtle 3D CSS transforms, and GPU-composited scroll interactions. | `.claude/skills/antigravity-design-expert/SKILL.md` |

---

## Guiding Engineering Principles

Always harmonize design creation with these four disciplines:

1. **`/ponytail` (Lazy Senior Developer / Minimum Essential Code):**
   - **YAGNI:** Never create speculative abstractions, wrapper libraries, or unnecessary components.
   - **Native Platform First:** Prefer modern native CSS (`:has()`, `oklch()`, CSS custom properties, native lazy loading) over bloated JS bundles.
   - **Shortest Working Diff:** Minimal, direct code that solves the exact user problem.

2. **`/andrej-karpathy` (Disciplined & Surgical):**
   - **Think Before Coding:** Define design tokens (`DESIGN.md`) and layout hierarchy before writing code.
   - **Surgical Changes:** Preserve 100% of live FarmStation endpoints, fallbacks, and button IDs (`BtnHome1/2`, `BtnProducts1/2`, `BtnCareers1/2`, `BtnFB*`, `BtnYT*`, `BtnTikTok*`, etc.).
   - **Simplicity First:** Clean, auditable HTML/CSS/JS with zero dead code.

3. **`/boost` (60fps & Core Web Vitals):**
   - **Instant Picture Loading:** Preload the LCP hero banner (`fetchpriority="high"`), serve locally cached/compressed images (`assets/cache/*.jpg`) with instant 0ms initial render and automatic CDN fallback (`onerror`), and never block DOM image injection on sequential API timeouts.
   - **GPU Compositing:** Animate only `transform` and `opacity`; never use `transition: all`.
   - **Zero CLS (Cumulative Layout Shift < 0.1):** Explicit `width`/`height` and `aspect-ratio` on every image, banner, and card frame.

4. **`/goal` (Goal-Driven Verification):**
   - Verify every UI change against automated defect detection (`node impeccable.mjs detect --json index.html Products.html Branches.html`) and live browser checks.

---

## Workspace CLI Tools

```bash
# 1. Impeccable Design Context & Automated Defect Detection
node impeccable.mjs context --target index.html
node .agents/skills/impeccable/scripts/detect.mjs --json index.html Products.html Branches.html

# 2. UI/UX Pro Max Search & Design System Generation
python uipro.py "agriculture veterinary supply" --domain style
```
