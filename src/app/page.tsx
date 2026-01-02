import Reveal from "../components/motion/Reveal";
import PageHeader from "../components/ui/PageHeader";
import Section from "../components/ui/Section";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-4xl space-y-14">
      <Reveal delay={0.02}>
        <PageHeader
          title="About"
          subtitle="A brief introduction and guiding themes."
        />
      </Reveal>
      <Reveal delay={0.04}>
        <Section title="Overview">
          <p className="text-sm text-gray-500">
            Placeholder copy goes here to establish structure and rhythm.
          </p>
        </Section>
      </Reveal>
      <Reveal delay={0.06}>
        <Section title="Highlights">
          <p className="text-sm text-gray-500">
            Placeholder copy goes here to indicate key points or focus areas.
          </p>
        </Section>
      </Reveal>
      <Reveal delay={0.08}>
        <Section title="Focus">
          <p className="text-sm text-gray-500">
            Placeholder copy goes here to reserve space for future details.
          </p>
        </Section>
      </Reveal>
    </div>
  );
}
