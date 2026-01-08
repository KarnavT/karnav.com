import Reveal from "../../motion/Reveal";
import { ProjectMetrics } from "../../../data/projects";

interface ImpactSectionProps {
  metrics: ProjectMetrics[];
  delay?: number;
}

export default function ImpactSection({ metrics, delay = 0.7 }: ImpactSectionProps) {
  return (
    <Reveal delay={delay}>
      <div className="mb-32">
        <h2 className="mb-12 text-center text-sm font-semibold uppercase tracking-wider text-gray-900">
          Impact
        </h2>
        <div className="grid gap-8 md:grid-cols-4">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="mb-2 text-5xl font-semibold tracking-tight text-gray-900">
                {metric.value}
              </div>
              <div className="text-sm font-medium text-gray-500">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
