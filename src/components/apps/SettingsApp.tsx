import { useState } from "react";
import { useContent } from "../../data/ContentContext";

type Section =
  | "general"
  | "appearance"
  | "profile"
  | "social"
  | "experience"
  | "education"
  | "music"
  | "files";

interface AppearanceProps {
  theme: "light" | "dark";
  onTheme: (t: "light" | "dark") => void;
  orientation: "landscape" | "portrait";
  onOrientation: (o: "landscape" | "portrait") => void;
}

export default function SettingsApp() {
  const [section, setSection] = useState<Section>("general");
  const {
    profile,
    setProfile,
    social,
    setSocial,
    experience,
    setExperience,
    education,
    setEducation,
    music,
    setMusicItem,
    files,
    setFile,
    resetAll,
  } = useContent();

  return (
    <div style={{ display: "flex", height: "100%", color: "#1c1c1e" }}>
      <aside
        style={{
          width: 200,
          flexShrink: 0,
          borderRight: "0.5px solid rgba(60,60,67,0.18)",
          background: "#f2f2f7",
          padding: "12px 8px",
          overflowY: "auto",
        }}
      >
        <h2 style={sidebarHeader}>Settings</h2>
        {(
          [
            ["general", "General"],
            ["appearance", "Appearance"],
            ["profile", "Profile"],
            ["social", "Social"],
            ["experience", "Work"],
            ["education", "Education"],
            ["music", "Music"],
            ["files", "Files"],
          ] as [Section, string][]
        ).map(([id, label]) => (
          <button
            key={id}
            type="button"
            onClick={() => setSection(id)}
            style={{
              display: "block",
              width: "100%",
              textAlign: "left",
              padding: "8px 12px",
              border: "none",
              borderRadius: 8,
              background: section === id ? "white" : "transparent",
              color: "#1c1c1e",
              fontSize: 14,
              fontWeight: section === id ? 600 : 500,
              cursor: "pointer",
              marginBottom: 2,
              boxShadow:
                section === id ? "0 1px 2px rgba(0,0,0,0.06)" : "none",
            }}
          >
            {label}
          </button>
        ))}
      </aside>

      <section
        style={{
          flex: 1,
          padding: 18,
          overflowY: "auto",
          background: "#f2f2f7",
        }}
      >
        {section === "general" && (
          <Group title="General">
            <Row label="Owner">
              <span style={value}>{profile.name}</span>
            </Row>
            <Row label="Tagline">
              <span style={value}>{profile.tagline}</span>
            </Row>
            <Row label="Location">
              <span style={value}>{profile.location}</span>
            </Row>
            <Row label="Reset content">
              <button type="button" style={dangerBtn} onClick={resetAll}>
                Reset to placeholders
              </button>
            </Row>
          </Group>
        )}

        {section === "appearance" && <AppearancePanel />}

        {section === "profile" && (
          <Group title="Profile">
            <FieldRow
              label="Name"
              value={profile.name}
              onChange={(v) => setProfile({ name: v })}
            />
            <FieldRow
              label="Tagline"
              value={profile.tagline}
              onChange={(v) => setProfile({ tagline: v })}
            />
            <FieldRow
              label="Location"
              value={profile.location}
              onChange={(v) => setProfile({ location: v })}
            />
            <FieldRow
              label="Email"
              value={profile.email}
              onChange={(v) => setProfile({ email: v })}
            />
            <FieldArea
              label="Bio"
              value={profile.bio}
              onChange={(v) => setProfile({ bio: v })}
            />
          </Group>
        )}

        {section === "social" && (
          <Group title="Social links">
            <FieldRow
              label="GitHub"
              value={social.github}
              onChange={(v) => setSocial({ github: v })}
            />
            <FieldRow
              label="LinkedIn"
              value={social.linkedin}
              onChange={(v) => setSocial({ linkedin: v })}
            />
            <FieldRow
              label="Website"
              value={social.website}
              onChange={(v) => setSocial({ website: v })}
            />
            <FieldRow
              label="Email link"
              value={social.email}
              onChange={(v) => setSocial({ email: v })}
            />
          </Group>
        )}

        {section === "experience" && (
          <Group title="Work">
            {experience.map((j) => (
              <div
                key={j.id}
                style={{
                  marginBottom: 10,
                  padding: 12,
                  background: "white",
                  borderRadius: 10,
                }}
              >
                <FieldRow
                  label="Title"
                  value={j.title}
                  onChange={(v) => setExperience(j.id, { title: v })}
                  flat
                />
                <FieldRow
                  label="Company"
                  value={j.company}
                  onChange={(v) => setExperience(j.id, { company: v })}
                  flat
                />
                <FieldRow
                  label="Period"
                  value={j.period}
                  onChange={(v) => setExperience(j.id, { period: v })}
                  flat
                />
                <FieldArea
                  label="Description"
                  value={j.description}
                  onChange={(v) => setExperience(j.id, { description: v })}
                  flat
                />
              </div>
            ))}
          </Group>
        )}

        {section === "education" && (
          <Group title="Education">
            {education.map((e) => (
              <div
                key={e.id}
                style={{
                  marginBottom: 10,
                  padding: 12,
                  background: "white",
                  borderRadius: 10,
                }}
              >
                <FieldRow
                  label="School"
                  value={e.school}
                  onChange={(v) => setEducation(e.id, { school: v })}
                  flat
                />
                <FieldRow
                  label="Degree"
                  value={e.degree}
                  onChange={(v) => setEducation(e.id, { degree: v })}
                  flat
                />
                <FieldRow
                  label="Period"
                  value={e.period}
                  onChange={(v) => setEducation(e.id, { period: v })}
                  flat
                />
                <FieldArea
                  label="Description"
                  value={e.description}
                  onChange={(v) => setEducation(e.id, { description: v })}
                  flat
                />
              </div>
            ))}
          </Group>
        )}

        {section === "music" && (
          <Group title="Music">
            {music.map((m) => (
              <div
                key={m.id}
                style={{
                  marginBottom: 10,
                  padding: 12,
                  background: "white",
                  borderRadius: 10,
                }}
              >
                <FieldRow
                  label="Title"
                  value={m.title}
                  onChange={(v) => setMusicItem(m.id, { title: v })}
                  flat
                />
                <FieldRow
                  label="Artist"
                  value={m.artist}
                  onChange={(v) => setMusicItem(m.id, { artist: v })}
                  flat
                />
                <FieldRow
                  label="Note"
                  value={m.note}
                  onChange={(v) => setMusicItem(m.id, { note: v })}
                  flat
                />
              </div>
            ))}
          </Group>
        )}

        {section === "files" && (
          <Group title="Files">
            {files.map((f) => (
              <div
                key={f.id}
                style={{
                  marginBottom: 10,
                  padding: 12,
                  background: "white",
                  borderRadius: 10,
                }}
              >
                <FieldRow
                  label="Name"
                  value={f.name}
                  onChange={(v) => setFile(f.id, { name: v })}
                  flat
                />
                <FieldRow
                  label="Kind"
                  value={f.kind}
                  onChange={(v) => setFile(f.id, { kind: v })}
                  flat
                />
                <FieldArea
                  label="Description"
                  value={f.description}
                  onChange={(v) => setFile(f.id, { description: v })}
                  flat
                />
              </div>
            ))}
          </Group>
        )}
      </section>
    </div>
  );
}

function AppearancePanel() {
  // Read theme/orientation from data attributes set by App.tsx so this panel
  // can change them without prop drilling. App listens for `appearance-change`
  // events on the window.
  const root = typeof document !== "undefined" ? document.documentElement : null;
  const theme = (root?.dataset.theme as "light" | "dark") ?? "light";
  const orientation =
    (root?.dataset.orientation as "landscape" | "portrait") ?? "landscape";

  const set = (next: Partial<AppearanceProps>) => {
    window.dispatchEvent(new CustomEvent("appearance-change", { detail: next }));
  };

  return (
    <Group title="Appearance">
      <Row label="Theme">
        <Segmented
          options={[
            { label: "Light", value: "light" },
            { label: "Dark", value: "dark" },
          ]}
          value={theme}
          onChange={(v) => set({ theme: v as "light" | "dark" })}
        />
      </Row>
      <Row label="Orientation">
        <Segmented
          options={[
            { label: "Landscape", value: "landscape" },
            { label: "Portrait", value: "portrait" },
          ]}
          value={orientation}
          onChange={(v) =>
            set({ orientation: v as "landscape" | "portrait" })
          }
        />
      </Row>
      <p style={{ fontSize: 12, color: "#8a8a8e", padding: "0 12px" }}>
        Theme and orientation apply for this session and aren't persisted.
      </p>
    </Group>
  );
}

function Group({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div style={{ marginBottom: 18 }}>
      <h2
        style={{
          fontSize: 13,
          fontWeight: 600,
          letterSpacing: 0.5,
          color: "#8a8a8e",
          textTransform: "uppercase",
          marginTop: 0,
          marginBottom: 8,
          paddingLeft: 12,
        }}
      >
        {title}
      </h2>
      <div
        style={{
          background: "white",
          borderRadius: 12,
          overflow: "hidden",
        }}
      >
        {children}
      </div>
    </div>
  );
}

function Row({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "10px 14px",
        borderTop: "0.5px solid rgba(60,60,67,0.12)",
      }}
    >
      <span style={{ fontSize: 14, fontWeight: 500, flex: 1 }}>{label}</span>
      {children}
    </div>
  );
}

function FieldRow({
  label,
  value,
  onChange,
  flat,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  flat?: boolean;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: flat ? "8px 0" : "10px 14px",
        borderTop: flat ? "none" : "0.5px solid rgba(60,60,67,0.12)",
      }}
    >
      <span style={{ fontSize: 14, fontWeight: 500, width: 110 }}>{label}</span>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={inputStyle}
      />
    </div>
  );
}

function FieldArea({
  label,
  value,
  onChange,
  flat,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  flat?: boolean;
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 6,
        padding: flat ? "8px 0" : "10px 14px",
        borderTop: flat ? "none" : "0.5px solid rgba(60,60,67,0.12)",
      }}
    >
      <span style={{ fontSize: 14, fontWeight: 500 }}>{label}</span>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={4}
        style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
      />
    </div>
  );
}

function Segmented({
  options,
  value,
  onChange,
}: {
  options: { label: string; value: string }[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div
      style={{
        display: "inline-flex",
        background: "#e5e5ea",
        borderRadius: 8,
        padding: 2,
      }}
    >
      {options.map((o) => (
        <button
          key={o.value}
          type="button"
          onClick={() => onChange(o.value)}
          style={{
            padding: "4px 12px",
            border: "none",
            borderRadius: 6,
            cursor: "pointer",
            fontSize: 13,
            fontWeight: 600,
            background: value === o.value ? "white" : "transparent",
            color: "#1c1c1e",
            boxShadow:
              value === o.value ? "0 1px 2px rgba(0,0,0,0.1)" : "none",
          }}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}

const sidebarHeader: React.CSSProperties = {
  fontSize: 13,
  fontWeight: 600,
  letterSpacing: 0.5,
  color: "#8a8a8e",
  textTransform: "uppercase",
  margin: "4px 12px 8px",
};

const value: React.CSSProperties = {
  fontSize: 14,
  color: "#6b6b70",
};

const inputStyle: React.CSSProperties = {
  flex: 1,
  fontSize: 14,
  padding: "6px 10px",
  borderRadius: 6,
  border: "1px solid rgba(60,60,67,0.18)",
  background: "white",
  color: "#1c1c1e",
  outline: "none",
};

const dangerBtn: React.CSSProperties = {
  fontSize: 13,
  fontWeight: 600,
  padding: "6px 12px",
  borderRadius: 8,
  background: "#fdecec",
  color: "#b94a4a",
  border: "none",
  cursor: "pointer",
};
