export default function AboutPage() {
  return (
    <div className="relative w-full overflow-hidden px-10 py-14 sm:px-12 sm:py-16">
      <p className="absolute ml-3 left-10 top-[5px] text-[0.7rem] uppercase tracking-[0.35em] text-gray-600 sm:left-12 lg:left-[9.5rem]">
        Let the fog settle...
      </p>
      <div className="pointer-events-none absolute inset-0" />

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

        <div className="relative mt-10 grid grid-cols-2 gap-4 lg:mt-0 2xl:h-[360px] 2xl:w-full 2xl:-ml-6 2xl:block">
          <div
            className="relative h-40 w-full rounded-sm bg-gray-100/70 bg-cover bg-center shadow-[0_24px_34px_-28px_rgba(15,23,42,0.35)] sm:h-44 2xl:absolute 2xl:left-[-40px] 2xl:top-[72px] 2xl:h-72 2xl:w-48"
            style={{ backgroundImage: 'url("/about/Waterfall.jpg")' }}
          />
          <div
            className="relative h-40 w-full rounded-sm bg-gray-100/60 bg-cover bg-center shadow-[0_28px_40px_-30px_rgba(15,23,42,0.4)] sm:h-44 2xl:absolute 2xl:left-42 2xl:top-[-30px] 2xl:h-[20rem] 2xl:w-56"
            style={{
              backgroundImage: 'url("/about/Balcony holding glasses.jpg")',
            }}
          />
          <div
            className="relative h-40 w-full rounded-sm bg-gray-100/65 bg-cover bg-center shadow-[0_22px_30px_-26px_rgba(15,23,42,0.32)] sm:h-44 2xl:absolute 2xl:right-[-5px] 2xl:top-[-20px] 2xl:h-40 2xl:w-50"
            style={{ backgroundImage: 'url("/about/Mount Teton.jpg")' }}
          />
          <div
            className="relative h-40 w-full rounded-sm bg-gray-100/60 bg-cover bg-center shadow-[0_24px_32px_-28px_rgba(15,23,42,0.34)] sm:h-44 2xl:absolute 2xl:right-[-5px] 2xl:top-40 2xl:h-51 2xl:w-50"
            style={{ backgroundImage: 'url("/about/Epcot Boat.jpg")' }}
          />
        </div>
      </div>
    </div>
  );
}
