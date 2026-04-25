import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const DIST_DIR = path.resolve(__dirname, "..", "dist");

// Health check (handy for Railway)
app.get("/healthz", (_req, res) => {
  res.status(200).json({ status: "ok" });
});

// Serve built static assets
app.use(
  express.static(DIST_DIR, {
    maxAge: "1h",
    index: false,
  })
);

// SPA fallback — serve index.html for all unknown GET routes
app.get("*", (_req, res) => {
  res.sendFile(path.join(DIST_DIR, "index.html"));
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Jemimah is running on http://0.0.0.0:${PORT}`);
});
