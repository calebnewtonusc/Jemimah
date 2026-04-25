// "JemimahGPT" — mirrors Caleb's CalebGPTApp: simple chat UI with placeholder
// canned responses. Wire to a real LLM later.
import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { useContent } from "../../data/ContentContext";

interface Message {
  id: string;
  role: "user" | "assistant";
  body: string;
}

const STARTERS = [
  "Tell me about yourself",
  "What are you working on?",
  "What inspires your work?",
  "How can I get in touch?",
];

export default function JemimahGPTApp() {
  const { profile } = useContent();
  const [messages, setMessages] = useState<Message[]>([]);
  const [draft, setDraft] = useState("");

  const send = (text: string) => {
    if (!text.trim()) return;
    const id = String(Date.now());
    setMessages((m) => [
      ...m,
      { id, role: "user", body: text },
      {
        id: id + "_a",
        role: "assistant",
        body:
          "[ Placeholder reply — JemimahGPT will eventually answer in Jemimah's voice. For now, this is template text you can replace by wiring an LLM in src/components/apps/JemimahGPTApp.tsx. ]",
      },
    ]);
    setDraft("");
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    send(draft);
  };

  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", background: "#f7f7f8" }}>
      <div
        style={{
          padding: "16px 22px",
          borderBottom: "0.5px solid rgba(60,60,67,0.12)",
          background: "white",
          display: "flex",
          alignItems: "center",
          gap: 12,
        }}
      >
        <div
          style={{
            width: 32,
            height: 32,
            borderRadius: 8,
            background: "linear-gradient(145deg, #10A37F, #1A7F64)",
            color: "white",
            fontSize: 14,
            fontWeight: 700,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          J
        </div>
        <div>
          <div style={{ fontSize: 15, fontWeight: 600 }}>JemimahGPT</div>
          <div style={{ fontSize: 12, color: "#8a8a8e" }}>Trained on {profile.name}'s notes (placeholder)</div>
        </div>
      </div>

      <div className="ios-scroll" style={{ flex: 1, overflowY: "auto", padding: 22 }}>
        {messages.length === 0 ? (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "30px 0", gap: 16 }}>
            <div style={{ fontSize: 18, fontWeight: 600, color: "#3a3a3c" }}>How can I help you?</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center", maxWidth: 540 }}>
              {STARTERS.map((s) => (
                <button
                  key={s}
                  onClick={() => send(s)}
                  style={{
                    padding: "10px 14px",
                    border: "1px solid rgba(60,60,67,0.18)",
                    borderRadius: 14,
                    background: "white",
                    fontSize: 13,
                    cursor: "pointer",
                  }}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {messages.map((m) => (
              <motion.div
                key={m.id}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                  alignSelf: m.role === "user" ? "flex-end" : "flex-start",
                  maxWidth: "78%",
                  padding: "10px 14px",
                  borderRadius: 18,
                  background: m.role === "user" ? "#007AFF" : "white",
                  color: m.role === "user" ? "white" : "#1c1c1e",
                  fontSize: 14,
                  lineHeight: 1.45,
                  boxShadow: m.role === "user" ? "none" : "0 1px 4px rgba(0,0,0,0.06)",
                }}
              >
                {m.body}
              </motion.div>
            ))}
          </div>
        )}
      </div>

      <form
        onSubmit={onSubmit}
        style={{
          padding: 16,
          borderTop: "0.5px solid rgba(60,60,67,0.12)",
          background: "white",
          display: "flex",
          gap: 10,
        }}
      >
        <input
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          placeholder="Ask JemimahGPT…"
          style={{
            flex: 1,
            padding: "10px 14px",
            border: "1px solid rgba(60,60,67,0.18)",
            borderRadius: 999,
            fontSize: 14,
          }}
        />
        <button
          type="submit"
          disabled={!draft.trim()}
          style={{
            padding: "10px 18px",
            borderRadius: 999,
            border: "none",
            background: draft.trim() ? "#10A37F" : "rgba(60,60,67,0.2)",
            color: "white",
            fontSize: 14,
            cursor: draft.trim() ? "pointer" : "not-allowed",
          }}
        >
          Send
        </button>
      </form>
    </div>
  );
}
