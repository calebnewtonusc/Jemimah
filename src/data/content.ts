// All Jemimah placeholder content lives here.
// Every personal-content field is intentionally a tasteful placeholder.
// App structure mirrors the Caleb iPad reference site so Jemimah can edit
// any value without changing layout.

// ─── Profile / Social ────────────────────────────────────────────────────────

export const profile = {
  name: "Jemimah",
  tagline: "[ Short tagline — school, role, or vibe ]",
  location: "[ Your city, country ]",
  email: "hello@jemimah.example",
  photo: "/assets/placeholder-portrait.svg",
  photoAlt: "/assets/placeholder-portrait.svg",
  skills: ["[ Skill one ]", "[ Skill two ]", "[ Skill three ]"],
  bio:
    "This is a placeholder bio. Replace it with a few sentences about who you are, what you care about, and what you're working on. A friendly, personal tone reads best — no need to be formal.",
  roles: [
    "[ Role one ]",
    "[ Role two ]",
    "[ Role three ]",
    "[ Role four ]",
  ],
};

export const social = {
  github: "https://github.com/",
  linkedin: "https://www.linkedin.com/",
  youtube: "https://www.youtube.com/",
  spotify: "https://open.spotify.com/",
  letterboxd: "https://letterboxd.com/",
  rateyourmusic: "https://rateyourmusic.com/",
  x: "https://x.com/",
  email: "mailto:hello@jemimah.example",
  website: "https://example.com",
};

// ─── Work / Experience ───────────────────────────────────────────────────────

export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  year: string;
  logo: string | null;
  color: string;
  website: string;
  description: string;
  achievements: string[];
  skills: string[];
  photos: string[];
}

export const experience: Experience[] = [
  {
    id: "role-1",
    title: "[ Job title ]",
    company: "[ Company or org ]",
    period: "[ Start ] – Present",
    year: "Now",
    logo: null,
    color: "#6c8e7a",
    website: "https://example.com",
    description:
      "Short placeholder description of what this role is and what you do day to day.",
    achievements: [
      "[ A specific, concrete thing you did or shipped ]",
      "[ A second specific thing — numbers and outcomes work well here ]",
      "[ A third item, optional ]",
    ],
    skills: ["[ Skill ]", "[ Skill ]", "[ Skill ]"],
    photos: [],
  },
  {
    id: "role-2",
    title: "[ Previous role ]",
    company: "[ Previous org ]",
    period: "[ Start ] – [ End ]",
    year: "Past",
    logo: null,
    color: "#8a7a6c",
    website: "",
    description:
      "Placeholder description of an earlier role. Keep it brief and outcome-oriented.",
    achievements: [
      "[ Notable contribution or project ]",
      "[ A skill you grew or a result you delivered ]",
    ],
    skills: ["[ Skill ]", "[ Skill ]"],
    photos: [],
  },
  {
    id: "role-3",
    title: "[ Earlier role ]",
    company: "[ Earlier org ]",
    period: "[ Start ] – [ End ]",
    year: "Earlier",
    logo: null,
    color: "#7a8a9e",
    website: "",
    description:
      "Placeholder description for an earlier experience. Replace with your own.",
    achievements: ["[ Highlight one ]", "[ Highlight two ]"],
    skills: ["[ Skill ]"],
    photos: [],
  },
];

// ─── Projects / Ideas ────────────────────────────────────────────────────────

export interface Project {
  id: string;
  title: string;
  logo: string | null;
  logoBg?: string;
  live: string;
  color: string;
  comingSoon?: boolean;
  page?: number;
}

export const projects: Project[] = [
  { id: "p1", title: "[ Project one ]",   logo: null, live: "https://example.com", color: "#3a5a78" },
  { id: "p2", title: "[ Project two ]",   logo: null, live: "https://example.com", color: "#4a3a78" },
  { id: "p3", title: "[ Project three ]", logo: null, live: "https://example.com", color: "#783a5a" },
  { id: "p4", title: "[ Project four ]",  logo: null, live: "https://example.com", color: "#3a785a" },
  { id: "p5", title: "[ Coming soon ]",   logo: null, live: "#",                   color: "#7a4a0a", comingSoon: true },
];

// ─── Education ───────────────────────────────────────────────────────────────

export interface Education {
  id: string;
  school: string;
  subtitle: string;
  degree: string;
  period: string;
  status: string;
  logo: string | null;
  color: string;
  website: string;
  description: string;
  highlights: string[];
}

export const education: Education[] = [
  {
    id: "edu-1",
    school: "[ University or program ]",
    subtitle: "[ College / department ]",
    degree: "[ Degree or focus ]",
    period: "[ Start ] – [ End ]",
    status: "[ Current · Year ]",
    logo: null,
    color: "#6f88b8",
    website: "https://example.com",
    description:
      "Placeholder note about what you studied, what stood out, or what you plan to do next.",
    highlights: [
      "[ A class, project, or honor worth listing ]",
      "[ Another highlight ]",
      "[ One more ]",
    ],
  },
  {
    id: "edu-2",
    school: "[ Earlier school ]",
    subtitle: "",
    degree: "[ Degree or diploma ]",
    period: "[ Start ] – [ End ]",
    status: "Graduated",
    logo: null,
    color: "#7a8a9e",
    website: "",
    description: "Placeholder note for an earlier school. Replace with your own.",
    highlights: ["[ Highlight ]", "[ Highlight ]"],
  },
];

// ─── Skills ──────────────────────────────────────────────────────────────────

export interface SkillItem { name: string; level: number; color: string }

export const skills = {
  languages: [
    { name: "[ Language ]", level: 80, color: "#3776AB" },
    { name: "[ Language ]", level: 70, color: "#3178C6" },
    { name: "[ Language ]", level: 60, color: "#F7DF1E" },
  ] as SkillItem[],
  frameworks: [
    { name: "[ Framework ]", level: 75, color: "#61DAFB" },
    { name: "[ Framework ]", level: 65, color: "#000000" },
    { name: "[ Framework ]", level: 70, color: "#06B6D4" },
  ] as SkillItem[],
  tools: [
    { name: "[ Tool ]", level: 80, color: "#F05032" },
    { name: "[ Tool ]", level: 70, color: "#2496ED" },
    { name: "[ Tool ]", level: 60, color: "#FF9900" },
  ] as SkillItem[],
  domains: [
    "[ Domain one ]",
    "[ Domain two ]",
    "[ Domain three ]",
    "[ Domain four ]",
  ],
};

// ─── Personal Settings (About app) ───────────────────────────────────────────

export interface SettingItem {
  label: string;
  type: "info" | "toggle-on" | "toggle-off";
  detail: string;
}
export interface SettingsSection {
  section: string;
  icon: string;
  items: SettingItem[];
}

export const personalSettings: SettingsSection[] = [
  {
    section: "Identity",
    icon: "faith",
    items: [
      { label: "[ Core value ]", type: "toggle-on", detail: "[ Short detail ]" },
      { label: "[ Favorite quote ]", type: "info", detail: "[ Replace with your own ]" },
      { label: "[ Community ]", type: "info", detail: "[ Group or place ]" },
      { label: "[ Recharge ]", type: "info", detail: "[ Where you reset ]" },
    ],
  },
  {
    section: "Music",
    icon: "music",
    items: [
      { label: "Listening habit", type: "info", detail: "[ Vinyl / streaming / live ]" },
      { label: "Genres", type: "info", detail: "[ List a few ]" },
      { label: "All-time favorite", type: "info", detail: "[ Artist or album ]" },
      { label: "Current rotation", type: "info", detail: "[ Three artists ]" },
    ],
  },
  {
    section: "Sports & Activities",
    icon: "sports",
    items: [
      { label: "[ Activity ]", type: "toggle-on", detail: "[ Frequency or note ]" },
      { label: "[ Activity ]", type: "toggle-on", detail: "[ Frequency or note ]" },
      { label: "[ Activity ]", type: "toggle-off", detail: "[ Used to do ]" },
    ],
  },
  {
    section: "Film & Culture",
    icon: "film",
    items: [
      { label: "Letterboxd", type: "info", detail: "[ handle · count ]" },
      { label: "Favorites", type: "info", detail: "[ Three films ]" },
      { label: "Reading", type: "info", detail: "[ Genres or current book ]" },
    ],
  },
  {
    section: "Daily Runtime",
    icon: "runtime",
    items: [
      { label: "Sleep schedule", type: "info", detail: "[ Note ]" },
      { label: "Coffee dependency", type: "info", detail: "[ Mild / critical ]" },
      { label: "Peak focus hours", type: "info", detail: "[ Window ]" },
    ],
  },
  {
    section: "System Preferences",
    icon: "system",
    items: [
      { label: "Do not disturb", type: "toggle-off", detail: "[ Note ]" },
      { label: "Location", type: "info", detail: "[ Where you usually work ]" },
      { label: "Privacy", type: "info", detail: "[ Public vs private ]" },
    ],
  },
  {
    section: "About this device",
    icon: "device",
    items: [
      { label: "Edition", type: "info", detail: "[ Year (Jemimah) ]" },
      { label: "Personality", type: "info", detail: "[ Type or description ]" },
      { label: "Software version", type: "info", detail: "Jemimah OS 1.0.0" },
      { label: "Serial number", type: "info", detail: "hello@jemimah.example" },
      { label: "Battery", type: "info", detail: "[ Charged by … ]" },
      { label: "Storage", type: "info", detail: "∞ curiosity" },
    ],
  },
];

// ─── Photos ──────────────────────────────────────────────────────────────────

export interface PhotoItem {
  id: string;
  src: string;
  caption: string;
  date: string;
  location: string;
  rotation: number;
  alt?: string;
}

export const photos: PhotoItem[] = [
  { id: "p1", src: "/assets/placeholder-1.svg", caption: "[ Caption ]", date: "[ Date ]",  location: "[ Place ]", rotation: -3, alt: "Placeholder image one" },
  { id: "p2", src: "/assets/placeholder-2.svg", caption: "[ Caption ]", date: "[ Date ]",  location: "[ Place ]", rotation:  2, alt: "Placeholder image two" },
  { id: "p3", src: "/assets/placeholder-3.svg", caption: "[ Caption ]", date: "[ Date ]",  location: "[ Place ]", rotation: -1.5, alt: "Placeholder image three" },
  { id: "p4", src: "/assets/placeholder-4.svg", caption: "[ Caption ]", date: "[ Date ]",  location: "[ Place ]", rotation:  3, alt: "Placeholder image four" },
  { id: "p5", src: "/assets/placeholder-5.svg", caption: "[ Caption ]", date: "[ Date ]",  location: "[ Place ]", rotation: -2, alt: "Placeholder image five" },
  { id: "p6", src: "/assets/placeholder-6.svg", caption: "[ Caption ]", date: "[ Date ]",  location: "[ Place ]", rotation:  2, alt: "Placeholder image six" },
];

// ─── Organizations (Files app) ───────────────────────────────────────────────

export interface Organization {
  id: string;
  name: string;
  shortName: string;
  role: string;
  period: string;
  logo: string | null;
  color: string;
  description: string;
  achievements?: string[];
  photos?: string[];
  link: string;
  category: string;
}

export const organizations: Organization[] = [
  {
    id: "org-1",
    name: "[ Organization one ]",
    shortName: "[ Short ]",
    role: "[ Role ]",
    period: "[ Period ]",
    logo: null,
    color: "#5856D6",
    description: "Placeholder description of what this organization does and your role.",
    achievements: [],
    photos: [],
    link: "https://example.com",
    category: "Professional",
  },
  {
    id: "org-2",
    name: "[ Organization two ]",
    shortName: "[ Short ]",
    role: "[ Role ]",
    period: "[ Period ]",
    logo: null,
    color: "#34C759",
    description: "Placeholder description for a second org.",
    achievements: [],
    photos: [],
    link: "https://example.com",
    category: "Social",
  },
  {
    id: "org-3",
    name: "[ Organization three ]",
    shortName: "[ Short ]",
    role: "[ Role ]",
    period: "[ Period ]",
    logo: null,
    color: "#FF9500",
    description: "Placeholder description for a third org.",
    achievements: [],
    photos: [],
    link: "https://example.com",
    category: "Volunteering",
  },
];

// ─── Music ───────────────────────────────────────────────────────────────────

export const music = {
  currentlyPlaying: {
    title: "[ Track title ]",
    artist: "[ Artist ]",
    spotifyEmbed: "",
  },
  favoriteNewAlbums: [
    { artist: "[ Artist ]", album: "[ Album ]", embedUrl: "" },
    { artist: "[ Artist ]", album: "[ Album ]", embedUrl: "" },
    { artist: "[ Artist ]", album: "[ Album ]", embedUrl: "" },
    { artist: "[ Artist ]", album: "[ Album ]", embedUrl: "" },
  ],
  favoriteOldAlbums: [
    { artist: "[ Artist ]", album: "[ Album ]", embedUrl: "" },
    { artist: "[ Artist ]", album: "[ Album ]", embedUrl: "" },
    { artist: "[ Artist ]", album: "[ Album ]", embedUrl: "" },
    { artist: "[ Artist ]", album: "[ Album ]", embedUrl: "" },
  ],
};

// ─── Files ───────────────────────────────────────────────────────────────────

export const files = [
  { id: "f1", name: "Resume",       kind: "PDF",      size: "—", description: "[ Placeholder for your resume — replace when ready. ]" },
  { id: "f2", name: "Portfolio",    kind: "Folder",   size: "—", description: "[ Selected work samples. ]" },
  { id: "f3", name: "Reading list", kind: "Markdown", size: "—", description: "[ Books and essays worth keeping. ]" },
  { id: "f4", name: "Notes",        kind: "Folder",   size: "—", description: "[ Drafts and fragments. ]" },
];

// ─── Contact ─────────────────────────────────────────────────────────────────

export const contact = {
  email: "hello@jemimah.example",
  emailNote: "Best for thoughtful, longer messages.",
  social: [
    { label: "GitHub",   url: "https://github.com/",        glyph: "G" },
    { label: "LinkedIn", url: "https://www.linkedin.com/",  glyph: "in" },
    { label: "Website",  url: "https://example.com",        glyph: "↗" },
  ],
};

// ─── Notes (kept for backward-compat with editor) ────────────────────────────

export const notes = [
  { id: "n1", title: "[ Note one ]",   body: "[ Placeholder body — replace with your own writing. ]" },
  { id: "n2", title: "[ Note two ]",   body: "[ Placeholder body — replace with your own writing. ]" },
  { id: "n3", title: "[ Note three ]", body: "[ Placeholder body — replace with your own writing. ]" },
];

// ─── App Definitions ────────────────────────────────────────────────────────

export type AppId =
  | "settings"      // About
  | "work"          // Docs / experience
  | "projects"      // Ideas
  | "education"
  | "files"         // Organizations
  | "photos"
  | "contact"       // Mail
  | "spotify"
  | "bible"
  | "jemimahgpt"
  | "youtube"
  | "github"
  | "linkedin"
  | "letterboxd"
  | "rateyourmusic"
  | "x"
  | "substack"
  | "calendar";

export interface AppDef {
  id: AppId;
  name: string;
  emoji?: string;
  icon?: string;
  gradient: [string, string];
  external?: string;
}

export const apps: AppDef[] = [
  {
    id: "settings",
    name: "About",
    emoji: "S",
    icon: "/assets/icons/settingsapp.png",
    gradient: ["#8E8E93", "#636366"],
  },
  {
    id: "work",
    name: "Docs",
    emoji: "W",
    icon: "/assets/icons/googledocs.png",
    gradient: ["#4285F4", "#2962FF"],
  },
  {
    id: "projects",
    name: "Ideas",
    emoji: "I",
    icon: "/assets/icons/ideas.png",
    gradient: ["#FF9500", "#FF5E00"],
  },
  {
    id: "education",
    name: "Education",
    emoji: "E",
    icon: "/assets/icons/notes.png",
    gradient: ["#FF3B30", "#C0392B"],
  },
  {
    id: "files",
    name: "Organizations",
    emoji: "F",
    icon: "/assets/icons/organizations.png",
    gradient: ["#007AFF", "#5AC8FA"],
  },
  {
    id: "photos",
    name: "Photos",
    emoji: "P",
    icon: "/assets/icons/photos.webp",
    gradient: ["#34C759", "#248A3D"],
  },
  {
    id: "contact",
    name: "Mail",
    emoji: "C",
    icon: "/assets/icons/mailapp.png",
    gradient: ["#5AC8FA", "#007AFF"],
  },
  {
    id: "spotify",
    name: "Spotify",
    emoji: "S",
    icon: "/assets/icons/spotify.png",
    gradient: ["#1DB954", "#157A37"],
  },
  {
    id: "bible",
    name: "Bible",
    emoji: "B",
    icon: "/assets/icons/bibleapp.png",
    gradient: ["#D4A017", "#A0770F"],
  },
  {
    id: "jemimahgpt",
    name: "JemimahGPT",
    emoji: "J",
    icon: "/assets/icons/chatgpt.png",
    gradient: ["#10A37F", "#1A7F64"],
  },
  {
    id: "youtube",
    name: "YouTube",
    emoji: "Y",
    icon: "/assets/icons/youtubeapplogo.png",
    gradient: ["#FF0000", "#C0392B"],
    external: "https://www.youtube.com/",
  },
  {
    id: "github",
    name: "GitHub",
    emoji: "G",
    icon: "/assets/icons/github.webp",
    gradient: ["#24292E", "#000000"],
    external: "https://github.com/",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    emoji: "L",
    icon: "/assets/icons/linkedin.jpg",
    gradient: ["#0A66C2", "#004182"],
    external: "https://www.linkedin.com/",
  },
  {
    id: "letterboxd",
    name: "Letterboxd",
    emoji: "L",
    icon: "/assets/icons/letterboxd.png",
    gradient: ["#FF8000", "#E55C00"],
    external: "https://letterboxd.com/",
  },
  {
    id: "rateyourmusic",
    name: "RYM",
    emoji: "R",
    icon: "/assets/icons/rym.png",
    gradient: ["#ED1C24", "#A8001B"],
    external: "https://rateyourmusic.com/",
  },
  {
    id: "x",
    name: "X",
    emoji: "X",
    icon: "/assets/icons/x.jpg",
    gradient: ["#000000", "#14171A"],
    external: "https://x.com/",
  },
  {
    id: "substack",
    name: "Substack",
    emoji: "S",
    icon: "/assets/icons/substack.png",
    gradient: ["#FF6719", "#E05C0A"],
    external: "https://substack.com/",
  },
  {
    id: "calendar",
    name: "Calendar",
    emoji: "C",
    icon: "/assets/icons/calendar_ios.png",
    gradient: ["#FF3B30", "#FF2D55"],
    external: "https://calendly.com/",
  },
];

export const dockApps: AppId[] = [
  "calendar",
  "projects",
  "linkedin",
  "github",
  "youtube",
  "substack",
  "x",
  "letterboxd",
  "rateyourmusic",
];

// ─── Greetings used by the lock screen ────────────────────────────────────

export const greetings = [
  "Welcome.",
  "A quiet place for considered work.",
  "Things worth keeping.",
  "Slow ideas, kept by hand.",
];
