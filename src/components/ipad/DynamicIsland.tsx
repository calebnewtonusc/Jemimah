import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useContent } from "../../data/ContentContext";

export default function DynamicIsland() {
  const [expanded, setExpanded] = useState(false);
  const { profile } = useContent();

  return (
    <div
      style={{
        position: "absolute",
        top: 8,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 30,
        cursor: "pointer",
      }}
      onClick={() => setExpanded((v) => !v)}
    >
      <motion.div
        animate={{
          width: expanded ? 280 : 124,
          height: expanded ? 64 : 30,
          borderRadius: expanded ? 28 : 18,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 35 }}
        style={{
          background: "#0c0c0d",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
        }}
      >
        <AnimatePresence mode="wait">
          {expanded ? (
            <motion.div
              key="expanded"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.18 }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "0 16px",
                width: "100%",
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  background:
                    "linear-gradient(135deg, #7aa68a, #3f6b53)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 16,
                  flexShrink: 0,
                  color: "white",
                  fontWeight: 600,
                }}
              >
                {profile.name.charAt(0)}
              </div>
              <div style={{ overflow: "hidden" }}>
                <div
                  style={{
                    color: "white",
                    fontSize: 12,
                    fontWeight: 600,
                    letterSpacing: 0.2,
                    whiteSpace: "nowrap",
                  }}
                >
                  {profile.name}
                </div>
                <div
                  style={{
                    color: "rgba(255,255,255,0.6)",
                    fontSize: 11,
                    letterSpacing: 0.1,
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                  }}
                >
                  {profile.tagline}
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="collapsed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
