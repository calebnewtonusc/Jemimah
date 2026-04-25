import { useEffect, useState } from "react";
import { Logo } from "./Logo";

type Theme = "light" | "dark";

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

const NOTES = [
  {
    title: "On slowness",
    body: "Some work asks to be hurried; the better part of it does not. Jemimah is for the latter — the kind that gets stronger when given a little more time than it seems to need.",
  },
  {
    title: "On revision",
    body: "First drafts arrive in a rush. Second drafts are quieter. Third drafts often look like the first one, but with the noise removed. Most of the work is the removing.",
  },
  {
    title: "On keeping",
    body: "A small notebook outlives a large hard drive. Write the thing down. Reread it later. The ones worth keeping will tell you so by being still alive when you return.",
  },
];

const ThemeIcon = ({ theme }: { theme: Theme }) =>
  theme === "dark" ? (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  ) : (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z" />
    </svg>
  );

export default function App() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  // Follow system theme changes when the user hasn't explicitly toggled.
  // We always reflect the user's last in-session choice without persistence.
  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e: MediaQueryListEvent) =>
      setTheme(e.matches ? "dark" : "light");
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const toggleTheme = () =>
    setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <div className="shell">
      <header className="site-header" role="banner">
        <div className="container">
          <a href="#top" className="brand" aria-label="Jemimah, home">
            <Logo className="brand-mark" />
            <span>Jemimah</span>
          </a>
          <nav className="nav" aria-label="Primary">
            <a href="#notes">Notes</a>
            <a href="#about">About</a>
            <button
              type="button"
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
              aria-pressed={theme === "dark"}
            >
              <ThemeIcon theme={theme} />
            </button>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="container">
            <p className="eyebrow reveal">A small, considered space</p>
            <h1 id="hero-title" className="reveal" data-delay="1">
              For slow ideas <br />
              and <em>quiet craft.</em>
            </h1>
            <p className="lede reveal" data-delay="2">
              Jemimah is a place to keep the things worth keeping — fragments,
              first drafts, late-night notes, and the patient work of returning
              to them. No feed, no streaks, no audience.
            </p>
            <div className="cta-row reveal" data-delay="3">
              <a className="btn btn-primary" href="#notes">
                Read the notes
              </a>
              <a className="btn btn-ghost" href="#about">
                What this is
              </a>
            </div>
          </div>
        </section>

        <section id="notes" aria-labelledby="notes-title">
          <div className="container">
            <header className="section-head">
              <h2 id="notes-title">Three short notes</h2>
              <span className="section-meta">№ 001 — 003</span>
            </header>
            <ol className="notes" aria-label="Notes">
              {NOTES.map((n, i) => (
                <li className="note" key={n.title}>
                  <span className="index">
                    №&nbsp;{String(i + 1).padStart(3, "0")}
                  </span>
                  <h3>{n.title}</h3>
                  <p>{n.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="quote" aria-label="A line worth keeping">
          <div className="container">
            <blockquote>
              “The work is to keep the small flame lit, and to walk by its
              light, and to write down what it shows you.”
            </blockquote>
            <cite>From the journal — March</cite>
          </div>
        </section>

        <section id="about" aria-labelledby="about-title">
          <div className="container">
            <header className="section-head">
              <h2 id="about-title">About Jemimah</h2>
              <span className="section-meta">A note from the maker</span>
            </header>
            <p
              style={{
                color: "var(--ink-soft)",
                maxWidth: "38rem",
                fontSize: "1.05rem",
                lineHeight: 1.7,
              }}
            >
              Jemimah is a quiet single-page companion — a small home for
              writing that resists the pull toward immediacy. It is named for
              the word that means dove: a thing that goes out, looks for land,
              and comes back. There is no account to make, nothing to install,
              no notification that will ever arrive. Open it when there is
              time. Close it when there isn’t.
            </p>
          </div>
        </section>
      </main>

      <footer className="site-footer" role="contentinfo">
        <div className="container">
          <span>© Jemimah — kept by hand.</span>
          <span>
            Built with care.{" "}
            <a href="#top" aria-label="Back to top">
              Back to top ↑
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
}
