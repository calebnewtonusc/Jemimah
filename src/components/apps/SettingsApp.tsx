// "About" app on the home screen — mirrors Caleb's SettingsApp:
// a personal "About this device" style settings list with sections.
import { useState } from "react";
import { useContent } from "../../data/ContentContext";

export default function SettingsApp() {
  const { profile, personalSettings, setProfile } = useContent();
  const [activeSection, setActiveSection] = useState(0);

  const section = personalSettings[activeSection];

  return (
    <div style={{ display: "flex", height: "100%", background: "#f2f2f7" }}>
      {/* Sidebar */}
      <div
        style={{
          width: 220,
          flexShrink: 0,
          borderRight: "0.5px solid rgba(60,60,67,0.18)",
          background: "rgba(255,255,255,0.6)",
          overflowY: "auto",
          padding: "12px 0",
        }}
      >
        <div style={{ padding: "12px 16px 6px" }}>
          <div style={{ fontSize: 22, fontWeight: 700, letterSpacing: -0.5 }}>
            About
          </div>
          <div style={{ fontSize: 12, color: "#8a8a8e", marginTop: 2 }}>
            {profile.name}
          </div>
        </div>

        {personalSettings.map((s, i) => (
          <button
            key={s.section}
            onClick={() => setActiveSection(i)}
            style={{
              display: "block",
              width: "100%",
              textAlign: "left",
              padding: "10px 16px",
              background: i === activeSection ? "rgba(0,122,255,0.12)" : "transparent",
              border: "none",
              cursor: "pointer",
              fontSize: 14,
              color: i === activeSection ? "#007AFF" : "#1c1c1e",
              fontWeight: i === activeSection ? 600 : 500,
            }}
          >
            {s.section}
          </button>
        ))}
      </div>

      {/* Content */}
      <div
        className="ios-scroll"
        style={{ flex: 1, overflowY: "auto", padding: "20px 24px" }}
      >
        <h2 style={{ fontSize: 20, fontWeight: 700, marginTop: 0, marginBottom: 14 }}>
          {section.section}
        </h2>

        <div
          style={{
            background: "white",
            borderRadius: 12,
            overflow: "hidden",
            boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
          }}
        >
          {section.items.map((item, i) => (
            <div
              key={item.label}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "14px 16px",
                borderBottom:
                  i < section.items.length - 1
                    ? "0.5px solid rgba(60,60,67,0.12)"
                    : "none",
                gap: 16,
              }}
            >
              <div style={{ fontSize: 14, color: "#1c1c1e", fontWeight: 500 }}>
                {item.label}
              </div>
              {item.type === "toggle-on" || item.type === "toggle-off" ? (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  <span
                    style={{
                      fontSize: 12,
                      color: "#8a8a8e",
                      maxWidth: 220,
                      textAlign: "right",
                    }}
                  >
                    {item.detail}
                  </span>
                  <div
                    style={{
                      width: 44,
                      height: 26,
                      borderRadius: 13,
                      background:
                        item.type === "toggle-on" ? "#34C759" : "#e3e3e6",
                      position: "relative",
                      flexShrink: 0,
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: 2,
                        left: item.type === "toggle-on" ? 20 : 2,
                        width: 22,
                        height: 22,
                        borderRadius: "50%",
                        background: "white",
                        boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
                        transition: "left 0.2s",
                      }}
                    />
                  </div>
                </div>
              ) : (
                <span
                  style={{
                    fontSize: 13,
                    color: "#8a8a8e",
                    maxWidth: 320,
                    textAlign: "right",
                  }}
                >
                  {item.detail}
                </span>
              )}
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: 22,
            padding: "12px 16px",
            background: "white",
            borderRadius: 12,
            boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
          }}
        >
          <div
            style={{
              fontSize: 12,
              color: "#8a8a8e",
              textTransform: "uppercase",
              letterSpacing: 0.5,
              marginBottom: 8,
            }}
          >
            Quick edit · name
          </div>
          <input
            value={profile.name}
            onChange={(e) => setProfile({ name: e.target.value })}
            style={{
              width: "100%",
              border: "1px solid rgba(60,60,67,0.18)",
              padding: "8px 10px",
              borderRadius: 8,
              fontSize: 14,
            }}
          />
        </div>
      </div>
    </div>
  );
}
