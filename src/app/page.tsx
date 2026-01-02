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
              Karnav is a software engineer building intelligent, high-performance systems that feel intuitive 
              and scalable. He’s worked across full-stack and AI-driven products, from platforms used by millions 
              to real-time systems. He studies computer science at Georgia Tech and builds software at the 
              intersection of AI, systems, and user experience.
          </span>
        </p>
      </section>

      <div className="border-t border-gray-100 pt-6">
        <p className="text-xs uppercase tracking-[0.4em] text-gray-300">
          Craft
        </p>
      </div>
    </div>
  );
}
