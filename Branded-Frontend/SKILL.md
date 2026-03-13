---
name: branded-frontend
description: Create on-brand, production-grade frontend interfaces using the company's design language, enhanced with comprehensive design refinement tools from Impeccable. This skill should be used when building web components, pages, artifacts, or applications that must conform to the brand's visual identity including its specific color palette, typography (Muli + Open Sans), spacing scale, and responsive breakpoints. Also use when auditing, polishing, animating, adapting, optimizing, hardening, or critiquing existing interfaces. Generates polished, brand-consistent code with high design quality. Trigger words include build, design, create, audit, polish, animate, bolder, quieter, distill, colorize, clarify, adapt, normalize, extract, optimize, harden, onboard, critique, or delight.
---

This skill guides creation of production-grade frontend interfaces that strictly follow the brand's design system, enhanced with comprehensive design refinement tools. Every output must look like it belongs to the same product family — consistent, polished, and unmistakably on-brand.

---

## Before Coding

Before writing any code, read `references/design-tokens.md` to load the full set of brand tokens (colors, typography, spacing, breakpoints, and UI patterns). Every value used in output must come from this reference.

Then consider the context:

- **Purpose**: What problem does this interface solve? Who uses it?
- **Tone within brand**: The brand supports a range from confident and authoritative (Midnight Navy-heavy, bold headings) to approachable and light (Mercury Grey backgrounds, Java accents). Select the appropriate position on this spectrum for the context.
- **Constraints**: Technical requirements (framework, performance, accessibility).

Then implement working code (HTML/CSS/JS, React, Vue, etc.) that is:

- Production-grade and functional
- Visually polished and cohesive with the brand identity
- Meticulously consistent with the design token system
- Responsive across desktop, tablet, and mobile breakpoints

---

## Brand Design Rules

### Typography

- **Headings (H1-H5)**: Always use `'Muli', sans-serif`. Refer to `references/design-tokens.md` for exact sizes, weights, line-heights, and letter-spacing per level. Headings use tight letter-spacing (negative values) — never omit this.
- **Body, UI, labels, CTAs**: Always use `'Open Sans', sans-serif`. Refer to `references/design-tokens.md` for the full body type scale.
- **Labels**: Open Sans Bold, 12px, uppercase, 3% letter-spacing. This is a distinct style — do not improvise label styling.
- **Google Fonts import**: Always include the correct import at the top of any stylesheet:
  ```
  @import url('https://fonts.googleapis.com/css2?family=Muli:ital,wght@0,400;0,600;0,700;1,400&family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;1,400&display=swap');
  ```
- **NEVER** use fonts outside of Muli and Open Sans. No fallbacks to Inter, Roboto, Arial, or system fonts as visible choices — only as final CSS fallback after the brand fonts.

→ *For deeper typography principles (type scales, pairing strategy, loading optimization, OpenType features), consult [typography reference](references/typography.md).*

### Color

- Always define and use the CSS custom properties from `references/design-tokens.md`. Never hardcode hex values inline when a token exists.
- **Primary brand surface**: Midnight Navy (#0A0349) for hero sections, navigation, footers, and emphasis areas.
- **Primary accent**: Java (#06b0b2) for CTAs, links, and interactive highlights.
- **Secondary accent**: Polo Blue (#90b8df) for supporting UI elements, badges, and secondary actions.
- **Feature/premium accent**: Purple (#5602ad) — use sparingly for special callouts or differentiation.
- **Success/energy accent**: Lime (#c2f8cb) — use sparingly for status indicators or small highlights.
- **Body text**: Pebble Black (#4a4a4a) on light backgrounds; White (#ffffff) on dark backgrounds.
- **Light surfaces**: Mercury Grey (#eae7e4) for cards, alternating sections, and subtle backgrounds.
- Respect the contrast rules in `references/design-tokens.md`. Never place low-contrast color combinations (e.g., Polo Blue on White, Lime on White).
- Never use gray text on colored backgrounds — use a darker shade of that color or transparency instead.

→ *For deeper color principles (OKLCH, palette structure, dark mode, contrast testing), consult [color reference](references/color-and-contrast.md).*

### Spacing

- Use only the brand spacing scale: 8px, 16px, 32px, 40px, 80px. Do not invent intermediate values like 12px, 24px, or 64px.
- Reference tokens by name (sm, md, lg, xl, 2xl) in comments or CSS variables for clarity.
- Create visual rhythm through varied spacing — tight groupings for related elements, generous separations between sections.

→ *For deeper spatial principles (grids, visual hierarchy, container queries, optical adjustments), consult [spatial reference](references/spatial-design.md).*

### Responsive Behavior

- Design mobile-first or ensure all outputs work at three breakpoints: Desktop (1440px), Tablet (744px), Mobile (390px).
- Scale heading typography per the responsive table in `references/design-tokens.md`. This is mandatory, not optional.
- Use container queries (@container) for component-level responsiveness where appropriate.
- Adapt the interface for different contexts — do not simply shrink the desktop version.

→ *For deeper responsive principles (input method detection, safe areas, responsive images), consult [responsive reference](references/responsive-design.md).*

### UI Patterns

- Cards and containers: 8px border-radius.
- Buttons and badges: 4px border-radius.
- Card shadows: `0 2px 4px rgba(0, 0, 0, 0.05)`.
- Elevated elements use a Midnight Navy tinted shadow: `0 4px 12px rgba(10, 3, 73, 0.1)`.
- Use progressive disclosure — start simple, reveal sophistication through interaction.
- Design empty states that teach the interface, not just say "nothing here."
- Make every interactive surface feel intentional and responsive.

→ *For deeper interaction principles (eight states, focus rings, forms, loading, popovers, keyboard), consult [interaction reference](references/interaction-design.md).*

---

## Motion & Interaction

Apply motion and micro-interactions thoughtfully within the brand's professional tone:

- Prefer subtle, purposeful transitions (200-300ms ease-out-quart) over dramatic animations.
- Use staggered reveals on page load for card grids and lists (100-150ms delays between items).
- Hover states on interactive elements: subtle scale (1.02), shadow lift, or color shift toward a darker shade of the element's accent color.
- Avoid playful, bouncy, or chaotic animation styles — the brand tone is confident and refined.
- Use exponential easing curves for natural deceleration:
  - ease-out-quart: `cubic-bezier(0.25, 1, 0.5, 1)` — smooth, refined (recommended default)
  - ease-out-quint: `cubic-bezier(0.22, 1, 0.36, 1)` — slightly snappier
  - ease-out-expo: `cubic-bezier(0.16, 1, 0.3, 1)` — confident, decisive
- **Never** use bounce or elastic easing — they feel dated and undermine the professional tone.
- **Never** animate layout properties (width, height, padding, margin) — use transform and opacity only.
- For height animations (accordions), use `grid-template-rows: 0fr → 1fr` transitions.
- Always respect `prefers-reduced-motion`.

→ *For deeper motion principles (duration rules, staggering, perceived performance), consult [motion reference](references/motion-design.md).*

---

## UX Writing

Make every word earn its place. Follow these principles for all interface text:

- **Buttons/CTAs**: Use verb + noun patterns ("Create project", "Save changes"), never "OK" or "Submit".
- **Error messages**: State what happened, why, and how to fix it. Never blame the user.
- **Empty states**: Explain value and provide clear next action. Never just "No items."
- **Labels**: Be specific and consistent. Use the same term throughout — never vary for variety.

→ *For deeper UX writing principles (error templates, voice vs tone, translation), consult [ux-writing reference](references/ux-writing.md).*

---

## What to Avoid

- **Off-brand fonts**: Never use Inter, Roboto, Space Grotesk, Arial, or any display/novelty fonts.
- **Off-brand colors**: Never introduce colors outside the defined palette. No generic blues, greys, or accent colors that aren't in the tokens.
- **Generic AI aesthetics**: No purple-gradient-on-white, no oversized hero text with generic stock-photo vibes, no cookie-cutter SaaS landing page patterns unless the context specifically calls for it. No glassmorphism, no gradient text on metrics, no dark mode with glowing accents, no neon-on-dark.
- **Improvised spacing**: No values outside the spacing scale.
- **Ignoring letter-spacing**: The typography system uses specific negative letter-spacing on headings. Omitting this makes output look off-brand.
- **Low-contrast text**: Always check that text meets accessibility contrast requirements per the pairing rules.
- **Cards everywhere**: Not everything needs a card container. Use spacing and alignment for grouping when appropriate. Never nest cards inside cards.
- **Redundant copy**: No headers that restate the intro, no repeated explanations. Say it once, say it well.
- **Every button primary**: Use hierarchy — one primary action, secondary and ghost buttons for the rest.

---

## Design Refinement Commands

The following commands can be invoked by name when refining existing brand interfaces. Each command respects the brand design tokens and consults the appropriate reference files.

### /audit [area]
Perform a comprehensive audit of interface quality. Check: Accessibility (contrast per brand pairing rules, ARIA, keyboard, semantic HTML), Performance (layout thrashing, expensive animations, optimization), Theming (hard-coded colors vs tokens, inconsistent token usage), Responsive Design (breakpoint compliance, touch targets, overflow), Anti-Patterns (off-brand fonts, off-brand colors, generic AI aesthetics, spacing violations). Generate a severity-rated report — do not fix issues, document them for other commands.

### /critique [area]
Evaluate design effectiveness holistically. Assess: brand alignment, visual hierarchy, information architecture, emotional tone within the brand spectrum (authoritative to approachable), discoverability, composition, typography token compliance, color purpose, states and edge cases, microcopy quality. Report: Brand Alignment Verdict, Overall Impression, What's Working, Priority Issues (with What/Why/Fix/Command), Minor Observations, Questions to Consider.

### /polish [target]
Final quality pass before shipping. Work through: visual alignment and spacing (must use brand spacing scale), typography refinement (verify heading/body scales match tokens), color and contrast (verify brand pairings), all eight interaction states (default/hover/focus/active/disabled/loading/error/success), micro-interactions, content and copy consistency, icons and images, forms, edge cases, responsive behavior at all three breakpoints, performance, code quality.

### /animate [target]
Enhance with purposeful animations appropriate to the brand's professional tone. **Gather context first.** Plan: hero moment (one signature animation), feedback layer, transition layer. Use brand-appropriate easing (ease-out-quart/quint/expo). Keep durations in the 200-300ms range for state changes, 500-800ms for entrances. Never use bounce, elastic, or chaotic animation. Always respect `prefers-reduced-motion`.

### /bolder [target]
Amplify safe or underwhelming designs within brand constraints. Increase impact through: stronger typographic hierarchy (use the full range of Muli weights and sizes), bolder use of Midnight Navy for dramatic surfaces, more confident Java accent placement, spatial drama (use the full spacing scale — don't stay in the md/lg range), stronger shadow elevation, more decisive motion choreography. Stay within brand tokens. **WARNING**: "Bolder" does not mean off-brand AI aesthetics — it means more confident use of what already exists in the system.

### /quieter [target]
Tone down overly intense designs. Reduce intensity through: shifting toward Mercury Grey surfaces over Midnight Navy, lighter typography weights, reducing accent color usage, increasing white space, gentler motion. The brand's approachable end of the spectrum. Quiet does not mean boring; quiet means refined.

### /distill [target]
Strip to essence. Remove unnecessary complexity: reduce visible actions (one clear primary CTA), progressive disclosure for secondary options, remove decorative elements that don't reinforce the brand, simplify layouts toward single-column flow where appropriate, shorten copy, remove redundancy.

### /colorize [target]
Add strategic color within the brand palette. Introduce semantic color using existing tokens (Java for success/CTAs, Purple for premium features, Lime for status), apply accent borders using brand colors, use Mercury Grey to create surface hierarchy, tint backgrounds for section differentiation. Never introduce off-palette colors.

### /clarify [target]
Improve unclear UX copy. Fix error messages, form labels, button text, help text, empty states, success messages, loading states, confirmation dialogs. Match the brand's professional but approachable voice.

### /adapt [target] [context]
Adapt across the three brand breakpoints (Desktop 1440px, Tablet 744px, Mobile 390px). Apply responsive typography scaling from design tokens. Ensure touch targets are 44px+ on mobile. Adapt navigation, layout, and content density per context. Also handles print and email adaptation.

### /normalize [feature]
Align a feature with the brand design system. Discover deviations from `references/design-tokens.md`, replace hard-coded values with brand tokens, swap off-brand components with brand-compliant equivalents, verify typography/color/spacing/responsive compliance. Clean up orphaned code afterward.

### /extract [target]
Extract reusable brand components, design tokens, and patterns. Identify repeated UI patterns that should become shared brand components. Create components with the brand's token system built in. Document with usage examples.

### /optimize [target]
Improve performance. Target: image optimization (WebP/AVIF, responsive srcset, lazy loading), JavaScript bundle reduction (code splitting, tree shaking), CSS optimization (remove unused styles, critical CSS inline), font loading (font-display: swap, subsetting Muli and Open Sans), rendering performance (GPU-accelerated animations only), Core Web Vitals (LCP below 2.5s, INP below 200ms, CLS below 0.1).

### /harden [target]
Improve resilience. Address: text overflow and wrapping (truncation for long content within brand layouts), internationalization (text expansion budget, RTL support, date/number formatting), error handling (network errors, API errors, form validation with brand-styled error states), edge cases (empty states, loading states, large datasets, concurrent operations), accessibility resilience (keyboard navigation, screen reader support, reduced motion, high contrast).

### /onboard [target]
Design onboarding flows within the brand system. Principles: show don't tell, make it optional, minimize time to value, teach in context, respect user intelligence. Design brand-consistent: welcome screens, setup flows, empty states as onboarding, contextual tooltips styled with brand tokens, feature announcements, progressive onboarding.

### /delight [target]
Add moments of personality within the brand's professional tone. **Gather context first.** Techniques: refined micro-interactions (subtle hover effects, smooth state transitions), encouraging copy in empty states, satisfying completion animations (subtle checkmark draws, gentle scale pulses), helpful loading messages. Keep delight understated — the brand is confident and refined, not playful.

---

## Context Gathering

Many refinement commands require understanding context before proceeding. When context is unclear, gather: target audience, desired use-cases, position on the brand tone spectrum (authoritative to approachable), and technical constraints. Attempt to infer from existing code and thread context. If confidence is medium or lower, ask clarifying questions before proceeding.

---

## Reference Files

- `references/design-tokens.md` — Brand colors, typography scales, spacing, breakpoints, UI patterns (AUTHORITATIVE)
- `references/typography.md` — General type principles, scales, pairing, loading, OpenType features
- `references/color-and-contrast.md` — OKLCH color theory, palette structure, contrast, dark mode, theming
- `references/spatial-design.md` — Spacing systems, grids, visual hierarchy, container queries, depth
- `references/motion-design.md` — Duration rules, easing curves, staggering, reduced motion, perceived performance
- `references/interaction-design.md` — Eight interactive states, focus rings, forms, loading, modals, popovers, keyboard
- `references/responsive-design.md` — Mobile-first, breakpoints, input detection, safe areas, responsive images
- `references/ux-writing.md` — Button labels, error messages, empty states, voice vs tone, accessibility, translation

The `design-tokens.md` reference is the **authoritative source** for all brand-specific values. The other references provide general best-practice guidance — where they conflict with brand tokens, the brand tokens always win.

---

*Design refinement commands based on [Impeccable](https://github.com/pbakaus/impeccable) by Paul Bakaus (Apache 2.0).*
