// BibleApp — mirrors Caleb's BibleApp: a single chapter view with one verse highlighted.
// Placeholder verses below are scripture text (1 Thessalonians 5, ESV). Jemimah can
// swap to a different passage by editing this file.

const VERSES: { num: number; text: string }[] = [
  { num: 1, text: "Now concerning the times and the seasons, brothers, you have no need to have anything written to you." },
  { num: 2, text: "For you yourselves are fully aware that the day of the Lord will come like a thief in the night." },
  { num: 3, text: "While people are saying, 'There is peace and security,' then sudden destruction will come upon them as labor pains come upon a pregnant woman, and they will not escape." },
  { num: 4, text: "But you are not in darkness, brothers, for that day to surprise you like a thief." },
  { num: 5, text: "For you are all children of light, children of the day. We are not of the night or of the darkness." },
  { num: 6, text: "So then let us not sleep, as others do, but let us keep awake and be sober." },
  { num: 7, text: "For those who sleep, sleep at night, and those who get drunk, are drunk at night." },
  { num: 8, text: "But since we belong to the day, let us be sober, having put on the breastplate of faith and love, and for a helmet the hope of salvation." },
  { num: 9, text: "For God has not destined us for wrath, but to obtain salvation through our Lord Jesus Christ," },
  { num: 10, text: "who died for us so that whether we are awake or asleep we might live with him." },
  { num: 11, text: "Therefore encourage one another and build one another up, just as you are doing." },
  { num: 12, text: "We ask you, brothers, to respect those who labor among you and are over you in the Lord and admonish you," },
  { num: 13, text: "and to esteem them very highly in love because of their work. Be at peace among yourselves." },
  { num: 14, text: "And we urge you, brothers, admonish the idle, encourage the fainthearted, help the weak, be patient with them all." },
  { num: 15, text: "See that no one repays anyone evil for evil, but always seek to do good to one another and to everyone." },
  { num: 16, text: "Rejoice always," },
  { num: 17, text: "pray without ceasing," },
  { num: 18, text: "give thanks in all circumstances; for this is the will of God in Christ Jesus for you." },
  { num: 19, text: "Do not quench the Spirit." },
  { num: 20, text: "Do not despise prophecies," },
  { num: 21, text: "but test everything; hold fast what is good." },
  { num: 22, text: "Abstain from every form of evil." },
  { num: 23, text: "Now may the God of peace himself sanctify you completely, and may your whole spirit and soul and body be kept blameless at the coming of our Lord Jesus Christ." },
  { num: 24, text: "He who calls you is faithful; he will surely do it." },
  { num: 25, text: "Brothers, pray for us." },
  { num: 26, text: "Greet all the brothers with a holy kiss." },
  { num: 27, text: "I charge you by the Lord to have this letter read to all the brothers." },
  { num: 28, text: "The grace of our Lord Jesus Christ be with you." },
];

const HIGHLIGHT = 17;

export default function BibleApp() {
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", background: "#faf8f4" }}>
      <div
        style={{
          padding: "14px 22px 12px",
          borderBottom: "0.5px solid rgba(0,0,0,0.08)",
          flexShrink: 0,
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span
            style={{
              fontSize: 11,
              fontWeight: 700,
              color: "#8B6914",
              letterSpacing: 1.2,
              textTransform: "uppercase",
            }}
          >
            ESV
          </span>
          <a
            href="https://www.bible.com/bible/59/1TH.5.ESV"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: 12, color: "#8B6914", fontWeight: 600, textDecoration: "none" }}
          >
            Open ↗
          </a>
        </div>
        <div style={{ fontSize: 22, fontWeight: 700, marginTop: 6, color: "#1c1c1e" }}>
          1 Thessalonians 5
        </div>
        <div style={{ fontSize: 12, color: "#6b6b70", marginTop: 2 }}>
          A passage worth keeping. Replace with your own selection any time.
        </div>
      </div>

      <div
        className="ios-scroll"
        style={{
          flex: 1,
          overflowY: "auto",
          padding: "20px 28px 32px",
          fontFamily: "Georgia, 'Times New Roman', serif",
        }}
      >
        {VERSES.map((v) => (
          <p
            key={v.num}
            style={{
              fontSize: 16,
              lineHeight: 1.7,
              color: "#1c1c1e",
              margin: "8px 0",
              background: v.num === HIGHLIGHT ? "rgba(212,160,23,0.18)" : "transparent",
              borderRadius: v.num === HIGHLIGHT ? 6 : 0,
              padding: v.num === HIGHLIGHT ? "4px 8px" : 0,
            }}
          >
            <sup style={{ fontSize: 11, color: "#8B6914", marginRight: 4, fontWeight: 700 }}>
              {v.num}
            </sup>
            {v.text}
          </p>
        ))}
      </div>
    </div>
  );
}
