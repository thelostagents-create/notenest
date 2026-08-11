import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { getHighScore, saveHighScore } from "../lib/progress";

const GAME_ID = "grammar-blitz";
const ROUND_SECONDS = 60;

interface GrammarQ {
  before: string;
  target: string;
  after: string;
  choices: string[];
  answerIndex: number;
}

const bank: GrammarQ[] = [
  { before: "The team", target: "were", after: "excited to start the season.", choices: ["were", "was", "being", "have been"], answerIndex: 1 },
  { before: "Neither of the answers", target: "are", after: "correct.", choices: ["are", "is", "were", "being"], answerIndex: 1 },
  { before: "She bought", target: "apple's, orange's, and pears", after: "at the store.", choices: ["apple's, orange's, and pears", "apples, oranges, and pears", "apples, orange's, and pear's", "apple's, oranges, and pears"], answerIndex: 1 },
  { before: "Its", target: "raining", after: "so bring an umbrella.", choices: ["raining", "it's raining", "its raining,", "It's raining,"], answerIndex: 1 },
  { before: "Each of the students", target: "have", after: "their own locker.", choices: ["have", "has", "having", "had have"], answerIndex: 1 },
  { before: "The dog wagged", target: "it's", after: "tail happily.", choices: ["it's", "its", "its'", "their"], answerIndex: 1 },
  { before: "I ran to the store,", target: "then I", after: "realized I forgot my wallet.", choices: ["then I", "and then I", "then, I", "then i"], answerIndex: 1 },
  { before: "The reason he was late", target: "is because", after: "traffic was heavy.", choices: ["is because", "is that", "was because of", "being that"], answerIndex: 1 },
  { before: "Between you and", target: "I,", after: "this plan seems risky.", choices: ["I,", "me,", "myself,", "I's,"], answerIndex: 1 },
  { before: "He is one of the students who", target: "is", after: "always on time.", choices: ["is", "are", "was", "be"], answerIndex: 1 },
  { before: "Walking into the room,", target: "the lights were turned on by Sam", after: ".", choices: ["the lights were turned on by Sam", "Sam turned on the lights", "the lights turning on by Sam", "Sam's lights turned on"], answerIndex: 1 },
  { before: "This is the best solution", target: "then", after: "the one we tried before.", choices: ["then", "than", "then,", "that then"], answerIndex: 1 },
  { before: "My brother and", target: "me", after: "went to the concert.", choices: ["me", "I", "myself", "him"], answerIndex: 1 },
  { before: "The committee", target: "meets", after: "every Tuesday to review proposals.", choices: ["meets", "meet", "meeting", "have met"], answerIndex: 0 },
  { before: "Please give the report to", target: "whomever", after: "asks for it first.", choices: ["whomever", "whoever", "who", "whose"], answerIndex: 1 },
];

function shuffled<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}

export default function GrammarBlitz() {
  const [queue, setQueue] = useState<GrammarQ[]>(() => shuffled(bank));
  const [qIndex, setQIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(ROUND_SECONDS);
  const [running, setRunning] = useState(false);
  const [over, setOver] = useState(false);
  const [flash, setFlash] = useState<"correct" | "incorrect" | null>(null);
  const highScore = useRef(getHighScore(GAME_ID));
  const roundStartBest = useRef(highScore.current);

  const question = queue[qIndex % queue.length];

  useEffect(() => {
    if (!running) return;
    if (timeLeft <= 0) {
      setRunning(false);
      setOver(true);
      saveHighScore(GAME_ID, score);
      highScore.current = getHighScore(GAME_ID);
      return;
    }
    const t = setTimeout(() => setTimeLeft((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [running, timeLeft, score]);

  function start() {
    roundStartBest.current = highScore.current;
    setQueue(shuffled(bank));
    setQIndex(0);
    setScore(0);
    setTimeLeft(ROUND_SECONDS);
    setOver(false);
    setRunning(true);
  }

  function choose(i: number) {
    if (!running) return;
    if (i === question.answerIndex) {
      setScore((s) => s + 1);
      setFlash("correct");
    } else {
      setFlash("incorrect");
    }
    setTimeout(() => setFlash(null), 200);
    setQIndex((n) => {
      const next = n + 1;
      if (next % queue.length === 0) setQueue(shuffled(bank));
      return next;
    });
  }

  return (
    <>
      <p style={{ marginBottom: 18 }}>
        <Link to="/minigames" style={{ color: "var(--text-dim)", fontFamily: "var(--mono)", fontSize: "0.82rem", textDecoration: "none" }}>
          ← All minigames
        </Link>
      </p>
      <div className="topic-hero" style={{ ["--accent-color" as string]: "#e0574b" }}>
        <div className="kicker">Minigame</div>
        <h1>🖊️ Grammar Blitz</h1>
        <p>Pick the correctly written version of the highlighted phrase before time runs out. ACT English style.</p>
      </div>

      <div className="game-shell">
        <div className="game-stat-row">
          <div className="game-stat">
            <div className="value">{score}</div>
            <div className="label">Score</div>
          </div>
          <div className="game-stat">
            <div className="value">{running ? timeLeft : ROUND_SECONDS}</div>
            <div className="label">Seconds</div>
          </div>
          <div className="game-stat">
            <div className="value">{highScore.current}</div>
            <div className="label">Best</div>
          </div>
        </div>

        {!running && !over && (
          <>
            <p style={{ color: "var(--text-dim)" }}>Ready when you are.</p>
            <button className="btn" style={{ background: "#e0574b" }} onClick={start}>
              Start blitz
            </button>
          </>
        )}

        {running && (
          <>
            <div className="sentence-box" style={{ color: flash === "correct" ? "var(--good)" : flash === "incorrect" ? "var(--bad)" : undefined }}>
              {question.before} <span className="target">{question.target}</span> {question.after}
            </div>
            <div className="game-choice-grid">
              {question.choices.map((c, i) => (
                <button key={i} className="choice-btn" onClick={() => choose(i)}>
                  {c}
                </button>
              ))}
            </div>
          </>
        )}

        {over && (
          <div className="quiz-result" style={{ padding: "10px 0 0" }}>
            <p>Time's up! You got</p>
            <div className="score" style={{ color: "#e0574b" }}>
              {score}
            </div>
            <p>{score > roundStartBest.current ? "New best!" : `Best: ${highScore.current}`}</p>
            <button className="btn" style={{ background: "#e0574b" }} onClick={start}>
              Play again
            </button>
          </div>
        )}
      </div>
    </>
  );
}
