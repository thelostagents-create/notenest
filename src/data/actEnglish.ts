import type { Topic } from "../types";

const actEnglish: Topic = {
  slug: "act-english",
  title: "ACT English",
  category: "ACT Prep",
  subtitle: "4 lessons: punctuation through rhetorical skills — 75 questions in 45 minutes on test day.",
  emoji: "✏️",
  accent: "#e0574b",
  lessons: [
    {
      slug: "punctuation-essentials",
      title: "Lesson 1: Punctuation Essentials",
      summary: "Commas, semicolons, colons, and apostrophes.",
      notes: [
        {
          heading: "Key Concepts",
          bullets: [
            "Commas separate items in a series, set off nonessential (nonrestrictive) clauses, and join two independent clauses with a coordinating conjunction (FANBOYS).",
            "Semicolons join two independent clauses without a conjunction, or separate items in a list that already contains commas.",
            "Use a colon only after a complete independent clause to introduce a list, explanation, or quote.",
            "Apostrophes show possession (the student's book) or form contractions (it's = it is) — never plain plurals.",
          ],
        },
        {
          heading: "Quick Tips",
          bullets: [
            "Dashes and parentheses can both set off nonessential info; just be consistent with the pair you use.",
            "If you could replace the punctuation with a period and still have two complete sentences, you need a semicolon or period — not just a comma.",
          ],
        },
      ],
      questions: [
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
        {
          prompt: "Which choice correctly punctuates this sentence? \"The museum was closed for renovations ___ we decided to visit the aquarium instead.\"",
          choices: ["(no punctuation)", "a comma", "a semicolon", "a colon"],
          answerIndex: 2,
          explanation: "Both halves are independent clauses with no conjunction, so a semicolon is needed to join them without creating a run-on.",
        },
        {
          prompt: "\"She packed everything she needed: a tent, a sleeping bag, and a flashlight.\" What role does the colon play here?",
          choices: [
            "It joins two independent clauses",
            "It introduces a list after a complete independent clause",
            "It shows possession",
            "It separates items that already contain commas",
          ],
          answerIndex: 1,
          explanation: "The colon follows a complete sentence ('She packed everything she needed') and introduces the list that explains it.",
        },
      ],
    },
    {
      slug: "sentence-structure",
      title: "Lesson 2: Sentence Structure",
      summary: "Independent/dependent clauses, run-ons, and fragments.",
      notes: [
        {
          heading: "Key Concepts",
          bullets: [
            "An independent clause has a subject and verb and can stand alone; a dependent clause cannot.",
            "A run-on joins two independent clauses with no punctuation; a comma splice joins them with only a comma — both are wrong.",
            "Fix run-ons/splices with a period, semicolon, comma + FANBOYS, or a subordinating conjunction.",
            "A sentence fragment is missing a subject, verb, or complete thought — watch for clauses starting with 'because,' 'which,' or '-ing' words standing alone.",
          ],
        },
        {
          heading: "Quick Tips",
          bullets: [
            "Words like 'however' and 'therefore' aren't coordinating conjunctions — starting a new independent clause with one still needs a semicolon or period before it, not just a comma.",
            "Check every clause for both a subject and a verb; if either is missing, it's a fragment.",
          ],
        },
      ],
      questions: [
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
          prompt: "Which sentence is a comma splice?",
          choices: [
            "The concert sold out fast, fans lined up overnight.",
            "The concert sold out fast; fans lined up overnight.",
            "The concert sold out fast because fans lined up overnight.",
            "The concert sold out fast, so fans lined up overnight.",
          ],
          answerIndex: 0,
          explanation: "Joining two independent clauses with only a comma (no conjunction) is a comma splice — it needs a semicolon, period, or comma + FANBOYS.",
        },
        {
          prompt: "Which revision correctly fixes this run-on? \"The rain stopped the sun came out.\"",
          choices: [
            "The rain stopped, the sun came out.",
            "The rain stopped; the sun came out.",
            "The rain stopped the sun, came out.",
            "The rain, stopped the sun came out.",
          ],
          answerIndex: 1,
          explanation: "A semicolon correctly joins the two independent clauses without a conjunction, fixing the run-on.",
        },
        {
          prompt: "Which of these is a dependent clause on its own?",
          choices: ["The team won the championship.", "Although the team won the championship.", "The team won.", "They celebrated all night."],
          answerIndex: 1,
          explanation: "'Although' is a subordinating conjunction — it makes the clause dependent, unable to stand alone as a complete sentence.",
        },
      ],
    },
    {
      slug: "usage-grammar",
      title: "Lesson 3: Usage & Grammar",
      summary: "Subject-verb agreement, pronouns, tense, and parallel structure.",
      notes: [
        {
          heading: "Key Concepts",
          bullets: [
            "Subjects and verbs must agree in number, even when words come between them ('The list of items is long').",
            "Pronouns must agree in number and gender with their antecedent, and it must be clear what they refer to.",
            "Keep verb tense consistent within a sentence/paragraph unless a clear time shift is intended.",
            "Comparisons and lists must be parallel in structure ('I like running, swimming, and biking,' not 'to bike').",
          ],
        },
        {
          heading: "Quick Tips",
          bullets: [
            "Mentally cross out prepositional phrases between the subject and verb ('of items,' 'along with the players') to check agreement.",
            "In a list, make every item match the same grammatical form — all -ing words, or all nouns, not a mix.",
          ],
        },
      ],
      questions: [
        {
          prompt: "Identify the error: \"Each of the students have submitted their essay on time.\"",
          choices: ["Each of the students", "have submitted", "their essay", "No error"],
          answerIndex: 1,
          explanation: "'Each' is singular, so the verb should be 'has submitted,' not 'have submitted.'",
        },
        {
          prompt: "Choose the correct verb: \"Neither the manager nor the employees ___ aware of the change.\"",
          choices: ["was", "is", "were", "being"],
          answerIndex: 2,
          explanation: "With 'neither...nor,' the verb agrees with the closer subject — here, the plural 'employees' — so 'were' is correct.",
        },
        {
          prompt: "Which sentence uses parallel structure correctly?",
          choices: [
            "She enjoys hiking, swimming, and to bike on weekends.",
            "She enjoys hiking, swimming, and biking on weekends.",
            "She enjoys to hike, swimming, and biking on weekends.",
            "She enjoys hiking, to swim, and biking on weekends.",
          ],
          answerIndex: 1,
          explanation: "All three items in the list match the same '-ing' form, keeping the sentence parallel.",
        },
        {
          prompt: "Which choice keeps verb tense consistent? \"Yesterday, she finished her homework and ___ to the store.\"",
          choices: ["walks", "walk", "walked", "will walk"],
          answerIndex: 2,
          explanation: "Since the sentence is set in the past ('finished'), the second verb should also be past tense: 'walked.'",
        },
      ],
    },
    {
      slug: "rhetorical-skills",
      title: "Lesson 4: Rhetorical Skills",
      summary: "Conciseness, relevance, transitions, and tone.",
      notes: [
        {
          heading: "Key Concepts",
          bullets: [
            "The ACT rewards conciseness — if two answers say the same thing, pick the shorter one that isn't redundant.",
            "'Relevance' questions ask whether a sentence adds useful, on-topic information — if not, cut it.",
            "Transition words must match the logic between ideas: contrast (however, although), cause/effect (therefore, as a result), or addition (furthermore).",
            "Match the passage's tone and style — avoid overly casual or overly flowery language in a formal essay.",
          ],
        },
        {
          heading: "Quick Tips",
          bullets: [
            "'DELETE the underlined portion' is correct more often than you'd think — always consider it as an option.",
            "When a question asks about the 'best transition,' read the sentences on both sides of the blank, not just one.",
          ],
        },
      ],
      questions: [
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
          prompt: "Which transition best fits? \"The bridge was closed for repairs; ___, commuters had to take a longer route.\"",
          choices: ["however", "for example", "as a result", "in addition"],
          answerIndex: 2,
          explanation: "The second clause is a direct consequence of the first, so a cause/effect transition like 'as a result' fits best.",
        },
        {
          prompt: "A paragraph about a city's public transit history includes a sentence about the writer's favorite pizza place. What should happen to this sentence?",
          choices: [
            "Keep it — extra detail always helps",
            "Move it to the introduction",
            "Delete it — it's irrelevant to the paragraph's topic",
            "Turn it into the topic sentence",
          ],
          answerIndex: 2,
          explanation: "The ACT tests relevance: information unrelated to the paragraph's focus should be cut, even if it's well written.",
        },
        {
          prompt: "In a formal essay about climate policy, which phrase best matches the passage's expected tone?",
          choices: ["'This is such a huge deal, you guys.'", "'The data pretty much says it's bad.'", "'The data indicate significant long-term risks.'", "'Honestly, who even knows at this point?'"],
          answerIndex: 2,
          explanation: "Formal essays call for objective, precise language — casual phrasing breaks the passage's tone even if the content is accurate.",
        },
      ],
    },
  ],
};

export default actEnglish;
