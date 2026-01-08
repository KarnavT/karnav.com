import Image from "next/image";
import Reveal from "../../motion/Reveal";
import { ImageConfig } from "../../../data/projects";

interface ClosingImageProps {
  src: string;
  alt: string;
  config?: ImageConfig["final"];
  delay?: number;
}

export default function ClosingImage({
  src,
  alt,
  config = {},
  delay = 0.8,
}: ClosingImageProps) {
  const { aspectRatio = "aspect-video", objectFit = "cover" } = config;

  const isPlaceholder = !src || src.includes("placeholder");

  return (
    <Reveal delay={delay}>
      <div className="mb-20">
        <div className="overflow-hidden rounded-xl bg-gray-50 ring-1 ring-gray-100">
          {isPlaceholder ? (
            <div className={`flex ${aspectRatio} items-center justify-center`}>
              <div className="text-center">
                <div className="mb-3 text-4xl">✨</div>
                <p className="text-xs font-medium text-gray-600">Final Showcase Image</p>
                <p className="text-[10px] text-gray-400">
                  Add a compelling closing visual
                </p>
              </div>
            </div>
          ) : (
            <div className={`relative ${aspectRatio}`}>
              <Image
                src={src}
                alt={alt}
                fill
                className="w-full h-full"
                style={{ objectFit: objectFit }}
                sizes="(min-width: 1024px) 1200px, 100vw"
              />
            </div>
          )}
        </div>
      </div>
    </Reveal>
  );
}
