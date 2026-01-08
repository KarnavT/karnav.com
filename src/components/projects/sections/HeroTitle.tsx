import Reveal from "../../motion/Reveal";

interface HeroTitleProps {
  title: string;
  description: string;
  delay?: number;
}

export default function HeroTitle({
  title,
  description,
  delay = 0.1,
}: HeroTitleProps) {
  return (
    <Reveal delay={delay}>
      <div className="mb-8 mt-12 space-y-5">
        <h1 className="text-4xl font-medium tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="text-sm leading-relaxed text-gray-600 md:text-base">
          {description}
        </p>
      </div>
    </Reveal>
  );
}
