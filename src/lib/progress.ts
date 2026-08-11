const KEY_PREFIX = "notenest:progress:";

export interface Progress {
  score: number;
  total: number;
}

export function getProgress(slug: string): Progress | null {
  try {
    const raw = localStorage.getItem(KEY_PREFIX + slug);
    if (!raw) return null;
    return JSON.parse(raw) as Progress;
  } catch {
    return null;
  }
}

export function saveProgress(slug: string, score: number, total: number) {
  try {
    const existing = getProgress(slug);
    if (existing && existing.score >= score) return;
    localStorage.setItem(KEY_PREFIX + slug, JSON.stringify({ score, total }));
  } catch {
    // localStorage unavailable — ignore
  }
}

const GAME_KEY_PREFIX = "notenest:highscore:";

export function getHighScore(gameId: string): number {
  try {
    const raw = localStorage.getItem(GAME_KEY_PREFIX + gameId);
    return raw ? Number(raw) : 0;
  } catch {
    return 0;
  }
}

export function saveHighScore(gameId: string, score: number) {
  try {
    if (score > getHighScore(gameId)) {
      localStorage.setItem(GAME_KEY_PREFIX + gameId, String(score));
    }
  } catch {
    // localStorage unavailable — ignore
  }
}
