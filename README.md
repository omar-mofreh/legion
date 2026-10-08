# Legion

A website for Legion, a made-up health company. It has six pages: home, platform, AI care agent, contact, sign in and create account.

## How it works

- Every page is a plain `.html` file. There is nothing to install.
- `styles.css` makes it look nice. It starts with the colors, so you can change a color in one place.
- `script.js` makes the small things work: the phone menu, the Show/Hide password button, and the messages that appear when you send a form.
- Every page has its own copy of the header and footer. If you change the menu, change it in all six pages.

## Run it

Double-click `index.html`, or run this and open http://localhost:8000:

```bash
python3 -m http.server 8000
```

## Deploy it

Upload the folder to any static host (GitHub Pages, Netlify, and so on). There is no build step.

## Limits

These are on purpose, to keep the code easy to read.

- **The forms are pretend.** Sign in, create account, contact and the AI chat save nothing and send nothing. They only show a friendly message.
- **The AI care agent is not real.** The chat on `ai-agent.html` just repeats your message back.
- **The health numbers and the patient name are made-up examples.**
- **No passwords are checked.** There are no accounts at all.
- **The header and footer are copied into each page**, so a change means editing six files.
- **The fonts come from Google Fonts.** Without internet the page uses a default font.
