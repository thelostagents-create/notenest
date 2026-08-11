import type { Topic } from "../types";

const apPsychology: Topic = {
  slug: "ap-psychology",
  title: "AP Psychology",
  category: "AP Courses",
  subtitle: "Biological bases, sensation, learning, cognition, and development.",
  emoji: "🧠",
  accent: "#c2578a",
  notes: [
    {
      heading: "Biological Bases of Behavior",
      bullets: [
        "A neuron receives signals through dendrites, processes them in the cell body, and sends signals down the axon, released as neurotransmitters at the synapse.",
        "Key neurotransmitters: dopamine (reward/movement), serotonin (mood), acetylcholine (muscle/memory), GABA (inhibitory).",
        "The brain's major structures: the cerebellum (balance/coordination), amygdala (fear/emotion), hippocampus (memory formation), and prefrontal cortex (decision-making).",
        "The nervous system splits into central (brain/spinal cord) and peripheral, which further splits into somatic (voluntary) and autonomic (involuntary: sympathetic 'fight or flight' vs. parasympathetic 'rest and digest').",
      ],
    },
    {
      heading: "Sensation & Perception",
      bullets: [
        "Absolute threshold is the minimum stimulus needed to detect a stimulus 50% of the time; difference threshold (JND) is the smallest detectable change.",
        "Gestalt principles (proximity, similarity, closure, continuity) describe how we organize sensory info into wholes.",
        "Perceptual constancy lets us recognize objects as unchanged despite changes in lighting, angle, or distance.",
      ],
    },
    {
      heading: "Learning",
      bullets: [
        "Classical conditioning (Pavlov): a neutral stimulus paired repeatedly with an unconditioned stimulus becomes a conditioned stimulus that triggers a conditioned response.",
        "Operant conditioning (Skinner): behavior is shaped by consequences — reinforcement increases behavior, punishment decreases it.",
        "Reinforcement schedules: fixed/variable ratio (based on number of responses) and fixed/variable interval (based on time) — variable ratio produces the most persistent behavior.",
        "Observational learning (Bandura): learning by watching and imitating others, demonstrated in the Bobo doll experiment.",
      ],
    },
    {
      heading: "Cognition",
      bullets: [
        "Memory involves encoding (input), storage (retention), and retrieval (access); the three-stage model includes sensory, short-term/working, and long-term memory.",
        "Long-term memory splits into explicit (declarative: facts and events) and implicit (procedural: skills and habits).",
        "The serial position effect: we recall items at the beginning (primacy) and end (recency) of a list better than the middle.",
      ],
    },
    {
      heading: "Development & Personality",
      bullets: [
        "Piaget's stages: sensorimotor, preoperational, concrete operational, formal operational — each marked by new cognitive abilities.",
        "Attachment theory (Ainsworth's 'Strange Situation') identifies secure, avoidant, and anxious/ambivalent attachment styles.",
        "Major personality perspectives: psychodynamic (unconscious drives), humanistic (self-actualization), trait (Big Five: OCEAN), and social-cognitive (behavior shaped by environment and thought).",
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
      prompt: "The autonomic nervous system's 'fight or flight' response is triggered by the:",
      choices: ["Parasympathetic nervous system", "Sympathetic nervous system", "Somatic nervous system", "Central nervous system alone"],
      answerIndex: 1,
      explanation: "The sympathetic nervous system activates the body's fight-or-flight response to perceived threats.",
    },
    {
      prompt: "Recalling both the first and last items of a list better than the middle ones demonstrates the:",
      choices: ["Serial position effect", "Gestalt effect", "Observational learning effect", "Absolute threshold"],
      answerIndex: 0,
      explanation: "The serial position effect combines the primacy effect (early items) and recency effect (recent items).",
    },
    {
      prompt: "Which neurotransmitter is most closely linked to mood regulation and is targeted by many antidepressants?",
      choices: ["Dopamine", "Acetylcholine", "Serotonin", "GABA"],
      answerIndex: 2,
      explanation: "Serotonin regulates mood, and many antidepressants (SSRIs) work by increasing its availability at synapses.",
    },
    {
      prompt: "According to Piaget, a child who understands that a tall glass and a short wide glass can hold the same amount of liquid has reached:",
      choices: ["Object permanence", "Conservation", "Egocentrism", "Attachment"],
      answerIndex: 1,
      explanation: "Conservation is the understanding that quantity stays the same despite changes in shape or appearance, achieved in the concrete operational stage.",
    },
    {
      prompt: "Learning a new behavior by watching someone else perform it and get rewarded is called:",
      choices: ["Classical conditioning", "Operant conditioning", "Observational learning", "Habituation"],
      answerIndex: 2,
      explanation: "Observational learning (modeling) is learning through watching others, as shown in Bandura's Bobo doll studies.",
    },
  ],
};

export default apPsychology;
