---
name: boost
description: High-performance frontend engineering and Core Web Vitals optimization skill. Enforces 60fps GPU acceleration, sub-millisecond interaction responsiveness, zero Cumulative Layout Shift (CLS < 0.1), optimized Largest Contentful Paint (LCP < 2.5s), Interaction to Next Paint (INP < 200ms), asset compression, lazy loading, and elimination of layout thrashing.
risk: safe
source: community
license: MIT
---

# Boost: 60fps Performance & Core Web Vitals Optimization

Use this skill whenever building, refactoring, or reviewing web interfaces to ensure buttery-smooth 60fps frame rates, instant user interaction, and world-class Core Web Vitals (CWV) metrics.

---

## ⚡ Core Principles

1. **Hardware-Accelerated Compositing (60fps Animation):**
   - **Only animate composite properties:** `transform` and `opacity`.
   - **Banned for animations/transitions:** `top`, `left`, `right`, `bottom`, `width`, `height`, `margin`, `padding`, `border-width`, `box-shadow`, `filter`. Animating these forces expensive CPU layout and paint recalculations on every frame.
   - **Surgical `will-change`:** Apply `will-change: transform` only immediately before/during active animations and remove it upon completion. Never assign static `will-change` across broad element sets, as it causes GPU memory exhaustion and composite layer bloat.

2. **Cumulative Layout Shift (CLS < 0.1):**
   - **Explicit Dimensions:** Always provide explicit `width` and `height` attributes or CSS `aspect-ratio` on all images, videos, canvas elements, and iframes so browsers can calculate aspect ratios before assets load.
   - **Reserved Geometry:** Reserve container dimensions for asynchronously loaded banners, cards, or user data using skeleton placeholders with identical bounding dimensions.
   - **Font Jitter Prevention:** Use `font-display: optional` or `swap` with metric overrides (`size-adjust`, `ascent-override`, `descent-override`) to eliminate layout shifts between fallback and custom fonts.

3. **Largest Contentful Paint (LCP < 2.5s):**
   - **Priority Fetching:** Add `fetchpriority="high"` and `rel="preload"` to the primary above-the-fold hero image or video poster.
   - **Next-Gen Formats:** Serve images as AVIF or WebP with responsive `<picture>` breakpoints (`srcset`).
   - **Critical CSS:** Inline critical above-the-fold styles directly in `<head>`. Defer non-critical stylesheets.

4. **Interaction to Next Paint (INP < 200ms):**
   - **Main-Thread Hygiene:** Keep main-thread tasks under 50ms. Yield to the browser using `scheduler.yield()` or `requestAnimationFrame()` during heavy operations.
   - **Passive Event Listeners:** Always pass `{ passive: true }` to touch and wheel listeners to prevent blocking scroll gestures.
   - **Observer over Polling:** Use `IntersectionObserver` and `ResizeObserver` instead of listening to window `scroll` or `resize` events with manual math.

5. **Layout Thrashing Elimination:**
   - **Batch DOM Reads & Writes:** Never alternate reading layout properties (`offsetWidth`, `getBoundingClientRect()`, `scrollTop`) with writing styles (`element.style.height = ...`). Group all reads first, then group all writes.
   - **CSS Containment:** Apply `contain: layout paint` or `content-visibility: auto` to offscreen or independent components to isolate layout invalidation trees.

---

## 🛠️ Synergy with Ponytail & Andrej Karpathy

- **Ponytail (Minimal Essential Code):** Favor native modern CSS features (`@keyframes`, CSS transforms, CSS Grid `subgrid`, `:has()`) over heavyweight JavaScript animation packages. Do not import a 50KB library for an effect that 8 lines of CSS can deliver with better GPU acceleration.
- **Andrej Karpathy (Surgical & Disciplined):** Measure before optimizing. Touch only the performance-bottlenecked elements. Preserve existing styling and semantic structure while upgrading composite layers and asset loading.
