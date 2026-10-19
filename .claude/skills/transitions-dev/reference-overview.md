# Transitions.dev

Motion tokens and the 32 library transitions from transitions.dev. Reuse these tokens and patterns so components move like the library.

## Quick reference

| Transition | When to use |
| --- | --- |
| **Card resize** | Tween a container's width or height when its layout state changes. |
| **Number pop-in** | Re-enter each digit with a blurred slide when a number updates. |
| **Notification badge** | Slide a small badge onto a trigger and pop the dot. |
| **Text states swap** | Swap text in place with a blurred up-and-down transition. |
| **Menu dropdown** | Open an origin-aware dropdown that grows from its trigger. |
| **Modal open / close** | Scale-up modal dialog with a softer scale-down on close. |
| **Panel reveal** | Slide a panel into a region with a cross-blur. |
| **Page side-by-side** | Slide between two side-by-side pages (list ↔ detail, step 1 ↔ step 2). |
| **Icon swap** | Cross-fade two icons in the same slot with blur and scale. |
| **Success check** | Compose fade + rotate + Y-bob + path stroke-draw to celebrate a completed action. |
| **Avatar group hover** | Distance-falloff lift on a row of items with a bouncy spring on return. |
| **Error state shake** | Per-segment cubic-bezier shake with auto-reverting border + message. |
| **Input clear with dissolve** | Fly-out + per-word streak when a text field is cleared. |
| **Skeleton loader and reveal** | Pulse a placeholder, then cross-fade + cross-blur to the loaded content. |
| **Shimmer text** | Sweep a highlight band across muted text on a loop (pure CSS). |
| **Tabs sliding** | Slide the active pill between tabs in a segmented control. |
| **Tooltip open/close** | Delayed fade+scale in, instant out, travels between triggers. |
| **Texts reveal** | Staggered blurred rise for stacked text lines, quiet fade out. |
| **Card hover tilt** | Tilt a card in 3D toward the pointer with a cursor-tracked glare. |
| **Plus to menu morph** | Morph a circular trigger into the menu / panel it opens. |
| **Accordion expand** | Grow / shrink a panel via grid-rows with a chevron flip. |
| **Toast open / close** | Rise a toast from below with fade + cross-blur, slower in than out. |
| **Like button** | Fill a heart with a pop + particle burst on like. |
| **Learn more hover** | Slide the chevron and spread its arms into an arrow on hover. |
| **Checkbox check** | Fill the box, then stroke-draw the checkmark. |
| **Spinning counter** | Spin slot-machine digit reels with vertical motion blur. |
| **Toggle** | Travel the switch thumb with a double-bounce overshoot. |
| **Thinking states** | Shimmer a status line while it holds, then swap it to the next state. |
| **Reasoning stream** | Step an agent-reasoning transcript up two lines at a time on a loop. |
| **Streaming text** | Resolve streamed words one by one through a soft cross-blur. |
| **Matrix dot loader** | Pulse a 4×4 dot matrix in scan / twinkle / orbit / pulse patterns. |
| **Banner stacking** | Stack banners like toasts, new ones rise in, older ones push back. |
| **Text morph** | Keep the letters two labels share and cross-blur only the part that changes, easing its width. |
| **Text swap soft** | Cross-blur a value into the new one in place, both at once, with no movement. |
| **Donut chart** | Ring segments with even gaps and rounded corners that morph to new values. |

## Decision rules

When the user asks for a transition, match against the visible UI element first, then the verb:

- **Trigger + small dot floating on top** → notification badge.
- **Trigger + surface that grows from it** → dropdown (anchored, origin-aware) or modal (centered, no anchor).
- **Surface that slides into a region of the page** → panel reveal.
- **Two screens, list ↔ detail or step 1 ↔ step 2** → page side-by-side.
- **Element changes width or height** → card resize.
- **A label changes in place and the old and new text share letters at the start or end** (Copy code to Copied, Follow to Following) → text morph.
- **Element's text content changes in place and the texts share nothing** (Processing to Done) → text states swap.
- **Values update in place because the data behind a view changed** (a chart's period, a currency, a unit) → text swap soft for every value that changed.
- **A donut or ring chart** → donut chart (even gaps, the smallest corner radius, morphs when its data changes).
- **Two icons in the same slot** → icon swap.
- **A number updates** → number pop-in.
- **Confirmation / success / "done" moment** (checkmark, payment processed, file uploaded) → success check.
- **Hovering an item in a horizontal stack** (avatars, chips, segmented buttons, tag pills) → avatar group hover.
- **Form validation error / "this is wrong" feedback** (invalid field, wrong PIN, duplicate name) → error state shake.
- **Clearing a text field** (search box × button, filter reset) → input clear with dissolve.
- **Placeholder that loads then swaps to real content** (list row, card, profile header) → skeleton loader and reveal.
- **In-progress / "thinking" text that should feel alive** (loading label, streaming status) → shimmer text.
- **Small horizontal set of mutually-exclusive options with a moving highlight** (view switcher, segmented control, filter tabs) → tabs sliding.
- **Hover/focus hint that appears over a trigger** (icon tooltip, info bubble) → tooltip open / clos

