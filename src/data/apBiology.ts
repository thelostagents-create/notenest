import type { Topic } from "../types";

const apBiology: Topic = {
  slug: "ap-biology",
  title: "AP Biology",
  category: "AP Courses",
  subtitle: "Cells, energetics, genetics, evolution, and ecology.",
  emoji: "🧬",
  accent: "#2b9b8f",
  notes: [
    {
      heading: "Chemistry of Life",
      bullets: [
        "The four macromolecules: carbohydrates (energy/structure), lipids (energy storage/membranes), proteins (structure/enzymes), and nucleic acids (genetic info).",
        "Water's polarity gives it cohesion, adhesion, high specific heat, and makes it an excellent solvent — all vital for life.",
        "Enzymes are biological catalysts that lower activation energy; they're specific to their substrate and can be affected by temperature, pH, and inhibitors.",
      ],
    },
    {
      heading: "Cell Structure & Function",
      bullets: [
        "Eukaryotic cells have membrane-bound organelles: the nucleus (DNA), mitochondria (ATP production), ribosomes (protein synthesis), ER, and Golgi apparatus.",
        "The cell membrane is a phospholipid bilayer that's selectively permeable, using diffusion, osmosis, and active transport to move materials.",
        "Cell communication uses signal molecules that bind receptors, triggering a signal transduction pathway and cellular response.",
      ],
    },
    {
      heading: "Cellular Energetics",
      bullets: [
        "Photosynthesis (in chloroplasts): light reactions capture energy as ATP/NADPH; the Calvin cycle uses that energy to build glucose from CO₂.",
        "Cellular respiration: glycolysis (cytoplasm) → Krebs cycle (mitochondrial matrix) → electron transport chain (inner membrane), yielding up to ~36-38 ATP per glucose.",
        "Fermentation lets cells make ATP without oxygen, regenerating NAD⁺ via lactic acid or alcohol production.",
      ],
    },
    {
      heading: "Genetics",
      bullets: [
        "Mendel's laws: segregation (alleles separate during gamete formation) and independent assortment (genes for different traits sort independently).",
        "Meiosis produces four genetically unique haploid gametes through two divisions, including crossing over for genetic variation.",
        "Central dogma: DNA is transcribed into mRNA (in the nucleus), which is translated into protein by ribosomes (in the cytoplasm).",
      ],
    },
    {
      heading: "Evolution",
      bullets: [
        "Natural selection requires variation, heritability, and differential reproductive success — individuals with favorable traits leave more offspring.",
        "Evidence for evolution includes the fossil record, homologous structures, molecular/DNA similarities, and biogeography.",
        "The Hardy-Weinberg equation (p² + 2pq + q² = 1) models allele frequencies in a non-evolving population; deviations signal evolution is occurring.",
      ],
    },
    {
      heading: "Ecology",
      bullets: [
        "Population ecology studies density, dispersion, and growth patterns (exponential vs. logistic, bounded by carrying capacity).",
        "Community interactions include competition, predation, and symbiosis, which shape species distribution and abundance.",
        "Energy and nutrients cycle through ecosystems via food webs and biogeochemical cycles (carbon, nitrogen, water).",
      ],
    },
  ],
  questions: [
    {
      prompt: "Which macromolecule serves as the primary long-term energy storage in animals?",
      choices: ["Carbohydrates", "Lipids", "Proteins", "Nucleic acids"],
      answerIndex: 1,
      explanation: "Lipids (fats) store roughly twice the energy per gram of carbohydrates and serve as long-term energy reserves.",
    },
    {
      prompt: "Where does the Calvin cycle occur, and what is its main product?",
      choices: [
        "Mitochondria; ATP",
        "Chloroplast stroma; glucose",
        "Cytoplasm; pyruvate",
        "Thylakoid membrane; oxygen",
      ],
      answerIndex: 1,
      explanation: "The Calvin cycle occurs in the chloroplast stroma and uses ATP/NADPH from the light reactions to build glucose from CO₂.",
    },
    {
      prompt: "Which process directly produces the most ATP per glucose molecule?",
      choices: ["Glycolysis", "Krebs cycle", "Electron transport chain", "Fermentation"],
      answerIndex: 2,
      explanation: "The electron transport chain generates the majority of ATP (via chemiosmosis) compared to glycolysis or the Krebs cycle alone.",
    },
    {
      prompt: "A cross between two heterozygous (Aa) pea plants is expected to produce what phenotype ratio?",
      choices: ["1:1", "3:1", "1:2:1", "9:3:3:1"],
      answerIndex: 1,
      explanation: "Aa × Aa yields genotypes 1 AA : 2 Aa : 1 aa, which is a 3:1 dominant-to-recessive phenotype ratio.",
    },
    {
      prompt: "During translation, where does protein synthesis take place?",
      choices: ["Nucleus", "Ribosomes", "Golgi apparatus", "Mitochondria only"],
      answerIndex: 1,
      explanation: "Ribosomes read mRNA codons and assemble amino acids into proteins during translation.",
    },
    {
      prompt: "Natural selection acts on a population when individuals show which combination of traits?",
      choices: [
        "Variation only",
        "Heritability only",
        "Variation, heritability, and differential reproductive success",
        "Random mutation only",
      ],
      answerIndex: 2,
      explanation: "All three conditions — variation, heritability, and differential reproductive success — must be present for natural selection to occur.",
    },
    {
      prompt: "In the Hardy-Weinberg equation p² + 2pq + q² = 1, what does 2pq represent?",
      choices: ["Frequency of homozygous dominant individuals", "Frequency of homozygous recessive individuals", "Frequency of heterozygous individuals", "Total population size"],
      answerIndex: 2,
      explanation: "2pq represents the frequency of heterozygotes (one dominant allele, one recessive allele) in the population.",
    },
    {
      prompt: "Which organelle is responsible for modifying, sorting, and packaging proteins for secretion?",
      choices: ["Mitochondria", "Golgi apparatus", "Lysosome", "Ribosome"],
      answerIndex: 1,
      explanation: "The Golgi apparatus modifies, sorts, and packages proteins received from the endoplasmic reticulum before they're sent to their destination.",
    },
  ],
};

export default apBiology;
