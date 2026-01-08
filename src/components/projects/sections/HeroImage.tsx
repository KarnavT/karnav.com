import Image from "next/image";
import Reveal from "../../motion/Reveal";
import { ImageConfig } from "../../../data/projects";

interface HeroImageProps {
  src: string;
  alt: string;
  config?: ImageConfig["hero"];
  delay?: number;
}

export default function HeroImage({
  src,
  alt,
  config = {},
  delay = 0.2,
}: HeroImageProps) {
  const {
    aspectRatio = "aspect-video",
    objectFit = "cover",
    bgColor = "bg-gray-100",
  } = config;

  // Placeholder fallback
  const isPlaceholder = !src || src.includes("placeholder");

  return (
    <Reveal delay={delay}>
      <div className={`mt-12 mb-16 overflow-hidden rounded-xl ${bgColor}`}>
        {isPlaceholder ? (
          <div className={`flex ${aspectRatio} items-center justify-center`}>
            <div className="text-center">
              <div className="mb-3 text-4xl">📸</div>
              <p className="text-xs font-medium text-gray-500">Hero Image</p>
              <p className="text-[10px] text-gray-400">
                Place your main project image here
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
              sizes="(min-width: 1024px) 1200px, 100vw"
              priority
            />
          </div>
        )}
      </div>
    </Reveal>
  );
}
