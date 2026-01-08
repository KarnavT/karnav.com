import { bettercampus, ivue, auxai, notivet, f1Predictor } from "./projects";
import { Project } from "./types";

export const projectsIndex: Project[] = [
  bettercampus,
  ivue,
  auxai,
  notivet,
  f1Predictor,
];

export const getProject = (slug: string): Project | undefined => {
  return projectsIndex.find((project) => project.slug === slug);
};

export * from "./types";
