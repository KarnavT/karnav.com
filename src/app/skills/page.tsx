import Reveal from "../../components/motion/Reveal";
import PageHeader from "../../components/ui/PageHeader";
import Section from "../../components/ui/Section";

export default function SkillsPage() {
  return (
    <div className="mx-auto w-full max-w-4xl space-y-14">
      <Reveal delay={0.02}>
        <PageHeader
          title="Skills"
          subtitle="Capabilities, tools, and focus areas."
        />
      </Reveal>
      <Reveal delay={0.04}>
        <Section title="Themes">
          <p className="text-sm text-gray-500">
            Placeholder copy goes here to show future directions.
          </p>
        </Section>
      </Reveal>
      <Reveal delay={0.06}>
        <Section title="Explorations">
          <p className="text-sm text-gray-500">
            Placeholder copy goes here to outline ongoing thoughts.
          </p>
        </Section>
      </Reveal>
      <Reveal delay={0.08}>
        <Section title="Queue">
          <p className="text-sm text-gray-500">
            Placeholder copy goes here to reserve space for drafts.
          </p>
        </Section>
      </Reveal>
    </div>
  );
}
