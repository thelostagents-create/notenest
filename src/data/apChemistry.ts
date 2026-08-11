import type { Topic } from "../types";

const apChemistry: Topic = {
  slug: "ap-chemistry",
  title: "AP Chemistry",
  category: "AP Courses",
  subtitle: "5 lessons: atomic structure through equilibrium & acid-base chemistry.",
  emoji: "⚗️",
  accent: "#8145c2",
  lessons: [
    {
      slug: "atomic-structure-periodicity",
      title: "Lesson 1: Atomic Structure & Periodicity",
      summary: "Electron configuration and the periodic trends that come from it.",
      notes: [
        {
          heading: "Key Concepts",
          bullets: [
            "Electron configuration fills orbitals in order of increasing energy (Aufbau principle): 1s, 2s, 2p, 3s, 3p, 4s, 3d...",
            "Atomic radius decreases left-to-right across a period (more nuclear charge) and increases down a group (more shells).",
            "Ionization energy and electronegativity increase left-to-right and decrease down a group — the opposite trend from radius.",
            "Isotopes of an element have the same number of protons but different numbers of neutrons.",
          ],
        },
        {
          heading: "Quick Tips",
          bullets: [
            "Noble gas configurations shortcut long electron configurations — e.g., write chlorine as [Ne]3s²3p⁵.",
            "Cations lose electrons from the outermost shell first; anions gain electrons into the outermost shell.",
          ],
        },
      ],
      questions: [
        {
          prompt: "Which trend correctly describes atomic radius across period 3 (left to right)?",
          choices: ["Increases", "Decreases", "Stays the same", "Increases then decreases"],
          answerIndex: 1,
          explanation: "Across a period, increasing nuclear charge pulls electrons closer, so atomic radius decreases.",
        },
        {
          prompt: "What is the electron configuration of sodium (Na, atomic number 11)?",
          choices: ["1s²2s²2p⁶", "1s²2s²2p⁶3s¹", "1s²2s²2p⁵3s²", "1s²2s²2p⁶3s²"],
          answerIndex: 1,
          explanation: "Sodium has 11 electrons: 2 in 1s, 2 in 2s, 6 in 2p, and 1 in 3s — matching its position as the first element in period 3.",
        },
        {
          prompt: "Which element has the higher ionization energy: fluorine or iodine?",
          choices: ["Fluorine", "Iodine", "They're equal", "Cannot be determined"],
          answerIndex: 0,
          explanation: "Ionization energy decreases down a group; fluorine, higher up in group 17, holds its electrons more tightly than iodine.",
        },
        {
          prompt: "Two isotopes of the same element always have the same number of:",
          choices: ["Neutrons", "Protons", "Total nucleons", "Electrons in a neutral vs. charged atom"],
          answerIndex: 1,
          explanation: "Isotopes share the same proton count (same element, same atomic number) but differ in neutron count.",
        },
      ],
    },
    {
      slug: "bonding",
      title: "Lesson 2: Bonding",
      summary: "Ionic vs. covalent bonds, Lewis structures, and molecular geometry.",
      notes: [
        {
          heading: "Key Concepts",
          bullets: [
            "Ionic bonds form between metals and nonmetals via electron transfer; covalent bonds form between nonmetals via electron sharing.",
            "Lewis structures show all valence electrons; use VSEPR theory to predict molecular geometry from electron-pair repulsion.",
            "Common shapes: linear (2 groups), trigonal planar (3), tetrahedral (4), trigonal bipyramidal (5), octahedral (6).",
            "A molecule is polar if it has polar bonds AND an asymmetric shape (dipoles don't cancel).",
          ],
        },
        {
          heading: "Quick Tips",
          bullets: [
            "Lone pairs count as electron groups for shape prediction but aren't shown as 'arms' in the final geometry name.",
            "Symmetric molecules (like CO₂ or CH₄) are nonpolar even if their individual bonds are polar.",
          ],
        },
      ],
      questions: [
        {
          prompt: "What shape does a molecule with 4 bonding pairs and 0 lone pairs on the central atom have, according to VSEPR?",
          choices: ["Trigonal planar", "Bent", "Tetrahedral", "Linear"],
          answerIndex: 2,
          explanation: "Four electron groups with no lone pairs arrange themselves tetrahedrally to minimize repulsion.",
        },
        {
          prompt: "Which pair of elements is most likely to form an ionic bond?",
          choices: ["Carbon and oxygen", "Sodium and chlorine", "Two oxygen atoms", "Nitrogen and hydrogen"],
          answerIndex: 1,
          explanation: "Sodium (a metal) transfers an electron to chlorine (a nonmetal), forming Na⁺ and Cl⁻ — a classic ionic bond.",
        },
        {
          prompt: "Water (H₂O) has 2 bonding pairs and 2 lone pairs on oxygen. What is its molecular shape?",
          choices: ["Linear", "Bent", "Trigonal planar", "Tetrahedral"],
          answerIndex: 1,
          explanation: "With 4 total electron groups but only 2 bonding pairs, the lone pairs push the shape into a bent geometry.",
        },
        {
          prompt: "Why is CO₂ nonpolar even though each C=O bond is polar?",
          choices: [
            "Carbon and oxygen have identical electronegativity",
            "The molecule is linear and symmetric, so the bond dipoles cancel",
            "CO₂ has no lone pairs on carbon",
            "CO₂ is ionic, not covalent",
          ],
          answerIndex: 1,
          explanation: "CO₂'s linear, symmetric shape makes the two equal and opposite bond dipoles cancel out, leaving no net molecular dipole.",
        },
      ],
    },
    {
      slug: "stoichiometry",
      title: "Lesson 3: Stoichiometry",
      summary: "Moles, balancing equations, limiting reactants, and molarity.",
      notes: [
        {
          heading: "Key Concepts",
          bullets: [
            "One mole = 6.022 × 10²³ particles (Avogadro's number). Molar mass converts between grams and moles.",
            "Balance chemical equations by adjusting coefficients so atoms of each element are equal on both sides.",
            "The limiting reactant is the one that runs out first and determines the maximum product formed.",
            "Molarity (M) = moles of solute / liters of solution.",
          ],
        },
        {
          heading: "Quick Tips",
          bullets: [
            "To find the limiting reactant, divide moles of each reactant by its coefficient — the smallest result is limiting.",
            "Never change subscripts to balance an equation; only adjust the coefficients in front of compounds.",
          ],
        },
      ],
      questions: [
        {
          prompt: "How many moles are in 22 grams of CO₂ (molar mass ≈ 44 g/mol)?",
          choices: ["0.25 mol", "0.5 mol", "1 mol", "2 mol"],
          answerIndex: 1,
          explanation: "moles = mass / molar mass = 22 / 44 = 0.5 mol.",
        },
        {
          prompt: "What is the coefficient of O₂ when the equation C₃H₈ + O₂ → CO₂ + H₂O is balanced?",
          choices: ["3", "4", "5", "6"],
          answerIndex: 2,
          explanation: "Balanced: C₃H₈ + 5O₂ → 3CO₂ + 4H₂O. Five O₂ molecules supply the 10 oxygen atoms needed for 3 CO₂ (6 O) and 4 H₂O (4 O).",
        },
        {
          prompt: "You have 2 mol H₂ and 2 mol O₂ reacting as 2H₂ + O₂ → 2H₂O. Which is the limiting reactant?",
          choices: ["H₂", "O₂", "Neither — they react completely", "Cannot be determined"],
          answerIndex: 0,
          explanation: "2 mol H₂ needs only 1 mol O₂ to react completely (2:1 ratio), so O₂ is in excess and H₂ runs out first.",
        },
        {
          prompt: "What is the molarity of a solution made by dissolving 2 mol of NaCl in 4 liters of water?",
          choices: ["0.5 M", "2 M", "4 M", "8 M"],
          answerIndex: 0,
          explanation: "Molarity = moles / liters = 2 / 4 = 0.5 M.",
        },
      ],
    },
    {
      slug: "thermochemistry-kinetics",
      title: "Lesson 4: Thermochemistry & Kinetics",
      summary: "Enthalpy, Hess's Law, reaction rates, and catalysts.",
      notes: [
        {
          heading: "Key Concepts",
          bullets: [
            "Exothermic reactions release heat (ΔH < 0); endothermic reactions absorb heat (ΔH > 0).",
            "Hess's Law: enthalpy change for a reaction is the same regardless of the path taken, so you can add steps.",
            "Reaction rate depends on concentration, temperature, surface area, and catalysts (which lower activation energy without being consumed).",
            "Rate laws are determined experimentally, not from the balanced equation's coefficients.",
          ],
        },
        {
          heading: "Quick Tips",
          bullets: [
            "If you reverse a reaction, flip the sign of ΔH; if you multiply a reaction by a factor, multiply ΔH by that same factor.",
            "A catalyst appears in the mechanism but not in the overall balanced equation.",
          ],
        },
      ],
      questions: [
        {
          prompt: "A reaction has ΔH = −120 kJ. What type of reaction is this?",
          choices: ["Endothermic", "Exothermic", "Non-spontaneous", "Reversible only"],
          answerIndex: 1,
          explanation: "A negative ΔH means the reaction releases heat to the surroundings — exothermic.",
        },
        {
          prompt: "Adding a catalyst to a reaction does which of the following?",
          choices: [
            "Increases the equilibrium constant",
            "Shifts equilibrium toward products",
            "Lowers the activation energy, speeding up both directions equally",
            "Increases the enthalpy change",
          ],
          answerIndex: 2,
          explanation: "Catalysts speed up reactions by lowering activation energy but don't change ΔH or the equilibrium position.",
        },
        {
          prompt: "If reaction A → B has ΔH = +50 kJ, what is ΔH for the reverse reaction B → A?",
          choices: ["+50 kJ", "−50 kJ", "0 kJ", "+100 kJ"],
          answerIndex: 1,
          explanation: "Reversing a reaction flips the sign of ΔH, so B → A has ΔH = −50 kJ.",
        },
        {
          prompt: "Which change generally increases a reaction's rate?",
          choices: ["Lowering the temperature", "Decreasing reactant concentration", "Increasing surface area of a solid reactant", "Removing the catalyst"],
          answerIndex: 2,
          explanation: "More surface area exposes more particles to collide and react, increasing the reaction rate.",
        },
      ],
    },
    {
      slug: "equilibrium-acids-bases",
      title: "Lesson 5: Equilibrium & Acids/Bases",
      summary: "Le Chatelier's Principle, pH, and buffers.",
      notes: [
        {
          heading: "Key Concepts",
          bullets: [
            "Le Chatelier's Principle: a system at equilibrium shifts to counteract any change in concentration, pressure, or temperature.",
            "pH = −log[H⁺]. A pH below 7 is acidic, above 7 is basic, at 7 is neutral (at 25°C).",
            "Strong acids/bases fully dissociate; weak acids/bases partially dissociate, described by Ka or Kb.",
            "Buffers resist pH change and are made from a weak acid plus its conjugate base (or a weak base with its conjugate acid).",
          ],
        },
        {
          heading: "Quick Tips",
          bullets: [
            "A larger Ka means a stronger (more dissociated) weak acid; a smaller Ka means a weaker one.",
            "Increasing pressure on a gaseous equilibrium shifts it toward the side with fewer moles of gas.",
          ],
        },
      ],
      questions: [
        {
          prompt: "A solution has [H⁺] = 1 × 10⁻³ M. What is its pH?",
          choices: ["3", "7", "10", "-3"],
          answerIndex: 0,
          explanation: "pH = −log(1×10⁻³) = 3.",
        },
        {
          prompt: "According to Le Chatelier's principle, increasing pressure on a gaseous equilibrium shifts it toward the side with:",
          choices: ["More moles of gas", "Fewer moles of gas", "No change ever occurs", "Higher temperature"],
          answerIndex: 1,
          explanation: "Increasing pressure favors the side with fewer gas molecules, reducing the total moles of gas.",
        },
        {
          prompt: "Which pair correctly describes a buffer solution?",
          choices: ["A strong acid and a strong base", "A weak acid and its conjugate base", "Two strong acids", "Pure water and a salt"],
          answerIndex: 1,
          explanation: "Buffers are made from a weak acid paired with its conjugate base (or a weak base with its conjugate acid).",
        },
        {
          prompt: "If a reaction at equilibrium is exothermic and you raise the temperature, the equilibrium will shift toward:",
          choices: ["The products", "The reactants", "It won't shift at all", "Whichever side has more gas moles"],
          answerIndex: 1,
          explanation: "Heat acts like a product in an exothermic reaction, so adding heat shifts equilibrium back toward the reactants.",
        },
      ],
    },
  ],
};

export default apChemistry;
