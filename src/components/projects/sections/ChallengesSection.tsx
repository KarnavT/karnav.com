import Reveal from "../../motion/Reveal";
import { ProjectChallenge } from "../../../data/projects";

interface ChallengesSectionProps {
  challenges: ProjectChallenge[];
  delay?: number;
}

export default function ChallengesSection({
  challenges,
  delay = 0.6,
}: ChallengesSectionProps) {
  return (
    <Reveal delay={delay}>
      <div className="mb-12">
        <h2 className="mb-6 text-sm font-semibold uppercase tracking-wider text-gray-900">
          Challenges
        </h2>

        <div className="mt-4 mb-20 grid gap-8 md:grid-cols-3">
          {challenges.map((challenge, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-100 transition-all duration-300 hover:shadow-lg hover:ring-gray-200"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-2xl transition-transform duration-300 group-hover:scale-110">
                {challenge.icon}
              </div>
              <h3 className="mb-3 text-lg font-semibold text-gray-900">
                {challenge.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-600">
                {challenge.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
