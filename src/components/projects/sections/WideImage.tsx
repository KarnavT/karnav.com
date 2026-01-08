import Image from "next/image";
import Reveal from "../../motion/Reveal";
import { ImageConfig } from "../../../data/projects";

interface WideImageProps {
  src: string;
  alt: string;
  config?: ImageConfig["wide"];
  delay?: number;
}

export default function WideImage({
  src,
  alt,
  config = {},
  delay = 0.5,
}: WideImageProps) {
  const { aspectRatio = "aspect-[21/9]", objectFit = "cover" } = config;

  const isPlaceholder = !src || src.includes("placeholder");

  return (
    <Reveal delay={delay}>
      <div className="mb-20">
        <div className="overflow-hidden rounded-xl bg-gray-50">
          {isPlaceholder ? (
            <div className={`flex ${aspectRatio} items-center justify-center`}>
              <div className="text-center">
                <div className="mb-3 text-5xl">🎨</div>
                <p className="text-xs font-medium text-gray-600">Wide Feature Image</p>
                <p className="text-[10px] text-gray-400">
                  Showcase your interface or workflow
                </p>
              </div>
            </div>
          ) : (
            <div className={`relative ${aspectRatio} overflow-hidden`}>
              <Image
                src={src}
                alt={alt}
                fill
                className={`object-${objectFit}`}
                sizes="(min-width: 1024px) 1400px, 100vw"
              />
            </div>
          )}
        </div>
      </div>
    </Reveal>
  );
}
