// Mirrors Caleb's PhotosApp: scattered polaroid-style gallery.
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useContent } from "../../data/ContentContext";

export default function PhotosApp() {
  const { photos } = useContent();
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  return (
    <div style={{ height: "100%", background: "#1c1c1e", color: "white", overflow: "hidden", position: "relative" }}>
      <div
        style={{
          padding: "18px 22px",
          borderBottom: "0.5px solid rgba(255,255,255,0.08)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
        }}
      >
        <div>
          <div style={{ fontSize: 22, fontWeight: 700, letterSpacing: -0.5 }}>Photos</div>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.6)", marginTop: 2 }}>
            {photos.length} memories
          </div>
        </div>
      </div>

      <div className="ios-scroll" style={{ height: "calc(100% - 64px)", overflowY: "auto", padding: 24 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
            gap: 24,
          }}
        >
          {photos.map((p, i) => (
            <motion.button
              key={p.id}
              whileHover={{ rotate: 0, scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveIdx(i)}
              style={{
                background: "white",
                padding: 10,
                paddingBottom: 22,
                border: "none",
                cursor: "pointer",
                boxShadow: "0 8px 22px rgba(0,0,0,0.4)",
                transform: `rotate(${p.rotation}deg)`,
                display: "flex",
                flexDirection: "column",
                gap: 8,
              }}
            >
              <img
                src={p.src}
                alt={p.alt ?? p.caption}
                style={{
                  width: "100%",
                  aspectRatio: "1 / 1",
                  objectFit: "cover",
                  background: "#dde6df",
                }}
              />
              <div style={{ fontSize: 11, color: "#3a3a3c", textAlign: "center", fontFamily: "Caveat, cursive" }}>
                {p.caption}
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeIdx !== null && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveIdx(null)}
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(0,0,0,0.85)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 32,
              zIndex: 60,
            }}
          >
            <img
              src={photos[activeIdx].src}
              alt={photos[activeIdx].alt ?? photos[activeIdx].caption}
              style={{ maxWidth: "100%", maxHeight: "80%", borderRadius: 12, objectFit: "contain" }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 28,
                left: 0,
                right: 0,
                textAlign: "center",
                color: "white",
                fontSize: 13,
                opacity: 0.85,
              }}
            >
              {photos[activeIdx].caption} · {photos[activeIdx].location} · {photos[activeIdx].date}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
