"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";

import Reveal from "../../../components/motion/Reveal";
import Section from "../../../components/ui/Section";

const projects = [
  {
    title: "Signal Notes",
    slug: "signal-notes",
    description: "A minimal research workspace with flexible capture flows.",
    overview:
      "Placeholder copy goes here to outline scope, intent, and outcomes.",
    approach:
      "Placeholder copy goes here to describe the technical direction.",
    challenges:
      "Placeholder copy goes here to capture constraints and trade-offs.",
  },
  {
    title: "Atlas Studio",
    slug: "atlas-studio",
    description: "A concept workspace for spatial planning and project mapping.",
    overview:
      "Placeholder copy goes here to outline scope, intent, and outcomes.",
    approach:
      "Placeholder copy goes here to describe the technical direction.",
    challenges:
      "Placeholder copy goes here to capture constraints and trade-offs.",
  },
  {
    title: "Quiet Stack",
    slug: "quiet-stack",
    description: "A lightweight toolchain for focused, distraction-free builds.",
    overview:
      "Placeholder copy goes here to outline scope, intent, and outcomes.",
    approach:
      "Placeholder copy goes here to describe the technical direction.",
    challenges:
      "Placeholder copy goes here to capture constraints and trade-offs.",
  },
  {
    title: "Field Log",
    slug: "field-log",
    description: "A modular logbook for ideas, experiments, and iterations.",
    overview:
      "Placeholder copy goes here to outline scope, intent, and outcomes.",
    approach:
      "Placeholder copy goes here to describe the technical direction.",
    challenges:
      "Placeholder copy goes here to capture constraints and trade-offs.",
  },
];

type ProjectPageProps = {
  params: {
    slug: string;
  };
};

export default function ProjectPage({ params }: ProjectPageProps) {
  const shouldReduceMotion = useReducedMotion();
  const project = projects.find((item) => item.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="mx-auto w-full max-w-4xl space-y-12">
      <motion.div
        className="inline-flex"
        whileHover={shouldReduceMotion ? undefined : { x: 2 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        <Link
          href="/projects"
          className="text-sm text-gray-500 transition-colors duration-200 hover:text-gray-900"
        >
          Back to Projects
        </Link>
      </motion.div>

      <Reveal delay={0.02}>
        <motion.header
          layoutId={`project-card-${project.slug}`}
          className="space-y-3 rounded-lg bg-gray-100/50 p-6"
        >
          <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
            {project.title}
          </h1>
          <p className="text-base text-gray-500">{project.description}</p>
        </motion.header>
      </Reveal>

      <div className="space-y-10">
        <Reveal delay={0.04}>
          <Section title="Overview">
            <p className="text-sm text-gray-500">{project.overview}</p>
          </Section>
        </Reveal>
        <Reveal delay={0.06}>
          <Section title="Technical Approach">
            <p className="text-sm text-gray-500">{project.approach}</p>
          </Section>
        </Reveal>
        <Reveal delay={0.08}>
          <Section title="Challenges">
            <p className="text-sm text-gray-500">{project.challenges}</p>
          </Section>
        </Reveal>
      </div>
    </div>
  );
}
