# Jemimah — iPad

An iPad-style personal website for Jemimah. The whole page renders inside a
believable tablet chassis with a lock screen, dynamic island, app grid, dock,
and a full set of placeholder apps modeled after the iOS-style "iPad personal
site" pattern: **About** (settings), **Docs** (work/experience), **Ideas**
(projects), **Education**, **Organizations** (files), **Photos**, **Mail**
(contact), **Spotify**, **Bible**, **JemimahGPT**, plus external launchers
(YouTube, GitHub, LinkedIn, Letterboxd, RYM, X, Substack, Calendar).

Every personal-content section is filled with tasteful placeholders. Real
content is meant to be edited later — either directly in `src/data/content.ts`
or live, in-session, via the **About** app.

## Stack

- **React 18** + **TypeScript** — UI
- **Vite 5** — dev server and bundler
- **framer-motion** — chassis spring physics, transitions, drag-to-tilt
- **Express 4** — production static server with `/healthz`
- Pure inline styles + a small `styles.css` for tokens and resets

No `localStorage`, `sessionStorage`, or cookies. No tracking. No database.

## Project structure

```
jemimah/
├── index.html
├── public/
│   ├── favicon.svg
│   └── assets/
│       ├── wallpaper-home.svg
│       ├── wallpaper-lock.svg
│       ├── placeholder-portrait.svg
│       └── placeholder-{1..6}.svg
├── server/
│   └── index.js           # Express static server (production)
├── src/
│   ├── App.tsx            # iPad shell, 3D drag, theme + orientation state
│   ├── main.tsx           # React mount
│   ├── styles.css         # Resets + iOS tokens
│   ├── components/
│   │   ├── ipad/          # IPadFrame, HomeScreen, StatusBar, DynamicIsland
│   │   └── apps/          # AppWindow + each placeholder app
│   └── data/
│       ├── content.ts     # All editable Jemimah placeholder content
│       └── ContentContext.tsx  # In-session edit state
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Editing content

Two paths:

1. **In code** — open `src/data/content.ts` and replace the `[ ... ]`
   placeholders. Every section (profile, experience, projects, education,
   skills, personalSettings, photos, organizations, music, files, contact)
   is plain TypeScript and reloads with HMR.
2. **In the running app** — open the **About** app from the home grid.
   It renders the personal-settings sections and exposes a quick-edit field
   for your name. Edits live in React state for the session only (no
   persistence by design).

## Local development

Requirements: **Node.js 18+**.

```bash
npm install        # install dependencies
npm run dev        # start Vite dev server on http://localhost:5173
npm run build      # produce production bundle in ./dist
npm start          # serve ./dist on http://localhost:3000 (uses $PORT)
npm run typecheck  # tsc --noEmit
```

`npm start` runs the Express server in `server/index.js`. It serves the
built `dist/` directory, exposes `/healthz` for health checks, and falls
back to `index.html` for client-side routes.

## Deploying to Railway

Railway auto-detects Node projects:

1. Create a new project on [railway.app](https://railway.app), pick
   **"Deploy from GitHub repo"**, and choose
   `https://github.com/calebnewtonusc/Jemimah`.
2. Railway runs **`npm install`**, **`npm run build`**, then **`npm start`**
   automatically — these are the standard scripts in `package.json`. No extra
   configuration required.
3. Railway injects a `PORT` environment variable. The Express server in
   `server/index.js` already binds to `process.env.PORT` and `0.0.0.0`.
4. (Optional) Set the **healthcheck path** to `/healthz`.

| Setting          | Value             |
| ---------------- | ----------------- |
| Install command  | `npm install`     |
| Build command    | `npm run build`   |
| Start command    | `npm start`       |
| Healthcheck path | `/healthz`        |
| Node version     | `>=18` (engines)  |

## Accessibility

- Buttons and links have visible focus rings via the browser default
- Theme toggle preserves system preference unless overridden in the session
- Respects `prefers-reduced-motion`

## License

Use it, change it, keep it small.
