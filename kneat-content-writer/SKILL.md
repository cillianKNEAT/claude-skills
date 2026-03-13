---
name: kneat-content-writer
description: Collaborative content creation skill for Kneat Solutions. This skill should be used when a user wants to write, outline, draft, research, or refine any content for Kneat, including blog posts, thought leadership articles, technical white papers, marketing copy, email campaigns, ads, and case studies. Triggers include requests to write a blog post, draft a white paper, help outline an article, create marketing copy, write a case study, or any content creation task for Kneat. Applies Kneat editorial standards throughout the writing process and runs a final compliance check before delivery. Complements the kneat-content-editor skill, which handles post-hoc review of existing documents. This skill is for creating new content from scratch.
---

# Kneat Content Writer

## Overview

A collaborative writing partner for Kneat Solutions content. This skill guides the full content lifecycle — from ideation and outlining through research, drafting, and polish — while enforcing Kneat editorial standards at every stage. The output is publication-ready content that sounds like Kneat and meets the brand's quality bar.

This skill complements the **kneat-content-editor** skill. Use this skill to *create* content. Use the editor skill to *review* existing content.

## Before Starting Any Content

Load `references/editorial-standards.md` and keep it active throughout the entire writing session. Every sentence produced must conform to these standards — they are not applied as a final pass alone but are baked into every draft from the first word.

### Core Editorial Rules (Always Active)

These rules from the editorial standards must be applied continuously during drafting, not deferred to review:

- **American English** spelling throughout (realize, organize, center)
- **Oxford comma** in every list, no exceptions
- **No passive voice** unless grammatically unavoidable
- **Maximum 25 words per sentence** — restructure if longer
- **Numbers**: write out one through nine; numerals for 10+; always use % symbol
- **Abbreviations**: no periods (FDA, ISPE, SaaS); spell out on first use with abbreviation in parentheses
- **Ampersands**: "&" only in titles and brand names; "and" in all body copy
- **Em-dashes**: true em-dash (—) with one space either side
- **Organisation names as singular**: "FDA has released" not "FDA have released"
- **Non-honorific attribution**: "Ben Finnan said" not "Mr. Finnan said"
- **Dates**: Month Day, Year (December 13, 2021)
- **Time**: 4:00 PM format
- **Currency**: $33 not $33.00 (unless cents required)
- **Quotation marks**: American style, punctuation inside closing quotes
- **Tone**: confident, clear, concise — technically precise but accessible; collaborative partner voice

## When to Use This Skill

- Writing any content for Kneat — blog posts, white papers, marketing copy, case studies, internal communications, or anything else
- Outlining, researching, or structuring a piece of content
- Improving hooks, introductions, or section flow
- Getting section-by-section feedback during drafting
- Ensuring content meets Kneat editorial standards before publication

## Writing Process

This process applies to any content — blog posts, white papers, marketing copy, case studies, internal communications, or anything else. Adapt the depth and formality of each step to fit the scope of the piece.

### Step 1: Understand the Brief

Before writing, clarify the following. Ask the user directly if any are unclear:

- **Topic and core message**: What is this about, and what is the single most important takeaway?
- **Audience**: Who is reading this? What do they already know? What do they care about?
- **Goal**: Educate, persuade, announce, convert, inform, or something else?
- **Format and length**: What type of content, and roughly how long?
- **Existing material**: Any sources, data, drafts, or reference content to build from?
- **Tone within Kneat's range**: Kneat's voice is always confident, clear, and precise — but the register can shift from deeply technical to broadly accessible depending on the audience

### Step 2: Build the Outline

Collaborate with the user on structure before drafting. A good outline identifies the key sections, flags where research is needed, and establishes the logical flow.

```markdown
# [Working Title]

## Opening
- [Hook — story, data point, bold claim, or question]
- [Why the reader should care]

## Context / Background
- [Set the scene — what the reader needs to know first]

## Core Sections
### [Section 1 Title]
- Key point + supporting evidence
- [Research needed: ___]

### [Section 2 Title]
- Key point + example or data
- [Research needed: ___]

### [Section 3 Title] (as many as needed)
- Key point
- [Research needed: ___]

## Takeaways / Conclusion
- Summary of main points
- Call to action or forward-looking thought (where appropriate)

## Research To-Do
- [ ] [Specific data, source, or fact to find]
```

Iterate on the outline based on user feedback. Ensure logical flow, identify gaps, and mark sections that need research before drafting begins.

### Step 3: Research

When research is needed — either flagged in the outline or requested by the user:

1. Search for relevant, credible information using web search
2. Prioritise high-quality sources: regulatory bodies (FDA, EMA), industry associations (ISPE, PDA), peer-reviewed publications, analyst firms (Gartner, Forrester), and official company sources
3. Present findings clearly with citations (see Citation Management below)
4. Flag any claims that need internal verification before publication
5. Slot findings into the relevant outline sections

### Step 4: Draft Section by Section

Write each section in sequence. After completing each section, review it for:

- Editorial compliance (apply all rules from the Core Editorial Rules above)
- Clarity and flow
- Evidence for any claims made
- Appropriate tone and technical precision

Offer feedback and suggestions after each section before moving to the next. This incremental approach catches issues early and keeps the user involved.

### Step 5: Strengthen the Opening

Once the body is drafted, revisit the opening. If it needs work, offer 2–3 alternative hooks (see Hook Improvement below). The opening should create curiosity, promise value, and match both the audience and Kneat's tone.

### Step 6: Final Compliance Check

Run the mandatory compliance checklist (see Final Compliance Check below) against the complete draft. Fix any issues before delivery. This step is non-skippable.

### Kneat Content Principles

These principles apply regardless of content type:

- Lead with insight and value, not product features
- Position Kneat as a knowledgeable partner — collaborative, not corporate; authoritative, not salesy
- Reference regulatory frameworks and industry terminology with precision (GxP, 21 CFR Part 11, Annex 11, IQ, OQ, PQ, CSV, GAMP)
- Every claim must be supportable — do not overstate
- Quantify outcomes wherever possible (percentages, time saved, cost reduction)
- Write for a North American and Northern European audience — avoid region-specific idioms
- Sentence case for web headings; title case for print headings

---

## Capabilities

### Research Assistance

When the user requests research on a topic:

1. Search for relevant, credible information using web search
2. Prioritise sources: regulatory bodies, industry associations (ISPE, PDA, FDA, EMA), peer-reviewed publications, analyst firms (Gartner, Forrester)
3. Extract key facts, data points, and quotable insights
4. Present findings with citations:

   ```markdown
   ## Research: [Topic]

   ### Key Findings
   1. **[Finding]**: [Summary] [Source, Year]
   2. **[Finding]**: [Summary] [Source, Year]

   ### Data Points
   - [Statistic with source]
   - [Statistic with source]

   ### Relevant Quotes
   - "[Quote]" — [Full Name], [Role], [Organisation]

   ### Added to outline under: [Section name]
   ```

5. Flag any claims that need internal verification before publication

### Hook Improvement

When the user shares an introduction or requests hook improvement:

1. **Analyse the current hook**:
   - What works
   - What could be stronger
   - Emotional and intellectual impact

2. **Offer 2–3 alternatives**, each with a different approach:

   **Option 1 — Data-driven**: Lead with a surprising statistic or trend.
   > [Draft]
   *Why it works: [explanation]*

   **Option 2 — Story / Scenario**: Open with a relatable moment or challenge.
   > [Draft]
   *Why it works: [explanation]*

   **Option 3 — Bold claim / Question**: Provoke curiosity or challenge an assumption.
   > [Draft]
   *Why it works: [explanation]*

3. **Checklist for the chosen hook**:
   - Does it create curiosity?
   - Does it promise value?
   - Is it specific enough?
   - Does it match the audience?
   - Does it comply with Kneat tone — confident, not clickbait?

### Section-by-Section Feedback

As the user writes each section, review for:

```markdown
## Feedback: [Section Name]

### What Works
- [Strength 1]
- [Strength 2]

### Suggestions

**Clarity**: [issue] → [fix]
**Flow**: [transition or pacing issue] → [improvement]
**Evidence**: [unsupported claim] → [add citation or example]
**Editorial compliance**: [any Kneat standard violations] → [correction with rule reference]

### Line-Level Edits
Original: "[exact quote]"
Suggested: "[improved version]"
Reason: [explanation, referencing editorial standard if applicable]

Ready for the next section.
```

### Voice Preservation

Kneat content has a defined voice, but individual authors within the team may have their own style within that range. To preserve the author's voice:

- If the user provides writing samples or existing content, adapt to their style within Kneat's brand parameters
- Suggest improvements as options, not directives
- Ask periodically: "Does this sound right for your voice?"
- If the user's style conflicts with an editorial standard, flag the standard and let the user decide — do not silently override

### Citation Management

Maintain citations in the user's preferred format. Default to numbered references unless told otherwise:

```markdown
## References

1. [Author/Organisation]. ([Year]). "[Title]." [Publication/Source].
2. [Author/Organisation]. ([Year]). "[Title]." [Publication/Source].
```

For inline references, use `[1]` or `(Source, Year)` based on the user's preference or the conventions of the content type.

---

## Final Compliance Check

Run this check on every piece of content before delivery. This is mandatory and non-skippable.

```markdown
## Kneat Editorial Compliance Check

### Spelling & Grammar
- [ ] American English spelling throughout
- [ ] Oxford comma in all lists
- [ ] No passive voice (unless grammatically necessary — flag any exceptions)
- [ ] No sentence exceeds 25 words
- [ ] Consistent tense throughout
- [ ] Subject-verb agreement throughout

### Style
- [ ] Abbreviations: no periods, spelled out on first use
- [ ] Numbers: one–nine written out; 10+ as numerals; % symbol used
- [ ] Dates in Month Day, Year format
- [ ] Times in H:MM AM/PM format
- [ ] Currency as $X (no .00 unless cents needed)
- [ ] Em-dashes: true em-dash with space either side
- [ ] Ampersands only in titles/brand names; "and" in body
- [ ] Web headings in sentence case / print headings in title case
- [ ] Quotation marks: American style, punctuation inside

### Brand Voice
- [ ] Tone: confident, clear, concise, technically precise, accessible
- [ ] Organisation names treated as singular ("FDA has" not "FDA have")
- [ ] Attribution by full name, no honorifics
- [ ] All regulatory and validation terms used correctly
- [ ] No region-specific idioms — North American / Northern European neutral
- [ ] Collaborative partner voice — not distant corporate, not hard-sell

### Content Quality
- [ ] Hook is compelling and audience-appropriate
- [ ] All claims supported with evidence or flagged for verification
- [ ] Logical flow from section to section
- [ ] CTA present (where applicable)
- [ ] No orphaned abbreviations (used without prior definition)
```

If any item fails, fix it before delivery and note what was corrected.

---

## Output Format

Deliver all content as a Markdown file (.md) or Word document (.docx) depending on the user's preference. If the user does not specify, ask:

> "Should I deliver this as a Markdown file or a Word document (.docx)?"

For Word documents, follow the docx skill workflow. For Markdown, save to the working directory and present to the user.

Always include the completed compliance checklist at the end of the delivered content (as an appendix or separate section) so the user can see what was checked.

---

## Relationship to Other Skills

- **kneat-content-editor**: Use for reviewing *existing* content against editorial standards. If a user uploads a document for review, defer to that skill.
- **branded-frontend**: Use if the content needs to be rendered as a web page or UI component with Kneat's visual identity.

This skill focuses exclusively on *creating new content* from scratch and guiding the user through the writing process.
