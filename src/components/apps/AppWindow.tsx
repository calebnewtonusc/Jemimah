import { motion, AnimatePresence } from "framer-motion";
import type { ReactNode } from "react";
import type { AppId } from "../../data/content";
import { apps } from "../../data/content";

import AboutApp from "./AboutApp";
import EducationApp from "./EducationApp";
import WorkApp from "./WorkApp";
import SkillsApp from "./SkillsApp";
import PhotosApp from "./PhotosApp";
import MusicApp from "./MusicApp";
import FilesApp from "./FilesApp";
import NotesApp from "./NotesApp";
import ContactApp from "./ContactApp";
import SettingsApp from "./SettingsApp";
import JemimahGPTApp from "./JemimahGPTApp";

interface Props {
  appId: AppId | null;
  onClose: () => void;
}

const appMap: Partial<Record<AppId, () => ReactNode>> = {
  about: () => <AboutApp />,
  education: () => <EducationApp />,
  work: () => <WorkApp />,
  skills: () => <SkillsApp />,
  photos: () => <PhotosApp />,
  music: () => <MusicApp />,
  files: () => <FilesApp />,
  notes: () => <NotesApp />,
  contact: () => <ContactApp />,
  settings: () => <SettingsApp />,
  jemimahgpt: () => <JemimahGPTApp />,
};

export default function AppWindow({ appId, onClose }: Props) {
  const def = appId ? apps.find((a) => a.id === appId) : null;
  const render = appId ? appMap[appId] : null;

  return (
    <AnimatePresence>
      {appId && def && render && (
        <motion.div
          key={appId}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.92 }}
          transition={{ type: "spring", stiffness: 320, damping: 30 }}
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 25,
            display: "flex",
            flexDirection: "column",
            background: "var(--ios-bg, #f2f2f7)",
          }}
        >
          {/* App header */}
          <div
            style={{
              flexShrink: 0,
              height: 52,
              paddingTop: 8,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "8px 16px 0",
              borderBottom: "0.5px solid rgba(60,60,67,0.18)",
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.95), rgba(255,255,255,0.85))",
              backdropFilter: "blur(18px)",
              WebkitBackdropFilter: "blur(18px)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 6,
                  background: `linear-gradient(145deg, ${def.gradient[0]}, ${def.gradient[1]})`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontWeight: 700,
                  fontSize: 13,
                }}
              >
                {def.glyph ?? def.name.charAt(0)}
              </div>
              <span
                style={{
                  fontSize: 16,
                  fontWeight: 600,
                  color: "#1c1c1e",
                  letterSpacing: -0.3,
                }}
              >
                {def.name}
              </span>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              style={{
                width: 28,
                height: 28,
                borderRadius: "50%",
                background: "rgba(60,60,67,0.12)",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#3a3a3c",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M3 3l8 8M11 3l-8 8"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          {/* App body */}
          <div
            className="ios-scroll"
            style={{
              flex: 1,
              overflowY: "auto",
              overflowX: "hidden",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {render()}
          </div>

          {/* Home indicator */}
          <div
            style={{
              flexShrink: 0,
              height: 14,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "transparent",
            }}
          >
            <div
              style={{
                width: 120,
                height: 4,
                borderRadius: 2,
                background: "rgba(0,0,0,0.5)",
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
