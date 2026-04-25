import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import IPadFrame from "./components/ipad/IPadFrame";
import HomeScreen from "./components/ipad/HomeScreen";
import StatusBar from "./components/ipad/StatusBar";
import DynamicIsland from "./components/ipad/DynamicIsland";
import AppWindow from "./components/apps/AppWindow";
import type { AppId } from "./data/content";
import { ContentProvider, useContent } from "./data/ContentContext";

type Theme = "light" | "dark";
type Orientation = "landscape" | "portrait";

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function IPadDesk() {
  const { profile } = useContent();
  const [orientation, setOrientation] = useState<Orientation>("landscape");
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const [openApp, setOpenApp] = useState<AppId | null>(null);
  const [locked, setLocked] = useState(true);
  const [screenOff, setScreenOff] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.dataset.orientation = orientation;
  }, [theme, orientation]);

  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail as Partial<{
        theme: Theme;
        orientation: Orientation;
      }>;
      if (detail?.theme) setTheme(detail.theme);
      if (detail?.orientation) setOrientation(detail.orientation);
    };
    window.addEventListener("appearance-change", handler);
    return () => window.removeEventListener("appearance-change", handler);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e: MediaQueryListEvent) =>
      setTheme(e.matches ? "dark" : "light");
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // 3D drag-to-rotate on the iPad chassis
  const rotX = useMotionValue(0);
  const rotY = useMotionValue(0);
  const springX = useSpring(rotX, { stiffness: 260, damping: 28 });
  const springY = useSpring(rotY, { stiffness: 260, damping: 28 });
  const dragRef = useRef({
    active: false,
    startX: 0,
    startY: 0,
    rx: 0,
    ry: 0,
  });
  const [isDragging, setIsDragging] = useState(false);

  const xform = useTransform(
    [springX, springY] as never,
    ([x, y]: number[]) =>
      `perspective(1400px) rotateX(${x}deg) rotateY(${y}deg)`,
  );

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (
      e.target instanceof HTMLElement &&
      e.target.closest(".ipad-screen-area")
    )
      return;
    dragRef.current = {
      active: true,
      startX: e.clientX,
      startY: e.clientY,
      rx: rotX.get(),
      ry: rotY.get(),
    };
    setIsDragging(true);
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragRef.current.active) return;
    const dx = e.clientX - dragRef.current.startX;
    const dy = e.clientY - dragRef.current.startY;
    rotX.set(Math.max(-22, Math.min(22, dragRef.current.rx - dy * 0.18)));
    rotY.set(Math.max(-22, Math.min(22, dragRef.current.ry + dx * 0.18)));
  };
  const onPointerUp = () => {
    dragRef.current.active = false;
    setIsDragging(false);
    rotX.set(0);
    rotY.set(0);
  };

  const wrapperBg =
    theme === "dark"
      ? "radial-gradient(ellipse at 30% 30%, rgba(60,80,70,0.35), transparent 55%), radial-gradient(ellipse at 70% 70%, rgba(40,60,50,0.3), transparent 50%), linear-gradient(160deg, #06090707 0%, #0c1410 35%, #090e0b 100%)"
      : "radial-gradient(ellipse at 30% 30%, rgba(190,210,200,0.7), transparent 55%), radial-gradient(ellipse at 70% 70%, rgba(170,200,185,0.65), transparent 50%), linear-gradient(160deg, #f5f7f3 0%, #e5ece4 35%, #d8e1d6 100%)";

  const labelGrad =
    theme === "dark"
      ? "linear-gradient(160deg, #ffffff 0%, #d4e8d4 55%, #a8cca8 100%)"
      : "linear-gradient(160deg, #2c3a32 0%, #4a6b58 55%, #7a9a85 100%)";

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        overflow: "hidden",
        background: wrapperBg,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Side labels: "<Name>'s" left, "iPad" right */}
      <div
        style={{
          position: "fixed",
          left: 12,
          top: 0,
          bottom: 0,
          display: "flex",
          alignItems: "center",
          fontSize: "clamp(3rem, 9vh, 8rem)",
          fontWeight: 900,
          background: labelGrad,
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
          letterSpacing: "-0.04em",
          writingMode: "vertical-rl",
          transform: "rotate(180deg)",
          padding: "1.5rem 0",
          lineHeight: 1,
          pointerEvents: "none",
          userSelect: "none",
          zIndex: 1,
        }}
      >
        {profile.name}'s
      </div>
      <div
        style={{
          position: "fixed",
          right: 12,
          top: 0,
          bottom: 0,
          display: "flex",
          alignItems: "center",
          fontSize: "clamp(3rem, 9vh, 8rem)",
          fontWeight: 900,
          background: labelGrad,
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
          letterSpacing: "-0.04em",
          writingMode: "vertical-rl",
          padding: "1.5rem 0",
          lineHeight: 1,
          pointerEvents: "none",
          userSelect: "none",
          zIndex: 1,
        }}
      >
        iPad
      </div>

      <motion.div
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        style={{
          transform: xform,
          transformStyle: "preserve-3d",
          touchAction: "none",
          cursor: isDragging ? "grabbing" : "grab",
        }}
      >
        <IPadFrame
          orientation={orientation}
          onPowerPress={() => setScreenOff((v) => !v)}
        >
          <div
            className="ipad-screen-area"
            style={{ width: "100%", height: "100%", position: "relative" }}
          >
            {screenOff ? (
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  background: "#0a0a0c",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "rgba(255,255,255,0.35)",
                  fontSize: 13,
                  cursor: "pointer",
                }}
                onClick={() => setScreenOff(false)}
              >
                tap to wake
              </div>
            ) : (
              <>
                <StatusBar
                  orientation={orientation}
                  inverted={openApp != null}
                />
                <DynamicIsland />
                <HomeScreen
                  orientation={orientation}
                  onOpenApp={(id) => setOpenApp(id)}
                  locked={locked}
                  onUnlock={() => setLocked(false)}
                />
                <AppWindow appId={openApp} onClose={() => setOpenApp(null)} />
              </>
            )}
          </div>
        </IPadFrame>
      </motion.div>

      <div
        style={{
          position: "fixed",
          bottom: 12,
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: 11,
          color: theme === "dark" ? "rgba(255,255,255,0.6)" : "rgba(0,0,0,0.55)",
          background:
            theme === "dark" ? "rgba(0,0,0,0.35)" : "rgba(255,255,255,0.55)",
          padding: "5px 10px",
          borderRadius: 999,
          letterSpacing: 0.3,
          pointerEvents: "none",
          zIndex: 5,
        }}
      >
        Drag the frame to tilt · Press the side button to sleep · Open Settings
        to edit
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ContentProvider>
      <IPadDesk />
    </ContentProvider>
  );
}
