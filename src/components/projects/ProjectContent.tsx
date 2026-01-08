import { Project } from "../../data/projects";
import CategoryHeader from "./sections/CategoryHeader";
import HeroTitle from "./sections/HeroTitle";
import Divider from "./sections/Divider";
import HeroImage from "./sections/HeroImage";
import OverviewSection from "./sections/OverviewSection";
import ApproachSection from "./sections/ApproachSection";
import FeatureImages from "./sections/FeatureImages";
import WideImage from "./sections/WideImage";
import ChallengesSection from "./sections/ChallengesSection";
import ImpactSection from "./sections/ImpactSection";
import ClosingImage from "./sections/ClosingImage";

interface ProjectContentProps {
  project: Project;
}

export default function ProjectContent({ project }: ProjectContentProps) {
  const isComingSoon = project.slug === "f1-predictor";

  return (
    <div className="mx-auto w-full max-w-6xl">
      <CategoryHeader category={project.category} delay={0} />
      <HeroTitle
        title={project.title}
        description={isComingSoon ? "Coming Soon..." : project.description}
        delay={0.1}
      />
      <Divider delay={0.15} />

      {/* If this is the F1 project, hide everything below the first horizontal line */}
      {!isComingSoon && (
        <>
          <HeroImage
            src={project.media.hero}
            alt={`${project.title} hero image`}
            config={project.imageConfig?.hero}
            delay={0.2}
          />
          <OverviewSection content={project.overview} delay={0.3} />

          <div className="mb-12">
            <ApproachSection
              title="Technical Approach"
              content={project.approach}
              delay={0.4}
            />
            <FeatureImages
              images={[
                { src: project.media.feat1, alt: `${project.title} feature 1` },
                { src: project.media.feat2, alt: `${project.title} feature 2` },
              ]}
              config={project.imageConfig?.features}
              delay={0.45}
            />
          </div>

          <WideImage
            src={project.media.wide}
            alt={`${project.title} wide showcase`}
            config={project.imageConfig?.wide}
            delay={0.5}
          />

          <ChallengesSection challenges={project.challenges} delay={0.6} />
          <ImpactSection metrics={project.metrics} delay={0.7} />
          <ClosingImage
            src={project.media.final}
            alt={`${project.title} closing image`}
            config={project.imageConfig?.final}
            delay={0.8}
          />
        </>
      )}
    </div>
  );
}
