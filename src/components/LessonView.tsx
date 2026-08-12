import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import type { Lesson } from "../types";
import Quiz from "./Quiz";

export default function LessonView({
  lesson,
  accent,
  kicker,
  backHref,
  backLabel,
  nextHref,
  nextLabel,
  topicSlug,
}: {
  lesson: Lesson;
  accent: string;
  kicker: string;
  backHref: string;
  backLabel: string;
  nextHref?: string;
  nextLabel?: string;
  topicSlug: string;
}) {
  const [tab, setTab] = useState<"notes" | "quiz">("notes");
  const [quizDone, setQuizDone] = useState(false);

  useEffect(() => {
    setQuizDone(false);
    setTab("notes");
  }, [lesson.slug]);

  return (
    <div style={{ ["--accent-color" as string]: accent }}>
      <p style={{ marginBottom: 18 }}>
        <Link to={backHref} style={{ color: "var(--text-dim)", fontFamily: "var(--mono)", fontSize: "0.82rem", textDecoration: "none" }}>
          ← {backLabel}
        </Link>
      </p>

      <div className="topic-hero">
        <div className="kicker">{kicker}</div>
        <h1>{lesson.title.replace(/^Lesson \d+:\s*/, "")}</h1>
        <p>{lesson.summary}</p>
      </div>

      <div className="tabs">
        <button className={"tab-btn" + (tab === "notes" ? " active" : "")} onClick={() => setTab("notes")}>
          Guided Notes
        </button>
        <button className={"tab-btn" + (tab === "quiz" ? " active" : "")} onClick={() => setTab("quiz")}>
          Practice Quiz ({lesson.questions.length})
        </button>
      </div>

      {tab === "notes" ? (
        <div>
          {lesson.notes.map((section) => (
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
            <button className="btn" style={{ background: accent }} onClick={() => setTab("quiz")}>
              Start practice quiz →
            </button>
          </div>
        </div>
      ) : (
        <>
          <Quiz
            key={lesson.slug}
            questions={lesson.questions}
            accent={accent}
            topicSlug={topicSlug}
            lessonSlug={lesson.slug}
            onComplete={() => setQuizDone(true)}
          />
          {quizDone && nextHref && (
            <div className="quiz-actions">
              <Link to={nextHref} className="btn secondary">
                {nextLabel} →
              </Link>
            </div>
          )}
        </>
      )}
    </div>
  );
}
