# Legion: Health-tech website

Project documentation for the Afro-Asian Forum for Innovation and Technology (AFFIAT), Aswan Finals 2026.

**Students:** Malek Mohammed, Omar Mofreh

<p align="center"><img src="assets/partners.png" alt="AFFIAT and Techno Future Kafr El Sheikh" width="320"></p>

<p align="center"><img src="assets/logo.png" alt="Legion logo" width="320"></p>

## 1. What is Legion? | ما هو المشروع؟

Legion is a website for a made-up health-tech company. Visitors can read about the platform, try a demo chat with an AI care agent, send a message, and open sign-in and register forms.

- **Who it is for:** Patients who track their health, and the doctors and care teams who look after them.
- **Live site:** <https://omar-mofreh.github.io/legion/>

## 2. The Problem | المشكلة

Health data is spread across apps, devices and paper records. Patients cannot see the whole picture, and doctors start visits without context. Legion shows everything in one calm place.

## 3. How it is built | كيف بُني

| Part | What it does |
|------|--------------|
| HTML | Six pages, each in its own `.html` file |
| CSS | One file, `styles.css`, with all the colours and layout |
| JavaScript | One file, `script.js`: the phone menu, the Show/Hide password button and the form messages |
| Google Fonts | DM Sans and Space Grotesk |

There is nothing to install: no framework, no database and no server code.

```text
legion/
├── index.html        # Home
├── platform.html     # Platform
├── ai-agent.html     # AI care agent chat demo
├── contact.html      # Contact form
├── login.html        # Sign in
├── register.html     # Create account
├── styles.css        # All the styling
├── script.js         # All the behaviour
└── docs/             # This documentation, the poster and the slides
```

## 4. Features | المميزات

| Page | What you can do |
|------|-----------------|
| Home | See a sample health dashboard (pulse, oxygen, steps, sleep) and the three steps. |
| Platform | Read how Legion works and see the care network. |
| AI agent | Type a message in a demo chat. |
| Contact | Send your name, email and message. |
| Sign in / Register | Fill in the forms, with a Show/Hide password button. |

On a phone, the links hide behind a "Menu" button.

![How a visitor moves and what a form does](diagrams/flow.png)

## 5. Screenshots | لقطات الشاشة

| Home | Platform |
|------|----------|
| ![Home page](screenshots/home.jpg) | ![Platform page](screenshots/platform.jpg) |

| AI agent | Contact |
|----------|---------|
| ![AI agent page](screenshots/ai-agent.jpg) | ![Contact page](screenshots/contact.jpg) |

| Sign in | Register |
|---------|----------|
| ![Sign in page](screenshots/login.jpg) | ![Register page](screenshots/register.jpg) |

Try the site: <https://omar-mofreh.github.io/legion/>

<img src="assets/qr-app.png" alt="QR code for the live site" width="148">

**Design:** deep blue `#075A78`, mint `#19B99D` and a soft cream background `#F7FAF7`. The logo is a heart made of lines, with a plus sign and a heartbeat.

## 6. Limits | حدود المشروع

This is a school demo, kept simple on purpose:

- The forms save nothing and send nothing.
- The AI care agent is not real.
- The health numbers are made-up examples.

## 7. What We Learned | ماذا تعلمنا

1. Building pages with a header, main content and footer.
2. Making the layout fit tablets and phones.
3. Writing one small script that shows a friendly message when a form is sent.
4. **Hardest part:** making the layout work on phones.
5. **Most fun part:** building the sample health dashboard.
6. **Next step:** connect the forms to a real service.

---

Malek Mohammed · Omar Mofreh · 2026
