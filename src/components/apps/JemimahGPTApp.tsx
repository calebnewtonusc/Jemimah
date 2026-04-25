import { useState, type FormEvent } from "react";
import { useContent } from "../../data/ContentContext";

interface Message {
  id: string;
  role: "user" | "assistant";
  text: string;
}

const SUGGESTIONS = [
  "What's this site about?",
  "Tell me about Jemimah",
  "What do you do?",
  "How can I get in touch?",
];

// Tiny rule-based "assistant" — no API. Everything it says is grounded in the
// editable content. Real AI integration can be added later by swapping out
// answerLocal with a server route.
function answerLocal(
  q: string,
  ctx: { profile: { name: string; bio: string; location: string }; contact: { email: string } },
): string {
  const t = q.toLowerCase();
  if (t.includes("name")) return `Her name is ${ctx.profile.name}.`;
  if (t.includes("about") || t.includes("who"))
    return `${ctx.profile.bio}`;
  if (t.includes("where") || t.includes("location"))
    return `Based in ${ctx.profile.location}.`;
  if (t.includes("contact") || t.includes("email") || t.includes("reach"))
    return `Email is the best way: ${ctx.contact.email}.`;
  return `This is a placeholder Jemimah GPT — it answers from the content in the Settings app. Try asking about ${ctx.profile.name}, the work, or how to get in touch.`;
}

export default function JemimahGPTApp() {
  const { profile, contact } = useContent();
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "intro",
      role: "assistant",
      text: `Hi — I'm a small placeholder assistant for ${profile.name}'s site. Ask me anything about the content here.`,
    },
  ]);

  const send = (e?: FormEvent) => {
    e?.preventDefault();
    const q = input.trim();
    if (!q) return;
    const userMsg: Message = { id: `${Date.now()}-u`, role: "user", text: q };
    const reply: Message = {
      id: `${Date.now()}-a`,
      role: "assistant",
      text: answerLocal(q, { profile, contact }),
    };
    setMessages((m) => [...m, userMsg, reply]);
    setInput("");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        background: "#0c0c0d",
        color: "white",
      }}
    >
      <div
        style={{
          flex: 1,
          overflowY: "auto",
          padding: 16,
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}
      >
        {messages.map((m) => (
          <div
            key={m.id}
            style={{
              alignSelf: m.role === "user" ? "flex-end" : "flex-start",
              maxWidth: "78%",
              padding: "10px 14px",
              borderRadius: 18,
              background:
                m.role === "user" ? "#0a84ff" : "rgba(255,255,255,0.08)",
              color: "white",
              fontSize: 14,
              lineHeight: 1.45,
            }}
          >
            {m.text}
          </div>
        ))}
      </div>

      <div
        style={{
          padding: "8px 12px",
          display: "flex",
          flexWrap: "wrap",
          gap: 6,
          borderTop: "0.5px solid rgba(255,255,255,0.08)",
        }}
      >
        {SUGGESTIONS.map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => {
              setInput(s);
            }}
            style={{
              fontSize: 12,
              padding: "5px 10px",
              borderRadius: 999,
              border: "1px solid rgba(255,255,255,0.18)",
              background: "rgba(255,255,255,0.05)",
              color: "white",
              cursor: "pointer",
            }}
          >
            {s}
          </button>
        ))}
      </div>

      <form
        onSubmit={send}
        style={{
          padding: "10px 12px 12px",
          display: "flex",
          gap: 8,
          borderTop: "0.5px solid rgba(255,255,255,0.08)",
        }}
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about Jemimah…"
          style={{
            flex: 1,
            padding: "10px 14px",
            borderRadius: 999,
            border: "1px solid rgba(255,255,255,0.16)",
            background: "rgba(255,255,255,0.06)",
            color: "white",
            fontSize: 14,
            outline: "none",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "10px 16px",
            borderRadius: 999,
            border: "none",
            background: "#0a84ff",
            color: "white",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Send
        </button>
      </form>
    </div>
  );
}
