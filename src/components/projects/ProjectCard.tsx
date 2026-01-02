"use client";

import { motion, useReducedMotion } from "framer-motion";

type ProjectCardProps = {
  title: string;
  description: string;
  tags: string[];
};

export default function ProjectCard({
  title,
  description,
  tags,
}: ProjectCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      tabIndex={0}
      className="group rounded-lg bg-gray-100/50 p-5 transition-colors duration-200 focus-visible:outline-none"
      whileHover={{
        y: shouldReduceMotion ? 0 : -6,
        backgroundColor: "rgb(243 244 246)",
      }}
      whileFocus={{
        y: shouldReduceMotion ? 0 : -6,
        backgroundColor: "rgb(243 244 246)",
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 24,
      }}
    >
      <div className="space-y-2">
        <h3 className="text-base font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-gray-200/70 px-2.5 py-1 text-xs text-gray-600"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.article>
  );
}
