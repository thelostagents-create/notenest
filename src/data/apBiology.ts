import type { Topic } from "../types";

const apBiology: Topic = {
  slug: "ap-biology",
  title: "AP Biology",
  category: "AP Courses",
  subtitle: "6 lessons: chemistry of life through ecology.",
  emoji: "🧬",
  accent: "#2b9b8f",
  lessons: [
    {
      slug: "chemistry-of-life",
      title: "Lesson 1: Chemistry of Life",
      summary: "Macromolecules, water, and enzymes.",
      notes: [
        {
          heading: "Key Concepts",
          bullets: [
            "The four macromolecules: carbohydrates (energy/structure), lipids (energy storage/membranes), proteins (structure/enzymes), and nucleic acids (genetic info).",
            "Water's polarity gives it cohesion, adhesion, high specific heat, and makes it an excellent solvent — all vital for life.",
            "Enzymes are biological catalysts that lower activation energy; they're specific to their substrate and can be affected by temperature, pH, and inhibitors.",
          ],
        },
        {
          heading: "Quick Tips",
          bullets: [
            "An enzyme's active site is shaped to fit only its specific substrate — the 'lock and key' idea.",
            "Extreme heat or pH can denature an enzyme, changing its shape and destroying its function.",
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
          prompt: "What do enzymes primarily do in a biochemical reaction?",
          choices: ["Provide energy for the reaction", "Lower the activation energy needed", "Change the products formed", "Get permanently consumed in the reaction"],
          answerIndex: 1,
          explanation: "Enzymes speed up reactions by lowering the activation energy required, without being consumed themselves.",
        },
        {
          prompt: "Which property of water allows it to dissolve many polar and ionic substances?",
          choices: ["Its high boiling point", "Its polarity", "Its low density as ice", "Its cohesion"],
          answerIndex: 1,
          explanation: "Water's polar structure lets it surround and dissolve charged or polar substances, making it an excellent solvent.",
        },
        {
          prompt: "Extreme heat can stop an enzyme from working because it:",
          choices: ["Increases the enzyme's specificity", "Denatures the enzyme, changing its shape", "Adds more substrate", "Converts the enzyme into a substrate"],
          answerIndex: 1,
          explanation: "High heat disrupts the enzyme's structure (denaturation), altering the active site so it can no longer bind its substrate.",
        },
      ],
    },
    {
      slug: "cell-structure-function",
      title: "Lesson 2: Cell Structure & Function",
      summary: "Organelles, membrane transport, and cell communication.",
      notes: [
        {
          heading: "Key Concepts",
          bullets: [
            "Eukaryotic cells have membrane-bound organelles: the nucleus (DNA), mitochondria (ATP production), ribosomes (protein synthesis), ER, and Golgi apparatus.",
            "The cell membrane is a phospholipid bilayer that's selectively permeable, using diffusion, osmosis, and active transport to move materials.",
            "Cell communication uses signal molecules that bind receptors, triggering a signal transduction pathway and cellular response.",
          ],
        },
        {
          heading: "Quick Tips",
          bullets: [
            "Diffusion and osmosis need no energy (passive); active transport requires ATP to move substances against their gradient.",
            "The rough ER has ribosomes attached (protein-focused); the smooth ER doesn't (lipid-focused).",
          ],
        },
      ],
      questions: [
        {
          prompt: "Where does protein synthesis take place inside a cell?",
          choices: ["Nucleus", "Ribosomes", "Golgi apparatus", "Mitochondria only"],
          answerIndex: 1,
          explanation: "Ribosomes read mRNA codons and assemble amino acids into proteins during translation.",
        },
        {
          prompt: "Which organelle is responsible for modifying, sorting, and packaging proteins for secretion?",
          choices: ["Mitochondria", "Golgi apparatus", "Lysosome", "Ribosome"],
          answerIndex: 1,
          explanation: "The Golgi apparatus modifies, sorts, and packages proteins received from the endoplasmic reticulum before they're sent to their destination.",
        },
        {
          prompt: "Moving a substance across a membrane against its concentration gradient requires:",
          choices: ["Diffusion", "Osmosis", "Active transport (ATP)", "Facilitated diffusion only"],
          answerIndex: 2,
          explanation: "Moving against a concentration gradient is not spontaneous and requires energy input from ATP — active transport.",
        },
        {
          prompt: "Which organelle is the main site of ATP production in a eukaryotic cell?",
          choices: ["Nucleus", "Mitochondria", "Ribosome", "Golgi apparatus"],
          answerIndex: 1,
          explanation: "Mitochondria carry out cellular respiration, producing the majority of a cell's ATP.",
        },
      ],
    },
    {
      slug: "cellular-energetics",
      title: "Lesson 3: Cellular Energetics",
      summary: "Photosynthesis, cellular respiration, and ATP.",
      notes: [
        {
          heading: "Key Concepts",
          bullets: [
            "Photosynthesis (in chloroplasts): light reactions capture energy as ATP/NADPH; the Calvin cycle uses that energy to build glucose from CO₂.",
            "Cellular respiration: glycolysis (cytoplasm) → Krebs cycle (mitochondrial matrix) → electron transport chain (inner membrane), yielding up to ~36-38 ATP per glucose.",
            "Fermentation lets cells make ATP without oxygen, regenerating NAD⁺ via lactic acid or alcohol production.",
          ],
        },
        {
          heading: "Quick Tips",
          bullets: [
            "Photosynthesis and respiration are roughly opposite processes: one stores energy in glucose, the other releases it.",
            "The electron transport chain needs oxygen as the final electron acceptor — no oxygen means no ETC, and cells fall back on fermentation.",
          ],
        },
      ],
      questions: [
        {
          prompt: "Where does the Calvin cycle occur, and what is its main product?",
          choices: ["Mitochondria; ATP", "Chloroplast stroma; glucose", "Cytoplasm; pyruvate", "Thylakoid membrane; oxygen"],
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
          prompt: "Without oxygen, a cell relies on fermentation mainly to regenerate:",
          choices: ["ATP directly in large amounts", "NAD⁺, so glycolysis can continue", "Glucose", "Oxygen"],
          answerIndex: 1,
          explanation: "Fermentation's main job is regenerating NAD⁺ so glycolysis can keep running and produce a small amount of ATP without oxygen.",
        },
        {
          prompt: "In photosynthesis, what do the light reactions produce that the Calvin cycle then uses?",
          choices: ["Glucose and oxygen", "ATP and NADPH", "CO₂ and water", "Pyruvate and lactic acid"],
          answerIndex: 1,
          explanation: "The light reactions convert light energy into chemical energy stored in ATP and NADPH, which power the Calvin cycle.",
        },
      ],
    },
    {
      slug: "genetics",
      title: "Lesson 4: Genetics",
      summary: "Mendelian genetics, meiosis, and the central dogma.",
      notes: [
        {
          heading: "Key Concepts",
          bullets: [
            "Mendel's laws: segregation (alleles separate during gamete formation) and independent assortment (genes for different traits sort independently).",
            "Meiosis produces four genetically unique haploid gametes through two divisions, including crossing over for genetic variation.",
            "Central dogma: DNA is transcribed into mRNA (in the nucleus), which is translated into protein by ribosomes (in the cytoplasm).",
          ],
        },
        {
          heading: "Quick Tips",
          bullets: [
            "Use a Punnett square to predict offspring ratios from a genetic cross — it's the fastest way to check your work.",
            "Crossing over happens during prophase I of meiosis and is a major source of genetic variation.",
          ],
        },
      ],
      questions: [
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
          prompt: "How many genetically unique gametes does one cell produce through meiosis?",
          choices: ["1", "2", "4", "8"],
          answerIndex: 2,
          explanation: "Meiosis involves two rounds of division, producing four haploid gametes, each genetically unique due to crossing over and independent assortment.",
        },
        {
          prompt: "Which process converts a DNA sequence into an mRNA molecule?",
          choices: ["Translation", "Transcription", "Replication", "Meiosis"],
          answerIndex: 1,
          explanation: "Transcription copies a gene's DNA sequence into a complementary mRNA strand in the nucleus.",
        },
      ],
    },
    {
      slug: "evolution",
      title: "Lesson 5: Evolution",
      summary: "Natural selection, evidence for evolution, and Hardy-Weinberg.",
      notes: [
        {
          heading: "Key Concepts",
          bullets: [
            "Natural selection requires variation, heritability, and differential reproductive success — individuals with favorable traits leave more offspring.",
            "Evidence for evolution includes the fossil record, homologous structures, molecular/DNA similarities, and biogeography.",
            "The Hardy-Weinberg equation (p² + 2pq + q² = 1) models allele frequencies in a non-evolving population; deviations signal evolution is occurring.",
          ],
        },
        {
          heading: "Quick Tips",
          bullets: [
            "Homologous structures (like a whale flipper and human arm) share a common ancestor; analogous structures just look alike from similar pressures.",
            "For Hardy-Weinberg to hold, a population needs no mutation, no migration, random mating, no selection, and a large population size.",
          ],
        },
      ],
      questions: [
        {
          prompt: "Natural selection acts on a population when individuals show which combination of traits?",
          choices: ["Variation only", "Heritability only", "Variation, heritability, and differential reproductive success", "Random mutation only"],
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
          prompt: "A whale's flipper and a human's arm sharing the same underlying bone structure is an example of:",
          choices: ["Analogous structures", "Homologous structures", "Convergent evolution only", "Vestigial structures"],
          answerIndex: 1,
          explanation: "Homologous structures share a common ancestral origin, even if their current function differs — strong evidence for evolution.",
        },
        {
          prompt: "Which condition would violate the assumptions of Hardy-Weinberg equilibrium?",
          choices: ["No mutation", "Random mating", "A very small population size", "No migration"],
          answerIndex: 2,
          explanation: "A small population size allows genetic drift to significantly change allele frequencies, violating Hardy-Weinberg's large-population assumption.",
        },
      ],
    },
    {
      slug: "ecology",
      title: "Lesson 6: Ecology",
      summary: "Population ecology, community interactions, and ecosystem dynamics.",
      notes: [
        {
          heading: "Key Concepts",
          bullets: [
            "Population ecology studies density, dispersion, and growth patterns (exponential vs. logistic, bounded by carrying capacity).",
            "Community interactions include competition, predation, and symbiosis, which shape species distribution and abundance.",
            "Energy and nutrients cycle through ecosystems via food webs and biogeochemical cycles (carbon, nitrogen, water).",
          ],
        },
        {
          heading: "Quick Tips",
          bullets: [
            "A food web is a more realistic picture of energy flow than a single food chain, since most organisms eat more than one thing.",
            "Competitive exclusion says two species can't occupy the exact same niche indefinitely — one will outcompete the other.",
          ],
        },
      ],
      questions: [
        {
          prompt: "A population's growth that slows as it approaches carrying capacity follows which model?",
          choices: ["Exponential growth", "Logistic growth", "Linear growth", "Static growth"],
          answerIndex: 1,
          explanation: "Logistic growth accounts for limiting resources, slowing growth as the population nears carrying capacity.",
        },
        {
          prompt: "Two species competing so intensely for the same resource that one is eventually eliminated illustrates:",
          choices: ["Mutualism", "Competitive exclusion", "Commensalism", "Parasitism"],
          answerIndex: 1,
          explanation: "The competitive exclusion principle states that two species cannot indefinitely occupy the same niche with limited resources.",
        },
        {
          prompt: "A food web differs from a food chain because it:",
          choices: [
            "Shows only producers",
            "Shows a single linear path of energy flow",
            "Shows multiple interconnected feeding relationships",
            "Excludes decomposers",
          ],
          answerIndex: 2,
          explanation: "A food web captures the many interconnected feeding relationships in an ecosystem, unlike a single-path food chain.",
        },
        {
          prompt: "Which cycle describes the movement of carbon between the atmosphere, organisms, and the ocean?",
          choices: ["Nitrogen cycle", "Water cycle", "Carbon cycle", "Phosphorus cycle"],
          answerIndex: 2,
          explanation: "The carbon cycle tracks carbon moving through photosynthesis, respiration, and exchange with the ocean and atmosphere.",
        },
      ],
    },
  ],
};

export default apBiology;
