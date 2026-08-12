import { Link, Navigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getTopic, getUnit } from "../data/topics";
import { getLessonProgress, getTopicStats, type Progress } from "../lib/progress";
import LessonView from "../components/LessonView";

/**
 * Route: /subjects/:slug/:secondSlug
 * For unit-based topics (AP), :secondSlug is a unit — show that unit's lesson list.
 * For flat topics (ACT), :secondSlug is a lesson — show the lesson detail directly.
 */
export default function SecondLevelPage() {
  const { slug, secondSlug } = useParams();
  const topic = slug ? getTopic(slug) : undefined;

  if (topic?.units) {
    return <UnitOverview topicSlug={topic.slug} topicTitle={topic.title} accent={topic.accent} unitSlug={secondSlug ?? ""} />;
  }

  if (topic?.lessons) {
    const lessonIndex = topic.lessons.findIndex((l) => l.slug === secondSlug);
    const lesson = lessonIndex >= 0 ? topic.lessons[lessonIndex] : undefined;
    if (!lesson) return <Navigate to={`/subjects/${topic.slug}`} replace />;
    const nextLesson = topic.lessons[lessonIndex + 1];
    return (
      <LessonView
        lesson={lesson}
        accent={topic.accent}
        kicker={`${topic.title} · Lesson ${lessonIndex + 1} of ${topic.lessons.length}`}
        backHref={`/subjects/${topic.slug}`}
        backLabel={topic.title}
        topicSlug={topic.slug}
        nextHref={nextLesson ? `/subjects/${topic.slug}/${nextLesson.slug}` : undefined}
        nextLabel={nextLesson ? `Next: ${nextLesson.title.replace(/^Lesson \d+:\s*/, "")}` : undefined}
      />
    );
  }

  return <Navigate to="/subjects" replace />;
}

function UnitOverview({
  topicSlug,
  topicTitle,
  accent,
  unitSlug,
}: {
  topicSlug: string;
  topicTitle: string;
  accent: string;
  unitSlug: string;
}) {
  const topic = getTopic(topicSlug);
  const unit = topic ? getUnit(topic, unitSlug) : undefined;
  const unitIndex = topic?.units?.findIndex((u) => u.slug === unitSlug) ?? -1;
  const [progressMap, setProgressMap] = useState<Record<string, Progress | null>>({});

  useEffect(() => {
    if (!unit) return;
    const map: Record<string, Progress | null> = {};
    for (const lesson of unit.lessons) {
      map[lesson.slug] = getLessonProgress(topicSlug, lesson.slug);
    }
    setProgressMap(map);
  }, [unit, topicSlug]);

  if (!topic || !unit) return <Navigate to={`/subjects/${topicSlug}`} replace />;

  const lessonSlugs = unit.lessons.map((l) => l.slug);
  const stats = getTopicStats(topicSlug, lessonSlugs);

  return (
    <div style={{ ["--accent-color" as string]: accent }}>
      <p style={{ marginBottom: 18 }}>
        <Link to={`/subjects/${topicSlug}`} style={{ color: "var(--text-dim)", fontFamily: "var(--mono)", fontSize: "0.82rem", textDecoration: "none" }}>
          ← {topicTitle}
        </Link>
      </p>

      <div className="topic-hero">
        <div className="kicker">
          {topicTitle} · Unit {unitIndex + 1}
        </div>
        <h1>{unit.title}</h1>
        <p>{unit.summary}</p>
      </div>

      <div className="section-heading" style={{ marginTop: 0 }}>
        <h2>Lessons</h2>
        <p>
          {stats.attempted}/{stats.total} started
        </p>
      </div>

      <div className="lesson-list">
        {unit.lessons.map((lesson, i) => {
          const progress = progressMap[lesson.slug];
          const perfect = progress && progress.score === progress.total;
          return (
            <Link key={lesson.slug} to={`/subjects/${topicSlug}/${unit.slug}/${lesson.slug}`} className="lesson-card">
              <span className={"lesson-number" + (perfect ? " done" : "")}>{perfect ? "✓" : `${unitIndex + 1}.${i + 1}`}</span>
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
