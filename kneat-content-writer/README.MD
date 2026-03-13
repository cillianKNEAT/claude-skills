# Kneat Content Writer — Claude Skill

A collaborative writing partner for Kneat Solutions content. This skill guides the full content lifecycle — from ideation and outlining through research, drafting, and polish — while enforcing Kneat editorial standards at every stage.

## What It Does

When you ask Claude to write any content for Kneat, this skill activates and ensures the output meets the brand's quality bar. It enforces American English, Oxford commas, active voice, sentence length limits, correct abbreviation handling, and the full Kneat editorial style guide from the first draft — not as an afterthought.

The skill handles blog posts, thought leadership articles, technical white papers, marketing copy, email campaigns, ads, case studies, and internal communications.

## Installation

1. Download `kneat-content-writer.zip` from this repo
2. Go to **Settings → Skills** in Claude
3. Upload the zip

## Skill Structure

```
kneat-content-writer/
├── SKILL.md                              # Main skill instructions
└── references/
    └── editorial-standards.md            # Kneat editorial style guide
```

## Usage

Use natural language in Claude chat. The skill triggers when you ask to write, outline, draft, research, or refine any Kneat content.

### Starting a piece

> *"Write a blog post about how kneat genie reduces validation cycle times"*
> *"Help me outline a white paper on AI in GxP environments"*
> *"Draft marketing copy for our new CSV automation feature"*

### During the writing process

> *"Research FDA guidance on computer system validation for this section"*
> *"Give me 3 alternative hooks for this intro"*
> *"Review this section before I move on"*

## Writing Process

The skill follows a structured six-step workflow, adapting depth to fit the scope of the piece:

| Step | What happens |
|------|-------------|
| **1. Understand the brief** | Clarifies topic, audience, goal, format, length, and tone |
| **2. Build the outline** | Collaborates on structure, flags research needs, establishes flow |
| **3. Research** | Searches for credible sources (FDA, ISPE, PDA, Gartner), presents findings with citations |
| **4. Draft section by section** | Writes incrementally, reviews each section for compliance before moving on |
| **5. Strengthen the opening** | Revisits the hook with 2–3 alternatives (data-driven, story, bold claim) |
| **6. Final compliance check** | Runs mandatory checklist — non-skippable before delivery |

## Built-in Capabilities

| Capability | Description |
|------------|-------------|
| **Research assistance** | Finds and cites credible industry sources, regulatory data, and analyst insights |
| **Hook improvement** | Generates alternative openings with different approaches and explains why each works |
| **Section feedback** | Reviews each section for clarity, flow, evidence, and editorial compliance |
| **Voice preservation** | Adapts to individual author style within Kneat brand parameters |
| **Citation management** | Maintains numbered references or inline citations per user preference |

## Editorial Standards (Quick Reference)

These rules are enforced throughout every draft, not just at final review:

| Rule | Standard |
|------|----------|
| Spelling | American English (realize, organize, center) |
| Lists | Oxford comma, always |
| Voice | Active voice unless grammatically unavoidable |
| Sentences | 25 words maximum |
| Numbers | Write out one–nine; numerals for 10+; use % symbol |
| Abbreviations | No periods (FDA, ISPE, SaaS); spell out on first use |
| Ampersands | "&" in titles and brand names only; "and" in body copy |
| Em-dashes | True em-dash (—) with one space either side |
| Organisations | Singular ("FDA has released" not "FDA have released") |
| Attribution | Full name, no honorifics ("Ben Finnan said") |
| Dates | Month Day, Year (December 13, 2021) |
| Time | 4:00 PM format |
| Currency | $33 not $33.00 (unless cents needed) |
| Quotation marks | American style, punctuation inside closing quotes |
| Web headings | Sentence case |
| Print headings | Title case |

The complete editorial standards live in `references/editorial-standards.md`.

## Relationship to Other Skills

| Skill | When to use |
|-------|-------------|
| **kneat-content-writer** (this skill) | Creating new content from scratch |
| **kneat-content-editor** | Reviewing existing documents against editorial standards |
| **branded-frontend** | Rendering content as a web page or UI component with Kneat visual identity |

## Updating

To update editorial standards, edit `references/editorial-standards.md` and re-upload the zip. All future writing sessions will use the updated rules.
