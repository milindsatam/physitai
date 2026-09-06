# PhysiTAI Homepage

React + Vite implementation of the PhysiTAI marketing homepage, built from the Claude Design handoff bundle in the repo root (`README.md`, `chats/`, `project/`).

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Structure

- `src/components/Home.jsx` — composes the page: header, hero, problem, solution, technology, who-we-serve, why-it-matters, impact band, contact, footer.
- `src/hooks/useScrollEffects.js` — reveal-on-scroll (fade + rise), header shadow on scroll, and the hero pin/parallax effect, all disabled under `prefers-reduced-motion` or on narrow viewports (<700px).
- `src/lib/theme.js` — shared color, type, and shadow tokens.
- `src/components/icons.jsx` — the line-icon set used throughout.

The impact band is fixed to the navy variant and the hero stat chips are always shown (the design's two configurable toggles), per the agreed defaults.
