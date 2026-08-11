import { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { getTopic } from "../data/topics";
import Quiz from "../components/Quiz";

export default function LessonPage() {
  const { slug, lessonSlug } = useParams();
  const [tab, setTab] = useState<"notes" | "quiz">("notes");
  const [quizDone, setQuizDone] = useState(false);
  const topic = slug ? getTopic(slug) : undefined;
  const lessonIndex = topic?.lessons.findIndex((l) => l.slug === lessonSlug) ?? -1;
  const lesson = topic && lessonIndex >= 0 ? topic.lessons[lessonIndex] : undefined;

  useEffect(() => {
    setQuizDone(false);
    setTab("notes");
  }, [lessonSlug]);

  if (!topic || !lesson) return <Navigate to="/subjects" replace />;

  const nextLesson = topic.lessons[lessonIndex + 1];

  return (
    <div style={{ ["--accent-color" as string]: topic.accent }}>
      <p style={{ marginBottom: 18 }}>
        <Link to={`/subjects/${topic.slug}`} style={{ color: "var(--text-dim)", fontFamily: "var(--mono)", fontSize: "0.82rem", textDecoration: "none" }}>
          ← {topic.title}
        </Link>
      </p>

      <div className="topic-hero">
        <div className="kicker">
          {topic.title} · Lesson {lessonIndex + 1} of {topic.lessons.length}
        </div>
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
            <button className="btn" style={{ background: topic.accent }} onClick={() => setTab("quiz")}>
              Start practice quiz →
            </button>
          </div>
        </div>
      ) : (
        <>
          <Quiz
            key={lesson.slug}
            questions={lesson.questions}
            accent={topic.accent}
            topicSlug={topic.slug}
            lessonSlug={lesson.slug}
            onComplete={() => setQuizDone(true)}
          />
          {quizDone && nextLesson && (
            <div className="quiz-actions">
              <Link to={`/subjects/${topic.slug}/${nextLesson.slug}`} className="btn secondary">
                Next: {nextLesson.title.replace(/^Lesson \d+:\s*/, "")} →
              </Link>
            </div>
          )}
        </>
      )}
    </div>
  );
}
