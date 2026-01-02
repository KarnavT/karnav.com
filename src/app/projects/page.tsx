import Reveal from "../../components/motion/Reveal";
import ProjectCard from "../../components/projects/ProjectCard";
import PageHeader from "../../components/ui/PageHeader";
import Section from "../../components/ui/Section";

const projects = [
  {
    title: "Signal Notes",
    slug: "signal-notes",
    description: "A minimal research workspace with flexible capture flows.",
    tags: ["Next.js", "TypeScript", "UI Systems"],
  },
  {
    title: "Atlas Studio",
    slug: "atlas-studio",
    description: "A concept workspace for spatial planning and project mapping.",
    tags: ["React", "Motion", "Design Systems"],
  },
  {
    title: "Quiet Stack",
    slug: "quiet-stack",
    description: "A lightweight toolchain for focused, distraction-free builds.",
    tags: ["Tailwind", "Productivity", "Prototyping"],
  },
  {
    title: "Field Log",
    slug: "field-log",
    description: "A modular logbook for ideas, experiments, and iterations.",
    tags: ["App Router", "TypeScript", "Research"],
  },
];

export default function ProjectsPage() {
  return (
    <div className="mx-auto w-full max-w-4xl space-y-14">
      <Reveal delay={0.02}>
        <PageHeader
          title="Projects"
          subtitle="Selected work and ongoing explorations."
        />
      </Reveal>
      <Reveal delay={0.04}>
        <Section title="Projects">
          <div className="grid gap-4 sm:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </Section>
      </Reveal>
    </div>
  );
}
