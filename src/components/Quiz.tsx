import { useState } from "react";
import type { Question } from "../types";
import { saveProgress } from "../lib/progress";

export default function Quiz({ questions, accent, slug }: { questions: Question[]; accent: string; slug: string }) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const question = questions[index];
  const isLast = index === questions.length - 1;

  function choose(choiceIndex: number) {
    if (selected !== null) return;
    setSelected(choiceIndex);
    if (choiceIndex === question.answerIndex) setScore((s) => s + 1);
  }

  function next() {
    if (isLast) {
      saveProgress(slug, score, questions.length);
      setDone(true);
      return;
    }
    setIndex((i) => i + 1);
    setSelected(null);
  }

  function restart() {
    setIndex(0);
    setSelected(null);
    setScore(0);
    setDone(false);
  }

  if (done) {
    const pct = Math.round((score / questions.length) * 100);
    return (
      <div className="quiz-card quiz-result">
        <p>You scored</p>
        <div className="score" style={{ color: accent }}>
          {score}/{questions.length}
        </div>
        <p>{pct}% correct</p>
        <button className="btn" style={{ background: accent }} onClick={restart}>
          Try again
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="quiz-progress">
        <span>
          Question {index + 1} of {questions.length}
        </span>
        <span>Score: {score}</span>
      </div>
      <div className="quiz-card">
        <p className="prompt">{question.prompt}</p>
        <div className="choice-list">
          {question.choices.map((choice, i) => {
            let cls = "choice-btn";
            if (selected !== null) {
              if (i === question.answerIndex) cls += " correct";
              else if (i === selected) cls += " incorrect";
            }
            return (
              <button key={i} className={cls} disabled={selected !== null} onClick={() => choose(i)}>
                {choice}
              </button>
            );
          })}
        </div>
        {selected !== null && (
          <div className="explanation">
            <strong>{selected === question.answerIndex ? "Correct. " : "Not quite. "}</strong>
            {question.explanation}
          </div>
        )}
        <div className="quiz-actions">
          <button className="btn" style={{ background: accent }} disabled={selected === null} onClick={next}>
            {isLast ? "See results" : "Next question"}
          </button>
        </div>
      </div>
    </div>
  );
}
