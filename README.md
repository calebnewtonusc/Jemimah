# Jemimah

A small, considered single-page web app — a quiet space for slow ideas and
quiet craft. Built to be lightweight, accessible, and deploy-ready on
[Railway](https://railway.app).

## Stack

- **React 18** + **TypeScript** — UI
- **Vite 5** — dev server and bundler
- **Express 4** — production static server with health check
- Pure CSS (custom properties, no framework) for a tiny bundle
- Google Fonts: Fraunces (display) + Inter (body)

No `localStorage`, `sessionStorage`, or cookies. No tracking. No database.

## Project structure

```
jemimah/
├── index.html             # Vite entry HTML
├── public/
│   └── favicon.svg        # Inline SVG favicon
├── server/
│   └── index.js           # Tiny Express static server (production)
├── src/
│   ├── App.tsx            # Page composition
│   ├── Logo.tsx           # Custom inline SVG logo
│   ├── main.tsx           # React mount
│   └── styles.css         # Design tokens + styles
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Local development

Requirements: **Node.js 18+**.

```bash
npm install      # install dependencies
npm run dev      # start Vite dev server on http://localhost:5173
npm run build    # produce production bundle in ./dist
npm start        # serve ./dist on http://localhost:3000 (uses $PORT)
```

`npm start` runs the Express server in `server/index.js`. It serves the
built `dist/` directory, exposes `/healthz` for health checks, and falls
back to `index.html` for client-side routes.

## Theme

The app supports light and dark modes. The initial theme is read from the
user's OS preference (`prefers-color-scheme`), and the toggle in the header
flips it for the session. Per the project's constraints, the choice is
**not persisted** — there is no `localStorage`, `sessionStorage`, or cookie
storage. Each new visit follows the OS preference again.

## Accessibility

- Semantic landmarks: `<header>`, `<main>`, `<footer>`, `<nav>`, `<section>`
- All interactive elements have visible focus rings (`:focus-visible`)
- Theme toggle uses `aria-label` and `aria-pressed`
- Respects `prefers-reduced-motion`
- Color pairings target WCAG AA contrast on both themes

## Deploying to Railway

Railway auto-detects Node projects. The simplest path:

1. **Create a new project** on [railway.app](https://railway.app) and pick
   **"Deploy from GitHub repo"** (or use `railway up` from the CLI).
2. Railway will run **`npm install`**, then **`npm run build`**, then
   **`npm start`** automatically — these are the standard scripts in
   `package.json`. No extra configuration required.
3. Railway injects a `PORT` environment variable. The Express server in
   `server/index.js` already binds to `process.env.PORT` and `0.0.0.0`,
   which is what Railway requires.
4. (Optional) Set the **healthcheck path** in your service settings to
   `/healthz`. The server returns `200 OK` with `{ "status": "ok" }`.

### Build & start commands (if you need to set them explicitly)

| Setting          | Value             |
| ---------------- | ----------------- |
| Install command  | `npm install`     |
| Build command    | `npm run build`   |
| Start command    | `npm start`       |
| Healthcheck path | `/healthz`        |
| Node version     | `>=18` (engines)  |

### Using the Railway CLI

```bash
npm i -g @railway/cli
railway login
railway init           # create a new Railway project
railway up             # build & deploy from the current directory
railway open           # open the deployed URL
```

### Environment variables

None are required. The only variable used is `PORT`, which Railway sets
automatically. You can override it locally with:

```bash
PORT=4000 npm start
```

## License

Use it, change it, keep it small.
