"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Ideas", href: "/ideas" },
  { label: "Resume", href: "/resume" },
];

const sidebarSections = [
  {
    title: "Concept Work",
    items: ["Apple", "amazon"],
  },
  {
    title: "Projects",
    items: ["AuxAI", "NotiVet", "F1 Race Predictor"],
  },
  {
    title: "Contact",
    items: [
      { label: "Mail", href: "mailto:karnavnt@gmail.com" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/karnav-trivedi/" },
      { label: "Resume", href: "/resume" },
    ],
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
            <ul className="space-y-2 text-lg font-medium text-gray-600">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      className={[
                        "block transition-colors duration-200",
                        isActive ? "text-gray-800" : "text-gray-500",
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
            <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
              {section.title}
            </p>
            <ul className="space-y-1 text-sm font-medium text-gray-600">
              {section.items.map((item) => {
                if (typeof item === "string") {
                  return <li key={item}>{item}</li>;
                }

                return (
                  <li key={item.label}>
                    <Link
                      className="group relative inline-flex text-gray-600"
                      href={item.href}
                      rel="noreferrer"
                      target={
                        item.href.startsWith("http") || item.href.endsWith(".pdf")
                          ? "_blank"
                          : undefined
                      }
                    >
                      <span className="relative">
                        {item.label}
                        <span className="absolute left-0 top-full h-px w-full origin-left scale-x-0 bg-gray-900 transition-transform duration-300 ease-out group-hover:scale-x-100" />
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </aside>
  );
}
