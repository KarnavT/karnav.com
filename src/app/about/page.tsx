export default function AboutPage() {
  return (
    <div className="relative w-full overflow-hidden px-10 py-14 sm:px-12 sm:py-16">
      <p className="absolute ml-3 left-10 top-[5px] text-[0.7rem] uppercase tracking-[0.35em] text-gray-600 sm:left-12 lg:left-[9.5rem]">
        Let the fog settle...
      </p>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(148,163,184,0.16),transparent_55%),radial-gradient(circle_at_80%_20%,rgba(148,163,184,0.12),transparent_50%),radial-gradient(circle_at_35%_80%,rgba(226,232,240,0.45),transparent_60%)] blur-2xl" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.92),rgba(255,255,255,0.65),rgba(255,255,255,0.9))]" />

      <div className="relative grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-start">
        <div className="space-y-6 lg:pl-28">
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

        <div className="relative h-[360px] w-full -ml-6">
          <div
            className="absolute left-[-40px] top-28 h-60 w-48 rounded-sm bg-gray-100/70 bg-cover bg-center shadow-[0_24px_34px_-28px_rgba(15,23,42,0.35)]"
            style={{ backgroundImage: 'url("/about/Waterfall.jpg")' }}
          />
          <div
            className="absolute left-44 top-4 h-80 w-56 rounded-sm bg-gray-100/60 bg-cover bg-center shadow-[0_28px_40px_-30px_rgba(15,23,42,0.4)]"
            style={{
              backgroundImage: 'url("/about/Balcony holding glasses.jpg")',
            }}
          />
          <div
            className="absolute right-0 top-0 h-36 w-36 rounded-sm bg-gray-100/65 bg-cover bg-center shadow-[0_22px_30px_-26px_rgba(15,23,42,0.32)]"
            style={{ backgroundImage: 'url("/about/Mount Teton.jpg")' }}
          />
          <div
            className="absolute right-0 top-40 h-44 w-40 rounded-sm bg-gray-100/60 bg-cover bg-center shadow-[0_24px_32px_-28px_rgba(15,23,42,0.34)]"
            style={{ backgroundImage: 'url("/about/Epcot Boat.jpg")' }}
          />
        </div>
      </div>
    </div>
  );
}
