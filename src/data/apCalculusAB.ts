import type { Topic } from "../types";

const apCalculusAB: Topic = {
  slug: "ap-calculus-ab",
  title: "AP Calculus AB",
  category: "AP Courses",
  subtitle: "8 units, 23 lessons: limits through applications of integration.",
  emoji: "∫",
  accent: "#1a73b8",
  units: [
    {
      slug: "limits-and-continuity",
      title: "Limits and Continuity",
      summary:
        "Build a rigorous understanding of limits, one-sided behavior, and continuity — the foundation for every derivative and integral that follows.",
      lessons: [
        {
          slug: "evaluating-limits-graphically-and-algebraically",
          title: "Evaluating Limits Graphically and Algebraically",
          summary:
            "Read limits from graphs and tables, and compute them algebraically using factoring, rationalizing, and limit laws.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "lim(x→a) f(x) = L means f(x) gets arbitrarily close to L as x gets close to a from both sides; the function's actual value at a (if it even exists) is irrelevant.",
                "One-sided limits, lim(x→a⁻) and lim(x→a⁺), must both exist and be equal for the two-sided limit to exist.",
                "Limit laws let you split limits across sums, products, and quotients (denominator ≠ 0): lim[f ± g] = lim f ± lim g, lim[f·g] = lim f · lim g.",
                "For 0/0 forms, factor and cancel a common factor, or rationalize a numerator/denominator containing a radical by multiplying by the conjugate.",
                "For a piecewise function, evaluate each piece's limit at the boundary from the appropriate side; the two-sided limit exists only if both sides agree.",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "Direct substitution is always the first move — only dig into algebra once you get an indeterminate form like 0/0.",
                "When rationalizing, multiply numerator and denominator by the conjugate of whichever part has the radical, then simplify before substituting again.",
              ],
            },
          ],
          questions: [
            {
              prompt: "What is lim(x→3) (x² − 9)/(x − 3)?",
              choices: ["Does not exist", "0", "3", "6"],
              answerIndex: 3,
              explanation:
                "Factor the numerator: (x−3)(x+3)/(x−3) = x + 3 for x ≠ 3. As x → 3, this approaches 3 + 3 = 6.",
            },
            {
              prompt: "What is lim(x→4) (√x − 2)/(x − 4)?",
              choices: ["1/4", "1/2", "4", "0"],
              answerIndex: 0,
              explanation:
                "Multiply by the conjugate: (√x−2)(√x+2) = x − 4, so the expression equals 1/(√x + 2). At x = 4, that's 1/(2+2) = 1/4.",
            },
            {
              prompt:
                "f(x) = x + 1 for x < 2, and f(x) = 3x − 3 for x ≥ 2. What is lim(x→2) f(x)?",
              choices: ["1", "3", "Does not exist", "2"],
              answerIndex: 1,
              explanation:
                "Left-hand limit: 2 + 1 = 3. Right-hand limit: 3(2) − 3 = 3. Since both sides agree, the limit is 3.",
            },
            {
              prompt: "What is lim(x→0) (x² + 5x)/x?",
              choices: ["Does not exist", "0", "5", "Undefined"],
              answerIndex: 2,
              explanation:
                "Factor: x(x+5)/x = x + 5 for x ≠ 0. As x → 0, this approaches 0 + 5 = 5.",
            },
          ],
        },
        {
          slug: "limits-at-infinity-and-infinite-limits",
          title: "Limits at Infinity and Infinite Limits",
          summary:
            "Analyze end behavior and vertical asymptotes using limits at infinity and infinite limits.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "lim(x→∞) f(x) describes end behavior; for rational functions, compare the degree of the numerator to the degree of the denominator.",
                "If deg(numerator) < deg(denominator), the limit at infinity is 0; if the degrees are equal, the limit is the ratio of leading coefficients; if the numerator's degree is greater, the limit is ±∞ (no horizontal asymptote).",
                "An infinite limit, like lim(x→a) f(x) = ∞, describes unbounded behavior near a vertical asymptote — typically where the denominator approaches 0 but the numerator doesn't.",
                "The Squeeze Theorem: if g(x) ≤ f(x) ≤ h(x) near a and lim g = lim h = L, then lim f = L too — useful for bounded oscillating functions and special limits.",
                "Two special limits worth memorizing: lim(x→0) sin(x)/x = 1, and lim(x→∞) (1 + k/x)ˣ = eᵏ.",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "For rational function limits at infinity, divide every term by the highest power of x in the denominator instead of reasoning about the whole fraction at once.",
                "A vertical asymptote comes from a zero of the denominator that isn't also cancelled by a matching zero in the numerator — always check for common factors first.",
              ],
            },
          ],
          questions: [
            {
              prompt: "What is lim(x→∞) (3x² + 2x)/(5x² − 1)?",
              choices: ["0", "3/5", "1", "∞"],
              answerIndex: 1,
              explanation:
                "The numerator and denominator have the same degree (2), so the limit is the ratio of leading coefficients: 3/5.",
            },
            {
              prompt: "What is lim(x→∞) (4x + 1)/(x² − 3)?",
              choices: ["∞", "4", "1/3", "0"],
              answerIndex: 3,
              explanation:
                "The numerator's degree (1) is less than the denominator's degree (2), so as x grows the fraction shrinks toward 0.",
            },
            {
              prompt: "What is lim(x→2⁺) 1/(x − 2)?",
              choices: ["−∞", "0", "∞", "Does not exist (oscillates)"],
              answerIndex: 2,
              explanation:
                "As x → 2⁺, (x − 2) approaches 0 through positive values, so 1/(x−2) grows without bound toward +∞.",
            },
            {
              prompt:
                "Given −x² ≤ f(x) ≤ x² for all x, what is lim(x→0) f(x) by the Squeeze Theorem?",
              choices: ["0", "1", "∞", "Does not exist"],
              answerIndex: 0,
              explanation:
                "Both bounding functions, −x² and x², approach 0 as x → 0, so f(x) is squeezed to the same limit: 0.",
            },
          ],
        },
        {
          slug: "continuity-and-ivt",
          title: "Continuity and the Intermediate Value Theorem",
          summary:
            "Classify discontinuities and use the Intermediate Value Theorem to guarantee where a continuous function takes a given value.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "f is continuous at x = a when three things all hold: f(a) is defined, lim(x→a) f(x) exists, and lim(x→a) f(x) = f(a).",
                "Removable discontinuities (holes) occur where the limit exists but doesn't match f(a), or f(a) is undefined; jump discontinuities occur where the left and right limits disagree; infinite discontinuities occur at vertical asymptotes.",
                "Polynomial, rational (away from zeros of the denominator), exponential, and trigonometric functions are continuous everywhere on their natural domains.",
                "The Intermediate Value Theorem (IVT): if f is continuous on [a,b] and k is between f(a) and f(b), there exists at least one c in [a,b] with f(c) = k.",
                "IVT guarantees existence, not uniqueness or a method to find c — it's the standard tool for proving a root or a specific function value exists on an interval.",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "To classify a discontinuity, compute the limit from each side and compare both to f(a) — 'hole' vs. 'jump' vs. 'asymptote' each have a distinct limit signature.",
                "When using the IVT to justify a root, explicitly state that f is continuous on the interval and that f(a) and f(b) straddle the target value.",
              ],
            },
          ],
          questions: [
            {
              prompt:
                "f(x) = (x² − 1)/(x − 1) for x ≠ 1, and f(1) = 3. What kind of discontinuity does f have at x = 1?",
              choices: [
                "Jump discontinuity",
                "Infinite discontinuity",
                "Removable discontinuity",
                "No discontinuity — f is continuous",
              ],
              answerIndex: 2,
              explanation:
                "Simplifying gives f(x) = x + 1 for x ≠ 1, so lim(x→1) f(x) = 2. Since f(1) = 3 ≠ 2, the limit exists but doesn't match the function value — a removable discontinuity (hole).",
            },
            {
              prompt:
                "A function g satisfies g(1) = −3 and g(4) = 5, and is continuous on [1,4]. By the IVT, which conclusion is guaranteed?",
              choices: [
                "g(2.5) = 1",
                "g has a root somewhere in (1,4)",
                "g is differentiable on (1,4)",
                "g(x) = 0 has exactly one solution in (1,4)",
              ],
              answerIndex: 1,
              explanation:
                "0 lies between g(1) = −3 and g(4) = 5, so by the IVT there must be at least one c in (1,4) with g(c) = 0. The theorem doesn't guarantee uniqueness or a specific x-value.",
            },
            {
              prompt:
                "Which type of discontinuity occurs when lim(x→a⁻) f(x) ≠ lim(x→a⁺) f(x), but both are finite?",
              choices: ["Jump", "Removable", "Infinite", "Oscillating"],
              answerIndex: 0,
              explanation:
                "When the one-sided limits are both finite but disagree, the function 'jumps' between two values at x = a — a jump discontinuity.",
            },
            {
              prompt: "Is f(x) = (x + 3)/(x² − 9) continuous at x = −3?",
              choices: [
                "Yes, it's continuous there",
                "No — there's a removable discontinuity (hole) at x = −3",
                "No — there's a jump discontinuity at x = −3",
                "No — there's a vertical asymptote at x = −3",
              ],
              answerIndex: 1,
              explanation:
                "Factoring gives f(x) = (x+3)/[(x−3)(x+3)] = 1/(x−3) for x ≠ −3. The limit as x → −3 exists (equal to −1/6), but f(−3) is undefined, so it's a removable discontinuity.",
            },
          ],
        },
      ],
    },
    {
      slug: "differentiation-definition-and-fundamental-properties",
      title: "Differentiation: Definition and Fundamental Properties",
      summary:
        "Define the derivative as a limit and master the core rules for differentiating polynomial, exponential, and trigonometric functions.",
      lessons: [
        {
          slug: "the-derivative-as-a-limit",
          title: "The Derivative as a Limit and Rates of Change",
          summary:
            "Connect average and instantaneous rate of change to the limit definition of the derivative, and see when a derivative fails to exist.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "The average rate of change of f on [a,b] is the slope of the secant line: [f(b) − f(a)] / (b − a).",
                "The derivative f'(a) = lim(h→0) [f(a+h) − f(a)] / h is the instantaneous rate of change — the slope of the tangent line at x = a.",
                "Derivative notation: f'(x), dy/dx, d/dx[f(x)], and y′ all mean the same thing.",
                "If f is differentiable at a, then f is continuous at a — but the converse is false (e.g., |x| is continuous but not differentiable at x = 0).",
                "A derivative fails to exist at a corner, a cusp, a vertical tangent line, or any point of discontinuity.",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "'Differentiable implies continuous' only runs one direction — always check both when asked to justify differentiability.",
                "For a limit-definition problem asking for f'(a), plug directly into [f(a+h) − f(a)]/h and simplify algebraically before taking h → 0; don't reach for a shortcut rule mid-problem.",
              ],
            },
          ],
          questions: [
            {
              prompt: "Using the limit definition, what is f'(x) for f(x) = x²?",
              choices: ["x", "x²", "2", "2x"],
              answerIndex: 3,
              explanation:
                "[(x+h)² − x²]/h = (2xh + h²)/h = 2x + h. As h → 0, this approaches 2x.",
            },
            {
              prompt:
                "A car travels s(t) = t² + 3t miles by hour t. What is its average velocity from t = 1 to t = 3?",
              choices: ["4", "7", "14", "18"],
              answerIndex: 1,
              explanation:
                "s(3) = 9 + 9 = 18 and s(1) = 1 + 3 = 4. Average velocity = (18 − 4)/(3 − 1) = 14/2 = 7 miles/hour.",
            },
            {
              prompt: "Which of these functions fails to be differentiable at x = 0?",
              choices: ["f(x) = x²", "f(x) = x³", "f(x) = |x|", "f(x) = eˣ"],
              answerIndex: 2,
              explanation:
                "|x| has a corner at x = 0 — the left-hand slope is −1 and the right-hand slope is +1, so the derivative doesn't exist there even though the function is continuous.",
            },
            {
              prompt: "If f is differentiable at x = a, which statement must be true?",
              choices: [
                "f is increasing at a",
                "f has a maximum at a",
                "f is concave up at a",
                "f is continuous at a",
              ],
              answerIndex: 3,
              explanation:
                "Differentiability at a point always implies continuity at that point; it says nothing about whether f is increasing, has an extremum, or is concave up.",
            },
          ],
        },
        {
          slug: "basic-differentiation-rules",
          title: "Basic Differentiation Rules: Power, Exponential, and Trigonometric Functions",
          summary:
            "Apply the constant, power, sum/difference, exponential, and trigonometric derivative rules directly.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "Power rule: d/dx[xⁿ] = nx^(n−1), valid for any real exponent n; the derivative of a constant is 0.",
                "Constant multiple and sum/difference rules: d/dx[c·f(x)] = c·f'(x), and derivatives distribute across sums and differences term by term.",
                "Exponential derivatives: d/dx[eˣ] = eˣ, and more generally d/dx[aˣ] = aˣ·ln(a) for a base a > 0.",
                "Core trig derivatives: d/dx[sin x] = cos x, d/dx[cos x] = −sin x, d/dx[tan x] = sec²x, d/dx[cot x] = −csc²x, d/dx[sec x] = sec x·tan x, d/dx[csc x] = −csc x·cot x.",
                "Rewrite radicals and rational expressions as powers of x (e.g. √x = x^(1/2), 1/x³ = x⁻³) before applying the power rule.",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "Memorize the six trig derivatives as pairs — (sin, cos), (tan, sec²), (sec, sec·tan) — each 'co-' function's derivative picks up a negative sign.",
                "Simplify a function algebraically (splitting a fraction, rewriting a radical) before differentiating — it's much easier than differentiating the messy original form directly.",
              ],
            },
          ],
          questions: [
            {
              prompt: "What is d/dx[5x⁴ − 3√x]?",
              choices: [
                "20x³ − 3/(2√x)",
                "20x³ − 3√x",
                "5x³ − 3/(2√x)",
                "20x⁴ − 3/(2√x)",
              ],
              answerIndex: 0,
              explanation:
                "d/dx[5x⁴] = 20x³. Rewrite √x as x^(1/2): d/dx[−3x^(1/2)] = −3·(1/2)x^(−1/2) = −3/(2√x).",
            },
            {
              prompt: "What is d/dx[7eˣ + cos x]?",
              choices: ["7eˣ + sin x", "7eˣ − sin x", "eˣ + cos x", "7eˣ − cos x"],
              answerIndex: 1,
              explanation:
                "d/dx[7eˣ] = 7eˣ, and d/dx[cos x] = −sin x, so the sum's derivative is 7eˣ − sin x.",
            },
            {
              prompt: "What is d/dx[tan x] at x = π/4?",
              choices: ["1", "√2", "2", "1/2"],
              answerIndex: 2,
              explanation:
                "d/dx[tan x] = sec²x. At x = π/4, sec(π/4) = √2, so sec²(π/4) = 2.",
            },
            {
              prompt: "What is d/dx[4ˣ]?",
              choices: ["4ˣ", "x·4^(x−1)", "4ˣ/ln 4", "4ˣ·ln 4"],
              answerIndex: 3,
              explanation:
                "For a general exponential base a, d/dx[aˣ] = aˣ·ln(a). Here a = 4, giving 4ˣ·ln 4.",
            },
          ],
        },
        {
          slug: "product-and-quotient-rules",
          title: "The Product and Quotient Rules",
          summary:
            "Differentiate products and quotients of functions, including combinations with trigonometric and exponential pieces.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "Product rule: d/dx[u·v] = u′v + uv′ — never just multiply the two derivatives together.",
                "Quotient rule: d/dx[u/v] = (u′v − uv′)/v², and the order in the numerator matters (u′v minus uv′, not the reverse).",
                "You can often avoid the quotient rule by rewriting u/v as u·v⁻¹ and using the product rule with the chain rule on v⁻¹ — either method must give the same answer.",
                "For three or more factors, apply the product rule pairwise: differentiate one factor at a time while holding the others constant, then add the results.",
                "Combining rules is common on the AP exam — expect problems like d/dx[x²eˣ] (product) or d/dx[sin x / x²] (quotient) rather than the rules in isolation.",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "Write out 'u = ___, v = ___, u′ = ___, v′ = ___' before plugging into the formula — it prevents sign errors, especially in the quotient rule.",
                "In the quotient rule, the sign in the numerator is always minus; a common mistake is writing u′v + uv′ by copying the product rule out of habit.",
              ],
            },
          ],
          questions: [
            {
              prompt: "What is d/dx[x³ · eˣ]?",
              choices: [
                "x²eˣ(x + 3)",
                "x³eˣ",
                "3x²eˣ",
                "x²eˣ(x − 3)",
              ],
              answerIndex: 0,
              explanation:
                "With u = x³, v = eˣ: u′v + uv′ = 3x²eˣ + x³eˣ = x²eˣ(x + 3).",
            },
            {
              prompt: "What is d/dx[sin(x)/x²]?",
              choices: [
                "(x cos x + 2 sin x)/x³",
                "(x cos x − 2 sin x)/x³",
                "(cos x − 2x sin x)/x²",
                "(x² cos x + 2x sin x)/x⁴",
              ],
              answerIndex: 1,
              explanation:
                "With u = sin x, v = x²: (u′v − uv′)/v² = (x²cos x − 2x sin x)/x⁴. Dividing numerator and denominator by x gives (x cos x − 2 sin x)/x³.",
            },
            {
              prompt: "Using the product rule, what is d/dx[(2x + 1)(x² − 3)]?",
              choices: [
                "6x² + 2x + 6",
                "2x² − 6",
                "6x² + 2x − 6",
                "4x² + 2x − 6",
              ],
              answerIndex: 2,
              explanation:
                "With u = 2x+1, v = x²−3: u′v + uv′ = 2(x²−3) + (2x+1)(2x) = (2x²−6) + (4x²+2x) = 6x² + 2x − 6.",
            },
            {
              prompt: "Which expression correctly sets up the quotient rule for d/dx[u/v]?",
              choices: [
                "(uv′ − u′v)/v²",
                "(u′v + uv′)/v²",
                "(u′v − uv′)/v",
                "(u′v − uv′)/v²",
              ],
              answerIndex: 3,
              explanation:
                "The quotient rule is (u′v − uv′)/v² — derivative of the top times the bottom, minus the top times the derivative of the bottom, all over the bottom squared.",
            },
          ],
        },
      ],
    },
    {
      slug: "differentiation-composite-implicit-inverse",
      title: "Differentiation: Composite, Implicit, and Inverse Functions",
      summary:
        "Extend differentiation to composite, implicitly defined, inverse, and logarithmic functions using the chain rule as the unifying tool.",
      lessons: [
        {
          slug: "the-chain-rule",
          title: "The Chain Rule",
          summary:
            "Differentiate composite functions by multiplying the derivative of the outer function by the derivative of the inner function.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "Chain rule: d/dx[f(g(x))] = f′(g(x))·g′(x) — differentiate the outside function first (leaving the inside alone), then multiply by the derivative of the inside.",
                "Recognize composite functions by an 'inside' expression: (inner)ⁿ, e^(inner), sin(inner), ln(inner) are all signals to apply the chain rule.",
                "For nested compositions (a function inside a function inside a function), apply the chain rule repeatedly, working from the outermost layer in.",
                "The chain rule combines with the product and quotient rules constantly — e.g. d/dx[x²·sin(3x)] needs both the product rule and the chain rule.",
                "General power rule: d/dx[(g(x))ⁿ] = n(g(x))^(n−1)·g′(x), a direct application of the chain rule you'll use constantly.",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "Say it out loud as 'the derivative of the outside, times the derivative of the inside' to keep the order straight.",
                "After differentiating, double-check you multiplied by the derivative of every inner layer — forgetting the innermost g′(x) is the single most common chain rule mistake.",
              ],
            },
          ],
          questions: [
            {
              prompt: "What is d/dx[(3x² − 1)⁵]?",
              choices: [
                "30x(3x² − 1)⁴",
                "5(3x² − 1)⁴",
                "15x(3x² − 1)⁴",
                "30x(3x² − 1)⁵",
              ],
              answerIndex: 0,
              explanation:
                "General power rule: 5(3x²−1)⁴ times the derivative of the inside, 6x, gives 30x(3x²−1)⁴.",
            },
            {
              prompt: "What is d/dx[cos(5x²)]?",
              choices: [
                "10x sin(5x²)",
                "−10x sin(5x²)",
                "−sin(5x²)",
                "−10x cos(5x²)",
              ],
              answerIndex: 1,
              explanation:
                "d/dx[cos(u)] = −sin(u)·u′. With u = 5x², u′ = 10x, so the result is −10x sin(5x²).",
            },
            {
              prompt: "What is d/dx[e^(x³)]?",
              choices: [
                "e^(x³)",
                "3x²e^(x²)",
                "3x²e^(x³)",
                "x³e^(x³)",
              ],
              answerIndex: 2,
              explanation:
                "d/dx[e^u] = e^u·u′. With u = x³, u′ = 3x², so the derivative is 3x²e^(x³).",
            },
            {
              prompt: "What is d/dx[x²·cos(4x)] using the product and chain rules?",
              choices: [
                "2x cos(4x) + 4x² sin(4x)",
                "−4x² sin(4x)",
                "2x cos(4x) − x² sin(4x)",
                "2x cos(4x) − 4x² sin(4x)",
              ],
              answerIndex: 3,
              explanation:
                "Product rule with u = x², v = cos(4x): u′v + uv′ = 2x cos(4x) + x²(−4 sin(4x)) = 2x cos(4x) − 4x² sin(4x).",
            },
          ],
        },
        {
          slug: "implicit-differentiation",
          title: "Implicit Differentiation",
          summary:
            "Differentiate equations that aren't solved for y by applying the chain rule to every y term.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "When an equation mixes x and y (like x² + y² = 25), differentiate both sides with respect to x, treating y as a function of x.",
                "Every time you differentiate a term containing y, the chain rule requires multiplying by dy/dx — e.g. d/dx[y²] = 2y·dy/dx.",
                "Terms with both x and y (like xy) need the product rule as well as the chain rule: d/dx[xy] = x·dy/dx + y.",
                "After differentiating, collect all dy/dx terms on one side, factor dy/dx out, and divide to solve for it explicitly.",
                "Implicit differentiation is essential for curves that aren't functions (like circles or ellipses), and for finding tangent-line slopes on such curves at a specific point.",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "Box every dy/dx as soon as it appears so you don't accidentally drop it while simplifying.",
                "To find a numeric slope, differentiate implicitly first, then plug in both the x- and y-coordinates of the point — you need both to evaluate dy/dx.",
              ],
            },
          ],
          questions: [
            {
              prompt: "Given x² + y² = 25, find dy/dx at the point (3, 4).",
              choices: ["−3/4", "3/4", "−4/3", "4/3"],
              answerIndex: 0,
              explanation:
                "Differentiating: 2x + 2y(dy/dx) = 0, so dy/dx = −x/y. At (3,4): dy/dx = −3/4.",
            },
            {
              prompt: "Given xy + y² = 6, what is dy/dx?",
              choices: [
                "y/(x + 2y)",
                "−y/(x + 2y)",
                "−y/(x − 2y)",
                "x/(x + 2y)",
              ],
              answerIndex: 1,
              explanation:
                "Differentiating: y + x(dy/dx) + 2y(dy/dx) = 0. Factor: dy/dx(x + 2y) = −y, so dy/dx = −y/(x + 2y).",
            },
            {
              prompt: "Given sin(y) = x, what is dy/dx?",
              choices: ["cos(y)", "−sec(y)", "sec(y)", "1/sin(y)"],
              answerIndex: 2,
              explanation:
                "Differentiating both sides: cos(y)·(dy/dx) = 1, so dy/dx = 1/cos(y) = sec(y).",
            },
            {
              prompt:
                "Given x³ + y³ = 9, what is the slope of the tangent line at (1, 2)?",
              choices: ["4", "1/4", "−4", "−1/4"],
              answerIndex: 3,
              explanation:
                "Differentiating: 3x² + 3y²(dy/dx) = 0, so dy/dx = −x²/y². At (1,2): dy/dx = −1/4.",
            },
          ],
        },
        {
          slug: "inverse-and-logarithmic-derivatives",
          title: "Derivatives of Inverse Functions, Inverse Trig Functions, and Logarithms",
          summary:
            "Differentiate inverse functions using the reciprocal relationship, plus logarithmic and inverse trig functions and their chain-rule versions.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "If g is the inverse of f, then g′(x) = 1/f′(g(x)) — the derivative of an inverse function at a point is the reciprocal of the original function's derivative at the corresponding swapped point.",
                "d/dx[ln x] = 1/x, and with the chain rule, d/dx[ln(u)] = u′/u.",
                "d/dx[logₐ x] = 1/(x·ln a) for a base a > 0, a ≠ 1.",
                "Inverse trig derivatives: d/dx[arcsin x] = 1/√(1−x²), d/dx[arctan x] = 1/(1+x²), d/dx[arcsec x] = 1/(|x|√(x²−1)).",
                "Logarithmic differentiation (taking ln of both sides before differentiating) is useful for functions with variable exponents, like xˣ, or products/quotients of many factors.",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "To find (f⁻¹)′(a), first find the input b such that f(b) = a, then compute 1/f′(b) — you need that corresponding point plugged into f′, not a itself.",
                "Memorize arcsin and arctan's derivatives as a pair — arcsin has a square root in the denominator, arctan doesn't.",
              ],
            },
          ],
          questions: [
            {
              prompt:
                "If f(x) = x³ + 2x and g is the inverse of f, with f(1) = 3, what is g′(3)?",
              choices: ["1/5", "5", "1/3", "3"],
              answerIndex: 0,
              explanation:
                "f′(x) = 3x² + 2, so f′(1) = 5. Since g′(3) = 1/f′(1), g′(3) = 1/5.",
            },
            {
              prompt: "What is d/dx[ln(x² + 1)]?",
              choices: [
                "1/(x² + 1)",
                "2x/(x² + 1)",
                "2x·ln(x² + 1)",
                "x/(x² + 1)",
              ],
              answerIndex: 1,
              explanation:
                "d/dx[ln(u)] = u′/u. With u = x²+1, u′ = 2x, so the derivative is 2x/(x²+1).",
            },
            {
              prompt: "What is d/dx[arctan(2x)]?",
              choices: [
                "1/(1 + 4x²)",
                "4/(1 + 4x²)",
                "2/(1 + 4x²)",
                "2/(1 + 2x²)",
              ],
              answerIndex: 2,
              explanation:
                "d/dx[arctan(u)] = u′/(1+u²). With u = 2x, u′ = 2, so the result is 2/(1 + 4x²).",
            },
            {
              prompt: "What is d/dx[arcsin(x)] at x = 0?",
              choices: ["0", "1/2", "undefined", "1"],
              answerIndex: 3,
              explanation:
                "d/dx[arcsin x] = 1/√(1−x²). At x = 0, this is 1/√1 = 1.",
            },
          ],
        },
      ],
    },
    {
      slug: "contextual-applications-of-differentiation",
      title: "Contextual Applications of Differentiation",
      summary:
        "Apply derivatives to motion, related rates, linear approximation, and indeterminate limit forms in real-world contexts.",
      lessons: [
        {
          slug: "motion-position-velocity-acceleration",
          title: "Motion Along a Line: Position, Velocity, and Acceleration",
          summary:
            "Use derivatives to move between position, velocity, and acceleration, and distinguish speed from velocity and distance from displacement.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "Given position s(t), velocity is v(t) = s′(t) and acceleration is a(t) = v′(t) = s″(t).",
                "The object moves right (or up) when v(t) > 0 and left (or down) when v(t) < 0; it's momentarily at rest when v(t) = 0.",
                "Speed is |v(t)|; the object is speeding up when velocity and acceleration have the same sign, and slowing down when they have opposite signs.",
                "Displacement over [a,b] is s(b) − s(a); total distance traveled requires splitting the interval at every point where v(t) = 0 and summing the absolute value of the displacement on each piece.",
                "The object changes direction exactly when v(t) changes sign (not just when v(t) = 0 — always confirm it's a genuine sign change).",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "Set v(t) = 0 first to find candidate rest/turning points, then test the sign of v(t) on each side to confirm the direction actually changes.",
                "Total distance ≠ displacement whenever the object reverses direction during the interval — always check for sign changes in v(t) before assuming they're equal.",
              ],
            },
          ],
          questions: [
            {
              prompt:
                "A particle has position s(t) = t³ − 6t² + 9t. What is its velocity at t = 2?",
              choices: ["−3", "3", "−9", "9"],
              answerIndex: 0,
              explanation:
                "v(t) = s′(t) = 3t² − 12t + 9. v(2) = 3(4) − 24 + 9 = 12 − 24 + 9 = −3.",
            },
            {
              prompt:
                "For s(t) = t³ − 6t² + 9t, is the particle speeding up or slowing down at t = 0?",
              choices: [
                "Speeding up, because v and a have the same sign",
                "Slowing down, because v and a have opposite signs",
                "Speeding up, because v and a have opposite signs",
                "Slowing down, because v and a have the same sign",
              ],
              answerIndex: 1,
              explanation:
                "v(t) = 3t²−12t+9, so v(0) = 9 (positive). a(t) = 6t−12, so a(0) = −12 (negative). Opposite signs means the particle is slowing down.",
            },
            {
              prompt:
                "A particle's velocity is v(t) = t² − 4. On what interval is the particle moving to the left (negative direction)?",
              choices: [
                "t < −2 or t > 2",
                "t = ±2",
                "−2 < t < 2",
                "t > 0",
              ],
              answerIndex: 2,
              explanation:
                "v(t) < 0 exactly when t² < 4, which happens for −2 < t < 2.",
            },
            {
              prompt:
                "A particle moves with velocity v(t) = t² − 4 (m/s) for 0 ≤ t ≤ 3. What is the total distance traveled?",
              choices: ["3", "16/3", "7/3", "23/3"],
              answerIndex: 3,
              explanation:
                "v(t) = 0 at t = 2, negative on [0,2) and positive on (2,3]. Distance = ∫₀² (4−t²)dt + ∫₂³ (t²−4)dt = 16/3 + 7/3 = 23/3 m.",
            },
          ],
        },
        {
          slug: "related-rates",
          title: "Related Rates",
          summary:
            "Differentiate an equation relating two or more changing quantities with respect to time to connect their rates of change.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "Start by identifying all variables that change with time, and write an equation relating them — often geometric: area, volume, the Pythagorean theorem, or similar triangles.",
                "Differentiate the entire equation with respect to time t, applying the chain rule to every variable — each derivative comes with a 'rate' term like dr/dt or dh/dt.",
                "Substitute known numeric values only after differentiating — plugging in numbers too early treats a changing quantity as a constant and breaks the chain rule.",
                "Common setups: circle (A = πr²), sphere (V = 4/3 πr³), cone (V = 1/3 πr²h), right-triangle legs via the Pythagorean theorem, and similar-triangle shadow/ladder problems.",
                "Pay attention to sign — a rate is negative if the quantity is decreasing (draining, shrinking, approaching) and positive if it's increasing.",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "Draw a labeled diagram and write down every given rate and the target rate before writing any equation — related rates problems are won or lost in the setup.",
                "Keep units consistent throughout, and include units in your final rate.",
              ],
            },
          ],
          questions: [
            {
              prompt:
                "A circle's radius grows at 3 cm/s. How fast is the area increasing when r = 5 cm? (A = πr², so dA/dt = 2πr·dr/dt)",
              choices: ["30π cm²/s", "15π cm²/s", "10π cm²/s", "25π cm²/s"],
              answerIndex: 0,
              explanation:
                "dA/dt = 2π(5)(3) = 30π cm²/s.",
            },
            {
              prompt:
                "A 10-ft ladder leans against a wall. The bottom slides away from the wall at 2 ft/s. How fast is the top sliding down when the bottom is 6 ft from the wall? (x² + y² = 100)",
              choices: ["1 ft/s", "1.5 ft/s", "2 ft/s", "0.75 ft/s"],
              answerIndex: 1,
              explanation:
                "At x=6, y=8 (since 6²+8²=100). Differentiating: 2x(dx/dt) + 2y(dy/dt) = 0, so dy/dt = −x(dx/dt)/y = −(6·2)/8 = −1.5 ft/s (falling at 1.5 ft/s).",
            },
            {
              prompt:
                "Water drains from a conical tank (vertex down, r = h/2 always) at 5 m³/min. Using V = (1/3)πr²h = (π/12)h³, how fast is the water level dropping when h = 4 m?",
              choices: [
                "−5/(2π) m/min",
                "−5/π m/min",
                "−5/(4π) m/min",
                "−20/π m/min",
              ],
              answerIndex: 2,
              explanation:
                "dV/dt = (π/4)h²·(dh/dt). With dV/dt = −5 and h = 4: −5 = (π/4)(16)(dh/dt) = 4π(dh/dt), so dh/dt = −5/(4π) m/min.",
            },
            {
              prompt:
                "In related rates problems, why must you substitute known numeric values only after differentiating, not before?",
              choices: [
                "Because differentiation is only valid for positive numbers",
                "Because it changes the units of the answer",
                "Because early substitution makes the algebra harder to read",
                "Because a quantity that's actually changing would be (incorrectly) treated as a constant, killing its derivative term",
              ],
              answerIndex: 3,
              explanation:
                "If you replace a variable with its instantaneous numeric value before differentiating, that variable becomes a constant, and its rate term disappears from the derivative entirely — the whole point of related rates is lost.",
            },
          ],
        },
        {
          slug: "linearization-and-lhopital",
          title: "Linear Approximation and L'Hôpital's Rule",
          summary:
            "Use a tangent line to estimate function values near a point, and resolve indeterminate limit forms with L'Hôpital's Rule.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "Local linearization: near x = a, f(x) ≈ f(a) + f′(a)(x − a) — the tangent line is the best linear approximation to f close to a.",
                "Because the tangent line lies above a concave-down graph and below a concave-up graph, linearization overestimates f for concave-down functions and underestimates for concave-up functions near a.",
                "L'Hôpital's Rule applies only to indeterminate forms 0/0 or ∞/∞: if lim f(x)/g(x) is one of these, then lim f(x)/g(x) = lim f′(x)/g′(x), provided that second limit exists.",
                "You can apply L'Hôpital's Rule repeatedly if, after differentiating top and bottom, the limit is still indeterminate.",
                "Other indeterminate forms (0·∞, ∞−∞, 1^∞, 0⁰, ∞⁰) must first be algebraically rewritten as a single fraction (0/0 or ∞/∞) before L'Hôpital's Rule can be applied.",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "Always verify the form is actually 0/0 or ∞/∞ by substitution before differentiating top and bottom — applying L'Hôpital's Rule to a non-indeterminate limit gives a wrong answer.",
                "In the quotient for L'Hôpital's Rule, differentiate the numerator and denominator separately — do NOT use the quotient rule on the whole fraction.",
              ],
            },
          ],
          questions: [
            {
              prompt:
                "Using linearization at x = 4, estimate √4.2 given f(x) = √x, f(4) = 2, f′(4) = 1/4.",
              choices: ["2.05", "2.1", "2.2", "1.95"],
              answerIndex: 0,
              explanation:
                "f(4.2) ≈ f(4) + f′(4)(4.2 − 4) = 2 + (1/4)(0.2) = 2 + 0.05 = 2.05.",
            },
            {
              prompt:
                "What is lim(x→0) (sin x)/(x³ + x) using L'Hôpital's Rule?",
              choices: ["0", "1", "∞", "Does not exist"],
              answerIndex: 1,
              explanation:
                "Direct substitution gives 0/0. Differentiating top and bottom: cos(x)/(3x²+1). At x=0, this is 1/1 = 1.",
            },
            {
              prompt: "What is lim(x→∞) (ln x)/x using L'Hôpital's Rule?",
              choices: ["∞", "1", "0", "e"],
              answerIndex: 2,
              explanation:
                "This is an ∞/∞ form. Differentiating: (1/x)/1 = 1/x, which approaches 0 as x → ∞.",
            },
            {
              prompt:
                "A function is concave down near x = 3. Its tangent line approximation at x = 3 will:",
              choices: [
                "Underestimate f for x near 3",
                "Be exactly equal to f for x near 3",
                "Have no relationship to f's actual values",
                "Overestimate f for x near 3",
              ],
              answerIndex: 3,
              explanation:
                "A concave-down curve bends below its tangent lines, so the tangent line sits above the actual curve nearby — the linear approximation overestimates f.",
            },
          ],
        },
      ],
    },
    {
      slug: "analytical-applications-of-differentiation",
      title: "Analytical Applications of Differentiation",
      summary:
        "Use the Mean Value Theorem, derivative sign analysis, and optimization techniques to fully analyze and sketch functions.",
      lessons: [
        {
          slug: "mvt-and-extreme-values",
          title: "The Mean Value Theorem and Extreme Values",
          summary:
            "Apply the Extreme Value and Mean Value Theorems, and locate absolute extrema on a closed interval using critical points.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "Extreme Value Theorem: if f is continuous on a closed interval [a,b], f is guaranteed to attain both an absolute maximum and an absolute minimum on that interval.",
                "A critical point occurs where f′(x) = 0 or f′(x) is undefined (but f(x) itself is defined there).",
                "Candidates test: to find absolute extrema on [a,b], evaluate f at every critical point inside (a,b) and at both endpoints, then compare the values.",
                "Mean Value Theorem: if f is continuous on [a,b] and differentiable on (a,b), there's at least one c in (a,b) where f′(c) = [f(b) − f(a)]/(b − a) — the instantaneous rate equals the average rate somewhere.",
                "Rolle's Theorem is the special case of the MVT where f(a) = f(b), guaranteeing a point where f′(c) = 0.",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "Don't forget to check the endpoints when finding absolute extrema on a closed interval — the max or min can occur there even if f′(endpoint) ≠ 0.",
                "The MVT requires both continuity on the closed interval AND differentiability on the open interval — a sharp corner inside the interval can invalidate the guarantee.",
              ],
            },
          ],
          questions: [
            {
              prompt: "What are the critical points of f(x) = x³ − 3x² (all real numbers)?",
              choices: [
                "x = 0 and x = 2",
                "x = 0 only",
                "x = 3 only",
                "x = −2 and x = 0",
              ],
              answerIndex: 0,
              explanation:
                "f′(x) = 3x² − 6x = 3x(x − 2) = 0 gives x = 0 and x = 2.",
            },
            {
              prompt: "f(x) = x² − 4x + 1 on [0, 3]. What is the absolute minimum value?",
              choices: ["−2", "−3", "1", "0"],
              answerIndex: 1,
              explanation:
                "f′(x) = 2x − 4 = 0 gives x = 2 (a critical point in [0,3]). Compare f(0)=1, f(2)=−3, f(3)=−2. The minimum value is −3.",
            },
            {
              prompt:
                "f(x) = x² on [1, 4]. By the MVT, at what value of c does f′(c) equal the average rate of change?",
              choices: ["1", "2", "2.5", "3"],
              answerIndex: 2,
              explanation:
                "Average rate = [f(4)−f(1)]/(4−1) = (16−1)/3 = 5. Setting f′(c) = 2c = 5 gives c = 2.5, which lies in (1,4).",
            },
            {
              prompt:
                "Which condition would prevent the Mean Value Theorem from applying to f on [a, b]?",
              choices: [
                "f(a) = f(b)",
                "f is a polynomial",
                "f′(x) exists at every point in (a,b)",
                "f has a sharp corner (non-differentiable point) inside (a, b)",
              ],
              answerIndex: 3,
              explanation:
                "The MVT requires differentiability on the entire open interval (a,b); a corner where the derivative doesn't exist breaks that requirement.",
            },
          ],
        },
        {
          slug: "curve-sketching-concavity",
          title: "Curve Sketching: Increasing, Decreasing, and Concavity",
          summary:
            "Use the first and second derivative tests to determine intervals of increase/decrease, concavity, and inflection points, and connect the graphs of f, f′, and f″.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "f is increasing where f′(x) > 0 and decreasing where f′(x) < 0; local extrema occur where f′ changes sign (First Derivative Test).",
                "f is concave up where f″(x) > 0 and concave down where f″(x) < 0; an inflection point occurs where f″ changes sign (and f is defined there).",
                "Second Derivative Test: at a critical point where f′(x)=0, if f″(x) > 0 it's a local min, if f″(x) < 0 it's a local max; if f″(x) = 0, the test is inconclusive and you must fall back to the First Derivative Test.",
                "Reading between graphs: where f is increasing, f′ is positive (above the x-axis); where f is concave up, f′ is increasing and f″ is positive.",
                "A local max/min of f corresponds to a sign change of f′, and an inflection point of f corresponds to a sign change of f″.",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "Build a sign chart for f′ (and f″, if needed) by testing a value in each interval between critical points — it's the fastest way to avoid sign errors.",
                "A critical point isn't automatically a local extremum — f′(0) = 0 for f(x) = x³, but that's an inflection point, not a max or min, since f′ doesn't change sign there.",
              ],
            },
          ],
          questions: [
            {
              prompt: "For f(x) = x³ − 12x, on which interval is f increasing?",
              choices: [
                "x < −2 or x > 2",
                "−2 < x < 2",
                "x > 0",
                "x < 0",
              ],
              answerIndex: 0,
              explanation:
                "f′(x) = 3x² − 12 = 3(x−2)(x+2), which is positive when |x| > 2, i.e. x < −2 or x > 2.",
            },
            {
              prompt: "For f(x) = x⁴ − 4x³, where is f concave down?",
              choices: [
                "x < 0",
                "0 < x < 2",
                "x > 2",
                "x < 0 or x > 2",
              ],
              answerIndex: 1,
              explanation:
                "f′(x) = 4x³ − 12x², f″(x) = 12x² − 24x = 12x(x−2), which is negative for 0 < x < 2 — that's where f is concave down.",
            },
            {
              prompt: "f has a critical point at x = 3 with f″(3) = −4. What does the Second Derivative Test conclude?",
              choices: [
                "Local minimum at x = 3",
                "Inconclusive — need more information",
                "Local maximum at x = 3",
                "Inflection point at x = 3",
              ],
              answerIndex: 2,
              explanation:
                "Since f′(3) = 0 and f″(3) < 0, the graph is concave down at that critical point, which means it's a local maximum.",
            },
            {
              prompt: "For g(x) = x³, what is true about x = 0?",
              choices: [
                "It's a local minimum",
                "It's a local maximum",
                "It's neither a critical point nor an inflection point",
                "It's an inflection point, not a local extremum",
              ],
              answerIndex: 3,
              explanation:
                "g′(x) = 3x² ≥ 0 everywhere, so g′ never changes sign at x=0 — no local extremum. But g″(x) = 6x changes sign from negative to positive there, so x=0 is an inflection point.",
            },
          ],
        },
        {
          slug: "optimization",
          title: "Optimization Problems",
          summary:
            "Translate a real-world maximum or minimum situation into a function of one variable, then use calculus to find the optimal value.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "Identify the quantity to optimize, write it as a function of the relevant variables, and use any given constraint to reduce it to a single variable.",
                "Determine a reasonable domain for that variable from the physical context — lengths must be positive, and often bounded above by a fixed total.",
                "Find critical points by setting the derivative equal to zero, then confirm a max or min using the First or Second Derivative Test, or by comparing to the domain's endpoints.",
                "For a closed, bounded domain, the candidates test (critical points + endpoints) guarantees you find the true absolute max/min, not just a local one.",
                "Common setups: maximizing area/volume for fixed perimeter/surface area, minimizing cost or material, and minimizing distance between a curve and a point.",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "Always define your variables and constraint equation clearly at the start — optimization problems are mostly about a correct setup, not hard calculus.",
                "After solving, sanity-check your critical value against the domain, and re-confirm it's actually the type of extremum (max vs. min) the problem asks for.",
              ],
            },
          ],
          questions: [
            {
              prompt:
                "A farmer has 200 ft of fencing to enclose a rectangular field against an existing wall (only 3 sides need fencing). With length x perpendicular to the wall and width w parallel to it, 2x + w = 200. What dimensions maximize the area?",
              choices: [
                "x = 50 ft, w = 100 ft",
                "x = 100 ft, w = 0 ft",
                "x = 33.3 ft, w = 133.3 ft",
                "x = 25 ft, w = 150 ft",
              ],
              answerIndex: 0,
              explanation:
                "A(x) = x(200−2x) = 200x − 2x². A′(x) = 200 − 4x = 0 gives x = 50, so w = 200 − 100 = 100 ft, and this is a maximum since A″(x) = −4 < 0.",
            },
            {
              prompt:
                "An open-top box is made by cutting squares of side x from the corners of a 12 in × 12 in sheet and folding up the sides, so V(x) = x(12−2x)². What value of x maximizes the volume?",
              choices: ["x = 6 in", "x = 2 in", "x = 4 in", "x = 3 in"],
              answerIndex: 1,
              explanation:
                "V′(x) = (12−2x)² − 4x(12−2x) = (12−2x)(12−6x) = 0 gives x = 6 or x = 2. Since x = 6 collapses the box to zero volume, the maximum on the valid domain (0,6) is at x = 2.",
            },
            {
              prompt:
                "What is the domain restriction for x in the box problem above (cutting squares of side x from a 12×12 sheet)?",
              choices: ["x > 0", "0 ≤ x ≤ 12", "0 < x < 6", "x < 6"],
              answerIndex: 2,
              explanation:
                "Both x and the resulting side length (12−2x) must be positive, so 0 < x < 6.",
            },
            {
              prompt:
                "Find two positive numbers whose sum is 20 and whose product is maximized. What is the maximum product?",
              choices: ["20", "50", "90", "100"],
              answerIndex: 3,
              explanation:
                "With y = 20−x, P(x) = x(20−x) = 20x − x². P′(x) = 20 − 2x = 0 gives x = 10, y = 10, so the maximum product is 10 × 10 = 100.",
            },
          ],
        },
      ],
    },
    {
      slug: "integration-and-accumulation-of-change",
      title: "Integration and Accumulation of Change",
      summary:
        "Approximate area with Riemann sums, connect accumulation to derivatives via the Fundamental Theorem, and build a toolkit for antiderivatives.",
      lessons: [
        {
          slug: "riemann-sums-and-definite-integrals",
          title: "Riemann Sums and the Definite Integral",
          summary:
            "Approximate the area under a curve with left, right, midpoint, and trapezoidal sums, and define the definite integral as their limit.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "A Riemann sum approximates ∫[a,b] f(x)dx by summing rectangle areas: Σ f(xᵢ)·Δx, where Δx = (b−a)/n and xᵢ is a sample point in each subinterval.",
                "Left Riemann sums use the left endpoint of each subinterval (overestimating area if f is decreasing, underestimating if f is increasing); right Riemann sums use the right endpoint (opposite behavior).",
                "Midpoint sums use each interval's midpoint and are generally more accurate than left/right sums; trapezoidal sums average the left and right sums, fitting a trapezoid to each subinterval instead of a rectangle.",
                "The definite integral ∫[a,b] f(x)dx is formally defined as the limit of a Riemann sum as n → ∞ (Δx → 0), representing the exact signed area between f and the x-axis.",
                "If f(x) ≥ 0, a definite integral gives positive area; where f(x) < 0, that region contributes negative area to the integral.",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "On a table of values (not a formula), you can only compute left, right, midpoint, or trapezoidal sums — you can't take a true limit, so state which approximation method you're using.",
                "For a monotonic function, a left or right sum gives a guaranteed over- or under-estimate — use whether f is increasing or decreasing to decide which way your sum errs.",
              ],
            },
          ],
          questions: [
            {
              prompt:
                "Using a left Riemann sum with 4 subintervals, approximate ∫[0,4] x² dx.",
              choices: ["14", "20", "30", "24"],
              answerIndex: 0,
              explanation:
                "Δx = 1, left endpoints x = 0,1,2,3 give f = 0,1,4,9. Sum = 14, times Δx = 1, gives 14.",
            },
            {
              prompt:
                "Using a right Riemann sum with 4 subintervals, approximate ∫[0,4] x² dx.",
              choices: ["14", "30", "24", "36"],
              answerIndex: 1,
              explanation:
                "Right endpoints x = 1,2,3,4 give f = 1,4,9,16. Sum = 30, times Δx = 1, gives 30.",
            },
            {
              prompt:
                "For a function that is positive and decreasing on [a,b], how does a left Riemann sum compare to the exact area under the curve?",
              choices: [
                "It underestimates the area",
                "It exactly equals the area",
                "It overestimates the area",
                "It could over- or under-estimate depending on concavity",
              ],
              answerIndex: 2,
              explanation:
                "Since f is decreasing, the left endpoint of each subinterval is the largest value on that subinterval, so each rectangle sits above the curve — the sum overestimates the true area.",
            },
            {
              prompt:
                "A table gives f at x = 0, 2, 4, 6 as f = 3, 5, 4, 2. Using the trapezoidal rule with these 3 subintervals, approximate ∫[0,6] f(x) dx.",
              choices: ["18", "20", "25", "23"],
              answerIndex: 3,
              explanation:
                "Trapezoidal rule: (Δx/2)[f₀ + 2f₁ + 2f₂ + f₃] = (2/2)[3 + 2(5) + 2(4) + 2] = 1·[3+10+8+2] = 23.",
            },
          ],
        },
        {
          slug: "ftc-and-accumulation-functions",
          title: "The Fundamental Theorem of Calculus and Accumulation Functions",
          summary:
            "Connect derivatives and integrals through both parts of the Fundamental Theorem of Calculus and analyze accumulation functions.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "FTC Part 1: if g(x) = ∫[a to x] f(t)dt, then g′(x) = f(x) — differentiating an accumulation function just returns the original integrand.",
                "With the chain rule, if the upper limit is itself a function of x, g(x) = ∫[a to h(x)] f(t)dt, then g′(x) = f(h(x))·h′(x).",
                "FTC Part 2: ∫[a to b] f(x)dx = F(b) − F(a), where F is any antiderivative of f — this converts area computation into evaluating an antiderivative.",
                "An accumulation function g(x) = ∫[a to x] f(t)dt is increasing where f(t) > 0 and decreasing where f(t) < 0, since g′(x) = f(x).",
                "g has a local max where f changes from positive to negative, and a local min where f changes from negative to positive — this mirrors the First Derivative Test applied to g.",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "When the upper bound of the integral isn't just 'x', remember to multiply by the derivative of that bound (chain rule) — a very common point-loss on the AP exam.",
                "To analyze an accumulation function's behavior, just analyze the sign and behavior of the original integrand f — you rarely need to compute the integral itself.",
              ],
            },
          ],
          questions: [
            {
              prompt: "If g(x) = ∫[2 to x] (t² − 4) dt, what is g′(3)?",
              choices: ["5", "9", "4", "−4"],
              answerIndex: 0,
              explanation:
                "By FTC Part 1, g′(x) = x² − 4, so g′(3) = 9 − 4 = 5.",
            },
            {
              prompt: "If g(x) = ∫[0 to x²] cos(t) dt, what is g′(x)?",
              choices: ["cos(x²)", "2x·cos(x²)", "cos(2x)", "x²cos(x²)"],
              answerIndex: 1,
              explanation:
                "By FTC Part 1 with the chain rule, g′(x) = cos(x²)·(d/dx[x²]) = 2x·cos(x²).",
            },
            {
              prompt: "By FTC Part 2, what is ∫[1 to 3] 4x³ dx?",
              choices: ["27", "40", "80", "81"],
              answerIndex: 2,
              explanation:
                "An antiderivative is x⁴. Evaluate: 3⁴ − 1⁴ = 81 − 1 = 80.",
            },
            {
              prompt:
                "g(x) = ∫[0 to x] f(t) dt, where f is negative on (0,2) and positive on (2,5). At x = 2, g has a:",
              choices: [
                "Local maximum",
                "Inflection point only",
                "Value of zero",
                "Local minimum",
              ],
              answerIndex: 3,
              explanation:
                "g′(x) = f(x), which changes from negative to positive at x = 2 — by the First Derivative Test, that's a local minimum of g.",
            },
          ],
        },
        {
          slug: "antiderivatives-and-u-substitution",
          title: "Antiderivatives and u-Substitution",
          summary:
            "Build a toolkit of basic antiderivatives and reverse the chain rule with u-substitution to integrate composite functions.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "Reverse power rule: ∫xⁿ dx = x^(n+1)/(n+1) + C (n ≠ −1); ∫1/x dx = ln|x| + C.",
                "Basic antiderivatives to memorize: ∫eˣ dx = eˣ + C, ∫sin x dx = −cos x + C, ∫cos x dx = sin x + C, ∫sec²x dx = tan x + C.",
                "u-substitution reverses the chain rule: choose u = (inner function), compute du = u′(x)dx, and rewrite the entire integral in terms of u before integrating.",
                "For definite integrals with u-substitution, either convert the limits of integration to u-values and evaluate directly in u, or substitute back to x before plugging in the original bounds.",
                "A good candidate for u is a function whose derivative (up to a constant multiple) also appears elsewhere in the integrand.",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "After substituting, no x's should remain in the integral (only u and du) — if they do, you need a different u, or need to solve for the leftover x in terms of u.",
                "Don't forget '+ C' on indefinite integrals — it's easy to drop after a substitution, and it costs points on the AP exam.",
              ],
            },
          ],
          questions: [
            {
              prompt: "What is ∫ (4x³ − 2x) dx?",
              choices: [
                "x⁴ − x² + C",
                "4x⁴ − 2x² + C",
                "x⁴ − x²",
                "x³ − x² + C",
              ],
              answerIndex: 0,
              explanation:
                "Reverse power rule term by term: ∫4x³dx = x⁴, and ∫−2x dx = −x². Don't forget the constant: x⁴ − x² + C.",
            },
            {
              prompt:
                "Using u = x² + 3, what does ∫ x(x² + 3)⁴ dx become (in terms of u)?",
              choices: [
                "∫u⁴ du",
                "(1/2)∫u⁴ du",
                "2∫u⁴ du",
                "∫u⁴/x du",
              ],
              answerIndex: 1,
              explanation:
                "du = 2x dx, so x dx = du/2. Substituting: ∫u⁴·(du/2) = (1/2)∫u⁴ du.",
            },
            {
              prompt: "What is ∫ x(x² + 3)⁴ dx (in terms of x)?",
              choices: [
                "(x² + 3)⁵/5 + C",
                "(x² + 3)⁴/8 + C",
                "(x² + 3)⁵/10 + C",
                "(x² + 3)⁵ + C",
              ],
              answerIndex: 2,
              explanation:
                "(1/2)∫u⁴ du = (1/2)(u⁵/5) = u⁵/10. Substituting back u = x²+3 gives (x²+3)⁵/10 + C.",
            },
            {
              prompt: "What is ∫[0 to π/2] cos(x) dx?",
              choices: ["0", "−1", "π/2", "1"],
              answerIndex: 3,
              explanation:
                "An antiderivative of cos(x) is sin(x). Evaluate: sin(π/2) − sin(0) = 1 − 0 = 1.",
            },
          ],
        },
      ],
    },
    {
      slug: "differential-equations",
      title: "Differential Equations",
      summary:
        "Model changing quantities with differential equations, visualize solutions with slope fields, and solve separable equations including exponential growth and decay.",
      lessons: [
        {
          slug: "slope-fields-and-verifying-solutions",
          title: "Slope Fields and Verifying Solutions to Differential Equations",
          summary:
            "Sketch and interpret slope fields, and verify whether a given function solves a differential equation.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "A differential equation relates a function to its derivative(s), like dy/dx = xy; a solution is any function y(x) that makes the equation true.",
                "A slope field draws a short line segment of slope dy/dx = f(x,y) at many grid points, giving a visual picture of every solution curve at once without solving the equation.",
                "To verify a proposed solution, substitute it (and its derivative) into both sides of the differential equation and confirm the two sides are equal for all x.",
                "A particular solution satisfies both the differential equation and a given initial condition, like y(0) = 3; the general solution is a family of curves differing by the constant of integration.",
                "Reading a slope field: horizontal segments occur where dy/dx = 0; steep or near-vertical segments occur where |dy/dx| is large.",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "To sketch a solution curve on a slope field, start at the given initial point and follow the direction of the segments, smoothly connecting them left and right.",
                "When verifying a solution, always compute dy/dx from the proposed y first, then substitute — don't substitute y before differentiating.",
              ],
            },
          ],
          questions: [
            {
              prompt: "Is y = 3eˣ a solution to the differential equation dy/dx = y?",
              choices: [
                "Yes, because dy/dx = 3eˣ = y",
                "No, because dy/dx = 3",
                "No, because dy/dx = eˣ ≠ y",
                "Yes, because y(0) = 3",
              ],
              answerIndex: 0,
              explanation:
                "Differentiating y = 3eˣ gives dy/dx = 3eˣ, which is exactly equal to y itself — so the equation dy/dx = y holds.",
            },
            {
              prompt:
                "In the slope field for dy/dx = x − y, what is the slope of the segment drawn at the point (2, 2)?",
              choices: ["4", "0", "2", "−2"],
              answerIndex: 1,
              explanation:
                "Plug the point into the right-hand side: dy/dx = x − y = 2 − 2 = 0.",
            },
            {
              prompt:
                "For the differential equation dy/dx = x/y, at which points would the slope field show vertical (undefined) segments?",
              choices: [
                "Where x = 0",
                "Where x = y",
                "Where y = 0",
                "Where x = −y",
              ],
              answerIndex: 2,
              explanation:
                "The slope x/y is undefined whenever the denominator y = 0, which produces vertical tangent segments in the slope field.",
            },
            {
              prompt: "Is y = x² + 5 a solution to dy/dx = 2x?",
              choices: [
                "No, because y(0) ≠ 0",
                "No, because the constant 5 breaks the equation",
                "It cannot be determined without an initial condition",
                "Yes, because dy/dx = 2x for any constant added to x²",
              ],
              answerIndex: 3,
              explanation:
                "Differentiating y = x² + 5 gives dy/dx = 2x regardless of the constant, since the derivative of a constant is 0 — so the equation holds.",
            },
          ],
        },
        {
          slug: "separation-of-variables-and-growth-decay",
          title: "Separation of Variables and Exponential Growth/Decay",
          summary:
            "Solve separable differential equations by isolating variables, and apply the exponential growth/decay model dy/dt = ky.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "A separable differential equation can be rewritten so all y-terms (with dy) are on one side and all x-terms (with dx) are on the other, then both sides are integrated independently.",
                "After integrating, solve for y explicitly (if possible) and use any given initial condition to solve for the constant of integration C.",
                "The differential equation dy/dt = ky (rate of change proportional to the amount present) always has general solution y = Ce^(kt) — k > 0 models growth, k < 0 models decay.",
                "In growth/decay problems, C is the initial amount y(0), and k is found from any other given data point using the exponential formula.",
                "Half-life and doubling-time problems are exponential decay/growth in disguise — use y = y₀e^(kt) and solve for k using the given half-life or doubling time, e.g. e^(k·t½) = 1/2.",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "Always add '+C' when you integrate the x-side; it becomes an arbitrary constant that gets renamed (e.g. e^C becomes a new constant) once you exponentiate to solve for y.",
                "Whenever a problem says a rate of change is 'proportional to' the amount, immediately write dy/dt = ky — that phrase is the signal for the growth/decay model.",
              ],
            },
          ],
          questions: [
            {
              prompt: "Solve dy/dx = 2xy, given y(0) = 5.",
              choices: [
                "y = 5e^(x²)",
                "y = e^(2x²) + 5",
                "y = 5e^(2x)",
                "y = x² + 5",
              ],
              answerIndex: 0,
              explanation:
                "Separate: dy/y = 2x dx. Integrating: ln|y| = x² + C, so y = Ae^(x²). Using y(0)=5 gives A=5, so y = 5e^(x²).",
            },
            {
              prompt:
                "A population grows at a rate proportional to its size. It starts at 200 and grows to 400 in 3 years. What is k in y = 200e^(kt)?",
              choices: [
                "k = ln(2)",
                "k = ln(2)/3",
                "k = 2/3",
                "k = 3ln(2)",
              ],
              answerIndex: 1,
              explanation:
                "400 = 200e^(3k) gives e^(3k) = 2, so 3k = ln(2) and k = ln(2)/3.",
            },
            {
              prompt:
                "A radioactive substance has a half-life of 10 years. What is the decay constant k in y = y₀e^(kt) (t in years)?",
              choices: [
                "k = ln(2)/10",
                "k = −10 ln(2)",
                "k = −ln(2)/10",
                "k = ln(0.5)",
              ],
              answerIndex: 2,
              explanation:
                "Half-life means 0.5 = e^(10k), so 10k = ln(0.5) = −ln(2), giving k = −ln(2)/10.",
            },
            {
              prompt:
                "Solve the separable equation dy/dx = y²·x, and express y in terms of x (with the constant absorbed appropriately).",
              choices: [
                "y = x²/2 + C",
                "y = ln|x²/2 + C|",
                "y = 2/(x² + C)",
                "y = −2/(x² + C)",
              ],
              answerIndex: 3,
              explanation:
                "Separate: dy/y² = x dx. Integrating: −1/y = x²/2 + C₁, so y = −1/(x²/2 + C₁) = −2/(x² + C), after absorbing the factor of 2 into a renamed constant C.",
            },
          ],
        },
      ],
    },
    {
      slug: "applications-of-integration",
      title: "Applications of Integration",
      summary:
        "Use definite integrals to compute average value, net change and motion, area between curves, and volumes of solids.",
      lessons: [
        {
          slug: "average-value-and-motion-integrals",
          title: "Average Value of a Function and Motion Using Integrals",
          summary:
            "Compute the average value of a function with a definite integral, and use the Net Change Theorem to recover position and total distance from velocity.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "The average value of f on [a,b] is (1/(b−a)) ∫[a,b] f(x)dx — the height of the rectangle with the same base and area as the region under the curve.",
                "The Mean Value Theorem for Integrals guarantees some c in [a,b] where f(c) equals that average value, when f is continuous.",
                "Net Change Theorem: ∫[a,b] v(t)dt gives the displacement (net change in position) over [a,b], since velocity is the derivative of position.",
                "Total distance traveled over [a,b] is ∫[a,b] |v(t)|dt — split the integral at every t where v(t) = 0 and sum the absolute value of each piece.",
                "More generally, ∫[a,b] (rate of change of Q) dt = Q(b) − Q(a) for any accumulating quantity Q — the Net Change Theorem applied beyond just motion, e.g. water flowing into a tank.",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "Don't confuse 'average value of f' (an integral formula) with 'average rate of change of f' (a derivative/slope formula) — they use completely different computations.",
                "For total distance with a velocity that changes sign, integrate |v(t)| by breaking the interval where v = 0 — plugging straight into ∫v(t)dt only gives displacement, not distance.",
              ],
            },
          ],
          questions: [
            {
              prompt: "What is the average value of f(x) = x² on [0, 3]?",
              choices: ["3", "9", "27", "1"],
              answerIndex: 0,
              explanation:
                "Average value = (1/3)∫[0,3]x²dx = (1/3)(x³/3)|₀³ = (1/3)(9) = 3.",
            },
            {
              prompt:
                "A particle has velocity v(t) = t − 3 (m/s) for 0 ≤ t ≤ 5. What is its displacement over this interval?",
              choices: ["0", "−2.5 m", "2.5 m", "5 m"],
              answerIndex: 1,
              explanation:
                "∫[0,5](t−3)dt = [t²/2 − 3t]₀⁵ = (12.5 − 15) − 0 = −2.5 m.",
            },
            {
              prompt:
                "Using v(t) = t − 3 on [0,5], what is the total distance traveled?",
              choices: ["2.5 m", "5 m", "6.5 m", "9 m"],
              answerIndex: 2,
              explanation:
                "v(t) = 0 at t = 3. ∫[0,3]|t−3|dt = 4.5 and ∫[3,5]|t−3|dt = 2, so the total distance is 4.5 + 2 = 6.5 m.",
            },
            {
              prompt:
                "Water flows into a tank at a rate r(t) = 5 + 2t liters/min. How much water enters the tank during the first 4 minutes?",
              choices: ["20 L", "24 L", "28 L", "36 L"],
              answerIndex: 3,
              explanation:
                "∫[0,4](5+2t)dt = [5t + t²]₀⁴ = (20 + 16) − 0 = 36 L.",
            },
          ],
        },
        {
          slug: "area-between-curves",
          title: "Area Between Curves",
          summary:
            "Set up and evaluate definite integrals that give the area of a region bounded by two or more curves.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "Area between two curves on [a,b]: ∫[a,b] (top function − bottom function) dx, where 'top' is whichever curve has the greater y-value on that interval.",
                "Find the bounds of integration by setting the two functions equal and solving for their intersection points, unless bounds are already given.",
                "If the curves switch which one is on top within the interval, split the integral at each crossing point and use (top − bottom) separately on each piece.",
                "When a region is more naturally described in terms of y (bounded left/right instead of top/bottom), integrate with respect to y instead: ∫[c,d] (right function − left function) dy.",
                "Always sketch the region — it's the fastest way to correctly identify which curve is 'on top' (or 'on the right') and to catch a sign error before it happens.",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "Setting the functions equal to find intersection points is usually the very first algebra step, even before writing the integral.",
                "If your area comes out negative, you likely have top and bottom (or left and right) reversed — flip the subtraction order.",
              ],
            },
          ],
          questions: [
            {
              prompt: "Where do y = x² and y = 2x intersect?",
              choices: [
                "x = 0 and x = 2",
                "x = 0 and x = 1",
                "x = −2 and x = 2",
                "x = 1 and x = 2",
              ],
              answerIndex: 0,
              explanation:
                "Setting x² = 2x gives x² − 2x = 0, or x(x−2) = 0, so x = 0 and x = 2.",
            },
            {
              prompt: "What is the area between y = 2x and y = x² on [0, 2]?",
              choices: ["1", "4/3", "2", "8/3"],
              answerIndex: 1,
              explanation:
                "On [0,2], 2x ≥ x², so the area is ∫[0,2](2x − x²)dx = [x² − x³/3]₀² = (4 − 8/3) = 4/3.",
            },
            {
              prompt:
                "y = √x and y = x/2 intersect at x = 0 and x = 4, with √x on top on that interval. Which integral gives the enclosed area?",
              choices: [
                "∫[0,4] (x/2 − √x) dx",
                "∫[0,4] √x dx",
                "∫[0,4] (√x − x/2) dx",
                "∫[0,4] (x − x/2) dx",
              ],
              answerIndex: 2,
              explanation:
                "Since y = √x is the top function on [0,4], the area is ∫[0,4] (top − bottom) dx = ∫[0,4] (√x − x/2) dx.",
            },
            {
              prompt:
                "A region is bounded on the left by x = y² and on the right by x = y + 2, for −1 ≤ y ≤ 2. What integral (in terms of y) gives its area?",
              choices: [
                "∫[−1,2] (y² − y − 2) dy",
                "∫[−1,2] (y² − 2) dy",
                "∫[−1,2] y dy",
                "∫[−1,2] (y + 2 − y²) dy",
              ],
              answerIndex: 3,
              explanation:
                "Integrating with respect to y, area = ∫(right − left) dy = ∫[−1,2] [(y+2) − y²] dy, using the intersection points y = −1 and y = 2 found by solving y² = y + 2.",
            },
          ],
        },
        {
          slug: "volumes-disks-washers-cross-sections",
          title: "Volumes: Disks, Washers, and Known Cross Sections",
          summary:
            "Compute volumes of solids of revolution using the disk and washer methods, and volumes from known cross-sectional shapes.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "Disk method (revolving a region bounded by the x-axis around the x-axis): V = π∫[a,b] [f(x)]² dx, where f(x) is the radius at each x.",
                "Washer method (revolving a region between two curves, with a gap around the axis): V = π∫[a,b] ([R(x)]² − [r(x)]²) dx, where R is the outer radius and r is the inner radius.",
                "For revolution around a horizontal line y = k (not the x-axis) or a vertical line x = h (not the y-axis), adjust the radius by subtracting k or h from the function before squaring.",
                "Volume with known cross sections perpendicular to an axis: V = ∫[a,b] A(x) dx, where A(x) is the area of the cross-sectional shape (square, semicircle, equilateral triangle, etc.) built on a base determined by the region.",
                "For a square cross section with side length s(x) = f(x) − g(x), A(x) = [f(x) − g(x)]²; for a semicircle with diameter f(x) − g(x), A(x) = (π/8)[f(x) − g(x)]².",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "Always identify the outer radius R and inner radius r (or the axis of revolution) before writing the integral — swapping them flips the sign of your answer.",
                "For cross-section problems, first find the base length as a function of x, then apply the correct area formula for that specific shape — the formula changes completely if the shape changes.",
              ],
            },
          ],
          questions: [
            {
              prompt:
                "The region under y = √x from x = 0 to x = 4 is revolved around the x-axis. What is the volume? (V = π∫[0,4] (√x)² dx)",
              choices: ["8π", "16π", "4π", "2π"],
              answerIndex: 0,
              explanation:
                "V = π∫[0,4] x dx = π[x²/2]₀⁴ = π(8) = 8π.",
            },
            {
              prompt:
                "The region between y = x and y = x² (for 0 ≤ x ≤ 1) is revolved around the x-axis using the washer method. Which is the correct integral for the volume?",
              choices: [
                "π∫[0,1] (x⁴ − x²) dx",
                "π∫[0,1] (x² − x⁴) dx",
                "π∫[0,1] (x − x²) dx",
                "2π∫[0,1] (x − x²) dx",
              ],
              answerIndex: 1,
              explanation:
                "On [0,1], y = x is the outer radius R and y = x² is the inner radius r, so V = π∫[0,1] (R² − r²) dx = π∫[0,1] (x² − x⁴) dx.",
            },
            {
              prompt: "What is the value of π∫[0,1] (x² − x⁴) dx?",
              choices: ["π/3", "π/5", "2π/15", "π/15"],
              answerIndex: 2,
              explanation:
                "∫[0,1](x²−x⁴)dx = [x³/3 − x⁵/5]₀¹ = 1/3 − 1/5 = 2/15. Multiplying by π gives 2π/15.",
            },
            {
              prompt:
                "A solid has base the region between y = x² and y = 4 (for −2 ≤ x ≤ 2), with cross sections perpendicular to the x-axis that are squares. What is the area function A(x)?",
              choices: [
                "4 − x²",
                "(4 − x²)/2",
                "16 − x⁴",
                "(4 − x²)²",
              ],
              answerIndex: 3,
              explanation:
                "The square's side length is the region's height, s(x) = 4 − x². Its area is side², so A(x) = (4 − x²)².",
            },
          ],
        },
      ],
    },
  ],
};

export default apCalculusAB;
