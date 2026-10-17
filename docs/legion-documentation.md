# Legion: Health-tech website

<mark>✏️ Student writes: one line saying what this document is for, e.g. the event or class, and the year.</mark>

<p align="center"><img src="assets/logo.png" alt="Legion logo" width="320"></p>

> **How to use this document:** every yellow <mark>✏️</mark> box is yours to fill in. Everything else was taken from the code. When you are done, run `python docs/build.py` to rebuild the PDF, the poster and the slides.

## 1. Project Overview | نظرة عامة على المشروع

| Field | Value |
|-------|-------|
| **Project Title** | Legion: Health-tech website |
| **Project Type** | Static website (no database, no server code) |
| **Description** | <mark>✏️ Student writes: 2–3 sentences. What is Legion and what can people do on the site?</mark> |
| **Target Users** | <mark>✏️ Student writes: who is the site for? (patients, clinicians, …)</mark> |
| **Live site** | <https://omar-mofreh.github.io/legion/> |

### Tech Stack | التقنيات المستخدمة

| Category | Technology | Purpose |
|----------|-----------|---------|
| Structure | HTML | Six pages, each in its own `.html` file |
| Styling | CSS | One file, `styles.css`, with the colours set once on `:root` |
| Behaviour | JavaScript | One file, `script.js`: the phone menu, the Show/Hide password button and the demo form messages |
| Fonts | Google Fonts | DM Sans and Space Grotesk, loaded by a link in each page |

### Dependencies | المكتبات

There is nothing to install. The site uses no framework and no package manager. The only outside file is the Google Fonts stylesheet.

## 2. Problem Statement | المشكلة

<mark>✏️ Student writes: 2–3 sentences. What problem does Legion solve? Who has this problem?</mark>

### Why does it matter? | لماذا هذا مهم؟

<mark>✏️ Student writes: 2–3 sentences. What happens to people when this problem isn't solved?</mark>

### How is it currently solved? | كيف تُحل المشكلة حاليًا؟

<mark>✏️ Student writes: 2–3 sentences. What do people use today, and what is still hard about it?</mark>

## 3. Technical Architecture | البنية التقنية

### Project Structure | هيكل المشروع

```text
legion/
├── index.html        # Home: hero, health dashboard card, feature cards, steps, contact form
├── platform.html     # Platform: three feature cards, workflow, care network numbers
├── ai-agent.html     # AI care agent: a chat demo
├── contact.html      # Contact form
├── login.html        # Sign-in form
├── register.html     # Create-account form
├── styles.css        # All the styling
├── script.js         # All the behaviour, shared by every page
├── assets/logo.png   # The logo
└── docs/             # This documentation, the poster, the slides and the diagrams
```

### How it works | كيف يعمل

Every page loads `styles.css` and `script.js`. Each page has its own copy of the header and the footer, on purpose, so every file can be read on its own. `script.js` looks for a form by its id. If the page has no such form, it does nothing.

![How every page is built](diagrams/site-map.png)

### Key Files | الملفات الأساسية

| File | Purpose |
|------|---------|
| `index.html` | The home page, with the live-health-snapshot card, three feature cards, the three steps and a contact form. |
| `styles.css` | All the colours, layout and the two phone/tablet rules at the end (850px and 620px). |
| `script.js` | The phone menu, the Show/Hide password button, and the message each demo form shows when you send it. |

## 4. Features & User Flow | المميزات ورحلة المستخدم

### Feature List | قائمة المميزات

| # | Feature | Description | Status |
|---|---------|-------------|:------:|
| 1 | Home page | Headline, a health dashboard card (pulse, oxygen, steps, sleep), three feature cards and three steps. | Complete |
| 2 | Platform page | A timeline, a calm workflow and care-network numbers. | Complete |
| 3 | AI care agent | A chat panel. Typing a message shows a "message received" note. | Demo only |
| 4 | Contact form | Name, email and message, with a thank-you note. | Demo only |
| 5 | Sign in and Register | Forms with a Show/Hide password button. | Demo only |
| 6 | Phone menu | A "Menu" button opens the links on small screens. | Complete |

### User Flow | رحلة المستخدم

![How a visitor moves and what a form does](diagrams/flow.png)

### Screen Reference | الشاشات

| Screen | File | Description |
|--------|------|-------------|
| Home | `index.html` | The first page: what Legion is, with a sample dashboard. |
| Platform | `platform.html` | What the platform does and who is in the care network. |
| AI agent | `ai-agent.html` | A chat demo with a short explanation of what the agent does. |
| Contact | `contact.html` | The contact form and the email and phone. |
| Sign in | `login.html` | Email and password form. |
| Register | `register.html` | First name, last name, email, password and a terms checkbox. |

## 5. UI/UX Design | تصميم واجهة المستخدم

### Screenshots | لقطات الشاشة

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

### Design System | نظام التصميم

| Element | Current implementation |
|---------|------------------------|
| Logo | A heart made of lines, with a plus sign and a heartbeat, in deep blue and teal (`assets/logo.png`). |
| Main colour | Deep blue `#075A78` for buttons, and `#063B51` for the dark sections |
| Accent colour | Mint `#19B99D` for small labels and highlights |
| Background | Soft cream `#F7FAF7` |
| Fonts | Space Grotesk for headlines, DM Sans for text |
| Layout | Content is at most 1180px wide. Cards sit in a grid that becomes one column on a phone. |

## 6. Data Sources | مصادر البيانات

There is no database and no outside data. The numbers on the dashboard card and the care-network numbers are examples written straight into the HTML. The forms do not save or send anything.

### External APIs | الخدمات الخارجية

None. The site only loads two Google Fonts.

### Limits | حدود المشروع

These shortcuts were taken on purpose to keep the code simple. The full list is in the README.

- The forms are pretend. They save nothing and send nothing.
- The AI care agent is not real. The chat only shows a "message received" note.
- The health numbers and the patient name are made-up examples.
- No passwords are checked, because there are no accounts.
- The header and footer are copied into each page, so a change means editing six files.

## 7. Educational Content | المحتوى التعليمي

### Learning Objectives | أهداف التعلم

Through building this project, a student can practice:

1. <mark>✏️ Student writes: something you learned about HTML pages</mark>
2. <mark>✏️ Student writes: something you learned about CSS and layout</mark>
3. <mark>✏️ Student writes: something you learned about JavaScript and forms</mark>
4. <mark>✏️ Student writes: something you learned about making a site work on a phone</mark>
5. <mark>✏️ Student writes: one more thing you learned</mark>

### Curriculum Alignment | الارتباط بالمنهج

| Skill Area | What the Student Practices |
|------------|---------------------------|
| Problem Solving | <mark>✏️ Student writes: 1 sentence</mark> |
| Computational Thinking | <mark>✏️ Student writes: 1 sentence</mark> |
| Creativity | <mark>✏️ Student writes: 1 sentence</mark> |
| Collaboration | <mark>✏️ Student writes: 1 sentence, or "built alone"</mark> |
| Technical Writing | <mark>✏️ Student writes: 1 sentence</mark> |

## 8. Marketing Plan | خطة تسويقية

- **Primary audience:** <mark>✏️ Student writes: the main group of people</mark>
- **Secondary audience:** <mark>✏️ Student writes: a second group</mark>
- **Where people will use it:** <mark>✏️ Student writes: e.g. phone and desktop browsers</mark>
- **Where you will show it or share it:** <mark>✏️ Student writes</mark>

## 9. Student Worksheet | ورقة عمل الطالب

**Student Name:** <mark>✏️ Student writes: your full name</mark>  
**Project Title:** Legion: Health-tech website

### What is your project about? | عن ماذا يتحدث مشروعك؟

<mark>✏️ Student writes: 1–2 sentences in your own words</mark>

### What problem does it solve? | ما المشكلة التي يحلها؟

<mark>✏️ Student writes: 1–2 sentences in your own words</mark>

### What I Learned | ماذا تعلمت

1. **The hardest part:** <mark>✏️ Student writes</mark>
2. **The most fun part:** <mark>✏️ Student writes</mark>
3. **If I had more time:** <mark>✏️ Student writes</mark>

### Screenshot of My Project | لقطة من مشروعي

![Home page](screenshots/home.jpg)

---

<mark>✏️ Student writes: team or school name · event · year</mark>
