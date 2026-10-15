# farm-station-update-frontend

## Frontend Design Skills Suite

This project is configured with the four premier frontend and UI/UX design intelligence skills, fully compatible with **Antigravity**, **Claude Code**, and **Open Agents** standards.

The skills are installed and active in:
- `.gemini/skills/` (Antigravity native)
- `.claude/skills/` (Claude Code native)
- `.agents/skills/` (Universal agent standard)

---

## 🎨 The 4 Installed Design Skills

### 1. `antigravity-design-expert`
* **Focus:** Weightless, glassmorphic, spatial, and 3D-transformed web interfaces.
* **Stack:** React / Next.js, Tailwind CSS, GSAP + ScrollTrigger, React Three Fiber (R3F), and 3D CSS transforms (`perspective`, `rotateX`, `rotateY`).
* **Key Principles:**
  * Floating cards with layered, diffused shadows.
  * Z-axis depth and isometric perspective.
  * Micro-interactions and staggered entry animations (0.1s staggering).
  * Strict `prefers-reduced-motion` compliance and GPU-safe animation practices.

### 2. `ui-ux-pro-max`
* **Focus:** Comprehensive design-intelligence engine with searchable datasets:
  * 79 UI styles (Glassmorphism, Minimalist, Bento Grid, Biophilic, etc.)
  * 192 product color palettes and reasoning profiles
  * 74 curated typography pairings
  * 119 UX and accessibility guidelines (WCAG 2.2 AAA/AA, touch targets, keyboard nav)
  * 105 curated icons, 17 GSAP presets, 25 chart patterns, and 22 framework stacks
* **CLI Engine:** Offline BM25 search engine with zero external dependencies.
* **Usage Shortcut:**
  ```bash
  # Search styles, typography, or UX guidelines
  python uipro.py "minimalist landing page" --domain style
  python uipro.py "accessible button" --domain ux

  # Generate an end-to-end design system for a project
  python uipro.py "farm agriculture fresh produce" --design-system -p "Farm Station"
  ```

### 3. `frontend-design` (Anthropic Official)
* **Focus:** High-craft, distinctive, production-grade visual design that breaks away from generic AI template clichés.
* **Key Principles:**
  * **Intentional Visual Identity:** Rejects default AI tropes (such as generic purple gradients, all-caps tracked-out eyebrows, or unprompted broadsheet styles) in favor of palettes and typography grounded in the specific subject matter.
  * **Two-Pass Workflow:** Plan a tight 4–6 color token system, layout wireframe, and typography roles before writing code.
  * **Restraint & Single Focus:** Spend boldness in one memorable signature interaction or visual moment, keeping surrounding components clean and disciplined.

### 4. `impeccable`
* **Focus:** Design director-level vocabulary, UI audits, heuristic critiques, and precision polish tools.
* **Commands Available:** `critique`, `audit`, `polish`, `bolder`, `quieter`, `distill`, `harden`, `animate`, `colorize`, `typeset`, `layout`, `delight`, `clarify`, `adapt`, `optimize`, `live`.
* **Usage Shortcut:**
  ```bash
  # Session product & design context check
  node impeccable.mjs context

  # Project health & drift audit
  node impeccable.mjs doctor

  # Scan UI files for anti-patterns and craft defects
  node impeccable.mjs detect <path-to-ui-file>
  ```

---

## ⚡ Integration with `/ponytail`, `/andrej-karpathy`, and `/boost`

This installation is configured to enforce disciplined, peak-craft development:

| Principle | Core Directive | How Design Skills Obey |
|---|---|---|
| **`/ponytail`** *(Lazy Senior Dev)* | YAGNI, standard library, native platform features, shortest diff | Prefers native CSS 3D transforms and standard HTML/CSS over heavy JS animation bundles; eliminates unnecessary third-party packages; reuses design tokens. |
| **`/andrej-karpathy`** | Think before coding, surgical changes, simplicity first, goal-driven | Uses `frontend-design` & `ui-ux-pro-max` planning passes before code generation; touches only targeted UI components; zero orthogonal refactoring; verifies responsive and accessible states. |
| **`/boost`** | 60fps performance, GPU acceleration, Core Web Vitals | Enforces `will-change: transform` only around active animations; avoids continuous animations on `box-shadow` or `filter`; reserves space for async images to guarantee zero CLS. |

---

## 🚀 Quick Verification

Run this anytime to test the search and design system engines:
```bash
python uipro.py "ecommerce" --domain color
node impeccable.mjs doctor
```
