"use client";

import { useRef, type ReactNode } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
} from "framer-motion";
import { usePathname } from "next/navigation";

import Sidebar from "./Sidebar";

type ShellProps = {
  children: ReactNode;
};

export default function Shell({ children }: ShellProps) {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();
  const mainRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ container: mainRef });
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 26,
    mass: 0.2,
  });
  const motionStyle = shouldReduceMotion
    ? undefined
    : { willChange: "transform, opacity", translateZ: 0 };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Sidebar />
      <main
        ref={mainRef}
        className="relative ml-60 h-screen overflow-y-auto scrollbar-stable"
      >
        <div className="sticky top-0 z-20 h-0.5 w-full pointer-events-none">
          {shouldReduceMotion ? (
            <div className="h-full w-full bg-transparent" aria-hidden />
          ) : (
            <motion.div
              className="h-full w-full origin-left bg-gray-200"
              style={{ scaleX: progress }}
              aria-hidden
            />
          )}
        </div>
        <motion.div
          key={pathname}
          className="px-10 py-12"
          style={motionStyle}
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
        </motion.div>
      </main>
    </div>
  );
}
