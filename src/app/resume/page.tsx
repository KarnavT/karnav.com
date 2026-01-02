import PageHeader from "../../components/ui/PageHeader";
import Section from "../../components/ui/Section";

export default function ResumePage() {
  return (
    <div className="mx-auto w-full max-w-4xl space-y-14">
      <PageHeader
        title="Resume"
        subtitle="A structured outline of experience and capabilities."
      />
      <Section title="Summary">
        <p className="text-sm text-gray-500">
          Placeholder copy goes here to reserve space for a short summary.
        </p>
      </Section>
      <Section title="Experience">
        <p className="text-sm text-gray-500">
          Placeholder copy goes here to list roles and contributions.
        </p>
      </Section>
      <Section title="Expertise">
        <p className="text-sm text-gray-500">
          Placeholder copy goes here for future skills and tools.
        </p>
      </Section>
    </div>
  );
}
