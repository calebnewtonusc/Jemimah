import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface Props {
  orientation: "landscape" | "portrait";
  children: ReactNode;
  onPowerPress?: () => void;
}

// iPad-style outer frame. Numbers chosen for a believable tablet silhouette
// at the working sizes; not a 1:1 reproduction of any specific Apple device.

export default function IPadFrame({ orientation, children, onPowerPress }: Props) {
  const isLandscape = orientation === "landscape";

  const outerW = isLandscape ? 900 : 630;
  const outerH = isLandscape ? 630 : 900;

  const bezelH = isLandscape ? 19 : 22;
  const bezelV = isLandscape ? 22 : 19;
  const screenW = outerW - bezelV * 2;
  const screenH = outerH - bezelH * 2;

  const frameGrad = `
    radial-gradient(ellipse at 25% 15%, #6e8e7c 0%, transparent 50%),
    radial-gradient(ellipse at 75% 85%, #3c5547 0%, transparent 55%),
    linear-gradient(155deg, #5b7d68 0%, #4a6b58 25%, #527466 50%, #465f51 75%, #547869 100%)
  `;

  const btnGrad = isLandscape
    ? "linear-gradient(90deg, #3b5544 0%, #5b7d68 50%, #4a6b58 100%)"
    : "linear-gradient(180deg, #3b5544 0%, #5b7d68 50%, #4a6b58 100%)";

  return (
    <motion.div
      animate={{
        width: outerW,
        height: outerH,
        borderRadius: isLandscape ? 30 : 40,
      }}
      transition={{ type: "spring", stiffness: 260, damping: 28 }}
      style={{
        background: frameGrad,
        position: "relative",
        flexShrink: 0,
        boxShadow: `
          0 0 0 0.5px rgba(0,0,0,0.08) inset,
          0 0 0 1px rgba(0,0,0,0.25),
          0 50px 120px rgba(0,0,0,0.55),
          0 20px 60px rgba(0,0,0,0.35),
          0 8px 24px rgba(0,0,0,0.25),
          inset 0 1px 0 rgba(255,255,255,0.9),
          inset 0 -1px 0 rgba(0,0,0,0.15)
        `,
      }}
    >
      {/* Power button */}
      <motion.div
        onClick={onPowerPress}
        whileTap={onPowerPress ? { scale: 0.9 } : undefined}
        style={{
          position: "absolute",
          ...(isLandscape
            ? { right: -3, top: 64, width: 3, height: 60 }
            : { right: -3, top: 160, width: 3, height: 66 }),
          background: btnGrad,
          borderRadius: "0 3px 3px 0",
          boxShadow: "2px 0 6px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)",
          cursor: onPowerPress ? "pointer" : "default",
        }}
      />
      {/* Volume up */}
      <div
        style={{
          position: "absolute",
          ...(isLandscape
            ? { left: -3, top: 54, width: 3, height: 42 }
            : { left: -3, top: 148, width: 3, height: 44 }),
          background: btnGrad,
          borderRadius: "3px 0 0 3px",
          boxShadow:
            "-2px 0 6px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)",
        }}
      />
      {/* Volume down */}
      <div
        style={{
          position: "absolute",
          ...(isLandscape
            ? { left: -3, top: 108, width: 3, height: 42 }
            : { left: -3, top: 208, width: 3, height: 44 }),
          background: btnGrad,
          borderRadius: "3px 0 0 3px",
          boxShadow:
            "-2px 0 6px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)",
        }}
      />

      {/* Screen */}
      <motion.div
        animate={{
          top: bezelH,
          left: bezelV,
          width: screenW,
          height: screenH,
          borderRadius: isLandscape ? 18 : 26,
        }}
        transition={{ type: "spring", stiffness: 260, damping: 28 }}
        style={{
          position: "absolute",
          overflow: "hidden",
          background: "#0a0a0c",
          boxShadow: "0 0 0 1px rgba(0,0,0,0.9) inset",
        }}
      >
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          {children}
        </div>
      </motion.div>

      {/* Specular shine */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "inherit",
          background:
            "linear-gradient(145deg, rgba(255,255,255,0.45) 0%, transparent 30%, rgba(0,0,0,0.05) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Camera */}
      <div
        style={{
          position: "absolute",
          ...(isLandscape
            ? {
                left: bezelV / 2 - 5,
                top: "50%",
                transform: "translateY(-50%)",
                width: 10,
                height: 10,
              }
            : {
                top: bezelH / 2 - 5,
                left: "50%",
                transform: "translateX(-50%)",
                width: 10,
                height: 10,
              }),
          borderRadius: "50%",
          background: "radial-gradient(circle at 40% 35%, #2a2a2c, #0a0a0c)",
          boxShadow:
            "0 0 0 1.5px rgba(255,255,255,0.06), inset 0 0 4px rgba(0,0,0,0.8)",
        }}
      />
    </motion.div>
  );
}
