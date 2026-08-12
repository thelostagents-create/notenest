import type { Topic } from "../types";

const apPsychology: Topic = {
  slug: "ap-psychology",
  title: "AP Psychology",
  category: "AP Courses",
  subtitle: "5 units, 20 lessons: biological bases through mental & physical health.",
  emoji: "🧠",
  accent: "#c2578a",
  units: [
    {
      slug: "biological-bases-of-behavior",
      title: "Biological Bases of Behavior",
      summary: "Neurons, brain structures, the nervous and endocrine systems, and sleep/consciousness.",
      lessons: [
        {
          slug: "neurons-and-neurotransmitters",
          title: "Neurons and Neurotransmitters",
          summary: "How neurons communicate and how neurotransmitters shape behavior and mood.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "Neuron structure: dendrites receive signals, the cell body (soma) integrates them, the axon (often myelin-sheathed) carries the impulse, and axon terminals release neurotransmitters into the synapse.",
                "An action potential fires all-or-none once a stimulus reaches threshold; the sodium-potassium pump restores resting potential, and myelin sheaths speed transmission (multiple sclerosis damages myelin).",
                "Key neurotransmitters: dopamine (reward, movement — linked to schizophrenia and Parkinson's), serotonin (mood, hunger, sleep — targeted by SSRIs), acetylcholine (muscle movement, learning/memory — depleted in Alzheimer's), norepinephrine (arousal, alertness), GABA (main inhibitory neurotransmitter), and glutamate (main excitatory neurotransmitter).",
                "Agonists mimic or enhance a neurotransmitter's effect at the synapse; antagonists block or reduce it (e.g., botulinum toxin blocks ACh release; many antipsychotics are dopamine antagonists).",
                "Reuptake is the sending neuron's reabsorption of leftover neurotransmitter; SSRIs work by blocking serotonin reuptake, leaving more serotonin active in the synapse.",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "Memory device: 'ACh for Action' (acetylcholine drives muscle action) and 'GABA puts on the brakes' (inhibitory).",
                "Don't confuse agonist (increases/mimics activity) with antagonist (blocks it) — an agonist 'agrees,' an antagonist 'argues.'",
                "Connect neurotransmitter imbalance to disorders: low dopamine links to Parkinson's, excess dopamine activity to schizophrenia symptoms, low serotonin to depression, and low ACh to Alzheimer's.",
              ],
            },
          ],
          questions: [
            {
              prompt: "Which part of the neuron receives incoming signals from other neurons?",
              choices: ["Axon terminal", "Dendrite", "Myelin sheath", "Axon"],
              answerIndex: 1,
              explanation: "Dendrites are the branch-like extensions that receive neurotransmitter signals from neighboring neurons and pass them toward the cell body.",
            },
            {
              prompt: "A drug that blocks the reuptake of serotonin at the synapse would most likely be prescribed to treat:",
              choices: ["Depression", "Parkinson's disease", "Alzheimer's disease", "Muscular dystrophy"],
              answerIndex: 0,
              explanation: "SSRIs (selective serotonin reuptake inhibitors) block reuptake so more serotonin remains active in the synapse, which helps relieve depressive symptoms.",
            },
            {
              prompt: "A drug that blocks a neurotransmitter's receptor site, preventing it from having its usual effect, is called a(n):",
              choices: ["Reuptake inhibitor", "Agonist", "Antagonist", "Threshold stimulant"],
              answerIndex: 2,
              explanation: "Antagonists occupy or block receptor sites so the natural neurotransmitter cannot bind and produce its normal effect.",
            },
            {
              prompt: "The all-or-none principle of neural firing means that:",
              choices: [
                "Neurotransmitters are released continuously regardless of stimulation",
                "Every neuron in the brain fires simultaneously",
                "Only motor neurons obey electrical laws",
                "A neuron either fires at full strength or doesn't fire at all",
              ],
              answerIndex: 3,
              explanation: "Once a stimulus reaches threshold, the neuron fires an action potential at full strength; the intensity of a stimulus is coded by how often a neuron fires, not by the size of the impulse.",
            },
          ],
        },
        {
          slug: "brain-structures-and-functions",
          title: "The Brain: Structures and Functions",
          summary: "Major brain structures, the cerebral cortex's lobes, and tools used to study the brain.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "The hindbrain includes the medulla (heartbeat, breathing), pons (bridges brain regions, sleep), and cerebellum (balance, coordination, procedural learning).",
                "The limbic system handles emotion and memory: the amygdala (fear, aggression), hippocampus (forming new explicit memories), and hypothalamus (regulates hunger, thirst, body temperature, and links to the endocrine system via the pituitary gland).",
                "The cerebral cortex's four lobes: frontal (planning, decision-making, personality — Broca's area for speech production), parietal (touch, spatial processing), temporal (hearing, Wernicke's area for language comprehension), and occipital (vision).",
                "Split-brain research (Sperry) severed the corpus callosum, revealing that the left hemisphere generally handles language and logic while the right hemisphere handles spatial and creative tasks.",
                "Brain-imaging tools: EEG records electrical activity; fMRI and PET scans show brain activity/blood flow in real time; CT and MRI scans show structure, not activity.",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "Broca's = broken speech production (can't speak fluently); Wernicke's = fluent but nonsensical speech (comprehension problem). Both are usually in the left hemisphere.",
                "Remember: PET/fMRI show function or activity, while CT/MRI show structure only.",
                "The hypothalamus is the body's thermostat and links the nervous system to the endocrine system through the pituitary gland.",
              ],
            },
          ],
          questions: [
            {
              prompt: "Damage to which brain structure would most likely impair a person's balance and coordination?",
              choices: ["Cerebellum", "Amygdala", "Hippocampus", "Hypothalamus"],
              answerIndex: 0,
              explanation: "The cerebellum coordinates balance, movement, and procedural learning; damage produces clumsy, uncoordinated movement.",
            },
            {
              prompt: "A patient who speaks fluently but produces nonsensical, meaningless sentences most likely has damage to:",
              choices: ["Broca's area", "The occipital lobe", "Wernicke's area", "The cerebellum"],
              answerIndex: 2,
              explanation: "Wernicke's area, in the temporal lobe, is responsible for language comprehension; damage causes fluent but meaningless speech.",
            },
            {
              prompt: "Which brain-imaging technique would best show which brain areas are most active while a person solves a math problem?",
              choices: ["MRI", "CT scan", "X-ray", "fMRI"],
              answerIndex: 3,
              explanation: "fMRI tracks blood-oxygen flow in real time, revealing which brain regions are actively working during a task, unlike MRI or CT, which only show structure.",
            },
            {
              prompt: "Roger Sperry's split-brain studies, in which the corpus callosum was severed, demonstrated that:",
              choices: [
                "The cerebellum controls language",
                "The left hemisphere specializes in language while the right specializes in spatial tasks",
                "The hypothalamus regulates hemispheric communication",
                "The two hemispheres cannot function independently",
              ],
              answerIndex: 1,
              explanation: "Split-brain patients revealed hemispheric specialization — the left hemisphere typically dominates language and logic, while the right handles spatial and holistic processing.",
            },
          ],
        },
        {
          slug: "nervous-and-endocrine-systems",
          title: "The Nervous and Endocrine Systems",
          summary: "How the central, peripheral, and endocrine systems coordinate the body's responses.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "The nervous system divides into the central nervous system (brain and spinal cord) and the peripheral nervous system, which carries signals to and from the body.",
                "The peripheral nervous system splits into the somatic nervous system (voluntary control of skeletal muscles) and the autonomic nervous system (involuntary control of glands and internal organs).",
                "The autonomic nervous system further divides into sympathetic (arouses the body for 'fight or flight' — increases heart rate, dilates pupils) and parasympathetic (calms the body, 'rest and digest' — slows heart rate, aids digestion).",
                "The endocrine system communicates via hormones released into the bloodstream, acting more slowly but longer-lasting than neural signals; the pituitary gland (the 'master gland') is controlled by the hypothalamus and regulates other glands.",
                "The adrenal glands release adrenaline (epinephrine) and cortisol during stress, working with the sympathetic nervous system to trigger the stress response.",
                "Reflexes, like the knee-jerk reflex, are controlled by the spinal cord and don't require the brain, allowing faster reaction times.",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "Somatic = skeletal muscle, voluntary; autonomic = internal organs, involuntary — 'auto' runs automatically.",
                "Sympathetic speeds you up for danger; parasympathetic puts on the brakes and returns you to baseline.",
                "The endocrine system is slower but longer-lasting than the nervous system — think hormones versus electrical signals.",
              ],
            },
          ],
          questions: [
            {
              prompt: "Which division of the nervous system controls voluntary movements like raising your hand?",
              choices: ["Sympathetic nervous system", "Somatic nervous system", "Parasympathetic nervous system", "Reflex arc"],
              answerIndex: 1,
              explanation: "The somatic nervous system, part of the peripheral nervous system, controls voluntary movements of skeletal muscles.",
            },
            {
              prompt: "After a stressful event ends, which system helps the body return to a calm, baseline state?",
              choices: ["Parasympathetic nervous system", "Sympathetic nervous system", "Somatic nervous system", "Reflex arc"],
              answerIndex: 0,
              explanation: "The parasympathetic nervous system counteracts the sympathetic 'fight or flight' response, slowing heart rate and restoring digestion once danger has passed.",
            },
            {
              prompt: "The gland often called the 'master gland' because it regulates the activity of other endocrine glands is the:",
              choices: ["Adrenal gland", "Thyroid gland", "Pancreas", "Pituitary gland"],
              answerIndex: 3,
              explanation: "The pituitary gland, controlled by the hypothalamus, releases hormones that regulate the activity of other glands throughout the endocrine system.",
            },
            {
              prompt: "A knee-jerk reflex occurs without conscious thought because it is processed primarily by the:",
              choices: ["Frontal lobe", "Hypothalamus", "Spinal cord", "Pituitary gland"],
              answerIndex: 2,
              explanation: "Simple reflexes are processed at the spinal cord level, bypassing the brain, which allows for a faster protective response.",
            },
          ],
        },
        {
          slug: "sleep-consciousness-and-altered-states",
          title: "Sleep, Consciousness, and Altered States",
          summary: "Sleep stages, circadian rhythms, dreaming theories, and altered states of consciousness.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "Circadian rhythm is the roughly 24-hour biological clock regulated by the hypothalamus's suprachiasmatic nucleus, influenced by light exposure and melatonin.",
                "Sleep cycles through NREM stages 1-3 (progressively deeper sleep; stage 3 is slow-wave/delta sleep, important for physical restoration) and REM sleep (rapid eye movement, associated with vivid dreaming and marked by muscle paralysis, or 'paradoxical sleep').",
                "A full sleep cycle (NREM through REM) takes about 90 minutes and repeats several times per night, with REM periods lengthening as the night progresses.",
                "Theories of dreaming: Freud's wish-fulfillment (dreams reveal repressed desires), activation-synthesis theory (dreams are the brain's attempt to make sense of random neural activity), and information-processing theory (dreams help consolidate memories).",
                "Sleep disorders include insomnia (trouble falling or staying asleep), narcolepsy (sudden uncontrollable sleep attacks/REM intrusion), sleep apnea (breathing repeatedly stops), and night terrors (occur during NREM stage 3, unlike nightmares, which occur in REM).",
                "Psychoactive drugs are classified as depressants (slow CNS activity — alcohol, barbiturates), stimulants (speed up CNS activity — caffeine, cocaine, amphetamines), and hallucinogens (distort perception — LSD, marijuana).",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "Remember: REM = Rapid Eye Movement = real vivid dreaming, but the body is essentially paralyzed (paradoxical sleep).",
                "Night terrors happen in NREM deep sleep and aren't usually remembered; nightmares happen in REM and often are remembered — a classic AP mix-up.",
                "Match drug categories to effects: depressants slow you down, stimulants speed you up, hallucinogens distort reality.",
              ],
            },
          ],
          questions: [
            {
              prompt: "The stage of sleep most associated with vivid dreaming and near-total muscle paralysis is:",
              choices: ["NREM Stage 1", "NREM Stage 3", "The hypnagogic state", "REM sleep"],
              answerIndex: 3,
              explanation: "REM (rapid eye movement) sleep is when most vivid dreaming occurs, accompanied by muscle paralysis that prevents the sleeper from acting out dreams.",
            },
            {
              prompt: "According to activation-synthesis theory, dreams occur because:",
              choices: [
                "The brain fulfills repressed unconscious wishes",
                "The brain tries to make sense of random neural activity during sleep",
                "The body is processing physical injuries",
                "Sleep spindles trigger memory replay",
              ],
              answerIndex: 1,
              explanation: "Activation-synthesis theory proposes that dreams result from the cortex interpreting and synthesizing meaning from random neural firing during REM sleep — a more biological alternative to Freud's wish-fulfillment theory.",
            },
            {
              prompt: "A child who wakes up screaming during deep NREM sleep and has no memory of it the next morning most likely experienced:",
              choices: ["A nightmare", "Narcolepsy", "Sleep apnea", "A night terror"],
              answerIndex: 3,
              explanation: "Night terrors occur during NREM stage 3 (deep sleep) and are typically not remembered, unlike nightmares, which occur during REM sleep and are often recalled.",
            },
            {
              prompt: "Caffeine and cocaine belong to which category of psychoactive drugs?",
              choices: ["Depressants", "Stimulants", "Hallucinogens", "Opiates"],
              answerIndex: 1,
              explanation: "Stimulants speed up central nervous system activity, increasing alertness and energy; caffeine and cocaine are classic examples.",
            },
          ],
        },
      ],
    },
    {
      slug: "cognitive-psychology",
      title: "Cognitive Psychology",
      summary: "Sensation and perception, memory, thinking and problem solving, and intelligence.",
      lessons: [
        {
          slug: "sensation-and-perception",
          title: "Sensation and Perception",
          summary: "How we detect stimuli and organize them into meaningful perceptions.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "Sensation is the raw detection of stimuli by sensory receptors; perception is the brain's process of organizing and interpreting that input into meaningful experience.",
                "Absolute threshold is the minimum stimulus intensity detected 50% of the time; the difference threshold (just noticeable difference, JND) is the smallest detectable change between two stimuli, and Weber's Law states this JND is a constant proportion of the original stimulus.",
                "Signal detection theory explains that detecting a stimulus depends on both sensitivity and decision criteria (expectations, motivation, fatigue), which is why the same stimulus may or may not be detected depending on context.",
                "Sensory adaptation is diminished sensitivity to an unchanging stimulus (e.g., no longer smelling your own perfume); it helps us focus on changes in the environment.",
                "Gestalt principles of perceptual organization include figure-ground (distinguishing an object from its background), proximity, similarity, closure, and continuity.",
                "Depth perception relies on binocular cues (retinal disparity, convergence) and monocular cues (relative size, interposition, linear perspective); Gibson and Walk's visual cliff experiment showed depth perception emerges early in infancy.",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "Sensation happens first (bottom-up, raw data); perception happens second (top-down, meaning) — think 'sensation is the ingredients, perception is the recipe.'",
                "Weber's Law: bigger stimuli need bigger changes to notice a difference (you'd notice 1 extra pound added to a 5-lb bag, but not to a 100-lb bag).",
                "Don't mix up binocular cues (need two eyes, e.g. retinal disparity) with monocular cues (work with one eye, e.g. relative size, interposition).",
              ],
            },
          ],
          questions: [
            {
              prompt: "The minimum amount of stimulation needed to detect a stimulus half the time is called the:",
              choices: ["Difference threshold", "Absolute threshold", "Just noticeable difference", "Perceptual set"],
              answerIndex: 1,
              explanation: "Absolute threshold refers to the smallest intensity of a stimulus a person can detect 50% of the time.",
            },
            {
              prompt: "According to Weber's Law, if you can just barely notice the difference between a 10-lb and 11-lb weight, roughly how much more would need to be added to a 100-lb weight for you to notice a difference?",
              choices: ["1 lb", "10 lb", "50 lb", "100 lb"],
              answerIndex: 1,
              explanation: "Weber's Law states the JND is a constant proportion (here, 10%) of the original stimulus, so a 100-lb weight would require about 10 lb more to notice a change.",
            },
            {
              prompt: "No longer noticing the hum of a refrigerator after being in the kitchen for a while illustrates:",
              choices: ["Signal detection theory", "Sensory adaptation", "Perceptual constancy", "Difference threshold"],
              answerIndex: 1,
              explanation: "Sensory adaptation is the diminishing sensitivity to a constant, unchanging stimulus over time, freeing attention for new or changing stimuli.",
            },
            {
              prompt: "Using the relative size and interposition of objects to judge distance relies on:",
              choices: ["Retinal disparity", "Monocular cues", "Convergence", "Binocular cues"],
              answerIndex: 1,
              explanation: "Relative size and interposition are monocular depth cues — they can be perceived with only one eye, unlike binocular cues such as retinal disparity and convergence.",
            },
          ],
        },
        {
          slug: "memory-encoding-storage-retrieval",
          title: "Memory: Encoding, Storage, and Retrieval",
          summary: "The stage model of memory, encoding strategies, and why we forget.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "Atkinson-Shiffrin's three-stage model: sensory memory (brief, high-capacity image/echo of a stimulus) flows to short-term/working memory (limited capacity, about 7±2 items per Miller's 'magic number,' held roughly 20-30 seconds without rehearsal) and then to long-term memory (relatively permanent, essentially unlimited capacity).",
                "Encoding strategies include maintenance rehearsal (repetition) versus elaborative rehearsal (linking to existing knowledge, deeper and more durable); chunking groups information into meaningful units to boost working-memory capacity.",
                "Long-term memory divides into explicit/declarative memory (episodic — personal events, and semantic — facts, both consciously recalled) and implicit/procedural memory (skills and conditioned responses, recalled without conscious effort).",
                "The serial position effect describes better recall for items at the beginning of a list (primacy effect, moved to long-term memory) and the end of a list (recency effect, still in working memory).",
                "Forgetting theories include encoding failure (information never entered memory), decay (a memory trace fades over time), interference — proactive (old info blocks new learning) versus retroactive (new info blocks recall of old info) — and retrieval failure (tip-of-the-tongue).",
                "Elizabeth Loftus's research on the misinformation effect shows that leading questions and post-event information can distort or create false memories, a major critique of eyewitness testimony reliability.",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "'New interferes with old' is retroactive interference; 'old interferes with new' is proactive interference — picture a timeline arrow pointing forward (retroactive) or backward (proactive blocking forward).",
                "Elaborative rehearsal (making meaning and connections) beats maintenance rehearsal (mindless repeating) for long-term retention.",
                "Loftus's eyewitness studies are a favorite FRQ topic — know that leading questions (e.g., 'smashed' versus 'hit') can implant false memories.",
              ],
            },
          ],
          questions: [
            {
              prompt: "Miller's 'magic number' of 7 (plus or minus 2) refers to the typical capacity of:",
              choices: ["Sensory memory", "Short-term/working memory", "Long-term memory", "Procedural memory"],
              answerIndex: 1,
              explanation: "George Miller proposed that short-term/working memory can typically hold about 7 (±2) chunks of information at once.",
            },
            {
              prompt: "A student who learns a new phone number by connecting it to a meaningful pattern is using:",
              choices: ["Maintenance rehearsal", "Sensory encoding", "Elaborative rehearsal", "Retroactive interference"],
              answerIndex: 2,
              explanation: "Elaborative rehearsal involves linking new information to existing knowledge or meaning, which produces deeper, more durable encoding than simple repetition.",
            },
            {
              prompt: "A student struggles to recall her new locker combination because her old one keeps coming to mind. This is:",
              choices: ["Retroactive interference", "Encoding failure", "Proactive interference", "The recency effect"],
              answerIndex: 2,
              explanation: "Proactive interference occurs when older, previously learned information interferes with the ability to recall newer information.",
            },
            {
              prompt: "Elizabeth Loftus's research on the misinformation effect demonstrated that:",
              choices: [
                "Long-term memory has unlimited capacity",
                "Sensory memory lasts only a few seconds",
                "The serial position effect disappears with age",
                "Leading questions can distort or implant false eyewitness memories",
              ],
              answerIndex: 3,
              explanation: "Loftus showed that subtly suggestive or leading questions after an event can alter witnesses' memories, raising concerns about the reliability of eyewitness testimony.",
            },
          ],
        },
        {
          slug: "thinking-problem-solving-and-language",
          title: "Thinking, Problem Solving, and Language",
          summary: "Cognitive strategies for reasoning and decision-making, plus the building blocks of language.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "Problem-solving strategies include algorithms (step-by-step procedures guaranteeing a solution) and heuristics (mental shortcuts that are faster but not always accurate).",
                "Common heuristics: the availability heuristic (judging likelihood based on how easily examples come to mind) and the representativeness heuristic (judging by how well something matches a prototype, ignoring base rates).",
                "Obstacles to problem solving include mental set (relying on strategies that worked before, even when they don't fit the new problem) and functional fixedness (seeing an object only in terms of its typical use).",
                "Confirmation bias is the tendency to search for and favor information that confirms existing beliefs while ignoring contradictory evidence; overconfidence is the tendency to overestimate the accuracy of one's judgments.",
                "Language structure builds from phonemes (smallest units of sound) to morphemes (smallest units of meaning) to syntax (grammar rules for combining words) and semantics (meaning of words and sentences).",
                "The linguistic relativity hypothesis (Whorf) proposes that language shapes and constrains how we think, though most psychologists now hold a weaker version — language influences but doesn't strictly determine thought.",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "Algorithm = slow but guaranteed correct; heuristic = fast but can lead to errors — you trade accuracy for speed.",
                "Availability heuristic = 'what comes to mind easily' (overestimating plane crash risk after seeing news coverage); representativeness heuristic = 'how similar to a typical example,' ignoring actual base rates.",
                "Functional fixedness and mental set are both about being 'stuck' in old patterns — fixedness is about an object's use, mental set is about a strategy or approach.",
              ],
            },
          ],
          questions: [
            {
              prompt: "Overestimating the likelihood of a shark attack after watching a news story about one is an example of:",
              choices: ["The representativeness heuristic", "Functional fixedness", "The availability heuristic", "An algorithm"],
              answerIndex: 2,
              explanation: "The availability heuristic leads people to judge probability based on how easily relevant examples come to mind, which recent, vivid media coverage inflates.",
            },
            {
              prompt: "Following a recipe exactly, step by step, to guarantee a correctly baked cake is an example of using a(n):",
              choices: ["Heuristic", "Algorithm", "Availability shortcut", "Mental set"],
              answerIndex: 1,
              explanation: "An algorithm is a methodical, step-by-step procedure that guarantees a correct solution if followed exactly, unlike a heuristic, which is a quicker but fallible shortcut.",
            },
            {
              prompt: "A person struggles to realize a paperclip can be bent into a small hook because they only think of it as a tool for holding papers. This illustrates:",
              choices: ["Mental set", "Confirmation bias", "Functional fixedness", "The representativeness heuristic"],
              answerIndex: 2,
              explanation: "Functional fixedness is the tendency to think of objects only in terms of their typical use, which blocks creative problem-solving.",
            },
            {
              prompt: "The smallest unit of meaning in a language, such as the prefix 'un-' or the word 'dog,' is called a:",
              choices: ["Phoneme", "Morpheme", "Syntax unit", "Semantic unit"],
              answerIndex: 1,
              explanation: "A morpheme is the smallest meaningful unit of language, larger than a phoneme (smallest unit of sound) but smaller than a full phrase governed by syntax.",
            },
          ],
        },
        {
          slug: "intelligence-and-its-measurement",
          title: "Intelligence and Its Measurement",
          summary: "Theories of intelligence, how IQ tests are built and evaluated, and debates over bias and heritability.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "Charles Spearman proposed general intelligence (g), a single underlying factor behind performance across cognitive tasks; Howard Gardner's theory of multiple intelligences and Robert Sternberg's triarchic theory (analytical, creative, practical) argue intelligence is not a single trait.",
                "Intelligence tests are evaluated by standardization (establishing norms from a comparison population, often producing a normal/bell curve distribution), reliability (consistency of results, checked via test-retest or split-half methods), and validity (whether the test measures what it claims to measure).",
                "The Stanford-Binet and Wechsler (WAIS/WISC) scales are the major modern IQ tests; historically IQ was calculated as (mental age / chronological age) x 100, though modern tests use deviation scores compared to age-based norms.",
                "The Flynn effect describes the observed steady rise in average IQ scores across generations worldwide, raising questions about what intelligence tests truly capture.",
                "Twin and adoption studies suggest intelligence has both genetic and environmental influences (heritability); intellectual disability and giftedness represent the low and high extremes of the normal distribution of intelligence scores.",
                "Stereotype threat (Claude Steele) describes how awareness of a negative stereotype about one's group can hurt performance on a task, cited as a source of test-score bias unrelated to actual ability.",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "Reliability = consistency (same test, similar results over time); validity = accuracy (test measures what it claims) — a test can be reliable without being valid, but not valid without being reliable.",
                "Remember: Gardner = 'multiple' intelligences (plural, many distinct types); Spearman = 'g' (general, single factor) — opposite ends of the debate.",
                "Stereotype threat is a classic FRQ example of how social context, not raw ability, can lower test performance.",
              ],
            },
          ],
          questions: [
            {
              prompt: "Charles Spearman's concept of 'g' refers to:",
              choices: [
                "Eight distinct independent intelligences",
                "A single general intelligence factor underlying all cognitive abilities",
                "The gap between mental age and chronological age",
                "A test's consistency over repeated administrations",
              ],
              answerIndex: 1,
              explanation: "Spearman proposed 'g,' a general intelligence factor that he believed underlies performance across many different cognitive tasks.",
            },
            {
              prompt: "A test that consistently produces similar scores when a person retakes it multiple times demonstrates strong:",
              choices: ["Validity", "Standardization", "Reliability", "Heritability"],
              answerIndex: 2,
              explanation: "Reliability refers to a test's consistency; a reliable test yields similar results across repeated administrations, whether measured by test-retest or split-half methods.",
            },
            {
              prompt: "Howard Gardner's theory of multiple intelligences challenges Spearman's 'g' by proposing that:",
              choices: [
                "Intelligence is entirely determined by genetics",
                "IQ scores rise steadily across generations",
                "Intelligence consists of several distinct, independent abilities",
                "Intelligence is a single unified trait",
              ],
              answerIndex: 2,
              explanation: "Gardner argued that intelligence isn't one general trait but a set of distinct abilities, such as linguistic, spatial, and musical intelligence, that don't necessarily correlate with one another.",
            },
            {
              prompt: "A female student underperforms on a math test after being reminded of the stereotype that girls are worse at math, despite having strong math skills. This illustrates:",
              choices: ["The Flynn effect", "Test standardization", "The representativeness heuristic", "Stereotype threat"],
              answerIndex: 3,
              explanation: "Stereotype threat occurs when awareness of a negative stereotype about one's group creates anxiety that undermines performance, independent of actual ability.",
            },
          ],
        },
      ],
    },
    {
      slug: "development-and-learning",
      title: "Development and Learning",
      summary: "Piaget's and Erikson's developmental stages, attachment, and classical and operant conditioning.",
      lessons: [
        {
          slug: "piaget-and-cognitive-development",
          title: "Piaget and Cognitive Development",
          summary: "Piaget's stage theory of how children's thinking develops from infancy through adolescence.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "Piaget's four stages: sensorimotor (birth to age 2, object permanence develops), preoperational (2-7, symbolic thinking but egocentrism and lack of conservation), concrete operational (7-11, conservation and logical thought about concrete objects), and formal operational (12+, abstract and hypothetical reasoning).",
                "Object permanence is the understanding that objects continue to exist even when out of sight, achieved during the sensorimotor stage.",
                "Conservation is the understanding that quantity remains the same despite changes in shape or appearance (e.g., liquid poured into a differently shaped container), achieved in the concrete operational stage.",
                "Egocentrism is the preoperational child's difficulty seeing a situation from another's perspective, demonstrated in Piaget's three-mountains task.",
                "Schemas are mental frameworks for organizing information; assimilation fits new information into existing schemas, while accommodation adjusts schemas to fit new information.",
                "Modern research (e.g., Renee Baillargeon) suggests Piaget underestimated young children's abilities — object permanence and some reasoning skills may emerge earlier than Piaget proposed.",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "Order matters on the exam: sensorimotor, preoperational, concrete operational, formal operational — 'Some People Can Formulate.'",
                "Conservation = concrete operational; object permanence = sensorimotor — don't swap these two hallmark achievements.",
                "Assimilation 'fits new info into an old box'; accommodation 'builds a new box' — a key AP vocabulary pair.",
              ],
            },
          ],
          questions: [
            {
              prompt: "An infant who searches for a toy after it's hidden under a blanket has developed:",
              choices: ["Conservation", "Object permanence", "Egocentrism", "Formal operational thought"],
              answerIndex: 1,
              explanation: "Object permanence, achieved during Piaget's sensorimotor stage, is the understanding that objects continue to exist even when they can no longer be seen.",
            },
            {
              prompt: "A 5-year-old insists a tall, thin glass has 'more' juice than a short, wide glass, even though both hold the same amount. This shows the child has not yet developed:",
              choices: ["Object permanence", "Egocentrism", "Conservation", "Assimilation"],
              answerIndex: 2,
              explanation: "Conservation, achieved in the concrete operational stage, is the understanding that quantity stays constant despite changes in a container's shape; this child is still in the preoperational stage.",
            },
            {
              prompt: "A child who calls every four-legged animal a 'doggy,' fitting new animals into an existing category, is demonstrating:",
              choices: ["Accommodation", "Assimilation", "Conservation", "Egocentrism"],
              answerIndex: 1,
              explanation: "Assimilation is the process of fitting new information or experiences into existing schemas, rather than adjusting the schema itself.",
            },
            {
              prompt: "The ability to reason about abstract, hypothetical concepts like justice or infinity first emerges during Piaget's:",
              choices: ["Sensorimotor stage", "Preoperational stage", "Concrete operational stage", "Formal operational stage"],
              answerIndex: 3,
              explanation: "Formal operational thought, emerging around age 12, allows for abstract, hypothetical, and systematic reasoning beyond concrete, physical objects.",
            },
          ],
        },
        {
          slug: "social-moral-and-emotional-development",
          title: "Social, Moral, and Emotional Development",
          summary: "Erikson's psychosocial stages, attachment theory, and Kohlberg's stages of moral reasoning.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "Erikson's psychosocial stages each present a crisis to resolve across the lifespan: trust vs. mistrust (infancy), autonomy vs. shame/doubt (toddlerhood), initiative vs. guilt (preschool), industry vs. inferiority (school age), identity vs. role confusion (adolescence), intimacy vs. isolation (young adulthood), generativity vs. stagnation (middle adulthood), and integrity vs. despair (late adulthood).",
                "Harry Harlow's monkey studies showed attachment is driven by comfort/contact, not just food; Mary Ainsworth's 'Strange Situation' experiment identified secure attachment (distressed by separation, easily comforted on reunion) versus insecure attachment styles (avoidant and anxious/ambivalent).",
                "Baumrind's parenting styles are authoritative, authoritarian, permissive, and neglectful; authoritative parenting (high warmth, high structure) is generally associated with the best child outcomes.",
                "Kohlberg's stages of moral development: preconventional (avoiding punishment/seeking reward), conventional (following social rules and norms to gain approval or maintain order), and postconventional (abstract ethical principles that may override laws) — studied using moral dilemmas like the Heinz dilemma.",
                "Temperament (an infant's inborn behavioral style, e.g., easy, difficult, slow-to-warm-up) interacts with parenting and environment to shape later personality.",
                "Critics note Kohlberg's stages were based mostly on male samples; Carol Gilligan argued moral reasoning also involves a care-based, relationship-oriented perspective, not just abstract justice.",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "Erikson's stages follow the lifespan in order — memorize the trust-to-identity-to-generativity-to-integrity arc, since AP loves matching a life stage to its crisis.",
                "The Heinz dilemma isn't about whether Heinz should steal the drug — it's about the reasoning behind the answer that reveals the moral stage.",
                "Secure attachment is distressed at separation but easily soothed on return; avoidant seems indifferent; anxious/ambivalent is clingy and hard to soothe even after reunion.",
              ],
            },
          ],
          questions: [
            {
              prompt: "According to Erikson, an adolescent's primary developmental task is resolving the crisis of:",
              choices: ["Trust vs. mistrust", "Industry vs. inferiority", "Intimacy vs. isolation", "Identity vs. role confusion"],
              answerIndex: 3,
              explanation: "Erikson placed the identity vs. role confusion crisis in adolescence, as teens work to develop a stable sense of who they are.",
            },
            {
              prompt: "Harry Harlow's studies with infant monkeys and wire/cloth 'mothers' demonstrated that attachment is driven primarily by:",
              choices: ["The availability of food", "Contact comfort", "Genetic instinct alone", "Punishment avoidance"],
              answerIndex: 1,
              explanation: "Harlow found that infant monkeys preferred a soft cloth 'mother' over a wire one that dispensed food, showing that contact comfort, not just feeding, drives attachment.",
            },
            {
              prompt: "A person who follows a law simply because they fear getting arrested is reasoning at Kohlberg's:",
              choices: ["Postconventional level", "Conventional level", "Preconventional level", "Formal operational level"],
              answerIndex: 2,
              explanation: "The preconventional level of moral reasoning is based on avoiding punishment and seeking reward, typical of young children's moral logic.",
            },
            {
              prompt: "Which parenting style, characterized by high warmth combined with high, consistent expectations, is generally linked to the best outcomes for children?",
              choices: ["Authoritarian", "Permissive", "Neglectful", "Authoritative"],
              answerIndex: 3,
              explanation: "Authoritative parenting balances warmth and responsiveness with clear, consistent expectations, and is associated with better social and academic outcomes than the other styles.",
            },
          ],
        },
        {
          slug: "classical-conditioning",
          title: "Classical Conditioning",
          summary: "Pavlov's model of learning through association between stimuli.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "In classical conditioning (Pavlov), an unconditioned stimulus (US) naturally triggers an unconditioned response (UR); repeatedly pairing a neutral stimulus with the US turns it into a conditioned stimulus (CS) that triggers a conditioned response (CR) on its own.",
                "Acquisition is the initial learning of the CS-US pairing; extinction occurs when the CS is repeatedly presented without the US, weakening the CR; spontaneous recovery is the reappearance of a weakened CR after a rest period.",
                "Stimulus generalization is responding similarly to stimuli that resemble the CS; stimulus discrimination is learning to distinguish the CS from similar stimuli that don't predict the US.",
                "Watson and Rayner's 'Little Albert' experiment conditioned a fear response (of a white rat) in an infant by pairing it with a loud noise, demonstrating that even emotional responses like phobias can be classically conditioned.",
                "Higher-order (second-order) conditioning occurs when a well-established CS is paired with a new neutral stimulus, which itself becomes a second conditioned stimulus.",
                "Biological predispositions matter: some associations, like taste aversions (per Garcia and Koelling's research), form very quickly and are resistant to extinction because they have survival value.",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "Order for Pavlov's dogs: food (US) leads to salivation (UR); bell plus food repeated, then bell alone (CS) leads to salivation (CR).",
                "'Extinction' doesn't mean the learning is gone forever — spontaneous recovery shows the CR can bounce back after a rest, meaning it's suppressed, not erased.",
                "The Garcia effect (taste aversion) is a favorite AP example of biological preparedness — we're wired to quickly associate nausea with taste, even after just one pairing.",
              ],
            },
          ],
          questions: [
            {
              prompt: "In Pavlov's classic experiment, after conditioning, the bell alone causes the dog to salivate. The bell is now the:",
              choices: ["Unconditioned stimulus", "Unconditioned response", "Conditioned stimulus", "Conditioned response"],
              answerIndex: 2,
              explanation: "After repeated pairing with food, the previously neutral bell becomes a conditioned stimulus capable of triggering salivation by itself.",
            },
            {
              prompt: "In the 'Little Albert' experiment, Watson and Rayner paired a white rat with a loud, frightening noise. Albert's later fear of a white rabbit that looked similar to the rat demonstrates:",
              choices: ["Stimulus discrimination", "Extinction", "Stimulus generalization", "Spontaneous recovery"],
              answerIndex: 2,
              explanation: "Stimulus generalization occurs when a conditioned response is triggered by stimuli that resemble the original conditioned stimulus, such as fear spreading from a rat to a similar-looking rabbit.",
            },
            {
              prompt: "After a CS is repeatedly presented without the US, the conditioned response weakens and disappears. This process is called:",
              choices: ["Acquisition", "Extinction", "Generalization", "Discrimination"],
              answerIndex: 1,
              explanation: "Extinction occurs when the conditioned stimulus is no longer paired with the unconditioned stimulus, gradually weakening and eliminating the learned conditioned response.",
            },
            {
              prompt: "Why do many people develop a strong aversion to a food after just one instance of getting sick, even if the food wasn't actually the cause?",
              choices: [
                "Higher-order conditioning always occurs after one trial",
                "Extinction cannot occur for food-related responses",
                "Stimulus discrimination prevents generalization to other foods",
                "Taste-aversion learning reflects a biological predisposition to quickly associate nausea with taste",
              ],
              answerIndex: 3,
              explanation: "Garcia and Koelling's research showed taste aversions can form after a single pairing because organisms are biologically prepared to quickly associate sickness with taste, an adaptation with clear survival value.",
            },
          ],
        },
        {
          slug: "operant-conditioning-and-observational-learning",
          title: "Operant Conditioning and Observational Learning",
          summary: "How consequences and social modeling shape behavior.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "In operant conditioning (Skinner), behavior is shaped by its consequences: reinforcement (positive: adding something desirable; negative: removing something aversive) increases a behavior, while punishment (positive: adding something aversive; negative: removing something desirable) decreases a behavior.",
                "Reinforcement schedules: fixed-ratio (reward after a set number of responses), variable-ratio (reward after an unpredictable number of responses — produces high, steady rates and is highly resistant to extinction, e.g. slot machines), fixed-interval (reward after a set time period, producing a 'scalloped' response pattern), and variable-interval (reward after unpredictable time periods, producing slow, steady responding).",
                "Shaping is reinforcing successive approximations toward a desired target behavior, useful for teaching complex behaviors an organism wouldn't perform naturally.",
                "Primary reinforcers satisfy innate biological needs (food, water); secondary (conditioned) reinforcers acquire value through association with primary reinforcers (money, praise).",
                "Edward Thorndike's Law of Effect established the foundation for operant conditioning: behaviors followed by satisfying consequences are more likely to be repeated, and those followed by unpleasant consequences are less likely.",
                "Albert Bandura's Bobo doll experiment demonstrated observational learning: children who watched an adult model aggressive behavior toward a doll imitated that aggression, especially when the model was rewarded (vicarious reinforcement) rather than punished.",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "Reinforcement always increases behavior, punishment always decreases it — 'positive' and 'negative' refer only to adding (+) or removing (−) a stimulus, not to 'good' or 'bad.'",
                "Variable-ratio schedules produce the strongest, most extinction-resistant behavior — think slot machines and checking your phone for notifications.",
                "Bandura's Bobo doll study is a go-to FRQ example for observational learning and vicarious reinforcement — remember that seeing the model rewarded increased imitation.",
              ],
            },
          ],
          questions: [
            {
              prompt: "A parent gives a child a sticker every time they make their bed, increasing bed-making behavior. This is an example of:",
              choices: ["Positive punishment", "Positive reinforcement", "Negative reinforcement", "Negative punishment"],
              answerIndex: 1,
              explanation: "Positive reinforcement involves adding a desirable stimulus (a sticker) after a behavior to increase the likelihood that behavior will be repeated.",
            },
            {
              prompt: "A factory worker who is paid a bonus after producing every 50th unit is being reinforced on a:",
              choices: ["Variable-ratio schedule", "Fixed-ratio schedule", "Fixed-interval schedule", "Variable-interval schedule"],
              answerIndex: 1,
              explanation: "A fixed-ratio schedule delivers reinforcement after a set, predictable number of responses — here, every 50 units produced.",
            },
            {
              prompt: "Gradually reinforcing closer and closer approximations of a dolphin jumping through a hoop, rather than waiting for the full behavior, is an example of:",
              choices: ["Extinction", "Shaping", "Stimulus generalization", "The Law of Effect"],
              answerIndex: 1,
              explanation: "Shaping involves reinforcing successive approximations of a target behavior, gradually guiding the organism toward the complete desired behavior.",
            },
            {
              prompt: "In Bandura's Bobo doll experiment, children who watched an adult model rewarded for aggressive behavior were more likely to imitate that aggression than children who saw the model punished. This best illustrates:",
              choices: ["Classical conditioning", "Negative reinforcement", "Stimulus discrimination", "Vicarious reinforcement within observational learning"],
              answerIndex: 3,
              explanation: "Vicarious reinforcement occurs when observing someone else being rewarded for a behavior increases the likelihood that the observer will imitate that behavior, a key finding of Bandura's social learning theory.",
            },
          ],
        },
      ],
    },
    {
      slug: "social-psychology-and-personality",
      title: "Social Psychology and Personality",
      summary: "Attribution, conformity and obedience, group influence, and major theories of personality.",
      lessons: [
        {
          slug: "social-cognition-and-attribution",
          title: "Social Cognition and Attribution",
          summary: "How we explain behavior and form impressions of others and ourselves.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "Attribution theory holds that we explain behavior via dispositional attributions (internal traits/personality) or situational attributions (external circumstances).",
                "The fundamental attribution error is the tendency to overestimate dispositional causes and underestimate situational causes when explaining others' behavior.",
                "Self-serving bias is the tendency to attribute our own failures to situational factors and our successes to dispositional factors, while judging others' failures as dispositional.",
                "Cognitive dissonance (Leon Festinger) is the mental discomfort felt when one's actions conflict with one's beliefs, which motivates people to change either the behavior or the belief to restore consistency, demonstrated in Festinger and Carlsmith's $1-vs-$20 lying study.",
                "The mere exposure effect is the finding that repeated exposure to a stimulus increases our liking for it; the halo effect is the tendency to assume a person with one positive trait (e.g., attractiveness) has other positive traits too.",
                "Social comparison theory holds that people evaluate their own abilities and opinions by comparing themselves to others, often shaping self-esteem.",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "Fundamental attribution error: 'it's about them' when judging others (blaming the person, not the situation).",
                "Self-serving bias: 'it's not my fault' when judging yourself (crediting yourself for success, blaming the situation for failure).",
                "Remember Festinger's dissonance study: people paid only $1 to lie changed their attitude more than those paid $20, because $1 wasn't enough external justification, so they resolved the dissonance internally.",
              ],
            },
          ],
          questions: [
            {
              prompt: "Assuming a classmate who snapped at you must simply be 'a rude person,' without considering that they might be having a terrible day, illustrates:",
              choices: ["Self-serving bias", "The fundamental attribution error", "Cognitive dissonance", "The mere exposure effect"],
              answerIndex: 1,
              explanation: "The fundamental attribution error is the tendency to overemphasize dispositional (personality-based) explanations and underestimate situational factors when judging others' behavior.",
            },
            {
              prompt: "A student blames a low test grade on 'the teacher wrote a bad test' but credits a high grade on another test to 'I studied hard.' This pattern illustrates:",
              choices: ["The fundamental attribution error", "The halo effect", "Self-serving bias", "Cognitive dissonance"],
              answerIndex: 2,
              explanation: "Self-serving bias is the tendency to attribute our own successes to internal, dispositional factors while attributing our failures to external, situational factors.",
            },
            {
              prompt: "In Festinger and Carlsmith's classic study, participants paid only $1 to tell others a boring task was fun ended up rating the task as more enjoyable than participants paid $20. This result is best explained by:",
              choices: ["The mere exposure effect", "The halo effect", "Cognitive dissonance", "Social comparison theory"],
              answerIndex: 2,
              explanation: "With only $1 of external justification for lying, participants experienced dissonance between their behavior and beliefs and resolved it by genuinely changing their attitude toward the task; the $20 group had ample external justification and felt little need to change their attitude.",
            },
            {
              prompt: "Assuming that an attractive job candidate is also more intelligent and trustworthy, without direct evidence, illustrates:",
              choices: ["The halo effect", "The fundamental attribution error", "Self-serving bias", "The mere exposure effect"],
              answerIndex: 0,
              explanation: "The halo effect is the tendency to let one known positive trait (like attractiveness) create a broader, unwarranted assumption of other positive traits.",
            },
          ],
        },
        {
          slug: "conformity-obedience-and-group-influence",
          title: "Conformity, Obedience, and Group Influence",
          summary: "Classic studies on how social pressure and group settings shape individual behavior.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "Solomon Asch's conformity experiments showed that individuals will often give an obviously wrong answer to match a unanimous group, demonstrating normative social influence (conforming to be liked/accepted, versus informational social influence, conforming because we believe the group has accurate information).",
                "Stanley Milgram's obedience experiments found that a majority of participants would deliver what they believed were dangerous electric shocks to another person simply because an authority figure instructed them to, revealing the power of legitimate authority over individual conscience.",
                "Social facilitation is improved performance on simple/well-learned tasks in the presence of others; social loafing is reduced individual effort on a group task, especially when contributions can't be individually evaluated.",
                "Deindividuation is the loss of self-awareness and personal responsibility in a group, especially when anonymous (e.g., mob behavior), which can lead to behavior an individual wouldn't engage in alone.",
                "Group polarization is the tendency for group discussion to strengthen a group's pre-existing dominant viewpoint, pushing it toward a more extreme position; groupthink (Irving Janis) is the tendency for a cohesive group to suppress dissent and minimize conflict in pursuit of consensus, often leading to poor decisions.",
                "The bystander effect is the finding that individuals are less likely to help a victim in an emergency when other bystanders are present, due to diffusion of responsibility.",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "Asch is about conformity to a group's stated answer (social pressure on judgment); Milgram is about obedience to an authority figure's direct command — don't mix these two classic studies up.",
                "Social loafing happens when individual effort is hidden in a group; social facilitation happens when individual effort is visible and the task is easy or well-practiced.",
                "Groupthink is about a group being too agreeable (suppressing dissent); group polarization is about a group becoming more extreme after discussion — related but distinct concepts.",
              ],
            },
          ],
          questions: [
            {
              prompt: "In Asch's line-judgment studies, participants who gave an obviously incorrect answer to match the rest of the group were primarily influenced by:",
              choices: ["Informational social influence", "Normative social influence", "Deindividuation", "The bystander effect"],
              answerIndex: 1,
              explanation: "Normative social influence is conforming to be accepted or avoid rejection by the group, even when the individual privately knows the group's answer is wrong — the key finding of Asch's experiments.",
            },
            {
              prompt: "Milgram's obedience experiments are most often cited as evidence that:",
              choices: [
                "People rarely obey authority figures who ask them to harm others",
                "Ordinary people will often obey an authority figure's instructions even against their own conscience",
                "Group discussion always makes decisions more moderate",
                "Anonymity has no effect on behavior",
              ],
              answerIndex: 1,
              explanation: "Milgram found that a surprising majority of participants continued administering what they believed were dangerous shocks simply because an experimenter in a position of authority instructed them to continue.",
            },
            {
              prompt: "A group of jurors who all lean toward 'guilty' become even more convinced of guilt after deliberating together. This illustrates:",
              choices: ["Groupthink", "Group polarization", "Social loafing", "The bystander effect"],
              answerIndex: 1,
              explanation: "Group polarization is the strengthening of a group's initial leaning after discussion, pushing the group toward a more extreme version of its original position.",
            },
            {
              prompt: "A person is less likely to help a stranger who has collapsed if many other people are nearby, largely because they assume someone else will help. This is known as:",
              choices: ["Social facilitation", "Deindividuation", "Groupthink", "The bystander effect (diffusion of responsibility)"],
              answerIndex: 3,
              explanation: "The bystander effect occurs because the presence of others diffuses individual responsibility, making each person feel less personally obligated to intervene.",
            },
          ],
        },
        {
          slug: "personality-psychodynamic-and-humanistic-theories",
          title: "Personality: Psychodynamic and Humanistic Theories",
          summary: "Freud's psychoanalytic theory of personality alongside the humanistic response to it.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "Freud's psychoanalytic theory proposes personality arises from unconscious conflicts among the id (primitive drives, operates on the pleasure principle), ego (rational mediator, operates on the reality principle), and superego (internalized moral standards/conscience).",
                "Freud's psychosexual stages (oral, anal, phallic, latency, genital) propose that unresolved conflicts at any stage can cause a person to become 'fixated,' shaping adult personality traits.",
                "Defense mechanisms are unconscious strategies the ego uses to reduce anxiety from conflict, including repression (blocking anxiety-provoking thoughts from consciousness), projection (attributing one's own unacceptable feelings to others), displacement (redirecting impulses toward a safer target), rationalization (justifying behavior with logical-sounding but false reasons), and reaction formation (acting the opposite of one's true unacceptable impulse).",
                "Carl Jung, a neo-Freudian, proposed the collective unconscious — a shared reservoir of ancestral memories and archetypes across humanity, extending beyond Freud's individual unconscious.",
                "Humanistic psychology, a reaction against psychoanalysis's focus on pathology, emphasizes free will and growth: Carl Rogers proposed that unconditional positive regard fosters healthy self-concept, while Abraham Maslow's hierarchy of needs places self-actualization (realizing one's full potential) at the top, above physiological, safety, love/belonging, and esteem needs.",
                "Critics argue Freud's theory is largely unfalsifiable and overemphasizes sexuality and unconscious conflict, while humanistic theory is criticized as overly optimistic and difficult to measure objectively.",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "Id = 'I want it now' (pleasure principle); ego = the referee (reality principle); superego = the moral conscience/ideal — the ego mediates between the other two.",
                "Match the defense mechanism to the scenario: blaming your own anger on someone else is projection; being extra nice to someone you secretly resent is reaction formation.",
                "Maslow's pyramid order, bottom to top: physiological, safety, love/belonging, esteem, self-actualization — lower needs generally must be met before higher ones become motivating.",
              ],
            },
          ],
          questions: [
            {
              prompt: "According to Freud, the personality structure that operates on the 'pleasure principle,' seeking immediate gratification of basic drives, is the:",
              choices: ["Ego", "Superego", "Id", "Collective unconscious"],
              answerIndex: 2,
              explanation: "The id operates on the pleasure principle, seeking immediate satisfaction of instinctual drives without regard for consequences or morality.",
            },
            {
              prompt: "A person who is angry at their boss but comes home and yells at their sibling instead is using the defense mechanism of:",
              choices: ["Projection", "Displacement", "Reaction formation", "Rationalization"],
              answerIndex: 1,
              explanation: "Displacement involves redirecting an impulse (like anger) from its original source, which feels too risky to confront, toward a safer or more available target.",
            },
            {
              prompt: "Carl Rogers argued that psychological growth is fostered when a person receives:",
              choices: ["Strict behavioral conditioning", "Unconditional positive regard", "Punishment for undesirable traits", "A resolved Oedipus complex"],
              answerIndex: 1,
              explanation: "Rogers proposed that unconditional positive regard — acceptance and support regardless of what a person says or does — helps people develop a healthy self-concept and reach their potential.",
            },
            {
              prompt: "In Maslow's hierarchy of needs, which need must generally be satisfied before a person is strongly motivated to pursue self-actualization?",
              choices: ["Esteem needs", "Aesthetic needs only", "Transcendence", "None; self-actualization can be pursued independently of other needs"],
              answerIndex: 0,
              explanation: "Maslow's hierarchy places esteem needs below self-actualization, meaning more basic needs like esteem typically must be reasonably satisfied before a person is motivated to pursue their fullest potential.",
            },
          ],
        },
        {
          slug: "personality-trait-and-social-cognitive-theories",
          title: "Personality: Trait and Social-Cognitive Theories",
          summary: "Modern approaches that describe personality through measurable traits and person-situation interaction.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "Trait theory describes personality as a combination of stable, measurable characteristics; the Big Five (Five-Factor Model) includes Openness, Conscientiousness, Extraversion, Agreeableness, and Neuroticism (OCEAN), each existing on a continuum.",
                "Gordon Allport pioneered early trait theory, distinguishing cardinal traits (rare traits that dominate a person's whole life), central traits (core, general characteristics), and secondary traits (situation-specific tendencies).",
                "Personality inventories like the Minnesota Multiphasic Personality Inventory (MMPI) use empirically derived, standardized true/false questions to assess personality and detect psychological disorders, contrasted with projective tests (Rorschach inkblot test, Thematic Apperception Test) that present ambiguous stimuli to reveal unconscious thoughts.",
                "Albert Bandura's social-cognitive perspective emphasizes reciprocal determinism: behavior, personal/cognitive factors, and the environment all continuously influence each other.",
                "Self-efficacy (Bandura) is a person's belief in their own competence to succeed at a task, which strongly influences motivation, effort, and choice of challenges.",
                "Locus of control (Julian Rotter) describes whether a person believes life outcomes are primarily controlled internally (by their own effort/choices) or externally (by luck, fate, or others).",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "OCEAN is trait theory's core mnemonic: Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism — know that each trait is a spectrum, not a category.",
                "Projective tests (Rorschach, TAT) are favored by psychodynamic theorists to reveal unconscious content; objective/empirical inventories (MMPI) are favored by trait theorists for standardized, quantifiable results.",
                "Reciprocal determinism is a two-way (really three-way) street among person, behavior, and environment — don't reduce it to just 'environment shapes behavior.'",
              ],
            },
          ],
          questions: [
            {
              prompt: "The Big Five personality trait model (OCEAN) belongs to which approach to personality?",
              choices: ["Psychodynamic", "Humanistic", "Trait", "Social-cognitive"],
              answerIndex: 2,
              explanation: "The Big Five (OCEAN) is the central model of the trait perspective, which describes personality using stable, measurable dimensions rather than unconscious drives or self-actualization.",
            },
            {
              prompt: "A psychologist shows a client an ambiguous inkblot and asks what they see, hoping to reveal unconscious thoughts and conflicts. This is an example of a:",
              choices: ["Standardized empirical inventory", "Projective test", "Reciprocal determinism assessment", "Locus of control scale"],
              answerIndex: 1,
              explanation: "Projective tests like the Rorschach inkblot test present ambiguous stimuli, and a person's interpretation is thought to reveal unconscious thoughts, conflicts, and motives.",
            },
            {
              prompt: "According to Bandura's concept of reciprocal determinism, personality is shaped by:",
              choices: [
                "The environment alone",
                "Unconscious drives from childhood",
                "The continuous, mutual interaction of behavior, personal/cognitive factors, and environment",
                "Fixed, unchangeable traits present at birth",
              ],
              answerIndex: 2,
              explanation: "Reciprocal determinism describes personality development as a two-way, ongoing interaction among a person's behavior, internal cognitive factors, and their environment — each continuously influences the others.",
            },
            {
              prompt: "A student who believes 'I failed the test because I didn't study enough,' rather than blaming bad luck, shows a(n):",
              choices: ["External locus of control", "Internal locus of control", "High neuroticism", "Cardinal trait"],
              answerIndex: 1,
              explanation: "An internal locus of control is the belief that outcomes result primarily from one's own effort and choices, rather than external forces like luck or fate.",
            },
          ],
        },
      ],
    },
    {
      slug: "mental-and-physical-health",
      title: "Mental and Physical Health",
      summary: "Psychological disorders, treatment approaches, and the psychology of stress and health.",
      lessons: [
        {
          slug: "understanding-psychological-disorders",
          title: "Understanding Psychological Disorders",
          summary: "How disorders are defined and classified, plus anxiety-related and mood disorders.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "Psychologists define disorders using criteria such as deviance (from social norms), distress (subjective suffering), dysfunction (impairing daily life), and danger; the DSM-5 is the standard classification system used for diagnosis in the U.S.",
                "The medical model views disorders as illnesses with identifiable symptoms and causes, treatable like physical diseases, while the biopsychosocial model considers biological, psychological, and social-cultural factors together.",
                "Anxiety disorders include generalized anxiety disorder (persistent, excessive worry not tied to a specific trigger), panic disorder (recurring, unpredictable panic attacks), and specific/social phobias (irrational fear of a specific object, situation, or social setting); obsessive-compulsive disorder (intrusive, unwanted thoughts paired with repetitive behaviors to reduce anxiety) is classified separately from anxiety disorders in the DSM-5.",
                "Mood disorders include major depressive disorder (persistent sadness and loss of interest, lasting at least two weeks) and bipolar disorder (alternating episodes of depression and mania — abnormally elevated energy, euphoria, or irritability).",
                "The diathesis-stress model explains disorders as arising from an interaction between a biological/genetic predisposition (diathesis) and environmental stressors, rather than either cause alone.",
                "Post-traumatic stress disorder (PTSD) develops after exposure to a traumatic event and involves intrusive memories/flashbacks, avoidance of trauma reminders, and heightened arousal.",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "The four D's (deviance, distress, dysfunction, danger) are a quick checklist AP uses to define 'abnormal' behavior — no single D is required alone.",
                "Don't confuse generalized anxiety disorder (vague, free-floating worry) with panic disorder (sudden, intense, discrete attacks) — the timing and focus of the anxiety is the key distinction.",
                "Diathesis-stress is a favorite FRQ concept: remember it's an interaction of predisposition and trigger, not either factor alone.",
              ],
            },
          ],
          questions: [
            {
              prompt: "Which of the following best exemplifies the diathesis-stress model of psychological disorders?",
              choices: [
                "A disorder caused entirely by genetics",
                "A disorder caused entirely by a traumatic environment",
                "A person with a genetic predisposition to depression who develops the disorder only after a major stressful life event",
                "A disorder that develops randomly with no identifiable cause",
              ],
              answerIndex: 2,
              explanation: "The diathesis-stress model proposes that disorders emerge from the interaction between an underlying vulnerability (diathesis) and an environmental trigger (stress) — neither alone is sufficient.",
            },
            {
              prompt: "A person who experiences sudden, unpredictable episodes of intense fear accompanied by a racing heart and shortness of breath most likely has:",
              choices: ["Generalized anxiety disorder", "Panic disorder", "A specific phobia", "Obsessive-compulsive disorder"],
              answerIndex: 1,
              explanation: "Panic disorder is characterized by recurring, unpredictable panic attacks — discrete episodes of intense fear and physical symptoms — distinguishing it from the persistent, diffuse worry of generalized anxiety disorder.",
            },
            {
              prompt: "A person experiencing alternating periods of extreme sadness and abnormally elevated energy and euphoria would most likely be diagnosed with:",
              choices: ["Major depressive disorder", "Bipolar disorder", "Generalized anxiety disorder", "Post-traumatic stress disorder"],
              answerIndex: 1,
              explanation: "Bipolar disorder is defined by alternating episodes of depression and mania (elevated mood, energy, or irritability), distinguishing it from major depressive disorder, which involves only depressive episodes.",
            },
            {
              prompt: "Evaluating a disorder by considering biological factors, psychological factors, and social-cultural factors together reflects:",
              choices: ["The medical model", "The biopsychosocial model", "The diathesis-stress model exclusively", "The DSM-5 classification system"],
              answerIndex: 1,
              explanation: "The biopsychosocial model integrates biological, psychological, and social-cultural influences to explain the development of psychological disorders, offering a broader view than the medical model alone.",
            },
          ],
        },
        {
          slug: "schizophrenia-dissociative-and-personality-disorders",
          title: "Schizophrenia, Dissociative, and Personality Disorders",
          summary: "Severe and chronic disorders involving disrupted thought, identity, and enduring personality patterns.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "Schizophrenia is marked by positive symptoms (additions to normal experience: hallucinations, delusions, disorganized speech/thought) and negative symptoms (deficits/absences: flat affect, social withdrawal, reduced speech); the dopamine hypothesis proposes excess dopamine activity contributes to symptoms.",
                "Delusions are false beliefs maintained despite contrary evidence (e.g., delusions of grandeur or persecution); hallucinations are false sensory experiences, most often auditory in schizophrenia, such as hearing voices.",
                "Chronic (process) schizophrenia develops gradually and has a poor prognosis; acute (reactive) schizophrenia develops suddenly, often after stress, and has a better recovery prognosis.",
                "Dissociative disorders involve a disruption in consciousness, memory, or identity: dissociative identity disorder (DID, formerly multiple personality disorder) involves two or more distinct identities within one person, and dissociative amnesia involves memory loss often linked to trauma; these remain among the most controversial DSM diagnoses.",
                "Personality disorders are enduring, inflexible, and maladaptive patterns of thinking and behaving that impair functioning; antisocial personality disorder involves a lack of remorse/conscience and disregard for others' rights, while borderline personality disorder involves unstable relationships, self-image, and emotions along with impulsivity.",
                "Twin and adoption studies, along with elevated dopamine activity and enlarged brain ventricles observed in some patients, support genetic and biological contributions to schizophrenia, though environmental stressors also play a triggering role.",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "Positive symptoms add something unusual (hallucinations, delusions); negative symptoms remove or reduce normal functioning (flat affect, social withdrawal) — 'positive' and 'negative' describe presence or absence, not 'good' and 'bad.'",
                "DID (dissociative identity disorder) is often confused with schizophrenia, but they are unrelated — DID involves multiple identities, not psychosis or hallucinations.",
                "Antisocial personality disorder is a lack of conscience/remorse (sometimes linked to criminality); borderline personality disorder is unstable relationships/emotions and fear of abandonment — a common AP mix-up pair.",
              ],
            },
          ],
          questions: [
            {
              prompt: "Hearing voices that aren't there is an example of which type of schizophrenia symptom?",
              choices: ["A negative symptom", "A positive symptom (hallucination)", "Flat affect", "A dissociative symptom"],
              answerIndex: 1,
              explanation: "Hallucinations are positive symptoms of schizophrenia because they add an abnormal experience (a false sensory perception) rather than representing a deficit in normal functioning.",
            },
            {
              prompt: "A patient shows minimal emotional expression, speaks very little, and has withdrawn from nearly all social contact. These symptoms are classified as:",
              choices: ["Positive symptoms", "Delusions", "Dissociative symptoms", "Negative symptoms"],
              answerIndex: 3,
              explanation: "Flat affect, reduced speech, and social withdrawal are negative symptoms of schizophrenia — they represent an absence or reduction of normal functioning rather than an added abnormal experience.",
            },
            {
              prompt: "A person who exhibits two or more distinct identities, each with its own patterns of behavior and memory, would most likely be diagnosed with:",
              choices: ["Schizophrenia", "Antisocial personality disorder", "Dissociative identity disorder", "Generalized anxiety disorder"],
              answerIndex: 2,
              explanation: "Dissociative identity disorder is defined by the presence of two or more distinct identity states within a single individual, and is a separate diagnostic category from schizophrenia, which involves psychosis rather than identity fragmentation.",
            },
            {
              prompt: "A person who repeatedly violates others' rights, shows no guilt for harmful actions, and manipulates others for personal gain best fits the profile of:",
              choices: ["Borderline personality disorder", "Antisocial personality disorder", "Dissociative identity disorder", "Generalized anxiety disorder"],
              answerIndex: 1,
              explanation: "Antisocial personality disorder is characterized by a persistent disregard for others' rights, lack of remorse, and manipulative or deceitful behavior.",
            },
          ],
        },
        {
          slug: "treatment-approaches",
          title: "Treatment Approaches",
          summary: "The major psychotherapy and biomedical approaches used to treat psychological disorders.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "Psychodynamic therapy (rooted in Freud's psychoanalysis) uses techniques like free association and dream analysis to bring unconscious conflicts into awareness; humanistic (client-centered) therapy, developed by Carl Rogers, uses active listening, empathy, genuineness, and unconditional positive regard to support client-led growth.",
                "Behavioral therapies apply learning principles directly to change behavior: systematic desensitization (pairing relaxation with a gradual hierarchy of feared stimuli, based on classical conditioning) treats phobias, while token economies (based on operant conditioning) reinforce desired behaviors with exchangeable tokens.",
                "Cognitive therapy (Aaron Beck) aims to identify and change distorted, negative thought patterns that contribute to distress; cognitive-behavioral therapy (CBT) combines cognitive restructuring with behavioral techniques and is well-supported by research for disorders like depression and anxiety.",
                "Biomedical treatments include psychotropic medications: antidepressants (often SSRIs, increasing serotonin availability), antipsychotics (typically dopamine antagonists, treating schizophrenia symptoms), and anti-anxiety medications; electroconvulsive therapy (ECT) is used for severe, treatment-resistant depression.",
                "Group therapy and family therapy treat multiple people simultaneously, leveraging social support and addressing relationship or systemic dynamics rather than only individual factors.",
                "Research on therapy effectiveness generally shows most approaches are similarly effective for many disorders (sometimes called the 'dodo bird verdict'), though certain approaches, like CBT, show particularly strong evidence for specific disorders such as anxiety and depression.",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "Systematic desensitization is classical conditioning applied to therapy (pairing relaxation with a fear hierarchy); token economy is operant conditioning applied to therapy (reinforcing behavior with tokens) — match each technique to its underlying learning theory.",
                "CBT means changing your thoughts to change your feelings and behaviors — it explicitly targets both cognitive distortions and behavior, unlike purely behavioral or purely cognitive therapy alone.",
                "Antidepressants (serotonin) treat mood disorders; antipsychotics (dopamine) treat schizophrenia — match the drug class to the neurotransmitter and disorder.",
              ],
            },
          ],
          questions: [
            {
              prompt: "A therapist gradually exposes a client with a fear of flying to increasingly intense flying-related stimuli while the client practices relaxation techniques. This method is called:",
              choices: ["Free association", "Systematic desensitization", "Token economy", "Cognitive restructuring"],
              answerIndex: 1,
              explanation: "Systematic desensitization pairs relaxation with a gradual hierarchy of feared stimuli, based on classical conditioning principles, to replace anxiety with a calm response.",
            },
            {
              prompt: "A therapist who helps a client identify and challenge irrational, distorted thoughts, such as 'I always fail at everything,' is practicing:",
              choices: ["Psychodynamic therapy", "Humanistic therapy", "Cognitive therapy", "Systematic desensitization"],
              answerIndex: 2,
              explanation: "Cognitive therapy, developed by theorists like Aaron Beck, focuses on identifying and restructuring distorted or irrational thought patterns that contribute to emotional distress.",
            },
            {
              prompt: "A treatment-resistant, severely depressed patient who has not responded to medication or psychotherapy might be treated with:",
              choices: ["Systematic desensitization", "Token economy", "Electroconvulsive therapy (ECT)", "Free association"],
              answerIndex: 2,
              explanation: "ECT is generally reserved for severe, treatment-resistant depression when other approaches like medication and psychotherapy have failed, and it can be highly effective in such cases.",
            },
            {
              prompt: "Carl Rogers's client-centered (humanistic) therapy relies heavily on which core technique?",
              choices: [
                "Analyzing unconscious dream content",
                "Providing unconditional positive regard and empathetic listening",
                "Systematically pairing relaxation with feared stimuli",
                "Prescribing psychotropic medication",
              ],
              answerIndex: 1,
              explanation: "Client-centered therapy emphasizes creating a supportive, non-judgmental environment through unconditional positive regard, empathy, and genuineness, allowing clients to direct their own growth.",
            },
          ],
        },
        {
          slug: "stress-and-health",
          title: "Stress and Health",
          summary: "How the body responds to stress and the psychological factors that influence physical health.",
          notes: [
            {
              heading: "Key Concepts",
              bullets: [
                "Stressors can be catastrophic events, significant life changes, or daily hassles; the same event can be appraised differently by different people (primary appraisal: is this a threat? secondary appraisal: can I cope?), shaping how stressful it feels.",
                "Hans Selye's General Adaptation Syndrome (GAS) describes the body's three-stage response to prolonged stress: alarm reaction (sympathetic nervous system activates, 'fight or flight'), resistance (the body tries to cope and adapt while remaining physiologically aroused), and exhaustion (prolonged stress depletes resources, increasing vulnerability to illness).",
                "Chronic stress is linked to negative health outcomes through the immune system: prolonged cortisol exposure suppresses immune function, making the body more susceptible to illness and slower to heal.",
                "The Type A personality (competitive, impatient, hostile, time-urgent) has been linked to higher rates of coronary heart disease compared to the more relaxed Type B personality, though hostility specifically appears to be the most predictive component.",
                "Coping strategies include problem-focused coping (directly addressing the source of stress) and emotion-focused coping (managing emotional response to stress rather than the stressor itself); social support and a sense of personal control are both linked to better stress management and health outcomes.",
                "Positive psychology (Martin Seligman) shifted research focus toward well-being, resilience, and character strengths rather than only pathology, studying concepts like optimism, gratitude, and flow.",
              ],
            },
            {
              heading: "Quick Tips",
              bullets: [
                "Remember the GAS order: alarm, resistance, exhaustion — exhaustion is when the immune system becomes most vulnerable.",
                "Problem-focused coping changes the situation; emotion-focused coping changes your reaction to the situation — use problem-focused when you have control, emotion-focused when you don't.",
                "Type A doesn't automatically mean unhealthy — research narrowed the real health risk mainly to the hostility/anger component, not simply competitiveness or time urgency.",
              ],
            },
          ],
          questions: [
            {
              prompt: "According to Hans Selye's General Adaptation Syndrome, during which stage does the body become most vulnerable to illness due to depleted resources?",
              choices: ["Alarm reaction", "Resistance", "Exhaustion", "Appraisal"],
              answerIndex: 2,
              explanation: "The exhaustion stage occurs after prolonged stress depletes the body's physiological resources, leaving it more vulnerable to illness and breakdown.",
            },
            {
              prompt: "A student who is stressed about an upcoming exam decides to create and follow a detailed study schedule to directly address the problem. This is an example of:",
              choices: ["Emotion-focused coping", "Problem-focused coping", "The alarm reaction", "Secondary appraisal only"],
              answerIndex: 1,
              explanation: "Problem-focused coping directly targets the source of stress — here, by creating a plan to address the exam itself, rather than only managing the emotional reaction to it.",
            },
            {
              prompt: "Research narrowing the link between Type A personality and coronary heart disease has found that the most predictive component is specifically:",
              choices: ["Competitiveness", "Time urgency", "Hostility", "Ambition"],
              answerIndex: 2,
              explanation: "While Type A personality includes competitiveness, time urgency, and hostility, later research identified hostility/anger as the component most strongly linked to increased risk of heart disease.",
            },
            {
              prompt: "Martin Seligman's positive psychology movement primarily shifted psychological research toward studying:",
              choices: [
                "Only the treatment of severe mental illness",
                "Well-being, resilience, and character strengths",
                "The biomedical model of disorders exclusively",
                "Classical conditioning of emotional responses",
              ],
              answerIndex: 1,
              explanation: "Positive psychology, championed by Seligman, redirected research attention toward human flourishing — well-being, resilience, optimism, and strengths — rather than focusing solely on pathology and dysfunction.",
            },
          ],
        },
      ],
    },
  ],
};

export default apPsychology;
