import type { Topic } from "../types";

const apChemistry: Topic = {
  slug: "ap-chemistry",
  title: "AP Chemistry",
  category: "AP Courses",
  subtitle: "9 units, 27 lessons: atomic structure through applications of thermodynamics.",
  emoji: "⚗️",
  accent: "#8145c2",
  units: [
    {
      slug: "atomic-structure-and-properties",
      title: "Atomic Structure and Properties",
      summary: "How atoms are identified, described, and organized on the periodic table, from mass spectrometry to electron configuration and periodic trends.",
      lessons: [
        {
          slug: "moles-and-mass-spectrometry",
          title: "Moles, Molar Mass, and Mass Spectrometry",
          summary: "Using Avogadro's number and mass spectrometry data to determine atomic and molecular composition.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "Avogadro's number (6.022 × 10²³ particles/mol) and molar mass (from the periodic table) convert between grams, moles, and number of particles.",
                "A mass spectrometer ionizes a sample, deflects the ions by mass-to-charge ratio (m/z) in a magnetic field, and detects them; the height of each peak shows relative abundance.",
                "Average atomic mass is the weighted average of an element's isotope masses, using each isotope's percent abundance as the weight.",
                "Empirical formula = the simplest whole-number ratio of atoms; molecular formula = (empirical formula) × n, where n = molar mass ÷ empirical formula mass.",
                "Percent composition by mass = (mass of one element in a mole of compound ÷ molar mass of compound) × 100%.",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "For average atomic mass problems, convert each percent abundance to a decimal, multiply by that isotope's mass, and sum the results.",
                "Always find the empirical formula first from percent composition, then scale up to the molecular formula using the given molar mass.",
              ],
            },
          ],
          questions: [
            {
              prompt: "An element has two isotopes: 69.15% with mass 63.0 amu and 30.85% with mass 65.0 amu. What is its average atomic mass?",
              choices: ["64.0 amu", "63.6 amu", "65.0 amu", "63.0 amu"],
              answerIndex: 1,
              explanation: "Weighted average = (0.6915 × 63.0) + (0.3085 × 65.0) = 43.56 + 20.05 = 63.6 amu.",
            },
            {
              prompt: "A compound is 40.0% C, 6.7% H, and 53.3% O by mass. What is its empirical formula?",
              choices: ["C₂H₄O₂", "CH₂O", "CHO", "C₆H₁₂O₆"],
              answerIndex: 1,
              explanation: "Assuming 100 g: 40.0/12.0 = 3.33 mol C, 6.7/1.0 = 6.7 mol H, 53.3/16.0 = 3.33 mol O. Dividing each by 3.33 gives a 1:2:1 ratio — CH₂O.",
            },
            {
              prompt: "In a mass spectrometer, ions are deflected based on:",
              choices: [
                "their mass only",
                "their charge only",
                "their mass-to-charge ratio (m/z)",
                "their molar mass in grams",
              ],
              answerIndex: 2,
              explanation: "The magnetic field bends each ion's path according to its mass-to-charge ratio, which is why the x-axis of a mass spectrum is labeled m/z.",
            },
            {
              prompt: "A compound has empirical formula CH₂ and a molar mass of 42 g/mol. What is its molecular formula?",
              choices: ["CH₂", "C₂H₄", "C₃H₆", "C₆H₁₂"],
              answerIndex: 2,
              explanation: "The empirical formula mass of CH₂ is 14 g/mol. n = 42 ÷ 14 = 3, so the molecular formula is (CH₂)₃ = C₃H₆.",
            },
          ],
        },
        {
          slug: "electron-configuration-and-photoelectron-spectroscopy",
          title: "Electron Configuration and Photoelectron Spectroscopy",
          summary: "Predicting electron arrangements with the Aufbau principle and interpreting PES data to confirm them.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "The Aufbau principle fills orbitals from lowest to highest energy; the Pauli exclusion principle limits each orbital to 2 electrons with opposite spins; Hund's rule fills degenerate orbitals singly before pairing.",
                "Orbital filling order: 1s, 2s, 2p, 3s, 3p, 4s, 3d, 4p, 5s, 4d, 5p, 6s... Noble-gas core notation shortens long configurations, e.g., chlorine is [Ne]3s²3p⁵.",
                "Photoelectron spectroscopy (PES) plots binding energy vs. relative number of electrons; each peak represents one subshell, and peak height is proportional to the number of electrons in it.",
                "Electrons closer to the nucleus (core electrons, lower n) are held more tightly and show higher binding energy; valence electrons are held more loosely and show the lowest binding energy peaks.",
                "Isoelectronic species share an identical electron configuration — Na⁺, Ne, and F⁻ all have the configuration 1s²2s²2p⁶ (10 electrons).",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "Read a PES spectrum left to right (high to low binding energy) to match peaks from core electrons down to valence electrons.",
                "Relative peak heights on a PES spectrum should sum to the element's total electron count — use that as a check on your answer.",
              ],
            },
          ],
          questions: [
            {
              prompt: "Which orbital fills with electrons before the 3d orbital, according to the Aufbau principle?",
              choices: ["3d", "4s", "4p", "3p"],
              answerIndex: 1,
              explanation: "Despite having a higher principal quantum number, 4s is lower in energy than 3d and fills first in the Aufbau order.",
            },
            {
              prompt: "A PES spectrum for an element shows peaks with relative heights in the ratio 2:2:6:1. How many total electrons does the element have?",
              choices: ["9", "10", "11", "12"],
              answerIndex: 2,
              explanation: "Adding the relative peak heights (2+2+6+1 = 11) gives the total electron count, matching sodium's configuration 1s²2s²2p⁶3s¹.",
            },
            {
              prompt: "Which principle states that electrons occupy degenerate orbitals singly, with parallel spins, before any orbital gets a second electron?",
              choices: ["Aufbau principle", "Pauli exclusion principle", "Hund's rule", "Heisenberg uncertainty principle"],
              answerIndex: 2,
              explanation: "Hund's rule minimizes electron-electron repulsion by spreading electrons across equal-energy orbitals before pairing them up.",
            },
            {
              prompt: "In a PES spectrum, the peak corresponding to an element's core 1s electrons appears as:",
              choices: [
                "a peak with height proportional to 8 electrons",
                "there's no peak for core electrons",
                "the highest binding energy peak",
                "the lowest binding energy peak",
              ],
              answerIndex: 2,
              explanation: "1s electrons sit closest to the nucleus and experience the least shielding, so they require the most energy to remove — the highest binding energy peak.",
            },
          ],
        },
        {
          slug: "periodic-trends-and-coulombs-law",
          title: "Periodic Trends and Coulomb's Law",
          summary: "Explaining atomic radius, ionization energy, and electronegativity through effective nuclear charge and Coulomb's law.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "Coulomb's law, F = kq₁q₂/r², governs the attraction between a nucleus and its electrons: attraction grows with charge and shrinks with distance.",
                "Effective nuclear charge (Zeff) increases across a period because added protons aren't fully shielded by electrons in the same shell, pulling electrons in tighter.",
                "Atomic radius decreases across a period (higher Zeff, same shell) and increases down a group (a new principal energy level is added).",
                "First ionization energy generally increases across a period and decreases down a group; exceptions occur at group 2→13 and 15→16 due to extra stability of filled/half-filled subshells.",
                "Electronegativity increases across a period and decreases down a group; fluorine is the most electronegative element on the periodic table.",
                "A large jump between successive ionization energies (IEₙ to IEₙ₊₁) reveals that the next electron removed comes from a full, lower (core) shell — this identifies the number of valence electrons.",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "A huge jump in successive ionization energy tells you exactly how many valence electrons an element has — count up to the jump.",
                "Remember the exceptions: oxygen has a slightly lower first IE than nitrogen because removing one electron relieves repulsion in oxygen's crowded, nearly half-filled 2p subshell.",
              ],
            },
          ],
          questions: [
            {
              prompt: "Which best explains why atomic radius decreases across period 3, left to right?",
              choices: [
                "Effective nuclear charge increases while electrons stay in the same shell, pulling them closer",
                "More electron shells are added",
                "Nuclear charge decreases",
                "Shielding increases faster than nuclear charge",
              ],
              answerIndex: 0,
              explanation: "Adding protons across a period increases Zeff without adding a new shell, so the existing electrons are pulled in more tightly, shrinking the radius.",
            },
            {
              prompt: "An element has successive ionization energies (kJ/mol) of IE₁ = 738, IE₂ = 1450, IE₃ = 7730. How many valence electrons does it have?",
              choices: ["1", "2", "3", "4"],
              answerIndex: 1,
              explanation: "The huge jump from IE₂ to IE₃ shows that the third electron must be pulled from a full inner (core) shell, meaning only 2 electrons were valence electrons — consistent with magnesium.",
            },
            {
              prompt: "Which element has the greatest electronegativity?",
              choices: ["Oxygen", "Chlorine", "Fluorine", "Nitrogen"],
              answerIndex: 2,
              explanation: "Fluorine sits at the top-right of the periodic table (excluding noble gases), giving it the highest electronegativity of any element.",
            },
            {
              prompt: "According to Coulomb's law, the attraction between a nucleus and an electron is strongest when:",
              choices: [
                "distance is large and nuclear charge is small",
                "nuclear charge is small and distance is small",
                "nuclear charge is large and distance is small",
                "the attraction doesn't depend on charge or distance",
              ],
              answerIndex: 2,
              explanation: "Coulomb's law shows attraction scales directly with the product of the charges and inversely with the square of the distance, so a larger charge and smaller distance maximize attraction.",
            },
          ],
        },
      ],
    },
    {
      slug: "molecular-and-ionic-compound-structure-and-properties",
      title: "Molecular and Ionic Compound Structure and Properties",
      summary: "Lewis structures, VSEPR geometry, hybridization, and the structural basis of ionic, metallic, and covalent network solids.",
      lessons: [
        {
          slug: "lewis-structures-and-resonance",
          title: "Lewis Structures, Formal Charge, and Resonance",
          summary: "Drawing valid Lewis structures and using formal charge to choose the best resonance structure.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "Steps to draw a Lewis structure: count total valence electrons, arrange atoms (the least electronegative atom is usually central), place bonding pairs, fill octets with lone pairs, then add multiple bonds if atoms lack a full octet.",
                "Formal charge = (valence electrons) − (nonbonding electrons) − (bonding electrons ÷ 2); the best structure minimizes formal charges, placing any negative formal charge on the more electronegative atom.",
                "Resonance structures exist when a molecule's true structure is an average of two or more valid Lewis structures differing only in electron placement (e.g., NO₃⁻, O₃); real bond lengths and orders are intermediate between the resonance forms.",
                "Exceptions to the octet rule: incomplete octets (BF₃, BeCl₂), expanded octets for period 3+ central atoms (SF₆, PCl₅), and odd-electron species (NO, NO₂).",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "Check your work: the total electrons used in the structure must equal the valence electrons you counted at the start (add electrons for anions, subtract for cations).",
                "The best resonance structure has formal charges as close to zero as possible, with any negative charge on the most electronegative atom.",
              ],
            },
          ],
          questions: [
            {
              prompt: "How many valence electrons does the nitrate ion, NO₃⁻, have in total?",
              choices: ["18", "23", "24", "25"],
              answerIndex: 2,
              explanation: "N contributes 5, three O atoms contribute 6 each (18), and the −1 charge adds 1 more electron: 5 + 18 + 1 = 24.",
            },
            {
              prompt: "If sulfur in SO₄²⁻ is drawn with 4 single bonds and no lone pairs on S, what is its formal charge?",
              choices: ["0", "+2", "−2", "+1"],
              answerIndex: 1,
              explanation: "Formal charge = 6 (valence) − 0 (nonbonding) − 8/2 (bonding) = 6 − 0 − 4 = +2, which is why chemists prefer a structure with some S=O double bonds instead.",
            },
            {
              prompt: "Resonance structures of the same molecule differ only in:",
              choices: [
                "the arrangement of atoms",
                "the total number of valence electrons",
                "the placement of electrons (bonding and lone pairs)",
                "the overall charge of the molecule",
              ],
              answerIndex: 2,
              explanation: "Resonance structures keep the same atomic skeleton and total electron count; only where the bonds and lone pairs are drawn changes between them.",
            },
            {
              prompt: "Which molecule is a classic example of an expanded octet?",
              choices: ["CH₄", "SF₆", "CO₂", "NH₃"],
              answerIndex: 1,
              explanation: "Sulfur, a period 3 element, can use empty d-type orbitals to accommodate more than 8 electrons, forming 6 bonds to fluorine in SF₆.",
            },
          ],
        },
        {
          slug: "vsepr-geometry-and-hybridization",
          title: "VSEPR Geometry and Orbital Hybridization",
          summary: "Predicting 3D molecular shapes and bond angles from electron domains, and connecting them to hybrid orbitals.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "Electron domains (bonding groups plus lone pairs) around a central atom repel each other and arrange to minimize repulsion — this is VSEPR theory.",
                "Electron-domain geometries by number of domains: 2 → linear (180°), 3 → trigonal planar (120°), 4 → tetrahedral (109.5°), 5 → trigonal bipyramidal, 6 → octahedral (90°).",
                "Lone pairs repel more strongly than bonding pairs (lone pair–lone pair > lone pair–bond pair > bond pair–bond pair), which compresses bond angles below the ideal.",
                "Hybridization matches the number of electron domains: 2 domains → sp, 3 → sp², 4 → sp³, 5 → sp³d, 6 → sp³d².",
                "Sigma (σ) bonds form from head-on orbital overlap and are present in every single bond; pi (π) bonds form from sideways overlap of unhybridized p orbitals — a double bond is 1σ + 1π, a triple bond is 1σ + 2π.",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "Always count electron domains first (bonds + lone pairs), then find molecular shape by considering only where the lone pairs push the atoms.",
                "Count the total bonds plus lone pairs on the central atom — that number tells you the hybridization instantly.",
              ],
            },
          ],
          questions: [
            {
              prompt: "NH₃ has 3 bonding pairs and 1 lone pair on nitrogen. What is its molecular shape and approximate bond angle?",
              choices: ["Trigonal planar, 120°", "Tetrahedral, 109.5°", "Trigonal pyramidal, ~107°", "Bent, ~104.5°"],
              answerIndex: 2,
              explanation: "Four electron domains arrange tetrahedrally, but with one lone pair pushing the three N–H bonds together, the molecular shape is trigonal pyramidal with a slightly compressed angle.",
            },
            {
              prompt: "What is the hybridization of the central carbon in CO₂, which has 2 double bonds and no lone pairs?",
              choices: ["sp³", "sp²", "sp", "sp³d"],
              answerIndex: 2,
              explanation: "Carbon in CO₂ has only 2 electron domains (two double-bonded oxygens), which corresponds to sp hybridization and a linear shape.",
            },
            {
              prompt: "A triple bond, such as the one in N₂, is made up of:",
              choices: ["3 sigma bonds", "1 sigma bond and 2 pi bonds", "2 sigma bonds and 1 pi bond", "3 pi bonds"],
              answerIndex: 1,
              explanation: "Any multiple bond has exactly one sigma bond from head-on overlap; the additional bonds are pi bonds from sideways p-orbital overlap, so a triple bond is 1σ + 2π.",
            },
            {
              prompt: "Why does water's H–O–H bond angle (104.5°) fall below the ideal tetrahedral angle of 109.5°?",
              choices: [
                "Water is nonpolar",
                "Two lone pairs on oxygen compress the bond angle",
                "Hydrogen bonds between water molecules shrink the angle",
                "Oxygen is sp hybridized in water",
              ],
              answerIndex: 1,
              explanation: "Oxygen has 4 electron domains (2 bonds, 2 lone pairs); the extra repulsion from the two lone pairs pushes the two O–H bonds closer together than the ideal tetrahedral angle.",
            },
          ],
        },
        {
          slug: "ionic-metallic-and-network-bonding",
          title: "Ionic, Metallic, and Covalent Network Structures",
          summary: "Comparing how ionic lattices, metallic bonding, and covalent network solids produce very different bulk properties.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "Ionic solids form a 3D lattice of alternating cations and anions held together by electrostatic attraction; lattice energy increases with higher ionic charge and smaller ionic radius, following Coulomb's law.",
                "Ionic compounds are hard and brittle with high melting points, and they only conduct electricity when molten or dissolved, since the ions must be mobile to carry charge.",
                "Metallic bonding pictures metal cations sitting in a 'sea' of delocalized valence electrons, which explains malleability, ductility, and high electrical/thermal conductivity — the electrons can move without any bond actually breaking.",
                "Covalent network solids (diamond, quartz/SiO₂, graphite) consist of atoms linked by one continuous lattice of covalent bonds, giving very high melting points and hardness; graphite conducts electricity because of delocalized pi electrons that move freely between its layers.",
                "Lattice/bond strength is roughly comparable between covalent network and ionic solids (both very strong), while metallic bonding strength varies — but the very different mechanisms of bonding explain why their properties (brittleness vs. malleability vs. hardness) differ so much.",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "If a solid conducts electricity only when melted or dissolved, it's ionic; if it conducts as a solid, think metallic bonding or graphite's delocalized pi system.",
                "Lattice energy is roughly proportional to (Q₁ × Q₂) / r — a fast way to rank compounds like MgO versus NaCl without a full calculation.",
              ],
            },
          ],
          questions: [
            {
              prompt: "Which best explains why metals are malleable but ionic solids are brittle?",
              choices: [
                "Metals simply have weaker bonds overall",
                "Delocalized electrons let metal cations slide past each other without breaking bonds, while shifting an ionic lattice brings like charges together and causes repulsion",
                "Ionic solids have no repeating structure",
                "Metals lack any regular atomic arrangement",
              ],
              answerIndex: 1,
              explanation: "In a metal, the electron sea keeps holding the shifted cations together, but in an ionic lattice, shifting a layer aligns same-charge ions, which repel and shatter the crystal.",
            },
            {
              prompt: "Which compound would you expect to have the highest lattice energy?",
              choices: ["NaCl", "KCl", "MgO", "KBr"],
              answerIndex: 2,
              explanation: "MgO has both smaller ionic radii and higher ionic charges (2+ and 2−) than the 1+/1− alkali halides, so by Coulomb's law it has by far the largest lattice energy.",
            },
            {
              prompt: "Graphite is able to conduct electricity because:",
              choices: [
                "it is an ionic compound",
                "it has delocalized pi electrons that move freely between its layers",
                "it is technically a metal",
                "it dissolves in water to release mobile ions",
              ],
              answerIndex: 1,
              explanation: "Each carbon in graphite is sp² hybridized, leaving an unhybridized p orbital that forms a delocalized pi system spanning each layer, allowing electrons to flow.",
            },
            {
              prompt: "What distinguishes a covalent network solid like diamond from a molecular covalent solid like ice?",
              choices: [
                "Network solids contain no covalent bonds",
                "Network solids are held together by one continuous lattice of strong covalent bonds throughout, unlike discrete molecules held together by weak intermolecular forces",
                "Molecular solids always conduct electricity",
                "Network solids are always ionic",
              ],
              answerIndex: 1,
              explanation: "Diamond's covalent bonds extend through the entire crystal, so melting requires breaking actual covalent bonds; ice's molecules are held together only by weaker hydrogen bonds, so it melts far more easily.",
            },
          ],
        },
      ],
    },
    {
      slug: "intermolecular-forces-and-properties",
      title: "Intermolecular Forces and Properties",
      summary: "How intermolecular forces, solution formation, and colligative properties explain the physical behavior of liquids, solids, and mixtures.",
      lessons: [
        {
          slug: "intermolecular-forces-and-physical-properties",
          title: "Intermolecular Forces and Physical Properties",
          summary: "Identifying London dispersion, dipole-dipole, and hydrogen bonding forces and using them to predict boiling points, viscosity, and vapor pressure.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "London dispersion forces (LDFs) arise from temporary induced dipoles and exist between all molecules and atoms; strength increases with molar mass and surface area, since more electrons make a cloud more polarizable.",
                "Dipole-dipole forces occur between polar molecules with permanent dipoles; they are stronger than LDFs of similar size but weaker than hydrogen bonding.",
                "Hydrogen bonding is an especially strong dipole-dipole interaction that occurs when H is bonded directly to N, O, or F; it explains water's unusually high boiling point for its small size.",
                "Overall IMF strength ranking: ion-dipole > hydrogen bonding > dipole-dipole > London dispersion, though LDFs can dominate and even exceed dipole-dipole forces in large nonpolar molecules.",
                "Boiling point, melting point, viscosity, and surface tension all increase as IMFs strengthen; vapor pressure decreases as IMFs strengthen, since molecules escape the liquid surface less easily.",
                "Polarizability increases with more electrons and a larger, more diffuse electron cloud, which strengthens London dispersion forces — for example, I₂ has stronger LDFs and a higher boiling point than F₂.",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "When comparing boiling points, first check for hydrogen bonding (N-H, O-H, F-H bonds), then polarity, then molar mass/size as a tiebreaker for LDFs.",
                "On the AP exam, use the specific term \"London dispersion forces,\" not just \"van der Waals forces\" — be precise about which IMF you mean.",
              ],
            },
          ],
          questions: [
            {
              prompt: "Which two properties primarily determine the strength of London dispersion forces between two nonpolar molecules?",
              choices: [
                "Molar mass and boiling point",
                "Dipole moment and electronegativity",
                "Ionic charge and radius",
                "Number of electrons (polarizability) and molecular shape/surface area",
              ],
              answerIndex: 3,
              explanation: "LDFs arise from temporary dipoles induced by electron movement; more electrons (higher polarizability) and greater surface area for contact both increase LDF strength.",
            },
            {
              prompt: "Why does NH₃ (bp −33°C) have a much higher boiling point than PH₃ (bp −87°C), even though phosphorus has a larger, more polarizable electron cloud?",
              choices: [
                "PH₃ has stronger London dispersion forces that dominate",
                "NH₃ molecules form hydrogen bonds because H is bonded directly to N, while P–H bonds don't hydrogen bond",
                "NH₃ is ionic while PH₃ is covalent",
                "PH₃ has a higher molar mass",
              ],
              answerIndex: 1,
              explanation: "Nitrogen is small and electronegative enough for N–H hydrogen bonding, adding a strong extra IMF that phosphorus (larger, less electronegative) cannot form with hydrogen, despite PH₃'s greater polarizability.",
            },
            {
              prompt: "A liquid with weak intermolecular forces will have a ___ vapor pressure and a ___ boiling point compared to a liquid with strong IMFs.",
              choices: ["higher; higher", "higher; lower", "lower; higher", "lower; lower"],
              answerIndex: 1,
              explanation: "Weak IMFs let molecules escape the liquid surface easily (high vapor pressure) and require less energy to fully vaporize (low boiling point) — vapor pressure and boiling point are inversely related.",
            },
            {
              prompt: "Which best explains why viscosity tends to increase as intermolecular forces strengthen?",
              choices: [
                "Stronger IMFs increase the density of a liquid only",
                "Molecules held together by stronger IMFs resist flowing past one another",
                "Viscosity is unrelated to IMFs and depends only on temperature",
                "Stronger IMFs lower the surface tension of a liquid",
              ],
              answerIndex: 1,
              explanation: "Viscosity measures a liquid's resistance to flow; strong IMFs (like hydrogen bonding in glycerol) hold molecules together tightly, making it harder for them to slide past each other.",
            },
          ],
        },
        {
          slug: "solutions-solubility-and-concentration",
          title: "Solutions, Solubility, and Concentration",
          summary: "Predicting solubility from intermolecular forces and calculating solution concentration using molarity and dilution.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "\"Like dissolves like\": polar/ionic solutes dissolve well in polar solvents like water because solute-solvent attractions can replace the solute-solute and solvent-solvent attractions being broken; nonpolar solutes dissolve in nonpolar solvents.",
                "Ion-dipole forces form when an ionic solid dissolves in water: water's partial charges surround and stabilize each ion in a process called hydration (solvation).",
                "Molarity (M) = moles of solute ÷ liters of solution; dilution follows M₁V₁ = M₂V₂, since moles of solute stay constant while only the volume changes.",
                "Solubility of most solids in water increases with temperature, while solubility of gases in water decreases with temperature and increases with pressure, per Henry's law: C = kH·P.",
                "Solvation is exothermic when solute-solvent attractions are stronger than the attractions being broken; the overall enthalpy of solution depends on lattice energy, hydration energy, and solvent-solvent forces.",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "For dilution problems, identify which volume/concentration pair is \"before\" and which is \"after,\" and keep units consistent (mL with mL, or convert everything to L).",
                "Remember gas solubility drops as temperature rises — that's why a warm soda goes flat faster than a cold one.",
              ],
            },
          ],
          questions: [
            {
              prompt: "How many mL of a 6.0 M HCl stock solution are needed to prepare 250 mL of a 1.5 M HCl solution?",
              choices: ["31 mL", "62.5 mL", "100 mL", "125 mL"],
              answerIndex: 1,
              explanation: "Using M₁V₁ = M₂V₂: 6.0 M × V₁ = 1.5 M × 250 mL, so V₁ = 375 ÷ 6.0 = 62.5 mL.",
            },
            {
              prompt: "Which best explains why NaCl dissolves readily in water but not in hexane, a nonpolar solvent?",
              choices: [
                "Water molecules can form ion-dipole interactions that stabilize Na⁺ and Cl⁻, while hexane cannot",
                "Hexane molecules are too large to surround the ions",
                "NaCl reacts chemically with water but not hexane",
                "Water has a lower boiling point than hexane",
              ],
              answerIndex: 0,
              explanation: "Water's polar O–H bonds create partial charges that surround and stabilize the separated ions (ion-dipole forces, or hydration); nonpolar hexane has no charges to interact with ions.",
            },
            {
              prompt: "According to Henry's law, what happens to the solubility of CO₂ gas in a carbonated beverage when the bottle is opened, reducing the pressure above the liquid?",
              choices: [
                "Solubility increases",
                "Solubility decreases, so CO₂ gas escapes as bubbles",
                "Solubility is unaffected by pressure",
                "The CO₂ converts entirely to carbonic acid",
              ],
              answerIndex: 1,
              explanation: "Henry's law states gas solubility is directly proportional to the partial pressure above the liquid; lowering the pressure by opening the bottle decreases CO₂'s solubility, so it bubbles out of solution.",
            },
            {
              prompt: "A solution is made by dissolving 2.0 mol of KBr in enough water to make 4.0 L of solution. What is the molarity?",
              choices: ["0.5 M", "2.0 M", "4.0 M", "8.0 M"],
              answerIndex: 0,
              explanation: "Molarity = mol solute ÷ L solution = 2.0 mol ÷ 4.0 L = 0.5 M.",
            },
          ],
        },
        {
          slug: "colligative-properties",
          title: "Colligative Properties",
          summary: "Using the number of dissolved particles to calculate boiling point elevation, freezing point depression, and osmotic pressure.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "Colligative properties depend only on the number (concentration) of dissolved solute particles, not their identity: boiling point elevation, freezing point depression, vapor pressure lowering, and osmotic pressure.",
                "The van't Hoff factor (i) is the number of particles a formula unit produces in solution: i = 1 for nonelectrolytes like glucose, i = 2 for NaCl, i = 3 for CaCl₂ or Na₂SO₄, assuming complete dissociation.",
                "Boiling point elevation: ΔTb = i·Kb·m; freezing point depression: ΔTf = i·Kf·m, where m is molality (mol solute / kg solvent) and Kb/Kf are solvent-specific constants.",
                "Molality (m), not molarity, is used for colligative property calculations because it doesn't change with temperature — mass of solvent is temperature-independent, unlike solution volume.",
                "Osmotic pressure: π = iMRT, where M is molarity, R is the gas constant, and T is temperature in Kelvin; osmosis is the net flow of solvent across a semipermeable membrane toward higher solute concentration.",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "Always multiply by the van't Hoff factor (i) for ionic solutes — forgetting to count all the ions is the most common error on these problems.",
                "Freezing point depression makes the new freezing point lower (colder) than the pure solvent, while boiling point elevation makes the new boiling point higher — don't mix up the direction of each shift.",
              ],
            },
          ],
          questions: [
            {
              prompt: "What is the freezing point depression of a solution made with 2.0 mol of NaCl dissolved in 1.0 kg of water? (Kf for water = 1.86 °C/m)",
              choices: ["1.86°C", "3.72°C", "0.93°C", "7.44°C"],
              answerIndex: 3,
              explanation: "NaCl dissociates into 2 ions (i = 2), and m = 2.0 mol ÷ 1.0 kg = 2.0 m. ΔTf = i·Kf·m = 2 × 1.86°C/m × 2.0 m = 7.44°C.",
            },
            {
              prompt: "Why is molality used instead of molarity in colligative property calculations?",
              choices: [
                "Molality is always a larger number than molarity",
                "Molality is based on mass of solvent, which doesn't change with temperature, while molarity's volume does",
                "Molarity can't be measured experimentally",
                "Colligative properties don't depend on concentration at all",
              ],
              answerIndex: 1,
              explanation: "Solution volume expands or contracts with temperature, changing molarity; molality uses the mass of solvent, which is temperature-independent, making it more reliable across a temperature range.",
            },
            {
              prompt: "A 1.0 m aqueous solution of which solute would produce the largest freezing point depression?",
              choices: ["C₆H₁₂O₆ (glucose)", "NaCl", "CaCl₂", "MgSO₄"],
              answerIndex: 2,
              explanation: "CaCl₂ dissociates into 3 ions (1 Ca²⁺ + 2 Cl⁻), giving the largest van't Hoff factor (i = 3) and therefore the greatest freezing point depression at equal molality.",
            },
            {
              prompt: "Two solutions are separated by a semipermeable membrane: one is 0.5 M sucrose, the other is 0.1 M sucrose. Which way will water flow by osmosis?",
              choices: [
                "From the 0.5 M side to the 0.1 M side",
                "From the 0.1 M side to the 0.5 M side",
                "No net flow will occur",
                "Water will flow in both directions equally, achieving no change",
              ],
              answerIndex: 1,
              explanation: "Osmosis moves solvent from a region of lower solute concentration to higher solute concentration, diluting the more concentrated side; water flows from the 0.1 M side toward the 0.5 M side.",
            },
          ],
        },
      ],
    },
    {
      slug: "chemical-reactions",
      title: "Chemical Reactions",
      summary: "Classifying reactions, writing net ionic equations, and using stoichiometry to quantify reactants, products, and titrations.",
      lessons: [
        {
          slug: "reaction-types-and-physical-vs-chemical-change",
          title: "Physical vs. Chemical Change and Types of Reactions",
          summary: "Distinguishing physical from chemical changes and classifying reactions as synthesis, decomposition, combustion, and displacement.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "A physical change alters a substance's form or state without changing its chemical identity (melting, dissolving); a chemical change produces new substances, evidenced by color change, gas formation, precipitate formation, or temperature change.",
                "The law of conservation of mass states that mass is neither created nor destroyed in a chemical reaction — total reactant mass equals total product mass, which is why chemical equations must be balanced.",
                "Synthesis (combination) reactions follow A + B → AB; decomposition reactions follow AB → A + B, often triggered by heat, light, or electricity.",
                "Single replacement reactions follow A + BC → AC + B, common between metals and metal salt solutions, governed by the activity series — a more reactive metal displaces a less reactive one from solution.",
                "Combustion reactions burn a hydrocarbon in O₂ to produce CO₂ and H₂O with excess O₂, releasing energy; incomplete combustion with limited O₂ can instead produce CO or soot.",
                "Double replacement (metathesis) reactions follow AB + CD → AD + CB, occurring when a precipitate, gas, or water (neutralization) forms, removing ions from solution and driving the reaction forward.",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "Look for the telltale signs of a chemical change — bubbles, color shift, precipitate, temperature change, odor — to distinguish it from a purely physical change like a phase transition.",
                "Balance combustion equations in this order: carbon first, then hydrogen, then oxygen last, since oxygen often appears in multiple places.",
              ],
            },
          ],
          questions: [
            {
              prompt: "Which observation is the best evidence that a chemical reaction, not just a physical change, has occurred?",
              choices: [
                "Ice melting into liquid water",
                "Sugar dissolving in tea",
                "Bubbles forming when vinegar is added to baking soda",
                "Water evaporating from a puddle",
              ],
              answerIndex: 2,
              explanation: "Gas formation (CO₂ bubbles) signals that new substances were produced from a reaction between acetic acid and sodium bicarbonate; melting, dissolving, and evaporating are all physical changes.",
            },
            {
              prompt: "Balance the combustion of propane: C₃H₈ + O₂ → CO₂ + H₂O. What is the coefficient of O₂ in the balanced equation?",
              choices: ["3", "4", "6", "5"],
              answerIndex: 3,
              explanation: "Balancing C (3 CO₂) then H (4 H₂O) means the products contain 3(2) + 4(1) = 10 O atoms, requiring 5 O₂ molecules: C₃H₈ + 5O₂ → 3CO₂ + 4H₂O.",
            },
            {
              prompt: "According to the activity series, which reaction will occur spontaneously?",
              choices: [
                "Cu(s) + ZnSO₄(aq) — no reaction expected",
                "Zn(s) + CuSO₄(aq) → ZnSO₄(aq) + Cu(s)",
                "Au(s) + AgNO₃(aq) — reaction expected",
                "Ag(s) + CuSO₄(aq) — reaction expected",
              ],
              answerIndex: 1,
              explanation: "Zinc is more reactive (higher on the activity series) than copper, so it displaces Cu²⁺ from solution, forming Zn²⁺ and depositing solid copper; less reactive metals like Au or Ag cannot displace others.",
            },
            {
              prompt: "Which equation represents a decomposition reaction?",
              choices: [
                "2H₂ + O₂ → 2H₂O",
                "2KClO₃ → 2KCl + 3O₂",
                "AgNO₃ + NaCl → AgCl + NaNO₃",
                "Zn + 2HCl → ZnCl₂ + H₂",
              ],
              answerIndex: 1,
              explanation: "A decomposition reaction breaks one compound into simpler substances; heating potassium chlorate produces potassium chloride and oxygen gas, fitting the AB → A + B pattern.",
            },
          ],
        },
        {
          slug: "net-ionic-equations-and-precipitation-reactions",
          title: "Net Ionic Equations and Precipitation Reactions",
          summary: "Using solubility rules to predict precipitates and writing net ionic equations that isolate the species that actually react.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "Solubility rules: nearly all Group 1 and NH₄⁺ compounds are soluble; nearly all nitrates and acetates are soluble; most chlorides/bromides/iodides are soluble except with Ag⁺, Pb²⁺, and Hg₂²⁺; most sulfates are soluble except with Ba²⁺, Pb²⁺, Ca²⁺, and Sr²⁺; most carbonates, phosphates, and hydroxides are insoluble except with Group 1 and NH₄⁺.",
                "A complete ionic equation shows all soluble strong electrolytes dissociated into their ions; spectator ions appear unchanged on both sides and are removed to get the net ionic equation.",
                "A precipitation reaction occurs when mixing two soluble ionic solutions produces an insoluble product that falls out of solution as a solid.",
                "Strong acids (HCl, HBr, HI, HNO₃, H₂SO₄, HClO₄) and strong bases (Group 1 hydroxides, Ca(OH)₂, Sr(OH)₂, Ba(OH)₂) dissociate completely and are written as separate ions; weak acids/bases and molecular compounds are written as intact molecules.",
                "Neutralization reactions between a strong acid and strong base simplify to the same net ionic equation regardless of which acid or base is used: H⁺(aq) + OH⁻(aq) → H₂O(l).",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "To write a net ionic equation: write the full balanced molecular equation, split all strong electrolytes into ions, then cancel any ion appearing identically on both sides (the spectators).",
                "Insoluble compounds and molecular/weak species are never split into ions — they stay written as whole formulas even in ionic equations.",
              ],
            },
          ],
          questions: [
            {
              prompt: "Which combination of aqueous solutions will produce a precipitate?",
              choices: ["NaNO₃ + KCl", "Pb(NO₃)₂ + KI", "NH₄Cl + NaOH", "KNO₃ + NaCl"],
              answerIndex: 1,
              explanation: "Lead(II) iodide (PbI₂) is insoluble per the solubility rules — Pb²⁺ halides are a key exception — so mixing Pb(NO₃)₂ and KI produces a yellow precipitate; the other pairs form only soluble products.",
            },
            {
              prompt: "What is the net ionic equation for mixing AgNO₃(aq) and NaCl(aq)?",
              choices: [
                "Ag⁺(aq) + NO₃⁻(aq) → AgNO₃(s)",
                "Na⁺(aq) + Cl⁻(aq) → NaCl(s)",
                "Ag⁺(aq) + Cl⁻(aq) → AgCl(s)",
                "AgNO₃(aq) + NaCl(aq) → AgCl(s) + NaNO₃(aq)",
              ],
              answerIndex: 2,
              explanation: "Na⁺ and NO₃⁻ remain dissolved as spectator ions on both sides and cancel out; only Ag⁺ and Cl⁻ combine to form the insoluble precipitate AgCl(s).",
            },
            {
              prompt: "In the reaction between HCl(aq) and NaOH(aq), which species are spectator ions?",
              choices: ["H⁺", "OH⁻", "Na⁺ and Cl⁻", "H₂O"],
              answerIndex: 2,
              explanation: "Na⁺ and Cl⁻ appear unchanged on both sides of the complete ionic equation and are removed when writing the net ionic equation, which reduces to H⁺(aq) + OH⁻(aq) → H₂O(l).",
            },
            {
              prompt: "Which compound is insoluble in water according to standard solubility rules?",
              choices: ["KOH", "BaSO₄", "NH₄Cl", "NaNO₃"],
              answerIndex: 1,
              explanation: "Most sulfates are soluble, but BaSO₄ is a key exception (along with PbSO₄ and CaSO₄), making it insoluble; potassium, ammonium, and sodium compounds are all soluble per the solubility rules.",
            },
          ],
        },
        {
          slug: "stoichiometry-and-titrations",
          title: "Stoichiometry, Limiting Reactants, and Titrations",
          summary: "Applying mole-ratio reasoning to find limiting reactants, percent yield, and unknown concentrations from titration data.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "Stoichiometric calculations convert between reactants and products using mole ratios from the balanced equation: grams → moles (÷ molar mass) → moles of desired substance (mole ratio) → grams (× molar mass) or other units.",
                "The limiting reactant is the one that runs out first and determines the maximum amount of product; find it by comparing how much product each reactant could form, or by dividing each reactant's moles by its coefficient and choosing the smaller result.",
                "Percent yield = (actual yield ÷ theoretical yield) × 100%; theoretical yield is calculated from the limiting reactant, assuming the reaction goes to completion.",
                "In an acid-base titration, a solution of known concentration (titrant) is added to a solution of unknown concentration until the equivalence point, where moles of acid equal moles of base, adjusted for stoichiometry: for a 1:1 acid/base, MₐVₐ = M_bV_b.",
                "An indicator or pH meter signals the endpoint, which should closely match the true equivalence point when the correct indicator is chosen.",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "To find the limiting reactant quickly, divide each reactant's moles by its coefficient in the balanced equation — the smallest result identifies the limiting reactant.",
                "In titration problems, always confirm the mole ratio between acid and base from the balanced equation before assuming a simple 1:1 relationship, e.g., H₂SO₄ + 2NaOH needs a factor of 2.",
              ],
            },
          ],
          questions: [
            {
              prompt: "In the reaction N₂ + 3H₂ → 2NH₃, if 2.0 mol N₂ reacts with 3.0 mol H₂, which is the limiting reactant?",
              choices: ["N₂", "H₂", "Neither, they react exactly", "NH₃"],
              answerIndex: 1,
              explanation: "Dividing moles by coefficients gives N₂: 2.0/1 = 2.0 and H₂: 3.0/3 = 1.0; the smaller value (H₂) identifies it as the limiting reactant.",
            },
            {
              prompt: "A reaction has a theoretical yield of 24.0 g of product, but only 19.2 g is actually collected. What is the percent yield?",
              choices: ["70%", "75%", "80%", "90%"],
              answerIndex: 2,
              explanation: "Percent yield = (actual ÷ theoretical) × 100% = (19.2 g ÷ 24.0 g) × 100% = 80%.",
            },
            {
              prompt: "It takes 25.0 mL of 0.200 M NaOH to neutralize 20.0 mL of HCl of unknown concentration. What is the concentration of the HCl?",
              choices: ["0.160 M", "0.200 M", "0.400 M", "0.250 M"],
              answerIndex: 3,
              explanation: "Since HCl and NaOH react 1:1, MₐVₐ = M_bV_b → Mₐ = (0.200 M × 25.0 mL) ÷ 20.0 mL = 0.250 M.",
            },
            {
              prompt: "How many moles of NaOH are needed to completely neutralize 0.10 mol of H₂SO₄, given H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O?",
              choices: ["0.05 mol", "0.10 mol", "0.20 mol", "0.40 mol"],
              answerIndex: 2,
              explanation: "The balanced equation shows a 1:2 mole ratio between H₂SO₄ and NaOH, so 0.10 mol H₂SO₄ requires 0.20 mol NaOH.",
            },
          ],
        },
      ],
    },
    {
      slug: "kinetics",
      title: "Kinetics",
      summary: "How reaction rates are measured, modeled with rate laws and mechanisms, and explained by collision theory and activation energy.",
      lessons: [
        {
          slug: "rate-laws-and-reaction-order",
          title: "Rate Laws and Determining Reaction Order",
          summary: "Writing rate laws from experimental data and interpreting reaction orders for each reactant.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "Reaction rate is the change in concentration of a reactant or product per unit time, rate = −Δ[reactant]/Δt = Δ[product]/Δt, adjusted by stoichiometric coefficients.",
                "A rate law expresses rate as rate = k[A]^m[B]^n, where m and n are the reaction orders — determined experimentally, not from stoichiometric coefficients — and k is the rate constant.",
                "The overall reaction order is the sum of the individual orders (m + n); common orders are zero (rate independent of concentration), first (rate directly proportional), and second (rate proportional to concentration squared).",
                "The method of initial rates compares experiments where one reactant's concentration changes while others are held constant: if doubling [A] doubles the rate, the reaction is first order in A; if it quadruples the rate, second order; if the rate is unchanged, zero order in A.",
                "The units of the rate constant k depend on the overall reaction order: M/s for zero order, s⁻¹ for first order, M⁻¹s⁻¹ for second order.",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "Never assume reaction order matches the balanced equation's coefficients — always determine order from experimental rate data.",
                "When comparing two trials, take the ratio of rates and the ratio of concentrations, then solve for the exponent — this avoids algebra mistakes.",
              ],
            },
          ],
          questions: [
            {
              prompt: "In a reaction A + B → C, tripling [A] while holding [B] constant causes the rate to increase by a factor of 9. What is the order with respect to A?",
              choices: ["Zero order", "First order", "Second order", "Third order"],
              answerIndex: 2,
              explanation: "Since rate increases by 3² = 9 when [A] triples, the reaction is second order in A (rate ∝ [A]²).",
            },
            {
              prompt: "For the rate law rate = k[A][B]², what are the overall reaction order and the units of k?",
              choices: ["Order 2; M⁻¹s⁻¹", "Order 3; M⁻²s⁻¹", "Order 3; M⁻¹s⁻¹", "Order 2; M⁻²s⁻¹"],
              answerIndex: 1,
              explanation: "The overall order is the sum of exponents (1 + 2 = 3); solving rate = k[A][B]² for k gives units of M⁻²s⁻¹ for a third-order reaction.",
            },
            {
              prompt: "Doubling the concentration of a reactant has no effect on the reaction rate. What is the order with respect to that reactant?",
              choices: ["Zero order", "First order", "Second order", "Cannot be determined"],
              answerIndex: 0,
              explanation: "A rate unaffected by concentration changes means the exponent on that reactant is zero (2⁰ = 1, no change), making it zero order with respect to that species.",
            },
            {
              prompt: "Experimental data for 2NO + O₂ → 2NO₂ shows that doubling [NO] quadruples the rate, while doubling [O₂] doubles the rate. What is the rate law?",
              choices: ["rate = k[NO][O₂]", "rate = k[NO][O₂]²", "rate = k[NO]²[O₂]²", "rate = k[NO]²[O₂]"],
              answerIndex: 3,
              explanation: "Doubling [NO] quadruples rate (2² = 4), so NO is second order; doubling [O₂] doubles rate (2¹ = 2), so O₂ is first order — giving rate = k[NO]²[O₂].",
            },
          ],
        },
        {
          slug: "reaction-mechanisms-and-catalysts",
          title: "Reaction Mechanisms, Intermediates, and Catalysts",
          summary: "Connecting elementary steps to the overall rate law through the rate-determining step and the role of catalysts.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "A reaction mechanism is a series of elementary steps that sum to the overall balanced equation; each elementary step's rate law can be written directly from its coefficients, unlike the overall reaction.",
                "Molecularity describes the number of species colliding in an elementary step: unimolecular (1), bimolecular (2), or termolecular (3, rare because three-particle collisions are unlikely).",
                "The rate-determining step (RDS) is the slowest elementary step in a mechanism and controls the overall rate law; the overall rate law must match the rate law derived from the RDS.",
                "An intermediate is a species produced in one step and consumed in a later step — it does not appear in the overall balanced equation and cannot appear in the overall rate law.",
                "A catalyst speeds up a reaction by providing an alternate pathway with lower activation energy; it's consumed in an early step and regenerated in a later step, so it doesn't appear in the overall equation but often does appear in the rate law if it participates in the RDS.",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "A proposed mechanism is valid only if its steps sum to the overall equation and its rate law (from the RDS) matches the experimentally determined rate law.",
                "Don't confuse a catalyst with an intermediate: a catalyst is present at the start and regenerated at the end; an intermediate is created partway through and consumed before the end.",
              ],
            },
          ],
          questions: [
            {
              prompt: "A mechanism has two steps: Step 1 (slow): A + B → C + D; Step 2 (fast): C + A → E. What is the rate law predicted by this mechanism?",
              choices: ["rate = k[C][A]", "rate = k[A][B]", "rate = k[A]²[B]", "rate = k[E]"],
              answerIndex: 1,
              explanation: "The rate law is written directly from the rate-determining (slowest) step; since step 1 is A + B → C + D, the predicted rate law is rate = k[A][B].",
            },
            {
              prompt: "In the mechanism above, what type of species is C?",
              choices: ["A catalyst", "An intermediate", "A spectator ion", "The rate-determining reactant"],
              answerIndex: 1,
              explanation: "C is produced in step 1 and consumed in step 2, so it never appears in the overall equation — the definition of a reaction intermediate.",
            },
            {
              prompt: "How does a catalyst increase the rate of a reaction?",
              choices: [
                "It increases the temperature of the reaction mixture",
                "It shifts the equilibrium position toward products",
                "It provides an alternate pathway with a lower activation energy",
                "It increases the concentration of reactants",
              ],
              answerIndex: 2,
              explanation: "A catalyst offers a different reaction mechanism with a lower activation energy barrier, allowing more collisions to succeed without changing the reaction's thermodynamics.",
            },
            {
              prompt: "Which molecularity is least likely to occur for an elementary step, and why?",
              choices: [
                "Unimolecular, because only one particle is involved",
                "Bimolecular, because two particles rarely meet",
                "Termolecular, because three particles colliding simultaneously with correct orientation and energy is statistically unlikely",
                "All molecularities are equally likely",
              ],
              answerIndex: 2,
              explanation: "Termolecular steps require three particles to collide at once with sufficient energy and proper orientation, a much rarer event than a two-particle collision, making termolecular elementary steps uncommon.",
            },
          ],
        },
        {
          slug: "integrated-rate-laws-half-life-and-arrhenius",
          title: "Integrated Rate Laws, Half-Life, and the Arrhenius Equation",
          summary: "Using integrated rate laws and half-life to track concentration over time, and the Arrhenius equation to connect rate to activation energy and temperature.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "Integrated rate laws relate concentration to time: zero order, [A] = −kt + [A]₀ (linear plot of [A] vs. t); first order, ln[A] = −kt + ln[A]₀ (linear plot of ln[A] vs. t); second order, 1/[A] = kt + 1/[A]₀ (linear plot of 1/[A] vs. t).",
                "Plotting concentration data in each of these three forms and finding which gives a straight line reveals the reaction order; the slope of that line equals ±k.",
                "Half-life (t½) is the time for a reactant's concentration to drop to half its initial value; for first-order reactions, t½ = 0.693/k is constant and independent of concentration — a defining feature of first-order kinetics.",
                "The Arrhenius equation, k = Ae^(−Ea/RT), shows that the rate constant increases with temperature and decreases with activation energy (Ea); A is the frequency factor related to collision frequency and orientation.",
                "Collision theory states that reactions occur only when particles collide with sufficient energy (≥ Ea) and proper orientation; raising temperature increases both the frequency and average energy of collisions, dramatically increasing the fraction with enough energy to react.",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "If a reaction's half-life stays constant regardless of starting concentration, it's first order — a fast way to identify order from experimental data.",
                "The linearized Arrhenius equation, ln k = −(Ea/R)(1/T) + ln A, lets you find Ea from the slope of a ln k vs. 1/T plot — remember the slope is −Ea/R, not +Ea/R.",
              ],
            },
          ],
          questions: [
            {
              prompt: "A first-order reaction has a rate constant k = 0.0231 s⁻¹. What is its half-life?",
              choices: ["15 s", "30 s", "43 s", "60 s"],
              answerIndex: 1,
              explanation: "For a first-order reaction, t½ = 0.693/k = 0.693 ÷ 0.0231 s⁻¹ ≈ 30 s.",
            },
            {
              prompt: "A plot of 1/[A] versus time gives a straight line. What is the order of the reaction with respect to A?",
              choices: ["Zero order", "First order", "Second order", "Cannot be determined"],
              answerIndex: 2,
              explanation: "The integrated rate law for a second-order reaction, 1/[A] = kt + 1/[A]₀, is linear only when 1/[A] is plotted against time.",
            },
            {
              prompt: "According to the Arrhenius equation, what happens to the rate constant k as temperature increases, with Ea and A held constant?",
              choices: [
                "k decreases exponentially",
                "k increases because more molecules have kinetic energy exceeding Ea",
                "k is unaffected by temperature",
                "k decreases linearly",
              ],
              answerIndex: 1,
              explanation: "Raising temperature increases the fraction of molecules with kinetic energy at or above the activation energy, which increases k exponentially, per k = Ae^(−Ea/RT).",
            },
            {
              prompt: "A reaction's half-life doubles when the initial concentration of reactant is doubled. What order is the reaction?",
              choices: ["Zero order", "First order", "Second order", "Third order"],
              answerIndex: 0,
              explanation: "For a zero-order reaction, t½ = [A]₀/(2k), which is directly proportional to initial concentration — doubling [A]₀ doubles the half-life, unlike first order (constant t½) or second order.",
            },
          ],
        },
      ],
    },
    {
      slug: "thermodynamics",
      title: "Thermodynamics",
      summary: "Tracking energy flow in chemical and physical processes through calorimetry, bond enthalpies, and Hess's law.",
      lessons: [
        {
          slug: "energy-heat-transfer-and-calorimetry",
          title: "Energy, Heat Transfer, and Calorimetry",
          summary: "Distinguishing heat from temperature and using calorimetry to measure the energy absorbed or released by a process.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "An exothermic process releases energy to the surroundings (ΔH < 0, surroundings warm up); an endothermic process absorbs energy from the surroundings (ΔH > 0, surroundings cool down).",
                "Heat (q) is energy transferred due to a temperature difference; temperature measures average kinetic energy of particles, while heat measures total energy transfer — a large object at lower temperature can hold more total thermal energy than a small hot one.",
                "Specific heat capacity (c) is the energy needed to raise 1 gram of a substance by 1°C; q = mcΔT relates heat, mass, specific heat, and temperature change — water's c = 4.18 J/(g·°C) is unusually high.",
                "In calorimetry, heat lost by a hotter substance equals heat gained by a cooler substance, assuming no heat loss to surroundings: qlost = −qgained, letting you find an unknown specific heat, final temperature, or heat released by a reaction.",
                "During a phase change (melting, boiling), temperature stays constant while heat is absorbed or released to break or form intermolecular forces; this energy is quantified by the heat of fusion (ΔHfus) or heat of vaporization (ΔHvap): q = n·ΔH.",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "On a heating curve, the flat (plateau) regions represent phase changes with no temperature change, while the sloped regions represent a single phase heating up.",
                "Watch your sign convention: q is positive when heat flows into the system (endothermic) and negative when heat flows out (exothermic).",
              ],
            },
          ],
          questions: [
            {
              prompt: "How much heat is required to raise the temperature of 50.0 g of water from 25.0°C to 75.0°C? (c_water = 4.18 J/(g·°C))",
              choices: ["1045 J", "10,450 J", "20,900 J", "104,500 J"],
              answerIndex: 1,
              explanation: "q = mcΔT = (50.0 g)(4.18 J/(g·°C))(50.0°C) = 10,450 J ≈ 1.05 × 10⁴ J.",
            },
            {
              prompt: "A 20.0 g sample of metal at 95.0°C is dropped into 50.0 g of water at 20.0°C, and the final temperature is 24.0°C. Which best describes the energy transfer?",
              choices: [
                "Heat flowed from water to metal",
                "Heat flowed from metal to water until thermal equilibrium was reached",
                "No heat was transferred because the masses are different",
                "The metal absorbed heat while its temperature also increased",
              ],
              answerIndex: 1,
              explanation: "Heat spontaneously flows from the higher-temperature object (metal, 95°C) to the lower-temperature object (water, 20°C) until they reach the same final temperature — thermal equilibrium.",
            },
            {
              prompt: "On a heating curve for water, why does temperature stay constant while ice is melting at 0°C even though heat is still being added?",
              choices: [
                "The added heat is being used to increase kinetic energy of molecules",
                "The added heat is being used to break intermolecular forces (increasing potential energy) rather than raise kinetic energy",
                "No heat is actually being absorbed during melting",
                "Ice has zero specific heat capacity",
              ],
              answerIndex: 1,
              explanation: "During a phase change, added energy goes into overcoming intermolecular attractions (potential energy) rather than increasing average kinetic energy, so temperature holds steady until the phase change is complete.",
            },
            {
              prompt: "Which process is endothermic?",
              choices: ["Water freezing", "Steam condensing", "Ice melting", "A candle burning"],
              answerIndex: 2,
              explanation: "Melting requires absorbing energy to overcome some of the intermolecular forces holding a solid's particles in fixed positions, making it endothermic; freezing, condensing, and combustion all release energy.",
            },
          ],
        },
        {
          slug: "bond-enthalpies-and-enthalpy-of-formation",
          title: "Bond Enthalpies and Enthalpy of Formation",
          summary: "Estimating reaction enthalpy from bond energies and from tabulated standard enthalpies of formation.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "Breaking bonds always requires energy input (endothermic); forming bonds always releases energy (exothermic) — average bond energies (kJ/mol) are tabulated for common bond types.",
                "Estimating ΔHrxn from bond energies: ΔHrxn ≈ Σ(bonds broken) − Σ(bonds formed); a negative result means the reaction releases net energy.",
                "Standard enthalpy of formation (ΔH°f) is the enthalpy change when 1 mole of a compound forms from its elements in their standard states; ΔH°f of an element in its standard state, like O₂(g) or C(s, graphite), is defined as zero.",
                "Standard enthalpy of reaction can be calculated from tabulated ΔH°f values: ΔH°rxn = Σn·ΔH°f(products) − Σn·ΔH°f(reactants), using the coefficients from the balanced equation.",
                "Enthalpy is a state function — ΔH depends only on the initial and final states of the system, not the path taken, which is why Hess's law and formation-based calculations always give the same answer for a given reaction.",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "Use \"reactants minus products\" (bonds broken minus formed) for bond-energy calculations, but \"products minus reactants\" for formation-enthalpy calculations — these are opposite conventions and a common mix-up.",
                "Multiply each ΔH°f by its mole coefficient in the balanced equation before subtracting — forgetting the coefficients is the most common arithmetic error.",
              ],
            },
          ],
          questions: [
            {
              prompt: "Using ΔH°f values: CO₂(g) = −394 kJ/mol, H₂O(l) = −286 kJ/mol, C₃H₈(g) = −104 kJ/mol, O₂(g) = 0 kJ/mol, find ΔH°rxn for C₃H₈ + 5O₂ → 3CO₂ + 4H₂O.",
              choices: ["−1660 kJ", "−2044 kJ", "+2220 kJ", "−2220 kJ"],
              answerIndex: 3,
              explanation: "ΔH°rxn = [3(−394) + 4(−286)] − [(−104) + 5(0)] = (−2326) − (−104) = −2222 kJ ≈ −2220 kJ, the enthalpy of combustion of propane.",
            },
            {
              prompt: "Which best describes the energy change when a chemical bond breaks?",
              choices: [
                "Energy is always released",
                "Energy is always absorbed",
                "No energy change occurs",
                "It depends on the atoms, but bond breaking is never energetically significant",
              ],
              answerIndex: 1,
              explanation: "Breaking any chemical bond requires an input of energy to overcome the attraction holding the atoms together, making bond breaking inherently endothermic.",
            },
            {
              prompt: "What is the standard enthalpy of formation of graphite, C(s), the standard state of carbon?",
              choices: ["−394 kJ/mol", "0 kJ/mol", "+717 kJ/mol", "It varies by sample"],
              answerIndex: 1,
              explanation: "Graphite is carbon's standard state at 1 atm and 25°C, so like all elements in their standard states, its ΔH°f is defined as exactly zero.",
            },
            {
              prompt: "Why do bond-energy calculations and formation-enthalpy calculations of ΔHrxn for the same reaction give the same (or very similar) result?",
              choices: [
                "They don't — the two methods always disagree",
                "Enthalpy is a state function, so ΔH depends only on initial and final states, not the calculation path",
                "Bond energies and formation enthalpies measure unrelated quantities",
                "Only formation-enthalpy calculations are valid for real reactions",
              ],
              answerIndex: 1,
              explanation: "Because enthalpy is a state function, any valid path from reactants to products — bond-energy accounting or formation-enthalpy accounting — must yield the same overall ΔH.",
            },
          ],
        },
        {
          slug: "hess-law-and-multi-step-enthalpy-calculations",
          title: "Hess's Law and Multi-Step Enthalpy Calculations",
          summary: "Combining known reactions to find the enthalpy of a target reaction that's hard to measure directly.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "Hess's law: if a target reaction can be written as the sum of two or more given reactions, ΔH for the target equals the sum of the ΔH values of those reactions, because enthalpy is path-independent.",
                "To manipulate a given equation: reversing it flips the sign of ΔH; multiplying all its coefficients by a factor multiplies ΔH by that same factor.",
                "When combining equations, species that appear on opposite sides of two equations, with the same coefficient, cancel out just like algebraic terms; the remaining species must exactly match the target equation.",
                "Hess's law calculations are especially useful for reactions that are difficult or unsafe to measure directly, such as combustion reactions that occur at very high temperatures or multi-step syntheses.",
                "A Hess's law \"cycle\" or energy diagram can visually represent alternate paths between the same reactants and products, reinforcing that total ΔH is identical regardless of the route.",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "Write out the target equation first, then work backward: figure out which given equation needs to be reversed and/or scaled so its species match up and cancel correctly.",
                "Double-check that every intermediate species cancels completely and that the final combined equation exactly matches the target equation in species, coefficients, and physical states.",
              ],
            },
          ],
          questions: [
            {
              prompt: "Given: (1) 2C(s) + O₂(g) → 2CO(g), ΔH = −221 kJ; (2) 2CO(g) + O₂(g) → 2CO₂(g), ΔH = −566 kJ. Find ΔH for 2C(s) + 2O₂(g) → 2CO₂(g).",
              choices: ["−345 kJ", "−787 kJ", "+345 kJ", "−393.5 kJ"],
              answerIndex: 1,
              explanation: "Adding equations (1) and (2) directly cancels the 2CO intermediate and gives 2C(s) + 2O₂(g) → 2CO₂(g); summing the ΔH values gives −221 + (−566) = −787 kJ.",
            },
            {
              prompt: "If reversing a given equation to fit a Hess's law cycle, what happens to its ΔH value?",
              choices: ["It stays the same", "It doubles", "Its sign flips", "It becomes zero"],
              answerIndex: 2,
              explanation: "Reversing the direction of a reaction reverses which side absorbs vs. releases energy, so the sign of ΔH flips.",
            },
            {
              prompt: "A given equation must be multiplied by 3 to match the coefficients needed in a target equation. What happens to its ΔH?",
              choices: ["It is divided by 3", "It stays the same", "It is multiplied by 3", "It is cubed"],
              answerIndex: 2,
              explanation: "Enthalpy is an extensive property proportional to the amount of substance reacting, so scaling an equation's coefficients by 3 scales its ΔH by the same factor of 3.",
            },
            {
              prompt: "Why is Hess's law especially useful for finding the ΔH of a reaction where graphite forms CO instead of CO₂?",
              choices: [
                "Because combustion always produces exactly CO in a lab setting",
                "Because it's difficult to control a reaction to stop cleanly at CO instead of proceeding to CO₂, so ΔH can't be measured directly but can be calculated from other known reactions",
                "Because Hess's law only works for combustion reactions",
                "Because CO has no measurable enthalpy of formation",
              ],
              answerIndex: 1,
              explanation: "In practice, carbon burned in oxygen tends to react further to CO₂, making a direct, clean measurement of C → CO's enthalpy impractical; Hess's law lets chemists calculate it indirectly from reactions that can be measured directly.",
            },
          ],
        },
      ],
    },
    {
      slug: "equilibrium",
      title: "Equilibrium",
      summary: "Describing the dynamic balance between forward and reverse reactions using the equilibrium constant, Le Chatelier's principle, and solubility equilibria.",
      lessons: [
        {
          slug: "the-equilibrium-constant-and-reaction-quotient",
          title: "The Equilibrium Constant and Reaction Quotient",
          summary: "Writing equilibrium expressions, calculating K, and comparing Q to K to predict which direction a reaction will shift.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "Chemical equilibrium is a dynamic state where the forward and reverse reaction rates are equal, so concentrations of reactants and products remain constant over time, even though the reactions haven't stopped.",
                "The equilibrium constant expression Kc = [products]^coefficients / [reactants]^coefficients uses only gases and aqueous species — pure solids and liquids are omitted since their concentrations are constant.",
                "Kp relates to Kc for gas-phase reactions by Kp = Kc(RT)^Δn, where Δn = moles of gaseous product − moles of gaseous reactant.",
                "The reaction quotient Q has the same expression as K but uses current, non-equilibrium concentrations; comparing Q to K predicts reaction direction: Q < K shifts forward (toward products), Q > K shifts in reverse (toward reactants), and Q = K means the system is already at equilibrium.",
                "A large K (K ≫ 1) means products are favored at equilibrium; a small K (K ≪ 1) means reactants are favored; ICE tables (Initial, Change, Equilibrium) organize the algebra for finding equilibrium concentrations.",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "Skip pure solids and pure liquids when writing K expressions — only include gases and dissolved (aqueous) species.",
                "If initial concentrations and K lead to messy algebra, check whether K is small enough to use the simplifying assumption that x is negligible compared to the initial concentration.",
              ],
            },
          ],
          questions: [
            {
              prompt: "Write the equilibrium expression for: CaCO₃(s) ⇌ CaO(s) + CO₂(g).",
              choices: ["K = [CaO][CO₂]/[CaCO₃]", "K = [CO₂]", "K = [CaCO₃]/[CaO][CO₂]", "K = [CaO]/[CaCO₃]"],
              answerIndex: 1,
              explanation: "Pure solids are omitted from the equilibrium expression since their concentration (density) doesn't change, leaving K = [CO₂].",
            },
            {
              prompt: "At a given temperature, K = 25 for a reaction. If Q is calculated to be 5 for the current mixture, which way will the reaction shift?",
              choices: [
                "Toward reactants, since Q < K",
                "Toward products, since Q < K",
                "No shift, since Q = K",
                "Toward reactants, since Q > K",
              ],
              answerIndex: 1,
              explanation: "Since Q (5) is less than K (25), the ratio of products to reactants must increase to reach equilibrium, so the reaction shifts forward, toward products.",
            },
            {
              prompt: "For the reaction N₂(g) + 3H₂(g) ⇌ 2NH₃(g), what is Δn used to convert between Kc and Kp?",
              choices: ["Δn = +2", "Δn = +4", "Δn = 0", "Δn = −2"],
              answerIndex: 3,
              explanation: "Δn = (moles of gaseous product) − (moles of gaseous reactant) = 2 − (1 + 3) = −2, so Kp = Kc(RT)⁻².",
            },
            {
              prompt: "A reaction has a very large equilibrium constant (K = 1 × 10¹⁵). What does this tell you about the reaction at equilibrium?",
              choices: [
                "The reaction barely proceeds forward at all",
                "The reaction strongly favors products at equilibrium",
                "The reaction is at equilibrium only at very high temperature",
                "K this large is impossible",
              ],
              answerIndex: 1,
              explanation: "A very large K means the numerator (products) vastly outweighs the denominator (reactants) at equilibrium, so the reaction essentially goes to completion, strongly favoring products.",
            },
          ],
        },
        {
          slug: "le-chateliers-principle-and-equilibrium-shifts",
          title: "Le Chatelier's Principle and Equilibrium Shifts",
          summary: "Predicting how concentration, pressure, volume, and temperature changes shift an equilibrium system to a new position.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "Le Chatelier's principle: if a stress is applied to a system at equilibrium, the system shifts in the direction that relieves the stress and establishes a new equilibrium.",
                "Adding a reactant or product shifts equilibrium away from the added species, consuming it; removing a species shifts equilibrium toward replacing it.",
                "For gas-phase reactions, decreasing volume (increasing pressure) shifts equilibrium toward the side with fewer moles of gas; increasing volume shifts toward the side with more moles of gas; adding an inert gas at constant volume does not shift equilibrium.",
                "Temperature changes actually change the value of K itself, unlike concentration/pressure changes which only shift the equilibrium position: raising temperature on an exothermic reaction (treat heat as a product) shifts equilibrium toward reactants and decreases K; raising temperature on an endothermic reaction (treat heat as a reactant) shifts toward products and increases K.",
                "A catalyst speeds up the rate of reaching equilibrium in both directions equally, so it has no effect on the equilibrium position or the value of K.",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "Treat heat like a chemical species — a reactant for endothermic reactions, a product for exothermic ones — to predict temperature-driven shifts using the same add/remove logic.",
                "Only concentration/pressure/volume changes involving gases or aqueous species matter — adding more of a pure solid or liquid does nothing to the equilibrium position.",
              ],
            },
          ],
          questions: [
            {
              prompt: "For the exothermic reaction 2SO₂(g) + O₂(g) ⇌ 2SO₃(g) + heat, what happens if the temperature is increased?",
              choices: [
                "Equilibrium shifts toward products, and K increases",
                "Equilibrium shifts toward reactants, and K decreases",
                "No change occurs",
                "Equilibrium shifts toward products, but K stays the same",
              ],
              answerIndex: 1,
              explanation: "Treating heat as a product in this exothermic reaction, adding heat shifts equilibrium back toward the reactants, and K decreases since less product is favored at the new equilibrium.",
            },
            {
              prompt: "For N₂(g) + 3H₂(g) ⇌ 2NH₃(g), what happens if the container volume is decreased at constant temperature?",
              choices: [
                "Equilibrium shifts toward reactants (more moles of gas)",
                "Equilibrium shifts toward products (fewer moles of gas)",
                "No shift occurs because K doesn't depend on volume",
                "The reaction stops entirely",
              ],
              answerIndex: 1,
              explanation: "Decreasing volume increases pressure, so the system shifts toward the side with fewer total moles of gas — here 2 mol NH₃ versus 4 mol of reactant gases — so equilibrium shifts toward products.",
            },
            {
              prompt: "Adding an inert gas like argon to a fixed-volume equilibrium container at constant temperature will:",
              choices: [
                "Shift equilibrium toward products",
                "Shift equilibrium toward reactants",
                "Not shift the equilibrium, since partial pressures of reactants and products are unchanged",
                "Double the value of K",
              ],
              answerIndex: 2,
              explanation: "Adding an inert gas increases total pressure but doesn't change the partial pressures or concentrations of the actual reactants and products, so it has no effect on the equilibrium position.",
            },
            {
              prompt: "Which change to a system at equilibrium will alter the actual value of K?",
              choices: ["Adding more reactant", "Decreasing the volume of the container", "Changing the temperature", "Adding a catalyst"],
              answerIndex: 2,
              explanation: "Concentration, pressure/volume changes, and catalysts only shift the position of equilibrium or the rate of reaching it; only a temperature change actually alters the numerical value of K.",
            },
          ],
        },
        {
          slug: "solubility-equilibria-and-ksp",
          title: "Solubility Equilibria and Ksp",
          summary: "Applying the solubility product constant to calculate molar solubility and predict precipitation, including the common ion effect.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "The solubility product constant, Ksp, is the equilibrium constant for the dissolution of a slightly soluble ionic solid: for AxBy(s) ⇌ xA^n+ + yB^m−, Ksp = [A]^x[B]^y.",
                "Molar solubility (s) is the number of moles of solid that dissolve per liter; for a 1:1 salt like AgCl, Ksp = s², so s = √Ksp, while for a 1:2 salt like PbI₂, Ksp = s(2s)² = 4s³.",
                "The common ion effect: adding a soluble salt that shares an ion with a slightly soluble compound shifts the dissolution equilibrium backward (Le Chatelier), decreasing the slightly soluble compound's molar solubility.",
                "Comparing the ion product (Q, calculated like Ksp but with current or initial concentrations) to Ksp predicts precipitation: Q > Ksp forms a precipitate; Q < Ksp means the solution is unsaturated; Q = Ksp means the solution is exactly saturated.",
                "Ksp values can only be directly compared to rank solubility when the compounds produce the same total number of ions with the same stoichiometric pattern; otherwise, molar solubility must be calculated for a valid comparison.",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "Set up an ICE table with \"s\" as the change in concentration, and remember to account for stoichiometric coefficients (e.g., 2s for a 1:2 salt) when squaring or cubing in the Ksp expression.",
                "For common-ion-effect problems, the initial concentration of the shared ion isn't zero — include it from the other soluble salt before setting up your ICE table.",
              ],
            },
          ],
          questions: [
            {
              prompt: "The Ksp of AgCl is 1.8 × 10⁻¹⁰. What is its molar solubility in pure water?",
              choices: ["1.8 × 10⁻¹⁰ M", "9.0 × 10⁻¹¹ M", "1.8 × 10⁻⁵ M", "1.3 × 10⁻⁵ M"],
              answerIndex: 3,
              explanation: "For a 1:1 salt, Ksp = s², so s = √(1.8 × 10⁻¹⁰) ≈ 1.3 × 10⁻⁵ M.",
            },
            {
              prompt: "How does adding NaCl to a saturated solution of AgCl affect the solubility of AgCl?",
              choices: [
                "It increases AgCl's solubility",
                "It decreases AgCl's solubility because of the common ion effect",
                "It has no effect on AgCl's solubility",
                "It converts AgCl into a soluble complex",
              ],
              answerIndex: 1,
              explanation: "The added Cl⁻ ion is common to both salts; by Le Chatelier's principle, this extra Cl⁻ shifts the AgCl ⇌ Ag⁺ + Cl⁻ equilibrium back toward the solid, lowering AgCl's molar solubility.",
            },
            {
              prompt: "A solution contains 1.0 × 10⁻⁴ M Pb²⁺ and 1.0 × 10⁻³ M Cl⁻. Ksp of PbCl₂ is 1.7 × 10⁻⁵. Will a precipitate form?",
              choices: [
                "Yes, because Q > Ksp",
                "No, because Q < Ksp",
                "Yes, because Q = Ksp",
                "Cannot be determined without temperature",
              ],
              answerIndex: 1,
              explanation: "Q = [Pb²⁺][Cl⁻]² = (1.0×10⁻⁴)(1.0×10⁻³)² = 1.0×10⁻¹⁰, far less than Ksp (1.7×10⁻⁵), so the solution is unsaturated and no precipitate forms.",
            },
            {
              prompt: "For a salt of formula MX₂ with molar solubility s, what is the correct Ksp expression?",
              choices: ["Ksp = s²", "Ksp = 2s²", "Ksp = 4s³", "Ksp = s³"],
              answerIndex: 2,
              explanation: "Dissolving MX₂ produces s mol/L of M²⁺ and 2s mol/L of X⁻, so Ksp = [M²⁺][X⁻]² = (s)(2s)² = 4s³.",
            },
          ],
        },
      ],
    },
    {
      slug: "acids-and-bases",
      title: "Acids and Bases",
      summary: "Applying Brønsted-Lowry theory, pH calculations, and equilibrium concepts to strong/weak acids, bases, buffers, and titrations.",
      lessons: [
        {
          slug: "acid-base-theories-and-ph-calculations",
          title: "Acid-Base Theories, pH, and Strong Acid/Base Calculations",
          summary: "Comparing acid-base definitions and calculating pH, pOH, and ion concentrations for strong acids and bases.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "Brønsted-Lowry theory defines an acid as a proton (H⁺) donor and a base as a proton acceptor; conjugate acid-base pairs differ by exactly one H⁺, such as HA/A⁻ or NH₄⁺/NH₃.",
                "Lewis theory defines an acid as an electron-pair acceptor and a base as an electron-pair donor — broader than Brønsted-Lowry, covering species like BF₃ that have no H⁺ to donate.",
                "pH = −log[H⁺] and pOH = −log[OH⁻]; at 25°C, pH + pOH = 14 and Kw = [H⁺][OH⁻] = 1.0 × 10⁻¹⁴, so a neutral solution has [H⁺] = [OH⁻] = 1.0 × 10⁻⁷ M (pH = 7).",
                "Strong acids (HCl, HBr, HI, HNO₃, HClO₄, H₂SO₄) and strong bases (Group 1 hydroxides, Ca(OH)₂, Sr(OH)₂, Ba(OH)₂) dissociate 100%, so [H⁺] or [OH⁻] equals the given concentration directly, times the number of ionizable H⁺/OH⁻.",
                "As temperature increases, Kw increases since water's autoionization is endothermic, so neutral pH can be slightly less than 7 at higher temperatures — neutral always means [H⁺] = [OH⁻], not necessarily exactly pH 7.",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "For a strong diprotic acid like H₂SO₄, the first proton dissociates completely; the AP exam usually treats it as approximately fully diprotic for strong-acid problems.",
                "Memorize the short list of strong acids and strong bases — everything else on the AP exam is treated as weak.",
              ],
            },
          ],
          questions: [
            {
              prompt: "What is the pH of a solution with [H⁺] = 1.0 × 10⁻³ M?",
              choices: ["3", "11", "3.0 × 10⁻³", "10⁻¹¹"],
              answerIndex: 0,
              explanation: "pH = −log(1.0 × 10⁻³) = 3.",
            },
            {
              prompt: "What is [OH⁻] in a solution with pH = 9.00 at 25°C?",
              choices: ["1.0 × 10⁻⁹ M", "1.0 × 10⁻⁵ M", "9.0 × 10⁻¹ M", "1.0 × 10⁻¹⁴ M"],
              answerIndex: 1,
              explanation: "pOH = 14.00 − 9.00 = 5.00, so [OH⁻] = 10⁻⁵·⁰⁰ = 1.0 × 10⁻⁵ M.",
            },
            {
              prompt: "What is the pH of a 0.010 M solution of Ba(OH)₂, a strong base?",
              choices: ["2.00", "11.70", "12.00", "12.30"],
              answerIndex: 3,
              explanation: "Each formula unit of Ba(OH)₂ releases 2 OH⁻, so [OH⁻] = 0.020 M, giving pOH = −log(0.020) = 1.70 and pH = 14.00 − 1.70 = 12.30.",
            },
            {
              prompt: "Which definition of acids and bases is broad enough to classify BF₃, which has no hydrogen to donate, as an acid?",
              choices: ["Arrhenius theory", "Brønsted-Lowry theory", "Lewis theory", "None of these classify BF₃ as an acid"],
              answerIndex: 2,
              explanation: "Lewis theory defines an acid as any electron-pair acceptor; BF₃ has an empty orbital on boron that accepts an electron pair from a Lewis base, making it a Lewis acid despite having no H⁺ to donate.",
            },
          ],
        },
        {
          slug: "weak-acids-weak-bases-and-ka-kb",
          title: "Weak Acids, Weak Bases, and Ka/Kb",
          summary: "Using Ka and Kb expressions and ICE tables to find the pH of weak acid and weak base solutions.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "A weak acid only partially ionizes in water: HA ⇌ H⁺ + A⁻, with Ka = [H⁺][A⁻]/[HA]; a smaller Ka means a weaker acid with less ionization at equilibrium.",
                "A weak base only partially ionizes: B + H₂O ⇌ BH⁺ + OH⁻, with Kb = [BH⁺][OH⁻]/[B]; a smaller Kb means a weaker base.",
                "For a conjugate acid-base pair, Ka × Kb = Kw = 1.0 × 10⁻¹⁴ at 25°C — a stronger acid has a weaker conjugate base, and vice versa.",
                "Percent ionization = ([H⁺] at equilibrium ÷ initial concentration of acid) × 100%; percent ionization increases as a weak acid solution is diluted, even though [H⁺] itself decreases.",
                "For weak acid/base ICE table problems, when Ka (or Kb) is small relative to initial concentration, the simplifying assumption \"initial − x ≈ initial\" avoids the quadratic formula.",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "After solving with the simplifying assumption, check that x is less than about 5% of the initial concentration — if not, use the quadratic formula instead.",
                "Remember Ka × Kb = Kw only applies to a true conjugate acid-base pair, like NH₄⁺/NH₃, not to two random acids and bases.",
              ],
            },
          ],
          questions: [
            {
              prompt: "A 0.10 M solution of a weak acid HA has Ka = 1.0 × 10⁻⁵. What is the approximate [H⁺] at equilibrium?",
              choices: ["1.0 × 10⁻³ M", "1.0 × 10⁻⁵ M", "1.0 × 10⁻⁶ M", "1.0 × 10⁻⁴ M"],
              answerIndex: 0,
              explanation: "Using the simplifying assumption, x² = Ka × C = (1.0×10⁻⁵)(0.10) = 1.0×10⁻⁶, so x = [H⁺] ≈ 1.0×10⁻³ M.",
            },
            {
              prompt: "The conjugate acid of NH₃ is NH₄⁺, with Ka = 5.6 × 10⁻¹⁰. What is Kb for NH₃?",
              choices: ["5.6 × 10⁻¹⁰", "1.0 × 10⁻¹⁴", "1.8 × 10⁻⁵", "5.6 × 10⁻⁵"],
              answerIndex: 2,
              explanation: "Ka × Kb = Kw, so Kb = (1.0×10⁻¹⁴) ÷ (5.6×10⁻¹⁰) ≈ 1.8×10⁻⁵.",
            },
            {
              prompt: "What happens to the percent ionization of a weak acid as its solution is diluted with more water?",
              choices: [
                "Percent ionization decreases",
                "Percent ionization increases, even though [H⁺] decreases",
                "Percent ionization stays exactly the same",
                "Ka changes to compensate",
              ],
              answerIndex: 1,
              explanation: "Dilution shifts the ionization equilibrium forward, increasing the fraction of acid molecules that ionize, even as the absolute [H⁺] drops.",
            },
            {
              prompt: "Which acid is the strongest, based on these Ka values: HA (Ka = 1.8×10⁻⁵), HB (Ka = 6.2×10⁻⁸), HC (Ka = 1.0×10⁻²)?",
              choices: ["HA", "HB", "HC", "All are equally strong"],
              answerIndex: 2,
              explanation: "A larger Ka indicates a greater extent of ionization and thus a stronger weak acid; HC's Ka (1.0×10⁻²) is the largest of the three.",
            },
          ],
        },
        {
          slug: "buffers-and-titration-curves",
          title: "Buffers and Titration Curves",
          summary: "Explaining how buffers resist pH change and interpreting the key regions and special points of acid-base titration curves.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "A buffer is a mixture of a weak acid and its conjugate base, or a weak base and its conjugate acid, in comparable amounts; it resists pH change by neutralizing small additions of strong acid or base.",
                "The Henderson-Hasselbalch equation, pH = pKa + log([A⁻]/[HA]), calculates buffer pH directly from the ratio of conjugate base to weak acid; buffer capacity is greatest when [A⁻] = [HA], so pH = pKa.",
                "On a weak acid–strong base titration curve, the half-equivalence point (half the volume needed to reach equivalence) has [HA] = [A⁻], so pH = pKa at that point — a quick way to read Ka off a graph.",
                "The equivalence point is where moles of acid exactly equal moles of base; for a weak acid–strong base titration, the equivalence point pH is greater than 7, since the conjugate base makes the solution basic, while a strong acid–strong base titration has an equivalence point at pH 7.",
                "An indicator should be chosen so its color-change range, roughly pKa,indicator ± 1, brackets the steep, vertical jump in pH at the titration's equivalence point.",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "To identify the half-equivalence point on a titration curve, find the volume that is exactly half of the equivalence-point volume — the pH there equals the acid's pKa.",
                "Buffers work best when the acid and conjugate base concentrations are close to equal — a ratio drifting past about 10:1 in either direction sharply reduces buffering ability.",
              ],
            },
          ],
          questions: [
            {
              prompt: "A buffer contains 0.30 M acetic acid (Ka = 1.8×10⁻⁵, pKa = 4.74) and 0.30 M sodium acetate. What is the buffer's pH?",
              choices: ["4.74", "3.00", "7.00", "9.26"],
              answerIndex: 0,
              explanation: "By the Henderson-Hasselbalch equation, pH = pKa + log([A⁻]/[HA]); since the concentrations are equal, log(1) = 0, so pH = pKa = 4.74.",
            },
            {
              prompt: "On a titration curve for a weak acid titrated with a strong base, what is true of the pH at the equivalence point?",
              choices: [
                "pH = 7.00 exactly",
                "pH < 7, since the solution is acidic",
                "pH > 7, since the conjugate base formed makes the solution basic",
                "pH cannot be determined",
              ],
              answerIndex: 2,
              explanation: "At the equivalence point, all the weak acid has been converted to its conjugate base (A⁻), which reacts with water to produce OH⁻, making the solution basic (pH > 7).",
            },
            {
              prompt: "50.0 mL of titrant is needed to reach the equivalence point of a weak acid titration. At what volume of added titrant does pH = pKa?",
              choices: ["12.5 mL", "25.0 mL", "50.0 mL", "100.0 mL"],
              answerIndex: 1,
              explanation: "The half-equivalence point occurs at half the equivalence volume (25.0 mL), where [HA] = [A⁻] and therefore pH = pKa.",
            },
            {
              prompt: "Why does adding a small amount of strong acid to a buffer cause only a small pH change, instead of a large drop?",
              choices: [
                "Buffers contain no water to react with the acid",
                "The conjugate base component of the buffer neutralizes the added H⁺, converting it to the weak acid form",
                "Strong acid cannot react with a buffer solution",
                "The buffer's Ka changes to compensate",
              ],
              answerIndex: 1,
              explanation: "The buffer's conjugate base (A⁻) reacts with the added H⁺ to form more of the weak acid (HA), consuming most of the added strong acid and preventing a large shift in the [A⁻]/[HA] ratio and thus in pH.",
            },
          ],
        },
      ],
    },
    {
      slug: "applications-of-thermodynamics",
      title: "Applications of Thermodynamics",
      summary: "Using entropy and Gibbs free energy to predict spontaneity, connecting free energy to equilibrium, and analyzing electrochemical cells.",
      lessons: [
        {
          slug: "entropy-and-gibbs-free-energy",
          title: "Entropy and Gibbs Free Energy",
          summary: "Predicting the sign of entropy change and combining it with enthalpy to determine reaction spontaneity via Gibbs free energy.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "Entropy (S) measures the dispersal of energy/matter or the number of accessible microstates of a system; entropy increases (ΔS > 0) when gas moles increase, a solid/liquid becomes a gas, a solid dissolves, or a mixture becomes more disordered.",
                "The second law of thermodynamics states that the total entropy of the universe (system + surroundings) increases for any spontaneous process, even if the system's own entropy decreases.",
                "Gibbs free energy combines enthalpy and entropy into a single spontaneity criterion: ΔG = ΔH − TΔS (T in Kelvin); a process is spontaneous when ΔG < 0.",
                "The four sign combinations: ΔH < 0, ΔS > 0 → always spontaneous; ΔH > 0, ΔS < 0 → never spontaneous; ΔH < 0, ΔS < 0 → spontaneous only at low T; ΔH > 0, ΔS > 0 → spontaneous only at high T.",
                "At the temperature where a reaction switches from spontaneous to nonspontaneous (ΔG = 0), T = ΔH/ΔS — this identifies the crossover temperature for phase changes and other equilibrium-like transitions.",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "To predict the sign of ΔS quickly, count moles of gas on each side of the equation — more gas moles on the product side means ΔS is positive.",
                "For \"spontaneous only at low/high T\" cases, plug in ΔH/ΔS to find the crossover temperature, then reason about which side of that temperature makes ΔG negative.",
              ],
            },
          ],
          questions: [
            {
              prompt: "Which process has a positive (increasing) entropy change?",
              choices: [
                "H₂O(g) → H₂O(l)",
                "2H₂(g) + O₂(g) → 2H₂O(l)",
                "NaCl(s) → Na⁺(aq) + Cl⁻(aq)",
                "N₂(g) + 3H₂(g) → 2NH₃(g)",
              ],
              answerIndex: 2,
              explanation: "Dissolving a solid into freely moving, hydrated ions increases disorder; the other options all decrease moles of gas or condense a gas into a liquid, decreasing entropy.",
            },
            {
              prompt: "A reaction has ΔH = +45 kJ and ΔS = +150 J/K. At what approximate temperature does the reaction become spontaneous?",
              choices: ["150 K", "450 K", "45 K", "300 K"],
              answerIndex: 3,
              explanation: "The crossover temperature is T = ΔH/ΔS = 45,000 J ÷ 150 J/K = 300 K; since ΔH > 0 and ΔS > 0, the reaction becomes spontaneous above this temperature.",
            },
            {
              prompt: "A reaction has ΔH < 0 and ΔS < 0. Under which condition is it spontaneous?",
              choices: ["At all temperatures", "Never spontaneous at any temperature", "Only at low temperatures", "Only at high temperatures"],
              answerIndex: 2,
              explanation: "With ΔH < 0 and ΔS < 0, ΔG = ΔH − TΔS becomes more favorable only when T is small enough that the −TΔS term stays small, so the reaction is spontaneous only at low temperature.",
            },
            {
              prompt: "How can a process with a decrease in the system's entropy still be spontaneous?",
              choices: [
                "It can't — decreasing system entropy always means nonspontaneous",
                "As long as the entropy of the surroundings increases enough to make the total (universe) entropy increase",
                "Spontaneity has nothing to do with entropy",
                "Only if temperature is zero Kelvin",
              ],
              answerIndex: 1,
              explanation: "The second law requires total entropy (system + surroundings) to increase for a spontaneous process; an exothermic reaction can release enough heat to increase the surroundings' entropy more than the system's entropy decreases.",
            },
          ],
        },
        {
          slug: "free-energy-equilibrium-and-coupled-reactions",
          title: "Free Energy, Equilibrium, and Coupled Reactions",
          summary: "Relating standard free energy to the equilibrium constant and using energetically favorable reactions to drive unfavorable ones.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "Standard free energy of reaction can be calculated from standard free energies of formation: ΔG°rxn = ΣnΔG°f(products) − ΣnΔG°f(reactants), analogous to the enthalpy of formation calculation.",
                "ΔG°rxn relates directly to the equilibrium constant: ΔG° = −RTlnK; a very negative ΔG° corresponds to a large K, and a very positive ΔG° corresponds to a small K.",
                "When ΔG° = 0, K = 1, meaning the reaction is at equilibrium under standard conditions with roughly equal amounts of reactants and products.",
                "ΔG (non-standard, actual free energy) differs from ΔG° when concentrations aren't at standard conditions: ΔG = ΔG° + RTlnQ; a reaction proceeds spontaneously forward as long as ΔG < 0, even if ΔG° is positive, provided Q is small enough.",
                "Coupled reactions use a thermodynamically favorable (very negative ΔG) reaction, such as ATP hydrolysis in biology, to drive an unfavorable (positive ΔG) reaction by summing their free energies to get a net negative ΔG.",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "Remember the sign relationship: negative ΔG° ↔ K > 1 (products favored); positive ΔG° ↔ K < 1 (reactants favored) — a good sanity check for calculations.",
                "Don't confuse ΔG° (fixed at standard conditions) with ΔG (changes as Q changes) — only ΔG, not ΔG°, determines spontaneity at any given moment away from standard conditions.",
              ],
            },
          ],
          questions: [
            {
              prompt: "A reaction has ΔG° = −5.7 kJ/mol at 298 K. Which best describes its equilibrium constant K?",
              choices: ["K is much less than 1", "K is approximately 1", "K is greater than 1", "K cannot be determined from ΔG°"],
              answerIndex: 2,
              explanation: "Since ΔG° = −RTlnK is negative, lnK must be positive, meaning K > 1; solving gives K ≈ 10, showing products are modestly favored at equilibrium.",
            },
            {
              prompt: "What is true about a reaction when ΔG° = 0?",
              choices: ["K = 0", "K = 1", "The reaction cannot occur", "ΔH must also equal zero"],
              answerIndex: 1,
              explanation: "Setting ΔG° = −RTlnK = 0 requires lnK = 0, so K = 1 — reactants and products are equally favored under standard conditions.",
            },
            {
              prompt: "A reaction has a positive ΔG° but is still observed to proceed forward under certain conditions in a living cell. How is this possible?",
              choices: [
                "It's not possible — ΔG° > 0 means never spontaneous",
                "The actual ΔG = ΔG° + RTlnQ can be negative if Q is kept small, or the reaction is coupled to a more favorable one",
                "ΔG° only applies to gases, not solutions",
                "Temperature doesn't affect ΔG for biological reactions",
              ],
              answerIndex: 1,
              explanation: "Away from standard conditions, actual spontaneity is governed by ΔG, which depends on Q, not the fixed ΔG°; cells also often couple an unfavorable reaction to a strongly favorable one so the net ΔG is negative.",
            },
            {
              prompt: "Which combination correctly matches an unfavorable reaction to a favorable one to produce a spontaneous coupled process?",
              choices: [
                "Reaction 1: ΔG = +30 kJ/mol; Reaction 2: ΔG = +10 kJ/mol → coupled ΔG = +40 kJ/mol",
                "Reaction 1: ΔG = +30 kJ/mol; Reaction 2: ΔG = −50 kJ/mol → coupled ΔG = −20 kJ/mol",
                "Reaction 1: ΔG = +30 kJ/mol; Reaction 2: ΔG = −20 kJ/mol → coupled ΔG = −10 kJ/mol",
                "Coupled reactions cannot change the overall sign of ΔG",
              ],
              answerIndex: 1,
              explanation: "Summing the free energies of coupled reactions, +30 kJ/mol + (−50 kJ/mol) = −20 kJ/mol; since the total is negative, the coupled process is spontaneous even though the first reaction alone is not.",
            },
          ],
        },
        {
          slug: "electrochemistry-galvanic-and-electrolytic-cells",
          title: "Electrochemistry: Galvanic and Electrolytic Cells",
          summary: "Balancing redox half-reactions and analyzing galvanic and electrolytic cells using standard reduction potentials.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "Oxidation is loss of electrons (increase in oxidation number); reduction is gain of electrons (decrease in oxidation number) — remembered as \"OIL RIG\" (Oxidation Is Loss, Reduction Is Gain).",
                "A galvanic (voltaic) cell uses a spontaneous redox reaction to generate electrical energy; electrons flow through an external wire from the anode (oxidation, negative terminal) to the cathode (reduction, positive terminal), while a salt bridge maintains charge balance.",
                "Standard cell potential: E°cell = E°cathode − E°anode, using standard reduction potentials from a reference table; a positive E°cell indicates a spontaneous reaction, connected to free energy by ΔG° = −nFE°cell.",
                "An electrolytic cell uses an external electrical energy source to force a nonspontaneous redox reaction to occur, such as in electroplating or recharging a battery; work must be put into the system, unlike a galvanic cell.",
                "The Nernst equation, E = E° − (RT/nF)lnQ, or the simplified form at 25°C, E = E° − (0.0592/n)logQ, calculates cell potential under non-standard conditions, showing E decreases as reactant is consumed and product accumulates.",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "Remember \"AN OX, RED CAT\": Anode = OXidation, CAThode = REDuction — this holds true in both galvanic and electrolytic cells, even though which electrode is positive/negative flips between the two cell types.",
                "To find E°cell from a table of standard reduction potentials, don't flip the sign of the half-reaction being oxidized — instead subtract: E°cell = E°(reduction half at cathode) − E°(reduction half at anode).",
              ],
            },
          ],
          questions: [
            {
              prompt: "In the reaction Zn(s) + Cu²⁺(aq) → Zn²⁺(aq) + Cu(s), which species is oxidized?",
              choices: ["Cu²⁺", "Cu", "Zn", "Zn²⁺"],
              answerIndex: 2,
              explanation: "Zn goes from oxidation state 0 to +2, losing 2 electrons — this loss of electrons is oxidation, meaning Zn is the species oxidized (and it is the reducing agent).",
            },
            {
              prompt: "Given E°(Cu²⁺/Cu) = +0.34 V and E°(Zn²⁺/Zn) = −0.76 V, what is E°cell for the reaction Zn(s) + Cu²⁺(aq) → Zn²⁺(aq) + Cu(s)?",
              choices: ["−0.42 V", "+0.42 V", "−1.10 V", "+1.10 V"],
              answerIndex: 3,
              explanation: "Copper is reduced (cathode) and zinc is oxidized (anode); E°cell = E°cathode − E°anode = 0.34 V − (−0.76 V) = +1.10 V, a spontaneous galvanic cell.",
            },
            {
              prompt: "What is the key difference between a galvanic cell and an electrolytic cell?",
              choices: [
                "Galvanic cells use a spontaneous reaction to produce electrical energy; electrolytic cells use electrical energy to force a nonspontaneous reaction",
                "Electrolytic cells always have a positive E°cell",
                "Galvanic cells don't involve redox reactions",
                "There is no meaningful difference between them",
              ],
              answerIndex: 0,
              explanation: "A galvanic cell converts the free energy of a spontaneous redox reaction into electrical work, while an electrolytic cell supplies electrical energy from an external source to drive a nonspontaneous redox reaction.",
            },
            {
              prompt: "According to the Nernst equation, what happens to a galvanic cell's voltage as the reaction proceeds and products accumulate (Q increases)?",
              choices: [
                "Voltage increases without limit",
                "Voltage decreases, approaching zero as the cell approaches equilibrium",
                "Voltage stays exactly at E° the entire time",
                "Voltage immediately drops to zero",
              ],
              answerIndex: 1,
              explanation: "As Q increases toward K, the term −(RT/nF)lnQ becomes more negative, so E decreases from E°; the cell voltage approaches zero as the reaction approaches equilibrium.",
            },
          ],
        },
      ],
    },
  ],
};

export default apChemistry;
