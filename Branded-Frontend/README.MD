# Branded Frontend — Claude Skill

A Claude skill that enforces our Kneat design system across all frontend work, enhanced with 17 design refinement commands from [Impeccable](https://github.com/pbakaus/impeccable).

## What It Does

When Claude builds any frontend interface — components, pages, dashboards, apps — this skill ensures the output uses our exact brand tokens: Muli + Open Sans typography, the Midnight Navy / Java / Polo Blue color palette, our spacing scale, and responsive breakpoints. No off-brand fonts, no improvised colors, no generic AI aesthetics.

Beyond creation, the skill provides a full toolkit for refining existing interfaces: auditing for issues, polishing before shipping, adding animation, improving performance, hardening for edge cases, and more.

## Installation

1. Download `branded-frontend.zip` from this repo
2. Go to **Settings → Skills** in Claude
3. Upload the zip

This replaces the default `branded-frontend` skill with the enhanced version.

## Skill Structure

```
branded-frontend/
├── SKILL.md                          # Main skill instructions
├── assets/
│   ├── kneat-logo.svg                # Brand logo (dark)
│   └── kneat-logo-reverse.svg        # Brand logo (light/reversed)
└── references/
    ├── design-tokens.md              # Brand tokens (AUTHORITATIVE)
    ├── typography.md                 # Type scales, pairing, loading
    ├── color-and-contrast.md         # OKLCH, palettes, contrast, dark mode
    ├── spatial-design.md             # Spacing, grids, hierarchy, container queries
    ├── motion-design.md              # Duration, easing, staggering, reduced motion
    ├── interaction-design.md         # States, focus, forms, loading, keyboard
    ├── responsive-design.md          # Mobile-first, breakpoints, input detection
    └── ux-writing.md                 # Labels, errors, empty states, voice
```

`design-tokens.md` is the authoritative source for all brand values. The other reference files provide general best-practice guidance from Impeccable — where they conflict with brand tokens, brand tokens always win.

## Usage

Use natural language in Claude chat. The skill triggers automatically when you ask to build, design, or refine frontend work.

### Creating interfaces

> *"Build a pricing page for our product"*
> *"Create a React dashboard showing user metrics"*

### Refining interfaces

Paste or reference your code alongside any of these keywords:

| Command | Purpose |
|---------|---------|
| **audit** | Find issues, generate severity-rated report (no fixes) |
| **critique** | Holistic design review with actionable feedback |
| **polish** | Final quality pass — alignment, states, consistency |
| **animate** | Add purposeful motion and micro-interactions |
| **bolder** | Amplify underwhelming designs within brand constraints |
| **quieter** | Tone down overly intense designs |
| **distill** | Strip unnecessary complexity |
| **colorize** | Add strategic color from the brand palette |
| **clarify** | Improve UX copy, labels, and error messages |
| **adapt** | Make responsive across breakpoints |
| **normalize** | Align with brand design tokens |
| **extract** | Pull out reusable components and tokens |
| **optimize** | Improve loading, rendering, and bundle performance |
| **harden** | Handle edge cases, i18n, overflow, and errors |
| **onboard** | Design onboarding flows and empty states |
| **delight** | Add subtle moments of personality |

Commands can be combined: *"Audit this page, then polish the issues you find."*

## Brand Tokens (Quick Reference)

### Colors

| Token | Hex | Usage |
|-------|-----|-------|
| Midnight Navy | `#0A0349` | Hero backgrounds, navbars, footers, headings |
| Java | `#06b0b2` | CTAs, links, interactive highlights |
| Polo Blue | `#90b8df` | Secondary UI, badges, supporting elements |
| Purple | `#5602ad` | Premium features, special callouts (sparingly) |
| Lime | `#c2f8cb` | Success states, status indicators (sparingly) |
| Pebble Black | `#4a4a4a` | Body text on light backgrounds |
| Mercury Grey | `#eae7e4` | Cards, section backgrounds, subtle dividers |
| White | `#ffffff` | Page backgrounds, text on dark backgrounds |

### Typography

- **Headings**: Muli (Bold/SemiBold, with negative letter-spacing)
- **Body/UI**: Open Sans

### Spacing Scale

`8px` · `16px` · `32px` · `40px` · `80px` — no intermediate values.

### Breakpoints

Desktop `1440px` · Tablet `744px` · Mobile `390px`

See `references/design-tokens.md` for the complete token set including responsive typography scales, color pairing rules, border-radius, and shadow definitions.

## Updating

To update brand tokens, edit `references/design-tokens.md` and re-upload the zip. To update Impeccable guidance, pull the latest from [pbakaus/impeccable](https://github.com/pbakaus/impeccable) and merge into the reference files.

## Credits

- Brand design system: Kneat Solutions
- Design refinement commands and reference material: [Impeccable](https://github.com/pbakaus/impeccable) by Paul Bakaus (Apache 2.0)
