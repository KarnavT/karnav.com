import Image from "next/image";
import Reveal from "../../motion/Reveal";
import { ImageConfig } from "../../../data/projects";

interface FeatureImagesProps {
  images: Array<{ src: string; alt: string }>;
  config?: ImageConfig["features"];
  delay?: number;
}

export default function FeatureImages({
  images,
  config = {},
  delay = 0.4,
}: FeatureImagesProps) {
  const {
    aspectRatio = "aspect-[4/3]",
    objectFit = "cover",
    cols = 2,
  } = config;

  const isPlaceholder = images.some((img) => !img.src || img.src.includes("placeholder"));

  return (
    <Reveal delay={delay}>
      <div className={`mt-6 mb-6 grid gap-6 ${cols === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'}`}>
        {isPlaceholder ? (
          <>
            <div className="overflow-hidden rounded-xl bg-gradient-to-br from-blue-50 to-indigo-100">
              <div className={`flex ${aspectRatio} items-center justify-center`}>
                <div className="text-center">
                  <div className="mb-2 text-4xl">🖼️</div>
                  <p className="text-xs font-medium text-gray-600">Feature Image 1</p>
                  <p className="text-[10px] text-gray-400">Add technical screenshot</p>
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-xl bg-gradient-to-br from-violet-50 to-purple-100">
              <div className={`flex ${aspectRatio} items-center justify-center`}>
                <div className="text-center">
                  <div className="mb-2 text-4xl">🖼️</div>
                  <p className="text-xs font-medium text-gray-600">Feature Image 2</p>
                  <p className="text-[10px] text-gray-400">Add technical screenshot</p>
                </div>
              </div>
            </div>
          </>
        ) : (
          images.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-xl bg-gray-50 ring-1 ring-gray-100"
            >
              <div className={`relative ${aspectRatio}`}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="w-full h-full"
                  style={{ objectFit: objectFit, objectPosition: 'top' }}
                  sizes="(min-width: 768px) 600px, 100vw"
                />
              </div>
            </div>
          ))
        )}
      </div>
    </Reveal>
  );
}
