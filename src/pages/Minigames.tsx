import { Link } from "react-router-dom";

const games = [
  {
    to: "/minigames/math-speed-drill",
    emoji: "🧮",
    accent: "#2f8f5b",
    title: "Math Speed Drill",
    desc: "Solve as many ACT-style arithmetic & algebra problems as you can before time runs out.",
  },
  {
    to: "/minigames/grammar-blitz",
    emoji: "🖊️",
    accent: "#e0574b",
    title: "Grammar Blitz",
    desc: "Spot the grammar and punctuation fix in each sentence, ACT English style, against the clock.",
  },
];

export default function Minigames() {
  return (
    <>
      <div className="section-heading">
        <h2>ACT Minigames</h2>
        <p>quick drills to build speed &amp; accuracy</p>
      </div>
      <div className="card-grid">
        {games.map((g) => (
          <Link key={g.to} to={g.to} className="topic-card" style={{ ["--accent-color" as string]: g.accent }}>
            <div className="badge-row">
              <span className="emoji-badge">{g.emoji}</span>
              <span className="kicker-tag">Minigame</span>
            </div>
            <h3>{g.title}</h3>
            <p className="desc">{g.desc}</p>
          </Link>
        ))}
      </div>
    </>
  );
}
