import type { Topic } from "../types";

const apCalculusAB: Topic = {
  slug: "ap-calculus-ab",
  title: "AP Calculus AB",
  category: "AP Courses",
  subtitle: "5 lessons: limits through applications of integrals.",
  emoji: "∫",
  accent: "#1a73b8",
  lessons: [
    {
      slug: "limits-continuity",
      title: "Lesson 1: Limits & Continuity",
      summary: "What a limit means, and when a function is continuous.",
      notes: [
        {
          heading: "Key Concepts",
          bullets: [
            "A limit describes the value a function approaches as x approaches a point — the function need not be defined there.",
            "A function is continuous at x = a if lim(x→a) f(x) exists, f(a) is defined, and they're equal.",
            "For 0/0 indeterminate forms, try factoring, rationalizing, or L'Hôpital's Rule (take the derivative of top and bottom).",
            "A limit fails to exist if left- and right-hand limits disagree, or the function oscillates or goes to infinity.",
          ],
        },
        {
          heading: "Quick Tips",
          bullets: [
            "Always check for a common factor first before reaching for L'Hôpital's Rule — it's usually faster.",
            "A hole (removable discontinuity) still has a limit; a jump or asymptote does not.",
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
          prompt: "A function has lim(x→3⁻) f(x) = 5 and lim(x→3⁺) f(x) = 8. What is lim(x→3) f(x)?",
          choices: ["5", "8", "6.5", "Does not exist"],
          answerIndex: 3,
          explanation: "Since the left- and right-hand limits disagree, the two-sided limit does not exist.",
        },
        {
          prompt: "For f(x) to be continuous at x = a, which condition is NOT required?",
          choices: ["f(a) is defined", "lim(x→a) f(x) exists", "f'(a) exists", "lim(x→a) f(x) = f(a)"],
          answerIndex: 2,
          explanation: "Continuity only requires the function value and limit to exist and match — differentiability is a separate, stronger condition.",
        },
        {
          prompt: "What is lim(x→0) sin(x) / x?",
          choices: ["0", "1", "Undefined", "Infinity"],
          answerIndex: 1,
          explanation: "This is a classic special limit equal to 1, often proven with the squeeze theorem or L'Hôpital's Rule.",
        },
      ],
    },
    {
      slug: "derivatives",
      title: "Lesson 2: Derivatives",
      summary: "The definition of the derivative and the core differentiation rules.",
      notes: [
        {
          heading: "Key Concepts",
          bullets: [
            "The derivative is defined as f'(x) = lim(h→0) [f(x+h) − f(x)] / h — the instantaneous rate of change.",
            "Power rule: d/dx[xⁿ] = nx^(n−1). Product rule: (uv)' = u'v + uv'. Quotient rule: (u/v)' = (u'v − uv') / v².",
            "Chain rule: d/dx[f(g(x))] = f'(g(x)) · g'(x) — essential for composite functions.",
            "Implicit differentiation lets you find dy/dx when y isn't isolated: differentiate both sides and solve for dy/dx.",
          ],
        },
        {
          heading: "Quick Tips",
          bullets: [
            "Whenever you see a function 'inside' another function, that's your cue to use the chain rule.",
            "Every time you differentiate a y term implicitly, multiply by dy/dx.",
          ],
        },
      ],
      questions: [
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
          prompt: "What is d/dx[x²·sin(x)] using the product rule?",
          choices: ["2x·cos(x)", "2x·sin(x) + x²·cos(x)", "2x·sin(x) − x²·cos(x)", "x²·cos(x)"],
          answerIndex: 1,
          explanation: "Product rule: (uv)' = u'v + uv' with u = x², v = sin(x) gives 2x·sin(x) + x²·cos(x).",
        },
        {
          prompt: "Given x² + y² = 25, what is dy/dx using implicit differentiation?",
          choices: ["−x/y", "x/y", "−y/x", "2x"],
          answerIndex: 0,
          explanation: "Differentiating both sides: 2x + 2y(dy/dx) = 0, so dy/dx = −x/y.",
        },
      ],
    },
    {
      slug: "applications-of-derivatives",
      title: "Lesson 3: Applications of Derivatives",
      summary: "Related rates, optimization, and curve sketching.",
      notes: [
        {
          heading: "Key Concepts",
          bullets: [
            "Related rates connect the rates of change of two related quantities — differentiate an equation relating them with respect to time.",
            "To optimize, find critical points (where f'(x) = 0 or is undefined), then check endpoints or use the second derivative test.",
            "f(x) is increasing where f'(x) > 0 and decreasing where f'(x) < 0; it's concave up where f''(x) > 0.",
            "The Mean Value Theorem guarantees a point where the instantaneous rate equals the average rate, if f is continuous and differentiable on the interval.",
          ],
        },
        {
          heading: "Quick Tips",
          bullets: [
            "In related rates problems, write down every given rate and the equation linking the variables before differentiating.",
            "A critical point isn't automatically a max or min — always confirm with a sign change or the second derivative test.",
          ],
        },
      ],
      questions: [
        {
          prompt: "A function f has f'(x) > 0 on (1, 4). What does this tell you about f on that interval?",
          choices: ["f is decreasing", "f is increasing", "f is concave up", "f has a maximum"],
          answerIndex: 1,
          explanation: "A positive first derivative means the function's values are increasing over that interval.",
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
        {
          prompt: "If f''(x) > 0 on an interval, the graph of f is:",
          choices: ["Increasing", "Decreasing", "Concave up", "Concave down"],
          answerIndex: 2,
          explanation: "A positive second derivative means the slope is increasing, which is the definition of concave up.",
        },
      ],
    },
    {
      slug: "integrals",
      title: "Lesson 4: Integrals",
      summary: "Antiderivatives, the Fundamental Theorem of Calculus, and u-substitution.",
      notes: [
        {
          heading: "Key Concepts",
          bullets: [
            "An antiderivative F(x) satisfies F'(x) = f(x); the indefinite integral adds '+ C' for the constant of integration.",
            "The Fundamental Theorem of Calculus, Part 1: d/dx ∫[a to x] f(t) dt = f(x).",
            "FTC Part 2: ∫[a to b] f(x) dx = F(b) − F(a), where F is any antiderivative of f.",
            "u-substitution reverses the chain rule: let u equal an inner function, then rewrite the integral in terms of u.",
          ],
        },
        {
          heading: "Quick Tips",
          bullets: [
            "Reverse the power rule to integrate xⁿ: add 1 to the exponent, then divide by the new exponent.",
            "When choosing u for substitution, look for a function whose derivative also appears (up to a constant) in the integral.",
          ],
        },
      ],
      questions: [
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
          prompt: "Using u-substitution with u = x² + 1, what does ∫ 2x(x² + 1)³ dx become?",
          choices: ["∫ u³ du", "∫ 2u³ du", "∫ u³/2 du", "∫ 2x·u³ du"],
          answerIndex: 0,
          explanation: "With u = x² + 1, du = 2x dx, so the integral becomes exactly ∫ u³ du.",
        },
        {
          prompt: "If F(x) is an antiderivative of f(x) and F(1) = 5, F(4) = 12, what is ∫[1 to 4] f(x) dx?",
          choices: ["5", "7", "12", "17"],
          answerIndex: 1,
          explanation: "By FTC Part 2, the definite integral equals F(4) − F(1) = 12 − 5 = 7.",
        },
      ],
    },
    {
      slug: "applications-of-integrals",
      title: "Lesson 5: Applications of Integrals",
      summary: "Area between curves and volumes of revolution.",
      notes: [
        {
          heading: "Key Concepts",
          bullets: [
            "The definite integral gives the (signed) area between a curve and the x-axis.",
            "Area between two curves: ∫[a to b] (top function − bottom function) dx.",
            "Volume by disks: V = π∫ [r(x)]² dx; washers subtract an inner radius: V = π∫ [R(x)² − r(x)²] dx.",
          ],
        },
        {
          heading: "Quick Tips",
          bullets: [
            "Always sketch the region first to identify which curve is on top and where they intersect (your bounds of integration).",
            "For washers, R is the outer radius and r is the inner radius — mixing them up flips the sign of your answer.",
          ],
        },
      ],
      questions: [
        {
          prompt: "What integral gives the area between y = x and y = x² from x = 0 to x = 1?",
          choices: ["∫[0,1] (x² − x) dx", "∫[0,1] (x − x²) dx", "∫[0,1] x dx", "∫[0,1] x² dx"],
          answerIndex: 1,
          explanation: "On [0,1], y = x lies above y = x², so the area is ∫(top − bottom) dx = ∫(x − x²) dx.",
        },
        {
          prompt: "Which formula gives the volume when the region under y = f(x) from a to b is revolved around the x-axis?",
          choices: ["π∫[a,b] f(x) dx", "π∫[a,b] [f(x)]² dx", "2π∫[a,b] f(x) dx", "∫[a,b] [f(x)]² dx"],
          answerIndex: 1,
          explanation: "The disk method squares the radius (the function value) before integrating: V = π∫[f(x)]² dx.",
        },
        {
          prompt: "What is ∫[0,1] (x − x²) dx, the area between y = x and y = x²?",
          choices: ["1/6", "1/3", "1/2", "2/3"],
          answerIndex: 0,
          explanation: "∫(x − x²)dx = x²/2 − x³/3, evaluated from 0 to 1 gives 1/2 − 1/3 = 1/6.",
        },
        {
          prompt: "In a washer-method setup, what does the inner radius r(x) represent?",
          choices: [
            "The distance from the axis of revolution to the farther boundary curve",
            "The distance from the axis of revolution to the nearer boundary curve",
            "The total width of the region",
            "The height of the region",
          ],
          answerIndex: 1,
          explanation: "The inner radius is the closer curve to the axis of revolution — it defines the 'hole' subtracted from the outer disk.",
        },
      ],
    },
  ],
};

export default apCalculusAB;
