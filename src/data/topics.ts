import type { Topic } from "../types";
import actEnglish from "./actEnglish";
import actMath from "./actMath";
import apChemistry from "./apChemistry";
import apCalculusAB from "./apCalculusAB";
import apEnvironmentalScience from "./apEnvironmentalScience";
import apPsychology from "./apPsychology";
import apBiology from "./apBiology";

const topics: Topic[] = [
  actEnglish,
  actMath,
  apChemistry,
  apCalculusAB,
  apEnvironmentalScience,
  apPsychology,
  apBiology,
];

export default topics;

export function getTopic(slug: string): Topic | undefined {
  return topics.find((t) => t.slug === slug);
}
