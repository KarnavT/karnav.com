export type ProjectCategory = "Previous Work" | "Projects";

export interface ProjectMedia {
  hero: string;
  feat1: string;
  feat2: string;
  wide: string;
  final: string;
}

export interface ProjectChallenge {
  icon: string;
  title: string;
  text: string;
}

export interface ProjectMetrics {
  value: string;
  label: string;
}

export interface ImageConfig {
  hero?: {
    aspectRatio?: string;
    objectFit?: "cover" | "contain";
    bgColor?: string;
  };
  features?: {
    aspectRatio?: string;
    objectFit?: "cover" | "contain";
    cols?: 2 | 3;
  };
  wide?: {
    aspectRatio?: string;
    objectFit?: "cover" | "contain";
  };
  final?: {
    aspectRatio?: string;
    objectFit?: "cover" | "contain";
  };
}

export interface Project {
  title: string;
  slug: string;
  description: string;
  category: ProjectCategory;
  overview: string;
  approach: string;
  challenges: ProjectChallenge[];
  metrics: ProjectMetrics[];
  media: ProjectMedia;
  imageConfig?: ImageConfig;
}
