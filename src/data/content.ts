// All Jemimah placeholder content lives here.
// Every personal-content field is intentionally a tasteful placeholder — Jemimah
// can edit any of it directly in this file, or live in the running app via the
// Settings app's "Edit content" panel.

export type AppId =
  | "about"
  | "education"
  | "work"
  | "skills"
  | "photos"
  | "music"
  | "files"
  | "contact"
  | "settings"
  | "notes"
  | "jemimahgpt"
  | "calendar"
  | "github"
  | "linkedin";

export interface AppDef {
  id: AppId;
  name: string;
  // Two-color gradient used when no icon image is supplied.
  gradient: [string, string];
  // Single letter or short glyph rendered inside the icon tile.
  glyph?: string;
  // External link — when present, tapping opens in a new tab instead of the app.
  external?: string;
}

export const profile = {
  name: "Jemimah",
  tagline: "A quiet space, kept by hand",
  location: "[ Your city, country ]",
  email: "hello@jemimah.example",
  // Neutral placeholder — a soft gradient SVG, no real photo.
  photo: "/assets/placeholder-portrait.svg",
  bio:
    "This is a placeholder bio. Replace it with a few sentences about who you are, what you care about, and what you're working on. A friendly, personal tone reads best — no need to be formal.",
  roles: [
    "[ Role one ]",
    "[ Role two ]",
    "[ Role three ]",
    "[ Role four ]",
  ],
  skills: ["[ Skill one ]", "[ Skill two ]", "[ Skill three ]"],
};

export const social = {
  github: "https://github.com/",
  linkedin: "https://www.linkedin.com/",
  email: "mailto:hello@jemimah.example",
  website: "https://example.com",
};

export const experience = [
  {
    id: "role-1",
    title: "[ Job title ]",
    company: "[ Company or org ]",
    period: "[ Start ] – Present",
    year: "Now",
    color: "#6c8e7a",
    website: "https://example.com",
    description:
      "Short placeholder description of what this role is and what you do day to day. Replace with a real summary when ready.",
    achievements: [
      "[ A specific, concrete thing you did or shipped ]",
      "[ A second specific thing — numbers and outcomes work well here ]",
      "[ A third item, optional ]",
    ],
  },
  {
    id: "role-2",
    title: "[ Previous role ]",
    company: "[ Previous org ]",
    period: "[ Start ] – [ End ]",
    year: "Past",
    color: "#8a7a6c",
    website: "",
    description:
      "Placeholder description of an earlier role. Keep it brief and outcome-oriented.",
    achievements: [
      "[ Notable contribution or project ]",
      "[ A skill you grew or a result you delivered ]",
    ],
  },
];

export const education = [
  {
    id: "edu-1",
    school: "[ School or program name ]",
    degree: "[ Degree or focus ]",
    period: "[ Start ] – [ End ]",
    color: "#7a8a9e",
    description:
      "Placeholder note about what you studied, what stood out, or what you plan to do next.",
    highlights: [
      "[ A class, project, or honor worth listing ]",
      "[ Another highlight ]",
    ],
  },
];

export const skills = [
  {
    category: "[ Category one ]",
    items: ["[ Skill ]", "[ Skill ]", "[ Skill ]", "[ Skill ]"],
  },
  {
    category: "[ Category two ]",
    items: ["[ Skill ]", "[ Skill ]", "[ Skill ]"],
  },
  {
    category: "[ Category three ]",
    items: ["[ Skill ]", "[ Skill ]"],
  },
];

export const photos = [
  // Each photo uses a neutral SVG placeholder. Replace `src` with a real image
  // when ready. `alt` should describe the photo for accessibility.
  { id: "p1", src: "/assets/placeholder-1.svg", alt: "Placeholder image one", caption: "[ Caption ]" },
  { id: "p2", src: "/assets/placeholder-2.svg", alt: "Placeholder image two", caption: "[ Caption ]" },
  { id: "p3", src: "/assets/placeholder-3.svg", alt: "Placeholder image three", caption: "[ Caption ]" },
  { id: "p4", src: "/assets/placeholder-4.svg", alt: "Placeholder image four", caption: "[ Caption ]" },
  { id: "p5", src: "/assets/placeholder-5.svg", alt: "Placeholder image five", caption: "[ Caption ]" },
  { id: "p6", src: "/assets/placeholder-6.svg", alt: "Placeholder image six", caption: "[ Caption ]" },
];

export const music = [
  { id: "m1", title: "[ Track title ]", artist: "[ Artist ]", note: "[ Why this one matters to you ]" },
  { id: "m2", title: "[ Track title ]", artist: "[ Artist ]", note: "[ A short note ]" },
  { id: "m3", title: "[ Track title ]", artist: "[ Artist ]", note: "[ A short note ]" },
  { id: "m4", title: "[ Track title ]", artist: "[ Artist ]", note: "[ A short note ]" },
];

export const files = [
  {
    id: "f1",
    name: "Resume",
    kind: "PDF",
    size: "—",
    description: "[ Placeholder for your resume PDF — replace the file when ready. ]",
  },
  {
    id: "f2",
    name: "Portfolio",
    kind: "Folder",
    size: "—",
    description: "[ Placeholder for selected work samples. ]",
  },
  {
    id: "f3",
    name: "Reading list",
    kind: "Markdown",
    size: "—",
    description: "[ Books and essays worth keeping. ]",
  },
  {
    id: "f4",
    name: "Notes",
    kind: "Folder",
    size: "—",
    description: "[ Loose notes, drafts, and fragments. ]",
  },
];

export const notes = [
  {
    id: "n1",
    title: "On slowness",
    body:
      "Some work asks to be hurried; the better part of it does not. This is a placeholder note — write your own here when you're ready.",
  },
  {
    id: "n2",
    title: "On revision",
    body:
      "Most of the work is the removing. A placeholder for now — replace with the things you'd like a future you to read.",
  },
  {
    id: "n3",
    title: "On keeping",
    body:
      "A small notebook outlives a large hard drive. Placeholder text — swap in your own reflections.",
  },
];

export const contact = {
  email: "hello@jemimah.example",
  emailNote: "Best for thoughtful, longer messages.",
  social: [
    { label: "GitHub", url: "https://github.com/", glyph: "G" },
    { label: "LinkedIn", url: "https://www.linkedin.com/", glyph: "in" },
    { label: "Website", url: "https://example.com", glyph: "↗" },
  ],
};

// ─── Apps configuration ────────────────────────────────────────────────────

export const apps: AppDef[] = [
  { id: "about",     name: "About",     gradient: ["#7aa68a", "#3f6b53"], glyph: "i" },
  { id: "education", name: "Education", gradient: ["#6f88b8", "#2f4670"], glyph: "🎓" },
  { id: "work",      name: "Work",      gradient: ["#b89171", "#6e4a2f"], glyph: "💼" },
  { id: "skills",    name: "Skills",    gradient: ["#a36fb0", "#5a2f70"], glyph: "✦" },
  { id: "photos",    name: "Photos",    gradient: ["#f6a96b", "#d04b8a"], glyph: "❀" },
  { id: "music",     name: "Music",     gradient: ["#ff5f6d", "#ffc371"], glyph: "♫" },
  { id: "files",     name: "Files",     gradient: ["#5fb1ff", "#2f73c2"], glyph: "📁" },
  { id: "notes",     name: "Notes",     gradient: ["#f7d774", "#caa636"], glyph: "✎" },
  { id: "calendar",  name: "Calendar",  gradient: ["#ffffff", "#f2f2f7"] },
  { id: "jemimahgpt",name: "Jemimah GPT", gradient: ["#1c1c1e", "#3a3a3c"], glyph: "✺" },
  { id: "contact",   name: "Contact",   gradient: ["#34c759", "#0a8a3e"], glyph: "✉" },
  { id: "settings",  name: "Settings",  gradient: ["#8e8e93", "#3a3a3c"], glyph: "⚙" },
  { id: "github",    name: "GitHub",    gradient: ["#222222", "#0d0d0d"], glyph: "G", external: "https://github.com/" },
  { id: "linkedin",  name: "LinkedIn",  gradient: ["#0a66c2", "#004182"], glyph: "in", external: "https://www.linkedin.com/" },
];

export const dockApps: AppId[] = ["contact", "files", "music", "settings", "jemimahgpt"];

// ─── Greetings used by the lock screen ────────────────────────────────────

export const greetings = [
  "Welcome.",
  "A quiet place for considered work.",
  "Things worth keeping.",
  "Slow ideas, kept by hand.",
];
