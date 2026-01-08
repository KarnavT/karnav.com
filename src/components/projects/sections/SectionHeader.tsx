import Reveal from "../../motion/Reveal";

interface SectionHeaderProps {
  title: string;
  delay?: number;
}

export default function SectionHeader({ title, delay }: SectionHeaderProps) {
  return (
    <Reveal delay={delay}>
      <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-900">
        {title}
      </h2>
    </Reveal>
  );
}
