import Reveal from "../../motion/Reveal";

interface OverviewSectionProps {
  content: string;
  delay?: number;
}

export default function OverviewSection({
  content,
  delay = 0.3,
}: OverviewSectionProps) {
  return (
    <Reveal delay={delay}>
      <div className="mb-20 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-900">
            Overview
          </h2>
        </div>
        <div className="md:col-span-8">
          <p className="text-sm leading-relaxed text-gray-600 md:text-base">
            {content}
          </p>
        </div>
      </div>
    </Reveal>
  );
}
