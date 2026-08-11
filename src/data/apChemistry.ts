import type { Topic } from "../types";

const apChemistry: Topic = {
  slug: "ap-chemistry",
  title: "AP Chemistry",
  category: "AP Courses",
  subtitle: "Atomic structure, bonding, stoichiometry, kinetics, and equilibrium.",
  emoji: "⚗️",
  accent: "#8145c2",
  notes: [
    {
      heading: "Atomic Structure & Periodicity",
      bullets: [
        "Electron configuration fills orbitals in order of increasing energy (Aufbau principle): 1s, 2s, 2p, 3s, 3p, 4s, 3d...",
        "Atomic radius decreases left-to-right across a period (more nuclear charge) and increases down a group (more shells).",
        "Ionization energy and electronegativity increase left-to-right and decrease down a group — the opposite trend from radius.",
        "Isotopes of an element have the same number of protons but different numbers of neutrons.",
      ],
    },
    {
      heading: "Bonding",
      bullets: [
        "Ionic bonds form between metals and nonmetals via electron transfer; covalent bonds form between nonmetals via electron sharing.",
        "Lewis structures show all valence electrons; use VSEPR theory to predict molecular geometry from electron-pair repulsion.",
        "Common shapes: linear (2 groups), trigonal planar (3), tetrahedral (4), trigonal bipyramidal (5), octahedral (6).",
        "A molecule is polar if it has polar bonds AND an asymmetric shape (dipoles don't cancel).",
      ],
    },
    {
      heading: "Stoichiometry",
      bullets: [
        "One mole = 6.022 × 10²³ particles (Avogadro's number). Molar mass converts between grams and moles.",
        "Balance chemical equations by adjusting coefficients so atoms of each element are equal on both sides.",
        "The limiting reactant is the one that runs out first and determines the maximum product formed.",
        "Molarity (M) = moles of solute / liters of solution.",
      ],
    },
    {
      heading: "Thermochemistry & Kinetics",
      bullets: [
        "Exothermic reactions release heat (ΔH < 0); endothermic reactions absorb heat (ΔH > 0).",
        "Hess's Law: enthalpy change for a reaction is the same regardless of the path taken, so you can add steps.",
        "Reaction rate depends on concentration, temperature, surface area, and catalysts (which lower activation energy without being consumed).",
        "Rate laws are determined experimentally, not from the balanced equation's coefficients.",
      ],
    },
    {
      heading: "Equilibrium & Acids/Bases",
      bullets: [
        "Le Chatelier's Principle: a system at equilibrium shifts to counteract any change in concentration, pressure, or temperature.",
        "pH = −log[H⁺]. A pH below 7 is acidic, above 7 is basic, at 7 is neutral (at 25°C).",
        "Strong acids/bases fully dissociate; weak acids/bases partially dissociate, described by Ka or Kb.",
        "Buffers resist pH change and are made from a weak acid/base plus its conjugate.",
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
      prompt: "What shape does a molecule with 4 bonding pairs and 0 lone pairs on the central atom have, according to VSEPR?",
      choices: ["Trigonal planar", "Bent", "Tetrahedral", "Linear"],
      answerIndex: 2,
      explanation: "Four electron groups with no lone pairs arrange themselves tetrahedrally to minimize repulsion.",
    },
    {
      prompt: "How many moles are in 22 grams of CO₂ (molar mass ≈ 44 g/mol)?",
      choices: ["0.25 mol", "0.5 mol", "1 mol", "2 mol"],
      answerIndex: 1,
      explanation: "moles = mass / molar mass = 22 / 44 = 0.5 mol.",
    },
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
      choices: [
        "A strong acid and a strong base",
        "A weak acid and its conjugate base",
        "Two strong acids",
        "Pure water and a salt",
      ],
      answerIndex: 1,
      explanation: "Buffers are made from a weak acid paired with its conjugate base (or a weak base with its conjugate acid).",
    },
  ],
};

export default apChemistry;
