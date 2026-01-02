import PageHeader from "../../components/ui/PageHeader";
import Section from "../../components/ui/Section";

export default function IdeasPage() {
  return (
    <div className="mx-auto w-full max-w-4xl space-y-14">
      <PageHeader
        title="Ideas"
        subtitle="Notes, prompts, and works in progress."
      />
      <Section title="Themes">
        <p className="text-sm text-gray-500">
          Placeholder copy goes here to show future directions.
        </p>
      </Section>
      <Section title="Explorations">
        <p className="text-sm text-gray-500">
          Placeholder copy goes here to outline ongoing thoughts.
        </p>
      </Section>
      <Section title="Queue">
        <p className="text-sm text-gray-500">
          Placeholder copy goes here to reserve space for drafts.
        </p>
      </Section>
    </div>
  );
}
