import { Link, Navigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getTopic } from "../data/topics";
import { getLessonProgress, type Progress } from "../lib/progress";

export default function TopicPage() {
  const { slug } = useParams();
  const topic = slug ? getTopic(slug) : undefined;
  const [progressMap, setProgressMap] = useState<Record<string, Progress | null>>({});

  useEffect(() => {
    if (!topic) return;
    const map: Record<string, Progress | null> = {};
    for (const lesson of topic.lessons) {
      map[lesson.slug] = getLessonProgress(topic.slug, lesson.slug);
    }
    setProgressMap(map);
  }, [topic]);

  if (!topic) return <Navigate to="/subjects" replace />;

  return (
    <div style={{ ["--accent-color" as string]: topic.accent }}>
      <p style={{ marginBottom: 18 }}>
        <Link to="/subjects" style={{ color: "var(--text-dim)", fontFamily: "var(--mono)", fontSize: "0.82rem", textDecoration: "none" }}>
          ← All subjects
        </Link>
      </p>

      <div className="topic-hero">
        <div className="kicker">{topic.category}</div>
        <h1>
          {topic.emoji} {topic.title}
        </h1>
        <p>{topic.subtitle}</p>
      </div>

      <div className="section-heading" style={{ marginTop: 0 }}>
        <h2>Lessons</h2>
        <p>{topic.lessons.length} total</p>
      </div>

      <div className="lesson-list">
        {topic.lessons.map((lesson, i) => {
          const progress = progressMap[lesson.slug];
          const perfect = progress && progress.score === progress.total;
          return (
            <Link key={lesson.slug} to={`/subjects/${topic.slug}/${lesson.slug}`} className="lesson-card">
              <span className={"lesson-number" + (perfect ? " done" : "")}>{perfect ? "✓" : i + 1}</span>
              <span className="lesson-card-body">
                <h4>{lesson.title}</h4>
                <p>{lesson.summary}</p>
              </span>
              <span className="lesson-score">{progress ? `${progress.score}/${progress.total}` : "Start →"}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
