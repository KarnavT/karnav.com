# Portfolio

Welcome to my personal portfolio site. I built it to be a place where anyone can learn my story quickly without sifting through fluff. Here, I've showcased my past experiences and projects with context and visuals,

## Tech stack

- Next.js 16 (App Router)
- React 19 + TypeScript
- Tailwind CSS v4
- Framer Motion for animation
- EmailJS for contact form delivery

## Architecture

The site is organized around three layers: routes, reusable UI, and structured content. This keeps the UI clean while making it easy to add new projects without touching presentation logic.

- Routes live in `src/app` (App Router). Each section has its own page folder.
- UI building blocks live in `src/components` (layout, motion, and project-specific components).
- Portfolio content is centralized in `src/data/projects`, which feeds the projects pages.

This setup is intentionally “content-first”: add a project object and the UI scales with it.

## Project structure

```
src/
  app/             # Route segments (about, projects, contact, resume, skills)
  components/      # Layout + UI building blocks
  data/            # Structured project content
public/            # Images + static assets
```

## Running locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Useful scripts

- `npm run dev` — local dev server (opens the site automatically)
- `npm run build` — production build
- `npm run start` — run the production build
- `npm run lint` — lint the codebase

## Additional Notes

If you only have 2 minutes, I’d recommend:

1) Skimming the projects section to see what I've been up to.
2) Checking the about me page to learn more about my personality and interests.

---

If you’re curious about specific implementation details, feel free to reach out.
