# Vasudev Datta Jaladhi — Portfolio Website

A modern, interactive portfolio website built with **React**, featuring a dark space theme, particle animations, glassmorphism UI, and smooth scroll animations.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🌌 Star Particle BG | Interactive tsParticles starfield that reacts to mouse |
| ⌨️ Typing Animation | Role cycler using `react-simple-typewriter` |
| 🪟 Glassmorphism Cards | Frosted-glass effect on skills, experience & education |
| ⏱️ Vertical Timeline | Expandable cards for Experience & Education |
| 🎞️ Scroll Animations | AOS (Animate on Scroll) on every section |
| 📱 Fully Responsive | Mobile, tablet & desktop breakpoints |
| 🌠 Glow Effects | Pulsing glow ring on profile photo & buttons |
| 📬 Contact Form | Opens mail client (or integrate EmailJS — see below) |
| 🚀 GitHub Pages | One-command deploy with `gh-pages` |

---

## 🚀 Quick Start

```bash
# 1. Clone the repository
git clone https://github.com/vasudev005/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Start development server
npm start
# → opens http://localhost:3000
```

---

## 📁 Project Structure

```
portfolio/
├── public/
│   └── index.html
├── src/
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   ├── index.css
│   ├── data/
│   │   └── constants.js        ← 🔧 Edit your info here
│   └── components/
│       ├── StarBackground/     ← Particle canvas
│       ├── Navbar/             ← Sticky nav + mobile drawer
│       ├── Hero/               ← Typing animation + avatar
│       ├── Skills/             ← Glassmorphism skill cards
│       ├── Experience/         ← Expandable timeline
│       ├── Education/          ← Expandable timeline
│       ├── Projects/           ← Hover-overlay project grid
│       ├── Contact/            ← Form + social links
│       └── Footer/             ← Nav + socials + copyright
└── package.json
```

---

## 🔧 Customisation

### 1. Update Your Info
Edit **`src/data/constants.js`**:
- `Bio` — name, roles, description, GitHub, LinkedIn, email, resume link
- `skills` — add / remove technologies
- `experiences` — add internships / jobs
- `education` — add institutions
- `projects` — add your projects (title, description, image, tags, links)

### 2. Replace Profile Photo
Put your photo in `src/images/` and update `ProfileImage` in `constants.js`:
```js
import MyPhoto from '../images/photo.jpg';
export const ProfileImage = MyPhoto;
```

### 3. Replace Logos
Same as above — import each logo and update its constant.

### 4. Add Resume Link
Replace the `resume: "#"` value in `Bio` with your Google Drive / Dropbox direct download link.

---

## 📬 Enable Email (Contact Form)

1. Create a free account at [EmailJS](https://www.emailjs.com)
2. Create a **Service** (Gmail recommended) and an **Email Template**
3. Note your **Service ID**, **Template ID**, and **Public Key**
4. In `src/components/Contact/index.js`, uncomment the EmailJS block and fill in your IDs

---

## 🌐 Deploy to GitHub Pages

```bash
# 1. Install gh-pages
npm install --save-dev gh-pages

# 2. Add to package.json → "scripts":
#    "predeploy": "npm run build",
#    "deploy": "gh-pages -d build"
# Also set "homepage": "https://vasudev005.github.io/portfolio"

# 3. Deploy
npm run deploy
```

Your site will be live at `https://vasudev005.github.io/portfolio` 🎉

---

## 🛠️ Tech Stack

- **React 18** — UI framework
- **@tsparticles/react** — Star particle background
- **react-simple-typewriter** — Typing animation
- **AOS** — Scroll reveal animations
- **react-icons** — Icon library
- **@emailjs/browser** — Contact form emails
- **CSS3** — Custom glassmorphism styles

---

## 📄 License

MIT © Vasudev Datta Jaladhi
