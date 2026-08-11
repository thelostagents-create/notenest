const KEY_PREFIX = "notenest:progress:";
const GAME_KEY_PREFIX = "notenest:highscore:";

export interface Progress {
  score: number;
  total: number;
}

function lessonKey(topicSlug: string, lessonSlug: string) {
  return `${topicSlug}:${lessonSlug}`;
}

export function getLessonProgress(topicSlug: string, lessonSlug: string): Progress | null {
  try {
    const raw = localStorage.getItem(KEY_PREFIX + lessonKey(topicSlug, lessonSlug));
    if (!raw) return null;
    return JSON.parse(raw) as Progress;
  } catch {
    return null;
  }
}

export function saveLessonProgress(topicSlug: string, lessonSlug: string, score: number, total: number) {
  try {
    const key = KEY_PREFIX + lessonKey(topicSlug, lessonSlug);
    const existing = getLessonProgress(topicSlug, lessonSlug);
    if (existing && existing.score >= score) return;
    localStorage.setItem(key, JSON.stringify({ score, total }));
  } catch {
    // localStorage unavailable — ignore
  }
}

export interface TopicStats {
  attempted: number;
  total: number;
}

export function getTopicStats(topicSlug: string, lessonSlugs: string[]): TopicStats {
  let attempted = 0;
  for (const slug of lessonSlugs) {
    if (getLessonProgress(topicSlug, slug)) attempted++;
  }
  return { attempted, total: lessonSlugs.length };
}

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
