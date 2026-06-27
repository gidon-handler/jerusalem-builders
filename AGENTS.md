# AGENTS — Architecture Reference

## Project Overview

Single-page marketing site for **Bnei Yerushalayim Construction**, a Jerusalem-based building company. Bilingual (English + Hebrew) with full RTL support. Built with TanStack Start (React SSR) and Tailwind CSS v4, deployed on Netlify.

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 (no config file) |
| Fonts | Heebo (Google Fonts, for Hebrew) |
| Deployment | Netlify |

## Directory Structure

```
src/
  routes/
    __root.tsx       # Root layout, LangContext, RTL HTML attributes
    index.tsx        # Full single-page site (hero, stats, projects, contact)
  data/
    translations.ts  # All copy in English + Hebrew, Unsplash image URLs
  styles.css         # Tailwind v4 import, Heebo font, global overrides
public/
  favicon.ico
  placeholder.png
```

## Language / RTL System

- `LangContext` is defined and exported from `__root.tsx`.
- `__root.tsx` renders `<html lang={lang} dir={...}>` — both attributes update reactively when the toggle fires.
- `useLang()` hook (also from `__root.tsx`) gives components access to `{ lang, setLang }`.
- All display copy lives in `src/data/translations.ts` under `t.en` and `t.he`. Never hardcode display strings in components.
- Hebrew uses the Heebo Google Font; `.font-hebrew` class is applied to the page root.

## Data Model

`src/data/translations.ts` exports:
- `t` — nested object: `t[lang].categories`, `t[lang].projects`, `t[lang].stats`, `t[lang].contact`, etc.
- `projectImages` — `{ interior, exterior, safeRooms, capsuleHomes }` — each is an array of 3 Unsplash URLs

Categories: `'interior' | 'exterior' | 'safeRooms' | 'capsuleHomes'`

## Conventions

- Tailwind v4: no `tailwind.config.js`; configured via `@import "tailwindcss" source("../")` in `styles.css`.
- Routing is file-based; `routeTree.gen.ts` is auto-generated at build time — do not edit it.
- No database or Netlify Functions used — static marketing site only.
- Contact form is front-end only (`onSubmit` prevented). To make it functional, add Netlify Forms or a serverless function.

## Non-obvious Decisions

- Language toggle updates the `html` element's `lang` and `dir` attributes (not just CSS classes) to get native browser RTL text layout for Hebrew.
- `useLang` lives in `__root.tsx` to keep context co-located with the document shell that needs `dir=`.
- Images are served from Unsplash CDN with `?w=800&q=80&fit=crop` — no image assets are stored in the repo.
- The `RootComponent` renders the full `<html>…</html>` tree (not a `shellComponent`) so that the `LangContext.Provider` can wrap the html element and pass reactive `lang`/`dir` down.
