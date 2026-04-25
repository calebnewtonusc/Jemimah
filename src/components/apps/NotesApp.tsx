import { useState } from "react";
import { useContent } from "../../data/ContentContext";

export default function NotesApp() {
  const { notes, setNote, addNote, removeNote } = useContent();
  const [activeId, setActiveId] = useState<string | null>(notes[0]?.id ?? null);
  const active = notes.find((n) => n.id === activeId) ?? notes[0];

  return (
    <div style={{ display: "flex", height: "100%", color: "#1c1c1e" }}>
      <aside
        style={{
          width: 220,
          flexShrink: 0,
          borderRight: "0.5px solid rgba(60,60,67,0.18)",
          background: "#fbfaf3",
          display: "flex",
          flexDirection: "column",
          maxHeight: "100%",
        }}
      >
        <div
          style={{
            padding: "14px 14px 8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span style={{ fontSize: 14, fontWeight: 600 }}>Notes</span>
          <button
            type="button"
            onClick={addNote}
            style={pillBtn}
            aria-label="Add note"
          >
            + New
          </button>
        </div>
        <div style={{ overflowY: "auto", flex: 1 }}>
          {notes.map((n) => (
            <button
              type="button"
              key={n.id}
              onClick={() => setActiveId(n.id)}
              style={{
                display: "block",
                width: "100%",
                textAlign: "left",
                padding: "10px 14px",
                border: "none",
                background:
                  active?.id === n.id ? "#f4ecca" : "transparent",
                cursor: "pointer",
                borderBottom: "0.5px solid rgba(60,60,67,0.1)",
              }}
            >
              <div
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {n.title || "Untitled"}
              </div>
              <div
                style={{
                  fontSize: 12,
                  color: "#8a8a8e",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  marginTop: 2,
                }}
              >
                {n.body.slice(0, 60)}
              </div>
            </button>
          ))}
        </div>
      </aside>

      <section style={{ flex: 1, padding: 16, display: "flex", flexDirection: "column" }}>
        {active ? (
          <>
            <input
              value={active.title}
              onChange={(e) => setNote(active.id, { title: e.target.value })}
              placeholder="Title"
              style={{
                fontSize: 22,
                fontWeight: 700,
                border: "none",
                outline: "none",
                background: "transparent",
                color: "#1c1c1e",
                marginBottom: 8,
              }}
            />
            <textarea
              value={active.body}
              onChange={(e) => setNote(active.id, { body: e.target.value })}
              placeholder="Write something worth keeping…"
              style={{
                flex: 1,
                resize: "none",
                border: "none",
                outline: "none",
                background: "transparent",
                fontSize: 15,
                lineHeight: 1.55,
                color: "#1c1c1e",
                fontFamily: "inherit",
              }}
            />
            <div style={{ paddingTop: 8, display: "flex", justifyContent: "flex-end" }}>
              <button
                type="button"
                onClick={() => {
                  removeNote(active.id);
                  const remaining = notes.filter((n) => n.id !== active.id);
                  setActiveId(remaining[0]?.id ?? null);
                }}
                style={{ ...pillBtn, color: "#b94a4a" }}
              >
                Delete
              </button>
            </div>
          </>
        ) : (
          <p style={{ color: "#8a8a8e" }}>No notes — tap “+ New” to add one.</p>
        )}
      </section>
    </div>
  );
}

const pillBtn: React.CSSProperties = {
  fontSize: 12,
  fontWeight: 600,
  padding: "5px 10px",
  borderRadius: 999,
  background: "rgba(60,60,67,0.08)",
  color: "#3a3a3c",
  border: "none",
  cursor: "pointer",
};
