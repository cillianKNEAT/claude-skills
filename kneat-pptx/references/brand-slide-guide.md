# Kneat Brand Slide Guide

Authoritative reference for Kneat-branded PowerPoint presentations. All values here override the generic "Design Ideas" section in SKILL.md.

---

## Color Palette (Locked)

Do not invent colors. Every fill, font color, and accent must come from this table.

| Token            | Hex (no #) | PowerPoint Role                                                   |
|------------------|------------|-------------------------------------------------------------------|
| Midnight Navy    | `0A0349`   | Title slide bg, closing slide bg, section divider bg, dark cards  |
| Polo Blue        | `90B8DF`   | Secondary chart series, badges, supporting accents                |
| Java (Teal)      | `06B0B2`   | Primary chart series, CTA buttons, stat callout numbers, icons    |
| Purple           | `5602AD`   | Tertiary chart series, premium feature callouts (use sparingly)   |
| Lime             | `C2F8CB`   | Positive indicator dots, small success highlights (use sparingly) |
| Pebble Black     | `4A4A4A`   | Body text on light slides                                         |
| Mercury Grey     | `EAE7E4`   | Light card fills, alternate section backgrounds, subtle dividers  |
| White            | `FFFFFF`   | Light slide backgrounds, text on dark backgrounds                 |
| Off-White        | `F8F8F8`   | Full-slide background for content slides                          |

### Chart Color Sequence

When multiple series or segments are needed, use in this order:
1. Java `06B0B2`
2. Polo Blue `90B8DF`
3. Purple `5602AD`
4. Midnight Navy `0A0349`
5. Mercury Grey `EAE7E4`

### Color Pairing Rules

- Body text on light backgrounds: Pebble Black (`4A4A4A`)
- Body text on Midnight Navy: White (`FFFFFF`)
- Headings on light backgrounds: Midnight Navy (`0A0349`)
- Headings on Midnight Navy: White (`FFFFFF`)
- Stat callout numbers: Java (`06B0B2`) on light backgrounds, White on dark
- Never place Polo Blue text on White (insufficient contrast)
- Never place Lime text on White (insufficient contrast)
- Purple and Java should not be placed adjacent without a neutral separator

---

## Typography

### Font Families

Kneat uses the same font families in presentations as on the web:

- **Headings / Titles / Stat Numbers**: Muli
- **Body / Captions / Labels / Chart Axes**: Open Sans

These fonts are installed across the Kneat Microsoft tenant. When PptxGenJS writes `fontFace: "Muli"` into the .pptx XML, PowerPoint renders it correctly on any Kneat machine.

**External sharing note:** Recipients outside Kneat may not have Muli or Open Sans installed. PowerPoint will substitute automatically (typically to Calibri). If a deck is specifically being built for external distribution, consider embedding the fonts in PowerPoint after generation: File → Options → Save → "Embed fonts in the file."

### Font Mapping

| Role              | Font Face   | Weight           | Notes                                   |
|-------------------|-------------|------------------|-----------------------------------------|
| Slide titles      | Muli        | Bold (700)       | 36-44pt                                 |
| Section headers   | Muli        | Bold (700)       | 20-24pt                                 |
| Stat numbers      | Muli        | Bold (700)       | 60-72pt                                 |
| Subtitle          | Open Sans   | SemiBold (600)   | 18-20pt                                 |
| Body text         | Open Sans   | Regular (400)    | 14-16pt                                 |
| Captions / labels | Open Sans   | Regular (400)    | 10-12pt, Pebble Black                   |
| Footer / legal    | Open Sans   | Regular (400)    | 8-10pt                                  |
| Chart axis labels | Open Sans   | Regular (400)    | 10pt                                    |
| Data labels       | Open Sans   | Regular (400)    | 10pt                                    |

### Available Weights

**Muli**: 400 (Regular), 600 (SemiBold), 700 (Bold), 400i (Italic)
**Open Sans**: 300 (Light), 400 (Regular), 600 (SemiBold), 700 (Bold), 400i (Italic)

### Size Scale

| Element          | Size     | Font / Weight       | Color on light    | Color on dark |
|------------------|----------|---------------------|-------------------|---------------|
| Slide title      | 36-44pt  | Muli Bold           | Midnight `0A0349` | White         |
| Subtitle         | 18-20pt  | Open Sans SemiBold  | Pebble `4A4A4A`   | White 80%     |
| Section header   | 20-24pt  | Muli Bold           | Midnight `0A0349` | White         |
| Body text        | 14-16pt  | Open Sans Regular   | Pebble `4A4A4A`   | White         |
| Stat number      | 60-72pt  | Muli Bold           | Java `06B0B2`     | White         |
| Stat label       | 12-14pt  | Open Sans Regular   | Pebble `4A4A4A`   | White 80%     |
| Caption          | 10-12pt  | Open Sans Regular   | Pebble `4A4A4A`   | White 60%     |

---

## Slide Structure

### Presentation Sandwich

Every Kneat deck follows this structure:

1. **Title slide** — Midnight Navy background, white text, Kneat logo top-left
2. **Content slides** — White or Off-White background, Midnight Navy headings
3. **Closing slide** — Midnight Navy background, "Thank You" or CTA, Kneat logo

### Kneat Logo Placement

- **Dark slides**: Use `assets/kneat-logo-reverse.svg` (white logo), top-left, approximately 1.0" wide
- **Light slides**: Use `assets/kneat-logo.svg` (dark logo) — only when explicitly needed (e.g., external-facing pitch decks). Most internal content slides omit the logo.

### Margins and Spacing

- 0.5" minimum margins on all sides
- 0.3-0.5" between content blocks (be consistent within a deck)
- Leave breathing room — do not fill every inch of the slide

---

## Approved Slide Layouts

These patterns are derived from existing Kneat presentations and reflect the brand's visual language.

### 1. Title Slide
- Full Midnight Navy background
- "Kneat" wordmark top-left (white)
- Title: 36-44pt bold white, left-aligned
- Subtitle: 16-18pt white, left-aligned below title
- Optional metadata line (date, respondent count) at bottom-left, 10-12pt white

### 2. Stat Callout Row ("At a Glance")
- White/Off-White background
- Title centered at top, Midnight Navy
- 3-4 stat blocks in a horizontal row, evenly spaced
- Each stat: icon in a colored circle (Java, Purple, Polo Blue) + large number (36-48pt bold Java) + short description (12pt Pebble Black)

### 3. Horizontal Bar Chart + Insight
- White background
- Title top-left, Midnight Navy bold
- Horizontal bar chart occupying ~60% width on the left
- Chart colors: Java primary, Polo Blue secondary
- "Key Takeaway" text block on the right side with bold header and body text

### 4. Dual Chart (Side by Side)
- White background
- Title centered at top
- Two charts or two visual blocks side by side
- Consistent sizing — both halves should feel balanced
- Use donut/pie charts, bar charts, or stat grids

### 5. Two-Column Table ("Challenges")
- White background with thin Mercury Grey bottom bar
- Title top-left, Midnight Navy bold
- Two columns: "Category A" and "Category B" with colored headers (Java, Purple)
- Rows with item name + count, aligned with consistent spacing
- Summary insight in a Mercury Grey callout bar at the bottom

### 6. Quote Grid ("In Their Own Words")
- White background
- Title top-left, Midnight Navy bold
- 2x3 or 2x2 grid of cards
- Each card: Mercury Grey or light-tinted background, bold role label (Java), quote or need description below
- Cards should have consistent padding and spacing

### 7. Numbered Steps ("Next Steps" / "Recommendations")
- Midnight Navy left sidebar (~30% width) with white title text
- White main area with numbered items
- Each item: number in a Java circle, bold title, description text below
- Vertical spacing between items should be generous

### 8. Section Divider
- Full Midnight Navy background
- Section title centered, large white bold text
- Optional subtitle or section number below

### 9. Closing / Thank You
- Full Midnight Navy background
- "Kneat" wordmark top-left (white)
- "Thank You!" in large bold white text
- Contact info or next-steps prompt below in smaller white text

---

## Visual Elements

### Icons (Primary Visual Strategy)

Kneat presentations prefer icons and data visualization over stock photography. Use the `react-icons` pipeline from [pptxgenjs.md](../pptxgenjs.md) to generate icons.

- Render icons as PNG via `react-icons` + `sharp` at 256px
- Place icons in small colored circles (Java, Purple, Polo Blue fills)
- Icon color: White on colored circles, or Java/Midnight Navy on white backgrounds
- Recommended libraries: `react-icons/fa` (Font Awesome), `react-icons/hi` (Heroicons)

### Stock Imagery

Stock images are stored in `assets/images/` when available. Use only bundled images — do not fetch from the web during deck creation unless the user explicitly provides URLs or paths.

When no stock imagery is available, default to the icon-first approach. The brand's visual identity is carried by color, typography, and data — not photography.

### Charts

Apply these overrides to all PptxGenJS chart options:

```javascript
// Kneat chart defaults
const kneatChartDefaults = {
  chartColors: ["06B0B2", "90B8DF", "5602AD", "0A0349", "EAE7E4"],
  chartArea: { fill: { color: "FFFFFF" }, roundedCorners: true },
  catAxisLabelColor: "4A4A4A",
  valAxisLabelColor: "4A4A4A",
  catAxisLabelFontSize: 10,
  valAxisLabelFontSize: 10,
  catAxisLabelFontFace: "Open Sans",
  valAxisLabelFontFace: "Open Sans",
  valGridLine: { color: "EAE7E4", size: 0.5 },
  catGridLine: { style: "none" },
  showLegend: false,
  dataLabelColor: "0A0349",
  dataLabelFontSize: 10,
  dataLabelFontFace: "Open Sans",
};
```

### Shapes and Decorative Elements

- Cards: `RECTANGLE` with Mercury Grey fill (`EAE7E4`) — no rounded corners with accent overlays
- Accent bars: thin Java (`06B0B2`) rectangles, 0.06-0.08" wide, left edge of cards
- Divider lines: Mercury Grey (`EAE7E4`), 0.5pt weight
- Shadows on cards: `{ type: "outer", color: "000000", blur: 4, offset: 2, angle: 135, opacity: 0.05 }`
- **Never use accent lines under titles** — use whitespace or background color changes

---

## Avoid (Kneat-Specific)

- **Do not use colors outside the palette** — no generic blues, greens, or grays
- **Do not use stock photography unless bundled** — default to icons + charts
- **Do not default to Arial, Calibri, or other system fonts** — use Muli (headings) and Open Sans (body)
- **Do not repeat the same layout** — vary between stat rows, chart slides, tables, and grids
- **Do not center body text** — left-align paragraphs and lists; center only titles and stat numbers
- **Do not use glassmorphism, gradients, or trendy effects** — the brand is clean, professional, and authoritative
- **Do not use accent lines under titles** — hallmark of AI-generated slides
- **Do not use low-contrast elements** — test all text against its background
- **Do not place Kneat logo on every content slide** — title and closing only, unless it's a pitch deck
