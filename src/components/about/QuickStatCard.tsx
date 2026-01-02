"use client";

import { motion, useReducedMotion } from "framer-motion";

type QuickStatCardProps = {
  label: string;
  value: string;
};

export default function QuickStatCard({ label, value }: QuickStatCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className="rounded-lg border border-gray-200/70 bg-white px-4 py-4 transition-colors duration-200"
      whileHover={
        shouldReduceMotion
          ? undefined
          : {
              y: -4,
              backgroundColor: "rgb(249 250 251)",
            }
      }
      transition={
        shouldReduceMotion ? { duration: 0 } : { duration: 0.2, ease: "easeOut" }
      }
    >
      <p className="text-xs uppercase tracking-wide text-gray-400">{label}</p>
      <p className="mt-2 text-sm font-medium text-gray-900">{value}</p>
    </motion.div>
  );
}
