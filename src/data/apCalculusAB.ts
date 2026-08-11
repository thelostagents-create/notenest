import type { Topic } from "../types";

const apCalculusAB: Topic = {
  slug: "ap-calculus-ab",
  title: "AP Calculus AB",
  category: "AP Courses",
  subtitle: "Limits, derivatives, integrals, and their applications.",
  emoji: "∫",
  accent: "#1a73b8",
  notes: [
    {
      heading: "Limits & Continuity",
      bullets: [
        "A limit describes the value a function approaches as x approaches a point — the function need not be defined there.",
        "A function is continuous at x = a if lim(x→a) f(x) exists, f(a) is defined, and they're equal.",
        "For 0/0 indeterminate forms, try factoring, rationalizing, or L'Hôpital's Rule (take the derivative of top and bottom).",
        "A limit fails to exist if left- and right-hand limits disagree, or the function oscillates or goes to infinity.",
      ],
    },
    {
      heading: "Derivatives",
      bullets: [
        "The derivative is defined as f'(x) = lim(h→0) [f(x+h) − f(x)] / h — the instantaneous rate of change.",
        "Power rule: d/dx[xⁿ] = nx^(n−1). Product rule: (uv)' = u'v + uv'. Quotient rule: (u/v)' = (u'v − uv') / v².",
        "Chain rule: d/dx[f(g(x))] = f'(g(x)) · g'(x) — essential for composite functions.",
        "Implicit differentiation lets you find dy/dx when y isn't isolated: differentiate both sides and solve for dy/dx.",
      ],
    },
    {
      heading: "Applications of Derivatives",
      bullets: [
        "Related rates connect the rates of change of two related quantities — differentiate an equation relating them with respect to time.",
        "To optimize, find critical points (where f'(x) = 0 or is undefined), then check endpoints or use the second derivative test.",
        "f(x) is increasing where f'(x) > 0 and decreasing where f'(x) < 0; it's concave up where f''(x) > 0.",
        "The Mean Value Theorem guarantees a point where the instantaneous rate equals the average rate, if f is continuous and differentiable on the interval.",
      ],
    },
    {
      heading: "Integrals",
      bullets: [
        "An antiderivative F(x) satisfies F'(x) = f(x); the indefinite integral adds '+ C' for the constant of integration.",
        "The Fundamental Theorem of Calculus, Part 1: d/dx ∫[a to x] f(t) dt = f(x).",
        "FTC Part 2: ∫[a to b] f(x) dx = F(b) − F(a), where F is any antiderivative of f.",
        "u-substitution reverses the chain rule: let u equal an inner function, then rewrite the integral in terms of u.",
      ],
    },
    {
      heading: "Applications of Integrals",
      bullets: [
        "The definite integral gives the (signed) area between a curve and the x-axis.",
        "Area between two curves: ∫[a to b] (top function − bottom function) dx.",
        "Volume by disks: V = π∫ [r(x)]² dx; washers subtract an inner radius: V = π∫ [R(x)² − r(x)²] dx.",
      ],
    },
  ],
  questions: [
    {
      prompt: "What is lim(x→2) (x² − 4) / (x − 2)?",
      choices: ["0", "2", "4", "Does not exist"],
      answerIndex: 2,
      explanation: "Factor: (x−2)(x+2)/(x−2) = x+2 for x ≠ 2. As x → 2, this approaches 4.",
    },
    {
      prompt: "What is the derivative of f(x) = 3x⁴ − 5x?",
      choices: ["12x³ − 5", "12x³ − 5x", "3x³ − 5", "12x⁴ − 5"],
      answerIndex: 0,
      explanation: "Power rule: d/dx[3x⁴] = 12x³, and d/dx[−5x] = −5.",
    },
    {
      prompt: "Using the chain rule, what is d/dx[sin(3x)]?",
      choices: ["cos(3x)", "3cos(3x)", "-3cos(3x)", "3sin(3x)"],
      answerIndex: 1,
      explanation: "Derivative of sin(u) is cos(u)·u'; here u = 3x, so u' = 3, giving 3cos(3x).",
    },
    {
      prompt: "A function f has f'(x) > 0 on (1, 4). What does this tell you about f on that interval?",
      choices: ["f is decreasing", "f is increasing", "f is concave up", "f has a maximum"],
      answerIndex: 1,
      explanation: "A positive first derivative means the function's values are increasing over that interval.",
    },
    {
      prompt: "What is ∫ 6x² dx?",
      choices: ["2x³ + C", "3x³ + C", "6x³ + C", "12x + C"],
      answerIndex: 0,
      explanation: "Reverse the power rule: ∫6x² dx = 6·(x³/3) + C = 2x³ + C.",
    },
    {
      prompt: "By the Fundamental Theorem of Calculus, what is ∫[0 to 2] 3x² dx?",
      choices: ["4", "6", "8", "12"],
      answerIndex: 2,
      explanation: "Antiderivative is x³. Evaluate: (2)³ − (0)³ = 8.",
    },
    {
      prompt: "A balloon's radius grows at 2 cm/s. How fast is the volume changing when r = 3 cm? (V = 4/3 πr³, so dV/dt = 4πr² · dr/dt)",
      choices: ["24π cm³/s", "36π cm³/s", "72π cm³/s", "8π cm³/s"],
      answerIndex: 2,
      explanation: "dV/dt = 4π(3²)(2) = 4π(9)(2) = 72π cm³/s.",
    },
    {
      prompt: "Where does f(x) = x³ − 3x have a critical point?",
      choices: ["x = 0 only", "x = ±1", "x = ±3", "x = 1 only"],
      answerIndex: 1,
      explanation: "f'(x) = 3x² − 3 = 0 → x² = 1 → x = ±1.",
    },
  ],
};

export default apCalculusAB;
