---
name: andrej-karpathy
description: >
  Behavioral guidelines to eliminate common LLM coding pitfalls, derived from
  Andrej Karpathy's observations. Enforces: 1) Think Before Coding (state assumptions,
  surface tradeoffs, push back), 2) Simplicity First (no speculative features or bloat),
  3) Surgical Changes (touch only what is necessary, match existing style),
  4) Goal-Driven Execution (define verifiable success criteria). Use whenever the user
  says "karpathy", "andrej-karpathy", "surgical changes", "think before coding", or requests
  rigorous, disciplined, minimal coding standards.
license: MIT
---

# Andrej Karpathy Coding Guidelines

Behavioral guidelines to reduce common LLM coding mistakes, derived from Andrej Karpathy's observations on LLM coding pitfalls.

**Tradeoff:** These guidelines bias toward caution and precision over unverified speed. For trivial tasks, use judgment.

---

## 1. Think Before Coding

**Don't assume. Don't hide confusion. Surface tradeoffs.**

Before implementing:
- **State assumptions explicitly:** If uncertain, ask rather than guess.
- **Surface alternatives:** If multiple interpretations exist, present them — don't pick silently.
- **Push back when warranted:** If a simpler approach exists, say so.
- **Stop when confused:** If something is unclear or contradictory, stop, name what's confusing, and ask.

---

## 2. Simplicity First

**Minimum code that solves the problem. Nothing speculative.**

- **No unrequested features:** Solve exactly what was asked, nothing more.
- **No single-use abstractions:** Keep it concrete until duplication proves otherwise.
- **No speculative flexibility:** Avoid configurable parameters that nobody asked for.
- **No impossible error handling:** Handle real failure modes, not theoretical ghosts.
- **Concise over verbose:** If 200 lines could be 50, rewrite it.

**The Test:** *"Would a senior engineer say this is overcomplicated?"* If yes, simplify.

---

## 3. Surgical Changes

**Touch only what you must. Clean up only your own mess.**

When editing existing code:
- **Zero orthogonal changes:** Don't "improve" adjacent code, comments, or formatting.
- **Preserve working code:** Don't refactor things that aren't broken.
- **Match existing style:** Follow the project's exact conventions, indentation, and patterns.
- **Do not delete existing dead code:** Mention it if found, but don't delete unrelated code unprompted.

When your changes create orphans:
- Remove imports, variables, or functions that YOUR changes made unused.
- Do not remove pre-existing dead code unless asked.

**The Test:** Every changed line should trace directly back to the user's explicit request.

---

## 4. Goal-Driven Execution

**Define success criteria. Loop until verified.**

Transform tasks into verifiable goals:
- *"Add validation"* ➔ Write tests for invalid inputs, then make them pass.
- *"Fix the bug"* ➔ Write a test reproducing the defect, then make it pass.
- *"Refactor X"* ➔ Ensure test suite and production build pass before and after.

For multi-step tasks, state a brief plan:
```
1. [Step] ➔ verify: [check]
2. [Step] ➔ verify: [check]
3. [Step] ➔ verify: [check]
```

Strong success criteria allow autonomous execution without drift or regression.

---

**These guidelines are successful when:**
- Diffs contain zero unnecessary or orthogonal changes.
- Solutions are simple, concise, and direct.
- Clarifying questions are raised before implementation rather than after mistakes.
