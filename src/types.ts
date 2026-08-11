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

export type Category = "ACT Prep" | "AP Courses";

export interface Topic {
  slug: string;
  title: string;
  category: Category;
  subtitle: string;
  emoji: string;
  accent: string;
  notes: NoteSection[];
  questions: Question[];
}
