---
name: kneat-content-editor
description: Invoke when user says "Kneat S&G review", "Kneat S and G review", "Kneat style and grammar review", or close variants. Reviews content against Kneat Solutions editorial standards for spelling, grammar, style, and brand voice. This skill is for reviewing existing content only. If the user wants to create new content from scratch, defer to the kneat-content-writer skill.
---

# Kneat Content Editor

## Overview

To review documents against Kneat Solutions' editorial standards and produce a structured analysis report. This skill applies to any written content produced by or for Kneat Solutions, including marketing copy, technical documentation, web content, and internal communications.

Detailed editorial standards are in `references/editorial-standards.md`. Load that file before beginning any review.

## When to Use This Skill

- A user says "Kneat S&G review", "Kneat S and G review", "Kneat style and grammar review", or a close variant
- A user pastes or uploads a document for editorial review against Kneat standards

## Accepted Input Formats

Users may provide content in any of the following ways:

- **Uploaded .docx file** — full tracked changes and comments output available (see Output Modes below)
- **Uploaded .pdf, .txt, .md, or similar** — inline report only
- **Pasted text** — inline report only

When a file is uploaded, extract all readable text before beginning the review. If the file cannot be read or parsed, inform the user and ask them to paste the content as text instead.

Do not ask the user to clarify the input format — accept whatever is provided and proceed directly to the review.

## Output Modes

### When input is a .docx file — ask the user which output they prefer:

> "I can return this as:
> **(A) An inline review report** — issues listed with explanations, or
> **(B) A reviewed .docx file** — tracked changes for spelling and grammar corrections, plus comments for style and brand voice issues, ready to review in Word.
> Which would you prefer?"

Wait for their response before proceeding.

**If they choose (A):** follow the Inline Report workflow below.

**If they choose (B):** follow the Tracked Changes + Comments workflow below.

### When input is any other format — produce the Inline Report only, no need to ask.

---

## Workflow A: Inline Report

### Step 1: Load Standards
Load `references/editorial-standards.md`. All judgements must be grounded in those rules.

### Step 2: Analyse the Document
Scan for issues across four categories:
- **Spelling** — American English, proper nouns, typos
- **Grammar** — passive voice, sentence length, tense, subject-verb agreement, Oxford comma
- **Style** — abbreviations, numbers, dates, times, currency, em-dash spacing, ampersand usage, heading case, percentages
- **Brand Voice** — tone, organisation name usage, honorifics, technical precision, sentence structure

### Step 3: Produce the Report

Output in this exact structure:

---

## 📋 Document Analysis Summary

File: [filename or "Pasted content"]
Word Count: [count]
Issues Found: [total]

🔤 Spelling: [number]
📝 Grammar: [number]
🎯 Style: [number]
🏢 Brand Voice: [number]

---

## 🔍 Inline Review with Embedded Issues

Return only sentences that contain issues — do not reproduce the full document. For each issue, append a note directly after the relevant sentence:

[Original sentence, reproduced exactly]

**_[Issue Type] – [Severity]:_** _[correction]. Reason: [short explanation referencing the Kneat guideline]._

Severity levels:
- **High** — affects professionalism, accuracy, or regulatory credibility
- **Medium** — style and consistency improvements
- **Low** — minor enhancements

Critical formatting rules:
- Never rewrite or paraphrase original text — only append notes
- Issue notes must always appear on a new line with a blank line before and after
- Ignore semantic markers such as (H1), (H2), (Title) in the source document
- Ignore decorative separators such as lines of dashes

---

## 📑 Priority Notes

**High Priority (critical errors that affect professionalism or accuracy)**
- [List each high priority issue]

**Medium Priority (style and consistency improvements)**
- [List each medium priority issue]

**Low Priority (minor suggestions)**
- [List each low priority issue]

---

## Final Compliance Check

✅ Did not rewrite or alter original text
✅ Only appended issues inline in bold italics on new lines
✅ Reviewed against all Tone, Grammar, Style, and Brand guidelines
✅ Preserved original formatting
✅ Ignored semantic markers and decorative separators
✅ All style rules were correctly followed

If any item cannot be confirmed, replace ✅ with ❌ and add a short explanation.

---

## Workflow B: Tracked Changes + Comments (.docx output)

### Step 1: Load Standards
Load `references/editorial-standards.md`. All judgements must be grounded in those rules.

### Step 2: Unpack the document
```bash
python scripts/office/unpack.py document.docx unpacked/
```

### Step 3: Analyse and plan all changes
Before editing any XML, identify all issues and classify each one:

**Use tracked changes (w:ins / w:del) for:**
- Spelling corrections
- Grammar corrections (word changes, punctuation, Oxford comma, sentence restructuring)
- Number formatting (e.g. "5" → "five")
- Abbreviation formatting (e.g. "F.D.A." → "FDA")

**Use comments for:**
- Style issues that require human judgement (heading case, date/time/currency format)
- Brand voice issues (tone, passive voice, sentence length, organisation name usage, honorifics)
- Any issue where the correction is a suggestion rather than a direct fix

Author for all tracked changes and comments: **"Claude"**

### Step 4: Implement tracked changes in word/document.xml

Use the Edit tool directly for XML replacement. Do not write Python scripts.

Insertion pattern:
```xml
<w:ins w:id="[unique_id]" w:author="Claude" w:date="2025-01-01T00:00:00Z">
  <w:r><w:t>corrected text</w:t></w:r>
</w:ins>
```

Deletion pattern:
```xml
<w:del w:id="[unique_id]" w:author="Claude" w:date="2025-01-01T00:00:00Z">
  <w:r><w:delText>original text</w:delText></w:r>
</w:del>
```

For a change (delete old, insert new), use del and ins as siblings. Preserve the original run's `<w:rPr>` formatting block in both. Only mark the exact text that changes — leave surrounding text in its original runs.

### Step 5: Add comments via comment.py

```bash
python scripts/comment.py unpacked/ [id] "[comment text]" --author "Claude"
```

Then add comment range markers in document.xml around the relevant text:
```xml
<w:commentRangeStart w:id="[id]"/>
[original runs]
<w:commentRangeEnd w:id="[id]"/>
<w:r><w:rPr><w:rStyle w:val="CommentReference"/></w:rPr><w:commentReference w:id="[id]"/></w:r>
```

Comment text should follow this format: **[Issue Type] – [Severity]: [correction]. Reason: [short explanation referencing the Kneat guideline].**

### Step 6: Repack
```bash
python scripts/office/pack.py unpacked/ reviewed-[original-filename].docx --original document.docx
```

### Step 7: Deliver
Return the reviewed .docx file to the user with a brief summary:
- How many tracked changes were made
- How many comments were added
- Any High severity issues to flag specifically

---

## Relationship to Other Skills

- **kneat-content-writer**: Use for *creating new content* from scratch. If a user asks to write, outline, draft, or research content rather than review an existing document, defer to that skill.
- This skill focuses exclusively on *reviewing existing content* against Kneat editorial standards.
