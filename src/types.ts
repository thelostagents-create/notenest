export interface NoteSection {
  heading: string;
  bullets: string[];
}

export interface Question {
  prompt: string;
  choices: string[];
  answerIndex: number;
  explanation: string;
}

export interface Lesson {
  slug: string;
  title: string;
  summary: string;
  notes: NoteSection[];
  questions: Question[];
}

export interface Unit {
  slug: string;
  title: string;
  summary: string;
  lessons: Lesson[];
}

export type Category = "ACT Prep" | "AP Courses";

export interface Topic {
  slug: string;
  title: string;
  category: Category;
  subtitle: string;
  emoji: string;
  accent: string;
  /** Multi-level courses (AP): grouped into units, each with several lessons. */
  units?: Unit[];
  /** Flat, single-level topics (ACT): a plain list of lessons, no unit grouping. */
  lessons?: Lesson[];
}
