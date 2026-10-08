# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Legion is a static marketing site for a made-up health-tech product. It is plain HTML, one CSS file, and one JS file. There is no framework, no package.json, no build step, no tests, and no backend. See `README.md` for what it does and its Limits.

Run it with `python3 -m http.server 8000` (or open `index.html`). There is nothing to build, lint, or test.

## Kid-simple rules

This project was refactored to be **kid-simple**: code a curious 12-year-old can read top to bottom and explain back. Keep it that way.

- Plain HTML, plain CSS, plain JS. No frameworks, no build tools, no new libraries unless plain code can't do the job in about 10 lines.
- Plain variables and verb-named functions. Loops and `if`s over clever tricks.
- One short comment above anything a kid would ask "why?" about, in kid words.
- Repetition beats abstraction: the header and footer are copied into every page on purpose.
- Anything that removes safety or capability goes in the README's **Limits** section.

## How the pieces fit

- **Pages** (`index.html`, `platform.html`, `ai-agent.html`, `contact.html`, `login.html`, `register.html`) are standalone. Each copies the same `<head>` (Google Fonts: DM Sans + Space Grotesk), the same `.site-header` / `.site-footer` markup, and loads `styles.css` and `script.js`. A header/footer/nav change must be made by hand in every page (`login.html` and `register.html` have a shorter header with no nav).
- **`styles.css`** is one file, one declaration per line, with a comment above each section. Colors are CSS variables on `:root`; reuse them instead of new hex values. The two `@media` blocks at the end are tablet (850px) and phone (620px).
- **`script.js`** is shared by every page. Each handler looks up an element by id (`#contact-form`, `#chat-form`, `#login-form`, `#register-form`, `#toggle-password`) and uses `?.`, so it does nothing on pages without that element. All forms are demos: they `preventDefault()` and write a message into a `role="status"` element (`#form-status`, `#chat-status`, `#login-status`, `#register-status`). When adding a form, follow this pattern and keep the ids matching the HTML.
- The phone menu works by toggling `.is-open` on `.main-nav` from `.menu-toggle`.

## `archive/`

Reference only, not part of the live site: `archive/screens/*` are the original Tailwind-CDN mockups (`code.html` + `screen.png`); `archive/docs/clinical_clarity/DESIGN.md` has the original "Clinical Clarity" design tokens (the live site uses its own simpler palette); `archive/docs/legal_tech_marketing_plan_survey_doc.md` is an unrelated Arabic/English marketing-plan template.
