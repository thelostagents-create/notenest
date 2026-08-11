import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import type { Topic } from "../types";
import { getProgress } from "../lib/progress";

export default function TopicCard({ topic }: { topic: Topic }) {
  const [progress, setProgress] = useState(getProgress(topic.slug));

  useEffect(() => {
    setProgress(getProgress(topic.slug));
  }, [topic.slug]);

  const pct = progress ? Math.round((progress.score / progress.total) * 100) : 0;

  return (
    <Link to={`/subjects/${topic.slug}`} className="topic-card" style={{ ["--accent-color" as string]: topic.accent }}>
      <div className="badge-row">
        <span className="emoji-badge">{topic.emoji}</span>
        <span className="kicker-tag">{topic.category}</span>
      </div>
      <h3>{topic.title}</h3>
      <p className="desc">{topic.subtitle}</p>
      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${pct}%` }} />
      </div>
      <div className="progress-label">
        <span>{progress ? "Best score" : "Not started"}</span>
        <span>{progress ? `${progress.score}/${progress.total}` : `${topic.questions.length} Qs`}</span>
      </div>
    </Link>
  );
}
