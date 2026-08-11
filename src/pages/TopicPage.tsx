import { useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { getTopic } from "../data/topics";
import Quiz from "../components/Quiz";

export default function TopicPage() {
  const { slug } = useParams();
  const [tab, setTab] = useState<"notes" | "quiz">("notes");
  const topic = slug ? getTopic(slug) : undefined;

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

      <div className="tabs">
        <button className={"tab-btn" + (tab === "notes" ? " active" : "")} onClick={() => setTab("notes")}>
          Guided Notes
        </button>
        <button className={"tab-btn" + (tab === "quiz" ? " active" : "")} onClick={() => setTab("quiz")}>
          Practice Quiz ({topic.questions.length})
        </button>
      </div>

      {tab === "notes" ? (
        <div>
          {topic.notes.map((section) => (
            <div className="notes-section" key={section.heading}>
              <h3>{section.heading}</h3>
              <ul>
                {section.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
          <div className="quiz-actions">
            <button className="btn" style={{ background: topic.accent }} onClick={() => setTab("quiz")}>
              Start practice quiz →
            </button>
          </div>
        </div>
      ) : (
        <Quiz key={topic.slug} questions={topic.questions} accent={topic.accent} slug={topic.slug} />
      )}
    </div>
  );
}
