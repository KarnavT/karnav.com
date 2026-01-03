import Image from "next/image";

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
            className="relative h-40 w-full rounded-sm bg-gray-100/70 bg-cover bg-center shadow-[0_24px_34px_-28px_rgba(15,23,42,0.35)] sm:h-44 2xl:absolute 2xl:left-[-50px] 2xl:top-[72px] 2xl:h-72 2xl:w-48"
            style={{ backgroundImage: 'url("/about/Waterfall.jpg")' }}
          />
          <div
            className="relative h-40 w-full rounded-sm bg-gray-100/60 bg-cover bg-center shadow-[0_28px_40px_-30px_rgba(15,23,42,0.4)] sm:h-44 2xl:absolute 2xl:left-40 2xl:top-[-30px] 2xl:h-[20rem] 2xl:w-56"
            style={{
              backgroundImage: 'url("/about/Balcony holding glasses.jpg")',
            }}
          />
          <div
            className="relative h-40 w-full rounded-sm bg-gray-100/65 bg-cover bg-center shadow-[0_22px_30px_-26px_rgba(15,23,42,0.32)] sm:h-44 2xl:absolute 2xl:left-[25rem] 2xl:top-[-20px] 2xl:h-40 2xl:w-50"
            style={{ backgroundImage: 'url("/about/Modern Architecture.jpg")' }}
          />
          <div
            className="relative h-40 w-full rounded-sm bg-gray-100/60 bg-cover bg-center shadow-[0_24px_32px_-28px_rgba(15,23,42,0.34)] sm:h-44 2xl:absolute 2xl:left-[25rem] 2xl:top-40 2xl:h-51 2xl:w-50"
            style={{ backgroundImage: 'url("/about/Epcot Boat.jpg")' }}
          />
        </div>
      </div>

      <section className="mt-16 grid gap-10 sm:mt-24 lg:mt-[150px] lg:grid-cols-[1.1fr_1fr] lg:items-stretch">
        <div className="grid gap-6 sm:grid-cols-2 sm:gap-8 lg:pl-28 lg:items-stretch">
          <div className="flex items-start">
            <div
              className="relative mt-1 aspect-[4/3] w-full overflow-hidden rounded-sm bg-gray-100 shadow-[0_22px_30px_-24px_rgba(15,23,42,0.25)] lg:mt-12"
            >
              <Image
                src="/about/Mount Teton.jpg"
                alt="Mount Teton landscape"
                fill
                sizes="(min-width: 1024px) 240px, (min-width: 640px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col lg:mt-[6rem] lg:mb-[3rem]">
            <div
              className="relative aspect-[3/4] w-full overflow-hidden rounded-sm bg-gray-100 shadow-[0_24px_32px_-26px_rgba(15,23,42,0.25)] sm:aspect-[4/5] lg:-ml-4 lg:h-full lg:aspect-auto"
            >
              <Image
                src="/about/Balcony looking at camera.jpg"
                alt="Balcony portrait looking at camera"
                fill
                sizes="(min-width: 1024px) 280px, (min-width: 640px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="space-y-6 lg:max-w-[26rem] lg:justify-self-start">
          <p className="text-xs uppercase tracking-[0.4em] text-gray-400">
            Info
          </p>
          <div className="space-y-5 text-sm leading-[1.5rem] text-gray-500">
            <p>
              I'm an undergraduate student at the Georgia Institute of Technology studying Computer Science
              and graduating in December 2027.
            </p>
            <p>
              For a long time, I've been building software systems that people rely on every day, always 
              striving to create products that feel intuitive, reliable, and human-centered. Throughout 
              this journey, I've been deeply curious about how people think, behave, and make decisions 
              when using software — there are many layers to human–computer interaction, and even more 
              opportunities to design systems that better align with real human needs.
            </p>
            <p>
              During my freshman year, I gravitated toward designing for people 
              in computing spaces because of the scale and speed at which software can impact lives. 
              While technology and systems continuously evolve, at the heart of strong engineering and design 
              is the same principle — creating tools that improve people's lives through clarity, functionality, 
              and thoughtful execution. My background has given me a systems-oriented way of thinking, 
              allowing me to design and build interfaces and platforms that are powerful under the hood while 
              remaining approachable and friendly for the people who use them.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-16 sm:mt-24 lg:pl-28">
        <div className="w-full lg:max-w-[calc((100%-2.5rem)*11/21+2.5rem+26rem-20px)]">
          <hr className="border-t border-gray-100" />
        <div className="pt-6 lg:grid lg:grid-cols-[1.1fr_1fr] lg:gap-10">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-gray-400">
              Education
            </p>

            <div className="mt-6 space-y-2">
              <h3 className="text-3xl font-medium tracking-tight text-gray-900 lg:text-2xl xl:text-3xl">
                Georgia Institute of Technology
              </h3>
              <p className="text-2xl font-normal text-gray-500 lg:text-xl xl:text-2xl">
                College of Computing
              </p>
              <p className="text-sm font-sans text-gray-500 lg:text-xs xl:text-sm">
                2025 - 2027
              </p>
              <p className="text-sm text-gray-500 pt-3 lg:text-xs xl:text-sm">
                Bachelor of Science in Computer Science<br />
                Concentrations: Artificial Intelligence and Computer Networks
              </p>
            </div>
          </div>

          <div className="lg:ml-[10px] lg:justify-self-stretch">
            <div className="relative mt-6">
              <div
                className="relative h-48 w-full rounded-sm bg-gray-100/70 bg-cover bg-center shadow-[0_24px_34px_-28px_rgba(15,23,42,0.35)] sm:h-56"
                style={{ backgroundImage: 'url("/about/GT Spring Background.jpg")' }}
              />
              <p className="mt-3 text-xs text-gray-500">
                Georgia Tech campus during the spring
              </p>
            </div>
          </div>
        </div>
        </div>
      </section>
    </div>
  );
}
