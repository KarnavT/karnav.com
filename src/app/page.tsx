import PageHeader from "../components/ui/PageHeader";
import Section from "../components/ui/Section";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-4xl space-y-14">
      <PageHeader
        title="About"
        subtitle="A brief introduction and guiding themes."
      />
      <Section title="Overview">
        <p className="text-sm text-gray-500">
          Placeholder copy goes here to establish structure and rhythm.
        </p>
      </Section>
      <Section title="Highlights">
        <p className="text-sm text-gray-500">
          Placeholder copy goes here to indicate key points or focus areas.
        </p>
      </Section>
      <Section title="Focus">
        <p className="text-sm text-gray-500">
          Placeholder copy goes here to reserve space for future details.
        </p>
      </Section>
    </div>
  );
}
