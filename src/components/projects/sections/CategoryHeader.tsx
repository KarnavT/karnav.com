import Reveal from "../../motion/Reveal";

interface CategoryHeaderProps {
  category: string;
  delay?: number;
}

export default function CategoryHeader({ category, delay = 0 }: CategoryHeaderProps) {
  return (
    <Reveal delay={delay}>
      <div className="mb-2">
        <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
          {category}
        </p>
      </div>
    </Reveal>
  );
}
