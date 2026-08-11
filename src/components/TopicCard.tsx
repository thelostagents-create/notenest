import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import type { Topic } from "../types";
import { getTopicStats, type TopicStats } from "../lib/progress";

export default function TopicCard({ topic }: { topic: Topic }) {
  const lessonSlugs = topic.lessons.map((l) => l.slug);
  const [stats, setStats] = useState<TopicStats>({ attempted: 0, total: lessonSlugs.length });

  useEffect(() => {
    setStats(getTopicStats(topic.slug, lessonSlugs));
  }, [topic.slug]);

  const pct = stats.total ? Math.round((stats.attempted / stats.total) * 100) : 0;
  const lessonWord = topic.lessons.length === 1 ? "lesson" : "lessons";

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
        <span>{stats.attempted > 0 ? "In progress" : "Not started"}</span>
        <span>
          {stats.attempted}/{stats.total} {lessonWord}
        </span>
      </div>
    </Link>
  );
}
