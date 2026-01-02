"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const navItems = [
  { label: "About", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Ideas", href: "/ideas" },
  { label: "Resume", href: "/resume" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed inset-y-0 left-0 w-60 border-r border-gray-200 bg-gray-50 px-6 py-10">
      <nav aria-label="Primary">
        <ul className="space-y-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href} className="relative">
                {isActive ? (
                  <motion.span
                    layoutId="active-nav-indicator"
                    className="absolute left-0 top-1/2 h-5 w-1 -translate-y-1/2 rounded-full bg-gray-300"
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  />
                ) : null}
                <Link
                  className={[
                    "block cursor-pointer rounded px-2 py-1 pl-4 text-sm transition-colors duration-200",
                    isActive
                      ? "bg-gray-100 text-gray-900"
                      : "text-gray-600 hover:bg-gray-100/70 hover:text-gray-900",
                  ].join(" ")}
                  href={item.href}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
