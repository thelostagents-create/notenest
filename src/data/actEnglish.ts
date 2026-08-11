import type { Topic } from "../types";

const actEnglish: Topic = {
  slug: "act-english",
  title: "ACT English",
  category: "ACT Prep",
  subtitle: "Grammar, usage, and rhetorical skills — 75 questions in 45 minutes.",
  emoji: "✏️",
  accent: "#e0574b",
  notes: [
    {
      heading: "Punctuation Essentials",
      bullets: [
        "Commas separate items in a series, set off nonessential (nonrestrictive) clauses, and join two independent clauses with a coordinating conjunction (FANBOYS).",
        "Semicolons join two independent clauses without a conjunction, or separate items in a list that already contains commas.",
        "Use a colon only after a complete independent clause to introduce a list, explanation, or quote.",
        "Apostrophes show possession (the student's book) or form contractions (it's = it is) — never plain plurals.",
        "Dashes and parentheses can both set off nonessential info; just be consistent with the pair you use.",
      ],
    },
    {
      heading: "Sentence Structure",
      bullets: [
        "An independent clause has a subject and verb and can stand alone; a dependent clause cannot.",
        "A run-on joins two independent clauses with no punctuation; a comma splice joins them with only a comma — both are wrong.",
        "Fix run-ons/splices with a period, semicolon, comma + FANBOYS, or a subordinating conjunction.",
        "A sentence fragment is missing a subject, verb, or complete thought — watch for clauses starting with 'because,' 'which,' or '-ing' words standing alone.",
      ],
    },
    {
      heading: "Usage & Grammar",
      bullets: [
        "Subjects and verbs must agree in number, even when words come between them ('The list of items is long').",
        "Pronouns must agree in number and gender with their antecedent, and it must be clear what they refer to.",
        "Keep verb tense consistent within a sentence/paragraph unless a clear time shift is intended.",
        "Comparisons and lists must be parallel in structure ('I like running, swimming, and biking,' not 'to bike').",
      ],
    },
    {
      heading: "Rhetorical Skills",
      bullets: [
        "The ACT rewards conciseness — if two answers say the same thing, pick the shorter one that isn't redundant.",
        "'Relevance' questions ask whether a sentence adds useful, on-topic information — if not, cut it.",
        "Transition words must match the logic between ideas: contrast (however, although), cause/effect (therefore, as a result), or addition (furthermore).",
        "Match the passage's tone and style — avoid overly casual or overly flowery language in a formal essay.",
      ],
    },
  ],
  questions: [
    {
      prompt: "Choose the best version of the underlined portion: \"The coach, along with the players, were excited about the win.\"",
      choices: ["were excited about the win", "was excited about the win", "have been excited about the win", "being excited about the win"],
      answerIndex: 1,
      explanation:
        "The subject is 'the coach' (singular); 'along with the players' is a nonessential phrase that doesn't affect agreement, so the verb should be 'was.'",
    },
    {
      prompt: "Which choice best combines these sentences? \"Maria studied all night. She still felt unprepared for the exam.\"",
      choices: [
        "Maria studied all night, she still felt unprepared for the exam.",
        "Maria studied all night; still she felt unprepared for the exam.",
        "Maria studied all night, but she still felt unprepared for the exam.",
        "Maria studied all night, and still felt unprepared, for the exam.",
      ],
      answerIndex: 2,
      explanation: "A comma plus the coordinating conjunction 'but' correctly joins two independent clauses and signals the contrast between them.",
    },
    {
      prompt: "Identify the error: \"Each of the students have submitted their essay on time.\"",
      choices: ["Each of the students", "have submitted", "their essay", "No error"],
      answerIndex: 1,
      explanation: "'Each' is singular, so the verb should be 'has submitted,' not 'have submitted.'",
    },
    {
      prompt: "Which is the most concise and correct revision? \"In my personal opinion, I think that the plan is unnecessary and not needed.\"",
      choices: [
        "In my personal opinion, I think the plan is unnecessary.",
        "I think, in my opinion, that the plan is not needed and unnecessary.",
        "The plan is unnecessary.",
        "It is my opinion that the plan is not necessary or needed.",
      ],
      answerIndex: 2,
      explanation: "'In my opinion,' 'I think,' and 'not needed' are all redundant with 'unnecessary.' The ACT rewards cutting redundancy.",
    },
    {
      prompt: "Choose the correct pronoun: \"Neither the manager nor the employees ___ aware of the change.\"",
      choices: ["was", "is", "were", "being"],
      answerIndex: 2,
      explanation: "With 'neither...nor,' the verb agrees with the closer subject — here, the plural 'employees' — so 'were' is correct.",
    },
    {
      prompt: "Which transition best fits? \"The bridge was closed for repairs; ___, commuters had to take a longer route.\"",
      choices: ["however", "for example", "as a result", "in addition"],
      answerIndex: 2,
      explanation: "The second clause is a direct consequence of the first, so a cause/effect transition like 'as a result' fits best.",
    },
    {
      prompt: "Spot the fragment: Which of these is NOT a complete sentence?",
      choices: [
        "Because the storm knocked out power.",
        "The storm knocked out power.",
        "The storm, which was fierce, knocked out power.",
        "Power was knocked out by the storm.",
      ],
      answerIndex: 0,
      explanation: "'Because the storm knocked out power' is a dependent clause — it needs an independent clause attached to be complete.",
    },
    {
      prompt: "Which sentence uses the apostrophe correctly?",
      choices: [
        "The dog's ran across its owner's yard.",
        "The dogs' ran across their owners yard.",
        "The dogs ran across their owner's yard.",
        "The dog's ran across their owners' yard.",
      ],
      answerIndex: 2,
      explanation: "'Dogs' (plural, no possession) needs no apostrophe; 'owner's yard' shows singular possession — this is the only fully correct version.",
    },
  ],
};

export default actEnglish;
