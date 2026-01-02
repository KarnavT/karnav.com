"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Ideas", href: "/ideas" },
  { label: "CV", href: "/resume" },
];

const sidebarSections = [
  {
    title: "Concept Work",
    items: ["Apple", "GoodNotes"],
  },
  {
    title: "Projects",
    items: ["AuxAI", "NotiVet", "F1 Race Predictor"],
  },
  {
    title: "Contact",
    items: ["Mail", "Twitter", "LinkedIn", "Read.cv"],
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed inset-y-0 left-0 w-60 border-r border-gray-200 bg-white px-8 py-10">
      <div className="space-y-10">
        <div className="space-y-6">
          <Link href="/" className="inline-flex items-center rounded bg-gray-100 px-3 py-2 text-2xl font-bold text-gray-900">કર્ણવ
          </Link>
          <nav aria-label="Primary">
            <ul className="space-y-2 text-lg font-semibold text-gray-700">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      className={[
                        "block transition-colors duration-200",
                        isActive ? "text-gray-900" : "text-gray-600",
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
        </div>

        {sidebarSections.map((section) => (
          <div
            key={section.title}
            className="space-y-3 border-t border-gray-200 pt-6 -mx-8 px-8"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
              {section.title}
            </p>
            <ul className="space-y-1 text-sm text-gray-700">
              {section.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </aside>
  );
}
