"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

import Sidebar from "./Sidebar";

type ShellProps = {
  children: ReactNode;
};

export default function Shell({ children }: ShellProps) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Sidebar />
      <motion.main
        key={pathname}
        className="ml-60 h-screen overflow-y-auto px-10 py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        {children}
      </motion.main>
    </div>
  );
}
