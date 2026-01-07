"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const formatDateTime = (date: Date) => {
  const weekday = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
  }).format(date);
  const monthDay = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
  }).format(date);
  const time = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
  }).format(date);

  return `${weekday}, ${monthDay} ${time}`;
};

export default function Home() {
  const [now, setNow] = useState(() => new Date());
  const baseTile = {
    mediaClass: "bg-contain bg-center bg-no-repeat",
  };
  const tiles = [
    {
      ...baseTile,
      title: "BetterCampus",
      subtitle: "Tasks & Assignments",
      date: "2025",
      slug: "bettercampus",
      mediaStyle: { backgroundImage: "url(/BC.png)" },
    },
    {
      ...baseTile,
      title: "iVue",
      subtitle: "Remote Drone Interface",
      date: "2024",
      slug: "ivue",
      mediaStyle: { backgroundImage: "url(/iVue.png)" },
    },
    {
      ...baseTile,
      title: "AuxAI",
      subtitle: "Project",
      date: "2025",
      slug: "auxai",
      mediaStyle: { backgroundImage: "url(/AuxAI.png)" },
    },
    {
      ...baseTile,
      title: "NotiVet",
      subtitle: "Project",
      date: "2025",
      slug: "notivet",
      mediaStyle: { backgroundImage: "url(/NotiVet.png)" },
    },
    {
      ...baseTile,
      title: "F1 Machine Learning Predictor",
      subtitle: "Project",
      date: "2026",
      slug: "f1-predictor",
      mediaStyle: { backgroundImage: "url(/F1-Ferrari.png)" },
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000 * 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full space-y-6 px-6 pb-16 pt-10 sm:px-10">
      <header className="flex flex-col gap-2 text-lg font-medium text-transparent sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-2">
          <span className="bg-gradient-to-b from-gray-600 via-gray-500 to-gray-400 bg-clip-text">
            Hello there!
          </span>
        </div>
        <span className="bg-gradient-to-b from-gray-600 via-gray-500 to-gray-400 bg-clip-text">
          {formatDateTime(now)}
        </span>
      </header>

      <section className="-ml-1 space-y-8">
        <p className="text-3xl font-semibold leading-tight tracking-tight text-transparent sm:text-[2.5rem] sm:leading-[1.3]">
          <span className="bg-gradient-to-b from-gray-600 via-gray-500 to-gray-400 bg-clip-text">
              Karnav is a software engineer building intelligent, high-performance systems that are intuitive and scalable. 
              His work spans full-stack, AI-driven products from platforms used by millions to real-time systems. 
              At Georgia Tech, he studies computer science at the intersection of AI, systems, and computer networks.
          </span>
        </p>
      </section>

      <div className="border-t border-gray-100 pt-6">
        <p className="text-xs uppercase tracking-[0.4em] text-gray-300">
          Craft
        </p>
      </div>

      <section className="grid gap-8 md:grid-cols-3">
        {tiles.map((tile) => (
          <Link
            key={tile.title}
            href={`/projects/${tile.slug}`}
            className="group flex h-full w-full flex-col"
          >
            <div className="flex h-full flex-col">
              <div className="transform-gpu will-change-transform rounded-sm bg-gray-50 p-6 shadow-[0_3px_16px_-10px_rgba(15,23,42,0.22),0_0_12px_-8px_rgba(15,23,42,0.22)] transition-all duration-[900ms] ease-[cubic-bezier(0.2,0.9,0.25,1)] group-hover:-translate-y-1.5 group-hover:shadow-[0_5px_22px_-12px_rgba(15,23,42,0.34),0_0_14px_-9px_rgba(15,23,42,0.34)]">
                <div className="w-full overflow-hidden rounded-[3px] bg-gray-50">
                  <div
                    className={[
                      "aspect-[16/9] w-full",
                      tile.mediaClass ?? "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                    style={tile.mediaStyle}
                  />
                </div>
              </div>
              <div className="flex items-start justify-between gap-4 bg-white px-1 pt-2 text-lg font-semibold text-gray-700">
                <div>
                  <p className="text-lg font-semibold text-gray-700 drop-shadow-[0_1px_1px_rgba(15,23,42,0.08)]">
                    {tile.title}
                  </p>
                  <p
                    className="-mt-1 text-lg text-gray-400"
                    style={{ fontWeight: 450 }}
                  >
                    {tile.subtitle}
                  </p>
                </div>
                <p className="text-sm font-medium text-gray-300">{tile.date}</p>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}
