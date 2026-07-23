# Kneat Content Writer — Claude Skill

A collaborative writing partner for Kneat Solutions content. This skill guides the full content lifecycle — from ideation and outlining through research, drafting, and polish — while enforcing Kneat editorial standards at every stage. It also handles short-form LinkedIn and email outreach copy through a separate, lighter-weight workflow.

## What It Does

When you ask Claude to write any content for Kneat, this skill activates and ensures the output meets the brand's quality bar. It enforces American English, Oxford commas, active voice, sentence length limits, correct abbreviation handling, and the full Kneat editorial style guide from the first draft — not as an afterthought.

The skill handles two distinct content types:

- **Long-form content**: blog posts, thought leadership articles, technical white papers, marketing copy, email campaigns, ads, case studies, and internal communications — via the full six-step writing process below.
- **Outreach copy**: LinkedIn messages and outreach emails — sales outreach and follow-ups — via a shorter, dedicated workflow built for concise, prospect-facing messages.

## Installation

1. Download `kneat-content-writer.zip` from this repo
2. Go to **Settings → Skills** in Claude
3. Upload the zip

## Skill Structure

```
kneat-content-writer/
├── SKILL.md                              # Main skill instructions
└── references/
    ├── editorial-standards.md            # Kneat editorial style guide
    └── outreach-guidelines.md            # LinkedIn / email outreach copy rules
```

## Usage

Use natural language in Claude chat. The skill triggers when you ask to write, outline, draft, research, or refine any Kneat content, or to draft outreach copy.

### Starting a long-form piece

> *"Write a blog post about how kneat genie reduces validation cycle times"*
> *"Help me outline a white paper on AI in GxP environments"*
> *"Draft marketing copy for our new CSV automation feature"*

### During the writing process

> *"Research FDA guidance on computer system validation for this section"*
> *"Give me 3 alternative hooks for this intro"*
> *"Review this section before I move on"*

### Requesting outreach copy

> *"Write a first-touch LinkedIn message to a QA director at a mid-size pharma company"*
> *"Draft a sales outreach email for a VP of Quality at a medical device company"*
> *"Write a follow-up email — no reply to the first message yet"*

## Writing Process (Long-Form Content)

The skill follows a structured six-step workflow, adapting depth to fit the scope of the piece:

| Step | What happens |
|------|-------------|
| **1. Understand the brief** | Clarifies topic, audience, goal, format, length, and tone |
| **2. Build the outline** | Collaborates on structure, flags research needs, establishes flow |
| **3. Research** | Searches for credible sources (FDA, ISPE, PDA, Gartner), presents findings with citations |
| **4. Draft section by section** | Writes incrementally, reviews each section for compliance before moving on |
| **5. Strengthen the opening** | Revisits the hook with 2–3 alternatives (data-driven, story, bold claim) |
| **6. Final compliance check** | Runs mandatory checklist — non-skippable before delivery |

## Outreach Copy Workflow (LinkedIn / Email)

A separate, shorter workflow for prospect-facing messages — it does not run the outline/research/section-by-section process above:

| Step | What happens |
|------|-------------|
| **1. Clarify** | Channel (LinkedIn or email), stage (first-touch or follow-up), recipient role/industry/context, and personalization angle |
| **2. Draft** | Written per channel and stage against the full rule set in `references/outreach-guidelines.md` — problem → measurable impact → Kneat's relevance → conversation, with CTA and tone rules applied |
| **3. Self-check** | Runs the Quick Self-Check checklist from `outreach-guidelines.md` before delivery, replacing the long-form Final Compliance Check |
| **4. Deliver** | Inline in chat by default; a file is offered only if requested or if comparing multiple variants |

Key rules baked into this workflow: Kneat is mentioned only after the challenge and its relevance are established; at most one proof point per message; no time/meeting ask on a first touch; exactly one CTA and one question per message; and no invented company details — if there isn't enough information to personalize, the skill defaults to a strong industry-specific message rather than fabricating specifics.

## Built-in Capabilities

| Capability | Description |
|------------|-------------|
| **Research assistance** | Finds and cites credible industry sources, regulatory data, and analyst insights |
| **Hook improvement** | Generates alternative openings with different approaches and explains why each works |
| **Section feedback** | Reviews each section for clarity, flow, evidence, and editorial compliance |
| **Voice preservation** | Adapts to individual author style within Kneat brand parameters |
| **Citation management** | Maintains numbered references or inline citations per user preference |
| **Outreach copy** | Drafts LinkedIn/email sales outreach and follow-ups against a dedicated rule set, with its own self-check |

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

## Outreach Copy Standards (Quick Reference)

These rules apply on top of the editorial standards above, specifically for LinkedIn messages and outreach emails:

| Rule | Standard |
|------|----------|
| Length | Max 200 words (first-touch); 2–4 lines (follow-ups); LinkedIn shorter than email |
| Opening | Recipient's problem/context — never a Kneat introduction or "Hope you are doing well" |
| Kneat mention | Only after the challenge and its relevance are established |
| Impact | Challenge tied to measurable impact (time, cost, compliance risk, speed to market, audit readiness) |
| Proof points | One maximum — customer example, measurable outcome, or industry trend |
| Subject line | 3–5 words, relevant, curiosity-driven, never clickbait (email only) |
| CTA | Exactly one, one question — no time/meeting ask on a first-touch message |
| Follow-ups | No repeated value proposition; gentle reminder tone; no "checking in" or "circling back" |
| Personalization | Grounded in provided or public information only — never invented |

The complete outreach rules and self-check checklist live in `references/outreach-guidelines.md`.

## Relationship to Other Skills

| Skill | When to use |
|-------|-------------|
| **kneat-content-writer** (this skill) | Creating new content from scratch — long-form or outreach copy |
| **kneat-content-editor** | Reviewing existing documents against editorial standards |
| **branded-frontend** | Rendering content as a web page or UI component with Kneat visual identity |

## Updating

To update editorial standards, edit `references/editorial-standards.md` and re-upload the zip.
To update outreach copy rules, edit `references/outreach-guidelines.md` and re-upload the zip.
All future writing sessions will use the updated rules.
