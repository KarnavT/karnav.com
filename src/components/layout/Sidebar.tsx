"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Contact", href: "/contact" },
];

const sidebarSections = [
  {
    title: "Previous Work",
    items: [
      { label: "BetterCampus", href: "/projects/bettercampus" },
      { label: "iVue", href: "/projects/ivue" },
    ],
  },
  {
    title: "Projects",
    items: [
      { label: "AuxAI", href: "/projects/auxai" },
      { label: "NotiVet", href: "/projects/notivet" },
      { label: "F1 Race Predictor", href: "/projects/f1-predictor" },
    ],
  },
  {
    title: "Links",
    items: [
      { label: "Email", href: "mailto:karnavnt@gmail.com" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/karnav-trivedi/" },
      { label: "GitHub", href: "https://github.com/KarnavT" },
    ],
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopyEmail = (e: any, href: string, label: string) => {
    if (!href.startsWith("mailto:")) return;
    // Prevent default link navigation (don't open mail client) — just copy email
    e.preventDefault();
    e.stopPropagation?.();
    const email = href.replace("mailto:", "");
    if (navigator.clipboard && typeof navigator.clipboard.writeText === "function") {
      navigator.clipboard.writeText(email).catch((err) => console.error("Copy failed", err));
    }
    setCopied(label);
    setTimeout(() => setCopied(null), 1900);
  };  

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-30 border-b border-gray-200 bg-white lg:hidden">
        <div className="flex items-center justify-between px-4 pt-4 pb-4">
          <Link
            href="/"
            className="inline-flex items-center rounded bg-gray-100 px-3 py-2 text-xl font-bold text-gray-900"
          >
            કર્ણવ
          </Link>
          <button
            type="button"
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            aria-label="Toggle menu"
            className="inline-flex h-10 w-10 items-center justify-center text-gray-700 focus-visible:outline-none"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <span className="sr-only">Menu</span>
            <span className="flex flex-col items-center justify-center gap-1">
              <span className="h-0.5 w-6 bg-gray-700" />
              <span className="h-0.5 w-6 bg-gray-700" />
              <span className="h-0.5 w-6 bg-gray-700" />
            </span>
          </button>
        </div>
        <div
          id="mobile-nav"
          className={[
            "border-t border-gray-100 px-4 overflow-hidden transition-all duration-500 ease-out",
            isOpen ? "max-h-[calc(100vh-56px)] opacity-100 translate-y-0 pt-4 pb-4" : "max-h-0 opacity-0 -translate-y-2 pointer-events-none",
          ].join(" ")}
        >
            <nav aria-label="Primary">
              <ul className="space-y-0.5 text-base font-medium text-gray-700">
                {navItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <li key={item.href}>
                      <Link
                        className={[
                          "block rounded px-2 py-1 text-gray-700",
                          isActive ? "bg-gray-100 text-gray-900" : "hover:text-gray-900",
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
            <div className="mt-4 space-y-4 px-2">
              {sidebarSections.map((section) => (
                <div key={section.title} className="space-y-2 border-t border-gray-200 pt-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                    {section.title}
                  </p>
                  <ul className="space-y-1 text-sm font-medium text-gray-600">
                    {section.items.map((item) => (
                      <li key={item.label}>
                        <Link
                          className="inline-flex text-gray-600 hover:text-gray-900"
                          href={item.href}
                          rel="noreferrer"
                          target={
                            item.href.startsWith("http") || item.href.startsWith("mailto:")
                              ? "_blank"
                              : undefined
                          }
                          onClick={(e) => item.href.startsWith("mailto:") ? handleCopyEmail(e, item.href, item.label) : undefined}
                        >
                          <span className="inline-flex items-center gap-2">
                            <span className="relative inline-block">{item.label}</span>
                            {copied === item.label && (
                              <span role="status" aria-live="polite" className="inline-flex items-center rounded-full bg-green-100 text-green-800 px-2 py-0.5 text-xs font-medium animate-fade-in-out">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414-1.414L7 12.172 4.707 9.879a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l9-9z" clipRule="evenodd" />
                                </svg>
                                <span className="ml-1">Copied</span>
                              </span>
                            )}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
      </header>

      <aside className="fixed inset-y-0 left-0 hidden w-60 border-r border-gray-200 bg-white px-8 py-10 lg:block">
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
                        "block text-black transition-colors duration-200 hover:text-gray-500",
                        isActive ? "text-black" : "text-black",
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
              {section.items.map((item) => (
                <li key={item.label}>
                  <Link
                    className="group relative inline-flex text-gray-600"
                    href={item.href}
                    rel="noreferrer"
                    target={
                      item.href.startsWith("http") || item.href.startsWith("mailto:")
                        ? "_blank"
                        : undefined
                    }
                    onClick={(e) => item.href.startsWith("mailto:") ? handleCopyEmail(e, item.href, item.label) : undefined}
                  >
                    <span className="relative inline-flex items-center gap-2">
                      <span className="relative inline-block">
                        {item.label}
                        <span className="absolute left-0 top-full h-px w-full origin-left scale-x-0 bg-gray-900 transition-transform duration-300 ease-out group-hover:scale-x-100" />
                      </span>
                      {copied === item.label && (
                        <span role="status" aria-live="polite" className="inline-flex items-center rounded-full bg-green-100 text-green-800 px-2 py-0.5 text-xs font-medium animate-fade-in-out">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414-1.414L7 12.172 4.707 9.879a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l9-9z" clipRule="evenodd" />
                          </svg>
                          <span className="ml-1">Copied</span>
                        </span>
                      )} 
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </aside>
    </>
  );
}
