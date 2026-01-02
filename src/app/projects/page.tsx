import PageHeader from "../../components/ui/PageHeader";
import Section from "../../components/ui/Section";

export default function ProjectsPage() {
  return (
    <div className="mx-auto w-full max-w-4xl space-y-14">
      <PageHeader
        title="Projects"
        subtitle="Selected work and ongoing explorations."
      />
      <Section title="Overview">
        <p className="text-sm text-gray-500">
          Placeholder copy goes here to indicate scope and structure.
        </p>
      </Section>
      <Section title="Case Studies">
        <p className="text-sm text-gray-500">
          Placeholder copy goes here for future project summaries.
        </p>
      </Section>
      <Section title="Experiments">
        <p className="text-sm text-gray-500">
          Placeholder copy goes here for smaller explorations.
        </p>
      </Section>
    </div>
  );
}
