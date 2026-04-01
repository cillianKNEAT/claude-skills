---
name: kneat-pptx
description: "Use this skill any time a .pptx file is involved in any way — as input, output, or both. This includes: creating slide decks, pitch decks, or presentations; reading, parsing, or extracting text from any .pptx file (even if the extracted content will be used elsewhere, like in an email or summary); editing, modifying, or updating existing presentations; combining or splitting slide files; working with templates, layouts, speaker notes, or comments. Trigger whenever the user mentions \"deck,\" \"slides,\" \"presentation,\" or references a .pptx filename, regardless of what they plan to do with the content afterward. If a .pptx file needs to be opened, created, or touched, use this skill. This skill applies Kneat Solutions brand standards (Midnight Navy, Java teal, Polo Blue palette; Muli/Open Sans typography; icon-first visual strategy) to all presentation output."
---

# Kneat PPTX Skill

Branded PowerPoint skill for Kneat Solutions. All presentations created or edited through this skill conform to Kneat brand standards.

## Quick Reference

| Task | Guide |
|------|-------|
| Read/analyze content | `python -m markitdown presentation.pptx` |
| Edit or create from template | Read [editing.md](editing.md) |
| Create from scratch | Read [pptxgenjs.md](pptxgenjs.md) |
| **Brand rules (always read first)** | Read [references/brand-slide-guide.md](references/brand-slide-guide.md) |

---

## Before Starting Any Presentation

1. **Read `references/brand-slide-guide.md`** — load the full brand slide guide before writing any code or editing any XML. Every color, font, and layout decision must conform to this reference.
2. **Read the appropriate technical guide** — [editing.md](editing.md) for template-based work, [pptxgenjs.md](pptxgenjs.md) for from-scratch creation.
3. **Plan slide variety** — map content to the approved layouts in the brand guide. Never repeat the same layout more than twice consecutively.

---

## Reading Content

```bash
# Text extraction
python -m markitdown presentation.pptx

# Visual overview
python scripts/thumbnail.py presentation.pptx

# Raw XML
python scripts/office/unpack.py presentation.pptx unpacked/
```

---

## Editing Workflow

**Read [editing.md](editing.md) for full details.**

1. Analyze template with `thumbnail.py`
2. Unpack → manipulate slides → edit content → clean → pack

---

## Creating from Scratch

**Read [pptxgenjs.md](pptxgenjs.md) for full details.**

Use when no template or reference presentation is available.

---

## Kneat Brand Design Rules

**These rules replace the generic "Design Ideas" in the public pptx skill. Always read `references/brand-slide-guide.md` for the complete reference.**

### Color Palette (Locked)

Do not invent or default to generic colors. Every fill, font color, and accent must come from this table.

| Role | Hex | Token |
|------|-----|-------|
| Dark backgrounds | `0A0349` | Midnight Navy |
| Primary accent / charts | `06B0B2` | Java |
| Secondary accent | `90B8DF` | Polo Blue |
| Tertiary accent | `5602AD` | Purple |
| Body text (light bg) | `4A4A4A` | Pebble Black |
| Cards / subtle bg | `EAE7E4` | Mercury Grey |
| Page background | `F8F8F8` | Off-White |
| Text on dark bg | `FFFFFF` | White |

### Typography

Muli and Open Sans are installed across the Kneat Microsoft tenant. Use the brand fonts directly — not Calibri or Arial.

| Role | Font | Size | Weight |
|------|------|------|--------|
| Slide title | Muli | 36-44pt | Bold |
| Section header | Muli | 20-24pt | Bold |
| Stat numbers | Muli | 60-72pt | Bold |
| Body text | Open Sans | 14-16pt | Regular |
| Captions | Open Sans | 10-12pt | Regular |

### Presentation Structure

Every Kneat deck follows the "sandwich" pattern:

1. **Title slide** — Midnight Navy bg, white text, Kneat logo top-left
2. **Content slides** — White/Off-White bg, varied layouts from the brand guide
3. **Closing slide** — Midnight Navy bg, CTA or "Thank You", Kneat logo

### Visual Strategy: Icons First

Kneat presentations use icons and data visualization as the primary visual element, not stock photography. Use the `react-icons` pipeline documented in [pptxgenjs.md](pptxgenjs.md). When stock images are available in `assets/images/`, they may be used. Do not fetch images from the web unless the user explicitly provides URLs.

### Chart Defaults

Apply these to every chart:

```javascript
const kneatChart = {
  chartColors: ["06B0B2", "90B8DF", "5602AD", "0A0349", "EAE7E4"],
  chartArea: { fill: { color: "FFFFFF" }, roundedCorners: true },
  catAxisLabelColor: "4A4A4A",
  valAxisLabelColor: "4A4A4A",
  catAxisLabelFontFace: "Open Sans",
  valAxisLabelFontFace: "Open Sans",
  valGridLine: { color: "EAE7E4", size: 0.5 },
  catGridLine: { style: "none" },
  showLegend: false,
  dataLabelColor: "0A0349",
  dataLabelFontFace: "Open Sans",
};
```

### Logo

- **Dark slides** (title, closing, dividers): `assets/kneat-logo-reverse.svg` — white logo, top-left, ~1.0" wide
- **Light slides**: Omit logo on content slides unless creating an external pitch deck

### Spacing

- 0.5" minimum margins
- 0.3-0.5" between content blocks
- Leave breathing room — don't fill every inch

### Avoid

- **Don't use colors outside the palette** — no generic blues, greens, or grays
- **Don't use stock photography unless bundled in `assets/images/`** — default to icons + charts
- **Don't default to Arial or Calibri** — use Muli (headings) and Open Sans (body)
- **Don't repeat the same layout** — vary between stat rows, chart slides, tables, and grids
- **Don't center body text** — left-align paragraphs and lists; center only titles and stat numbers
- **Don't use glassmorphism, gradients, or trendy effects** — the brand is clean and authoritative
- **NEVER use accent lines under titles** — hallmark of AI-generated slides
- **Don't use low-contrast elements** — icons AND text need strong contrast against the background
- **Don't place the Kneat logo on every content slide** — title and closing only unless it's a pitch deck
- **Don't forget text box padding** — when aligning lines or shapes with text edges, set `margin: 0` on the text box
- **Don't mix spacing randomly** — choose 0.3" or 0.5" gaps and use consistently
- **Don't style one slide and leave the rest plain** — commit fully throughout

---

## QA (Required)

**Assume there are problems. Your job is to find them.**

First render is almost never correct. Approach QA as a bug hunt, not a confirmation step.

### Content QA

```bash
python -m markitdown output.pptx
```

Check for missing content, typos, wrong order.

**When using templates, check for leftover placeholder text:**

```bash
python -m markitdown output.pptx | grep -iE "\bx{3,}\b|lorem|ipsum|\bTODO|\[insert|this.*(page|slide).*layout"
```

### Visual QA

**⚠️ USE SUBAGENTS** — even for 2-3 slides. Fresh eyes catch what the code author misses.

Convert slides to images (see [Converting to Images](#converting-to-images)), then use this prompt:

```
Visually inspect these slides. Assume there are issues — find them.

Look for:
- Overlapping elements (text through shapes, lines through words, stacked elements)
- Text overflow or cut off at edges/box boundaries
- Decorative lines positioned for single-line text but title wrapped to two lines
- Source citations or footers colliding with content above
- Elements too close (< 0.3" gaps) or cards/sections nearly touching
- Uneven gaps (large empty area in one place, cramped in another)
- Insufficient margin from slide edges (< 0.5")
- Columns or similar elements not aligned consistently
- Low-contrast text (e.g., light gray text on cream-colored background)
- Low-contrast icons (e.g., dark icons on dark backgrounds without a contrasting circle)
- Text boxes too narrow causing excessive wrapping
- Leftover placeholder content

For each slide, list issues or areas of concern, even if minor.

Read and analyze these images — run `ls -1 "$PWD"/slide-*.jpg` and use the exact absolute paths it prints:
1. <absolute-path>/slide-N.jpg — (Expected: [brief description])
2. <absolute-path>/slide-N.jpg — (Expected: [brief description])
...

Report ALL issues found, including minor ones.
```

### Brand QA (Kneat-Specific)

After the standard content and visual QA passes, verify:

- [ ] **Colors**: Every fill, font color, and chart color matches the Kneat palette — no off-brand blues, grays, or greens
- [ ] **Typography**: All headings use Muli, all body/captions use Open Sans — no Calibri, Arial, or other fallbacks
- [ ] **Logo**: White logo on dark slides, absent from content slides (unless pitch deck)
- [ ] **Layout variety**: No more than two consecutive slides share the same layout pattern
- [ ] **Sandwich structure**: Deck opens and closes with Midnight Navy slides
- [ ] **No accent lines under titles**
- [ ] **No stock images unless bundled in `assets/images/`**
- [ ] **Contrast**: No light text on light backgrounds, no Polo Blue or Lime text on white

### Verification Loop

1. Generate slides → Convert to images → Inspect
2. **List issues found** (if none found, look again more critically)
3. Fix issues
4. **Re-verify affected slides** — one fix often creates another problem
5. Repeat until a full pass reveals no new issues

**Do not declare success until completing at least one fix-and-verify cycle.**

---

## Converting to Images

```bash
python scripts/office/soffice.py --headless --convert-to pdf output.pptx
rm -f slide-*.jpg
pdftoppm -jpeg -r 150 output.pdf slide
ls -1 "$PWD"/slide-*.jpg
```

**Pass the absolute paths directly to the view tool.** The `rm` clears stale images from prior runs. After fixes, rerun all four commands — the PDF must be regenerated.

---

## Assets

| File | Purpose |
|------|---------|
| `assets/kneat-logo.svg` | Dark logo for light backgrounds |
| `assets/kneat-logo-reverse.svg` | White logo for Midnight Navy backgrounds |
| `assets/images/` | Stock imagery library (add files here as available) |

---

## Dependencies

- `pip install "markitdown[pptx]"` — text extraction
- `pip install Pillow` — thumbnail grids
- `npm install -g pptxgenjs` — creating from scratch
- `npm install -g react-icons react react-dom sharp` — icon generation
- LibreOffice (`soffice`) — PDF conversion (auto-configured via `scripts/office/soffice.py`)
- Poppler (`pdftoppm`) — PDF to images
