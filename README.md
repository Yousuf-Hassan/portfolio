# Yusuf Xasan — Developer Portfolio

A modern, professional developer portfolio built from scratch with **HTML5**, **CSS3**, and
**JavaScript** — no frameworks. This is the Final Project (Capstone) for my Computer Science
studies at the **University of Hargeisa, Faculty of Engineering and Computing**.

## ✨ Sections

- **Hero** — introduction, headline, CTA buttons, GitHub & LinkedIn links
- **About Me** — background, interests, technologies, direction
- **Skills** — technologies organized into professional groups
- **Projects** — project cards with GitHub and demo links
- **Learning / Experience** — education and learning journey
- **Contact** — email, GitHub, LinkedIn, and a contact form UI

## 🛠 Tech Stack

| Layer     | Technologies                          |
| --------- | ------------------------------------- |
| Markup    | HTML5                                 |
| Styling   | CSS3 (custom properties, grid, flex)  |
| Behavior  | Vanilla JavaScript (ES6+)             |
| Tooling   | Git & GitHub                          |

## 🚀 Getting Started

This is a static website — no build step required.

```bash
# Clone the repository
git clone <repo-url>

# Open the site
cd dev-portfolio
# then open index.html in your browser, or run a local server:
python -m http.server 8000
```

## 🌐 Deployment (GitHub Pages)

The site is deployed with **GitHub Pages**:

1. Push the repository to GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the `main` branch and the `/ (root)` folder, then **Save**.
5. Your portfolio will be live at `https://<username>.github.io/<repository>/`.

## 🔀 Git Workflow Used

This repository demonstrates a complete, professional Git workflow:

- `main` — production-ready releases only (tagged, e.g. `v1.0.0`)
- `develop` — integration branch where finished features are merged
- `feature/*` — one branch per section/feature, merged with `--no-ff`
- `hotfix/*` — urgent fixes branched from `main` and merged back to `main` and `develop`
- Conventional, meaningful commit messages throughout

```
main ──●───────────────● (v1.0.0)──────● (v1.0.1)
       \             /                /
develop ─●──●──●──●──●──────────────●──
         \ /    \ /    \ /
      feature/  feature/  feature/
```

## 📝 Notes & Placeholders

- **LinkedIn**: the link currently points to my LinkedIn; update it to the exact profile
  URL when available.
- **Project links**: GitHub buttons link to my GitHub profile; demo links are marked
  "Coming soon" placeholders. Replace them with the real repository/deployment URLs.
- **Contact form**: front-end only (no backend). It validates input and shows a success
  message. Connect a service like EmailJS or a form backend to actually deliver messages.

## 📄 License

This project is for educational purposes (Capstone). All content is original unless
otherwise noted.
