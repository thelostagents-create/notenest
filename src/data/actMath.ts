import type { Topic } from "../types";

const actMath: Topic = {
  slug: "act-math",
  title: "ACT Math",
  category: "ACT Prep",
  subtitle: "5 lessons: pre-algebra through trigonometry — 60 questions in 60 minutes on test day.",
  emoji: "📐",
  accent: "#2f8f5b",
  lessons: [
    {
      slug: "pre-algebra-elementary-algebra",
      title: "Lesson 1: Pre-Algebra & Elementary Algebra",
      summary: "Percents, order of operations, ratios, and exponents.",
      notes: [
        {
          heading: "Key Concepts",
          bullets: [
            "Percent change = (new − old) / old × 100. Watch for 'percent of' vs 'percent more/less than.'",
            "Order of operations: parentheses, exponents, multiplication/division (left to right), addition/subtraction (left to right).",
            "Ratios compare quantities in the same units; set up proportions by cross-multiplying.",
            "Exponent rules: a^m · a^n = a^(m+n); (a^m)^n = a^(mn); a^0 = 1; a^(-n) = 1/a^n.",
          ],
        },
        {
          heading: "Quick Tips",
          bullets: [
            "'X percent more than Y' means Y × (1 + X/100), not just X% of Y — a common trap.",
            "When solving a simple linear equation, isolate the variable one operation at a time, undoing addition/subtraction before multiplication/division.",
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
          prompt: "What is the value of 4 + 2 × (6 − 3)²?",
          choices: ["22", "36", "54", "72"],
          answerIndex: 0,
          explanation: "Order of operations: (6−3)² = 9, then 2×9 = 18, then 4+18 = 22.",
        },
        {
          prompt: "A recipe uses a 3:2 ratio of flour to sugar. If you use 12 cups of flour, how many cups of sugar do you need?",
          choices: ["6", "8", "9", "18"],
          answerIndex: 1,
          explanation: "Set up the proportion 3/2 = 12/x. Cross-multiply: 3x = 24, so x = 8.",
        },
      ],
    },
    {
      slug: "intermediate-algebra-coordinate-geometry",
      title: "Lesson 2: Intermediate Algebra & Coordinate Geometry",
      summary: "Quadratics, systems of equations, slope, and distance.",
      notes: [
        {
          heading: "Key Concepts",
          bullets: [
            "Quadratic formula: x = (−b ± √(b²−4ac)) / 2a, for ax² + bx + c = 0.",
            "Slope formula: m = (y₂ − y₁) / (x₂ − x₁). Parallel lines share slope; perpendicular slopes are negative reciprocals.",
            "Midpoint: ((x₁+x₂)/2, (y₁+y₂)/2). Distance: √((x₂−x₁)² + (y₂−y₁)²).",
            "Solve systems by substitution or elimination; a system has one, none, or infinitely many solutions.",
          ],
        },
        {
          heading: "Quick Tips",
          bullets: [
            "Before using the quadratic formula, always check if the expression factors easily — it's usually faster.",
            "For systems of equations, elimination is often quickest when both equations are already in standard form (Ax + By = C).",
          ],
        },
      ],
      questions: [
        {
          prompt: "What is the slope of the line through (2, 3) and (6, 11)?",
          choices: ["1", "2", "4", "8"],
          answerIndex: 1,
          explanation: "m = (11 − 3) / (6 − 2) = 8/4 = 2.",
        },
        {
          prompt: "Solve for x: x² − 5x + 6 = 0.",
          choices: ["x = 1, 6", "x = 2, 3", "x = -2, -3", "x = 6, -1"],
          answerIndex: 1,
          explanation: "Factor: (x − 2)(x − 3) = 0, so x = 2 or x = 3.",
        },
        {
          prompt: "What is the distance between the points (1, 2) and (4, 6)?",
          choices: ["3", "4", "5", "7"],
          answerIndex: 2,
          explanation: "Distance = √((4−1)² + (6−2)²) = √(9 + 16) = √25 = 5.",
        },
        {
          prompt: "Solve the system: x + y = 10 and x − y = 2. What is x?",
          choices: ["4", "6", "8", "12"],
          answerIndex: 1,
          explanation: "Adding both equations eliminates y: 2x = 12, so x = 6.",
        },
      ],
    },
    {
      slug: "plane-geometry",
      title: "Lesson 3: Plane Geometry",
      summary: "Triangles, circles, and polygon angles.",
      notes: [
        {
          heading: "Key Concepts",
          bullets: [
            "Pythagorean theorem: a² + b² = c² for right triangles. Know the 3-4-5 and 5-12-13 special triples.",
            "Special right triangles: 45-45-90 (legs equal, hypotenuse = leg√2) and 30-60-90 (sides in ratio 1 : √3 : 2).",
            "Circle formulas: circumference = 2πr, area = πr². Arc length and sector area scale by the central angle's fraction of 360°.",
            "Sum of interior angles of a polygon = (n − 2) × 180°.",
          ],
        },
        {
          heading: "Quick Tips",
          bullets: [
            "Recognizing a 3-4-5 or 5-12-13 triangle (or its multiples) instantly saves you from doing the Pythagorean theorem by hand.",
            "For a regular polygon, divide the interior angle sum by n to get each individual interior angle.",
          ],
        },
      ],
      questions: [
        {
          prompt: "A right triangle has legs of length 6 and 8. What is the hypotenuse?",
          choices: ["9", "10", "12", "14"],
          answerIndex: 1,
          explanation: "6² + 8² = 36 + 64 = 100, and √100 = 10 (a 6-8-10 triangle, a multiple of 3-4-5).",
        },
        {
          prompt: "In a 30-60-90 triangle, the side opposite the 30° angle is 5. What is the length of the hypotenuse?",
          choices: ["5", "5√2", "5√3", "10"],
          answerIndex: 3,
          explanation: "In a 30-60-90 triangle the sides are in ratio 1 : √3 : 2, so the hypotenuse (opposite 90°) is twice the shortest side: 2 × 5 = 10.",
        },
        {
          prompt: "A circle has radius 6. What is its area, in terms of π?",
          choices: ["6π", "12π", "36π", "72π"],
          answerIndex: 2,
          explanation: "Area = πr² = π(6²) = 36π.",
        },
        {
          prompt: "What is the sum of the interior angles of a hexagon (6 sides)?",
          choices: ["360°", "540°", "720°", "900°"],
          answerIndex: 2,
          explanation: "Sum = (n − 2) × 180° = (6 − 2) × 180° = 720°.",
        },
      ],
    },
    {
      slug: "trigonometry",
      title: "Lesson 4: Trigonometry",
      summary: "SOHCAHTOA, the Pythagorean identity, and the unit circle.",
      notes: [
        {
          heading: "Key Concepts",
          bullets: [
            "SOHCAHTOA: sin = opposite/hypotenuse, cos = adjacent/hypotenuse, tan = opposite/adjacent.",
            "sin²θ + cos²θ = 1 for any angle θ.",
            "On the unit circle, cos θ is the x-coordinate and sin θ is the y-coordinate.",
          ],
        },
        {
          heading: "Quick Tips",
          bullets: [
            "If you know sin θ (or cos θ) and the angle is acute, you can find the other using sin²θ + cos²θ = 1 — no need to know the angle itself.",
            "tan θ is just sin θ / cos θ — derive it if you forget the ratio.",
          ],
        },
      ],
      questions: [
        {
          prompt: "If sin θ = 3/5 and θ is acute, what is cos θ?",
          choices: ["3/5", "4/5", "5/3", "5/4"],
          answerIndex: 1,
          explanation: "sin²θ + cos²θ = 1, so cos²θ = 1 − 9/25 = 16/25, and cos θ = 4/5 (a 3-4-5 triangle).",
        },
        {
          prompt: "In a right triangle, the side opposite angle θ is 5 and the hypotenuse is 13. What is sin θ?",
          choices: ["5/13", "12/13", "5/12", "13/5"],
          answerIndex: 0,
          explanation: "sin θ = opposite / hypotenuse = 5/13.",
        },
        {
          prompt: "On the unit circle, what are the coordinates at θ = 0°?",
          choices: ["(0, 1)", "(1, 0)", "(0, 0)", "(1, 1)"],
          answerIndex: 1,
          explanation: "At θ = 0°, cos θ = 1 and sin θ = 0, giving the point (1, 0).",
        },
        {
          prompt: "If cos θ = 5/13 and θ is acute, what is tan θ?",
          choices: ["5/12", "12/5", "5/13", "13/12"],
          answerIndex: 1,
          explanation: "First find sin θ = 12/13 (5-12-13 triangle), then tan θ = sin θ / cos θ = (12/13)/(5/13) = 12/5.",
        },
      ],
    },
    {
      slug: "test-taking-strategy",
      title: "Lesson 5: Test-Taking Strategy",
      summary: "Backsolving, plugging in numbers, and pacing.",
      notes: [
        {
          heading: "Key Concepts",
          bullets: [
            "Backsolve by plugging the answer choices into the question — fast for 'solve for x' problems.",
            "Plug in your own simple numbers when a problem uses variables only, then match answer choices.",
            "Skip and return: on a timed section, don't let one hard problem eat the clock — mark it and move on.",
          ],
        },
        {
          heading: "Quick Tips",
          bullets: [
            "When backsolving, start with answer choice B or C — if it's too big or small, you often know instantly which direction to go next.",
            "Pick 'easy' numbers when plugging in — like 2, 10, or 100 — to keep the arithmetic simple.",
          ],
        },
      ],
      questions: [
        {
          prompt: "Using backsolving, which answer choice satisfies 2x + 5 = 17?",
          choices: ["4", "6", "9", "11"],
          answerIndex: 1,
          explanation: "Testing x = 6: 2(6) + 5 = 17. ✓ Backsolving confirms the answer without doing algebra by hand.",
        },
        {
          prompt: "A problem states 'a number increased by 40% equals 70.' Which strategy fits best, and what's the answer?",
          choices: ["Backsolve; the number is 50", "Plug in π; the number is 22", "Backsolve; the number is 42", "Plug in 100; the number is 70"],
          answerIndex: 0,
          explanation: "Backsolving works well here: testing 50, a 40% increase gives 50 × 1.4 = 70. ✓",
        },
        {
          prompt: "A question reads: 'If a is 3 more than b, and b is doubled, what is the new value in terms of a?' What's the best strategy?",
          choices: [
            "Plug in a simple number for b, compute a, then match the answer choice",
            "Immediately try to solve algebraically with no numbers",
            "Guess an answer choice at random",
            "Skip the question entirely",
          ],
          answerIndex: 0,
          explanation: "When a problem is stated entirely in variables, plugging in an easy number (like b = 2) turns it into simple arithmetic you can match to an answer choice.",
        },
        {
          prompt: "You're 40 questions into the 60-question Math section with 10 minutes left, and you hit a problem that looks very time-consuming. What's the best move?",
          choices: [
            "Spend as long as it takes to solve it before moving on",
            "Skip it, answer the remaining easier questions first, and return if time allows",
            "Stop the section early",
            "Guess immediately without reading it",
          ],
          answerIndex: 1,
          explanation: "Skip-and-return protects your time — securing points on questions you can answer quickly is worth more than getting stuck on one hard problem.",
        },
      ],
    },
  ],
};

export default actMath;
