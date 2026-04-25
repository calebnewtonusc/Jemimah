// SpotifyApp — mirrors Caleb's SpotifyApp: now-playing card + recommended albums.
import { useContent } from "../../data/ContentContext";

export default function SpotifyApp() {
  const { music, social } = useContent();

  return (
    <div className="ios-scroll" style={{ height: "100%", overflowY: "auto", background: "#121212", color: "white" }}>
      <div style={{ padding: 22 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <div style={{ fontSize: 22, fontWeight: 700, letterSpacing: -0.5 }}>Spotify</div>
            <div style={{ fontSize: 12, color: "rgba(255,255,255,0.6)", marginTop: 2 }}>
              Currently playing & favorites
            </div>
          </div>
          <a
            href={social.spotify}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: 12,
              color: "#1DB954",
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            Open profile ↗
          </a>
        </div>

        {/* Now playing card */}
        <div
          style={{
            marginTop: 18,
            background: "linear-gradient(135deg, #1DB954, #157A37)",
            borderRadius: 18,
            padding: 22,
            display: "flex",
            gap: 16,
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: 96,
              height: 96,
              borderRadius: 12,
              background: "rgba(255,255,255,0.18)",
              flexShrink: 0,
            }}
          />
          <div>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.8)", textTransform: "uppercase", letterSpacing: 1 }}>
              Now playing
            </div>
            <div style={{ fontSize: 20, fontWeight: 700, marginTop: 4 }}>
              {music.currentlyPlaying.title}
            </div>
            <div style={{ fontSize: 14, color: "rgba(255,255,255,0.85)", marginTop: 2 }}>
              {music.currentlyPlaying.artist}
            </div>
          </div>
        </div>

        <h2 style={head}>Favorite new albums</h2>
        <Row items={music.favoriteNewAlbums} />

        <h2 style={head}>Favorite older albums</h2>
        <Row items={music.favoriteOldAlbums} />
      </div>
    </div>
  );
}

function Row({ items }: { items: { artist: string; album: string }[] }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
        gap: 12,
        marginTop: 10,
      }}
    >
      {items.map((it, i) => (
        <div
          key={i}
          style={{
            background: "rgba(255,255,255,0.05)",
            borderRadius: 10,
            padding: 12,
            display: "flex",
            flexDirection: "column",
            gap: 8,
          }}
        >
          <div
            style={{
              aspectRatio: "1 / 1",
              borderRadius: 6,
              background: "linear-gradient(145deg, #2a2a2a, #1a1a1a)",
            }}
          />
          <div style={{ fontSize: 13, fontWeight: 600 }}>{it.album}</div>
          <div style={{ fontSize: 11, color: "rgba(255,255,255,0.6)" }}>{it.artist}</div>
        </div>
      ))}
    </div>
  );
}

const head: React.CSSProperties = {
  fontSize: 13,
  fontWeight: 600,
  letterSpacing: 0.5,
  textTransform: "uppercase",
  color: "rgba(255,255,255,0.55)",
  marginTop: 26,
  marginBottom: 8,
};
