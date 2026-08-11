import type { Topic } from "../types";

const apEnvironmentalScience: Topic = {
  slug: "ap-environmental-science",
  title: "AP Environmental Science",
  category: "AP Courses",
  subtitle: "5 lessons: ecosystems through global change.",
  emoji: "🌎",
  accent: "#4a8f2b",
  lessons: [
    {
      slug: "ecosystems",
      title: "Lesson 1: Ecosystems",
      summary: "Energy flow, trophic levels, and biogeochemical cycles.",
      notes: [
        {
          heading: "Key Concepts",
          bullets: [
            "Energy flows one way through ecosystems, decreasing about 90% at each trophic level (the 10% rule).",
            "Producers (autotrophs) convert sunlight to chemical energy; primary, secondary, and tertiary consumers eat along the food chain.",
            "The carbon cycle moves carbon between the atmosphere, oceans, organisms, and rock via photosynthesis, respiration, and combustion.",
            "The nitrogen cycle relies on bacteria: fixation (N₂ → usable forms), nitrification, and denitrification (back to N₂).",
          ],
        },
        {
          heading: "Quick Tips",
          bullets: [
            "Because of the 10% rule, food chains rarely have more than 4-5 trophic levels — there just isn't enough energy left.",
            "Decomposers recycle nutrients at every trophic level, not just at the end of the chain.",
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
          prompt: "Bacteria that convert atmospheric N₂ into a usable form for plants perform:",
          choices: ["Denitrification", "Nitrogen fixation", "Nitrification", "Ammonification"],
          answerIndex: 1,
          explanation: "Nitrogen fixation converts inert atmospheric N₂ into ammonia or related compounds plants can use.",
        },
        {
          prompt: "An organism that eats only producers is called a:",
          choices: ["Primary consumer", "Secondary consumer", "Tertiary consumer", "Decomposer"],
          answerIndex: 0,
          explanation: "Primary consumers (herbivores) feed directly on producers, the first trophic level.",
        },
        {
          prompt: "Which process returns carbon to the atmosphere as CO₂?",
          choices: ["Photosynthesis", "Cellular respiration", "Nitrogen fixation", "Sedimentation"],
          answerIndex: 1,
          explanation: "Cellular respiration breaks down organic molecules and releases CO₂ back into the atmosphere.",
        },
      ],
    },
    {
      slug: "populations-communities",
      title: "Lesson 2: Populations & Communities",
      summary: "Carrying capacity, growth curves, and species interactions.",
      notes: [
        {
          heading: "Key Concepts",
          bullets: [
            "Carrying capacity (K) is the maximum population size an environment can sustainably support.",
            "Exponential growth is unlimited (J-curve); logistic growth slows as population nears carrying capacity (S-curve).",
            "Limiting factors can be density-dependent (competition, disease) or density-independent (natural disasters, climate).",
            "Symbiosis types: mutualism (+/+), commensalism (+/0), parasitism (+/−), and competition (−/−).",
          ],
        },
        {
          heading: "Quick Tips",
          bullets: [
            "A population that overshoots carrying capacity often crashes sharply afterward, rather than leveling off smoothly.",
            "Density-dependent factors matter more as a population gets larger and more crowded.",
          ],
        },
      ],
      questions: [
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
          prompt: "As a population approaches its carrying capacity under logistic growth, its growth rate:",
          choices: ["Increases", "Stays constant", "Slows down", "Immediately drops to zero"],
          answerIndex: 2,
          explanation: "Logistic growth slows as resources become limited near carrying capacity, producing the characteristic S-curve.",
        },
        {
          prompt: "A drought that kills off a population regardless of its size is an example of a:",
          choices: ["Density-dependent factor", "Density-independent factor", "Mutualistic relationship", "Carrying capacity increase"],
          answerIndex: 1,
          explanation: "Density-independent factors, like natural disasters, affect populations regardless of how crowded they are.",
        },
      ],
    },
    {
      slug: "earth-systems-resources",
      title: "Lesson 3: Earth Systems & Resources",
      summary: "Renewable vs. nonrenewable resources, soil, and water.",
      notes: [
        {
          heading: "Key Concepts",
          bullets: [
            "Renewable resources (solar, wind, timber if managed) can replenish; nonrenewable resources (fossil fuels, minerals) cannot on a human timescale.",
            "Soil horizons (O, A, B, C, R) reflect different stages of organic content and weathering.",
            "Freshwater is scarce globally — most of Earth's water is saline ocean water or locked in ice caps.",
          ],
        },
        {
          heading: "Quick Tips",
          bullets: [
            "A resource can be renewable in theory but become effectively nonrenewable if harvested faster than it regenerates (e.g., overfished stocks).",
            "The A horizon (topsoil) is richest in organic matter and most important for agriculture.",
          ],
        },
      ],
      questions: [
        {
          prompt: "Which of these is a nonrenewable resource?",
          choices: ["Solar energy", "Wind energy", "Coal", "Sustainably harvested timber"],
          answerIndex: 2,
          explanation: "Coal forms over millions of years and cannot be replenished on a human timescale, making it nonrenewable.",
        },
        {
          prompt: "Which soil horizon is typically richest in organic matter and best for growing crops?",
          choices: ["O horizon", "A horizon", "B horizon", "C horizon"],
          answerIndex: 1,
          explanation: "The A horizon (topsoil) has the most organic matter and nutrients, making it the most fertile layer.",
        },
        {
          prompt: "Roughly what portion of Earth's water is fresh and readily accessible (not locked in ice caps)?",
          choices: ["About 70%", "About 30%", "Less than 1%", "About 50%"],
          answerIndex: 2,
          explanation: "Less than 1% of Earth's water is fresh and readily accessible; most is ocean saltwater or frozen in ice caps and glaciers.",
        },
        {
          prompt: "A fishery harvested faster than fish can reproduce is best described as:",
          choices: [
            "Truly renewable regardless of harvest rate",
            "Nonrenewable, since minerals never regenerate",
            "Renewable in principle but effectively depleted by overharvesting",
            "Unaffected by human activity",
          ],
          answerIndex: 2,
          explanation: "Fish populations can renew themselves, but overharvesting faster than reproduction can occur effectively depletes the resource.",
        },
      ],
    },
    {
      slug: "pollution",
      title: "Lesson 4: Pollution",
      summary: "Types of pollution and their effects on ecosystems and health.",
      notes: [
        {
          heading: "Key Concepts",
          bullets: [
            "Primary pollutants are emitted directly (CO, SO₂); secondary pollutants form through reactions (ground-level ozone, acid rain).",
            "Eutrophication occurs when excess nutrients (often fertilizer runoff) cause algal blooms that deplete oxygen in water.",
            "Bioaccumulation is the buildup of toxins in an organism; biomagnification is the increase in toxin concentration up the food chain.",
          ],
        },
        {
          heading: "Quick Tips",
          bullets: [
            "Top predators (like large fish or birds of prey) are hit hardest by biomagnification since they're at the top of the food chain.",
            "Ground-level ozone is a pollutant, unlike the protective ozone layer high in the stratosphere.",
          ],
        },
      ],
      questions: [
        {
          prompt: "Excess fertilizer runoff into a lake most directly causes:",
          choices: ["Ocean acidification", "Eutrophication", "Ozone depletion", "Biomagnification"],
          answerIndex: 1,
          explanation: "Nutrient runoff triggers eutrophication — algal blooms that die off and deplete dissolved oxygen, harming aquatic life.",
        },
        {
          prompt: "The buildup of a toxin's concentration as it moves up the food chain is called:",
          choices: ["Bioaccumulation", "Eutrophication", "Biomagnification", "Denitrification"],
          answerIndex: 2,
          explanation: "Biomagnification specifically describes increasing toxin concentration at each higher trophic level.",
        },
        {
          prompt: "Ground-level ozone, a component of smog, is an example of a:",
          choices: ["Primary pollutant", "Secondary pollutant", "Greenhouse gas only", "Renewable resource"],
          answerIndex: 1,
          explanation: "Ground-level ozone forms from reactions between other pollutants and sunlight, making it a secondary pollutant.",
        },
        {
          prompt: "Which organism in a food chain would you expect to have the highest concentration of a biomagnifying toxin?",
          choices: ["A producer (plant)", "A primary consumer", "A secondary consumer", "A top predator (tertiary consumer)"],
          answerIndex: 3,
          explanation: "Biomagnification concentrates toxins at each step up the food chain, so top predators accumulate the most.",
        },
      ],
    },
    {
      slug: "global-change",
      title: "Lesson 5: Global Change",
      summary: "Climate change, biodiversity loss, and sustainability.",
      notes: [
        {
          heading: "Key Concepts",
          bullets: [
            "The greenhouse effect is natural and necessary; human-added CO₂, methane, and other gases are enhancing it, warming the planet.",
            "Evidence for climate change includes rising global temperatures, melting ice sheets, rising sea levels, and ocean acidification.",
            "Biodiversity loss is driven mainly by habitat destruction, invasive species, pollution, overharvesting, and climate change (HIPPCO).",
          ],
        },
        {
          heading: "Quick Tips",
          bullets: [
            "Ocean acidification comes from the ocean absorbing excess atmospheric CO₂, which forms carbonic acid.",
            "Habitat destruction is generally the single largest driver of biodiversity loss worldwide.",
          ],
        },
      ],
      questions: [
        {
          prompt: "Which gas is the primary human-caused contributor to the enhanced greenhouse effect?",
          choices: ["Oxygen", "Carbon dioxide", "Nitrogen", "Argon"],
          answerIndex: 1,
          explanation: "CO₂ from burning fossil fuels is the largest human contributor to the enhanced greenhouse effect.",
        },
        {
          prompt: "Ocean acidification is primarily caused by the ocean absorbing excess:",
          choices: ["Oxygen", "Carbon dioxide", "Nitrogen", "Methane"],
          answerIndex: 1,
          explanation: "Absorbed CO₂ reacts with seawater to form carbonic acid, lowering ocean pH.",
        },
        {
          prompt: "What is generally considered the single largest driver of global biodiversity loss?",
          choices: ["Invasive species", "Habitat destruction", "Overharvesting", "Pollution"],
          answerIndex: 1,
          explanation: "Habitat destruction (from agriculture, development, and deforestation) is typically the leading cause of biodiversity loss.",
        },
        {
          prompt: "Which of these is direct physical evidence used to track climate change over time?",
          choices: ["Ice core samples", "Population census data", "GDP growth rates", "Stock market trends"],
          answerIndex: 0,
          explanation: "Ice cores trap ancient air bubbles and preserve a historical record of atmospheric CO₂ and temperature.",
        },
      ],
    },
  ],
};

export default apEnvironmentalScience;
