import { useState } from "react";
import topics from "../data/topics";
import TopicCard from "../components/TopicCard";
import type { Category } from "../types";

const filters: ("All" | Category)[] = ["All", "ACT Prep", "AP Courses"];

export default function Subjects() {
  const [filter, setFilter] = useState<"All" | Category>("All");
  const shown = filter === "All" ? topics : topics.filter((t) => t.category === filter);

  return (
    <>
      <div className="section-heading">
        <h2>All Subjects</h2>
        <p>{topics.length} subjects available</p>
      </div>
      <div className="pill-row">
        {filters.map((f) => (
          <button key={f} className={"pill-btn" + (filter === f ? " active" : "")} onClick={() => setFilter(f)}>
            {f}
          </button>
        ))}
      </div>
      <div className="card-grid">
        {shown.map((t) => (
          <TopicCard key={t.slug} topic={t} />
        ))}
      </div>
    </>
  );
}
