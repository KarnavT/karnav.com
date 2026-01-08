import Reveal from "../../motion/Reveal";

interface DividerProps {
  delay?: number;
}

export default function Divider({ delay = 0.15 }: DividerProps) {
  return (
    <Reveal delay={delay}>
      <div className="mb-4">
        <hr className="border-t border-gray-200" />
      </div>
    </Reveal>
  );
}
