# Kneat S&G Review — Claude Skill

A custom Claude skill that reviews written content against Kneat Solutions' editorial standards for spelling, grammar, style, and brand voice.

---

## What It Does

When triggered, the skill analyses content and returns a structured report flagging issues across four categories:

- **Spelling** — American English, proper nouns, typos
- **Grammar** — passive voice, sentence length, tense, Oxford comma, subject-verb agreement
- **Style** — abbreviations, numbers, dates, times, currency, em-dash spacing, heading case, percentages
- **Brand Voice** — tone, organisation name usage, honorifics, technical precision

Each issue is marked **High**, **Medium**, or **Low** severity with a reason referencing the Kneat style guide.

---

## Skill Structure

```
kneat-content-editor/
├── SKILL.md                          # Main skill instructions and workflow
└── references/
    └── editorial-standards.md       # Full Kneat editorial rulebook
```

---

## Trigger Phrase

Type any of the following in a Claude chat to activate the skill:

```
Kneat S&G review
Kneat S and G review
Kneat style and grammar review
```

---

## Accepted Inputs

| Input | Output available |
|---|---|
| Pasted text | Inline review report |
| Uploaded PDF, TXT, MD | Inline review report |
| Uploaded .docx | Inline report **or** reviewed .docx with tracked changes and comments |

When a `.docx` is uploaded, Claude asks which output the user prefers before proceeding.

---

## Output Modes

### Inline Review Report
A structured report showing only sentences with issues, each followed by an inline note in the format:

```
[Original sentence]

**_[Issue Type] – [Severity]:_** _[correction]. Reason: [explanation]._
```

Includes a summary, priority notes, and a final compliance checklist.

### Reviewed .docx (Word uploads only)
Returns the original document with:

- **Tracked changes** for spelling and grammar corrections — accept or reject in Word as normal
- **Word comments** for style and brand voice issues — flagged for human review

All changes are attributed to **"Claude"** as the author.

---

## Installation

### For individual users (Pro, Max, Team, Enterprise)

1. Download `kneat-content-editor.zip`
2. In Claude.ai, go to **Settings → Customize → Skills**
3. Click **+** → **Upload a skill**
4. Upload the ZIP file
5. Toggle the skill on

> Requires **Code execution and file creation** to be enabled in Settings → Capabilities.

### For Team / Enterprise admins (org-wide rollout)

1. Go to **Organization Settings → Skills**
2. Upload `kneat-content-editor.zip`
3. The skill is automatically provisioned for all users in the workspace

---

## Updating the Skill

To update the editorial standards or workflow:

1. Edit `SKILL.md` or `references/editorial-standards.md`
2. Repackage:
   ```bash
   python3 scripts/package_skill.py kneat-content-editor/
   ```
3. Re-upload the new ZIP via Settings → Skills (individual) or Organization Settings → Skills (org-wide)

---

## Requirements

- Claude.ai Pro, Max, Team, or Enterprise plan
- Code execution enabled
- Skill uploaded and toggled on

---

## Related

- [Anthropic Skills Documentation](https://docs.claude.com/en/docs/build-with-claude/agent-skills/overview)
- [How to create custom Skills](https://support.claude.com/en/articles/12512198-how-to-create-custom-skills)
- [Agent Skills open standard](https://agentskills.io)

---

*Internal use — Kneat Solutions*
