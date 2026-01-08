"use client";

import { notFound } from "next/navigation";
import { use } from "react";
import { getProject } from "../../../data/projects";
import ProjectContent from "../../../components/projects/ProjectContent";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = use(params);
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return <ProjectContent project={project} />;
}
