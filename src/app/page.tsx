"use client";

import { useEffect, useState } from "react";

import Reveal from "../components/motion/Reveal";
import QuickStatCard from "../components/about/QuickStatCard";
import TimelineItem from "../components/about/TimelineItem";
import Section from "../components/ui/Section";
import Toast from "../components/ui/Toast";

export default function Home() {
  const email = "karnavnt@gmail.com";
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (!showToast) {
      return;
    }

    const timeout = setTimeout(() => setShowToast(false), 2000);
    return () => clearTimeout(timeout);
  }, [showToast]);

  const handleCopyEmail = async () => {
    let didCopy = false;

    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(email);
        didCopy = true;
      }
    } catch {
      didCopy = false;
    }

    if (!didCopy) {
      const textarea = document.createElement("textarea");
      textarea.value = email;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "absolute";
      textarea.style.left = "-9999px";
      document.body.appendChild(textarea);
      textarea.select();

      try {
        didCopy = document.execCommand("copy");
      } catch {
        didCopy = false;
      } finally {
        document.body.removeChild(textarea);
      }
    }

    if (didCopy) {
      setShowToast(true);
    }
  };

  const quickStats = [
    { label: "Location", value: "Atlanta, GA" },
    { label: "Focus", value: "AI • Computer Networking • Full-Stack" },
    { label: "Current", value: "Internship + building projects" },
    { label: "Tools", value: "TypeScript, React/Next.js, Python, Java, SQL" },
  ];

  const timelineItems = [
    {
      title: "Georgia Tech",
      role: "B.S. Computer Science (AI & Computer Networking)",
      detail: "Deepening foundations in systems, data, and product engineering.",
      date: "2022 — Present",
    },
    {
      title: "Internship",
      role: "Software Engineering Intern",
      detail: "Shipping production features with a focus on reliability and UX.",
      date: "2024 — Present",
    },
    {
      title: "Projects",
      role: "Building portfolio projects (AI + full-stack)",
      detail: "Designing and delivering end-to-end products with polish.",
      date: "Ongoing",
    },
  ];

  return (
    <div className="mx-auto w-full max-w-4xl space-y-16">
      <Reveal delay={0.02}>
        <section className="space-y-6">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
              About
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Karnav T
            </h1>
            <p className="text-base font-medium text-gray-700">
              Computer Science student @ Georgia Tech
            </p>
            <p className="text-base font-medium text-gray-600">
              Building full-stack products with a focus on AI + networking
            </p>
          </div>
          <p className="max-w-2xl text-sm font-medium text-gray-700">
            Currently in an internship, I build polished products and focus on
            designing systems end-to-end, from interface decisions to the
            underlying architecture.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center justify-center rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-medium text-gray-700 transition-colors duration-200 hover:bg-gray-50"
            >
              Copy email
            </button>
            <span className="text-xs text-gray-400">{email}</span>
          </div>
        </section>
      </Reveal>

      <Reveal delay={0.04}>
        <Section title="Highlights" className="space-y-6">
          <div className="grid gap-4 sm:grid-cols-2">
            {quickStats.map((stat) => (
              <QuickStatCard key={stat.label} {...stat} />
            ))}
          </div>
        </Section>
      </Reveal>

      <Section title="Timeline" className="space-y-6">
        <div className="space-y-8 border-l border-gray-200">
          {timelineItems.map((item, index) => (
            <Reveal key={item.title} delay={0.02 * (index + 1)}>
              <TimelineItem {...item} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Toast message="Copied" isVisible={showToast} />
    </div>
  );
}
