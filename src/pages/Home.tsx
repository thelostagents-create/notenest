import { Link } from "react-router-dom";
import topics from "../data/topics";
import TopicCard from "../components/TopicCard";

export default function Home() {
  const actTopics = topics.filter((t) => t.category === "ACT Prep");
  const apTopics = topics.filter((t) => t.category === "AP Courses");

  return (
    <>
      <section className="hero">
        <h1>Study smarter, not harder.</h1>
        <p>
          Free guided notes, practice questions, and ACT minigames for the subjects that matter most —
          built to help you actually remember the material.
        </p>
      </section>

      <div className="section-heading">
        <h2>ACT Prep</h2>
        <Link to="/minigames" style={{ color: "var(--accent)", fontFamily: "var(--mono)", fontSize: "0.85rem", fontWeight: 700, textDecoration: "none" }}>
          Try the minigames →
        </Link>
      </div>
      <div className="card-grid">
        {actTopics.map((t) => (
          <TopicCard key={t.slug} topic={t} />
        ))}
      </div>

      <div className="section-heading">
        <h2>AP Courses</h2>
        <p>guided notes + practice quizzes</p>
      </div>
      <div className="card-grid">
        {apTopics.map((t) => (
          <TopicCard key={t.slug} topic={t} />
        ))}
      </div>
    </>
  );
}
