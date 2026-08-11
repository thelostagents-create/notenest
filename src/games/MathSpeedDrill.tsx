import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { getHighScore, saveHighScore } from "../lib/progress";

const GAME_ID = "math-speed-drill";
const ROUND_SECONDS = 45;

interface MathQ {
  prompt: string;
  answer: number;
  choices: number[];
}

function randInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateQuestion(): MathQ {
  const type = randInt(0, 3);
  let prompt = "";
  let answer = 0;

  if (type === 0) {
    const a = randInt(12, 99);
    const b = randInt(12, 99);
    const op = Math.random() < 0.5 ? "+" : "-";
    if (op === "+") {
      answer = a + b;
    } else {
      answer = a - b;
    }
    prompt = `${a} ${op} ${b}`;
  } else if (type === 1) {
    const a = randInt(2, 12);
    const b = randInt(2, 12);
    answer = a * b;
    prompt = `${a} × ${b}`;
  } else if (type === 2) {
    const pct = [10, 20, 25, 50, 75][randInt(0, 4)];
    const base = randInt(2, 40) * 4;
    answer = (pct / 100) * base;
    prompt = `${pct}% of ${base}`;
  } else {
    const x = randInt(2, 15);
    const b = randInt(1, 20);
    const m = randInt(2, 6);
    const result = m * x + b;
    answer = x;
    prompt = `Solve for x: ${m}x + ${b} = ${result}`;
  }

  const choiceSet = new Set<number>([answer]);
  while (choiceSet.size < 4) {
    const delta = randInt(-8, 8) || 1;
    const candidate = answer + delta;
    if (candidate !== answer) choiceSet.add(candidate);
  }
  const choices = Array.from(choiceSet).sort(() => Math.random() - 0.5);

  return { prompt, answer, choices };
}

export default function MathSpeedDrill() {
  const [question, setQuestion] = useState<MathQ>(() => generateQuestion());
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(ROUND_SECONDS);
  const [running, setRunning] = useState(false);
  const [over, setOver] = useState(false);
  const [flash, setFlash] = useState<"correct" | "incorrect" | null>(null);
  const highScore = useRef(getHighScore(GAME_ID));
  const roundStartBest = useRef(highScore.current);

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
    setScore(0);
    setTimeLeft(ROUND_SECONDS);
    setQuestion(generateQuestion());
    setOver(false);
    setRunning(true);
  }

  function choose(value: number) {
    if (!running) return;
    if (value === question.answer) {
      setScore((s) => s + 1);
      setFlash("correct");
    } else {
      setFlash("incorrect");
    }
    setTimeout(() => setFlash(null), 200);
    setQuestion(generateQuestion());
  }

  return (
    <>
      <p style={{ marginBottom: 18 }}>
        <Link to="/minigames" style={{ color: "var(--text-dim)", fontFamily: "var(--mono)", fontSize: "0.82rem", textDecoration: "none" }}>
          ← All minigames
        </Link>
      </p>
      <div className="topic-hero" style={{ ["--accent-color" as string]: "#2f8f5b" }}>
        <div className="kicker">Minigame</div>
        <h1>🧮 Math Speed Drill</h1>
        <p>Solve as many problems as you can in {ROUND_SECONDS} seconds. ACT-style arithmetic, percentages, and algebra.</p>
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
            <button className="btn" style={{ background: "#2f8f5b" }} onClick={start}>
              Start drill
            </button>
          </>
        )}

        {running && (
          <>
            <div className="game-prompt" style={{ color: flash === "correct" ? "var(--good)" : flash === "incorrect" ? "var(--bad)" : undefined }}>
              {question.prompt}
            </div>
            <div className="game-choice-grid">
              {question.choices.map((c) => (
                <button key={c} className="choice-btn" onClick={() => choose(c)}>
                  {c}
                </button>
              ))}
            </div>
          </>
        )}

        {over && (
          <div className="quiz-result" style={{ padding: "10px 0 0" }}>
            <p>Time's up! You solved</p>
            <div className="score" style={{ color: "#2f8f5b" }}>
              {score}
            </div>
            <p>{score > roundStartBest.current ? "New best!" : `Best: ${highScore.current}`}</p>
            <button className="btn" style={{ background: "#2f8f5b" }} onClick={start}>
              Play again
            </button>
          </div>
        )}
      </div>
    </>
  );
}
