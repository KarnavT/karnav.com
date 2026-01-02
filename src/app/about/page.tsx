export default function AboutPage() {
  return (
    <div className="relative w-full overflow-hidden px-10 py-14 sm:px-12 sm:py-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(148,163,184,0.16),transparent_55%),radial-gradient(circle_at_80%_20%,rgba(148,163,184,0.12),transparent_50%),radial-gradient(circle_at_35%_80%,rgba(226,232,240,0.45),transparent_60%)] blur-2xl" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.92),rgba(255,255,255,0.65),rgba(255,255,255,0.9))]" />

      <div className="relative grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-start">
        <div className="space-y-6 lg:pl-28">
          <p className="text-xs uppercase tracking-[0.4em] text-gray-400">
            Let the fog settle...
          </p>
          <div className="inline-block space-y-4">
            <h1 className="text-8xl font-medium leading-[0.98] tracking-tight text-transparent sm:text-9xl">
              <span className="block bg-gradient-to-b from-gray-600 via-gray-500 to-gray-400 bg-clip-text">
                Karnav
              </span>
              <span className="ml-1 block bg-gradient-to-b from-gray-600 via-gray-500 to-gray-400 bg-clip-text">
                Trivedi
              </span>
            </h1>
            <p className="ml-3 w-full text-3xl font-[450] text-gray-500 sm:ml-4 sm:text-4xl">
              કર્ણવ ત્રિવેદી
            </p>
          </div>
        </div>

        <div className="relative h-[360px] w-full">
          <div className="absolute left-0 top-16 h-48 w-40 rounded-2xl border border-white/60 bg-gray-100/70 shadow-[0_28px_40px_-30px_rgba(15,23,42,0.4)]" />
          <div className="absolute left-44 top-4 h-56 w-48 rounded-2xl border border-white/70 bg-gray-100/60 shadow-[0_28px_40px_-30px_rgba(15,23,42,0.4)]" />
          <div className="absolute left-[calc(100%-7.5rem)] top-8 h-28 w-28 rounded-2xl border border-white/70 bg-gray-100/65 shadow-[0_24px_32px_-28px_rgba(15,23,42,0.35)]" />
          <div className="absolute left-[calc(100%-7.5rem)] top-40 h-36 w-32 rounded-2xl border border-white/70 bg-gray-100/60 shadow-[0_24px_32px_-28px_rgba(15,23,42,0.35)]" />
        </div>
      </div>
    </div>
  );
}
