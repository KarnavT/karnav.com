import Reveal from "../../components/motion/Reveal";
import PageHeader from "../../components/ui/PageHeader";
import Section from "../../components/ui/Section";

export default function ResumePage() {
  return (
    <div className="mx-auto w-full max-w-4xl space-y-14">
      <Reveal delay={0.02}>
        <PageHeader
          title="Resume"
          subtitle="A structured outline of experience and capabilities."
        />
      </Reveal>
      <Reveal delay={0.04}>
        <Section title="Summary">
          <p className="text-sm text-gray-500">
            Placeholder copy goes here to reserve space for a short summary.
          </p>
        </Section>
      </Reveal>
      <Reveal delay={0.06}>
        <Section title="Experience">
          <p className="text-sm text-gray-500">
            Placeholder copy goes here to list roles and contributions.
          </p>
        </Section>
      </Reveal>
      <Reveal delay={0.08}>
        <Section title="Expertise">
          <p className="text-sm text-gray-500">
            Placeholder copy goes here for future skills and tools.
          </p>
        </Section>
      </Reveal>
    </div>
  );
}
