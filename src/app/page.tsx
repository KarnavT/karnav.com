"use client";

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
    className: "",
    mediaClass: "md:h-40",
  };
  const tiles = [
    {
      ...baseTile,
      title: "Apple",
      subtitle: "Notes",
      className: "",
      date: "2023",
    },
    {
      ...baseTile,
      title: "amazon",
      subtitle: "Tag & Reminders",
      className: "",
      date: "2022",
    },
    {
      ...baseTile,
      title: "AuxAI",
      subtitle: "Projects",
      className: "",
      date: "2024",
    },
    {
      ...baseTile,
      title: "NotiVet",
      subtitle: "Projects",
      className: "",
      date: "2024",
    },
    {
      ...baseTile,
      title: "F1 Machine Learning Predictor",
      subtitle: "Projects",
      className: "",
      date: "2023",
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
              At Georgia Tech, he studies computer science at the intersection of AI, systems, and user experience.
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
          <article
            key={tile.title}
            className={[
              "group flex h-full w-full flex-col",
              tile.className,
            ]
              .filter(Boolean)
              .join(" ")}
          >
            <div className="flex h-full flex-col">
              <div className="rounded-sm bg-gray-50 p-6 shadow-[0_8px_16px_-14px_rgba(15,23,42,0.22)] transition-[box-shadow,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1 group-hover:shadow-[0_12px_20px_-16px_rgba(15,23,42,0.26)]">
                <div
                  className={[
                    "w-full rounded-[3px] bg-gray-50",
                    "h-24",
                    tile.mediaClass ?? "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                />
              </div>
              <div className="flex items-start justify-between gap-4 bg-white px-1 pt-2 text-lg font-semibold text-gray-700 shadow-[0_-10px_20px_-20px_rgba(15,23,42,0.35)] transition-shadow duration-200 ease-out group-hover:shadow-[0_-16px_26px_-20px_rgba(15,23,42,0.4)]">
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
          </article>
        ))}
      </section>
    </div>
  );
}
