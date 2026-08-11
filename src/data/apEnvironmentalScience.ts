import type { Topic } from "../types";

const apEnvironmentalScience: Topic = {
  slug: "ap-environmental-science",
  title: "AP Environmental Science",
  category: "AP Courses",
  subtitle: "Ecosystems, populations, resources, pollution, and global change.",
  emoji: "🌎",
  accent: "#4a8f2b",
  notes: [
    {
      heading: "Ecosystems",
      bullets: [
        "Energy flows one way through ecosystems, decreasing about 90% at each trophic level (the 10% rule).",
        "Producers (autotrophs) convert sunlight to chemical energy; primary, secondary, and tertiary consumers eat along the food chain.",
        "The carbon cycle moves carbon between the atmosphere, oceans, organisms, and rock via photosynthesis, respiration, and combustion.",
        "The nitrogen cycle relies on bacteria: fixation (N₂ → usable forms), nitrification, and denitrification (back to N₂).",
      ],
    },
    {
      heading: "Populations & Communities",
      bullets: [
        "Carrying capacity (K) is the maximum population size an environment can sustainably support.",
        "Exponential growth is unlimited (J-curve); logistic growth slows as population nears carrying capacity (S-curve).",
        "Limiting factors can be density-dependent (competition, disease) or density-independent (natural disasters, climate).",
        "Symbiosis types: mutualism (+/+), commensalism (+/0), parasitism (+/−), and competition (−/−).",
      ],
    },
    {
      heading: "Earth Systems & Resources",
      bullets: [
        "Renewable resources (solar, wind, timber if managed) can replenish; nonrenewable resources (fossil fuels, minerals) cannot on a human timescale.",
        "Soil horizons (O, A, B, C, R) reflect different stages of organic content and weathering.",
        "Freshwater is scarce globally — most of Earth's water is saline ocean water or locked in ice caps.",
      ],
    },
    {
      heading: "Pollution",
      bullets: [
        "Primary pollutants are emitted directly (CO, SO₂); secondary pollutants form through reactions (ground-level ozone, acid rain).",
        "Eutrophication occurs when excess nutrients (often fertilizer runoff) cause algal blooms that deplete oxygen in water.",
        "Bioaccumulation is the buildup of toxins in an organism; biomagnification is the increase in toxin concentration up the food chain.",
      ],
    },
    {
      heading: "Global Change",
      bullets: [
        "The greenhouse effect is natural and necessary; human-added CO₂, methane, and other gases are enhancing it, warming the planet.",
        "Evidence for climate change includes rising global temperatures, melting ice sheets, rising sea levels, and ocean acidification.",
        "Biodiversity loss is driven mainly by habitat destruction, invasive species, pollution, overharvesting, and climate change (HIPPCO).",
      ],
    },
  ],
  questions: [
    {
      prompt: "Approximately what percentage of energy transfers from one trophic level to the next?",
      choices: ["1%", "10%", "50%", "90%"],
      answerIndex: 1,
      explanation: "The 10% rule states roughly 10% of energy is transferred to the next trophic level; the rest is lost as heat or used for life processes.",
    },
    {
      prompt: "A population growing without limiting factors follows which growth curve?",
      choices: ["Logistic (S-curve)", "Exponential (J-curve)", "Linear", "Cyclical only"],
      answerIndex: 1,
      explanation: "Without limiting factors, populations grow exponentially, producing a J-shaped curve.",
    },
    {
      prompt: "Which symbiotic relationship benefits one organism while harming the other?",
      choices: ["Mutualism", "Commensalism", "Parasitism", "Neutralism"],
      answerIndex: 2,
      explanation: "Parasitism is a +/− relationship: the parasite benefits while the host is harmed.",
    },
    {
      prompt: "Excess fertilizer runoff into a lake most directly causes:",
      choices: ["Ocean acidification", "Eutrophication", "Ozone depletion", "Biomagnification"],
      answerIndex: 1,
      explanation: "Nutrient runoff triggers eutrophication — algal blooms that die off and deplete dissolved oxygen, harming aquatic life.",
    },
    {
      prompt: "Which of these is a nonrenewable resource?",
      choices: ["Solar energy", "Wind energy", "Coal", "Sustainably harvested timber"],
      answerIndex: 2,
      explanation: "Coal forms over millions of years and cannot be replenished on a human timescale, making it nonrenewable.",
    },
    {
      prompt: "The buildup of a toxin's concentration as it moves up the food chain is called:",
      choices: ["Bioaccumulation", "Eutrophication", "Biomagnification", "Denitrification"],
      answerIndex: 2,
      explanation: "Biomagnification specifically describes increasing toxin concentration at each higher trophic level.",
    },
    {
      prompt: "Which gas is the primary human-caused contributor to the enhanced greenhouse effect?",
      choices: ["Oxygen", "Carbon dioxide", "Nitrogen", "Argon"],
      answerIndex: 1,
      explanation: "CO₂ from burning fossil fuels is the largest human contributor to the enhanced greenhouse effect.",
    },
    {
      prompt: "Bacteria that convert atmospheric N₂ into a usable form for plants perform:",
      choices: ["Denitrification", "Nitrogen fixation", "Nitrification", "Ammonification"],
      answerIndex: 1,
      explanation: "Nitrogen fixation converts inert atmospheric N₂ into ammonia or related compounds plants can use.",
    },
  ],
};

export default apEnvironmentalScience;
