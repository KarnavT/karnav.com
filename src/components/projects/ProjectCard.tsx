"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

type ProjectCardProps = {
  title: string;
  description: string;
  tags: string[];
  slug: string;
};

export default function ProjectCard({
  title,
  description,
  tags,
  slug,
}: ProjectCardProps) {
  const shouldReduceMotion = useReducedMotion();
  const [isFocused, setIsFocused] = useState(false);

  const focusedMotion = {
    y: shouldReduceMotion ? 0 : -6,
    backgroundColor: "rgb(243 244 246)",
  };

  return (
    <Link
      href={`/projects/${slug}`}
      className="block focus-visible:outline-none"
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    >
      <motion.article
        layoutId={`project-card-${slug}`}
        className="group rounded-lg bg-gray-100/50 p-5 transition-colors duration-200"
        animate={isFocused ? focusedMotion : { y: 0 }}
        whileHover={focusedMotion}
        transition={
          shouldReduceMotion
            ? { duration: 0 }
            : { type: "spring", stiffness: 300, damping: 24 }
        }
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
    </Link>
  );
}
