import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { AppDef, AppId } from "../../data/content";
import { apps, dockApps, greetings } from "../../data/content";
import { useContent } from "../../data/ContentContext";

interface Props {
  orientation: "landscape" | "portrait";
  onOpenApp: (id: AppId) => void;
  locked: boolean;
  onUnlock: () => void;
}

function LiveCalendarIcon({ size }: { size: number }) {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => setNow(new Date()), []);

  useEffect(() => {
    if (!now) return;
    const ms = new Date(now).setHours(24, 0, 0, 0) - now.getTime();
    const t = setTimeout(() => setNow(new Date()), ms + 1000);
    return () => clearTimeout(t);
  }, [now]);

  const dayStr = now
    ? now.toLocaleDateString("en-US", { weekday: "short" }).toUpperCase()
    : "";
  const dayNum = now ? now.getDate() : "";

  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: size * 0.225,
        overflow: "hidden",
        background: "white",
        display: "flex",
        flexDirection: "column",
        flexShrink: 0,
        boxShadow: "0 0 0 0.5px rgba(0,0,0,0.14)",
      }}
    >
      <div
        style={{
          height: size * 0.32,
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          paddingBottom: size * 0.015,
        }}
      >
        <span
          style={{
            fontSize: size * 0.14,
            fontWeight: 700,
            color: "#FF3B30",
            letterSpacing: 0.6,
            lineHeight: 1,
          }}
        >
          {dayStr}
        </span>
      </div>
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          paddingTop: size * 0.01,
        }}
      >
        <span
          style={{
            fontSize: size * 0.6,
            fontWeight: 200,
            color: "#1c1c1e",
            lineHeight: 1,
          }}
        >
          {dayNum}
        </span>
      </div>
    </div>
  );
}

function AppIcon({
  app,
  size,
  onTap,
  showLabel = true,
}: {
  app: AppDef;
  size: number;
  onTap: (e: React.MouseEvent) => void;
  showLabel?: boolean;
}) {
  return (
    <motion.div
      whileTap={{ scale: 0.85 }}
      whileHover={{ scale: 1.08 }}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
      onClick={onTap}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 6,
        cursor: "pointer",
        width: size + 20,
        userSelect: "none",
      }}
    >
      <div
        style={{
          width: size,
          height: size,
          borderRadius: size * 0.225,
          background:
            app.id === "calendar"
              ? "transparent"
              : app.icon
                ? "rgba(255,255,255,0.12)"
                : `linear-gradient(145deg, ${app.gradient[0]}, ${app.gradient[1]})`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          flexShrink: 0,
          boxShadow:
            app.id === "calendar"
              ? "none"
              : "0 6px 14px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.18)",
        }}
      >
        {app.id === "calendar" ? (
          <LiveCalendarIcon size={size} />
        ) : app.icon ? (
          <img
            src={app.icon}
            alt={app.name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
              transform: app.id === "settings" ? "scale(1.05)" : undefined,
            }}
          />
        ) : (
          <span
            style={{
              fontSize: size * 0.42,
              fontWeight: 600,
              color: "white",
              letterSpacing: -0.5,
              textShadow: "0 1px 2px rgba(0,0,0,0.2)",
            }}
          >
            {app.name.charAt(0)}
          </span>
        )}
      </div>

      {showLabel && (
        <span
          style={{
            fontSize: 11,
            color: "white",
            textAlign: "center",
            fontWeight: 500,
            letterSpacing: -0.1,
            textShadow:
              "0 1px 6px rgba(0,0,0,0.8), 0 0 12px rgba(0,0,0,0.5)",
            maxWidth: size + 16,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            lineHeight: 1.2,
          }}
        >
          {app.name}
        </span>
      )}
    </motion.div>
  );
}

export default function HomeScreen({
  orientation,
  onOpenApp,
  locked,
  onUnlock,
}: Props) {
  const isLandscape = orientation === "landscape";
  const { profile } = useContent();

  const [time, setTime] = useState(new Date());
  const [greetIdx, setGreetIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const t = setInterval(
      () => setGreetIdx((i) => (i + 1) % greetings.length),
      4000,
    );
    return () => clearInterval(t);
  }, []);

  const timeStr = time.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: false,
  });
  const dateStr = time.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  const cols = isLandscape ? 5 : 4;
  const iconSize = isLandscape ? 68 : 72;

  const dockAppDefs = dockApps
    .map((id) => apps.find((a) => a.id === id))
    .filter((a): a is AppDef => Boolean(a));

  const nonDockApps = apps.filter((a) => !dockApps.includes(a.id));

  // Insert spacers so the layout breathes nicely on landscape vs portrait.
  const gridItems: (AppDef | null)[] = isLandscape
    ? (() => {
        const out: (AppDef | null)[] = [];
        for (const a of nonDockApps) {
          if (out.length % 5 === 2) out.push(null);
          out.push(a);
        }
        return out;
      })()
    : (() => {
        const out: (AppDef | null)[] = [];
        for (const a of nonDockApps) {
          const col = out.length % 4;
          if (col === 1) {
            out.push(null, null);
          }
          out.push(a);
        }
        return out;
      })();

  const handleOpen = (app: AppDef) => {
    if (app.external) {
      window.open(app.external, "_blank", "noopener,noreferrer");
      return;
    }
    onOpenApp(app.id);
  };

  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Wallpaper */}
      <img
        src="/assets/wallpaper-home.svg"
        alt=""
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.18)",
        }}
      />

      {/* Lock screen */}
      <AnimatePresence>
        {locked && (
          <motion.div
            initial={{ y: "0%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
            onClick={onUnlock}
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 30,
              cursor: "pointer",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
              padding: isLandscape ? "26px 0 16px" : "36px 0 22px",
            }}
          >
            <img
              src="/assets/wallpaper-lock.svg"
              alt=""
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "rgba(0,0,0,0.22)",
              }}
            />

            <div
              style={{
                position: "relative",
                zIndex: 2,
                textAlign: "center",
                color: "white",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  fontSize: isLandscape ? 60 : 72,
                  fontWeight: 200,
                  letterSpacing: -2,
                  lineHeight: 1,
                }}
              >
                {timeStr}
              </div>
              <div
                style={{
                  fontSize: 16,
                  fontWeight: 400,
                  marginTop: 8,
                  opacity: 0.9,
                }}
              >
                {dateStr}
              </div>
              <div style={{ marginTop: isLandscape ? 16 : 20 }}>
                <div
                  style={{
                    fontSize: isLandscape ? 22 : 24,
                    fontWeight: 600,
                    letterSpacing: -0.4,
                  }}
                >
                  {profile.name}
                </div>
                <div
                  style={{
                    marginTop: 6,
                    fontSize: 13,
                    opacity: 0.85,
                    fontStyle: "italic",
                  }}
                >
                  {greetings[greetIdx]}
                </div>
              </div>
            </div>

            <div
              style={{
                position: "relative",
                zIndex: 2,
                color: "rgba(255,255,255,0.65)",
                fontSize: 12,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 4,
              }}
            >
              <motion.div
                animate={{ y: [-2, 2, -2] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M18 15l-6-6-6 6"
                    stroke="rgba(255,255,255,0.65)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.div>
              <span>Tap to unlock</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Home content */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            padding: isLandscape ? "44px 24px 8px" : "52px 16px 8px",
            overflow: "hidden",
          }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.25 }}
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${cols}, 1fr)`,
              gap: isLandscape ? "20px 8px" : "22px 4px",
              justifyItems: "center",
              alignContent: "start",
            }}
          >
            {gridItems.map((app, i) =>
              app === null ? (
                <div
                  key={`spacer-${i}`}
                  style={{
                    width: iconSize + 20,
                    height: iconSize + 24,
                    visibility: "hidden",
                  }}
                />
              ) : (
                <AppIcon
                  key={app.id}
                  app={app}
                  size={iconSize}
                  onTap={() => handleOpen(app)}
                />
              ),
            )}
          </motion.div>
        </div>

        {/* Dock */}
        <div
          style={{
            padding: isLandscape ? "0 24px 10px" : "0 16px 12px",
            flexShrink: 0,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              gap: 8,
              padding: isLandscape ? "10px 18px" : "10px 14px",
              borderRadius: 28,
              background: "rgba(255,255,255,0.16)",
              backdropFilter: "blur(20px) saturate(1.5)",
              WebkitBackdropFilter: "blur(20px) saturate(1.5)",
              boxShadow:
                "inset 0 1px 0 rgba(255,255,255,0.25), 0 6px 24px rgba(0,0,0,0.25)",
            }}
          >
            {dockAppDefs.map((app) => (
              <AppIcon
                key={app.id}
                app={app}
                size={isLandscape ? 48 : 52}
                onTap={() => handleOpen(app)}
                showLabel={false}
              />
            ))}
          </div>
        </div>

        <div
          style={{
            height: 14,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingBottom: 4,
            flexShrink: 0,
          }}
        >
          <div
            style={{
              width: 120,
              height: 4,
              borderRadius: 2,
              background: "rgba(255,255,255,0.55)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
