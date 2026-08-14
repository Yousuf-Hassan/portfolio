# Yusuf Xasan — Developer Portfolio

A modern, **professional black/dark developer portfolio** built from scratch with
**HTML5**, **CSS3**, and **vanilla JavaScript** — no frameworks, no build step. This is
the Final Project (Capstone) for my Computer Science studies at the **University of
Hargeisa, Faculty of Engineering and Computing**.

## ✨ Overview

A premium, minimal dark theme with subtle glow effects, borders, gradients, and smooth
transitions. The site is **multi-page**: each major section lives on its own dedicated
page, so visitors can explore in depth instead of scrolling one long page.

## 📄 Pages

| Page              | File                      | Content                                                        |
| ----------------- | ------------------------- | -------------------------------------------------------------- |
| Home              | `index.html`              | Hero, short intro, skills preview, featured projects, CTA       |
| About             | `pages/about.html`        | Detailed introduction, CS background, goals, philosophy         |
| Skills            | `pages/skills.html`       | Skills organized into categories with badges and cards          |
| Projects          | `pages/projects.html`     | Full project showcase with categories, tech, GitHub & demo      |
| Journey           | `pages/journey.html`      | Learning & development timeline (education → future goals)      |
| Contact           | `pages/contact.html`      | Contact info, links, and a validated contact form               |

Every page shares the same navigation (with the active page highlighted), the same
black/dark theme, and the same visual language — but each has its own unique content
and layout.

## 🛠 Technologies

| Layer     | Technologies                          |
| --------- | ------------------------------------- |
| Markup    | HTML5 (semantic, accessible)          |
| Styling   | CSS3 (custom properties, grid, flex, responsive) |
| Behavior  | Vanilla JavaScript (ES6+)             |
| Tooling   | Git & GitHub                          |

## ✨ Features

- **Premium black/dark theme** — minimal, professional, developer-focused
- **Multi-page architecture** — 6 unique pages, consistent branding
- **Responsive design** — desktop, laptop, tablet, and mobile
- **Mobile hamburger menu** — animated toggle, closes on link click
- **Active navigation state** — current page highlighted on every page
- **Scroll-reveal animations** — with `prefers-reduced-motion` support
- **Typed role animation** on the home hero
- **Contact form UI** — front-end validation with success feedback (no backend)
- **No-JS fallback** — content stays visible even if JavaScript fails to load
- **Accessibility** — semantic HTML, focus styles, ARIA labels

## 🚀 Getting Started

This is a static website — no build step or dependencies required.

```bash
# Clone the repository
git clone <repo-url>

# Open the site
cd dev-portfolio
# open index.html in your browser, or run a local server:
python -m http.server 8000
# then visit http://localhost:8000
```

## 🌐 Deployment (GitHub Pages)

The site deploys with **GitHub Pages**:

1. Push the repository to GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the `main` branch and the `/ (root)` folder, then **Save**.
5. Your portfolio will be live at `https://<username>.github.io/<repository>/`.

## 🔀 Git Workflow

This repository demonstrates a complete, professional Git workflow:

- `main` — production-ready releases only (tagged, e.g. `v1.0.0`, `v1.1.0`)
- `develop` — integration branch where finished features are merged
- `feature/*` — one branch per feature (e.g. `feature/multi-page-dark-design`),
  merged with `--no-ff`
- `hotfix/*` — urgent fixes branched from `main` and merged back to `main` and `develop`
- Conventional, meaningful commit messages throughout

```
main     ●───────────────● v1.0.0 ────● v1.0.1 ────● v1.1.0 (multi-page dark theme)
develop  ──●──●──●──●──●──●────────────●────────────●
             feature/...            hotfix/       feature/multi-page-dark-design
```

## 📝 Notes & Placeholders

- **LinkedIn**: links currently point to LinkedIn; update to the exact profile URL when
  available (marked in the code comments).
- **Project links**: GitHub buttons link to my GitHub profile; demo links are marked
  "(soon)" placeholders. Replace them with real repository/deployment URLs as projects
  are published.
- **Contact form**: front-end only — it validates input and shows a success message.
  Connect a service like EmailJS or a form backend to actually deliver messages.

## 📄 License

This project is for educational purposes (Capstone). All content is original unless
otherwise noted.
