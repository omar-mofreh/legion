# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Legion is a static marketing site for a made-up health-tech product (biometrics + AI care agent + clinicians). It is plain HTML, one CSS file, and one JS file. There is no framework, no package.json, no build step, no tests, and no backend. Keep it simple, hand-written HTML/CSS/vanilla JS.

## Running it

Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000   # then visit http://localhost:8000
```

There is nothing to build, lint, or test.

## How the pieces fit

- **Pages** (`index.html`, `platform.html`, `ai-agent.html`, `contact.html`, `login.html`, `register.html`) are standalone. Each copies the same `<head>` (Google Fonts: DM Sans + Space Grotesk), the same `.site-header` / `.site-footer` markup, and loads `styles.css` and `script.js`. There are no includes or templates, so a header/footer/nav change must be made by hand in every page.
- **`styles.css`** holds all styling, written as very long minified-style lines grouped by section (header, hero, platform, dark section, network, contact, dialog, inner pages, auth). Colors are CSS variables on `:root` (`--ink`, `--blue`, `--blue-deep`, `--mint`, `--cream`, ...); reuse them instead of new hex values. Responsive rules are in the two `@media` blocks at the end (850px and 620px).
- **`script.js`** is shared by every page. Each handler looks up an element by id (`#contact-form`, `#chat-form`, `#login-form`, `#register-form`, `#toggle-password`) and uses `?.`, so it does nothing on pages without that element. All forms are fake: they `preventDefault()` and write a demo message into a `role="status"` element (`#form-status`, `#chat-status`, `#login-status`, `#register-status`). When adding a form, follow this pattern and keep ids matching the HTML.
- The mobile menu works by toggling `.is-open` on `.main-nav` from `.menu-toggle`.
- `script.js` still has code for a `#login-dialog` modal and `[data-open-login]` buttons, but no page contains them anymore (login moved to `login.html`). Treat it as leftover.

## Known problems in the HTML

Several tags are missing the space before the first attribute, so they break in the browser (e.g. `<aclass=`, `<ahref=`, `<spanclass=`, `<spanaria-hidden=`) in `index.html`, `ai-agent.html`, `platform.html`, and `register.html`. Find them with:

```bash
grep -nE "<[a-z]+(class|href|aria|id)[a-z-]*=" *.html
```

`index.html` also has empty `<strong>`/`<span>` placeholders in `.trust-row` and `.patient-row`.

## `archive/`

Reference only, not part of the live site: `archive/screens/*` are the original Tailwind-CDN mockups (`code.html` + `screen.png`); `archive/docs/clinical_clarity/DESIGN.md` has the original "Clinical Clarity" design tokens (the live site uses its own simpler palette); `archive/docs/legal_tech_marketing_plan_survey_doc.md` is an unrelated Arabic/English marketing-plan template.
