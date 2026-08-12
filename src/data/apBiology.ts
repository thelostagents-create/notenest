import type { Topic } from "../types";

const apBiology: Topic = {
  slug: "ap-biology",
  title: "AP Biology",
  category: "AP Courses",
  subtitle: "8 units, 24 lessons: chemistry of life through ecology.",
  emoji: "🧬",
  accent: "#2b9b8f",
  units: [
    {
      slug: "chemistry-of-life",
      title: "Chemistry of Life",
      summary: "The chemical and molecular foundations of biological systems, from water's properties to enzyme-catalyzed reactions.",
      lessons: [
        {
          slug: "water-and-biological-systems",
          title: "Water and Biological Systems",
          summary: "Why water's polarity and hydrogen bonding make it essential to life, and how pH affects biological molecules.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "Water is a polar molecule with two covalent O–H bonds bonded asymmetrically, creating partial charges that let it hydrogen-bond with other water molecules and with polar or charged solutes.",
                "Cohesion (water-to-water hydrogen bonding) enables surface tension and the continuous water column pulled up xylem in plants; adhesion (water to other polar surfaces) contributes to capillary action.",
                "High specific heat means water absorbs or releases large amounts of heat with only small temperature changes, buffering organisms and aquatic environments against rapid temperature swings.",
                "Water is less dense as ice than as a liquid because hydrogen bonds lock molecules into an open lattice, so ice floats and insulates the water below it.",
                "pH = -log[H+]; each whole-number drop in pH represents a tenfold increase in H+ concentration, and most enzymes function only within a narrow pH range.",
                "Water's polarity makes it a universal solvent for ionic and polar (hydrophilic) substances, while nonpolar (hydrophobic) substances like lipids are excluded from it, driving the formation of membranes.",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "Remember 'like dissolves like': polar water dissolves polar/ionic solutes, while nonpolar molecules clump together to minimize contact with water (the hydrophobic effect).",
                "On the exam, connect water's specific heat to real examples: oceans moderating coastal climates, sweat cooling the body.",
                "Don't confuse cohesion (water to water) with adhesion (water to a different polar surface) — cohesion is water holding water.",
              ],
            },
          ],
          questions: [
            {
              prompt: "Why does ice float on liquid water?",
              choices: ["Ice molecules move faster than liquid water molecules", "Hydrogen bonds in ice form a rigid lattice that spaces molecules farther apart than in liquid water", "Ice contains less oxygen than liquid water", "Ice has stronger covalent bonds than liquid water"],
              answerIndex: 1,
              explanation: "In ice, every water molecule forms four stable hydrogen bonds in a hexagonal lattice that holds molecules farther apart than in liquid water, lowering ice's density so it floats.",
            },
            {
              prompt: "A solution's pH drops from 7 to 5. How much has the H+ concentration changed?",
              choices: ["Decreased by half", "Increased 2-fold", "Increased 100-fold", "Decreased 100-fold"],
              answerIndex: 2,
              explanation: "pH is a negative log scale, so each one-unit drop means a tenfold increase in H+ concentration; dropping two units (7 to 5) means a 10 x 10 = 100-fold increase.",
            },
            {
              prompt: "Which property of water allows trees to pull water upward through narrow xylem vessels against gravity?",
              choices: ["Cohesion and adhesion from hydrogen bonding", "High specific heat", "Low density as a solid", "High heat of vaporization"],
              answerIndex: 0,
              explanation: "Cohesion (water molecules hydrogen-bonding to each other) keeps the water column continuous, while adhesion (water bonding to xylem walls) helps counteract gravity, together enabling transpirational pull.",
            },
            {
              prompt: "A nonpolar lipid placed in water will tend to:",
              choices: ["Form hydrogen bonds with water molecules", "Dissolve evenly throughout the water", "Increase water's pH", "Aggregate away from water molecules, minimizing disruption of water's hydrogen-bond network"],
              answerIndex: 3,
              explanation: "Because lipids cannot hydrogen-bond with water, water molecules exclude them, and the lipids cluster together to minimize their disruption of water's hydrogen-bond network — the hydrophobic effect that helps drive membrane formation.",
            },
          ],
        },
        {
          slug: "biological-macromolecules",
          title: "Biological Macromolecules",
          summary: "The structure, monomers, and functions of carbohydrates, lipids, proteins, and nucleic acids.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "Carbohydrates are built from monosaccharide monomers (like glucose) joined by glycosidic bonds; they function in short-term energy storage (starch, glycogen) and structure (cellulose, chitin).",
                "Lipids (fats, phospholipids, steroids) are largely nonpolar hydrocarbons; triglycerides store energy densely, and phospholipids' amphipathic structure (polar head, nonpolar tails) makes them the backbone of cell membranes.",
                "Proteins are polymers of amino acids linked by peptide bonds; their function depends on four levels of structure — primary (sequence), secondary (helices/sheets from H-bonding), tertiary (3D folding from R-group interactions), and quaternary (multiple polypeptide subunits).",
                "Nucleic acids (DNA, RNA) are polymers of nucleotides (sugar + phosphate + nitrogenous base) that store and transmit genetic information; DNA is double-stranded and stable, RNA is typically single-stranded and more reactive.",
                "Monomers join into polymers through dehydration synthesis (removing a water molecule to form a bond), and polymers break apart via hydrolysis (adding water to break a bond).",
                "A protein's specific 3D shape determines its function; changing even one amino acid (as in sickle-cell hemoglobin) can drastically alter that shape and function.",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "Remember 'dehydration builds, hydrolysis breaks' — dehydration synthesis releases water and forms bonds, hydrolysis adds water and breaks bonds.",
                "If a question mentions a densely-packed energy-storage molecule, think lipid; if it mentions quick, mobilizable energy, think carbohydrate.",
                "Link structure to function: an enzyme's shape (tertiary/quaternary structure) is why heat or pH extremes that denature it destroy its activity.",
              ],
            },
          ],
          questions: [
            {
              prompt: "Which bond forms when two monosaccharides join and a water molecule is released?",
              choices: ["Peptide bond", "Glycosidic bond", "Phosphodiester bond", "Hydrogen bond"],
              answerIndex: 1,
              explanation: "Monosaccharides link via glycosidic bonds during dehydration synthesis, releasing water as the bond forms — the basis of disaccharides and polysaccharides.",
            },
            {
              prompt: "A phospholipid's arrangement in water, with polar heads facing out and nonpolar tails facing in, is due to:",
              choices: ["Its amphipathic structure", "Peptide bonding between phospholipids", "Its high specific heat", "Ionic bonding with water"],
              answerIndex: 0,
              explanation: "Phospholipids have a hydrophilic head and hydrophobic tails (amphipathic), so in water they self-assemble into bilayers with heads facing the aqueous environment and tails shielded inside.",
            },
            {
              prompt: "Sickle-cell disease results from a single amino acid substitution that changes hemoglobin's shape. This best illustrates the link between:",
              choices: ["Carbohydrate structure and cell signaling", "Quaternary structure and DNA replication", "Primary structure (the amino acid sequence) and protein function", "Nucleotide sequence and lipid structure"],
              answerIndex: 2,
              explanation: "The amino acid sequence (primary structure) determines how a protein folds into higher-order structures; one substitution changed hemoglobin's folding and behavior, showing how primary structure dictates function.",
            },
            {
              prompt: "Which macromolecule class includes monomers distinguished by a nitrogenous base, and polymerizes to store hereditary information?",
              choices: ["Carbohydrates", "Lipids", "Proteins", "Nucleic acids"],
              answerIndex: 3,
              explanation: "Nucleic acids are built from nucleotide monomers (sugar, phosphate, nitrogenous base); their base sequence encodes and transmits genetic information.",
            },
          ],
        },
        {
          slug: "enzymes-and-activation-energy",
          title: "Enzymes and Activation Energy",
          summary: "How enzymes speed up biological reactions, and how environmental factors and inhibitors affect their activity.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "Enzymes are typically proteins that act as biological catalysts, lowering the activation energy required for a reaction without being consumed or altering the reaction's overall energy change.",
                "The induced-fit model describes how an enzyme's active site changes shape slightly as it binds its specific substrate, improving catalysis compared to a rigid 'lock and key.'",
                "Enzyme activity depends on temperature and pH; each enzyme has an optimum range, and values outside it can denature the enzyme, permanently altering its active site shape.",
                "Competitive inhibitors bind the active site directly, blocking substrate access; noncompetitive (allosteric) inhibitors bind elsewhere on the enzyme, changing its shape so the active site no longer functions well.",
                "Many metabolic pathways use feedback inhibition, in which the pathway's end product binds an allosteric site on an earlier enzyme to shut down its own overproduction.",
                "Cofactors (inorganic ions) and coenzymes (organic molecules, often vitamin-derived) assist many enzymes and are required for normal catalytic activity.",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "Rate-vs-substrate-concentration graphs that plateau indicate enzyme saturation — adding more substrate won't speed the reaction because all active sites are occupied.",
                "To distinguish inhibitor types on a graph: competitive inhibition can be overcome by adding excess substrate; noncompetitive inhibition cannot, since it doesn't block the active site directly.",
                "Activation energy is lowered by the enzyme, but the free energy change (delta G) of the reaction stays the same — enzymes speed reactions up, they don't make unfavorable reactions favorable.",
              ],
            },
          ],
          questions: [
            {
              prompt: "An enzyme-catalyzed reaction reaches a maximum rate even as substrate concentration keeps increasing. What best explains this plateau?",
              choices: ["The enzyme has been denatured", "The reaction has reached chemical equilibrium", "Activation energy has increased", "All available active sites are saturated with substrate"],
              answerIndex: 3,
              explanation: "Once every enzyme molecule's active site is occupied at any given moment, adding more substrate can't increase the rate further — the enzyme is saturated, producing the characteristic plateau.",
            },
            {
              prompt: "Adding a large excess of substrate restores an inhibited enzyme's activity almost to normal. This inhibitor is most likely:",
              choices: ["A noncompetitive inhibitor", "A competitive inhibitor", "A feedback activator", "A coenzyme"],
              answerIndex: 1,
              explanation: "Competitive inhibitors compete with substrate for the same active site, so flooding the system with substrate outcompetes the inhibitor and restores activity — noncompetitive inhibitors, which bind elsewhere, aren't overcome this way.",
            },
            {
              prompt: "In a feedback-inhibited metabolic pathway, the final product binds an enzyme early in the pathway. What is the direct effect?",
              choices: ["It increases the enzyme's affinity for substrate", "It acts as a competitive inhibitor at the active site", "It binds an allosteric site and reduces the enzyme's activity", "It permanently denatures the enzyme"],
              answerIndex: 2,
              explanation: "Feedback inhibition typically works allosterically: the end product binds a site other than the active site, changing the enzyme's shape and reducing its activity so the pathway slows once enough product has accumulated.",
            },
            {
              prompt: "Raising the temperature well above an enzyme's optimum usually decreases reaction rate because:",
              choices: ["The enzyme's tertiary structure is disrupted, changing its active site shape", "Substrate molecules move too slowly to collide with the enzyme", "Activation energy increases sharply", "The enzyme becomes a competitive inhibitor of itself"],
              answerIndex: 0,
              explanation: "Excess heat breaks the hydrogen bonds and other interactions holding an enzyme's tertiary structure together, denaturing it and altering the active site so it can no longer bind substrate effectively.",
            },
          ],
        },
      ],
    },
    {
      slug: "cell-structure-and-function",
      title: "Cell Structure and Function",
      summary: "How prokaryotic and eukaryotic cells are organized, how membranes control transport, and why compartmentalization matters.",
      lessons: [
        {
          slug: "prokaryotic-and-eukaryotic-cells",
          title: "Prokaryotic and Eukaryotic Cells",
          summary: "Comparing the structural organization of prokaryotic and eukaryotic cells and their organelles.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "Prokaryotic cells (bacteria, archaea) lack a membrane-bound nucleus and most organelles; their DNA is a single circular chromosome located in the nucleoid region, and they may carry additional genes on plasmids.",
                "Eukaryotic cells have a true nucleus enclosing linear DNA wrapped around histones, plus membrane-bound organelles including mitochondria, ER, and Golgi apparatus that compartmentalize cellular functions.",
                "The nucleus houses DNA and is the site of transcription; the nucleolus within it assembles ribosomal subunits.",
                "Mitochondria have their own circular DNA and double membranes, and generate ATP through cellular respiration; chloroplasts (in plants and algae) similarly have their own DNA and carry out photosynthesis.",
                "The endomembrane system — nuclear envelope, ER, Golgi apparatus, lysosomes, vesicles, and plasma membrane — works together to synthesize, modify, and transport proteins and lipids.",
                "Ribosomes, found free in the cytoplasm or bound to the rough ER, are the universal site of protein synthesis in both prokaryotes and eukaryotes.",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "If a question emphasizes 'no nucleus' or 'no membrane-bound organelles,' the answer is prokaryotic; both cell types have ribosomes, so ribosome presence alone can't distinguish them.",
                "Rough ER = ribosomes attached = proteins; smooth ER = no ribosomes = lipids and detoxification.",
                "Remember organelle order for a secreted protein: ribosome (rough ER) then ER lumen then transport vesicle then Golgi apparatus then secretory vesicle then plasma membrane.",
              ],
            },
          ],
          questions: [
            {
              prompt: "Which structure is found in prokaryotic cells but functions differently than the analogous eukaryotic structure, since it is not membrane-bound?",
              choices: ["Nucleoid region containing DNA", "Golgi apparatus", "Rough endoplasmic reticulum", "Nuclear envelope"],
              answerIndex: 0,
              explanation: "Prokaryotes lack a true nucleus; instead their DNA is concentrated in an unbound region called the nucleoid, not enclosed by a membrane the way eukaryotic DNA is in the nucleus.",
            },
            {
              prompt: "A cell biologist finds an organelle with its own circular DNA and a double membrane. This organelle is most likely:",
              choices: ["Golgi apparatus", "Lysosome", "Mitochondrion", "Rough ER"],
              answerIndex: 2,
              explanation: "Mitochondria (and chloroplasts) retain their own small circular DNA and double membranes, remnants of their proposed origin as engulfed prokaryotes.",
            },
            {
              prompt: "A secreted protein is synthesized on the rough ER. Which pathway correctly traces its route out of the cell?",
              choices: ["Golgi apparatus then rough ER then plasma membrane", "Rough ER then Golgi apparatus then secretory vesicle then plasma membrane", "Nucleus then mitochondria then plasma membrane", "Ribosome then lysosome then nucleus"],
              answerIndex: 1,
              explanation: "Proteins destined for secretion are made on the rough ER, modified and packaged in the Golgi apparatus, then carried in a secretory vesicle that fuses with the plasma membrane to release its contents.",
            },
            {
              prompt: "What is a key structural difference between eukaryotic and prokaryotic DNA organization?",
              choices: ["Only eukaryotic DNA is made of nucleotides", "Only prokaryotic cells have ribosomes to translate their DNA's products", "Prokaryotic DNA is found in mitochondria only", "Eukaryotic DNA is linear and wrapped around histones, while prokaryotic DNA is typically a single circular chromosome without histones"],
              answerIndex: 3,
              explanation: "Eukaryotic chromosomes are linear and packaged with histone proteins into chromatin, while most prokaryotic genomes are a single circular chromosome free in the cytoplasm without histones.",
            },
          ],
        },
        {
          slug: "cell-membranes-and-transport",
          title: "Cell Membranes and Transport",
          summary: "The fluid mosaic model of the plasma membrane and the mechanisms cells use to move materials across it.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "The fluid mosaic model describes the plasma membrane as a phospholipid bilayer embedded with proteins, cholesterol, and carbohydrates that can move laterally, giving the membrane both structure and fluidity.",
                "Passive transport (diffusion, facilitated diffusion, osmosis) moves substances down their concentration gradient and requires no ATP; active transport moves substances against their gradient and requires ATP.",
                "Osmosis is the diffusion of water across a selectively permeable membrane; cells in a hypertonic solution lose water and shrink, cells in a hypotonic solution gain water and may lyse, and isotonic solutions cause no net water movement.",
                "Facilitated diffusion uses channel or carrier proteins to move polar or charged substances (like ions or glucose) across the membrane, still moving down the gradient without ATP.",
                "Active transport pumps, like the sodium-potassium pump, use ATP hydrolysis to move ions against their gradients, establishing electrochemical gradients essential for nerve impulses and secondary active transport.",
                "Bulk transport of large molecules or particles occurs via endocytosis (phagocytosis, pinocytosis, receptor-mediated) and exocytosis, both of which require energy and involve vesicle formation or fusion.",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "'Facilitated' always means passive (no ATP) — don't confuse it with active transport just because it uses a protein.",
                "To predict water movement, remember water moves toward the side with more solute (lower water concentration) — a cell in a hypertonic environment loses water.",
                "Cotransport/secondary active transport (e.g., sodium-glucose symport) doesn't use ATP directly — it exploits a gradient that active transport built earlier.",
              ],
            },
          ],
          questions: [
            {
              prompt: "A plant cell placed in a hypertonic solution will most likely:",
              choices: ["Swell and burst", "Show no change in size", "Lose water and undergo plasmolysis", "Actively pump water in using ATP"],
              answerIndex: 2,
              explanation: "In a hypertonic solution, water leaves the cell by osmosis because solute concentration is higher outside; in plant cells this causes the membrane to pull away from the cell wall, called plasmolysis.",
            },
            {
              prompt: "Which best describes facilitated diffusion?",
              choices: ["Movement of a solute against its gradient using ATP", "Movement of a solute down its gradient through a membrane protein, without ATP", "Movement of water only, through channel proteins", "Bulk transport of large particles via vesicles"],
              answerIndex: 1,
              explanation: "Facilitated diffusion still moves substances down their concentration gradient (no energy needed) but requires a channel or carrier protein because the solute can't easily cross the lipid bilayer alone.",
            },
            {
              prompt: "The sodium-potassium pump moves 3 Na+ out and 2 K+ into a cell, both against their concentration gradients. What powers this movement?",
              choices: ["Hydrolysis of ATP", "Facilitated diffusion", "Osmosis", "Simple diffusion"],
              answerIndex: 0,
              explanation: "Moving ions against their gradients is energetically unfavorable, so the pump couples this movement to ATP hydrolysis — a defining feature of primary active transport.",
            },
            {
              prompt: "Which membrane component primarily provides the 'fluid' part of the fluid mosaic model at moderate temperatures?",
              choices: ["Integral proteins locking the membrane in place", "Cholesterol rigidly fixing phospholipids together", "The extracellular matrix", "Phospholipids able to move laterally within the bilayer, giving the membrane fluidity"],
              answerIndex: 3,
              explanation: "Phospholipids are not covalently bonded to each other, so they drift laterally within their layer, giving the membrane fluidity; cholesterol actually moderates this fluidity rather than eliminating it.",
            },
          ],
        },
        {
          slug: "compartmentalization-and-endosymbiosis",
          title: "Compartmentalization and Endosymbiosis",
          summary: "Why internal membranes and cell size limits shape eukaryotic cell structure, and the evidence for the endosymbiotic origin of organelles.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "As a cell grows larger, its volume increases faster than its surface area, so the surface-area-to-volume ratio shrinks — limiting a cell's ability to exchange materials fast enough to support its volume, which constrains cell size.",
                "Small cells or cells with elongated or folded shapes (like microvilli) maintain a higher surface-area-to-volume ratio, supporting more efficient diffusion and exchange.",
                "Internal membranes create compartments (organelles) that let eukaryotic cells carry out incompatible chemical reactions simultaneously and concentrate enzymes and reactants for greater efficiency.",
                "The endosymbiotic theory proposes that mitochondria and chloroplasts originated as free-living prokaryotes engulfed by an ancestral host cell, forming a mutually beneficial relationship.",
                "Evidence for endosymbiosis includes mitochondria and chloroplasts having their own circular DNA (similar to bacterial DNA), their own ribosomes (similar in size to bacterial ribosomes), double membranes, and the ability to replicate by binary fission independent of the cell cycle.",
                "Compartmentalization also enables regulation — for example, digestive enzymes are sequestered in lysosomes so they don't damage the rest of the cell.",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "If given side lengths, calculate surface-area-to-volume ratio directly — smaller cubes always have a higher ratio than larger ones, which is why cells don't just keep growing.",
                "On endosymbiosis questions, look for the buzzwords 'own DNA,' 'own ribosomes,' 'double membrane,' and 'binary fission' as the strongest evidence.",
                "Remember the reason compartments matter isn't just storage — it's letting opposite reactions (like building vs. breaking down molecules) happen in the same cell without interfering.",
              ],
            },
          ],
          questions: [
            {
              prompt: "A cube-shaped cell doubles each side length. What happens to its surface-area-to-volume ratio?",
              choices: ["It doubles", "It stays the same", "It decreases", "It quadruples"],
              answerIndex: 2,
              explanation: "Surface area scales with the square of side length while volume scales with the cube, so as a cell grows, volume outpaces surface area and the surface-area-to-volume ratio decreases — a key limit on cell size.",
            },
            {
              prompt: "Which piece of evidence most directly supports the endosymbiotic origin of mitochondria?",
              choices: ["Mitochondria are found in nearly all eukaryotic cells", "Mitochondria have their own circular DNA and ribosomes resembling those of bacteria", "Mitochondria produce ATP through cellular respiration", "Mitochondria are visible under a light microscope"],
              answerIndex: 1,
              explanation: "Mitochondria's own circular, bacteria-like DNA and bacteria-sized ribosomes — distinct from the cell's nuclear genome and cytoplasmic ribosomes — strongly indicate they descend from free-living prokaryotes.",
            },
            {
              prompt: "Intestinal cells have highly folded surfaces called microvilli. What is the main functional advantage of this shape?",
              choices: ["It decreases the cell's volume", "It reduces the number of membrane proteins needed", "It slows diffusion to protect the cell", "It increases surface area relative to volume without a proportional increase in cell volume, improving absorption"],
              answerIndex: 3,
              explanation: "Folding the membrane into microvilli dramatically increases surface area without increasing cell volume much, raising the surface-area-to-volume ratio and improving the rate of nutrient absorption.",
            },
            {
              prompt: "Why is compartmentalization by internal membranes advantageous to a large eukaryotic cell?",
              choices: ["It allows incompatible reactions to occur simultaneously in separate, specialized environments", "It decreases the total number of proteins the cell needs", "It eliminates the need for a plasma membrane", "It prevents the cell from needing mitochondria"],
              answerIndex: 0,
              explanation: "By enclosing different reactions in separate organelles, a cell can run processes that would otherwise interfere with each other (like digestion in lysosomes vs. synthesis in the ER) at the same time, increasing overall efficiency.",
            },
          ],
        },
      ],
    },
    {
      slug: "cellular-energetics",
      title: "Cellular Energetics",
      summary: "How cells capture, store, and release energy through coupled reactions, cellular respiration, and photosynthesis.",
      lessons: [
        {
          slug: "energy-coupling-and-atp",
          title: "Energy Coupling and ATP",
          summary: "How cells use ATP hydrolysis to power unfavorable reactions and maintain metabolic homeostasis.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "ATP (adenosine triphosphate) stores usable chemical energy in the bonds between its three phosphate groups; hydrolyzing the terminal phosphate releases energy that cells couple to endergonic (energy-requiring) reactions.",
                "Exergonic reactions release free energy (negative delta G) and occur spontaneously; endergonic reactions require energy input (positive delta G) and are non-spontaneous without coupling.",
                "Energy coupling links an exergonic reaction (like ATP hydrolysis) to an endergonic one, often through phosphorylation of a substrate, making the combined reaction spontaneous overall.",
                "Metabolic pathways are organized as catabolic (breaking molecules down, releasing energy, e.g., cellular respiration) or anabolic (building molecules up, requiring energy, e.g., protein synthesis).",
                "Cells regulate metabolism through allosteric enzyme regulation and feedback inhibition, ensuring ATP and other resources are produced only as needed.",
                "The ATP/ADP cycle is continuous: cells constantly regenerate ATP from ADP and inorganic phosphate using energy captured from respiration or photosynthesis, since ATP isn't stored in large quantities.",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "Negative delta G equals energy released equals spontaneous equals exergonic; positive delta G equals energy required equals nonspontaneous equals endergonic. Memorize this pairing cold.",
                "On free-energy diagrams, activation energy is the 'hill' the reaction must climb regardless of whether the overall reaction is exergonic or endergonic — enzymes lower that hill, not the delta G.",
                "Look for phosphorylation as the textbook example of energy coupling — a phosphate group transferred from ATP often 'activates' the receiving molecule for its next step.",
              ],
            },
          ],
          questions: [
            {
              prompt: "Which statement correctly describes an exergonic reaction?",
              choices: ["It requires a net input of energy and has a positive delta G", "It only occurs during photosynthesis", "It releases energy and has a negative delta G", "It always requires ATP hydrolysis to proceed"],
              answerIndex: 2,
              explanation: "Exergonic reactions release free energy as they proceed, meaning products have less free energy than reactants, giving a negative delta G — this is why they can occur spontaneously.",
            },
            {
              prompt: "A cell couples ATP hydrolysis to an endergonic reaction. What is the most likely outcome?",
              choices: ["The combined reaction becomes energetically favorable overall", "The endergonic reaction becomes impossible", "ATP is regenerated without using energy", "The reaction's activation energy is eliminated"],
              answerIndex: 0,
              explanation: "Coupling harnesses the large negative delta G of ATP hydrolysis to offset the positive delta G of an endergonic reaction, making their sum negative and the overall process spontaneous.",
            },
            {
              prompt: "Which best distinguishes catabolic from anabolic pathways?",
              choices: ["Catabolic pathways build complex molecules; anabolic pathways break them down", "Only catabolic pathways use enzymes", "Anabolic pathways occur only in mitochondria", "Catabolic pathways break down molecules and release energy; anabolic pathways build molecules and consume energy"],
              answerIndex: 3,
              explanation: "Catabolism (like cellular respiration breaking down glucose) releases stored energy, while anabolism (like protein synthesis) uses energy to build larger molecules from smaller ones.",
            },
            {
              prompt: "Why can't cells rely on a large stockpile of stored ATP the way they store glucose as glycogen?",
              choices: ["ATP is too large a molecule to store", "ATP is continuously hydrolyzed and regenerated to meet immediate energy demands rather than banked long-term", "ATP cannot be produced by mitochondria", "Cells have no use for ATP outside of respiration"],
              answerIndex: 1,
              explanation: "ATP functions as a short-term energy currency that's constantly cycled between ATP and ADP as needed, unlike glucose or fat, which are stable, energy-dense molecules suited for longer-term storage.",
            },
          ],
        },
        {
          slug: "cellular-respiration",
          title: "Cellular Respiration",
          summary: "The stages of aerobic respiration — glycolysis, the Krebs cycle, and the electron transport chain — and the alternative of fermentation.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "Glycolysis occurs in the cytoplasm and splits one glucose into two pyruvate molecules, netting 2 ATP (substrate-level phosphorylation) and 2 NADH; it doesn't require oxygen.",
                "Pyruvate is converted to acetyl-CoA and enters the Krebs (citric acid) cycle in the mitochondrial matrix, which releases CO2 and generates NADH, FADH2, and a small amount of ATP per turn.",
                "The electron transport chain (ETC), embedded in the inner mitochondrial membrane, passes electrons from NADH and FADH2 through protein complexes, pumping H+ into the intermembrane space and creating an electrochemical gradient.",
                "Chemiosmosis uses that H+ gradient: as protons flow back through ATP synthase, its rotation drives the phosphorylation of ADP into ATP — the source of most ATP from aerobic respiration.",
                "Oxygen serves as the final electron acceptor in the ETC, forming water; without oxygen, the ETC backs up and NADH can't be reoxidized to NAD+, halting the Krebs cycle and much of glycolysis.",
                "Without oxygen, cells rely on fermentation (lactic acid or alcoholic) to regenerate NAD+ from NADH so glycolysis can continue producing a small amount of ATP.",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "Track where each stage happens: glycolysis = cytoplasm; Krebs cycle = mitochondrial matrix; ETC/chemiosmosis = inner mitochondrial membrane.",
                "Remember that oxygen doesn't participate directly in the Krebs cycle — its role is at the very end of the ETC, but without it, everything upstream stalls too.",
                "Fermentation's purpose isn't to make lots of ATP — it's to regenerate NAD+ so glycolysis (the only ATP-producing step that doesn't need O2) can keep running.",
              ],
            },
          ],
          questions: [
            {
              prompt: "Which stage of cellular respiration occurs in the cytoplasm and does not require oxygen to proceed?",
              choices: ["Krebs cycle", "Electron transport chain", "Glycolysis", "Chemiosmosis"],
              answerIndex: 2,
              explanation: "Glycolysis takes place in the cytoplasm and splits glucose into pyruvate using only substrate-level phosphorylation, so it can proceed with or without oxygen present.",
            },
            {
              prompt: "ATP synthase produces ATP as protons flow through it. What directly powers this process?",
              choices: ["Direct transfer of a phosphate group from glucose", "The electrochemical (proton) gradient built by the electron transport chain", "Oxidation of pyruvate in the cytoplasm", "Substrate-level phosphorylation in the Krebs cycle"],
              answerIndex: 1,
              explanation: "Chemiosmosis harnesses the potential energy of the H+ gradient created when the ETC pumps protons into the intermembrane space; as protons flow back through ATP synthase, that flow drives ATP production.",
            },
            {
              prompt: "If a cell is deprived of oxygen, which process is directly halted first?",
              choices: ["Glycolysis", "DNA replication", "Active transport across the plasma membrane", "The electron transport chain, since it has no final electron acceptor to accept incoming electrons"],
              answerIndex: 3,
              explanation: "Oxygen is the final electron acceptor of the ETC; without it, electrons can't be passed along the chain, so the ETC stops immediately, which then prevents NADH from being reoxidized and backs up the Krebs cycle.",
            },
            {
              prompt: "What is the primary purpose of fermentation in a muscle cell running low on oxygen?",
              choices: ["To regenerate NAD+ so glycolysis can continue producing ATP", "To produce large amounts of ATP directly", "To convert pyruvate into glucose", "To pump protons across the mitochondrial membrane"],
              answerIndex: 0,
              explanation: "Fermentation doesn't generate much ATP itself; its key role is recycling NADH back to NAD+, which glycolysis needs as an electron acceptor to keep running and producing its modest ATP yield anaerobically.",
            },
          ],
        },
        {
          slug: "photosynthesis",
          title: "Photosynthesis",
          summary: "How the light reactions and Calvin cycle work together to convert light energy into chemical energy stored in glucose.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "The light reactions occur in the thylakoid membranes of the chloroplast: chlorophyll absorbs light energy, exciting electrons that pass through an electron transport chain, driving chemiosmosis to produce ATP and reducing NADP+ to NADPH.",
                "Photosystem II splits water molecules (photolysis) to replace lost electrons, releasing O2 as a byproduct — this is the source of atmospheric oxygen from photosynthesis.",
                "The Calvin cycle occurs in the stroma and uses the ATP and NADPH from the light reactions to fix CO2 into organic molecules, ultimately producing G3P, which can be used to build glucose.",
                "Rubisco is the enzyme that fixes CO2 onto RuBP in the first step of the Calvin cycle; it's abundant but relatively slow and can also bind O2 instead (photorespiration), which wastes energy.",
                "C4 and CAM plants have evolved adaptations to minimize photorespiration in hot or dry conditions: C4 plants spatially separate initial CO2 fixation from the Calvin cycle, while CAM plants temporally separate them by fixing CO2 at night.",
                "Photosynthesis and cellular respiration are complementary: photosynthesis's reactants (CO2, H2O) are respiration's products, and vice versa, linking the carbon and oxygen cycles of the biosphere.",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "Location matters: light reactions = thylakoid membrane; Calvin cycle = stroma. Don't mix these up on FRQs.",
                "The Calvin cycle is sometimes called the 'dark reactions,' but that's misleading — it doesn't require darkness, just the ATP/NADPH the light reactions supply.",
                "If a question mentions plants in hot, dry climates keeping stomata closed during the day, think CAM (nighttime CO2 fixation) to reduce water loss.",
              ],
            },
          ],
          questions: [
            {
              prompt: "Which molecule is split during the light reactions to replace electrons lost from photosystem II, releasing oxygen gas?",
              choices: ["Glucose", "Carbon dioxide", "Water", "ATP"],
              answerIndex: 2,
              explanation: "Photosystem II uses light energy to split water molecules (photolysis), replacing electrons it loses to the electron transport chain and releasing O2 as a byproduct — the source of the oxygen we breathe.",
            },
            {
              prompt: "What are the direct products of the light reactions that the Calvin cycle depends on?",
              choices: ["ATP and NADPH", "Glucose and oxygen", "CO2 and water", "Pyruvate and NADH"],
              answerIndex: 0,
              explanation: "The light reactions convert light energy into the chemical energy of ATP and the reducing power of NADPH, both of which power CO2 fixation and reduction in the Calvin cycle.",
            },
            {
              prompt: "Rubisco sometimes binds O2 instead of CO2, a process called photorespiration that wastes energy. Which adaptation helps C4 plants minimize this problem?",
              choices: ["Fixing CO2 at night when stomata are open", "Spatially separating initial CO2 fixation from the Calvin cycle in different cell types", "Eliminating the need for rubisco entirely", "Performing the Calvin cycle in the thylakoid membrane"],
              answerIndex: 1,
              explanation: "C4 plants first fix CO2 into a four-carbon compound in mesophyll cells, then shuttle it to bundle-sheath cells where the Calvin cycle runs — this keeps CO2 concentrated near rubisco and reduces wasteful binding of O2.",
            },
            {
              prompt: "How are photosynthesis and cellular respiration complementary processes in the biosphere?",
              choices: ["Both occur only in plant cells", "Both require oxygen as a final electron acceptor", "Neither process involves the electron transport chain", "The products of one process are largely the reactants of the other"],
              answerIndex: 3,
              explanation: "Photosynthesis consumes CO2 and water to produce glucose and O2, while cellular respiration consumes glucose and O2 to produce CO2 and water — each process supplies the raw materials the other consumes, cycling matter through ecosystems.",
            },
          ],
        },
      ],
    },
    {
      slug: "cell-communication-and-cell-cycle",
      title: "Cell Communication and Cell Cycle",
      summary: "How cells send and interpret chemical signals, and how the cell cycle is regulated to control growth and division.",
      lessons: [
        {
          slug: "cell-signaling-and-signal-transduction",
          title: "Cell Signaling and Signal Transduction",
          summary: "How cells receive external signals and convert them into an internal response through signal transduction pathways.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "Cell communication begins when a signaling cell releases a ligand that binds a specific receptor on or in a target cell; signals can act locally (paracrine, synaptic) or over long distances (endocrine hormones).",
                "Receptors are typically proteins with a shape specific to their ligand; major types include G-protein-coupled receptors (GPCRs), receptor tyrosine kinases (RTKs), and intracellular receptors for lipid-soluble signals like steroid hormones.",
                "Signal transduction is a cascade of molecular changes, often involving protein kinases that phosphorylate (activate or deactivate) downstream proteins in sequence, amplifying the original signal many-fold.",
                "Second messengers such as cyclic AMP (cAMP) and Ca2+ ions relay and amplify a signal from the receptor to target proteins inside the cell without leaving the cytoplasm.",
                "The cellular response to a signal can include changes in gene expression, enzyme activity, or cytoskeletal rearrangement, and the same ligand can trigger different responses in different cell types depending on which receptors and pathways they express.",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "Each step of a phosphorylation cascade amplifies the signal — one activated receptor can ultimately switch on thousands of downstream proteins, so small signals cause big responses.",
                "Lipid-soluble hormones (like steroids) cross the plasma membrane directly and bind intracellular receptors; water-soluble hormones need a surface receptor because they can't cross the membrane.",
              ],
            },
          ],
          questions: [
            {
              prompt: "A hydrophobic steroid hormone can bind a receptor located inside the target cell rather than on its surface because:",
              choices: ["It is too large to bind a surface receptor", "It is degraded by surface receptors", "It can diffuse directly through the phospholipid bilayer", "It only works during mitosis"],
              answerIndex: 2,
              explanation: "Because steroid hormones are lipid-soluble, they pass directly through the nonpolar interior of the plasma membrane and bind receptors inside the cytoplasm or nucleus, unlike water-soluble signals that need a surface receptor.",
            },
            {
              prompt: "Why does a signal transduction pathway typically involve multiple sequential phosphorylation steps rather than a single step?",
              choices: ["Each step amplifies the original signal, producing a large response from a small stimulus", "Phosphorylation steps slow the response down for safety", "Only the final protein in the chain needs to be a protein", "Multiple steps ensure the ligand is degraded quickly"],
              answerIndex: 0,
              explanation: "Each activated kinase in a cascade can phosphorylate many downstream targets, so the signal is amplified at every step — a single bound ligand can ultimately affect thousands of molecules inside the cell.",
            },
            {
              prompt: "Two different cell types are exposed to the same hormone but respond in completely different ways. What best explains this?",
              choices: ["The hormone chemically changes between cell types", "The cells have different receptors or downstream signaling proteins that produce different responses", "Only one of the cell types actually received the signal", "Hormones always produce identical responses in every cell"],
              answerIndex: 1,
              explanation: "A given ligand can trigger very different outcomes depending on which specific receptors and signal transduction machinery a target cell expresses — the signal is the same, but the cell's internal 'wiring' differs.",
            },
          ],
        },
        {
          slug: "cell-cycle-and-mitosis",
          title: "The Cell Cycle and Mitosis",
          summary: "The phases of the cell cycle and how mitosis produces two genetically identical daughter cells.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "The cell cycle consists of interphase (G1, S, G2), during which the cell grows and replicates its DNA, followed by the mitotic (M) phase, which includes mitosis and cytokinesis.",
                "During S phase, each chromosome is replicated, producing two identical sister chromatids joined at the centromere; the cell now has double the DNA content but the same chromosome number.",
                "Mitosis proceeds through prophase (chromosomes condense, spindle forms), metaphase (chromosomes align at the metaphase plate), anaphase (sister chromatids separate and move to opposite poles), and telophase (nuclear envelopes reform).",
                "Cytokinesis divides the cytoplasm, producing two genetically identical diploid daughter cells; in animal cells this occurs via a cleavage furrow, while plant cells form a cell plate.",
                "Mitosis maintains chromosome number across generations of cells (important for growth and repair), in contrast to meiosis, which halves chromosome number to produce gametes.",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "Remember the order with 'PMAT' (Prophase, Metaphase, Anaphase, Telophase), and that sister chromatids only separate in anaphase — before that they're still one duplicated chromosome.",
                "If asked about DNA content across the cycle, it doubles during S phase and halves again only when sister chromatids separate in anaphase, not at cytokinesis.",
              ],
            },
          ],
          questions: [
            {
              prompt: "At which point in the cell cycle does DNA content per cell double?",
              choices: ["G1 phase", "M phase", "G2 phase", "S phase"],
              answerIndex: 3,
              explanation: "S phase is when each chromosome is replicated, producing sister chromatids and doubling the cell's total DNA content before division; G1 and G2 are gap phases without DNA replication.",
            },
            {
              prompt: "Sister chromatids separate and move toward opposite poles of the cell during which phase of mitosis?",
              choices: ["Prophase", "Anaphase", "Metaphase", "Telophase"],
              answerIndex: 1,
              explanation: "Anaphase is defined by the splitting of the centromere and separation of sister chromatids, which are then pulled to opposite poles by the shortening spindle fibers.",
            },
            {
              prompt: "How does mitotic cell division differ from meiotic cell division in terms of chromosome number?",
              choices: ["Mitosis halves chromosome number while meiosis keeps it constant", "Both processes double chromosome number", "Mitosis preserves the parent cell's chromosome number in both daughter cells, while meiosis halves it to form haploid gametes", "Neither process involves chromosome separation"],
              answerIndex: 2,
              explanation: "Mitosis is for growth and repair, producing two diploid daughter cells genetically identical to the parent; meiosis is for gamete formation and reduces chromosome number by half, producing haploid cells.",
            },
          ],
        },
        {
          slug: "cell-cycle-regulation-and-cancer",
          title: "Regulation of the Cell Cycle and Cancer",
          summary: "How checkpoints and regulatory proteins control the cell cycle, and what happens when that control breaks down in cancer.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "The cell cycle is controlled by internal checkpoints (G1, G2, and the spindle assembly checkpoint in M phase) that verify conditions like DNA integrity and proper chromosome attachment before allowing the cycle to proceed.",
                "Cyclins and cyclin-dependent kinases (CDKs) form complexes whose rising and falling levels drive the cell through checkpoints; a CDK is only active when bound to its specific cyclin.",
                "Proto-oncogenes code for proteins that normally promote cell division; when mutated into oncogenes, they can become permanently active, driving uncontrolled division.",
                "Tumor suppressor genes (like p53) normally halt the cycle or trigger apoptosis in damaged cells; loss-of-function mutations in these genes remove that brake on division.",
                "Cancer typically results from an accumulation of mutations in both proto-oncogenes and tumor suppressor genes, allowing cells to bypass checkpoints, divide uncontrollably, and potentially invade other tissues (metastasis).",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "Think of proto-oncogenes as a 'stuck accelerator' (gain-of-function mutation) and tumor suppressors as 'failed brakes' (loss-of-function mutation) — both push the cell cycle forward inappropriately.",
                "p53 is the most commonly mutated gene in human cancers — remember it as the cell's 'guardian' that checks DNA damage and can trigger apoptosis if repair fails.",
              ],
            },
          ],
          questions: [
            {
              prompt: "A cell's G1 checkpoint detects damaged DNA. What is the normal outcome?",
              choices: ["The cell proceeds to S phase regardless", "The cell skips mitosis entirely but still divides", "The cycle halts until the damage is repaired or the cell undergoes apoptosis", "Cyclin levels increase permanently"],
              answerIndex: 2,
              explanation: "Checkpoints act as quality-control points; detecting damaged DNA at G1 normally arrests the cycle, giving repair machinery time to fix the damage — if it can't be repaired, the cell may undergo apoptosis instead of dividing.",
            },
            {
              prompt: "A mutation converts a proto-oncogene into an oncogene. What is the most likely functional effect?",
              choices: ["Loss of the gene's product entirely", "Improved DNA repair capability", "Increased apoptosis of damaged cells", "A gain-of-function that promotes cell division even without normal growth signals"],
              answerIndex: 3,
              explanation: "Oncogenes typically arise from gain-of-function mutations that make a growth-promoting protein overactive or always 'on,' pushing the cell to divide even in the absence of the normal signal to do so.",
            },
            {
              prompt: "Both copies of the p53 tumor suppressor gene are inactivated in a cell. What is the most likely consequence?",
              choices: ["The cell loses a key brake on the cycle and is more likely to divide despite DNA damage", "The cell cycle checkpoints function more strictly than normal", "The cell can no longer replicate its DNA at all", "Cyclin-CDK complexes can no longer form"],
              answerIndex: 0,
              explanation: "p53 normally halts the cycle or triggers apoptosis in response to DNA damage; losing both functional copies removes this safeguard, allowing damaged cells to continue dividing — a major step toward cancer.",
            },
          ],
        },
      ],
    },
    {
      slug: "heredity",
      title: "Heredity",
      summary: "How meiosis generates genetic variation and how traits are inherited according to Mendelian and non-Mendelian patterns.",
      lessons: [
        {
          slug: "meiosis-and-genetic-variation",
          title: "Meiosis and Genetic Variation",
          summary: "How meiosis produces haploid gametes and generates genetic variation through crossing over and independent assortment.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "Meiosis consists of two successive divisions (meiosis I and II) following one round of DNA replication, producing four haploid daughter cells from one diploid parent cell.",
                "In meiosis I, homologous chromosome pairs separate (reducing chromosome number by half); in meiosis II, sister chromatids separate, similar to mitosis.",
                "Crossing over occurs during prophase I when homologous chromosomes pair up (synapsis) and exchange segments of DNA, creating new allele combinations on each chromosome.",
                "Independent assortment occurs as homologous pairs line up randomly at the metaphase I plate, so each gamete gets a random mix of maternal and paternal chromosomes — for humans, this alone allows over 8 million possible chromosome combinations.",
                "Nondisjunction — the failure of chromosomes or chromatids to separate properly — produces gametes with abnormal chromosome numbers, which can lead to conditions like trisomy (e.g., Down syndrome, trisomy 21).",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "Homologous chromosomes separate in meiosis I ('reductional division'); sister chromatids separate in meiosis II ('equational division,' just like mitosis).",
                "Crossing over and independent assortment are the two main sources of genetic variation from meiosis — a third source, random fertilization, adds even more variation when gametes combine.",
              ],
            },
          ],
          questions: [
            {
              prompt: "During which stage of meiosis do homologous chromosomes separate from each other?",
              choices: ["Prophase I", "Anaphase I", "Anaphase II", "Telophase II"],
              answerIndex: 1,
              explanation: "Anaphase I is when homologous chromosome pairs are pulled apart to opposite poles, reducing the chromosome number by half; sister chromatids don't separate until anaphase II.",
            },
            {
              prompt: "A gamete-producing cell undergoes crossing over during prophase I. What is the direct genetic consequence?",
              choices: ["The total number of chromosomes doubles", "Homologous chromosomes fuse permanently", "Nothing changes since crossing over only affects mitosis", "Segments of DNA are exchanged between homologous chromosomes, creating new allele combinations"],
              answerIndex: 3,
              explanation: "Crossing over physically exchanges corresponding segments between a maternal and paternal homolog, so each resulting chromatid carries a novel mix of alleles not present on either original chromosome.",
            },
            {
              prompt: "Which of the following best explains why nondisjunction during meiosis I can result in a gamete with an extra chromosome?",
              choices: ["Homologous chromosomes fail to separate and both go to the same pole", "Sister chromatids fail to separate during mitosis", "DNA replication is skipped entirely", "Crossing over adds an extra chromosome"],
              answerIndex: 0,
              explanation: "Nondisjunction in meiosis I occurs when a homologous pair fails to separate, sending both chromosomes to the same pole; the resulting gametes end up with either one extra or one missing chromosome.",
            },
          ],
        },
        {
          slug: "mendelian-genetics-and-probability",
          title: "Mendelian Genetics and Probability",
          summary: "Using Mendel's laws and probability rules to predict the outcomes of genetic crosses.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "Mendel's law of segregation states that the two alleles for a gene separate during gamete formation, so each gamete carries only one allele for each gene.",
                "Mendel's law of independent assortment states that genes for different traits (located on different chromosomes, or far apart on the same one) are inherited independently of one another.",
                "A Punnett square predicts the genotype and phenotype ratios of offspring from a cross by combining all possible allele combinations from each parent's gametes.",
                "The rule of multiplication (probability of independent events both occurring equals the product of their individual probabilities) and the rule of addition (probability of either of two mutually exclusive events equals the sum of their probabilities) let geneticists calculate probabilities for multi-gene crosses without drawing a full Punnett square.",
                "A testcross — crossing an individual of unknown genotype with a homozygous recessive individual — reveals whether the unknown individual is homozygous dominant or heterozygous, based on the phenotype ratio of offspring.",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "For a dihybrid cross (AaBb x AaBb) expect the classic 9:3:3:1 phenotypic ratio if the genes assort independently — memorize this ratio as your default check.",
                "When a question asks for the probability of several traits appearing together, multiply the individual probabilities rather than drawing a 16-box Punnett square — it's faster and less error-prone.",
              ],
            },
          ],
          questions: [
            {
              prompt: "A heterozygous (Aa) individual is crossed with a homozygous recessive (aa) individual. What phenotype ratio is expected in the offspring?",
              choices: ["3:1", "1:2:1", "1:1", "9:3:3:1"],
              answerIndex: 2,
              explanation: "A testcross between Aa and aa produces offspring in a 1 Aa : 1 aa genotype ratio, which corresponds to a 1:1 phenotype ratio between dominant and recessive traits.",
            },
            {
              prompt: "What is the probability that two parents, both heterozygous (Aa) for a trait, produce a homozygous recessive (aa) child?",
              choices: ["1/4", "1/2", "3/4", "1"],
              answerIndex: 0,
              explanation: "Using the rule of multiplication, each parent has a 1/2 chance of passing the recessive allele, so 1/2 x 1/2 = 1/4 chance of an aa offspring — consistent with the 1:2:1 genotype ratio from an Aa x Aa cross.",
            },
            {
              prompt: "A plant with unknown genotype for flower color shows the dominant purple phenotype. To determine if it is homozygous or heterozygous, a geneticist should:",
              choices: ["Cross it with another purple plant of unknown genotype", "Sequence its entire genome", "Simply observe its phenotype more closely", "Perform a testcross with a homozygous recessive (white) plant"],
              answerIndex: 3,
              explanation: "A testcross with a homozygous recessive individual reveals the unknown genotype: if all offspring are purple, the unknown parent is homozygous dominant; if about half are white, it's heterozygous.",
            },
          ],
        },
        {
          slug: "non-mendelian-inheritance",
          title: "Non-Mendelian Inheritance",
          summary: "Inheritance patterns that go beyond simple dominant/recessive traits, including codominance, linkage, and sex linkage.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "Incomplete dominance produces a heterozygous phenotype that is an intermediate blend of the two homozygous phenotypes (e.g., red x white snapdragons produce pink); codominance produces a heterozygous phenotype in which both alleles are fully and separately expressed (e.g., AB blood type).",
                "Polygenic traits (like human height or skin color) are influenced by multiple genes, each contributing a small additive effect, producing a continuous range of phenotypes rather than discrete categories.",
                "Genes located close together on the same chromosome are genetically linked and tend to be inherited together, violating independent assortment unless separated by crossing over; the farther apart two genes are, the higher their recombination frequency.",
                "Sex-linked traits are carried on the X or Y chromosome; X-linked recessive traits (like red-green color blindness or hemophilia) appear more often in males, since males have only one X chromosome and no second allele to mask a recessive one.",
                "Epistasis occurs when one gene's expression masks or modifies the phenotypic expression of a different gene, producing phenotype ratios that deviate from a standard dihybrid cross.",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "Don't confuse incomplete dominance (a blended new phenotype) with codominance (both original phenotypes show up together, side by side).",
                "For sex-linked problems, track the X and Y chromosomes explicitly rather than using standard letters alone — it's the easiest way to avoid mixing up male and female inheritance patterns.",
              ],
            },
          ],
          questions: [
            {
              prompt: "A red snapdragon (RR) is crossed with a white snapdragon (rr), producing all pink offspring. This is an example of:",
              choices: ["Codominance, since both parental colors appear together", "Epistasis affecting flower pigment genes", "Incomplete dominance, since the heterozygote shows a blended intermediate phenotype", "Sex-linked inheritance of flower color"],
              answerIndex: 2,
              explanation: "Because the heterozygous offspring show a blended, intermediate phenotype (pink) rather than either parental color, this is incomplete dominance rather than codominance, where both traits would appear simultaneously and distinctly.",
            },
            {
              prompt: "A colorblind son is born to a mother who is a carrier and a father with normal vision. Why are X-linked recessive disorders like this more common in males?",
              choices: ["Y chromosomes carry a second copy of the disease allele", "Females cannot inherit X-linked traits at all", "Males have two copies of every X-linked gene", "Males are hemizygous for X-linked genes, so a single recessive allele isn't masked by a second, dominant allele"],
              answerIndex: 3,
              explanation: "Because males are hemizygous for X-linked genes (only one X), a single recessive allele on their X chromosome is expressed with no second allele to mask it; females need two recessive copies to show the trait.",
            },
            {
              prompt: "Two genes are located very close together on the same chromosome. How does this affect their inheritance compared to Mendel's law of independent assortment?",
              choices: ["They tend to be inherited together more often than predicted by independent assortment, unless separated by crossing over", "They will always assort completely independently, just like genes on different chromosomes", "They cannot be inherited together under any circumstances", "They will always produce a standard 9:3:3:1 ratio in a dihybrid cross"],
              answerIndex: 0,
              explanation: "Genes that are physically linked on the same chromosome don't assort independently — they tend to travel together into gametes unless crossing over separates them, producing recombination frequencies that reflect their physical distance apart.",
            },
          ],
        },
      ],
    },
    {
      slug: "gene-expression-and-regulation",
      title: "Gene Expression and Regulation",
      summary: "How genetic information flows from DNA to protein, how gene expression is regulated, and how mutations and biotechnology tools alter genetic information.",
      lessons: [
        {
          slug: "dna-replication",
          title: "DNA Replication",
          summary: "The semiconservative mechanism and enzymes that accurately copy a cell's DNA before division.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "DNA replication is semiconservative: each new double helix contains one original (template) strand and one newly synthesized strand, as demonstrated by the Meselson-Stahl experiment.",
                "Helicase unwinds and separates the double helix at the origin of replication, creating a replication fork; single-strand binding proteins stabilize the separated strands.",
                "DNA polymerase synthesizes new DNA by adding nucleotides only in the 5' to 3' direction, reading the template strand 3' to 5'; it also proofreads and corrects most errors as it goes.",
                "Because the two template strands are antiparallel, the leading strand is synthesized continuously toward the replication fork, while the lagging strand is synthesized discontinuously as Okazaki fragments, later joined by DNA ligase.",
                "Primase must first lay down a short RNA primer to give DNA polymerase a free 3' end to extend from, since DNA polymerase cannot start a new strand from scratch.",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "Remember 'leading is easy, lagging lags behind' — the leading strand is made in one continuous piece, while the lagging strand needs multiple primers and fragments stitched together by ligase.",
                "DNA polymerase's proofreading function is why replication has a very low error rate — without it, mutation rates would be far higher.",
              ],
            },
          ],
          questions: [
            {
              prompt: "Which enzyme is responsible for joining Okazaki fragments on the lagging strand into a continuous strand of DNA?",
              choices: ["Helicase", "DNA polymerase", "Primase", "DNA ligase"],
              answerIndex: 3,
              explanation: "DNA ligase seals the gaps between adjacent Okazaki fragments on the lagging strand, forming a continuous sugar-phosphate backbone after the RNA primers are replaced with DNA.",
            },
            {
              prompt: "Why is DNA replication described as semiconservative?",
              choices: ["Each new molecule contains one original strand and one newly made strand", "Both new molecules are made entirely of new nucleotides", "One daughter molecule is entirely new DNA and one is entirely old DNA", "DNA replication only conserves half of the genetic sequence"],
              answerIndex: 0,
              explanation: "The Meselson-Stahl experiment showed that each resulting double helix is a hybrid of one old (template) strand and one newly synthesized strand — hence 'semi'-conservative, as opposed to fully conservative or fully dispersive models.",
            },
            {
              prompt: "Why does the lagging strand require primase to act repeatedly during replication, unlike the leading strand?",
              choices: ["Because helicase only unwinds the lagging strand template", "Because the lagging strand doesn't require any primers", "Because DNA polymerase can only extend an existing 3' end, so each discontinuous fragment on the lagging strand needs its own new primer", "Because DNA ligase synthesizes primers on the lagging strand"],
              answerIndex: 2,
              explanation: "DNA polymerase can only add nucleotides to an existing 3' end, so as the fork opens and exposes new template on the lagging strand, primase must lay down a fresh RNA primer for each Okazaki fragment, unlike the single primer needed on the continuously-synthesized leading strand.",
            },
          ],
        },
        {
          slug: "transcription-and-translation",
          title: "Transcription and Translation",
          summary: "How the central dogma converts DNA's genetic code into functional proteins through transcription and translation.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "Transcription occurs in the nucleus (eukaryotes): RNA polymerase unwinds DNA and synthesizes a complementary pre-mRNA strand from the template strand, reading 3' to 5' and building the new strand 5' to 3'.",
                "Eukaryotic pre-mRNA is processed before leaving the nucleus: a 5' cap and poly-A tail are added, and introns are spliced out, leaving only exons in the mature mRNA.",
                "Translation occurs at ribosomes: mRNA codons (three-nucleotide sequences) are read in the 5' to 3' direction, each specifying a particular amino acid (or a start/stop signal) according to the genetic code.",
                "tRNA molecules, each carrying a specific amino acid and a complementary anticodon, pair with mRNA codons at the ribosome, allowing amino acids to be added to the growing polypeptide chain in the correct order.",
                "The genetic code is redundant (multiple codons can specify the same amino acid) but unambiguous (each codon specifies only one amino acid), and it is nearly universal across all living organisms.",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "Remember the direction rules: mRNA is synthesized 5' to 3' during transcription, and ribosomes read mRNA 5' to 3' during translation — this consistency is worth memorizing cold.",
                "AUG is both the start codon (coding for methionine) and the reading-frame marker; a stop codon doesn't code for an amino acid at all — it ends translation.",
              ],
            },
          ],
          questions: [
            {
              prompt: "Which process directly produces mRNA from a DNA template?",
              choices: ["Translation", "Transcription", "Replication", "Splicing"],
              answerIndex: 1,
              explanation: "Transcription is the process by which RNA polymerase reads a DNA template strand and synthesizes a complementary pre-mRNA molecule.",
            },
            {
              prompt: "A mature eukaryotic mRNA is ready for translation after which processing steps have occurred?",
              choices: ["Only replication of the DNA template", "Addition of a poly-A tail only", "Removal of exons and retention of introns", "Addition of a 5' cap and poly-A tail, and removal of introns via splicing"],
              answerIndex: 3,
              explanation: "Eukaryotic pre-mRNA must be capped, polyadenylated, and spliced (introns removed, exons joined) before it exits the nucleus as mature mRNA ready for translation.",
            },
            {
              prompt: "During translation, what is the role of tRNA?",
              choices: ["It serves as the template read by RNA polymerase", "It processes pre-mRNA by removing introns", "It carries a specific amino acid and pairs its anticodon with the mRNA codon at the ribosome", "It catalyzes DNA replication at the origin"],
              answerIndex: 2,
              explanation: "Each tRNA is charged with a specific amino acid and has an anticodon complementary to an mRNA codon; correct codon-anticodon pairing at the ribosome ensures amino acids are added in the sequence specified by the mRNA.",
            },
          ],
        },
        {
          slug: "gene-regulation-mutations-and-biotechnology",
          title: "Gene Regulation, Mutations, and Biotechnology",
          summary: "How cells turn genes on and off, how mutations alter DNA sequences, and how biotechnology tools manipulate genetic material.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "In prokaryotes, operons (like the lac operon) group genes with related functions under one promoter, allowing coordinated regulation; a repressor protein can block transcription until an inducer (like lactose) removes it.",
                "In eukaryotes, gene regulation occurs at multiple levels: chromatin structure (histone modification, DNA methylation can silence genes epigenetically), transcription (via transcription factors and enhancers), post-transcriptional processing, and protein degradation.",
                "Point mutations change a single nucleotide and may be silent (no amino acid change, due to code redundancy), missense (different amino acid), or nonsense (premature stop codon); each has very different effects on protein function.",
                "Frameshift mutations, caused by insertions or deletions not in multiples of three, shift the reading frame downstream of the mutation, typically producing a completely different and usually nonfunctional protein.",
                "PCR (polymerase chain reaction) amplifies a specific DNA sequence exponentially using primers, a heat-stable DNA polymerase, and repeated heating/cooling cycles, generating enough DNA for analysis from a tiny starting sample.",
                "Gel electrophoresis separates DNA fragments by size using an electric field (smaller fragments move farther through the gel), commonly used with restriction enzymes to compare DNA samples or after PCR to visualize the amplified product.",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "Frameshift mutations are almost always more disruptive than point substitutions, because they alter every codon downstream of the mutation, not just one.",
                "In lac operon logic, remember: the repressor is normally bound and blocking transcription; lactose (via allolactose) inactivates the repressor, allowing transcription — the operon is 'off unless induced.'",
                "On gel electrophoresis diagrams, remember DNA runs from negative to positive electrode, and smaller/shorter fragments travel farther in a given time.",
              ],
            },
          ],
          questions: [
            {
              prompt: "In the lac operon, what happens when lactose is present in the environment?",
              choices: ["Lactose inactivates the repressor, allowing RNA polymerase to transcribe the lac genes", "Lactose binds the promoter directly and blocks transcription", "Lactose has no effect on the operon's activity", "Lactose permanently deletes the repressor gene"],
              answerIndex: 0,
              explanation: "When lactose is present, a metabolite of it (allolactose) binds the repressor protein, changing its shape so it can no longer bind the operator; this allows RNA polymerase to transcribe the lac operon's genes.",
            },
            {
              prompt: "A single nucleotide substitution changes a codon from one that codes for an amino acid to a premature stop codon. This is an example of:",
              choices: ["A silent mutation", "A frameshift mutation", "A nonsense mutation", "A missense mutation"],
              answerIndex: 2,
              explanation: "A nonsense mutation creates a premature stop codon, truncating the protein early in translation — this typically causes a nonfunctional protein, unlike missense (different amino acid) or silent (no amino acid change) mutations.",
            },
            {
              prompt: "Why does a single-nucleotide insertion typically cause more severe protein changes than a single-nucleotide substitution?",
              choices: ["Insertions always create a new stop codon immediately", "Insertions can't affect protein sequence at all", "Insertions add extra amino acids without disrupting the rest of the sequence", "Insertions shift the reading frame, changing every codon downstream of the mutation"],
              answerIndex: 3,
              explanation: "Because the genetic code is read in triplets, inserting or deleting a number of nucleotides not divisible by three shifts the reading frame for everything downstream, typically scrambling the rest of the protein sequence.",
            },
            {
              prompt: "In gel electrophoresis, DNA fragments are separated primarily based on:",
              choices: ["Their nucleotide sequence", "Their size, with smaller fragments migrating farther through the gel", "Their overall charge per fragment, which varies by sequence", "The temperature of the gel"],
              answerIndex: 1,
              explanation: "DNA is uniformly negatively charged due to its phosphate backbone, so under an electric field all fragments move toward the positive electrode; smaller fragments slip through the gel matrix faster and travel farther in a given time, separating fragments by size.",
            },
          ],
        },
      ],
    },
    {
      slug: "natural-selection",
      title: "Natural Selection",
      summary: "The evidence, mechanisms, and population-level dynamics that drive evolutionary change and the origin of new species.",
      lessons: [
        {
          slug: "evidence-and-mechanisms-of-evolution",
          title: "Evidence and Mechanisms of Evolution",
          summary: "The multiple lines of evidence for evolution and the four mechanisms that can change allele frequencies in a population.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "Evidence for evolution includes the fossil record (showing change over time and transitional forms), comparative anatomy (homologous vs. analogous structures), molecular biology (DNA/protein sequence similarities reflecting shared ancestry), and biogeography (species distribution patterns explained by common ancestry and continental drift).",
                "Homologous structures (like the forelimbs of mammals) share an underlying anatomical similarity from common ancestry despite different functions; analogous structures (like insect and bird wings) look or function similarly due to convergent evolution, not shared ancestry.",
                "Four mechanisms can change allele frequencies in a population: natural selection, genetic drift, gene flow (migration), and mutation.",
                "Natural selection requires heritable variation and differential reproductive success; genetic drift is random change in allele frequencies, more pronounced in small populations (including bottleneck and founder effects).",
                "Gene flow (movement of alleles between populations via migration) tends to reduce genetic differences between populations, while mutation is the ultimate source of new genetic variation.",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "Homologous equals shared ancestry (even if functions differ); analogous equals shared function/appearance from independent evolution (convergent evolution), not shared ancestry.",
                "Genetic drift has the strongest effect in small populations — remember 'bottleneck' (a sudden population crash) and 'founder effect' (a small group starting a new population) as the two classic examples.",
              ],
            },
          ],
          questions: [
            {
              prompt: "A small group of birds is blown to a remote island and starts a new population there, with allele frequencies that differ from the mainland by chance. This illustrates:",
              choices: ["Gene flow", "Natural selection", "The founder effect", "Convergent evolution"],
              answerIndex: 2,
              explanation: "The founder effect occurs when a small subset of a population establishes a new population, so by chance its allele frequencies may differ substantially from the original population — a form of genetic drift.",
            },
            {
              prompt: "Bat wings and human arms share the same underlying bone arrangement despite very different functions. This is evidence of:",
              choices: ["Homologous structures inherited from a common ancestor", "Analogous structures from convergent evolution", "Vestigial structures with no evolutionary history", "Biogeographic distribution patterns"],
              answerIndex: 0,
              explanation: "Even though bat wings and human arms serve different functions, their shared skeletal layout reflects descent from a common ancestor — the hallmark of homologous structures, a strong line of evidence for evolution.",
            },
            {
              prompt: "Which of the four mechanisms of evolutionary change is the only one that can introduce entirely new alleles into a population's gene pool?",
              choices: ["Genetic drift", "Gene flow", "Natural selection", "Mutation"],
              answerIndex: 3,
              explanation: "Mutation is the ultimate source of new genetic variation; genetic drift, gene flow, and natural selection all act on existing variation but cannot, by themselves, create a brand-new allele.",
            },
          ],
        },
        {
          slug: "population-genetics-and-hardy-weinberg",
          title: "Population Genetics and Hardy-Weinberg Equilibrium",
          summary: "Using the Hardy-Weinberg equation to determine whether a population's allele frequencies are changing over time.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "The Hardy-Weinberg principle describes a theoretical, non-evolving population in which allele and genotype frequencies remain constant from generation to generation.",
                "The equations p + q = 1 (allele frequencies) and p^2 + 2pq + q^2 = 1 (genotype frequencies) let biologists calculate expected genotype frequencies from allele frequencies, or vice versa, assuming the population is at equilibrium.",
                "Five conditions must hold for a population to stay at Hardy-Weinberg equilibrium: no mutation, no gene flow, random mating, no natural selection, and a very large (effectively infinite) population size.",
                "If a real population's observed genotype frequencies differ from Hardy-Weinberg predictions, that deviation is evidence that one or more evolutionary mechanisms (selection, drift, migration, non-random mating, mutation) are acting on it.",
                "Hardy-Weinberg is most useful as a null hypothesis: it doesn't describe how populations actually behave, but gives a baseline to detect and measure evolutionary change against.",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "p^2 is homozygous dominant, 2pq is heterozygous, q^2 is homozygous recessive — start Hardy-Weinberg problems from the trait you can count directly, usually the recessive phenotype (q^2), since it's unambiguous.",
                "If a population's observed frequencies don't match the Hardy-Weinberg prediction, evolution is likely occurring — don't just assume a math error before considering biological causes.",
              ],
            },
          ],
          questions: [
            {
              prompt: "In a population, 16% of individuals show a homozygous recessive phenotype. Assuming Hardy-Weinberg equilibrium, what is the frequency of the recessive allele (q)?",
              choices: ["0.16", "0.4", "0.84", "0.6"],
              answerIndex: 1,
              explanation: "Since q^2 = 0.16, taking the square root gives q = 0.4 — the frequency of the recessive allele in the population.",
            },
            {
              prompt: "Which of the following would NOT need to be true for a population to remain in Hardy-Weinberg equilibrium?",
              choices: ["No net mutation is occurring", "Mating is random with respect to the trait", "The population is very large", "Natural selection is actively favoring certain phenotypes"],
              answerIndex: 3,
              explanation: "Hardy-Weinberg equilibrium specifically requires no natural selection; if selection is favoring certain phenotypes, allele frequencies will change across generations, violating equilibrium.",
            },
            {
              prompt: "A biologist finds a population's observed genotype frequencies differ significantly from Hardy-Weinberg predictions. What is the best interpretation?",
              choices: ["One or more evolutionary mechanisms (like selection or drift) are likely acting on the population", "The species must be extinct", "The population definitely has no mutations", "Hardy-Weinberg cannot apply to any real population, so the data is meaningless"],
              answerIndex: 0,
              explanation: "Because Hardy-Weinberg describes a theoretical non-evolving population, any real deviation from its predictions signals that a mechanism like selection, drift, migration, non-random mating, or mutation is actively changing allele frequencies.",
            },
          ],
        },
        {
          slug: "speciation-and-phylogeny",
          title: "Speciation and Phylogeny",
          summary: "How reproductive isolation leads to new species, and how phylogenetic trees represent evolutionary relationships.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "A species is generally defined (biological species concept) as a population whose members can interbreed and produce fertile offspring in nature but are reproductively isolated from other such groups.",
                "Prezygotic barriers (habitat, temporal, behavioral, mechanical, gametic isolation) prevent mating or fertilization from occurring; postzygotic barriers (reduced hybrid viability, reduced hybrid fertility) act after fertilization to prevent gene flow.",
                "Allopatric speciation occurs when a physical barrier geographically separates populations, which then diverge independently; sympatric speciation occurs without geographic separation, often through mechanisms like polyploidy in plants.",
                "Phylogenetic trees and cladograms represent hypothesized evolutionary relationships, with each branch point (node) representing a common ancestor shared by the lineages that diverge from it.",
                "Shared derived characteristics (synapomorphies) — traits present in a group and its common ancestor but not in outgroups — are used to build cladograms, grouping organisms by their most recent common ancestry rather than superficial similarity.",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "To read a cladogram, the order of branching (nodes) shows relative relatedness, not necessarily how much a lineage has visually changed — a heavily modified organism can still be closely related to a simple-looking one.",
                "Distinguish reproductive isolation types by timing: prezygotic barriers act before a zygote can form; postzygotic barriers act after fertilization, on the resulting hybrid.",
              ],
            },
          ],
          questions: [
            {
              prompt: "Two frog species breed at different times of year, preventing them from mating with each other even though they live in the same pond. This is an example of:",
              choices: ["A postzygotic barrier", "Gametic isolation", "Temporal isolation, a prezygotic barrier", "Hybrid inviability"],
              answerIndex: 2,
              explanation: "Temporal isolation is a prezygotic barrier in which populations breed at different times, preventing mating (and thus fertilization) from occurring at all — distinct from postzygotic barriers, which act after a hybrid zygote has already formed.",
            },
            {
              prompt: "A mountain range rises and splits a single population of squirrels into two groups that can no longer interbreed. Over time they diverge into separate species. This is an example of:",
              choices: ["Sympatric speciation", "Allopatric speciation, caused by geographic isolation", "Postzygotic isolation only", "Convergent evolution"],
              answerIndex: 1,
              explanation: "Allopatric speciation occurs when a physical geographic barrier separates populations, preventing gene flow and allowing each isolated group to accumulate independent genetic changes until they can no longer interbreed.",
            },
            {
              prompt: "On a cladogram, what does a branch point (node) represent?",
              choices: ["The point at which two lineages diverged from a common ancestor", "The exact date a species went extinct", "A trait shared by all organisms on the tree", "A mutation event unrelated to ancestry"],
              answerIndex: 0,
              explanation: "Each node on a cladogram marks a hypothesized common ancestor from which two or more descendant lineages diverge — the branching pattern reflects relative relatedness based on shared derived traits.",
            },
          ],
        },
      ],
    },
    {
      slug: "ecology",
      title: "Ecology",
      summary: "How populations grow, how species interact within communities, and how energy and matter move through ecosystems.",
      lessons: [
        {
          slug: "population-ecology",
          title: "Population Ecology",
          summary: "The patterns and mathematical models that describe how populations grow and are limited by their environment.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "Population density (individuals per unit area) and dispersion pattern (clumped, uniform, or random) describe how a population is distributed in space, often reflecting resource distribution and social behavior.",
                "Exponential growth (J-shaped curve) occurs when resources are unlimited, with growth rate proportional to population size; it's rarely sustained long in nature but describes populations colonizing a new habitat.",
                "Logistic growth (S-shaped curve) accounts for limiting resources: growth slows as population size (N) approaches the environment's carrying capacity (K), where births and deaths roughly balance.",
                "Density-dependent factors (like competition, disease, and predation) intensify as population density increases, while density-independent factors (like natural disasters or extreme weather) affect a population regardless of its size.",
                "Life history strategies fall on a spectrum from r-selected species (rapid reproduction, many offspring, little parental care, thrive in unstable environments) to K-selected species (slower reproduction, fewer offspring, more parental care, thrive near carrying capacity in stable environments).",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "The logistic growth equation approaches zero growth rate as N approaches K — remember growth rate peaks at intermediate population sizes, not at K itself.",
                "To tell r- vs. K-selected species apart quickly, think 'quantity vs. quality' — r-selected species (like insects) prioritize offspring quantity, K-selected species (like elephants) prioritize offspring quality/survival.",
              ],
            },
          ],
          questions: [
            {
              prompt: "Which population growth model produces an S-shaped curve as the population approaches carrying capacity?",
              choices: ["Logistic growth", "Exponential growth", "Linear growth", "Static growth"],
              answerIndex: 0,
              explanation: "Logistic growth incorporates a carrying capacity (K), so growth rate slows as the population nears K, producing the characteristic S-shaped curve rather than the unchecked J-shape of exponential growth.",
            },
            {
              prompt: "A dense population of deer experiences a disease outbreak that spreads faster because individuals are crowded together. This is an example of:",
              choices: ["A density-independent factor", "The founder effect", "Genetic drift", "A density-dependent factor"],
              answerIndex: 3,
              explanation: "Disease transmission that intensifies with population density is a density-dependent factor — its impact scales with how crowded the population is, unlike density-independent factors such as a wildfire or storm.",
            },
            {
              prompt: "Which set of traits best describes a K-selected species?",
              choices: ["Many offspring, minimal parental care, rapid maturation", "Few offspring, extensive parental care, slower maturation, thrives near carrying capacity", "Explosive population growth in unstable environments", "No parental investment in offspring survival"],
              answerIndex: 1,
              explanation: "K-selected species invest heavily in fewer offspring, providing more parental care and taking longer to mature — a strategy favored in stable environments near carrying capacity, as opposed to the high-quantity, low-investment strategy of r-selected species.",
            },
          ],
        },
        {
          slug: "community-ecology",
          title: "Community Ecology",
          summary: "The types of species interactions that structure ecological communities and drive patterns of succession.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "A species' niche describes its full role in the ecosystem, including resource use, habitat, and interactions with other species; the competitive exclusion principle states two species cannot indefinitely occupy the exact same niche in the same place.",
                "Interspecific interactions include competition (both species harmed), predation (one benefits, one harmed), herbivory (one benefits, one harmed), and symbiosis, which includes mutualism (both benefit), commensalism (one benefits, one unaffected), and parasitism (one benefits, one harmed).",
                "Keystone species have a disproportionately large effect on community structure relative to their abundance; removing a keystone species (like a sea otter controlling sea urchin populations) can cause dramatic community-wide changes.",
                "Ecological succession describes the predictable change in community composition over time: primary succession begins on bare substrate with no existing soil or organisms (e.g., after a volcanic eruption), while secondary succession begins in a disturbed area that already has soil (e.g., after a fire).",
                "Species diversity within a community is often measured by both species richness (the number of different species present) and species evenness (how evenly individuals are distributed among those species).",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "Match the interaction to its benefit pattern: competition (both harmed), predation and parasitism (one benefits, one harmed), mutualism (both benefit), commensalism (one benefits, one unaffected) — memorize this shorthand for quick recall.",
                "Primary succession always starts from bare rock/no soil (slow, starts with lichens/pioneer species); secondary succession starts with soil already present, so it proceeds faster.",
              ],
            },
          ],
          questions: [
            {
              prompt: "A species of sea star preys on mussels that would otherwise dominate and outcompete other species in a tide pool. Removing the sea star causes a dramatic loss of community diversity. This sea star is best described as a:",
              choices: ["Pioneer species", "r-selected species", "Keystone species", "K-selected species"],
              answerIndex: 2,
              explanation: "A keystone species has an outsized effect on its community relative to its abundance; by controlling a dominant competitor (the mussels), the sea star maintains diversity that would collapse without it.",
            },
            {
              prompt: "Which type of interaction benefits one species while having no significant effect on the other?",
              choices: ["Commensalism", "Mutualism", "Competition", "Predation"],
              answerIndex: 0,
              explanation: "Commensalism is an interaction where one species benefits (like a barnacle gaining a stable surface on a whale) while the other is essentially unaffected — distinct from mutualism, where both species benefit.",
            },
            {
              prompt: "A forest is clear-cut by logging, but the soil remains intact and undisturbed. What type of ecological succession will most likely follow?",
              choices: ["Primary succession, starting from bare rock", "No succession, since the forest is destroyed permanently", "Primary succession, requiring pioneer species like lichens first", "Secondary succession, since existing soil allows recovery to proceed faster"],
              answerIndex: 3,
              explanation: "Because the soil (and its seed bank, nutrients, and organisms) remains intact after logging, the area undergoes secondary succession, which proceeds faster than primary succession since it doesn't need to start with soil-building pioneer species.",
            },
          ],
        },
        {
          slug: "ecosystems-and-global-change",
          title: "Ecosystems and Global Change",
          summary: "How energy flows and matter cycles through ecosystems, and how human activity is altering these processes globally.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "Energy flows one-way through ecosystems, entering as sunlight (captured by producers) and moving up trophic levels through consumers; roughly only 10% of energy is transferred to the next trophic level, the rest lost mostly as heat (the 10% rule).",
                "Because of this energy loss, trophic levels are limited (usually 4-5 in an ecosystem) and biomass typically decreases at each higher level, forming an energy pyramid.",
                "Biogeochemical cycles (carbon, nitrogen, water, phosphorus) move matter between living organisms and the physical environment; unlike energy, matter is recycled rather than lost from the ecosystem.",
                "The greenhouse effect is a natural process where gases like CO2 and methane trap heat in the atmosphere; human activities (fossil fuel combustion, deforestation) have sharply increased greenhouse gas concentrations, enhancing warming beyond natural levels.",
                "Human impacts including habitat destruction, invasive species introduction, pollution, overharvesting, and climate change are collectively driving a loss of global biodiversity at a rate far exceeding historical background extinction rates.",
                "Biodiversity supports ecosystem services (like pollination, water purification, and soil formation) that humans depend on, so its loss carries direct consequences for ecosystem stability and human well-being.",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "The 10% rule is the single most testable ecology number on the AP exam — memorize it and be ready to calculate energy available at higher trophic levels from a given amount of producer biomass.",
                "Energy flows in one direction and is ultimately lost as heat; matter, by contrast, cycles and is reused — don't describe nutrients as 'flowing away' the way energy does.",
                "Link human activities to specific cycles: burning fossil fuels adds CO2 to the carbon cycle; fertilizer runoff overloads the nitrogen and phosphorus cycles, often causing algal blooms and eutrophication.",
              ],
            },
          ],
          questions: [
            {
              prompt: "If producers in an ecosystem have 10,000 kcal of energy, approximately how much energy is available to secondary consumers (two trophic levels up)?",
              choices: ["10,000 kcal", "100 kcal", "5,000 kcal", "1,000 kcal"],
              answerIndex: 1,
              explanation: "Applying the 10% rule twice: 10,000 kcal x 10% = 1,000 kcal available to primary consumers, then 1,000 x 10% = 100 kcal available to secondary consumers — energy shrinks sharply at each trophic transfer.",
            },
            {
              prompt: "Why do ecosystems rarely support more than four or five trophic levels?",
              choices: ["Predators at high trophic levels reproduce too quickly", "Only producers can photosynthesize", "Decomposers only work at the first trophic level", "So much energy is lost as heat at each transfer that there's not enough left to support additional levels"],
              answerIndex: 3,
              explanation: "Because roughly 90% of energy is lost (mostly as metabolic heat) at each trophic transfer, the energy remaining after several transfers becomes too little to sustain a viable population at yet another level.",
            },
            {
              prompt: "Which best describes the difference between how energy and matter move through an ecosystem?",
              choices: ["Energy flows one-way and is eventually lost as heat, while matter is recycled through biogeochemical cycles", "Both energy and matter are recycled indefinitely", "Both energy and matter flow one-way and are lost from the ecosystem", "Matter flows one-way while energy is recycled"],
              answerIndex: 0,
              explanation: "Unlike matter, which cycles repeatedly between organisms and the physical environment via biogeochemical cycles, energy cannot be recycled — it flows through the ecosystem once and is ultimately dissipated as heat.",
            },
            {
              prompt: "Excess nitrogen and phosphorus from agricultural fertilizer runoff into a lake most directly causes:",
              choices: ["A decrease in the lake's carbon cycle activity", "Global sea level rise", "Eutrophication, as algal blooms deplete dissolved oxygen when they decompose", "An increase in the lake's biodiversity long-term"],
              answerIndex: 2,
              explanation: "Excess nutrients trigger explosive algal growth (eutrophication); when the algae die and decompose, decomposers consume large amounts of dissolved oxygen, often causing hypoxic 'dead zones' that harm other aquatic life.",
            },
          ],
        },
      ],
    },
  ],
};

export default apBiology;
