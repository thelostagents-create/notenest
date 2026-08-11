import type { Topic } from "../types";

const apPsychology: Topic = {
  slug: "ap-psychology",
  title: "AP Psychology",
  category: "AP Courses",
  subtitle: "5 lessons: biological bases through development & personality.",
  emoji: "🧠",
  accent: "#c2578a",
  lessons: [
    {
      slug: "biological-bases",
      title: "Lesson 1: Biological Bases of Behavior",
      summary: "Neurons, neurotransmitters, brain structures, and the nervous system.",
      notes: [
        {
          heading: "Key Concepts",
          bullets: [
            "A neuron receives signals through dendrites, processes them in the cell body, and sends signals down the axon, released as neurotransmitters at the synapse.",
            "Key neurotransmitters: dopamine (reward/movement), serotonin (mood), acetylcholine (muscle/memory), GABA (inhibitory).",
            "The brain's major structures: the cerebellum (balance/coordination), amygdala (fear/emotion), hippocampus (memory formation), and prefrontal cortex (decision-making).",
            "The nervous system splits into central (brain/spinal cord) and peripheral, which further splits into somatic (voluntary) and autonomic (involuntary: sympathetic 'fight or flight' vs. parasympathetic 'rest and digest').",
          ],
        },
        {
          heading: "Quick Tips",
          bullets: [
            "Remember the flow: dendrite → cell body → axon → synapse → next neuron's dendrite.",
            "Sympathetic 'speeds things up' (fight or flight); parasympathetic 'calms things down' (rest and digest).",
          ],
        },
      ],
      questions: [
        {
          prompt: "Which brain structure is most associated with forming new long-term memories?",
          choices: ["Amygdala", "Cerebellum", "Hippocampus", "Medulla"],
          answerIndex: 2,
          explanation: "The hippocampus plays a central role in consolidating new explicit memories.",
        },
        {
          prompt: "The autonomic nervous system's 'fight or flight' response is triggered by the:",
          choices: ["Parasympathetic nervous system", "Sympathetic nervous system", "Somatic nervous system", "Central nervous system alone"],
          answerIndex: 1,
          explanation: "The sympathetic nervous system activates the body's fight-or-flight response to perceived threats.",
        },
        {
          prompt: "Which neurotransmitter is most closely linked to mood regulation and is targeted by many antidepressants?",
          choices: ["Dopamine", "Acetylcholine", "Serotonin", "GABA"],
          answerIndex: 2,
          explanation: "Serotonin regulates mood, and many antidepressants (SSRIs) work by increasing its availability at synapses.",
        },
        {
          prompt: "The part of a neuron that carries the electrical signal away from the cell body is the:",
          choices: ["Dendrite", "Axon", "Synapse", "Myelin sheath"],
          answerIndex: 1,
          explanation: "The axon conducts the electrical impulse away from the cell body toward the synapse.",
        },
      ],
    },
    {
      slug: "sensation-perception",
      title: "Lesson 2: Sensation & Perception",
      summary: "Thresholds, Gestalt principles, and perceptual constancy.",
      notes: [
        {
          heading: "Key Concepts",
          bullets: [
            "Absolute threshold is the minimum stimulus needed to detect a stimulus 50% of the time; difference threshold (JND) is the smallest detectable change.",
            "Gestalt principles (proximity, similarity, closure, continuity) describe how we organize sensory info into wholes.",
            "Perceptual constancy lets us recognize objects as unchanged despite changes in lighting, angle, or distance.",
          ],
        },
        {
          heading: "Quick Tips",
          bullets: [
            "Closure is why we perceive a dashed circle as a complete circle — the brain fills in the gaps.",
            "Sensation is the raw detection of stimuli; perception is the brain's interpretation of that input.",
          ],
        },
      ],
      questions: [
        {
          prompt: "Seeing a set of dots arranged in a circle and perceiving them as one shape, rather than separate dots, demonstrates:",
          choices: ["Absolute threshold", "The principle of closure", "Difference threshold", "Sensory adaptation"],
          answerIndex: 1,
          explanation: "Closure is the Gestalt principle where the brain fills in gaps to perceive a complete, unified shape.",
        },
        {
          prompt: "The minimum amount of stimulation needed to detect a stimulus 50% of the time is the:",
          choices: ["Difference threshold", "Absolute threshold", "Just noticeable difference", "Perceptual set"],
          answerIndex: 1,
          explanation: "Absolute threshold is defined as the smallest detectable amount of a stimulus, detected half the time.",
        },
        {
          prompt: "Recognizing a door as rectangular even when viewed at an angle (making it look like a trapezoid) demonstrates:",
          choices: ["Shape constancy", "Sensory adaptation", "The difference threshold", "Proximity"],
          answerIndex: 0,
          explanation: "Shape constancy is the perception that an object's shape stays the same despite changes in the viewing angle.",
        },
        {
          prompt: "Grouping nearby objects together as part of the same group is the Gestalt principle of:",
          choices: ["Similarity", "Proximity", "Continuity", "Closure"],
          answerIndex: 1,
          explanation: "Proximity is the tendency to perceive objects that are close together as belonging to a group.",
        },
      ],
    },
    {
      slug: "learning",
      title: "Lesson 3: Learning",
      summary: "Classical conditioning, operant conditioning, and observational learning.",
      notes: [
        {
          heading: "Key Concepts",
          bullets: [
            "Classical conditioning (Pavlov): a neutral stimulus paired repeatedly with an unconditioned stimulus becomes a conditioned stimulus that triggers a conditioned response.",
            "Operant conditioning (Skinner): behavior is shaped by consequences — reinforcement increases behavior, punishment decreases it.",
            "Reinforcement schedules: fixed/variable ratio (based on number of responses) and fixed/variable interval (based on time) — variable ratio produces the most persistent behavior.",
            "Observational learning (Bandura): learning by watching and imitating others, demonstrated in the Bobo doll experiment.",
          ],
        },
        {
          heading: "Quick Tips",
          bullets: [
            "Reinforcement always increases a behavior; punishment always decreases it — regardless of whether something is 'added' or 'removed.'",
            "Variable ratio schedules (like slot machines) are the hardest habits to break because rewards feel unpredictable.",
          ],
        },
      ],
      questions: [
        {
          prompt: "In Pavlov's experiments, the bell (originally neutral) that comes to trigger salivation on its own is the:",
          choices: ["Unconditioned stimulus", "Unconditioned response", "Conditioned stimulus", "Conditioned response"],
          answerIndex: 2,
          explanation: "After pairing with food, the once-neutral bell becomes a conditioned stimulus that triggers salivation by itself.",
        },
        {
          prompt: "A slot machine that pays out after an unpredictable number of pulls uses which reinforcement schedule?",
          choices: ["Fixed ratio", "Variable ratio", "Fixed interval", "Variable interval"],
          answerIndex: 1,
          explanation: "Variable ratio schedules reward after an unpredictable number of responses, producing high, steady rates of behavior — classic slot-machine design.",
        },
        {
          prompt: "Learning a new behavior by watching someone else perform it and get rewarded is called:",
          choices: ["Classical conditioning", "Operant conditioning", "Observational learning", "Habituation"],
          answerIndex: 2,
          explanation: "Observational learning (modeling) is learning through watching others, as shown in Bandura's Bobo doll studies.",
        },
        {
          prompt: "Taking away a teenager's phone to reduce curfew-breaking is an example of:",
          choices: ["Positive reinforcement", "Negative reinforcement", "Positive punishment", "Negative punishment"],
          answerIndex: 3,
          explanation: "Negative punishment removes something desirable (the phone) to decrease an unwanted behavior.",
        },
      ],
    },
    {
      slug: "cognition",
      title: "Lesson 4: Cognition",
      summary: "Memory systems, encoding, and the serial position effect.",
      notes: [
        {
          heading: "Key Concepts",
          bullets: [
            "Memory involves encoding (input), storage (retention), and retrieval (access); the three-stage model includes sensory, short-term/working, and long-term memory.",
            "Long-term memory splits into explicit (declarative: facts and events) and implicit (procedural: skills and habits).",
            "The serial position effect: we recall items at the beginning (primacy) and end (recency) of a list better than the middle.",
          ],
        },
        {
          heading: "Quick Tips",
          bullets: [
            "Working memory (short-term) holds roughly 7 ± 2 items at once, and rehearsal helps move info into long-term storage.",
            "Riding a bike is stored as implicit/procedural memory, not explicit memory.",
          ],
        },
      ],
      questions: [
        {
          prompt: "Recalling both the first and last items of a list better than the middle ones demonstrates the:",
          choices: ["Serial position effect", "Gestalt effect", "Observational learning effect", "Absolute threshold"],
          answerIndex: 0,
          explanation: "The serial position effect combines the primacy effect (early items) and recency effect (recent items).",
        },
        {
          prompt: "Remembering how to ride a bike, without consciously thinking about the steps, relies on:",
          choices: ["Explicit memory", "Implicit (procedural) memory", "Sensory memory", "Working memory"],
          answerIndex: 1,
          explanation: "Skills like riding a bike are stored as implicit/procedural memories, recalled automatically without conscious effort.",
        },
        {
          prompt: "Which stage of memory processing involves getting information into the memory system in the first place?",
          choices: ["Encoding", "Storage", "Retrieval", "Consolidation only"],
          answerIndex: 0,
          explanation: "Encoding is the initial process of converting sensory input into a form the memory system can store.",
        },
        {
          prompt: "Remembering a specific historical date, like the year a war started, is an example of:",
          choices: ["Procedural memory", "Explicit (declarative) memory", "Sensory memory", "Implicit memory"],
          answerIndex: 1,
          explanation: "Facts and events are stored as explicit (declarative) memories, which can be consciously recalled and stated.",
        },
      ],
    },
    {
      slug: "development-personality",
      title: "Lesson 5: Development & Personality",
      summary: "Piaget's stages, attachment theory, and personality perspectives.",
      notes: [
        {
          heading: "Key Concepts",
          bullets: [
            "Piaget's stages: sensorimotor, preoperational, concrete operational, formal operational — each marked by new cognitive abilities.",
            "Attachment theory (Ainsworth's 'Strange Situation') identifies secure, avoidant, and anxious/ambivalent attachment styles.",
            "Major personality perspectives: psychodynamic (unconscious drives), humanistic (self-actualization), trait (Big Five: OCEAN), and social-cognitive (behavior shaped by environment and thought).",
          ],
        },
        {
          heading: "Quick Tips",
          bullets: [
            "Object permanence (understanding objects still exist when unseen) develops in the sensorimotor stage.",
            "The Big Five traits spell OCEAN: Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism.",
          ],
        },
      ],
      questions: [
        {
          prompt: "According to Piaget, a child who understands that a tall glass and a short wide glass can hold the same amount of liquid has reached:",
          choices: ["Object permanence", "Conservation", "Egocentrism", "Attachment"],
          answerIndex: 1,
          explanation: "Conservation is the understanding that quantity stays the same despite changes in shape or appearance, achieved in the concrete operational stage.",
        },
        {
          prompt: "A child who becomes distressed when a parent leaves but is easily comforted upon their return shows which attachment style?",
          choices: ["Secure attachment", "Avoidant attachment", "Anxious/ambivalent attachment", "Disorganized attachment"],
          answerIndex: 0,
          explanation: "Securely attached children are distressed by separation but easily soothed when the caregiver returns.",
        },
        {
          prompt: "The Big Five personality traits (OCEAN) belong to which perspective on personality?",
          choices: ["Psychodynamic", "Humanistic", "Trait", "Social-cognitive"],
          answerIndex: 2,
          explanation: "The Big Five (OCEAN) is the core model of the trait perspective, which describes personality along stable dimensions.",
        },
        {
          prompt: "An infant who understands a toy still exists even after it's hidden under a blanket has developed:",
          choices: ["Conservation", "Object permanence", "Formal operational thought", "Egocentrism"],
          answerIndex: 1,
          explanation: "Object permanence, achieved in the sensorimotor stage, is the understanding that objects continue to exist when out of sight.",
        },
      ],
    },
  ],
};

export default apPsychology;
