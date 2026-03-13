# Design Tokens Reference

This file contains the complete set of design tokens extracted from the brand's Figma design system. Use these values exactly when building any frontend interface.

## CSS Custom Properties

Always include this block at the root of every page or component:

```css
@import url('https://fonts.googleapis.com/css2?family=Muli:ital,wght@0,400;0,600;0,700;1,400&family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;1,400&display=swap');

:root {
  /* Brand Colors */
  --color-midnight-navy: #0A0349;
  --color-polo-blue: #90b8df;
  --color-java: #06b0b2;
  --color-pebble-black: #4a4a4a;
  --color-mercury-grey: #eae7e4;
  --color-white: #ffffff;
  --color-purple: #5602ad;
  --color-lime: #c2f8cb;

  /* Spacing Scale */
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 32px;
  --spacing-xl: 40px;
  --spacing-2xl: 80px;
}
```

## Color Palette

| Token Name       | Hex       | Role / Usage Notes                                           |
|------------------|-----------|--------------------------------------------------------------|
| Midnight Navy    | #0A0349   | Primary brand color. Use for headings, hero backgrounds, navbars, footers. Dark, authoritative. |
| Polo Blue        | #90b8df   | Secondary accent. Use for highlights, badges, interactive element backgrounds, supporting UI. |
| Java             | #06b0b2   | Teal accent. Use for CTAs, links, success states, visual emphasis. High-energy but professional. |
| Pebble Black     | #4a4a4a   | Default body text color. Use for all paragraph and UI text.  |
| Mercury Grey     | #eae7e4   | Light background. Use for cards, section backgrounds, subtle dividers. Warm neutral. |
| White            | #ffffff   | Page background, card surfaces, text on dark backgrounds.    |
| Purple           | #5602ad   | Accent / feature highlight. Use sparingly for differentiation, premium features, or special callouts. |
| Lime             | #c2f8cb   | Accent / success highlight. Use for success states, badges, or small pops of energy. |

### Color Pairing Rules

- Primary text on light backgrounds: Pebble Black (#4a4a4a)
- Primary text on dark backgrounds: White (#ffffff)
- Headings on light backgrounds: Midnight Navy (#0A0349)
- Primary CTA: Java (#06b0b2) background with White text
- Secondary CTA: Polo Blue (#90b8df) background with White text
- Hover/focus states: darken Java or Polo Blue by 10-15%
- Never place Polo Blue text on White (insufficient contrast)
- Never place Lime text on White (insufficient contrast)
- Purple and Java should not be placed adjacent without a neutral separator

## Typography

### Font Families

- **Display / Headings**: Muli (Google Fonts)
- **Body / UI**: Open Sans (Google Fonts)

### Heading Scale (Desktop)

| Element | Font       | Weight       | Size  | Line Height | Letter Spacing |
|---------|------------|--------------|-------|-------------|----------------|
| H1      | Muli       | Bold (700)   | 60px  | 66px (110%) | -2%            |
| H2      | Muli       | Bold (700)   | 48px  | 52px (108%) | -1%            |
| H3      | Muli       | Bold (700)   | 32px  | 36px (112%) | -1%            |
| H4      | Muli       | SemiBold(600)| 30px  | 30px (100%) | -1%            |
| H5      | Muli       | Regular (400)| 23px  | 26.5px(115%)| -1.5%          |

### Body Scale

| Element     | Font      | Weight         | Size   | Line Height   | Letter Spacing | Notes           |
|-------------|-----------|----------------|--------|---------------|----------------|-----------------|
| Sub head    | Open Sans | SemiBold (600) | 20px   | 29px (145%)   | -1%            |                 |
| Body        | Open Sans | SemiBold (600) | 16.5px | 22.3px (135%) | -1%            |                 |
| Breadcrumb  | Open Sans | SemiBold (600) | 16px   | 23.2px (145%) | -1%            | Italic          |
| CTA         | Open Sans | Regular (400)  | 15px   | 18px (120%)   | 0%             |                 |
| Description | Open Sans | SemiBold (600) | 14px   | 20.3px (145%) | 0%             |                 |
| Legal       | Open Sans | SemiBold (600) | 12.5px | 16.9px (135%) | -1%            |                 |
| Label       | Open Sans | Bold (700)     | 12px   | 14.4px (120%) | 3%             | UPPERCASE       |

### Available Font Weights

**Muli**: 400 (Regular), 600 (SemiBold), 700 (Bold), 400i (Italic)
**Open Sans**: 300 (Light), 400 (Regular), 600 (SemiBold), 700 (Bold), 400i (Italic)

## Responsive Breakpoints

| Breakpoint | Width  |
|------------|--------|
| Desktop    | 1440px |
| Tablet     | 744px  |
| Mobile     | 390px  |

### Responsive Typography Sizing

| Element | Desktop | Tablet | Mobile |
|---------|---------|--------|--------|
| H1      | 60px    | 48px   | 32px   |
| H2      | 48px    | 32px   | 26px   |
| H3      | 32px    | 26px   | 24px   |
| H4      | 30px    | 26px   | 23px   |
| H5      | 23px    | 24px   | 21px   |

## Spacing Scale

Use only these spacing values. Do not invent intermediate values.

| Token | Value | Usage                                          |
|-------|-------|-------------------------------------------------|
| sm    | 8px   | Tight gaps: icon-to-text, inline elements       |
| md    | 16px  | Standard padding, gaps between related elements |
| lg    | 32px  | Section padding, card padding, group spacing    |
| xl    | 40px  | Large section margins                           |
| 2xl   | 80px  | Hero padding, major section separators          |

## Common UI Patterns

### Border Radius
- Cards and containers: 8px
- Buttons and badges: 4px
- Pill shapes (tags, status indicators): 9999px

### Shadows
- Cards: `0 2px 4px rgba(0, 0, 0, 0.05)`
- Elevated elements: `0 4px 12px rgba(10, 3, 73, 0.1)` (uses Midnight Navy tint)
- Modals: `0 8px 24px rgba(10, 3, 73, 0.15)`

### Default Body Styles
```css
body {
  font-family: 'Open Sans', sans-serif;
  line-height: 1.5;
  color: var(--color-pebble-black);
  background-color: #f8f8f8;
}
```
