import type { Topic } from "../types";

const apCalculusAB: Topic = {
  slug: "ap-calculus-ab",
  title: "AP Calculus AB",
  category: "AP Courses",
  subtitle: "8 units, 46 lessons: limits through applications of integration.",
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
          slug: "estimating-limits-graphically-and-numerically",
          title: "Estimating Limits Graphically and Numerically",
          summary:
            "Read one- and two-sided limits directly from graphs and tables of values, and use correct limit notation.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "lim(x→a) f(x) = L means f(x) can be made arbitrarily close to L by taking x sufficiently close to a from both sides; this says nothing about f(a) itself — the limit describes the trend the outputs are heading toward, not the actual value planted at x = a.",
                "One-sided limits: lim(x→a⁻) f(x) is the value f approaches from the left, lim(x→a⁺) f(x) is the value from the right. The two-sided limit exists exactly when both one-sided limits exist and agree — this is the rule you'll use constantly to decide whether 'the limit' is a single number or 'does not exist.'",
                "On a graph, trace the curve toward x = a from each side and read the y-value it approaches — an open circle marks a value the function approaches but never attains, while a solid dot elsewhere shows the actual (possibly different) function value.",
                "On a table of values, examine the trend in f(x) as x gets closer to a from below and above; the limit is the value the outputs converge toward, even if a itself isn't in the table. Never treat the closest listed x-value as 'close enough' — look at the whole trend.",
                "A graph showing a vertical asymptote, a jump, or the two sides approaching different heights at x = a all signal that the two-sided limit does not exist there — learn to recognize these three visual signatures on sight.",
              ],
            },
            {
              heading: "Worked Example",
              bullets: [
                "Problem: a table shows f(2.9) = 8.41, f(2.99) = 8.9401, f(2.999) = 8.994001, f(3.001) = 9.006001, f(3.01) = 9.0601, f(3.1) = 9.61. Estimate lim(x→3) f(x).",
                "Step 1 — read the left-hand trend: as x moves 2.9 → 2.99 → 2.999 (approaching 3 from below), f(x) moves 8.41 → 8.9401 → 8.994001, clearly closing in on 9.",
                "Step 2 — read the right-hand trend: as x moves 3.1 → 3.01 → 3.001 (approaching 3 from above), f(x) moves 9.61 → 9.0601 → 9.006001, also closing in on 9.",
                "Step 3 — compare the two sides: both trends converge to the same number, 9, so the two-sided limit exists and equals that common value.",
                "Conclusion: lim(x→3) f(x) = 9. Notice you never needed a formula for f — the numerical trend alone was enough to pin down the limit.",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "On table problems, don't just read the row where x = a — look at the trend as x → a from both directions, since a itself may not even appear in the table.",
                "An open circle at (a, L) on a graph means lim(x→a) f(x) = L even if f(a) is undefined or a solid dot shows a different value directly above or below it.",
              ],
            },
          ],
          questions: [
            {
              prompt:
                "A table shows f(1.9)=3.8, f(1.99)=3.98, f(1.999)=3.998, f(2.001)=4.002, f(2.01)=4.02, f(2.1)=4.2. Based on this table, what is lim(x→2) f(x)?",
              choices: ["4", "2", "Does not exist", "3.998"],
              answerIndex: 0,
              explanation:
                "As x approaches 2 from both sides, f(x) trends toward 4 — the outputs get closer and closer to 4 without the table ever needing to include x = 2 itself.",
            },
            {
              prompt:
                "The graph of f has an open circle at (3, 5) and a solid dot at (3, 2). What is lim(x→3) f(x)?",
              choices: ["2", "5", "3", "Does not exist"],
              answerIndex: 1,
              explanation:
                "The limit reflects the value the curve approaches (the open circle at y = 5), not the actual function value plotted elsewhere (the solid dot at y = 2, meaning f(3) = 2).",
            },
            {
              prompt:
                "A graph shows f approaching 2 as x → 1 from the left and approaching 5 as x → 1 from the right. What can you conclude about lim(x→1) f(x)?",
              choices: [
                "It equals 2",
                "It equals 5",
                "It does not exist, since the one-sided limits disagree",
                "It equals 3.5, the average",
              ],
              answerIndex: 2,
              explanation:
                "The two-sided limit only exists when both one-sided limits agree. Here lim(x→1⁻) f(x) = 2 and lim(x→1⁺) f(x) = 5 disagree, so lim(x→1) f(x) does not exist.",
            },
            {
              prompt:
                "Given lim(x→4⁻) g(x) = 7 and lim(x→4⁺) g(x) = 7, but g(4) = 10, what is lim(x→4) g(x)?",
              choices: ["Does not exist", "0", "10", "7"],
              answerIndex: 3,
              explanation:
                "Both one-sided limits agree at 7, so the two-sided limit is 7 — the actual function value g(4) = 10 is irrelevant to the limit.",
            },
          ],
        },
        {
          slug: "limit-laws-and-factoring",
          title: "Limit Laws, Direct Substitution, and Factoring",
          summary:
            "Use direct substitution and the algebraic limit laws to evaluate limits, and resolve 0/0 forms by factoring and cancelling.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "Direct substitution works whenever f is continuous at a — plug in x = a first, and only dig further if you get an indeterminate form like 0/0. This works because for continuous functions, the limiting value and the actual function value are, by definition, the same thing.",
                "Limit laws let you break a complicated limit into simpler pieces you already know: lim[f ± g] = lim f ± lim g, lim[f·g] = (lim f)·(lim g), and lim[f/g] = (lim f)/(lim g) as long as lim g ≠ 0. These hold because a sum, product, or quotient of quantities that are each getting arbitrarily close to fixed numbers is itself getting arbitrarily close to the combined result.",
                "A result of 0/0 after substitution is called an indeterminate form — it does NOT mean the limit fails to exist, only that substitution alone can't tell you the answer yet. You must simplify the expression algebraically first.",
                "For rational functions producing 0/0, factor numerator and denominator and cancel the common factor. This is valid because the simplified expression and the original agree at every x except possibly x = a itself — and the limit, by definition, never cares about the value exactly at a.",
                "If cancelling once still leaves 0/0 at x = a, factor again — some expressions have a repeated root and need more than one round of factoring and cancellation before the indeterminate form clears.",
              ],
            },
            {
              heading: "Worked Example",
              bullets: [
                "Problem: evaluate lim(x→2) (x³ − 8)/(x² − 4).",
                "Step 1 — try direct substitution: (2³−8)/(2²−4) = 0/0, an indeterminate form, so substitution alone isn't enough.",
                "Step 2 — factor the numerator as a difference of cubes: x³ − 8 = (x − 2)(x² + 2x + 4).",
                "Step 3 — factor the denominator as a difference of squares: x² − 4 = (x − 2)(x + 2).",
                "Step 4 — cancel the common factor (x − 2), valid for all x ≠ 2: the expression becomes (x² + 2x + 4)/(x + 2).",
                "Step 5 — substitute x = 2 into the simplified expression: (4 + 4 + 4)/(2 + 2) = 12/4 = 3. So lim(x→2) (x³−8)/(x²−4) = 3.",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "Direct substitution is always the first move — only start factoring once you get an indeterminate form like 0/0.",
                "Recognize common factoring patterns instantly: difference of squares (a²−b²), difference of cubes (a³−b³ = (a−b)(a²+ab+b²)), and sum of cubes (a³+b³ = (a+b)(a²−ab+b²)) — spotting these saves real time under pressure.",
              ],
            },
          ],
          questions: [
            {
              prompt: "What is lim(x→5) (x² − 25)/(x − 5)?",
              choices: ["10", "5", "0", "25"],
              answerIndex: 0,
              explanation:
                "Factor the numerator: (x−5)(x+5)/(x−5) = x + 5 for x ≠ 5. As x → 5, this approaches 5 + 5 = 10.",
            },
            {
              prompt: "What is lim(x→1) (x³ − 1)/(x − 1)?",
              choices: ["1", "3", "5", "0"],
              answerIndex: 1,
              explanation:
                "Factor as a difference of cubes: (x−1)(x²+x+1)/(x−1) = x² + x + 1 for x ≠ 1. At x = 1, this is 1 + 1 + 1 = 3.",
            },
            {
              prompt:
                "If lim(x→2) f(x) = 5 and lim(x→2) g(x) = −3, what is lim(x→2) [2f(x) − g(x)]?",
              choices: ["7", "10", "13", "16"],
              answerIndex: 2,
              explanation:
                "By the limit laws, lim[2f − g] = 2·lim f − lim g = 2(5) − (−3) = 10 + 3 = 13.",
            },
            {
              prompt: "What is lim(x→0) (x² + 7x)/x?",
              choices: ["0", "x", "5", "7"],
              answerIndex: 3,
              explanation:
                "Factor: x(x+7)/x = x + 7 for x ≠ 0. As x → 0, this approaches 0 + 7 = 7.",
            },
          ],
        },
        {
          slug: "rationalizing-piecewise-limits",
          title: "Rationalizing, Piecewise Limits, and Selecting a Procedure",
          summary:
            "Clear 0/0 forms containing radicals by multiplying by the conjugate, evaluate limits of piecewise functions, and choose the right technique for a given limit.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "When a 0/0 form contains a square root, factoring won't help directly — instead multiply the numerator and denominator by the conjugate of the radical expression. This works because (√u − c)(√u + c) = u − c², which eliminates the square root and often creates a factor that cancels with the denominator.",
                "For a piecewise function, the two-sided limit at a boundary point requires evaluating each formula's one-sided limit using the piece that actually applies on that side, then checking whether the two results agree.",
                "Selecting a procedure is a decision, not a formula: try direct substitution first; if you get 0/0 with a polynomial or rational expression, factor; if a radical is present, rationalize; if the function is piecewise, split into one-sided limits; often more than one technique is needed in sequence on the same problem.",
                "Some limits require combining moves — for instance, factoring first to cancel an obvious common factor, then rationalizing what remains, or vice versa.",
              ],
            },
            {
              heading: "Worked Example",
              bullets: [
                "Problem: evaluate lim(x→0) [√(x + 4) − 2] / x.",
                "Step 1 — try direct substitution: [√4 − 2]/0 = 0/0, an indeterminate form with a radical present, so rationalize.",
                "Step 2 — multiply numerator and denominator by the conjugate of the numerator, √(x+4) + 2: {[√(x+4) − 2][√(x+4) + 2]} / {x[√(x+4) + 2]}.",
                "Step 3 — the numerator becomes a difference of squares: (x + 4) − 4 = x, so the expression is x / {x[√(x+4) + 2]}.",
                "Step 4 — cancel the common factor of x (valid since x ≠ 0 in the limit): 1 / [√(x+4) + 2].",
                "Step 5 — substitute x = 0: 1 / [√4 + 2] = 1/(2+2) = 1/4. So the limit is 1/4.",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "Multiplying by 'the conjugate over itself' is really multiplying by 1, so it never changes the value of the expression — only its algebraic form.",
                "At a piecewise boundary, plug the boundary x-value into each formula that borders it — the piece valid for x < a gives the left-hand limit, the piece valid for x ≥ a gives the right-hand limit.",
              ],
            },
          ],
          questions: [
            {
              prompt: "What is lim(x→9) (√x − 3)/(x − 9)?",
              choices: ["1/6", "1/3", "6", "0"],
              answerIndex: 0,
              explanation:
                "Multiply by the conjugate: (√x−3)(√x+3) = x − 9, so the expression equals 1/(√x + 3). At x = 9, that's 1/(3+3) = 1/6.",
            },
            {
              prompt:
                "f(x) = 2x − 1 for x < 3, and f(x) = x² − 4 for x ≥ 3. What is lim(x→3) f(x)?",
              choices: ["2", "5", "9", "Does not exist"],
              answerIndex: 1,
              explanation:
                "Left-hand limit: 2(3) − 1 = 5. Right-hand limit: 3² − 4 = 5. Since both sides agree, lim(x→3) f(x) = 5.",
            },
            {
              prompt: "What is lim(x→0) [√(x + 4) − 2]/x?",
              choices: ["1/2", "0", "1/4", "4"],
              answerIndex: 2,
              explanation:
                "Rationalizing (see Worked Example) gives 1/[√(x+4)+2], which at x = 0 equals 1/(2+2) = 1/4.",
            },
            {
              prompt:
                "Which technique should you try first for lim(x→2) (x² − 4)/(x − 2)?",
              choices: [
                "Rationalize using the conjugate",
                "Factor the numerator and denominator, then cancel the common factor",
                "Split into one-sided limits",
                "Assume the limit does not exist because of the 0/0 form",
              ],
              answerIndex: 1,
              explanation:
                "There's no radical or piecewise structure here — just a polynomial 0/0 form, so factoring and cancelling is the appropriate first move.",
            },
          ],
        },
        {
          slug: "the-squeeze-theorem-and-special-trig-limits",
          title: "The Squeeze Theorem and Special Trigonometric Limits",
          summary:
            "Use the Squeeze Theorem to pin down limits of bounded or oscillating functions, and apply the special limits sin(x)/x → 1 and (1 − cos x)/x → 0.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "Squeeze (Sandwich) Theorem: if g(x) ≤ f(x) ≤ h(x) for all x near a (except possibly at a itself) and lim(x→a) g(x) = lim(x→a) h(x) = L, then lim(x→a) f(x) = L too. Intuitively, f is trapped between two functions that are forced to the same value, so f has no room to go anywhere else.",
                "The Squeeze Theorem is the standard tool for functions like x²sin(1/x): the oscillating factor sin(1/x) is bounded between −1 and 1 for all x ≠ 0, so multiplying through by x² gives −x² ≤ x²sin(1/x) ≤ x², and both bounds go to 0 as x → 0.",
                "Two special trigonometric limits worth memorizing: lim(x→0) sin(x)/x = 1 and lim(x→0) (1 − cos x)/x = 0; both are proved using the Squeeze Theorem on geometric area bounds for sin(x), comparing the area of a triangle, a circular sector, and a larger triangle.",
                "These special limits let you evaluate more complex 0/0 trig limits by algebraically forcing the argument of sine to match the denominator, e.g. sin(5x)/x = 5·[sin(5x)/(5x)], where the bracketed piece → 1 by the special limit (with u = 5x in place of x).",
                "A bounded function times a function going to 0 always has limit 0, even if the bounded factor itself has no limit — e.g. lim(x→0) x·sin(1/x) = 0, since sin(1/x) oscillates forever but never leaves [−1, 1].",
              ],
            },
            {
              heading: "Worked Example",
              bullets: [
                "Problem: evaluate lim(x→0) sin(4x)/sin(6x).",
                "Step 1 — direct substitution gives 0/0, so rewrite using the special limit sin(u)/u → 1 as u → 0.",
                "Step 2 — multiply numerator and denominator to expose that form: sin(4x)/sin(6x) = [sin(4x)/(4x)] · [4x/(6x)] · [(6x)/sin(6x)].",
                "Step 3 — simplify the middle factor: 4x/6x = 2/3, a constant independent of x.",
                "Step 4 — as x → 0, sin(4x)/(4x) → 1 and (6x)/sin(6x) → 1 (the reciprocal of sin(6x)/(6x) → 1), by the special limit applied with u = 4x and u = 6x respectively.",
                "Step 5 — multiply the pieces: 1 · (2/3) · 1 = 2/3. So lim(x→0) sin(4x)/sin(6x) = 2/3.",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "To use sin(x)/x = 1 on a scaled version like sin(5x)/x, multiply and divide to force the argument of sine to match the denominator: sin(5x)/x = 5·sin(5x)/(5x) → 5·1 = 5.",
                "When you see xⁿ·sin(1/x) or xⁿ·cos(1/xᵏ), think Squeeze Theorem immediately — bound the trig factor by [−1, 1] and multiply through by xⁿ.",
              ],
            },
          ],
          questions: [
            {
              prompt:
                "Given −x² ≤ f(x) ≤ x² for all x, what is lim(x→0) f(x) by the Squeeze Theorem?",
              choices: ["1", "∞", "Does not exist", "0"],
              answerIndex: 3,
              explanation:
                "Both bounding functions, −x² and x², approach 0 as x → 0, so f(x) is squeezed to the same limit: 0.",
            },
            {
              prompt: "What is lim(x→0) sin(3x)/x?",
              choices: ["1", "3", "1/3", "0"],
              answerIndex: 1,
              explanation:
                "Rewrite as 3·sin(3x)/(3x). As x → 0, sin(3x)/(3x) → 1, so the whole expression approaches 3·1 = 3.",
            },
            {
              prompt: "What is lim(x→0) x²·cos(1/x)?",
              choices: ["Does not exist", "1", "0", "∞"],
              answerIndex: 2,
              explanation:
                "cos(1/x) is bounded between −1 and 1, so −x² ≤ x²cos(1/x) ≤ x². Both bounds approach 0 as x → 0, so by the Squeeze Theorem the limit is 0.",
            },
            {
              prompt: "What is lim(x→0) sin(4x)/sin(6x)?",
              choices: ["3/2", "1", "2/3", "0"],
              answerIndex: 2,
              explanation:
                "Rewriting with both special limits (see Worked Example) gives [sin(4x)/(4x)]·(4/6)·[(6x)/sin(6x)] → 1·(2/3)·1 = 2/3.",
            },
          ],
        },
        {
          slug: "limits-at-infinity-and-horizontal-asymptotes",
          title: "Limits at Infinity and Horizontal Asymptotes",
          summary:
            "Determine end behavior of functions using limits at infinity, and connect the results to horizontal asymptotes.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "lim(x→∞) f(x) and lim(x→−∞) f(x) describe end behavior — what f approaches as x grows without bound in either direction, which is a fundamentally different question from a limit at a finite point.",
                "For a rational function, compare the degree of the numerator to the degree of the denominator: if deg(num) < deg(denom), the limit is 0 (denominator grows faster, so the fraction shrinks); if the degrees are equal, the limit is the ratio of leading coefficients (both grow at the same rate, so lower-order terms become negligible); if deg(num) > deg(denom), the limit is ±∞ (no horizontal asymptote, since the numerator dominates).",
                "A horizontal asymptote y = L occurs exactly when lim(x→∞) f(x) = L or lim(x→−∞) f(x) = L; a function can have different horizontal asymptotes in each direction, or the same one on both sides.",
                "For expressions involving √(x²) as x → −∞, remember √(x²) = |x| = −x (not x), since x itself is negative there — this flips a sign compared to the x → ∞ case and is a very common source of errors.",
                "Exponential functions have horizontal asymptotes too: lim(x→−∞) eˣ = 0 (asymptote y = 0 on the left, since eˣ shrinks toward 0 as the exponent becomes very negative), while lim(x→∞) eˣ = ∞ (no asymptote on the right).",
              ],
            },
            {
              heading: "Worked Example",
              bullets: [
                "Problem: evaluate lim(x→∞) (6x³ − x)/(2x³ + 5x² − 1).",
                "Step 1 — identify the degrees: numerator has degree 3, denominator has degree 3. Equal degrees, so the limit will be the ratio of leading coefficients — but let's verify by the division method.",
                "Step 2 — divide every term in the numerator and denominator by x³, the highest power present: (6 − 1/x²)/(2 + 5/x − 1/x³).",
                "Step 3 — as x → ∞, every term with x in the denominator (1/x², 5/x, 1/x³) goes to 0, leaving (6 − 0)/(2 + 0 − 0).",
                "Step 4 — simplify: 6/2 = 3. So lim(x→∞) (6x³ − x)/(2x³ + 5x² − 1) = 3, confirming the shortcut (ratio of leading coefficients 6/2 = 3).",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "Divide every term (numerator and denominator) by the highest power of x in the denominator — this turns the limit into something you can evaluate directly by inspection.",
                "Check both x → ∞ and x → −∞ separately when a function involves a square root or absolute value — the two directions can give different horizontal asymptotes.",
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
              prompt: "What is lim(x→−∞) (2x + 3)/√(x² + 1)?",
              choices: ["0", "∞", "−2", "2"],
              answerIndex: 2,
              explanation:
                "As x → −∞, √(x²+1) = |x|√(1+1/x²) = −x√(1+1/x²). Dividing top and bottom by −x: (2x+3)/√(x²+1) = −(2 + 3/x)/√(1+1/x²) → −2/1 = −2.",
            },
            {
              prompt: "What is lim(x→∞) (3 + 5e^(−x))?",
              choices: ["3", "5", "8", "∞"],
              answerIndex: 0,
              explanation:
                "As x → ∞, e^(−x) → 0, so the expression approaches 3 + 5(0) = 3 — the graph has horizontal asymptote y = 3 on the right.",
            },
          ],
        },
        {
          slug: "infinite-limits-and-vertical-asymptotes",
          title: "Infinite Limits and Vertical Asymptotes",
          summary:
            "Analyze unbounded behavior near vertical asymptotes using one-sided infinite limits.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "An infinite limit, such as lim(x→a) f(x) = ∞, describes unbounded behavior as x approaches a — it's a description of behavior, not a numerical limit value (the limit still fails to exist in the usual finite sense, even though the notation looks like it 'equals' something).",
                "A vertical asymptote at x = a typically arises from a zero of the denominator that is not cancelled by a matching zero in the numerator — the function value is forced toward ±∞ because you're dividing by something approaching 0.",
                "To determine the sign of a one-sided infinite limit, check the sign of the numerator and the sign of the (very small) denominator as x approaches a from that side — a positive-over-tiny-positive gives +∞, positive-over-tiny-negative gives −∞, and so on.",
                "If the one-sided infinite limits from the left and right have opposite signs (one +∞, one −∞), the two-sided limit does not exist, even in the extended infinite sense — the two sides simply disagree about which direction is unbounded.",
                "Always factor and cancel common factors between numerator and denominator first — a removable hole is not a vertical asymptote, even though both come from a zero denominator before simplifying.",
              ],
            },
            {
              heading: "Worked Example",
              bullets: [
                "Problem: find lim(x→1⁻) and lim(x→1⁺) of f(x) = (x + 3)/(x² − 1), and describe the behavior at x = 1.",
                "Step 1 — factor the denominator: x² − 1 = (x−1)(x+1). There's no common factor with the numerator (x+3), so x = 1 is a genuine vertical asymptote, not a hole.",
                "Step 2 — check the sign of the numerator near x = 1: x + 3 ≈ 4, which is positive on both sides.",
                "Step 3 — check the sign of the denominator as x → 1⁻: pick a test value like x = 0.9, giving (0.9−1)(0.9+1) = (−0.1)(1.9), a small negative number.",
                "Step 4 — combine: positive numerator over a small negative denominator gives lim(x→1⁻) f(x) = −∞.",
                "Step 5 — check the denominator as x → 1⁺: pick x = 1.1, giving (0.1)(2.1), a small positive number, so positive over small positive gives lim(x→1⁺) f(x) = +∞. Since the two sides disagree in sign, the two-sided limit at x = 1 does not exist, and the graph shows a vertical asymptote with opposite behavior on each side.",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "Build a quick sign chart of the denominator's factors around x = a to determine whether the one-sided limit is +∞ or −∞ — don't just guess from the overall shape.",
                "\"lim = ∞\" is standard AP notation for this behavior, but remember it technically means the limit does not exist in the strict finite sense — both phrasings can appear as correct depending on the question.",
              ],
            },
          ],
          questions: [
            {
              prompt: "What is lim(x→2⁺) 1/(x − 2)?",
              choices: ["−∞", "0", "∞", "Does not exist (oscillates)"],
              answerIndex: 2,
              explanation:
                "As x → 2⁺, (x − 2) approaches 0 through positive values, so 1/(x−2) grows without bound toward +∞.",
            },
            {
              prompt: "What is lim(x→2⁻) 1/(x − 2)?",
              choices: ["∞", "−∞", "0", "Does not exist"],
              answerIndex: 1,
              explanation:
                "As x → 2⁻, (x − 2) approaches 0 through negative values, so 1/(x−2) decreases without bound toward −∞.",
            },
            {
              prompt: "What is lim(x→3) 1/(x − 3)²?",
              choices: ["∞", "−∞", "0", "Does not exist, sides disagree"],
              answerIndex: 0,
              explanation:
                "The denominator (x−3)² is always positive and approaches 0 from both sides, so 1/(x−3)² grows without bound toward +∞ from both sides equally.",
            },
            {
              prompt:
                "f(x) = (x − 1)/[(x − 1)(x + 2)]. What is lim(x→−2) f(x)?",
              choices: [
                "∞",
                "−∞",
                "0",
                "Does not exist — the one-sided limits are +∞ and −∞",
              ],
              answerIndex: 3,
              explanation:
                "Simplifying gives f(x) = 1/(x+2) for x ≠ 1. As x → −2⁻, x+2 → 0⁻ so f → −∞; as x → −2⁺, x+2 → 0⁺ so f → +∞. The one-sided infinite limits disagree, so the limit does not exist.",
            },
          ],
        },
        {
          slug: "continuity-and-types-of-discontinuities",
          title: "Continuity and Types of Discontinuities",
          summary:
            "Define continuity at a point and over an interval, and classify removable, jump, and infinite discontinuities.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "f is continuous at x = a when three things all hold: f(a) is defined, lim(x→a) f(x) exists, and lim(x→a) f(x) = f(a). All three conditions must hold simultaneously — missing even one breaks continuity at that point.",
                "f is continuous on an interval if it's continuous at every point in that interval, using one-sided limits to check any closed endpoints (since a two-sided limit can't exist at the very edge of the domain).",
                "Removable discontinuities (holes) occur where the limit exists but doesn't match f(a), or f(a) is undefined; jump discontinuities occur where the left and right limits both exist but disagree; infinite discontinuities occur at vertical asymptotes, where at least one side blows up without bound.",
                "Polynomial, rational (away from zeros of the denominator), exponential, and trigonometric functions are continuous everywhere on their natural domains — a fact you can cite directly rather than re-deriving each of the three conditions from scratch.",
                "A removable discontinuity can be 'fixed' by redefining f(a) to equal the limit value (this is exactly how you'd extend a function continuously across a hole); jump and infinite discontinuities cannot be fixed by changing a single point, since the underlying limit itself doesn't exist.",
              ],
            },
            {
              heading: "Worked Example",
              bullets: [
                "Problem: classify the discontinuity of f(x) = (x² − 5x + 6)/(x − 2) at x = 2, and state a value that would remove it if possible.",
                "Step 1 — check f(2): plugging in gives 0/0, so f(2) is undefined and there is some kind of discontinuity at x = 2.",
                "Step 2 — factor the numerator: x² − 5x + 6 = (x−2)(x−3), so f(x) = (x−2)(x−3)/(x−2) = x − 3 for x ≠ 2.",
                "Step 3 — compute the limit using the simplified form: lim(x→2) f(x) = 2 − 3 = −1. The limit exists.",
                "Step 4 — compare: the limit (−1) exists but f(2) is undefined, so by definition this is a removable discontinuity, not a jump or infinite one.",
                "Step 5 — to remove it, redefine f(2) = −1; the resulting function would then satisfy all three continuity conditions at x = 2.",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "To classify a discontinuity, compute the limit from each side and compare both to f(a) — 'hole' vs. 'jump' vs. 'asymptote' each have a distinct limit signature.",
                "On the AP exam, continuity claims about sums, products, and compositions of continuous functions can be justified by citing the relevant continuity rule instead of re-checking all three conditions from scratch.",
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
            {
              prompt:
                "f(x) = (x² − 4)/(x − 2) for x ≠ 2, and f(2) = k. For what value of k is f continuous at x = 2?",
              choices: ["0", "Undefined for any k", "2", "4"],
              answerIndex: 3,
              explanation:
                "Simplifying gives f(x) = x + 2 for x ≠ 2, so lim(x→2) f(x) = 4. Setting k = f(2) = 4 makes the third continuity condition hold, removing the hole.",
            },
          ],
        },
        {
          slug: "the-intermediate-value-theorem",
          title: "The Intermediate Value Theorem",
          summary:
            "Use the Intermediate Value Theorem to guarantee the existence of a function value or root on a continuous interval.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "Intermediate Value Theorem (IVT): if f is continuous on [a,b] and k is any value between f(a) and f(b), there exists at least one c in (a,b) with f(c) = k. Intuitively, a continuous curve can't skip over a height without passing through it somewhere in between.",
                "The IVT is an existence theorem — it guarantees some c exists but gives no formula or method for finding its exact value, and does not guarantee uniqueness (there could be more than one c with f(c) = k).",
                "The most common IVT application is proving a root exists: if f is continuous on [a,b] and f(a) and f(b) have opposite signs, then f has at least one zero in (a,b), since 0 is automatically 'between' a negative and a positive value.",
                "To correctly justify an IVT conclusion on the AP exam, you must explicitly state that f is continuous on the closed interval and that the target value lies between f(a) and f(b) — both parts are required for full credit.",
                "The IVT requires continuity on the entire closed interval; if f has even one discontinuity in [a,b], the theorem's guarantee no longer applies (the function really could 'jump over' the target value).",
              ],
            },
            {
              heading: "Worked Example",
              bullets: [
                "Problem: a continuous function f has f(1) = −4 and f(5) = 6. Show that f(x) = 0 has a solution in (1,5), and write a full justification.",
                "Step 1 — check that f is continuous on the closed interval [1,5]; this is given directly in the problem statement.",
                "Step 2 — identify f(1) and f(5): f(1) = −4 and f(5) = 6.",
                "Step 3 — check whether the target value, 0, lies between f(1) and f(5): since −4 < 0 < 6, yes, 0 is between them.",
                "Step 4 — write the full IVT justification: 'f is continuous on [1,5]. Since f(1) = −4 and f(5) = 6, and 0 is between f(1) and f(5), by the Intermediate Value Theorem there exists at least one c in (1,5) such that f(c) = 0.'",
                "Step 5 — note what this does NOT claim: it doesn't say where c is, or that there's only one such c — only that at least one exists.",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "Structure your IVT justification as a three-part statement: 'f is continuous on [a,b] [because ...], f(a) = ___ and f(b) = ___, and since k is between them, by the IVT there exists c in (a,b) with f(c) = k.'",
                "Watch for problems that give a table of values instead of a formula — IVT reasoning works identically as long as you can argue the function is continuous, e.g. because it's stated to be differentiable.",
              ],
            },
          ],
          questions: [
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
                "A continuous function h has h(0) = 2 and h(5) = 2. Which conclusion can you draw from the IVT about h(x) = 4 on [0,5]?",
              choices: [
                "h(x) = 4 has no solution on [0,5]",
                "h(x) = 4 has exactly one solution on [0,5]",
                "The IVT gives no guarantee, since 4 is not between h(0) and h(5)",
                "h(x) = 4 has at least two solutions on [0,5]",
              ],
              answerIndex: 2,
              explanation:
                "The IVT only applies to values k that lie between f(a) and f(b). Since h(0) = h(5) = 2, the value 4 is not between them, so the IVT simply gives no information either way.",
            },
            {
              prompt:
                "A table shows f(2) = −5 and f(6) = 3, and f is known to be differentiable (hence continuous) on [2,6]. What does the IVT guarantee about f(c) = 0?",
              choices: [
                "Some c in (2,6) with f(c) = 0",
                "c = 4 exactly",
                "No such c is guaranteed",
                "c = 2 or c = 6",
              ],
              answerIndex: 0,
              explanation:
                "0 lies between f(2) = −5 and f(6) = 3, and f is continuous on [2,6], so by the IVT there exists some c in (2,6) with f(c) = 0 — no specific value of c is determined.",
            },
            {
              prompt:
                "Why does the IVT NOT guarantee a solution to f(x) = 10 on [1,3] if f(1) = 2 and f(3) = 8, with f continuous?",
              choices: [
                "Because f is not differentiable",
                "Because the interval isn't closed",
                "Because f(1) and f(3) must be negatives of each other",
                "Because 10 is not between f(1) = 2 and f(3) = 8",
              ],
              answerIndex: 3,
              explanation:
                "The IVT only guarantees a solution for target values k strictly between f(a) and f(b). Since 10 lies outside the interval [2, 8], the IVT gives no guarantee here.",
            },
          ],
        },
      ],
    },
    {
      slug: "differentiation-definition-and-fundamental-properties",
      title: "Differentiation: Definition and Fundamental Properties",
      summary:
        "Define the derivative as a limit and master the core rules for differentiating polynomial, exponential, trigonometric, and combined functions.",
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
                "The average rate of change of f on [a,b] is the slope of the secant line: [f(b) − f(a)] / (b − a) — it summarizes overall change but says nothing about behavior at any single instant.",
                "The derivative f'(a) = lim(h→0) [f(a+h) − f(a)] / h is the instantaneous rate of change — it's what the average rate of change becomes as the second point slides infinitely close to a, turning a secant line into a tangent line.",
                "Derivative notation: f'(x), dy/dx, d/dx[f(x)], and y′ all mean the same thing; dy/dx emphasizes 'rate of change of y with respect to x' while f'(x) emphasizes 'a new function built from f.'",
                "If f is differentiable at a, then f is continuous at a — a differentiable curve can't have a jump or hole, because the very existence of a finite limiting slope forces the function values on both sides to converge to f(a). But the converse is false (e.g., |x| is continuous but not differentiable at x = 0).",
                "A derivative fails to exist at a corner, a cusp, a vertical tangent line, or any point of discontinuity — differentiability is a strictly stronger requirement than continuity.",
              ],
            },
            {
              heading: "Worked Example",
              bullets: [
                "Problem: use the limit definition to find f'(x) for f(x) = x² + 3x, then evaluate f'(2).",
                "Step 1 — write the definition: f'(x) = lim(h→0) [f(x+h) − f(x)] / h.",
                "Step 2 — expand f(x+h): (x+h)² + 3(x+h) = x² + 2xh + h² + 3x + 3h.",
                "Step 3 — subtract f(x) = x² + 3x: f(x+h) − f(x) = 2xh + h² + 3h = h(2x + h + 3).",
                "Step 4 — divide by h (valid since h ≠ 0 inside the limit): 2x + h + 3.",
                "Step 5 — let h → 0: f'(x) = 2x + 3. Evaluating at x = 2 gives f'(2) = 4 + 3 = 7.",
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
          slug: "estimating-derivatives-and-differentiability",
          title: "Estimating Derivatives Numerically and Recognizing Non-Differentiability",
          summary:
            "Approximate f'(a) from a table using the symmetric difference quotient, and identify the specific graphical features that break differentiability.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "The symmetric difference quotient, f'(a) ≈ [f(a+h) − f(a−h)] / (2h), estimates a derivative using points on both sides of a; it's generally more accurate than a one-sided difference quotient of the same step size because the curvature error on each side partially cancels rather than compounding.",
                "From a table of values, approximate f'(a) using the two table entries that straddle a most closely — the difference quotient between them is just an average rate of change over a small window, used as a stand-in for the instantaneous rate at a.",
                "Differentiability implies continuity, but not the other way around: a function can be perfectly continuous (no jumps, holes, or asymptotes) while still failing to have a well-defined tangent-line slope at a point.",
                "Four specific features break differentiability at a point: a corner (left- and right-hand slopes exist but disagree), a cusp (the slopes shoot off to +∞ on one side and −∞ on the other), a vertical tangent line (the slope is unbounded but the same infinite direction from both sides), or any discontinuity (a function can't have a tangent line where it isn't even continuous).",
                "On a graph, always estimate f'(a) by eyeballing the slope of the tangent line right at a — not the slope of a line connecting a to some other visible point, which would only give an average rate of change.",
              ],
            },
            {
              heading: "Worked Example",
              bullets: [
                "Problem: a table gives f(1.8)=3.24, f(1.9)=3.61, f(2.0)=4.00, f(2.1)=4.41, f(2.2)=4.84. Estimate f'(2) using the symmetric difference quotient with h = 0.1.",
                "Step 1 — identify the two points straddling a = 2 at distance h = 0.1: x = 1.9 and x = 2.1.",
                "Step 2 — apply the symmetric difference quotient: f'(2) ≈ [f(2.1) − f(1.9)] / (2 · 0.1).",
                "Step 3 — substitute the table values: [4.41 − 3.61] / 0.2 = 0.80 / 0.2.",
                "Step 4 — simplify: f'(2) ≈ 4. (This table is actually f(x) = x², whose exact derivative is 2x, giving f'(2) = 4 exactly — confirming the estimate is right on target.)",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "Prefer the symmetric difference quotient over a one-sided quotient whenever the table gives you points on both sides of a — it's a noticeably better estimate for the same step size h.",
                "To argue non-differentiability from a graph, name the specific feature (corner, cusp, vertical tangent, discontinuity) rather than just saying 'it doesn't look smooth' — graders want the precise reason.",
              ],
            },
          ],
          questions: [
            {
              prompt:
                "A table gives f(2.9)=8.41, f(3.0)=9.00, f(3.1)=9.61. Using the symmetric difference quotient, estimate f'(3).",
              choices: ["5.8", "6.0", "9.0", "3.0"],
              answerIndex: 1,
              explanation:
                "f'(3) ≈ [f(3.1) − f(2.9)]/(2·0.1) = (9.61 − 8.41)/0.2 = 1.20/0.2 = 6.0.",
            },
            {
              prompt:
                "Which feature explains why f(x) = |x| fails to be differentiable at x = 0, even though it's continuous there?",
              choices: [
                "A vertical asymptote",
                "A jump discontinuity",
                "A corner where the left- and right-hand slopes disagree",
                "A removable discontinuity",
              ],
              answerIndex: 2,
              explanation:
                "The left-hand slope of |x| at 0 is −1 and the right-hand slope is +1; since they disagree, there's a corner, not a smooth turning point, so no single tangent slope exists.",
            },
            {
              prompt:
                "The graph of g has a vertical tangent line at x = 2. What is true about g at x = 2?",
              choices: [
                "g is differentiable there with g'(2) = 0",
                "g is not differentiable there, even though g may be continuous",
                "g must be discontinuous there",
                "g must have a local extremum there",
              ],
              answerIndex: 1,
              explanation:
                "A vertical tangent means the slope is unbounded (the difference quotient blows up), so the derivative doesn't exist there — even though the function itself can still be continuous.",
            },
            {
              prompt: "If f is differentiable at x = 3, which of these must also be true?",
              choices: [
                "f has an inflection point at x = 3",
                "f is continuous at x = 3",
                "f'(3) = 0",
                "f is concave up at x = 3",
              ],
              answerIndex: 1,
              explanation:
                "Differentiability at a point always guarantees continuity at that point; it guarantees nothing about inflection points, critical points, or concavity.",
            },
          ],
        },
        {
          slug: "power-rule-and-basic-derivative-rules",
          title: "The Power Rule and Basic Derivative Rules",
          summary:
            "Differentiate polynomials and radical/rational expressions using the power rule together with the constant multiple and sum/difference rules.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "Power rule: d/dx[xⁿ] = n·x^(n−1), valid for any real exponent n, including negative and fractional exponents — you don't need a separate rule for radicals or rational powers of x.",
                "The derivative of a constant is 0, because a constant function's graph is a perfectly horizontal line — its slope is zero everywhere, with nothing to differentiate.",
                "Constant multiple rule: d/dx[c·f(x)] = c·f'(x) — scaling a function vertically by c scales every tangent slope by that same factor c.",
                "Sum/difference rule: derivatives distribute term by term across sums and differences, because the limit defining a derivative of a sum splits into a sum of limits (a direct consequence of the limit laws from Unit 1).",
                "Before differentiating, rewrite radicals and rational expressions as powers of x — √x becomes x^(1/2), 1/x³ becomes x^(−3) — so the power rule applies directly instead of guessing a new formula.",
              ],
            },
            {
              heading: "Worked Example",
              bullets: [
                "Problem: differentiate f(x) = 4x⁵ − 7/x² + 6√x − 9.",
                "Step 1 — rewrite every term as a power of x: 4x⁵ − 7x⁻² + 6x^(1/2) − 9.",
                "Step 2 — apply the power rule term by term: d/dx[4x⁵] = 20x⁴; d/dx[−7x⁻²] = −7·(−2)x⁻³ = 14x⁻³; d/dx[6x^(1/2)] = 6·(1/2)x^(−1/2) = 3x^(−1/2); d/dx[−9] = 0.",
                "Step 3 — rewrite each result back in standard notation: 14x⁻³ = 14/x³ and 3x^(−1/2) = 3/√x.",
                "Step 4 — combine: f'(x) = 20x⁴ + 14/x³ + 3/√x.",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "Always rewrite radicals and denominators as exponents before differentiating — applying the power rule directly to √x or 1/x² without rewriting is a common source of errors.",
                "Double-check the sign when the original exponent is negative — multiplying by that negative exponent and then subtracting 1 (making it even more negative) is where sign mistakes usually happen.",
              ],
            },
          ],
          questions: [
            {
              prompt: "What is d/dx[3x⁴ − 5x² + 7]?",
              choices: ["12x³ − 10x", "12x³ − 10x + 7", "3x³ − 5x", "12x⁴ − 10x²"],
              answerIndex: 0,
              explanation:
                "Apply the power rule term by term: d/dx[3x⁴] = 12x³, d/dx[−5x²] = −10x, d/dx[7] = 0.",
            },
            {
              prompt: "What is d/dx[6/x³]?",
              choices: ["18/x⁴", "6/x⁴", "−18/x⁴", "−2/x⁴"],
              answerIndex: 2,
              explanation:
                "Rewrite as 6x⁻³. Then d/dx[6x⁻³] = 6·(−3)x⁻⁴ = −18x⁻⁴ = −18/x⁴.",
            },
            {
              prompt: "What is d/dx[5√x]?",
              choices: ["10√x", "5/(2√x)", "5√x", "(5/2)√x"],
              answerIndex: 1,
              explanation:
                "Rewrite as 5x^(1/2). Then d/dx[5x^(1/2)] = 5·(1/2)x^(−1/2) = (5/2)x^(−1/2) = 5/(2√x).",
            },
            {
              prompt: "What is d/dx[10] (a constant function)?",
              choices: ["10", "1", "x", "0"],
              answerIndex: 3,
              explanation:
                "A constant function has a graph with zero slope everywhere, so its derivative is 0 regardless of the constant's value.",
            },
          ],
        },
        {
          slug: "derivatives-of-trig-exponential-and-log-functions",
          title: "Derivatives of Sine, Cosine, Exponential, and Logarithmic Functions",
          summary:
            "Differentiate sin x, cos x, eˣ, general exponentials, and ln x, and combine them with the power and sum rules.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "d/dx[sin x] = cos x and d/dx[cos x] = −sin x — both follow from the limit definition combined with the special trig limits sin(h)/h → 1 and (1 − cos h)/h → 0 from Unit 1. Notice the 'co-' function (cosine) is the one that picks up the negative sign.",
                "d/dx[eˣ] = eˣ: the number e is defined precisely so that this holds. eˣ is the unique function (up to a constant multiple) that equals its own derivative, which is exactly why it's the natural model for quantities whose growth rate is proportional to their current size.",
                "d/dx[aˣ] = aˣ·ln(a) for any base a > 0: rewriting aˣ as e^(x ln a) and differentiating shows the extra factor ln(a) is a 'correction' that converts base-a growth into the base-e growth rate eˣ already knows how to handle.",
                "d/dx[ln x] = 1/x for x > 0 — as the inverse of eˣ, ln x's derivative shrinks as x grows, which matches the graph: ln x keeps increasing forever but more and more slowly.",
                "These four building blocks — sin, cos, eˣ, ln x — combine with the power rule and sum rule to differentiate a huge range of functions immediately, even before the product, quotient, and chain rules are introduced.",
              ],
            },
            {
              heading: "Worked Example",
              bullets: [
                "Problem: differentiate g(x) = 3 sin x − 2eˣ + ln x − x².",
                "Step 1 — differentiate each term with its own rule: d/dx[3 sin x] = 3 cos x; d/dx[−2eˣ] = −2eˣ; d/dx[ln x] = 1/x; d/dx[−x²] = −2x.",
                "Step 2 — combine using the sum/difference rule: g'(x) = 3 cos x − 2eˣ + 1/x − 2x.",
                "Step 3 — as a check, evaluate at x = 1: g'(1) = 3cos(1) − 2e + 1/1 − 2(1) = 3cos(1) − 2e − 1 — confirming each term transformed with the correct rule and sign.",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "Memorize sin ↔ cos as a pair with a sign pattern: the derivative of sin is cos (no sign flip), the derivative of cos is −sin (sign flips) — mixing these up is the most common trig-derivative mistake.",
                "Don't confuse d/dx[eˣ] = eˣ (no extra factor, since ln e = 1) with d/dx[aˣ] = aˣ·ln a for a general base — the ln(a) factor is easy to forget when a ≠ e.",
              ],
            },
          ],
          questions: [
            {
              prompt: "What is d/dx[5cos x + 3eˣ]?",
              choices: [
                "5 sin x + 3eˣ",
                "−5 sin x + 3eˣ",
                "−5 sin x − 3eˣ",
                "5 sin x − 3eˣ",
              ],
              answerIndex: 1,
              explanation:
                "d/dx[5cos x] = −5 sin x, and d/dx[3eˣ] = 3eˣ, so the sum's derivative is −5 sin x + 3eˣ.",
            },
            {
              prompt: "What is d/dx[ln x] at x = 4?",
              choices: ["4", "ln 4", "0", "1/4"],
              answerIndex: 3,
              explanation:
                "d/dx[ln x] = 1/x. At x = 4, this is 1/4.",
            },
            {
              prompt: "What is d/dx[2ˣ] at x = 0?",
              choices: ["1", "2", "ln 2", "0"],
              answerIndex: 2,
              explanation:
                "d/dx[2ˣ] = 2ˣ·ln 2. At x = 0, 2⁰ = 1, so the derivative is 1·ln 2 = ln 2.",
            },
            {
              prompt: "What is d/dx[sin x − ln x]?",
              choices: [
                "cos x − 1/x",
                "−cos x − 1/x",
                "cos x + 1/x",
                "cos x − x",
              ],
              answerIndex: 0,
              explanation:
                "d/dx[sin x] = cos x and d/dx[−ln x] = −1/x, so the derivative is cos x − 1/x.",
            },
          ],
        },
        {
          slug: "product-and-quotient-rules",
          title: "The Product and Quotient Rules",
          summary:
            "Differentiate products and quotients of functions, including combinations with trigonometric, exponential, and logarithmic pieces.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "Product rule: d/dx[u·v] = u′v + uv′ — never just multiply the two derivatives together. This makes sense because as x changes slightly, both u and v change slightly, and the total change in the product uv comes from u's change (times v) plus v's change (times u), added together.",
                "Quotient rule: d/dx[u/v] = (u′v − uv′)/v², and the order in the numerator matters (u′v minus uv′, not the reverse) — a sign error here is one of the most common mistakes on the AP exam.",
                "You can often avoid the quotient rule by rewriting u/v as u·v⁻¹ and using the product rule with the chain rule on v⁻¹ — either method must give the same final answer, so use whichever you find less error-prone.",
                "For three or more factors, apply the product rule pairwise: differentiate one factor at a time while holding the others constant, then add all the results together.",
                "Combining rules is common on the AP exam — expect problems like d/dx[x²eˣ] (product) or d/dx[sin x / x²] (quotient) rather than the rules tested in isolation.",
              ],
            },
            {
              heading: "Worked Example",
              bullets: [
                "Problem: differentiate h(x) = x² ln x.",
                "Step 1 — identify the two factors: u = x², v = ln x.",
                "Step 2 — differentiate each: u′ = 2x, v′ = 1/x.",
                "Step 3 — apply the product rule: h′(x) = u′v + uv′ = 2x·ln x + x²·(1/x).",
                "Step 4 — simplify the second term: x²·(1/x) = x, so h′(x) = 2x ln x + x.",
                "Step 5 — factor for a cleaner form: h′(x) = x(2 ln x + 1). As a check, at x = 1: h′(1) = 1(2·0 + 1) = 1, since ln 1 = 0.",
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
        {
          slug: "derivatives-of-tan-cot-sec-csc",
          title: "Derivatives of Tangent, Cotangent, Secant, and Cosecant",
          summary:
            "Derive the remaining trigonometric derivatives from the quotient rule and the sin/cos derivatives, and apply them directly.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "All four remaining trig derivatives can be derived — not just memorized — from the ratio definitions tan x = sin x/cos x, cot x = cos x/sin x, sec x = 1/cos x, and csc x = 1/sin x, using the quotient rule together with the sin/cos derivatives you already know.",
                "Results: d/dx[tan x] = sec²x, d/dx[cot x] = −csc²x, d/dx[sec x] = sec x·tan x, d/dx[csc x] = −csc x·cot x.",
                "Notice the pattern: every 'co-' function (cotangent, cosecant) picks up a negative sign in its derivative, exactly mirroring the sin/cos pattern from before.",
                "These derivatives combine with the chain rule constantly in later units — e.g., d/dx[tan(3x)] will require multiplying by the chain-rule factor 3 once composite functions are introduced.",
                "Domain matters: tan x and sec x are undefined wherever cos x = 0, and cot x and csc x are undefined wherever sin x = 0 — their derivatives are automatically undefined at those same excluded points.",
              ],
            },
            {
              heading: "Worked Example",
              bullets: [
                "Problem: derive d/dx[tan x] starting from tan x = sin x / cos x.",
                "Step 1 — set u = sin x, v = cos x, so tan x = u/v.",
                "Step 2 — differentiate each: u′ = cos x, v′ = −sin x.",
                "Step 3 — apply the quotient rule: (u′v − uv′)/v² = [cos x · cos x − sin x · (−sin x)] / cos²x = (cos²x + sin²x) / cos²x.",
                "Step 4 — apply the Pythagorean identity cos²x + sin²x = 1: the expression simplifies to 1/cos²x.",
                "Step 5 — rewrite using the reciprocal identity 1/cos x = sec x: 1/cos²x = sec²x. So d/dx[tan x] = sec²x — now derived, not just memorized.",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "Group the six trig derivatives by which function is the 'co-' version: (sin, cos), (tan, sec²), (sec, sec·tan) on the plain side become (cos, −sin), (cot, −csc²), (csc, −csc·cot) with a negative sign.",
                "If you blank on a formula during the exam, you can always re-derive it from sin/cos using the quotient rule, exactly like the Worked Example.",
              ],
            },
          ],
          questions: [
            {
              prompt: "What is d/dx[cot x] at x = π/4?",
              choices: ["2", "−2", "1", "−1"],
              answerIndex: 1,
              explanation:
                "d/dx[cot x] = −csc²x. At x = π/4, csc(π/4) = √2, so csc²(π/4) = 2, giving −2.",
            },
            {
              prompt: "What is d/dx[sec x] at x = 0?",
              choices: ["undefined", "1", "sec(0)", "0"],
              answerIndex: 3,
              explanation:
                "d/dx[sec x] = sec x · tan x. At x = 0, sec(0) = 1 and tan(0) = 0, so the product is 1·0 = 0.",
            },
            {
              prompt: "Which expression equals d/dx[csc x]?",
              choices: ["csc x cot x", "−csc x cot x", "−csc²x", "csc²x"],
              answerIndex: 1,
              explanation:
                "By the quotient rule applied to csc x = 1/sin x, d/dx[csc x] = −csc x cot x.",
            },
            {
              prompt: "What is d/dx[3 tan x − 2 sec x]?",
              choices: [
                "3 sec²x − 2 sec x tan x",
                "3 sec²x + 2 sec x tan x",
                "3 sec x tan x − 2 sec²x",
                "−3 sec²x − 2 sec x tan x",
              ],
              answerIndex: 0,
              explanation:
                "d/dx[3 tan x] = 3 sec²x and d/dx[−2 sec x] = −2 sec x tan x, so the derivative is 3 sec²x − 2 sec x tan x.",
            },
          ],
        },
      ],
    },
    {
      slug: "differentiation-composite-implicit-inverse",
      title: "Differentiation: Composite, Implicit, and Inverse Functions",
      summary:
        "Extend differentiation to composite, implicitly defined, inverse, and logarithmic functions, and build up to higher-order derivatives.",
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
                "Chain rule: d/dx[f(g(x))] = f′(g(x))·g′(x) — differentiate the outside function first (leaving the inside alone), then multiply by the derivative of the inside. This works because a tiny change in x causes a tiny change in the inner function g, which in turn causes a change in the outer function f — the two rates of change multiply together.",
                "Recognize composite functions by an 'inside' expression: (inner)ⁿ, e^(inner), sin(inner), ln(inner) are all signals to apply the chain rule.",
                "For nested compositions (a function inside a function inside a function), apply the chain rule repeatedly, working from the outermost layer in, multiplying by one more inner derivative at each layer.",
                "The chain rule combines with the product and quotient rules constantly — e.g. d/dx[x²·sin(3x)] needs both the product rule and the chain rule together.",
                "General power rule: d/dx[(g(x))ⁿ] = n(g(x))^(n−1)·g′(x), a direct application of the chain rule you'll use constantly — it's the chain rule with f(u) = uⁿ as the outer function.",
              ],
            },
            {
              heading: "Worked Example",
              bullets: [
                "Problem: differentiate y = √(3x² + 4x).",
                "Step 1 — rewrite the square root as a power: y = (3x² + 4x)^(1/2).",
                "Step 2 — identify the outer function (something)^(1/2) and the inner function u = 3x² + 4x, with u′ = 6x + 4.",
                "Step 3 — apply the chain rule: dy/dx = (1/2)(3x² + 4x)^(−1/2) · (6x + 4).",
                "Step 4 — simplify: dy/dx = (6x + 4) / [2√(3x² + 4x)] = (3x + 2) / √(3x² + 4x).",
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
                "When an equation mixes x and y (like x² + y² = 25), differentiate both sides with respect to x, treating y as an unknown function of x — this is valid because the equation holds along the whole curve, so differentiating both sides preserves that equality.",
                "Every time you differentiate a term containing y, the chain rule requires multiplying by dy/dx — e.g. d/dx[y²] = 2y·dy/dx, because y is secretly y(x), so this is really the chain rule with outer function (·)² and inner function y.",
                "Terms with both x and y (like xy) need the product rule as well as the chain rule: d/dx[xy] = x·dy/dx + y·1 = x(dy/dx) + y.",
                "After differentiating, collect all dy/dx terms on one side, factor dy/dx out of them, and divide to solve for it explicitly — this mirrors solving any linear equation for one variable.",
                "Implicit differentiation is essential for curves that aren't functions of x (like circles or ellipses), and for finding tangent-line slopes on such curves at a specific point, since 'y = ...' can't always be isolated cleanly.",
              ],
            },
            {
              heading: "Worked Example",
              bullets: [
                "Problem: given xy² + x² = 6, find dy/dx at the point (2, 1).",
                "Step 1 — differentiate both sides with respect to x. For xy², use the product rule: d/dx[xy²] = (1)y² + x·(2y·dy/dx) = y² + 2xy(dy/dx). For x², use the power rule: d/dx[x²] = 2x. The right side, 6, is a constant, so its derivative is 0.",
                "Step 2 — write the full differentiated equation: y² + 2xy(dy/dx) + 2x = 0.",
                "Step 3 — isolate the dy/dx term: 2xy(dy/dx) = −y² − 2x.",
                "Step 4 — solve for dy/dx: dy/dx = −(y² + 2x) / (2xy).",
                "Step 5 — substitute the point (2, 1): dy/dx = −(1 + 4) / (2·2·1) = −5/4.",
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
          slug: "derivatives-of-inverse-and-inverse-trig-functions",
          title: "Derivatives of Inverse Functions and Inverse Trigonometric Functions",
          summary:
            "Differentiate a general inverse function using the reciprocal relationship, and derive the inverse trig derivative formulas by implicit differentiation.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "If g is the inverse of f, then g′(x) = 1/f′(g(x)) — because f(g(x)) = x for every x, differentiating both sides with the chain rule gives f′(g(x))·g′(x) = 1, and solving for g′(x) gives the reciprocal relationship.",
                "To find (f⁻¹)′(a) numerically, first find the input b such that f(b) = a (i.e., b = f⁻¹(a)), then compute 1/f′(b) — you need that corresponding point plugged into f′, not a itself.",
                "Inverse trig derivatives: d/dx[arcsin x] = 1/√(1−x²), d/dx[arccos x] = −1/√(1−x²), d/dx[arctan x] = 1/(1+x²), d/dx[arccot x] = −1/(1+x²), d/dx[arcsec x] = 1/(|x|√(x²−1)), d/dx[arccsc x] = −1/(|x|√(x²−1)).",
                "Each inverse trig formula is derived the same way: write y = arcsin x as x = sin y, differentiate both sides implicitly, and solve for dy/dx, converting back to x using a Pythagorean identity and the restricted range of y.",
                "With the chain rule, these become d/dx[arcsin(u)] = u′/√(1−u²), and similarly for the others — treat arcsin, arctan, etc. as outer functions just like sin or ln.",
              ],
            },
            {
              heading: "Worked Example",
              bullets: [
                "Problem: derive the formula for d/dx[arcsin x].",
                "Step 1 — let y = arcsin x, which means x = sin y, with y restricted to [−π/2, π/2].",
                "Step 2 — differentiate both sides of x = sin y with respect to x, treating y as a function of x: 1 = cos(y)·(dy/dx).",
                "Step 3 — solve for dy/dx: dy/dx = 1/cos(y).",
                "Step 4 — express cos(y) in terms of x: since sin(y) = x and y ∈ [−π/2, π/2] (where cosine is non-negative), cos(y) = √(1 − sin²y) = √(1 − x²).",
                "Step 5 — substitute back: dy/dx = 1/√(1 − x²), matching the memorized formula — now derived from first principles.",
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
            {
              prompt: "If f(2) = 7 and f′(2) = 4, and g is the inverse of f, what is g′(7)?",
              choices: ["4", "1/4", "7", "2"],
              answerIndex: 1,
              explanation:
                "Since g = f⁻¹, g′(7) = 1/f′(g(7)). Because f(2) = 7, g(7) = 2, so g′(7) = 1/f′(2) = 1/4.",
            },
          ],
        },
        {
          slug: "logarithmic-differentiation",
          title: "Logarithmic Differentiation",
          summary:
            "Differentiate functions with a variable in the exponent, or with many multiplied factors, by taking the logarithm of both sides first.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "Logarithmic differentiation means taking ln of both sides of y = f(x) before differentiating — it's especially powerful when f(x) has a variable in the exponent (like xˣ), since neither the power rule nor the exponential rule alone applies to a variable-to-a-variable-power expression.",
                "Since d/dx[ln x] = 1/x, differentiating ln y implicitly (treating y as a function of x) gives (1/y)(dy/dx) = d/dx[ln f(x)]; multiplying both sides by y then gives dy/dx = y · d/dx[ln f(x)].",
                "Using log properties — ln(ab) = ln a + ln b, ln(a/b) = ln a − ln b, ln(aⁿ) = n ln a — before differentiating turns products, quotients, and powers into sums, differences, and constant multiples, which are far easier to differentiate.",
                "Logarithmic differentiation is really just implicit differentiation applied after taking a logarithm of both sides — it's the exact same 'differentiate, then solve for dy/dx' process from the implicit differentiation lesson, just with an extra algebra step up front.",
                "After solving for dy/dx in terms of y, always substitute the original expression for y back in, so the final answer is written purely in terms of x.",
              ],
            },
            {
              heading: "Worked Example",
              bullets: [
                "Problem: find dy/dx for y = xˣ.",
                "Step 1 — take the natural log of both sides: ln y = ln(xˣ) = x ln x, using the log power rule.",
                "Step 2 — differentiate both sides with respect to x. Left side (chain rule, since y depends on x): d/dx[ln y] = (1/y)(dy/dx). Right side (product rule): d/dx[x ln x] = (1)(ln x) + x·(1/x) = ln x + 1.",
                "Step 3 — write the differentiated equation: (1/y)(dy/dx) = ln x + 1.",
                "Step 4 — solve for dy/dx by multiplying both sides by y: dy/dx = y(ln x + 1).",
                "Step 5 — substitute the original y = xˣ back in: dy/dx = xˣ(ln x + 1).",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "Reach for logarithmic differentiation whenever the variable appears in an exponent, or when a function is a large product/quotient of several factors — expanding with log properties first usually beats grinding through the product or quotient rule directly.",
                "The final answer must be written in terms of x alone — always substitute the original expression for y back in at the very end.",
              ],
            },
          ],
          questions: [
            {
              prompt: "Using logarithmic differentiation, what is dy/dx for y = xˣ?",
              choices: ["xˣ(ln x + 1)", "xˣ · ln x", "x · xˣ⁻¹", "xˣ/x"],
              answerIndex: 0,
              explanation:
                "Taking ln of both sides gives ln y = x ln x; differentiating and solving gives dy/dx = y(ln x + 1) = xˣ(ln x + 1).",
            },
            {
              prompt:
                "What is the correct first step in logarithmic differentiation for y = (x² + 1)^(3x)?",
              choices: [
                "Apply the power rule directly",
                "Take the natural log of both sides: ln y = 3x·ln(x² + 1)",
                "Take the derivative of the exponent only",
                "Rewrite as e^(x² ln(3x))",
              ],
              answerIndex: 1,
              explanation:
                "Logarithmic differentiation always starts by taking ln of both sides and using the log power rule to bring the exponent down as a multiplier.",
            },
            {
              prompt:
                "For y = xˣ, after taking ln of both sides and differentiating implicitly, what is (1/y)(dy/dx)?",
              choices: ["1/x", "x ln x", "ln x + 1", "ln x − 1"],
              answerIndex: 2,
              explanation:
                "Differentiating ln y = x ln x with the product rule on the right side gives (1/y)(dy/dx) = ln x + x·(1/x) = ln x + 1.",
            },
            {
              prompt: "Why is logarithmic differentiation especially useful for y = xˣ?",
              choices: [
                "Because xˣ is undefined for all x",
                "Because the variable appears in both the base and the exponent, so no ordinary power or exponential rule directly applies",
                "Because ln x is undefined at x = 0",
                "Because xˣ is always decreasing",
              ],
              answerIndex: 1,
              explanation:
                "The power rule needs a constant exponent, and the exponential rule needs a constant base — since xˣ has a variable in both roles, neither applies directly, so taking logs first is the standard workaround.",
            },
          ],
        },
        {
          slug: "higher-order-derivatives",
          title: "Higher-Order Derivatives",
          summary:
            "Differentiate a function more than once, use proper higher-order notation, and connect second derivatives to motion and concavity.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "A higher-order derivative comes from differentiating a derivative again: f″(x) is the derivative of f′(x), f‴(x) is the derivative of f″(x), and so on — each one measures the rate of change of the previous derivative.",
                "Notation for higher-order derivatives includes f″(x), y″, d²y/dx², and f⁽ⁿ⁾(x) for the nth derivative — all describing the same repeated-differentiation process.",
                "Physically, if s(t) is position, then s′(t) = v(t) is velocity and s″(t) = v′(t) = a(t) is acceleration — each derivative peels off one more layer of 'rate of change of the rate of change,' a pattern developed fully in the motion lessons of Unit 4.",
                "The second derivative previews concavity (developed fully in Unit 5): f″(x) > 0 means the graph curves upward like a cup (concave up), and f″(x) < 0 means it curves downward like a frown (concave down).",
                "For implicit relations, finding y″ requires differentiating the expression for y′ a second time; since that expression usually still contains y and y′, you must substitute the already-found expression for y′ back in before simplifying.",
              ],
            },
            {
              heading: "Worked Example",
              bullets: [
                "Problem: find f″(x) for f(x) = x⁴ − 6x² + 2x, then evaluate f″(1) and interpret it.",
                "Step 1 — differentiate once to get f′(x): f′(x) = 4x³ − 12x + 2.",
                "Step 2 — differentiate f′(x) again to get f″(x): f″(x) = 12x² − 12.",
                "Step 3 — evaluate at x = 1: f″(1) = 12(1)² − 12 = 12 − 12 = 0.",
                "Step 4 — interpret: f″(1) = 0 means x = 1 is a candidate for an inflection point (where concavity might switch) — confirming it requires checking that f″ actually changes sign around x = 1, a full test developed in Unit 5.",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "For patterned functions like sin x, cos x, or eᵏˣ, look for a repeating cycle in the derivatives instead of differentiating one step at a time — e.g. the derivatives of sin x cycle every four steps: sin x → cos x → −sin x → −cos x → sin x.",
                "When a problem gives an implicit relation and asks for y″, always substitute your already-solved expression for y′ into the differentiated equation before doing any more algebra — trying to simplify with y′ left as an unknown leads to a mess.",
              ],
            },
          ],
          questions: [
            {
              prompt: "If f(x) = x⁵ − 3x³, what is f″(x)?",
              choices: ["20x³ − 18x", "20x⁴ − 18x²", "5x⁴ − 9x²", "20x³ − 6x"],
              answerIndex: 0,
              explanation:
                "f′(x) = 5x⁴ − 9x². Differentiating again: f″(x) = 20x³ − 18x.",
            },
            {
              prompt:
                "A particle's position is s(t) = t³ − 6t² + 9t. What is its acceleration at t = 3?",
              choices: ["3", "9", "−6", "6"],
              answerIndex: 3,
              explanation:
                "v(t) = s′(t) = 3t² − 12t + 9, and a(t) = v′(t) = 6t − 12. At t = 3: a(3) = 18 − 12 = 6.",
            },
            {
              prompt: "What is the 4th derivative of f(x) = sin x?",
              choices: ["cos x", "−sin x", "sin x", "−cos x"],
              answerIndex: 2,
              explanation:
                "The derivatives of sin x cycle every four steps: sin x → cos x → −sin x → −cos x → sin x. The 4th derivative returns to sin x.",
            },
            {
              prompt: "If y = e^(2x), what is y″?",
              choices: ["2e^(2x)", "e^(2x)", "4e^(2x)", "4x e^(2x)"],
              answerIndex: 2,
              explanation:
                "y′ = 2e^(2x) by the chain rule. Differentiating again: y″ = 2·2e^(2x) = 4e^(2x).",
            },
          ],
        },
      ],
    },
    {
      slug: "contextual-applications-of-differentiation",
      title: "Contextual Applications of Differentiation",
      summary:
        "Apply derivatives to interpret real-world rates, motion, related rates, linear approximation, and indeterminate limit forms.",
      lessons: [
        {
          slug: "interpreting-the-derivative-in-context",
          title: "Interpreting the Derivative in Applied Contexts",
          summary:
            "Translate a derivative value into a correctly worded, correctly unitized sentence about a real-world rate of change.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "The derivative f'(a) is a rate of change with units equal to (units of f) per (units of x) — correctly stating those units, and being explicit about 'with respect to what,' is essential for full credit on free-response questions.",
                "A complete interpretation sentence needs four pieces: what quantity is changing, at what rate, at what specific input value, and with what units — e.g. 'At time t = 3 hours, the amount of water in the tank is increasing at a rate of 5 gallons per hour.'",
                "The sign of the derivative tells you the direction of change: positive means the quantity is increasing, negative means it's decreasing, and zero means it is momentarily not changing (a turning point in the quantity, not necessarily in the graph of the derivative itself).",
                "The derivative gives an instantaneous rate at one exact input — this is a fundamentally different quantity from the average rate of change over an interval (a secant-line slope), so don't answer a 'derivative' question with an average, or vice versa.",
                "A derivative's numeric value alone, with no units or context attached, earns little to no credit on a free-response question — always tie the number back to the real-world scenario in a full sentence.",
              ],
            },
            {
              heading: "Worked Example",
              bullets: [
                "Problem: C(t) gives the number of ounces of coffee in a pot t minutes after brewing starts. Given C(4) = 30 and C'(4) = −2, write a sentence interpreting C'(4) in context.",
                "Step 1 — identify the quantity: C(t) is the amount of coffee (in ounces) in the pot at time t (minutes).",
                "Step 2 — identify what C'(4) represents: the instantaneous rate of change of the amount of coffee with respect to time, evaluated at t = 4 minutes.",
                "Step 3 — read the sign: C'(4) = −2 is negative, so the amount of coffee is decreasing at that instant.",
                "Step 4 — assemble a complete sentence with units: 'At t = 4 minutes, the amount of coffee in the pot is decreasing at a rate of 2 ounces per minute.'",
                "Step 5 — note the trap: simply writing '−2' with no units or context, even though numerically correct, would not earn full credit on a free-response question.",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "Template your interpretation sentences: 'At [input value] [units], [quantity] is [increasing/decreasing] at a rate of [|value|] [units of quantity] per [units of input].'",
                "Never drop the units, and never forget to state increasing vs. decreasing based on the sign of the derivative.",
              ],
            },
          ],
          questions: [
            {
              prompt:
                "If P(t) is the number of people in a store t hours after opening, with P(2) = 150 and P'(2) = −8, which sentence correctly interprets P'(2)?",
              choices: [
                "At t = 2 hours, there are 150 people in the store.",
                "At t = 2 hours, the number of people in the store is decreasing at a rate of 8 people per hour.",
                "Over the first 2 hours, the store lost 8 people.",
                "The store will have 142 people at t = 3 hours.",
              ],
              answerIndex: 1,
              explanation:
                "P'(2) = −8 is an instantaneous rate at t = 2: the number of people is decreasing at 8 people per hour at that exact moment, not an average or a future prediction.",
            },
            {
              prompt:
                "If V(t) gives the volume of water in a tank in liters, with t in minutes, what are the units of V'(t)?",
              choices: ["Liters", "Minutes", "Liters per minute", "Minutes per liter"],
              answerIndex: 2,
              explanation:
                "A derivative's units are always (units of the output) per (units of the input) — here, liters per minute.",
            },
            {
              prompt:
                "A problem states the temperature T (in °F) is decreasing at a rate of 3°F per hour when t = 5 hours. Which equation matches this statement?",
              choices: ["T'(5) = −3", "T(5) = −3", "T'(5) = 3", "T(5) = 3"],
              answerIndex: 0,
              explanation:
                "'Decreasing at a rate of 3°F per hour' describes a negative derivative value, so T'(5) = −3.",
            },
            {
              prompt:
                "A table gives the volume of a balloon at several times. Which computation gives the average rate of change of volume from t = 2 to t = 5, as opposed to the instantaneous rate at a single time?",
              choices: [
                "V'(2)",
                "[V(5) − V(2)] / (5 − 2)",
                "V(5) − V(2)",
                "V'(5)",
              ],
              answerIndex: 1,
              explanation:
                "An average rate of change over an interval is always [change in output]/[change in input] — a slope of a secant line, not a derivative at a single point.",
            },
          ],
        },
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
                "Speed is |v(t)|; the object is speeding up when velocity and acceleration have the same sign (both pushing the motion the same direction), and slowing down when they have opposite signs (acceleration opposes the current motion).",
                "Displacement over [a,b] is s(b) − s(a); total distance traveled requires splitting the interval at every point where v(t) = 0 and summing the absolute value of the displacement on each piece.",
                "The object changes direction exactly when v(t) changes sign (not just when v(t) = 0 — always confirm it's a genuine sign change, since v could touch zero and continue in the same direction, as with v(t) = t²).",
              ],
            },
            {
              heading: "Worked Example",
              bullets: [
                "Problem: a particle moves with position s(t) = t³ − 9t² + 24t for t ≥ 0. Determine when it moves right vs. left, and describe its motion at t = 1.",
                "Step 1 — find velocity: v(t) = s′(t) = 3t² − 18t + 24 = 3(t² − 6t + 8) = 3(t − 2)(t − 4).",
                "Step 2 — find where v(t) = 0: t = 2 and t = 4, splitting the timeline into three pieces: (0,2), (2,4), (4,∞).",
                "Step 3 — test a value in each piece: at t=0, v = 3(−2)(−4) = 24 > 0 (moving right); at t=3, v = 3(1)(−1) = −3 < 0 (moving left); at t=5, v = 3(3)(1) = 9 > 0 (moving right).",
                "Step 4 — find acceleration: a(t) = v′(t) = 6t − 18. At t = 1: a(1) = 6 − 18 = −12.",
                "Step 5 — describe t = 1: v(1) = 3(1−2)(1−4) = 3(−1)(−3) = 9 > 0, while a(1) = −12 < 0. Opposite signs mean the particle is slowing down at t = 1, even though it's moving right.",
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
          slug: "rates-of-change-in-applied-contexts",
          title: "Rates of Change in Applied Contexts Other Than Motion",
          summary:
            "Apply differentiation to real-world rate problems beyond motion, such as population, cost, and temperature, using correct interpretation.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "Beyond position and velocity, any quantity Q(t) that changes has a derivative Q'(t) representing its instantaneous rate of change — exactly the same differentiation rules from earlier units apply directly, just with different variable names and real-world units attached.",
                "Common applied contexts: population P(t) (people per year), cost C(x) (dollars per unit produced), temperature T(t) (degrees per hour), amount of a substance A(t) (grams per minute), and revenue or profit R(x) (dollars per item).",
                "'Marginal' is calculus vocabulary in economics disguise: marginal cost at production level x is C'(x), the approximate extra cost of producing one more unit beyond x.",
                "To solve these problems: identify the function and its independent variable from the words, differentiate using the rules you already know, evaluate at the specified input, and interpret the result with correct units and sign.",
                "Second derivatives carry meaning here too: if P'(t) > 0 and P''(t) > 0, a population isn't just growing — it's growing at an increasing rate ('growth is accelerating'); if P'(t) > 0 but P''(t) < 0, growth is still happening but slowing down.",
              ],
            },
            {
              heading: "Worked Example",
              bullets: [
                "Problem: a company's cost to produce x items is C(x) = 0.02x² + 5x + 200 dollars. Find the marginal cost at x = 100 items and interpret it.",
                "Step 1 — recognize that 'marginal cost' means C'(x).",
                "Step 2 — differentiate: C'(x) = 0.04x + 5.",
                "Step 3 — evaluate at x = 100: C'(100) = 0.04(100) + 5 = 4 + 5 = 9.",
                "Step 4 — interpret with units and context: 'When 100 items have already been produced, the cost is increasing at a rate of about $9 per additional item — that is, producing the 101st item costs approximately $9 more.'",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "Translate the word problem's key noun into a function and its units before differentiating — the word 'rate' always signals 'take a derivative.'",
                "Watch for compounded rate language like 'growing faster' or 'leveling off,' which describe the sign of the second derivative, not just the first.",
              ],
            },
          ],
          questions: [
            {
              prompt:
                "A population is modeled by P(t) = 2t² + 5t + 100 (in thousands), t in years. What is P'(3), and what does it represent?",
              choices: [
                "11 thousand people, the population at t = 3",
                "17 thousand people per year, the rate the population is growing at t = 3",
                "17, with no meaningful units",
                "12 thousand people per year",
              ],
              answerIndex: 1,
              explanation:
                "P'(t) = 4t + 5, so P'(3) = 12 + 5 = 17. Since P is in thousands of people and t in years, P'(3) = 17 thousand people per year, the growth rate at t = 3.",
            },
            {
              prompt:
                "A company's cost to produce x items is C(x) = 0.01x² + 3x + 500 dollars. What is the marginal cost at x = 50?",
              choices: ["$3", "$25", "$4", "$500"],
              answerIndex: 2,
              explanation:
                "C'(x) = 0.02x + 3. At x = 50: C'(50) = 0.02(50) + 3 = 1 + 3 = 4, so the marginal cost is $4 per item.",
            },
            {
              prompt:
                "A population P(t) satisfies P'(t) > 0 and P''(t) < 0. Which best describes the population?",
              choices: [
                "Decreasing, and decreasing faster over time",
                "Increasing, and increasing faster over time",
                "Increasing, but the growth rate is slowing down",
                "Constant",
              ],
              answerIndex: 2,
              explanation:
                "P'(t) > 0 means the population is increasing. P''(t) < 0 means that rate of increase is itself decreasing, so growth is happening but decelerating.",
            },
            {
              prompt:
                "Temperature is modeled by T(h) = −2h² + 16h + 60 (°F), h hours after 6 a.m. What is T'(2), and what does it mean?",
              choices: [
                "84°F, the temperature at h = 2",
                "−8°F per hour, the temperature is decreasing at h = 2",
                "12°F per hour",
                "8°F per hour, the temperature is increasing at that rate at h = 2",
              ],
              answerIndex: 3,
              explanation:
                "T'(h) = −4h + 16. At h = 2: T'(2) = −8 + 16 = 8, a positive rate, so the temperature is increasing at 8°F per hour at that moment.",
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
                "Differentiate the entire equation with respect to time t, applying the chain rule to every variable — each derivative comes with a 'rate' term like dr/dt or dh/dt, since every quantity is secretly a function of t.",
                "Substitute known numeric values only after differentiating — plugging in numbers too early treats a changing quantity as a constant and kills its derivative term before the chain rule can even act on it.",
                "Common setups: circle (A = πr²), sphere (V = 4/3 πr³), cone (V = 1/3 πr²h), right-triangle legs via the Pythagorean theorem, and similar-triangle shadow/ladder problems.",
                "Pay attention to sign — a rate is negative if the quantity is decreasing (draining, shrinking, approaching) and positive if it's increasing.",
              ],
            },
            {
              heading: "Worked Example",
              bullets: [
                "Problem: air is pumped into a spherical balloon so that its volume increases at a rate of 100 cm³/s. How fast is the radius increasing when the radius is 5 cm? (V = 4/3 πr³)",
                "Step 1 — differentiate the volume formula with respect to time: dV/dt = 4πr²·(dr/dt), applying the chain rule since r is a function of t.",
                "Step 2 — substitute the known values dV/dt = 100 and r = 5: 100 = 4π(5)²·(dr/dt) = 100π·(dr/dt).",
                "Step 3 — solve for dr/dt: dr/dt = 100/(100π) = 1/π cm/s.",
                "Step 4 — sanity check the units: cm³/s divided by cm² gives cm/s, consistent with a rate of change of a radius.",
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
              prompt: "How fast is the radius of a sphere increasing when r = 5 cm, if dV/dt = 100 cm³/s?",
              choices: ["1/π cm/s", "π cm/s", "4/π cm/s", "20/π cm/s"],
              answerIndex: 0,
              explanation:
                "dV/dt = 4πr²(dr/dt), so 100 = 4π(25)(dr/dt) = 100π(dr/dt), giving dr/dt = 1/π cm/s.",
            },
          ],
        },
        {
          slug: "linear-approximation-and-linearization",
          title: "Local Linearity and Linear Approximation",
          summary:
            "Use a tangent line to estimate function values near a point, and know when that estimate over- or under-shoots the true value.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "Local linearization: near x = a, f(x) ≈ f(a) + f′(a)(x − a) — this is exactly the tangent line's equation, used as a stand-in for f(x) itself because, zoomed in close enough, a differentiable curve looks almost indistinguishable from its own tangent line ('local linearity').",
                "The differential dy = f′(a)·dx approximates the actual change in y, Δy = f(a + Δx) − f(a), for a small change dx = Δx — linearization and differentials are two notations for the same underlying idea.",
                "Because the tangent line lies above a concave-down graph and below a concave-up graph, linearization overestimates f for concave-down functions and underestimates f for concave-up functions near a.",
                "Linear approximation is most accurate very close to a and grows progressively less accurate farther away, because the tangent line only matches f's value and slope at a — it says nothing about f's curvature.",
                "AP problems often give only f(a) and f′(a) (sometimes from a table), not a formula for f — you don't need to know f's formula to linearize, only its value and derivative at the point of tangency.",
              ],
            },
            {
              heading: "Worked Example",
              bullets: [
                "Problem: given f(9) = 3 and f′(9) = 1/6 for f(x) = √x, use linear approximation to estimate f(9.3), and state whether it's an over- or under-estimate.",
                "Step 1 — write the linearization: f(x) ≈ f(9) + f′(9)(x − 9).",
                "Step 2 — plug in x = 9.3: f(9.3) ≈ 3 + (1/6)(0.3) = 3 + 0.05 = 3.05.",
                "Step 3 — determine the concavity of √x: f″(x) = −(1/4)x^(−3/2), which is negative for all x > 0, so √x is concave down.",
                "Step 4 — since √x is concave down, its tangent line lies above the curve, so the linear approximation overestimates the true value. (The actual value √9.3 ≈ 3.0496, confirming a slight overestimate.)",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "Recognize dy = f′(a)dx and Δy = f(a+Δx) − f(a) as approximately equal for small dx — dy is the tangent-line estimate, Δy is the true change.",
                "To decide over- vs. under-estimate, check the sign of f″ at (or near) a: negative means concave down (tangent line above the curve, so an overestimate); positive means concave up (an underestimate).",
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
                "If y = x³, use differentials to estimate dy when x = 2 and dx = 0.1.",
              choices: ["0.4", "1.2", "0.12", "12"],
              answerIndex: 1,
              explanation:
                "dy = 3x²·dx. At x = 2: dy = 3(4)(0.1) = 1.2.",
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
            {
              prompt:
                "Given f(5) = 20 and f′(5) = −3, use linear approximation to estimate f(5.2).",
              choices: ["19.4", "20.6", "17.0", "19.7"],
              answerIndex: 0,
              explanation:
                "f(5.2) ≈ f(5) + f′(5)(5.2 − 5) = 20 + (−3)(0.2) = 20 − 0.6 = 19.4.",
            },
          ],
        },
        {
          slug: "lhopitals-rule",
          title: "L'Hôpital's Rule for Indeterminate Forms",
          summary:
            "Resolve 0/0 and ∞/∞ limits by differentiating numerator and denominator separately, and rewrite other indeterminate forms so the rule applies.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "L'Hôpital's Rule applies only to indeterminate forms 0/0 or ∞/∞: if lim f(x)/g(x) is one of these, then lim f(x)/g(x) = lim f′(x)/g′(x), provided that second limit exists (or is infinite). Differentiate the numerator and denominator separately — never apply the quotient rule to the whole fraction.",
                "Always verify the form is actually 0/0 or ∞/∞ by direct substitution before differentiating — applying L'Hôpital's Rule to a limit that isn't indeterminate gives a wrong answer, since the theorem's justification only holds for these two forms.",
                "You can apply L'Hôpital's Rule repeatedly if, after differentiating top and bottom once, the limit is still indeterminate — keep differentiating numerator and denominator separately until direct substitution finally succeeds.",
                "Other indeterminate forms (0·∞, ∞−∞, 1^∞, 0⁰, ∞⁰) aren't directly 0/0 or ∞/∞, but can be rewritten into one of those forms first: rewrite a product as a fraction (f·g = f/(1/g)), rewrite a difference as a single fraction with a common denominator, and handle exponential indeterminate forms by taking a logarithm first, much like logarithmic differentiation.",
                "L'Hôpital's Rule is a powerful shortcut, but not the only tool — for many rational-function limits, the algebraic techniques from Unit 1 (factoring, rationalizing) are just as fast and avoid an extra round of differentiation.",
              ],
            },
            {
              heading: "Worked Example",
              bullets: [
                "Problem: evaluate lim(x→0⁺) x·ln x (a 0·∞ form).",
                "Step 1 — direct substitution gives 0·(−∞), which is not directly a 0/0 or ∞/∞ form, so L'Hôpital's Rule can't be applied yet.",
                "Step 2 — rewrite as a fraction: x·ln x = ln x / (1/x). As x → 0⁺, this is now (−∞)/(∞), a valid ∞/∞ form.",
                "Step 3 — apply L'Hôpital's Rule, differentiating numerator and denominator separately: d/dx[ln x] = 1/x, and d/dx[1/x] = −1/x².",
                "Step 4 — form the new quotient: (1/x) / (−1/x²) = (1/x)·(−x²/1) = −x.",
                "Step 5 — take the limit: as x → 0⁺, −x → 0. So lim(x→0⁺) x·ln x = 0.",
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
              prompt: "What is lim(x→0⁺) x·ln x?",
              choices: ["0", "−∞", "∞", "1"],
              answerIndex: 0,
              explanation:
                "Rewriting as ln x/(1/x) gives an ∞/∞ form; L'Hôpital's Rule reduces it to −x, which approaches 0 as x → 0⁺.",
            },
            {
              prompt: "What is lim(x→0) (1 − cos x)/x² using L'Hôpital's Rule (applied twice)?",
              choices: ["0", "1", "∞", "1/2"],
              answerIndex: 3,
              explanation:
                "0/0 form. First derivative: sin(x)/(2x), still 0/0. Second derivative: cos(x)/2, which at x=0 gives 1/2.",
            },
          ],
        },
      ],
    },
    {
      slug: "analytical-applications-of-differentiation",
      title: "Analytical Applications of Differentiation",
      summary:
        "Use the Mean Value Theorem, derivative sign analysis, curve sketching, and optimization to fully analyze functions and implicit relations.",
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
                "Extreme Value Theorem: if f is continuous on a closed interval [a,b], f is guaranteed to attain both an absolute maximum and an absolute minimum on that interval — continuity on a closed, bounded interval is exactly what rules out the value 'escaping' to infinity or approaching but never reaching a boundary.",
                "A critical point occurs where f′(x) = 0 or f′(x) is undefined (but f(x) itself is defined there) — these are the only places besides the endpoints where an extremum can possibly occur.",
                "Candidates test: to find absolute extrema on [a,b], evaluate f at every critical point inside (a,b) and at both endpoints, then compare all the values — the largest is the absolute max, the smallest is the absolute min.",
                "Mean Value Theorem: if f is continuous on [a,b] and differentiable on (a,b), there's at least one c in (a,b) where f′(c) = [f(b) − f(a)]/(b − a) — the instantaneous rate equals the average rate somewhere in between, since a continuously changing quantity can't have every instantaneous rate strictly above (or below) its own average.",
                "Rolle's Theorem is the special case of the MVT where f(a) = f(b), guaranteeing a point where f′(c) = 0 — since the average rate of change is 0/(b−a) = 0 in that case.",
              ],
            },
            {
              heading: "Worked Example",
              bullets: [
                "Problem: find the absolute maximum and minimum of f(x) = x³ − 3x² − 9x + 5 on [−2, 4].",
                "Step 1 — differentiate: f′(x) = 3x² − 6x − 9 = 3(x² − 2x − 3) = 3(x − 3)(x + 1).",
                "Step 2 — find critical points: f′(x) = 0 at x = 3 and x = −1, both inside [−2, 4].",
                "Step 3 — apply the candidates test: evaluate f at both endpoints and both critical points. f(−2) = −8 − 12 + 18 + 5 = 3. f(−1) = −1 − 3 + 9 + 5 = 10. f(3) = 27 − 27 − 27 + 5 = −22. f(4) = 64 − 48 − 36 + 5 = −15.",
                "Step 4 — compare all four values (3, 10, −22, −15): the absolute maximum is 10 at x = −1, and the absolute minimum is −22 at x = 3.",
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
          slug: "increasing-decreasing-and-first-derivative-test",
          title: "Increasing, Decreasing, and the First Derivative Test",
          summary:
            "Determine where a function rises and falls from the sign of its derivative, and classify critical points as local extrema using the First Derivative Test.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "f is increasing on an interval where f′(x) > 0 and decreasing where f′(x) < 0 — this follows from the Mean Value Theorem: a derivative that's positive everywhere on an interval forces every secant-line slope on that interval to be positive too.",
                "Build a sign chart for f′ from its critical points (where f′ = 0 or is undefined): these points break the domain into intervals where f′ keeps one constant sign, so testing a single value in each interval tells you the sign for the entire interval.",
                "First Derivative Test: at a critical point c, if f′ changes from positive to negative, f has a local maximum at c; if f′ changes from negative to positive, f has a local minimum at c; if f′ does not change sign, c is neither a max nor a min.",
                "A critical point is not automatically an extremum: f′(x) = 3x² = 0 for f(x) = x³ at x = 0, but f′ stays positive on both sides (it never changes sign), so x = 0 is not a local extremum at all — it's an inflection point instead.",
                "The First Derivative Test still works at a point where f′ is undefined but f itself is continuous there (like a cusp) — the test only requires a sign change in f′, not that f′(c) literally equal 0.",
              ],
            },
            {
              heading: "Worked Example",
              bullets: [
                "Problem: find and classify the local extrema of f(x) = 2x³ − 3x² − 12x + 1 using the First Derivative Test.",
                "Step 1 — differentiate: f′(x) = 6x² − 6x − 12 = 6(x² − x − 2) = 6(x − 2)(x + 1).",
                "Step 2 — find critical points: f′(x) = 0 at x = −1 and x = 2.",
                "Step 3 — build a sign chart, testing one point in each interval: at x = −2, f′ = 6(−4)(−1) = 24 > 0; at x = 0, f′ = 6(−2)(1) = −12 < 0; at x = 3, f′ = 6(1)(4) = 24 > 0.",
                "Step 4 — read the pattern: f′ is positive on (−∞,−1), negative on (−1,2), positive on (2,∞).",
                "Step 5 — classify: at x = −1, f′ changes from + to −, so f has a local maximum there; at x = 2, f′ changes from − to +, so f has a local minimum there.",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "Build the sign chart systematically: mark critical points on a number line, test one value in each resulting interval, and record only the sign, not the exact value.",
                "A sign chart for f′ doubles as your roadmap for both 'increasing/decreasing' questions and 'First Derivative Test' classification questions — build it once, use it twice.",
              ],
            },
          ],
          questions: [
            {
              prompt: "For f(x) = x³ − 27x, on which interval is f increasing?",
              choices: [
                "x < −3 or x > 3",
                "−3 < x < 3",
                "x > 0",
                "x < 0",
              ],
              answerIndex: 0,
              explanation:
                "f′(x) = 3x² − 27 = 3(x−3)(x+3), which is positive when |x| > 3, i.e. x < −3 or x > 3.",
            },
            {
              prompt:
                "For f(x) = 2x³ − 3x² − 12x + 1, the First Derivative Test shows f′ changes from positive to negative at x = −1. What does this tell you?",
              choices: [
                "x = −1 is a local minimum",
                "x = −1 is a local maximum",
                "x = −1 is an inflection point",
                "x = −1 is not a critical point",
              ],
              answerIndex: 1,
              explanation:
                "By the First Derivative Test, a sign change from positive to negative in f′ at a critical point means f transitions from increasing to decreasing there — a local maximum.",
            },
            {
              prompt:
                "For f(x) = x⁴, what does the First Derivative Test conclude about the critical point at x = 0?",
              choices: [
                "x = 0 is a local maximum",
                "Neither a max nor a min",
                "x = 0 is a local minimum, since f′ changes from negative to positive there",
                "x = 0 is not a critical point",
              ],
              answerIndex: 2,
              explanation:
                "f′(x) = 4x³ is negative for x < 0 and positive for x > 0 — a sign change from − to +, so by the First Derivative Test x = 0 is a local minimum.",
            },
            {
              prompt: "If f′(c) = 0 but f′ does not change sign at c, what can you conclude?",
              choices: [
                "c is a local maximum",
                "c is a local minimum",
                "c is neither a local max nor a local min",
                "c is not in the domain of f",
              ],
              answerIndex: 2,
              explanation:
                "The First Derivative Test requires an actual sign change in f′ to identify an extremum; without one, the critical point is neither a local max nor a local min.",
            },
          ],
        },
        {
          slug: "curve-sketching-concavity",
          title: "Concavity and the Second Derivative Test",
          summary:
            "Use the second derivative to determine concavity and locate inflection points, and apply the Second Derivative Test to classify extrema.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "f is concave up where f″(x) > 0 (the graph curves like a cup, and tangent lines lie below the curve) and concave down where f″(x) < 0 (the graph curves like a frown, and tangent lines lie above the curve); an inflection point occurs where f″ actually changes sign (and f is defined there) — concavity must genuinely flip, not just have f″ touch zero.",
                "Second Derivative Test: at a critical point where f′(x) = 0, if f″(x) > 0 the graph is concave up there, which forces a local minimum; if f″(x) < 0, concave down forces a local maximum; if f″(x) = 0, the test is inconclusive and you must fall back to the First Derivative Test.",
                "Reading between graphs: where f is concave up, f′ is increasing (its own slope is positive) and f″ is positive; where f is concave down, f′ is decreasing and f″ is negative.",
                "An inflection point of f corresponds exactly to a local extremum of f′, since f″ (the derivative of f′) changes sign there — concavity of f is really just the increasing/decreasing behavior of the slope function f′.",
                "A zero of f″ is not automatically an inflection point — f″ must actually change sign there, exactly parallel to how a zero of f′ isn't automatically a local extremum unless f′ actually changes sign.",
              ],
            },
            {
              heading: "Worked Example",
              bullets: [
                "Problem: for f(x) = x⁴ − 6x² + 1, find all inflection points and describe the concavity on each interval.",
                "Step 1 — find f′(x): f′(x) = 4x³ − 12x.",
                "Step 2 — find f″(x): f″(x) = 12x² − 12 = 12(x² − 1) = 12(x − 1)(x + 1).",
                "Step 3 — set f″(x) = 0: candidates are x = 1 and x = −1.",
                "Step 4 — build a sign chart: at x = −2, f″ = 12(4−1) = 36 > 0; at x = 0, f″ = 12(0−1) = −12 < 0; at x = 2, f″ = 12(4−1) = 36 > 0.",
                "Step 5 — read the pattern: concave up on (−∞,−1) and (1,∞), concave down on (−1,1). Since f″ changes sign at both x = −1 and x = 1, both are genuine inflection points.",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "Build a sign chart for f″ the same way you did for f′ — test a value in each interval between the zeros/undefined points of f″ to determine concave up vs. concave down.",
                "A zero of f″ isn't automatically an inflection point — f″ must actually change sign there, just like a zero of f′ isn't automatically a local extremum.",
              ],
            },
          ],
          questions: [
            {
              prompt: "For f(x) = x⁴ − 6x² + 1, on which interval is f concave up?",
              choices: ["−1 < x < 1", "x < −1 or x > 1", "x < 0", "x > 0"],
              answerIndex: 1,
              explanation:
                "f″(x) = 12x² − 12 = 12(x−1)(x+1), which is positive when |x| > 1, i.e. x < −1 or x > 1.",
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
          slug: "sketching-and-connecting-f-fprime-fdoubleprime",
          title: "Sketching Graphs and Connecting f, f′, and f″",
          summary:
            "Translate fluently between the graphs (or formulas) of f, f′, and f″ to fully describe a function's increasing/decreasing behavior, extrema, concavity, and inflection points.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "Given the graph of f, you can sketch f′ by tracking f's slope: f′ is positive wherever f rises, negative wherever f falls, and zero at every local extremum of f — and f′ has its own local extrema exactly where f has inflection points.",
                "Given the graph or formula of f′ instead of f, you can reconstruct f's shape: f is increasing wherever the f′ graph is above the x-axis, decreasing wherever it's below, and f has a local max/min wherever f′ crosses the x-axis with an actual sign change.",
                "Given f′, the concavity of f is read from whether f′ itself is increasing or decreasing — NOT from where f′ is positive or negative: f is concave up where the f′ graph is rising, concave down where the f′ graph is falling, and f has an inflection point exactly where f′ reaches a local max or min.",
                "A full function analysis walks through the same five questions every time: where is f′ positive/negative (increasing/decreasing of f); where is f′ = 0 or undefined (critical points); where is f″ positive/negative (concavity of f); where does f″ change sign (inflection points); and how do all of these combine into one consistent sketch.",
                "These 'given one graph, describe another' problems are some of the most common AP free-response questions — practice translating fluently between the graphs of f, f′, and f″ in both directions, since a problem might hand you any one of the three and ask about either of the other two.",
              ],
            },
            {
              heading: "Worked Example",
              bullets: [
                "Problem: given f′(x) = −(x−1)(x−4) (negative on (−∞,1), positive on (1,4), negative on (4,∞)), describe f's increasing/decreasing behavior, local extrema, concavity, and inflection points.",
                "Step 1 — read the sign of f′ directly: negative on (−∞,1), positive on (1,4), negative on (4,∞). So f is decreasing, then increasing, then decreasing.",
                "Step 2 — apply the First Derivative Test at the sign changes: at x = 1, f′ goes − to +, so f has a local minimum; at x = 4, f′ goes + to −, so f has a local maximum.",
                "Step 3 — to get concavity, examine where f′ itself is increasing or decreasing. Since f′(x) = −x² + 5x − 4, f″(x) = −2x + 5, which is 0 at x = 2.5: f′ is increasing on (−∞,2.5) and decreasing on (2.5,∞).",
                "Step 4 — translate to f: f is concave up wherever f′ is increasing, i.e., on (−∞,2.5), and concave down wherever f′ is decreasing, i.e., on (2.5,∞).",
                "Step 5 — locate the inflection point: f has an inflection point at x = 2.5, exactly where f′ reaches its own local maximum (equivalently, where f″ changes from positive to negative).",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "When given the graph or formula of f′, remember: f′'s sign tells you f's increasing/decreasing behavior, while f′'s OWN increasing/decreasing behavior tells you f's concavity — don't mix up which graph feature answers which question.",
                "f′'s local extrema become f's inflection points, and f′'s sign-changing zero-crossings become f's local extrema — memorize this one-level shift between the two graphs.",
              ],
            },
          ],
          questions: [
            {
              prompt:
                "Given f′(x) = −(x−1)(x−4), which is negative on (−∞,1), positive on (1,4), and negative on (4,∞), what does f have at x = 1?",
              choices: ["A local maximum", "An inflection point", "A local minimum", "Nothing significant"],
              answerIndex: 2,
              explanation:
                "f′ changes from negative to positive at x = 1, so by the First Derivative Test, f has a local minimum there.",
            },
            {
              prompt:
                "For the same f′, it has a local maximum at x = 2.5 (its vertex). What does this tell you about f at x = 2.5?",
              choices: [
                "f has a local maximum there",
                "f has an inflection point there",
                "f has a local minimum there",
                "f is undefined there",
              ],
              answerIndex: 1,
              explanation:
                "A local extremum of f′ means f″ changes sign there, which is exactly the definition of an inflection point of f.",
            },
            {
              prompt: "On an interval where f′ is positive and increasing, what can you conclude about f?",
              choices: [
                "f is decreasing and concave down",
                "f is increasing and concave up",
                "f is increasing and concave down",
                "f is decreasing and concave up",
              ],
              answerIndex: 1,
              explanation:
                "f′ positive means f is increasing; f′ increasing means f″ > 0, so f is concave up. Both together: increasing and concave up.",
            },
            {
              prompt: "On an interval where f′ is negative and decreasing, what can you conclude about f?",
              choices: [
                "f is increasing and concave up",
                "f is decreasing and concave up",
                "f is decreasing and concave down",
                "f is increasing and concave down",
              ],
              answerIndex: 2,
              explanation:
                "f′ negative means f is decreasing; f′ decreasing means f″ < 0, so f is concave down. Both together: decreasing and concave down.",
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
                "Identify the quantity to optimize, write it as a function of the relevant variables, and use any given constraint to reduce it to a single variable — this is the most important step, since everything after it is routine calculus.",
                "Determine a reasonable domain for that variable from the physical context — lengths must be positive, and often bounded above by a fixed total.",
                "Find critical points by setting the derivative equal to zero, then confirm a max or min using the First or Second Derivative Test, or by comparing to the domain's endpoints.",
                "For a closed, bounded domain, the candidates test (critical points + endpoints) guarantees you find the true absolute max/min, not just a local one.",
                "Common setups: maximizing area/volume for fixed perimeter/surface area, minimizing cost or material, and minimizing distance between a curve and a point.",
              ],
            },
            {
              heading: "Worked Example",
              bullets: [
                "Problem: a cylindrical can must have volume 16π cubic inches. Find the radius that minimizes the total surface area, using S = 2πr² + 2πrh and V = πr²h = 16π.",
                "Step 1 — solve the constraint for h in terms of r: h = 16π/(πr²) = 16/r².",
                "Step 2 — substitute into the surface area formula to get a function of r alone: S(r) = 2πr² + 2πr(16/r²) = 2πr² + 32π/r.",
                "Step 3 — differentiate: S′(r) = 4πr − 32π/r².",
                "Step 4 — set S′(r) = 0 and solve: 4πr = 32π/r² → 4r³ = 32 → r³ = 8 → r = 2.",
                "Step 5 — confirm this is a minimum: S″(r) = 4π + 64π/r³, which is positive for every r > 0, so S is concave up everywhere on the domain, confirming r = 2 gives the minimum surface area (with h = 16/4 = 4 inches).",
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
                "A cylindrical can needs volume 16π in³. Using S(r) = 2πr² + 32π/r, what radius minimizes the surface area?",
              choices: ["r = 4", "r = 8", "r = 2", "r = 16"],
              answerIndex: 2,
              explanation:
                "S′(r) = 4πr − 32π/r² = 0 gives 4r³ = 32, so r³ = 8 and r = 2, confirmed a minimum since S″(r) > 0 for all r > 0.",
            },
          ],
        },
        {
          slug: "analyzing-implicit-relations",
          title: "Analyzing the Behavior of Implicit Relations",
          summary:
            "Locate horizontal and vertical tangent lines on implicitly defined curves, and extend derivative-based analysis beyond functions of the form y = f(x).",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "Many of the same tools from explicit curve analysis — locating horizontal/vertical tangents, analyzing concavity — apply to implicitly defined relations too, but dy/dx (and d²y/dx²) must first be found using implicit differentiation before any sign analysis can begin.",
                "A horizontal tangent line occurs where dy/dx = 0 — set the numerator of the dy/dx expression equal to 0, then substitute back into the original equation to find the matching y-coordinate(s), while double-checking the denominator isn't also 0 at that same point.",
                "A vertical tangent line occurs where dy/dx is undefined because the denominator of the dy/dx expression is 0 (while the numerator is not) — geometrically, the curve momentarily has an unbounded slope there.",
                "To find d²y/dx² for an implicit relation, differentiate the expression for dy/dx again with respect to x; since this second differentiation will itself produce more dy/dx terms, substitute your already-found expression for dy/dx back in before simplifying.",
                "These techniques matter most for curves that fail the vertical line test (circles, ellipses, and other closed or multi-valued curves), where no single explicit function y = f(x) could describe the whole curve, yet the curve still has well-defined tangent lines almost everywhere.",
              ],
            },
            {
              heading: "Worked Example",
              bullets: [
                "Problem: for the circle x² + y² = 25, find all points where the tangent line is horizontal, and all points where it's vertical.",
                "Step 1 — differentiate implicitly: 2x + 2y(dy/dx) = 0, so dy/dx = −x/y.",
                "Step 2 — find horizontal tangents by setting the numerator, −x, equal to 0: x = 0 (as long as y ≠ 0 there). Substituting x = 0 into x²+y²=25 gives y² = 25, so y = ±5. Horizontal tangents occur at (0,5) and (0,−5).",
                "Step 3 — find vertical tangents by setting the denominator, y, equal to 0: y = 0 (as long as x ≠ 0 there). Substituting y = 0 gives x² = 25, so x = ±5. Vertical tangents occur at (5,0) and (−5,0).",
                "Step 4 — sanity check geometrically: these four points are exactly the top, bottom, right, and left of the circle — precisely where you'd visually expect flat and vertical tangent lines.",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "Always confirm the point you found actually lies on the original curve — solving 'numerator = 0' or 'denominator = 0' alone isn't enough; substitute back into the original equation to get valid coordinates.",
                "For horizontal tangents, set the numerator of dy/dx to 0; for vertical tangents, set the denominator to 0 — mixing these up is a common and costly error.",
              ],
            },
          ],
          questions: [
            {
              prompt:
                "For the circle x² + y² = 25, at which points does the curve have a horizontal tangent line?",
              choices: [
                "(5,0) and (−5,0)",
                "(0,5) and (0,−5)",
                "(3,4) and (−3,−4)",
                "(0,0) only",
              ],
              answerIndex: 1,
              explanation:
                "dy/dx = −x/y = 0 requires x = 0, which gives y = ±5 on the circle — horizontal tangents at (0,5) and (0,−5).",
            },
            {
              prompt: "For the curve xy = 4, does the curve have any horizontal tangent lines?",
              choices: [
                "Yes, at (4,1)",
                "Yes, at (1,4)",
                "No — the numerator of dy/dx would require y=0, which never satisfies xy=4",
                "Yes, at (0,4)",
              ],
              answerIndex: 2,
              explanation:
                "Differentiating xy=4 gives dy/dx = −y/x. Setting the numerator −y = 0 requires y = 0, but no point with y = 0 satisfies xy = 4, so no horizontal tangent exists.",
            },
            {
              prompt: "For the circle x² + y² = 25, at which points does the curve have a vertical tangent line?",
              choices: [
                "(0,5) and (0,−5)",
                "(5,0) and (−5,0)",
                "(0,0) only",
                "(5,5) and (−5,−5)",
              ],
              answerIndex: 1,
              explanation:
                "dy/dx = −x/y is undefined when y = 0, which gives x = ±5 on the circle — vertical tangents at (5,0) and (−5,0).",
            },
            {
              prompt:
                "To find where an implicitly defined curve has a vertical tangent line, you should:",
              choices: [
                "Set the numerator of dy/dx equal to 0",
                "Set dy/dx equal to 1",
                "Set the denominator of dy/dx equal to 0 (while the numerator is nonzero there)",
                "Set y equal to x",
              ],
              answerIndex: 2,
              explanation:
                "A vertical tangent is where the slope is undefined — that happens exactly where the denominator of dy/dx is 0, provided the numerator isn't also 0 at that point.",
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
                "Midpoint sums use each interval's midpoint and are generally more accurate than left/right sums, since overshoot on one half of each subinterval tends to cancel undershoot on the other half; trapezoidal sums average the left and right sums, fitting a trapezoid to each subinterval instead of a rectangle.",
                "The definite integral ∫[a,b] f(x)dx is formally defined as the limit of a Riemann sum as n → ∞ (Δx → 0), representing the exact signed area between f and the x-axis.",
                "If f(x) ≥ 0, a definite integral gives positive area; where f(x) < 0, that region contributes negative area to the integral.",
              ],
            },
            {
              heading: "Worked Example",
              bullets: [
                "Problem: approximate ∫[0,4] x² dx using a midpoint Riemann sum with 4 subintervals.",
                "Step 1 — compute Δx = (4−0)/4 = 1, giving subintervals [0,1], [1,2], [2,3], [3,4] with midpoints 0.5, 1.5, 2.5, 3.5.",
                "Step 2 — evaluate f at each midpoint: f(0.5) = 0.25, f(1.5) = 2.25, f(2.5) = 6.25, f(3.5) = 12.25.",
                "Step 3 — sum the values: 0.25 + 2.25 + 6.25 + 12.25 = 21.",
                "Step 4 — multiply by Δx = 1: the midpoint sum is 21.",
                "Step 5 — compare to the exact value ∫[0,4] x² dx = 64/3 ≈ 21.33 — the midpoint sum (21) is much closer than the left sum (14) or right sum (30), illustrating why midpoint approximations tend to outperform one-sided ones.",
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
          slug: "properties-of-definite-integrals",
          title: "Properties of Definite Integrals",
          summary:
            "Use the additivity, linearity, sign-reversal, and comparison properties of definite integrals to combine and manipulate them without recomputing from scratch.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "∫[a,a] f(x)dx = 0 — a region with zero width has zero area, no matter what f is, since a Riemann sum over an interval of length 0 is automatically 0.",
                "Reversing the limits of integration flips the sign: ∫[b,a] f(x)dx = −∫[a,b] f(x)dx — this convention keeps the Fundamental Theorem's evaluation formula F(b) − F(a) consistent no matter which limit is written 'first.'",
                "Additivity over intervals: ∫[a,c] f(x)dx = ∫[a,b] f(x)dx + ∫[b,c] f(x)dx for any b — you can always split (or combine) a definite integral at an intermediate point, even one outside [a,c].",
                "Linearity: ∫[a,b] [c·f(x) ± g(x)] dx = c∫[a,b] f(x)dx ± ∫[a,b] g(x)dx — constants factor out and integrals of sums/differences split apart, mirroring the linearity you already know from derivatives.",
                "Comparison property: if f(x) ≥ g(x) for every x in [a,b], then ∫[a,b] f(x)dx ≥ ∫[a,b] g(x)dx — a curve that's always at least as high encloses at least as much signed area.",
              ],
            },
            {
              heading: "Worked Example",
              bullets: [
                "Problem: given ∫[0,5] f(x)dx = 12 and ∫[3,5] f(x)dx = 4, find ∫[0,3] f(x)dx. Then, given ∫[0,5] g(x)dx = 7, find ∫[0,5] [3f(x) − 2g(x)] dx.",
                "Step 1 — apply additivity to the first part: ∫[0,5] f dx = ∫[0,3] f dx + ∫[3,5] f dx, so 12 = ∫[0,3] f dx + 4.",
                "Step 2 — solve: ∫[0,3] f(x)dx = 12 − 4 = 8.",
                "Step 3 — apply linearity to the second part: ∫[0,5] [3f(x) − 2g(x)] dx = 3∫[0,5] f(x)dx − 2∫[0,5] g(x)dx.",
                "Step 4 — substitute the given values: 3(12) − 2(7) = 36 − 14 = 22.",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "When a problem gives you several sub-interval integral values, look for a way to add or subtract them using additivity before trying to compute anything from scratch.",
                "Reversing bounds is a sign flip, not a change in magnitude — ∫[5,3] f dx = −∫[3,5] f dx describes the same region with the opposite sign convention.",
              ],
            },
          ],
          questions: [
            {
              prompt: "Given ∫[0,5] f(x)dx = 12 and ∫[3,5] f(x)dx = 4, what is ∫[0,3] f(x)dx?",
              choices: ["8", "4", "16", "−8"],
              answerIndex: 0,
              explanation:
                "By additivity, ∫[0,5] = ∫[0,3] + ∫[3,5], so 12 = ∫[0,3] + 4, giving ∫[0,3] f(x)dx = 8.",
            },
            {
              prompt:
                "Given ∫[0,5] f(x)dx = 12 and ∫[0,5] g(x)dx = 7, what is ∫[0,5] [3f(x) − 2g(x)] dx?",
              choices: ["50", "−22", "22", "36"],
              answerIndex: 2,
              explanation:
                "By linearity, ∫[3f−2g]dx = 3∫f dx − 2∫g dx = 3(12) − 2(7) = 36 − 14 = 22.",
            },
            {
              prompt: "For any continuous function h, what is ∫[7,7] h(x)dx?",
              choices: ["Undefined", "h(7)", "0", "2h(7)"],
              answerIndex: 2,
              explanation:
                "An interval of zero width always gives an integral of 0, since there's no region to accumulate area over.",
            },
            {
              prompt: "If ∫[2,6] f(x)dx = 10, what is ∫[6,2] f(x)dx?",
              choices: ["10", "−10", "0", "5"],
              answerIndex: 1,
              explanation:
                "Reversing the limits of integration flips the sign: ∫[6,2] f dx = −∫[2,6] f dx = −10.",
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
                "FTC Part 1: if g(x) = ∫[a to x] f(t)dt, then g′(x) = f(x) — differentiating an accumulation function just returns the original integrand, since integration and differentiation are inverse processes.",
                "With the chain rule, if the upper limit is itself a function of x, g(x) = ∫[a to h(x)] f(t)dt, then g′(x) = f(h(x))·h′(x) — treat the upper limit like an 'inner function' the same way you would for any composite function.",
                "FTC Part 2: ∫[a to b] f(x)dx = F(b) − F(a), where F is any antiderivative of f — this converts area computation into evaluating an antiderivative at the two bounds and subtracting.",
                "An accumulation function g(x) = ∫[a to x] f(t)dt is increasing where f(t) > 0 and decreasing where f(t) < 0, since g′(x) = f(x); this lets you analyze g's behavior directly from a graph of f, without ever computing the integral.",
                "g has a local max where f changes from positive to negative, and a local min where f changes from negative to positive — this mirrors the First Derivative Test applied to g, using f in place of g′.",
              ],
            },
            {
              heading: "Worked Example",
              bullets: [
                "Problem: let g(x) = ∫[1 to x²] √(t+1) dt. Find g′(x).",
                "Step 1 — recognize this needs FTC Part 1 combined with the chain rule, since the upper limit is x², not just x.",
                "Step 2 — apply FTC Part 1 with the inner function u = x²: g′(x) = [integrand evaluated at the upper limit] × [derivative of the upper limit] = √(x² + 1) · d/dx[x²].",
                "Step 3 — substitute d/dx[x²] = 2x: g′(x) = √(x² + 1) · 2x.",
                "Step 4 — simplify: g′(x) = 2x√(x² + 1).",
                "Step 5 — sanity check the logic: if h(x) = ∫[1 to x] √(t+1) dt, then h′(x) = √(x+1) by FTC Part 1 alone. Since g(x) = h(x²), the chain rule gives g′(x) = h′(x²)·2x = √(x²+1)·2x — the same result.",
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
          slug: "antiderivatives-basic-rules",
          title: "Antiderivatives and Basic Integration Rules",
          summary:
            "Build a toolkit of basic antiderivatives, understand why '+C' is required, and check your work by differentiating.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "An antiderivative F of f satisfies F′(x) = f(x). Because the derivative of any constant is 0, every antiderivative of f differs from any other by an added constant C — this is exactly why indefinite integrals always end in '+C'.",
                "Reverse power rule: ∫xⁿ dx = x^(n+1)/(n+1) + C for n ≠ −1 (add one to the exponent, then divide by the new exponent) — this precisely undoes the power rule from differentiation, so differentiating your answer should return the original integrand.",
                "The n = −1 exception: ∫(1/x) dx = ln|x| + C, since the power rule's denominator (n+1) would be 0 in that case; the absolute value is needed because ln is only defined for positive inputs, while 1/x is defined for all x ≠ 0.",
                "Other basic antiderivatives to memorize: ∫eˣ dx = eˣ + C, ∫sin x dx = −cos x + C, ∫cos x dx = sin x + C, ∫sec²x dx = tan x + C, ∫sec x tan x dx = sec x + C.",
                "Indefinite integrals distribute across sums/differences and pull out constant multiples, exactly mirroring the sum/difference and constant multiple rules for derivatives — integrate term by term, then add a single '+C' at the very end (not one per term).",
              ],
            },
            {
              heading: "Worked Example",
              bullets: [
                "Problem: find ∫(6x³ − 4/x + 3 sin x) dx.",
                "Step 1 — split into three separate integrals using linearity: ∫6x³ dx − ∫(4/x) dx + ∫3 sin x dx.",
                "Step 2 — integrate each term: ∫6x³ dx = 6·x⁴/4 = (3/2)x⁴; ∫(4/x) dx = 4 ln|x|; ∫3 sin x dx = −3 cos x.",
                "Step 3 — combine with the correct signs from the original expression: (3/2)x⁴ − 4 ln|x| − 3 cos x.",
                "Step 4 — add the constant of integration: (3/2)x⁴ − 4 ln|x| − 3 cos x + C.",
                "Step 5 — check by differentiating: d/dx[(3/2)x⁴ − 4 ln|x| − 3 cos x + C] = 6x³ − 4/x + 3 sin x, which matches the original integrand exactly.",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "Always check your antiderivative by differentiating it — if you don't recover the original integrand exactly, something went wrong.",
                "Never forget '+C' on an indefinite integral; on the AP exam, omitting it costs a point even when the rest of the work is correct.",
              ],
            },
          ],
          questions: [
            {
              prompt: "What is ∫(6x² + 4x − 5) dx?",
              choices: [
                "6x³ + 4x² − 5x + C",
                "2x³ + 2x² − 5x",
                "2x³ + 2x² − 5x + C",
                "x³ + x² − 5x + C",
              ],
              answerIndex: 2,
              explanation:
                "Apply the reverse power rule term by term: ∫6x²dx = 2x³, ∫4x dx = 2x², ∫−5 dx = −5x, plus the constant of integration.",
            },
            {
              prompt: "What is ∫(3/x) dx?",
              choices: ["3/x² + C", "3 ln|x| + C", "ln|3x| + C", "3x + C"],
              answerIndex: 1,
              explanation:
                "Using the n = −1 exception, ∫(3/x) dx = 3∫(1/x) dx = 3 ln|x| + C.",
            },
            {
              prompt: "What is ∫(2eˣ − sec²x) dx?",
              choices: [
                "2eˣ + tan x + C",
                "eˣ − tan x + C",
                "2eˣ − sec x tan x + C",
                "2eˣ − tan x + C",
              ],
              answerIndex: 3,
              explanation:
                "∫2eˣ dx = 2eˣ, and ∫sec²x dx = tan x, so ∫(2eˣ − sec²x)dx = 2eˣ − tan x + C.",
            },
            {
              prompt: "What is ∫[1 to e] (1/x) dx?",
              choices: ["e", "1", "0", "ln(e−1)"],
              answerIndex: 1,
              explanation:
                "An antiderivative of 1/x is ln|x|. Evaluate: ln(e) − ln(1) = 1 − 0 = 1.",
            },
          ],
        },
        {
          slug: "antiderivatives-and-u-substitution",
          title: "u-Substitution",
          summary:
            "Reverse the chain rule with u-substitution to integrate composite functions, for both indefinite and definite integrals.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "u-substitution reverses the chain rule: choose u = (an inner function appearing in the integrand), compute du = u′(x)dx, and rewrite the entire integral in terms of u alone before integrating — if any x's remain afterward, you either need a different choice of u, or need to solve for the leftover x's in terms of u.",
                "A good candidate for u is an inner function whose derivative (up to a constant multiple) also appears elsewhere in the integrand — spotting this pairing is the whole skill of u-substitution.",
                "After integrating in terms of u, substitute the original expression for u back in so the final antiderivative is written in terms of x (for an indefinite integral).",
                "For definite integrals, you have two equally valid options: convert the limits of integration to u-values (using u = u(x) at each bound) and evaluate entirely in u without ever substituting back, or find the antiderivative in terms of x first and then plug in the original x-limits.",
                "Don't forget '+C' on an indefinite integral after substitution — it's easy to drop right after the back-substitution step.",
              ],
            },
            {
              heading: "Worked Example",
              bullets: [
                "Problem: evaluate ∫[0 to 1] x·√(x²+1) dx using u-substitution, converting the limits of integration.",
                "Step 1 — let u = x² + 1, so du = 2x dx, meaning x dx = du/2.",
                "Step 2 — convert the limits: when x = 0, u = 0² + 1 = 1; when x = 1, u = 1² + 1 = 2.",
                "Step 3 — rewrite the entire integral in terms of u: ∫[0,1] x√(x²+1)dx = ∫[1,2] √u · (du/2) = (1/2)∫[1,2] u^(1/2) du.",
                "Step 4 — integrate: (1/2)·[u^(3/2)/(3/2)] evaluated from 1 to 2 = (1/3)[u^(3/2)] from 1 to 2.",
                "Step 5 — evaluate: (1/3)[2^(3/2) − 1^(3/2)] = (1/3)(2√2 − 1).",
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
              prompt: "Using u = x² + 1, what is ∫ 2x·e^(x²+1) dx?",
              choices: [
                "e^(x²+1) + C",
                "2e^(x²+1) + C",
                "x²e^(x²+1) + C",
                "(x²+1)e^(x²+1) + C",
              ],
              answerIndex: 0,
              explanation:
                "With u = x²+1, du = 2x dx, so the integral becomes ∫eᵘ du = eᵘ + C = e^(x²+1) + C.",
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
        "Model changing quantities with differential equations, visualize and reason about solutions with slope fields, and solve separable equations including exponential growth and decay.",
      lessons: [
        {
          slug: "modeling-and-verifying-differential-equations",
          title: "Modeling with Differential Equations and Verifying Solutions",
          summary:
            "Translate verbal descriptions of a rate into a differential equation, and verify whether a proposed function actually solves one.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "A differential equation relates a function to its derivative(s), like dy/dx = xy — writing one is how you translate a verbal description of a changing rate into precise mathematical language.",
                "Common modeling phrases and their translations: 'the rate of change of y is proportional to the amount present' → dy/dt = ky; 'the rate of change of y with respect to x equals the product of x and y' → dy/dx = xy — learn to recognize these verbal patterns instantly.",
                "A solution to a differential equation is any function y(x) that makes the equation true when substituted in. A general solution is a whole family of such functions (differing by a constant), while a particular solution also satisfies one specific initial condition, pinning that constant down exactly.",
                "To verify a proposed solution, compute its derivative first, then substitute both the proposed y and its derivative into the differential equation, and confirm the two sides match for all x in the domain — never substitute y in before differentiating.",
                "Differential equations show up throughout AP Calculus as the natural language for 'rate' word problems — anywhere a rate is described in terms of the quantity itself, a differential equation is being described, even if those exact words never appear.",
              ],
            },
            {
              heading: "Worked Example",
              bullets: [
                "Problem: verify that y = 4e^(3x) is a solution to dy/dx − 3y = 0, then show y = Ce^(3x) is the general solution for any constant C.",
                "Step 1 — differentiate the proposed solution: y = 4e^(3x) gives dy/dx = 4·3e^(3x) = 12e^(3x).",
                "Step 2 — substitute both y and dy/dx into the left side of the equation: dy/dx − 3y = 12e^(3x) − 3(4e^(3x)) = 12e^(3x) − 12e^(3x) = 0.",
                "Step 3 — the left side equals 0, matching the right side of the differential equation, so y = 4e^(3x) is confirmed a solution.",
                "Step 4 — repeat in general for y = Ce^(3x): dy/dx = 3Ce^(3x). Substituting: 3Ce^(3x) − 3Ce^(3x) = 0, true for every constant C — confirming y = Ce^(3x) is the general solution, with y = 4e^(3x) as the particular case C = 4.",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "Always differentiate the proposed y first, then substitute both y and dy/dx into the equation — substituting y in before differentiating is a common and costly ordering mistake.",
                "Recognize 'rate proportional to the amount' as the specific phrase that always translates to dy/dt = ky — it's one of the most frequently tested modeling translations.",
              ],
            },
          ],
          questions: [
            {
              prompt: "Is y = 4e^(3x) a solution to dy/dx − 3y = 0?",
              choices: [
                "No, because dy/dx = 12",
                "No, because y is not exponential",
                "Yes, because dy/dx = 12e^(3x) and 3y = 12e^(3x), so dy/dx − 3y = 0",
                "Yes, because y(0) = 4",
              ],
              answerIndex: 2,
              explanation:
                "Differentiating y = 4e^(3x) gives dy/dx = 12e^(3x), which exactly equals 3y = 3(4e^(3x)) = 12e^(3x), so dy/dx − 3y = 0 holds.",
            },
            {
              prompt:
                "Which differential equation models 'the rate of change of a population is proportional to the population itself'?",
              choices: ["dP/dt = k + P", "dP/dt = kP", "dP/dt = k/P", "dP/dt = kt"],
              answerIndex: 1,
              explanation:
                "'Proportional to the population itself' translates directly to dP/dt = kP, the standard growth/decay model.",
            },
            {
              prompt: "Is y = x² + C a solution to dy/dx = 2x, for any constant C?",
              choices: [
                "No, only when C = 0",
                "No, because C changes the derivative",
                "It cannot be determined",
                "Yes, since the derivative of any constant is 0",
              ],
              answerIndex: 3,
              explanation:
                "Differentiating y = x² + C gives dy/dx = 2x regardless of C, since the derivative of a constant is always 0 — so the equation holds for every value of C.",
            },
            {
              prompt: "Is y = 5x a solution to dy/dx = y/x?",
              choices: [
                "No, because dy/dx = 5 but y/x = x",
                "No, y/x is undefined",
                "Yes, but only at x = 1",
                "Yes, because dy/dx = 5 and y/x = 5, so both sides are equal",
              ],
              answerIndex: 3,
              explanation:
                "dy/dx = 5, and y/x = 5x/x = 5 for x ≠ 0. Both sides equal 5, so y = 5x solves dy/dx = y/x.",
            },
          ],
        },
        {
          slug: "slope-fields-and-verifying-solutions",
          title: "Slope Fields",
          summary:
            "Sketch and interpret slope fields, reading a differential equation's behavior directly from the picture of its short line segments.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "A slope field draws a short line segment of slope dy/dx = f(x,y) at many grid points, giving a visual picture of every solution curve at once without solving the equation — at each point, plug the (x,y) coordinates into f(x,y) to know exactly how steep and in which direction to draw that segment.",
                "Reading a slope field: horizontal segments occur where dy/dx = 0; steep or near-vertical segments occur where |dy/dx| is very large; segments tilt more steeply as you move toward regions of the plane where f(x,y) grows in magnitude.",
                "To sketch a particular solution curve on a slope field, start at the given initial point and follow the direction of the nearby segments, smoothly connecting them as you move both left and right from the starting point.",
                "A slope field can reveal qualitative long-term behavior (e.g., solutions leveling off toward a horizontal asymptote, or diverging) even when you have no formula for the solution at all.",
                "Different differential equations can produce visually similar-looking slope fields in some regions but very different ones elsewhere — always check several representative points across the field, not just one region, when matching a slope field to its equation.",
              ],
            },
            {
              heading: "Worked Example",
              bullets: [
                "Problem: for dy/dx = x − y, compute the slope at several grid points, then describe the solution curve through (0, 2).",
                "Step 1 — build a small table of slopes using dy/dx = x − y: at (0,0), slope = 0; at (1,0), slope = 1; at (0,1), slope = −1; at (1,1), slope = 0; at (2,2), slope = 0; at (0,2), slope = −2.",
                "Step 2 — notice the pattern: the slope is exactly 0 along the entire line y = x (since x − y = 0 there) — every segment in the slope field is horizontal along that line.",
                "Step 3 — starting at (0,2), the slope is −2 (steeply falling); follow that direction briefly, then recompute the slope at the new nearby point and continue — the curve should bend as it approaches the line y = x, since slopes shrink toward 0 near that line.",
                "Step 4 — qualitatively, solution curves in this slope field tend to approach the line y = x as x grows, since that's where the 'pull' toward zero slope is strongest.",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "To sketch a solution curve on a slope field, start at the given initial point and follow the direction of the segments, smoothly connecting them left and right.",
                "Compute the slope at a handful of representative grid points by hand before trying to match a differential equation to a given slope field picture — guessing from the overall 'look' alone is unreliable.",
              ],
            },
          ],
          questions: [
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
              prompt:
                "In the slope field for dy/dx = x − y, along which line are every segment's slope equal to 0?",
              choices: ["y = 0", "x = 0", "y = x", "y = −x"],
              answerIndex: 2,
              explanation:
                "dy/dx = x − y = 0 exactly when x = y, so every point along the line y = x has a horizontal segment.",
            },
            {
              prompt:
                "In the slope field for dy/dx = y, what is the slope of every segment drawn along the x-axis (where y = 0)?",
              choices: ["1", "Undefined", "−1", "0"],
              answerIndex: 3,
              explanation:
                "Since dy/dx = y, along the x-axis where y = 0, the slope is 0 for every such point.",
            },
          ],
        },
        {
          slug: "separation-of-variables-general-and-particular-solutions",
          title: "Separation of Variables: General and Particular Solutions",
          summary:
            "Solve separable differential equations by isolating variables and integrating both sides, then use an initial condition to find a particular solution.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "A separable differential equation can be rewritten so all y-terms (with dy) are on one side and all x-terms (with dx) are on the other, then both sides are integrated independently — separating this way works because you're really just asking which function of y, differentiated, matches which function of x, on each side of the equation.",
                "After integrating both sides, you get an equation relating x, y, and a constant of integration — solve explicitly for y in terms of x when possible, combining the two separate constants of integration from each side into a single renamed constant.",
                "A general solution is a whole family of curves, one for each value of the constant; a particular solution locks in one specific curve by using a given initial condition, like y(0) = 3, to solve for the exact value of that constant.",
                "Not every solution can be solved explicitly for y — sometimes the result is only an implicit relation between x and y, and that's an acceptable final answer if isolating y isn't possible or reasonable.",
                "Always double-check a particular solution by substituting the initial condition back into your final formula for y, confirming it actually reproduces the given point.",
              ],
            },
            {
              heading: "Worked Example",
              bullets: [
                "Problem: solve dy/dx = 3x²y, given the initial condition y(0) = 2.",
                "Step 1 — separate variables: divide both sides by y and multiply by dx: dy/y = 3x² dx.",
                "Step 2 — integrate both sides: ∫(1/y) dy = ∫3x² dx gives ln|y| = x³ + C₁.",
                "Step 3 — exponentiate both sides to solve for y: |y| = e^(x³+C₁) = e^(C₁)·e^(x³). Rename the constant e^(C₁) (absorbing the sign too) as A: y = A·e^(x³).",
                "Step 4 — apply the initial condition y(0) = 2: 2 = A·e⁰ = A, so A = 2.",
                "Step 5 — write the particular solution: y = 2e^(x³). Check: dy/dx = 6x²e^(x³), and 3x²y = 3x²(2e^(x³)) = 6x²e^(x³) — the two sides match, confirming the solution.",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "Always add '+C' when you integrate the x-side; it becomes an arbitrary constant that gets renamed (e.g. e^C becomes a new constant) once you exponentiate to solve for y.",
                "Apply the initial condition only after finding the general solution — substituting too early loses the constant you actually need to solve for.",
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
                "What is the general solution to dy/dx = 3x²y (before applying any initial condition)?",
              choices: ["y = x³ + C", "y = Ae^(x³)", "y = A + x³", "y = 3x²·A"],
              answerIndex: 1,
              explanation:
                "Separating and integrating gives ln|y| = x³ + C₁, so y = Ae^(x³) after exponentiating and renaming the constant.",
            },
            {
              prompt:
                "Solve the separable equation dy/dx = y²·x, expressing y in terms of x with the constant absorbed appropriately.",
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
            {
              prompt: "After separating and integrating dy/y = 2x dx, what is the general solution?",
              choices: ["y = Ae^(x²)", "y = x² + C", "y = 2x² + C", "y = A·x²"],
              answerIndex: 0,
              explanation:
                "Integrating gives ln|y| = x² + C₁; exponentiating both sides gives y = Ae^(x²) for a renamed constant A.",
            },
          ],
        },
        {
          slug: "separation-of-variables-and-growth-decay",
          title: "Exponential Growth and Decay Models",
          summary:
            "Apply the differential equation dy/dt = ky to model and solve exponential growth and decay problems, including half-life and doubling time.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "The differential equation dy/dt = ky (rate of change proportional to the amount present) always has general solution y = Ce^(kt) — you can verify this by differentiating: dy/dt = Ckekt = k(Ce^(kt)) = ky, confirming it solves the equation for any constant C.",
                "k > 0 models growth (the quantity increases, and increases faster and faster as it grows), while k < 0 models decay (the quantity decreases, leveling off toward zero).",
                "In growth/decay problems, C is the initial amount y(0) (found by plugging t = 0 into y = Ce^(kt)), and k is found from any other given data point using the exponential formula and solving for k with logarithms.",
                "Half-life and doubling-time problems are exponential decay/growth in disguise: use y = y₀e^(kt) and solve for k using the given half-life or doubling time — e.g., a half-life of h years means e^(kh) = 1/2, so k = ln(1/2)/h = −ln(2)/h.",
                "Whenever a problem says a rate of change is 'proportional to' the amount present, immediately write dy/dt = ky — that phrase is the direct verbal signal for this specific model.",
              ],
            },
            {
              heading: "Worked Example",
              bullets: [
                "Problem: a bacteria culture grows at a rate proportional to its size, starting at 500 and growing to 1400 in 5 hours. Find k, and predict the population at t = 10 hours.",
                "Step 1 — write the model: y(t) = Ce^(kt), with C = y(0) = 500, the initial amount.",
                "Step 2 — use the second data point to solve for k: y(5) = 1400 gives 500e^(5k) = 1400, so e^(5k) = 1400/500 = 2.8.",
                "Step 3 — solve for k using logarithms: 5k = ln(2.8), so k = ln(2.8)/5.",
                "Step 4 — write the specific model: y(t) = 500·e^((ln 2.8 / 5)·t).",
                "Step 5 — predict at t = 10 using exponent rules instead of a messy decimal for k: y(10) = 500·e^(2 ln 2.8) = 500·(e^(ln 2.8))² = 500·(2.8)² = 500·7.84 = 3920 bacteria.",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "Whenever a problem says a rate of change is 'proportional to' the amount present, immediately write dy/dt = ky — that phrase is the signal for the growth/decay model.",
                "To project forward using a known growth/decay rate, it's often faster to rewrite e^(kt) using exponent rules (like (e^(kt₁))ⁿ) than to recompute k as a decimal first.",
              ],
            },
          ],
          questions: [
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
                "A bacteria culture grows from 500 to 1400 in 5 hours, following y = Ce^(kt). Using exponent rules, what is the predicted population at t = 10 hours?",
              choices: ["1900", "2800", "3920", "4200"],
              answerIndex: 2,
              explanation:
                "Since e^(5k) = 2.8, y(10) = 500·e^(10k) = 500·(e^(5k))² = 500·(2.8)² = 500·7.84 = 3920.",
            },
            {
              prompt: "A radioactive sample decays from 80 g to 20 g in 6 years. What is its half-life?",
              choices: ["2 years", "3 years", "4 years", "6 years"],
              answerIndex: 1,
              explanation:
                "20 = 80e^(6k) gives e^(6k) = 1/4, so 6k = −ln4 = −2ln2, meaning k = −ln2/3. Half-life h satisfies kh = −ln2, so h = −ln2/k = 3 years.",
            },
          ],
        },
      ],
    },
    {
      slug: "applications-of-integration",
      title: "Applications of Integration",
      summary:
        "Use definite integrals to find average values, areas enclosed by curves, and volumes of solids built from cross sections or generated by revolving regions around an axis.",
      lessons: [
        {
          slug: "average-value-of-a-function",
          title: "Average Value of a Function",
          summary:
            "Extend the arithmetic-mean idea to continuous functions using the definite integral, and apply the Mean Value Theorem for Integrals.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "The average value of a continuous function f on [a,b] is f_avg = (1/(b−a))·∫[a,b] f(x) dx — dividing the 'total accumulation' by the width of the interval is exactly the continuous analogue of averaging a finite list of numbers.",
                "Rearranged, this says ∫[a,b] f(x) dx = f_avg·(b−a): the average value times the interval's length reproduces the exact accumulated total, the same way average speed times time gives total distance.",
                "The Mean Value Theorem for Integrals guarantees that if f is continuous on [a,b], there exists at least one c in [a,b] with f(c) = f_avg — the function actually attains its average value somewhere on the interval, not just in a limiting or approximate sense.",
                "Geometrically, f_avg is the height of the rectangle with width (b−a) whose area equals the exact area under f on [a,b] — sketching that rectangle alongside the curve is a good sanity check on whether your computed average is plausible.",
                "Don't confuse this with the average rate of change (which uses (f(b)−f(a))/(b−a) and comes from the Mean Value Theorem for derivatives) — average value uses the integral and total accumulation, average rate of change uses the derivative and net change.",
              ],
            },
            {
              heading: "Worked Example",
              bullets: [
                "Problem: find the average value of f(x) = x² on [0,3], and find the value(s) of c guaranteed by the Mean Value Theorem for Integrals.",
                "Step 1 — compute the definite integral: ∫[0,3] x² dx = [x³/3] from 0 to 3 = 27/3 − 0 = 9.",
                "Step 2 — divide by the interval width: f_avg = 9/(3−0) = 3.",
                "Step 3 — solve f(c) = f_avg for c: c² = 3, so c = √3 (rejecting −√3 since it isn't in [0,3]).",
                "Conclusion: the average value is 3, attained at c = √3 ≈ 1.732, which does lie in [0,3] as the theorem guarantees.",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "Compute the integral first, then divide by (b−a) last — dividing too early is a common bookkeeping error.",
                "If a question gives you the average value and asks for the integral, just multiply by (b−a) instead of integrating from scratch.",
                "The MVT for Integrals requires only continuity on [a,b], the same hypothesis as the Extreme Value Theorem — no differentiability is needed.",
              ],
            },
          ],
          questions: [
            {
              prompt: "What is the average value of f(x) = 3x² on [0,2]?",
              choices: ["2", "4", "6", "8"],
              answerIndex: 1,
              explanation:
                "∫[0,2] 3x² dx = [x³] from 0 to 2 = 8. Average value = 8/(2−0) = 4.",
            },
            {
              prompt: "What is the average value of f(x) = sin(x) on [0,π]?",
              choices: ["2/π", "1/π", "π/2", "0"],
              answerIndex: 0,
              explanation:
                "∫[0,π] sin(x) dx = [−cos(x)] from 0 to π = (−cos π) − (−cos 0) = 1 + 1 = 2. Average value = 2/(π−0) = 2/π.",
            },
            {
              prompt:
                "The average value of a continuous function f on [1,5] is 7. What is ∫[1,5] f(x) dx?",
              choices: ["7", "4", "35", "28"],
              answerIndex: 3,
              explanation:
                "∫[a,b] f(x) dx = f_avg·(b−a) = 7·(5−1) = 28.",
            },
            {
              prompt:
                "For f(x) = x² on [1,4], the Mean Value Theorem for Integrals guarantees some c in [1,4] with f(c) equal to the average value. What is c?",
              choices: ["7", "√21", "√7", "7/3"],
              answerIndex: 2,
              explanation:
                "∫[1,4] x² dx = [x³/3] from 1 to 4 = 64/3 − 1/3 = 63/3 = 21, so f_avg = 21/3 = 7. Solving c² = 7 gives c = √7 ≈ 2.646, which lies in [1,4].",
            },
          ],
        },
        {
          slug: "area-between-curves-with-respect-to-x",
          title: "Area Between Curves with Respect to x",
          summary:
            "Find the area of a region enclosed by two or more curves by integrating the vertical distance between the top and bottom functions.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "For continuous functions f and g with f(x) ≥ g(x) on [a,b], the area between their graphs is ∫[a,b] (f(x) − g(x)) dx — always subtract the lower curve from the upper curve so the integrand stays non-negative.",
                "Before integrating, find intersection points by solving f(x) = g(x); these x-values become your bounds of integration (or the points where you must split the interval).",
                "'Top minus bottom' works regardless of whether the curves lie above, below, or straddle the x-axis, because area between curves depends only on the vertical gap between the two graphs, not on their height above y = 0.",
                "If the identity of the top function switches partway across the interval, split the integral at each switch point, using the correct top-minus-bottom order on each piece, then add the pieces together.",
                "A negative result after integrating top-minus-bottom is a red flag that you subtracted in the wrong order or misidentified which curve is on top — go back and test a sample point between the intersections.",
              ],
            },
            {
              heading: "Worked Example",
              bullets: [
                "Problem: find the area of the region enclosed by y = x² and y = x + 2.",
                "Step 1 — find intersections: x² = x + 2 → x² − x − 2 = 0 → (x−2)(x+1) = 0, so x = −1 and x = 2.",
                "Step 2 — determine which curve is on top: testing x = 0 gives line value 2 and parabola value 0, so the line x+2 is above the parabola on (−1, 2).",
                "Step 3 — set up the integral: Area = ∫[−1,2] [(x+2) − x²] dx.",
                "Step 4 — antiderivative: F(x) = x²/2 + 2x − x³/3. Evaluate: F(2) = 2 + 4 − 8/3 = 10/3; F(−1) = 1/2 − 2 + 1/3 = −7/6.",
                "Step 5 — Area = F(2) − F(−1) = 10/3 − (−7/6) = 20/6 + 7/6 = 27/6 = 9/2.",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "Always sketch (even roughly) or test a point to confirm which curve is on top before writing the integral — don't assume from the equations alone.",
                "Setting the two functions equal and solving is the fastest way to find both the bounds and any interior switch points at once.",
              ],
            },
          ],
          questions: [
            {
              prompt: "What is the area of the region enclosed by y = x² and y = 4?",
              choices: ["16/3", "8", "32/3", "4"],
              answerIndex: 2,
              explanation:
                "x² = 4 gives x = ±2. On (−2,2), 4 ≥ x², so Area = ∫[−2,2] (4 − x²) dx = [4x − x³/3] from −2 to 2 = (8 − 8/3) − (−8 + 8/3) = 16 − 16/3 = 32/3.",
            },
            {
              prompt:
                "Which integral gives the area between y = √x and y = x on [0,1]?",
              choices: [
                "∫[0,1] (x−√x) dx",
                "∫[0,1] (√x − x) dx",
                "∫[0,1] x dx − ∫[0,1] √x dx",
                "∫[0,1] (√x + x) dx",
              ],
              answerIndex: 1,
              explanation:
                "On [0,1], √x ≥ x (e.g. at x = 0.25, √x = 0.5 > 0.25), so the top-minus-bottom integral is ∫[0,1] (√x − x) dx.",
            },
            {
              prompt: "What is the area of the region between y = x and y = x³ for 0 ≤ x ≤ 1?",
              choices: ["1/2", "1/4", "3/4", "1/12"],
              answerIndex: 1,
              explanation:
                "On [0,1], x ≥ x³. Area = ∫[0,1] (x − x³) dx = [x²/2 − x⁴/4] from 0 to 1 = 1/2 − 1/4 = 1/4.",
            },
            {
              prompt: "What is the area of the region enclosed by y = x² and y = x + 2?",
              choices: ["10/3", "7/6", "9/2", "27/12"],
              answerIndex: 2,
              explanation:
                "Intersections at x = −1, 2, with the line on top. Area = ∫[−1,2] [(x+2) − x²] dx = 10/3 − (−7/6) = 27/6 = 9/2.",
            },
          ],
        },
        {
          slug: "area-between-curves-with-respect-to-y",
          title: "Area Between Curves with Respect to y",
          summary:
            "Recognize when a region is easier to slice horizontally, and integrate the horizontal distance between a right curve and a left curve with respect to y.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "When boundaries are more natural as x = f(y) and x = g(y), area is Area = ∫[c,d] (right(y) − left(y)) dy — subtracting the leftmost x-value from the rightmost x-value at each height y.",
                "Switch to integrating in y whenever slicing vertically would force you to split the region into multiple pieces (because the top or bottom curve changes) but slicing horizontally does not — sideways parabolas like x = y² and 'folded-over' regions are the classic signal.",
                "Rewrite each boundary by solving for x in terms of y, then find intersection y-values by setting the two x-expressions equal — these become the bounds [c,d].",
                "Determine which curve is farther right by plugging in a sample y-value strictly between the intersection points, exactly as you'd test a sample x-value for top-vs-bottom.",
                "The logic is identical to x-integration with the axes' roles swapped: 'right minus left' in y plays the same part as 'top minus bottom' in x.",
              ],
            },
            {
              heading: "Worked Example",
              bullets: [
                "Problem: find the area enclosed by x = y² and x = y + 6.",
                "Step 1 — find intersections: y² = y + 6 → y² − y − 6 = 0 → (y−3)(y+2) = 0, so y = −2 and y = 3.",
                "Step 2 — determine which curve is farther right: at y = 0, the line gives x = 6 and the parabola gives x = 0, so the line x = y+6 is to the right on (−2, 3).",
                "Step 3 — set up the integral: Area = ∫[−2,3] [(y+6) − y²] dy.",
                "Step 4 — antiderivative: F(y) = y²/2 + 6y − y³/3. Evaluate: F(3) = 9/2 + 18 − 9 = 27/2; F(−2) = 2 − 12 + 8/3 = −22/3.",
                "Step 5 — Area = F(3) − F(−2) = 27/2 − (−22/3) = 81/6 + 44/6 = 125/6.",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "If you find yourself splitting a vertical-slice integral into three or more pieces, stop and check whether integrating with respect to y avoids the split entirely.",
                "Solving y = f(x) for x = f⁻¹(y) is the main mechanical hurdle here — watch for domain restrictions when the curve isn't one-to-one.",
              ],
            },
          ],
          questions: [
            {
              prompt: "What is the area of the region enclosed by x = y² and x = 4?",
              choices: ["32/3", "16/3", "8", "64/3"],
              answerIndex: 0,
              explanation:
                "y² = 4 gives y = ±2. On (−2,2), the line (x=4) is right of the parabola. Area = ∫[−2,2] (4 − y²) dy = [4y − y³/3] from −2 to 2 = 16 − 16/3 = 32/3.",
            },
            {
              prompt:
                "For 0 ≤ y ≤ 4, which integral gives the area between x = √y and x = y/2?",
              choices: [
                "∫[0,4] (y/2 − √y) dy",
                "∫[0,4] (√y − y/2) dy",
                "∫[0,2] (√y − y/2) dy",
                "∫[0,4] (√y + y/2) dy",
              ],
              answerIndex: 1,
              explanation:
                "At y = 1, √y = 1 > y/2 = 0.5, so √y is farther right. The correct setup is ∫[0,4] (√y − y/2) dy over the full interval where the curves meet, y = 0 and y = 4.",
            },
            {
              prompt: "What is the area of the region enclosed by x = 0 and x = 9 − y²?",
              choices: ["18", "24", "72", "36"],
              answerIndex: 3,
              explanation:
                "9 − y² = 0 gives y = ±3. At y = 0, x = 9 > 0, so the curve is right of the y-axis. Area = ∫[−3,3] (9 − y²) dy = [9y − y³/3] from −3 to 3 = 18 − (−18) = 36.",
            },
            {
              prompt:
                "A region's left and right boundary curves switch which one is farther right partway through the y-interval. What should you do?",
              choices: [
                "Always subtract the equation listed second",
                "Use x with respect to y only if both curves are lines",
                "Split the integral at the y-value where the curves cross and integrate each piece with the correct right-minus-left order",
                "Ignore the switch since the total area cancels out",
              ],
              answerIndex: 2,
              explanation:
                "Just like a top/bottom switch in x-integration, a switch in which curve is farther right requires splitting the integral at the crossing point and applying right-minus-left separately on each piece.",
            },
          ],
        },
        {
          slug: "volume-with-known-cross-sections",
          title: "Volume with Known Cross Sections",
          summary:
            "Compute the volume of a solid whose base is a planar region and whose cross sections perpendicular to an axis are squares, rectangles, triangles, or semicircles.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "When a solid has a known base region and cross sections perpendicular to an axis of a specified shape, its volume is V = ∫[a,b] A(x) dx, where A(x) is the cross-sectional area as a function of position.",
                "The cross section's key length (its side, base, or diameter) is almost always the vertical gap between the base region's two boundary curves at that x — the same 'top minus bottom' quantity used for area between curves.",
                "Know each shape's area formula in terms of its side length s: square A = s²; equilateral triangle A = (√3/4)s²; semicircle with diameter s has radius s/2, so A = (1/2)π(s/2)².",
                "Always identify the base region in the xy-plane and mark the segment whose length becomes the cross section's key dimension at a general x — skipping this visualization step is the most common source of setup errors.",
                "Find the interval [a,b] from the intersection points of the base region's boundary curves, then integrate A(x) over that interval like any other definite integral.",
              ],
            },
            {
              heading: "Worked Example",
              bullets: [
                "Problem: the base of a solid is the region bounded by y = √x and y = 0 on [0,4]. Cross sections perpendicular to the x-axis are squares. Find the volume.",
                "Step 1 — identify the base region: bounded above by y = √x, below by y = 0, on [0,4].",
                "Step 2 — the square's side length at position x is the vertical gap: s(x) = √x − 0 = √x.",
                "Step 3 — the cross-sectional area is A(x) = s(x)² = (√x)² = x.",
                "Step 4 — integrate: V = ∫[0,4] x dx = [x²/2] from 0 to 4 = 16/2 − 0 = 8.",
                "Conclusion: the volume is 8 cubic units.",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "Write the side length s(x) explicitly before squaring (or applying another shape formula) — squaring too early is a common algebra slip.",
                "For semicircular cross sections, remember the side length you find is the diameter, so the radius used in the area formula is half of it.",
              ],
            },
          ],
          questions: [
            {
              prompt:
                "The base of a solid is bounded by y = x and y = 0 on [0,3]. Cross sections perpendicular to the x-axis are squares. What is the volume?",
              choices: ["6", "9", "18", "27"],
              answerIndex: 1,
              explanation:
                "Side length s(x) = x, so A(x) = x². V = ∫[0,3] x² dx = [x³/3] from 0 to 3 = 9.",
            },
            {
              prompt:
                "The base of a solid is bounded by y = √x and y = 0 on [0,4]. Cross sections perpendicular to the x-axis are equilateral triangles. What is the volume?",
              choices: ["2√3", "√3", "4√3", "8√3"],
              answerIndex: 0,
              explanation:
                "Side length s(x) = √x, so A(x) = (√3/4)x. V = (√3/4)∫[0,4] x dx = (√3/4)(8) = 2√3.",
            },
            {
              prompt:
                "The base of a solid is bounded by y = x² and y = 4. Cross sections perpendicular to the x-axis are semicircles with diameter equal to the vertical segment between the curves. What is the volume?",
              choices: ["32π/15", "64π/3", "64π/15", "16π/15"],
              answerIndex: 2,
              explanation:
                "Diameter s(x) = 4 − x² on [−2,2], so radius = (4−x²)/2 and A(x) = (π/8)(4−x²)². Expanding (4−x²)² = 16 − 8x² + x⁴ and integrating over [−2,2] gives 64 − 128/3 + 64/5 = 512/15, so V = (π/8)(512/15) = 64π/15.",
            },
            {
              prompt:
                "A solid's base is the region between y = x and y = x² on [0,1]. Cross sections perpendicular to the x-axis are squares. Which integral gives the volume?",
              choices: [
                "∫[0,1] (x−x²) dx",
                "π∫[0,1] (x−x²)² dx",
                "∫[0,1] 2(x−x²) dx",
                "∫[0,1] (x−x²)² dx",
              ],
              answerIndex: 3,
              explanation:
                "The side length is the vertical gap s(x) = x − x² (since x ≥ x² on [0,1]), so the square cross section has area (x−x²)², with no factor of π since these are squares, not circles.",
            },
          ],
        },
        {
          slug: "volume-by-the-disk-method",
          title: "Volume by the Disk Method",
          summary:
            "Find the volume of a solid of revolution when the revolved region touches the axis of revolution along its entire length, producing solid circular disks.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "Revolving the region under y = f(x) and above the x-axis around the x-axis sweeps out disks perpendicular to the axis; each disk has radius r(x) = f(x) and area A(x) = π[f(x)]², giving V = π∫[a,b] [f(x)]² dx.",
                "The disk method applies only when the revolved region touches the axis of revolution along its whole length with no gap — if there's a gap, the solid has a hole and you need the washer method instead.",
                "To revolve about the y-axis, rewrite the boundary as x = f(y), use radius r(y) = f(y), and integrate in y: V = π∫[c,d] [f(y)]² dy — the roles of x and y swap completely.",
                "To revolve about a horizontal line y = k (or vertical line x = h) other than an axis, the radius becomes the distance from the curve to that line — always express it as a non-negative distance, e.g. r(x) = f(x) − k when f(x) ≥ k.",
                "Sketching the region and the axis of revolution before integrating makes the correct radius expression far more reliable than pattern-matching the formula alone.",
              ],
            },
            {
              heading: "Worked Example",
              bullets: [
                "Problem: the region under y = √x, above the x-axis, on [0,4], is revolved about the x-axis. Find the volume.",
                "Step 1 — the radius at position x is the distance from the curve to the axis of revolution: r(x) = √x.",
                "Step 2 — the disk's cross-sectional area is A(x) = πr(x)² = π(√x)² = πx.",
                "Step 3 — integrate: V = ∫[0,4] A(x) dx = π∫[0,4] x dx.",
                "Step 4 — evaluate: π[x²/2] from 0 to 4 = π(8 − 0) = 8π.",
                "Conclusion: the volume is 8π cubic units.",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "Write r(x) (or r(y)) explicitly as a function before squaring it — this catches sign and setup errors before they propagate.",
                "Confirm the region actually touches the axis of revolution; if it doesn't, you need washers, not disks.",
              ],
            },
          ],
          questions: [
            {
              prompt:
                "The region under y = x² on [0,2] is revolved about the x-axis. What is the volume?",
              choices: ["16π/5", "8π/5", "64π/5", "32π/5"],
              answerIndex: 3,
              explanation:
                "V = π∫[0,2] (x²)² dx = π∫[0,2] x⁴ dx = π[x⁵/5] from 0 to 2 = π(32/5) = 32π/5.",
            },
            {
              prompt:
                "The region bounded by y = 3 and the x-axis on [0,2] is revolved about the x-axis. What is the volume?",
              choices: ["18π", "9π", "6π", "36π"],
              answerIndex: 0,
              explanation:
                "r(x) = 3, so V = π∫[0,2] 9 dx = π(9)(2) = 18π. (This matches the cylinder volume formula V = πr²h.)",
            },
            {
              prompt:
                "The region bounded by x = y² and x = 0 for 0 ≤ y ≤ 2 is revolved about the y-axis. What is the volume?",
              choices: ["8π/5", "32π/5", "16π/5", "64π/5"],
              answerIndex: 1,
              explanation:
                "r(y) = y², so V = π∫[0,2] (y²)² dy = π∫[0,2] y⁴ dy = π[y⁵/5] from 0 to 2 = 32π/5.",
            },
            {
              prompt:
                "A region bounded above by y = f(x) (with f(x) ≥ k for all x on the interval) and below by the line y = k touches y = k along its entire base. If revolved about y = k, what is the radius of the resulting disk at a given x?",
              choices: [
                "r(x) = k − f(x)",
                "r(x) = f(x) + k",
                "r(x) = f(x) − k",
                "r(x) = f(x)·k",
              ],
              answerIndex: 2,
              explanation:
                "The radius is the distance from the curve down to the axis of revolution y = k. Since f(x) ≥ k, that distance is f(x) − k.",
            },
          ],
        },
        {
          slug: "volume-by-the-washer-method",
          title: "Volume by the Washer Method",
          summary:
            "Find the volume of a solid of revolution when the revolved region does not touch the axis, producing hollow disks (washers) with an outer and inner radius.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "When the revolved region doesn't touch the axis of revolution, the solid has a hole through it, and each cross section is a washer: A(x) = π[R(x)² − r(x)²], where R is the outer radius and r is the inner radius.",
                "Identify R(x) as the distance from the axis to the curve farther away, and r(x) as the distance from the axis to the curve closer to it — this is the volume analogue of 'top minus bottom' for area, but here it's 'outer squared minus inner squared.'",
                "A very common error is computing R(x) − r(x) first and squaring the result — squaring does not distribute over subtraction, so R(x)² − r(x)² and (R(x) − r(x))² are generally different numbers.",
                "The washer formula reduces to the disk formula exactly when r(x) = 0, i.e. when the inner boundary coincides with the axis — the washer method is simply the more general case, so checking whether the region touches the axis tells you which method actually applies.",
                "When revolving about a line y = k or x = h other than an axis, measure both R and r as distances from that line to the respective curves, not from y = 0 or x = 0.",
              ],
            },
            {
              heading: "Worked Example",
              bullets: [
                "Problem: the region between y = x² and y = 2x, for 0 ≤ x ≤ 2, is revolved about the x-axis. Find the volume.",
                "Step 1 — find intersections: x² = 2x → x(x−2) = 0, so x = 0 and x = 2.",
                "Step 2 — test x = 1: the line gives y = 2, the parabola gives y = 1, so the line is farther from the x-axis. Outer radius R(x) = 2x, inner radius r(x) = x².",
                "Step 3 — set up the integral: V = π∫[0,2] [(2x)² − (x²)²] dx = π∫[0,2] (4x² − x⁴) dx.",
                "Step 4 — antiderivative: 4x³/3 − x⁵/5. Evaluate at x = 2: 32/3 − 32/5 = 160/15 − 96/15 = 64/15.",
                "Step 5 — V = 64π/15 cubic units.",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "Square R(x) and r(x) separately before subtracting — never subtract the radii first and then square.",
                "If the inner boundary is the axis itself, r(x) = 0 and the washer formula collapses back to the disk formula — you don't need to memorize them as unrelated cases.",
              ],
            },
          ],
          questions: [
            {
              prompt:
                "The region between y = 4 and y = x² on [0,2] is revolved about the x-axis. What is the volume?",
              choices: ["64π/5", "128π/5", "32π/5", "256π/5"],
              answerIndex: 1,
              explanation:
                "Outer radius R(x) = 4, inner radius r(x) = x². V = π∫[0,2] (16 − x⁴) dx = π[16x − x⁵/5] from 0 to 2 = π(32 − 32/5) = 128π/5.",
            },
            {
              prompt:
                "The region between y = √x and y = x on [0,1] is revolved about the x-axis. What is the volume?",
              choices: ["π/6", "π/3", "5π/6", "π/12"],
              answerIndex: 0,
              explanation:
                "On [0,1], √x ≥ x, so R(x) = √x, r(x) = x. V = π∫[0,1] (x − x²) dx = π[x²/2 − x³/3] from 0 to 1 = π(1/2 − 1/3) = π/6.",
            },
            {
              prompt:
                "The region between y = x² and y = 0 on [0,2] is revolved about the line y = −1. What is the volume?",
              choices: ["88π/15", "176π/5", "176π/15", "64π/15"],
              answerIndex: 2,
              explanation:
                "Outer radius R(x) = x² − (−1) = x² + 1, inner radius r(x) = 0 − (−1) = 1. V = π∫[0,2] [(x²+1)² − 1] dx = π∫[0,2] (x⁴ + 2x²) dx = π[x⁵/5 + 2x³/3] from 0 to 2 = π(32/5 + 16/3) = π(96/15 + 80/15) = 176π/15.",
            },
            {
              prompt:
                "A region is bounded by y = f(x) (top) and y = g(x) (bottom), both entirely above the x-axis, and is revolved about the x-axis. Which expression gives the volume by the washer method?",
              choices: [
                "π∫[f(x)−g(x)]² dx",
                "π∫[f(x)²+g(x)²] dx",
                "∫[f(x)²−g(x)²] dx",
                "π∫[f(x)²−g(x)²] dx",
              ],
              answerIndex: 3,
              explanation:
                "Outer radius is f(x), inner radius is g(x), both measured from the x-axis. The washer volume is π∫[f(x)² − g(x)²] dx — squares subtracted separately, with the π factor included.",
            },
          ],
        },
      ],
    },
  ],
};

export default apCalculusAB;
