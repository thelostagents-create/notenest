import { Navigate, useParams } from "react-router-dom";
import { getTopic, getUnit } from "../data/topics";
import LessonView from "../components/LessonView";

export default function LessonPage() {
  const { slug, unitSlug, lessonSlug } = useParams();
  const topic = slug ? getTopic(slug) : undefined;
  const unit = topic && unitSlug ? getUnit(topic, unitSlug) : undefined;
  const lessonIndex = unit?.lessons.findIndex((l) => l.slug === lessonSlug) ?? -1;
  const lesson = unit && lessonIndex >= 0 ? unit.lessons[lessonIndex] : undefined;

  if (!topic || !unit || !lesson) return <Navigate to={topic ? `/subjects/${topic.slug}` : "/subjects"} replace />;

  const unitIndex = topic.units!.findIndex((u) => u.slug === unit.slug);
  const nextInUnit = unit.lessons[lessonIndex + 1];
  const nextUnit = topic.units![unitIndex + 1];

  const nextHref = nextInUnit
    ? `/subjects/${topic.slug}/${unit.slug}/${nextInUnit.slug}`
    : nextUnit
      ? `/subjects/${topic.slug}/${nextUnit.slug}/${nextUnit.lessons[0].slug}`
      : undefined;
  const nextLabel = nextInUnit
    ? `Next: ${nextInUnit.title.replace(/^Lesson \d+:\s*/, "")}`
    : nextUnit
      ? `Next unit: ${nextUnit.title}`
      : undefined;

  return (
    <LessonView
      lesson={lesson}
      accent={topic.accent}
      kicker={`Unit ${unitIndex + 1}: ${unit.title} · Lesson ${unitIndex + 1}.${lessonIndex + 1}`}
      backHref={`/subjects/${topic.slug}/${unit.slug}`}
      backLabel={unit.title}
      topicSlug={topic.slug}
      nextHref={nextHref}
      nextLabel={nextLabel}
    />
  );
}
