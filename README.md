# Gelai — Portfolio

A small React + Vite project for a personal portfolio site, built from resume content.

## Run it

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

## Build for deployment

```bash
npm run build
```

Output goes to `dist/` — deploy that folder anywhere that serves static files
(Netlify, Vercel, GitHub Pages, etc.).

## Project structure

```
src/
  data/
    projects.js   — one object per project (org, dates, tags, bullets, images)
    skills.js     — the skills ledger rows
  components/
    Hero.jsx
    ProjectCard.jsx
    Gallery.jsx    — the image container used on every project card
    Skills.jsx
    Contact.jsx
  hooks/
    useReveal.js   — scroll-in-view fade for project cards
  App.jsx
  styles.css
```

## Adding real screenshots

Each project in `src/data/projects.js` can take an `images` array:

```js
{
  id: 'dtr',
  // ...
  images: [
    { src: '/screens/dtr-list.png', alt: 'DTR list view' },
    { src: '/screens/dtr-approval.png', alt: 'Approval workflow' },
  ],
}
```

Put the actual image files in `public/screens/` — Vite serves everything
under `public/` at the site root. Any slot you don't fill stays a dashed
"Add image" placeholder, so you can fill projects in one at a time.

`opcr` and `toyota-crm` already have real screenshots wired in from
`public/screens/`. The remaining projects (`dtr`, `budget-module`,
`sandbox`, `roadguard`, `pos-qlik`) are still placeholders — no source
screenshots exist for those; add them the same way once available.
