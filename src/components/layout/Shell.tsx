"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";

import Sidebar from "./Sidebar";

type ShellProps = {
  children: ReactNode;
};

export default function Shell({ children }: ShellProps) {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Sidebar />
      <motion.main
        key={pathname}
        className="ml-60 h-screen overflow-y-auto px-10 py-12"
        initial={
          shouldReduceMotion
            ? false
            : {
                opacity: 0,
                y: 10,
              }
        }
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={
          shouldReduceMotion
            ? {
                duration: 0,
              }
            : {
                duration: 0.3,
                ease: "easeOut",
              }
        }
      >
        {children}
      </motion.main>
    </div>
  );
}
