import type { Topic } from "../types";

const actMath: Topic = {
  slug: "act-math",
  title: "ACT Math",
  category: "ACT Prep",
  subtitle: "Pre-algebra through trigonometry — 60 questions in 60 minutes.",
  emoji: "📐",
  accent: "#2f8f5b",
  notes: [
    {
      heading: "Pre-Algebra & Elementary Algebra",
      bullets: [
        "Percent change = (new − old) / old × 100. Watch for 'percent of' vs 'percent more/less than.'",
        "Order of operations: parentheses, exponents, multiplication/division (left to right), addition/subtraction (left to right).",
        "Ratios compare quantities in the same units; set up proportions by cross-multiplying.",
        "Exponent rules: a^m · a^n = a^(m+n); (a^m)^n = a^(mn); a^0 = 1; a^(-n) = 1/a^n.",
      ],
    },
    {
      heading: "Intermediate Algebra & Coordinate Geometry",
      bullets: [
        "Quadratic formula: x = (−b ± √(b²−4ac)) / 2a, for ax² + bx + c = 0.",
        "Slope formula: m = (y₂ − y₁) / (x₂ − x₁). Parallel lines share slope; perpendicular slopes are negative reciprocals.",
        "Midpoint: ((x₁+x₂)/2, (y₁+y₂)/2). Distance: √((x₂−x₁)² + (y₂−y₁)²).",
        "Solve systems by substitution or elimination; a system has one, none, or infinitely many solutions.",
      ],
    },
    {
      heading: "Plane Geometry",
      bullets: [
        "Pythagorean theorem: a² + b² = c² for right triangles. Know the 3-4-5 and 5-12-13 special triples.",
        "Special right triangles: 45-45-90 (legs equal, hypotenuse = leg√2) and 30-60-90 (sides in ratio 1 : √3 : 2).",
        "Circle formulas: circumference = 2πr, area = πr². Arc length and sector area scale by the central angle's fraction of 360°.",
        "Sum of interior angles of a polygon = (n − 2) × 180°.",
      ],
    },
    {
      heading: "Trigonometry",
      bullets: [
        "SOHCAHTOA: sin = opposite/hypotenuse, cos = adjacent/hypotenuse, tan = opposite/adjacent.",
        "sin²θ + cos²θ = 1 for any angle θ.",
        "On the unit circle, cos θ is the x-coordinate and sin θ is the y-coordinate.",
      ],
    },
    {
      heading: "Test-Taking Strategy",
      bullets: [
        "Backsolve by plugging the answer choices into the question — fast for 'solve for x' problems.",
        "Plug in your own simple numbers when a problem uses variables only, then match answer choices.",
        "Skip and return: on a timed section, don't let one hard problem eat the clock — mark it and move on.",
      ],
    },
  ],
  questions: [
    {
      prompt: "If 3x − 7 = 20, what is x?",
      choices: ["7", "9", "13", "27"],
      answerIndex: 1,
      explanation: "3x = 27, so x = 9.",
    },
    {
      prompt: "A shirt originally priced $40 is discounted 25%. What is the sale price?",
      choices: ["$10", "$15", "$25", "$30"],
      answerIndex: 3,
      explanation: "25% of $40 is $10; $40 − $10 = $30.",
    },
    {
      prompt: "What is the slope of the line through (2, 3) and (6, 11)?",
      choices: ["1", "2", "4", "8"],
      answerIndex: 1,
      explanation: "m = (11 − 3) / (6 − 2) = 8/4 = 2.",
    },
    {
      prompt: "A right triangle has legs of length 6 and 8. What is the hypotenuse?",
      choices: ["9", "10", "12", "14"],
      answerIndex: 1,
      explanation: "6² + 8² = 36 + 64 = 100, and √100 = 10 (a 6-8-10 triangle, a multiple of 3-4-5).",
    },
    {
      prompt: "Solve for x: x² − 5x + 6 = 0.",
      choices: ["x = 1, 6", "x = 2, 3", "x = -2, -3", "x = 6, -1"],
      answerIndex: 1,
      explanation: "Factor: (x − 2)(x − 3) = 0, so x = 2 or x = 3.",
    },
    {
      prompt: "In a 30-60-90 triangle, the side opposite the 30° angle is 5. What is the length of the hypotenuse?",
      choices: ["5", "5√2", "5√3", "10"],
      answerIndex: 3,
      explanation: "In a 30-60-90 triangle the sides are in ratio 1 : √3 : 2, so the hypotenuse (opposite 90°) is twice the shortest side: 2 × 5 = 10.",
    },
    {
      prompt: "If sin θ = 3/5 and θ is acute, what is cos θ?",
      choices: ["3/5", "4/5", "5/3", "5/4"],
      answerIndex: 1,
      explanation: "sin²θ + cos²θ = 1, so cos²θ = 1 − 9/25 = 16/25, and cos θ = 4/5 (a 3-4-5 triangle).",
    },
    {
      prompt: "A circle has radius 6. What is its area, in terms of π?",
      choices: ["6π", "12π", "36π", "72π"],
      answerIndex: 2,
      explanation: "Area = πr² = π(6²) = 36π.",
    },
  ],
};

export default actMath;
