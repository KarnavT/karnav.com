"use client";

import Image from "next/image";
import { motion, useReducedMotion, type MotionProps } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

export default function AboutPage() {
  const shouldReduceMotion = useReducedMotion();
  const [isReady, setIsReady] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const heroDuration = 1.1;
  const restDelay = heroDuration * 0.3;
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    setIsReady(true);
    const mainEl = document.querySelector('main');
    if (!mainEl) return;
    
    const handleScroll = () => {
      setScrollY(mainEl.scrollTop);
    };
    
    mainEl.addEventListener('scroll', handleScroll);
    return () => mainEl.removeEventListener('scroll', handleScroll);
  }, []);
  
  const fogProgress = Math.min(scrollY / 400, 1);

  const restMotion = useMemo<MotionProps>(() => {
    if (shouldReduceMotion) {
      return {
        initial: false,
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0 },
      };
    }
    return {
      initial: { opacity: 0, y: 14 },
      animate: isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 },
      transition: {
        duration: heroDuration,
        ease: [0.22, 1, 0.36, 1],
        delay: restDelay,
      },
    };
  }, [isReady, restDelay, shouldReduceMotion, heroDuration]);

  return (
    <div ref={containerRef} className="relative w-full overflow-visible px-4 py-10 sm:px-6 sm:py-14 lg:px-12 lg:py-16 min-h-screen">
      {/* Overall page mist overlay */}
      <div 
        className="pointer-events-none fixed inset-0 z-30"
        style={{
          opacity: Math.max(0, 0.4 - fogProgress * 0.5),
          background: `
            linear-gradient(180deg, rgba(255,255,255,0.3) 0%, rgba(250,250,252,0.15) 25%, rgba(252,252,254,0.08) 50%, transparent 75%),
            radial-gradient(ellipse 120vw 80vh at 50% 0%, rgba(255,255,255,0.25) 0%, rgba(250,250,255,0.12) 40%, transparent 70%),
            radial-gradient(ellipse 100vw 60vh at 50% 20%, rgba(248,248,252,0.15) 0%, transparent 60%)
          `,
        }}
      />
      
      {/* Corner fog wisps */}
      <div 
        className="pointer-events-none fixed inset-0 z-30"
        style={{
          opacity: Math.max(0, 0.6 - fogProgress * 0.7),
          background: `
            radial-gradient(ellipse 60vw 50vh at 0% 0%, rgba(245,245,250,0.8) 0%, rgba(248,248,252,0.4) 35%, transparent 70%),
            radial-gradient(ellipse 55vw 45vh at 100% 0%, rgba(250,250,255,0.7) 0%, rgba(252,252,255,0.35) 40%, transparent 65%),
            radial-gradient(ellipse 50vw 55vh at 0% 100%, rgba(248,248,252,0.6) 0%, rgba(250,250,254,0.3) 45%, transparent 70%),
            radial-gradient(ellipse 55vw 50vh at 100% 100%, rgba(245,248,255,0.5) 0%, rgba(248,250,255,0.25) 40%, transparent 65%),
            radial-gradient(ellipse 80vw 40vh at 30% 50%, rgba(252,252,255,0.2) 0%, transparent 60%),
            radial-gradient(ellipse 75vw 45vh at 70% 50%, rgba(250,250,254,0.18) 0%, transparent 55%)
          `,
        }}
      />

      <motion.div
        className="relative grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-start"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={
          shouldReduceMotion
            ? { duration: 0 }
            : { duration: heroDuration, ease: [0.22, 1, 0.36, 1] }
        }
      >
        <div className="space-y-6 lg:pl-28">
          <motion.p 
            className="absolute left-6 -top-6 text-xs uppercase tracking-[0.2em] sm:left-[2.75rem] sm:-top-16 md:left-[3.25rem] lg:left-[7.25rem]" 
            style={{zIndex: 40, color: 'rgb(156, 163, 175)'}}
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            animate={shouldReduceMotion ? {} : (isReady ? { 
              opacity: 1
            } : { opacity: 0 })}
            transition={{
              duration: 1.8,
              ease: [0.16, 1, 0.3, 1]
            }}
          >
            Let that fog settle...
          </motion.p>
          <div className="inline-block space-y-4">
            <h1 className="mt-2 text-8xl font-medium leading-[0.98] tracking-tight text-transparent sm:mt-0 sm:text-7xl lg:text-8xl xl:text-9xl">
              <span className="block bg-gradient-to-r from-gray-300 via-gray-400 to-gray-600 bg-clip-text">
                Karnav
              </span>
              <span className="ml-1 block bg-gradient-to-r from-gray-300 via-gray-400 to-gray-600 bg-clip-text">
                Trivedi
              </span>
            </h1>
            <p className="ml-2 w-full text-2xl font-[450] text-transparent sm:ml-4 sm:text-3xl lg:text-4xl">
              <span className="bg-gradient-to-r from-gray-300 via-gray-400 to-gray-600 bg-clip-text">
                કર્ણવ ત્રિવેદી
              </span>
            </p>
          </div>
        </div>

        <div className="relative mt-1 grid grid-cols-2 gap-4 lg:mt-0 2xl:h-[360px] 2xl:w-full 2xl:-ml-6 2xl:block">
          <div
            className="group relative h-40 w-full overflow-hidden rounded-sm bg-gray-100/70 shadow-[0_24px_34px_-28px_rgba(15,23,42,0.35)] sm:h-44 2xl:absolute 2xl:left-[-50px] 2xl:top-[72px] 2xl:h-72 2xl:w-48"
          >
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("/about/Waterfall.jpg")' }} />
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-white/30" />
            <div className="absolute inset-0" style={{ boxShadow: 'inset 0 0 40px 15px rgba(255,255,255,0.4)' }} />
          </div>
          <div
            className="group relative h-40 w-full overflow-hidden rounded-sm bg-gray-100/60 shadow-[0_28px_40px_-30px_rgba(15,23,42,0.4)] sm:h-44 2xl:absolute 2xl:left-40 2xl:top-[-30px] 2xl:h-[20rem] 2xl:w-56"
          >
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("/about/Balcony holding glasses.jpg")' }} />
            <div className="absolute inset-0 bg-gradient-to-tl from-white/35 via-transparent to-white/25" />
            <div className="absolute inset-0" style={{ boxShadow: 'inset 0 0 50px 20px rgba(255,255,255,0.35)' }} />
          </div>
          <div
            className="group relative h-40 w-full overflow-hidden rounded-sm bg-gray-100/65 shadow-[0_22px_30px_-26px_rgba(15,23,42,0.32)] sm:h-44 2xl:absolute 2xl:left-[25rem] 2xl:top-[-20px] 2xl:h-40 2xl:w-50"
          >
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("/about/Modern Architecture.jpg")' }} />
            <div className="absolute inset-0 bg-gradient-to-bl from-white/45 via-transparent to-white/35" />
            <div className="absolute inset-0" style={{ boxShadow: 'inset 0 0 35px 12px rgba(255,255,255,0.45)' }} />
          </div>
          <div
            className="group relative h-40 w-full overflow-hidden rounded-sm bg-gray-100/60 shadow-[0_24px_32px_-28px_rgba(15,23,42,0.34)] sm:h-44 2xl:absolute 2xl:left-[25rem] 2xl:top-40 2xl:h-51 2xl:w-50"
          >
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("/about/Epcot Boat.jpg")' }} />
            <div className="absolute inset-0 bg-gradient-to-tr from-white/40 via-transparent to-white/30" />
            <div className="absolute inset-0" style={{ boxShadow: 'inset 0 0 45px 18px rgba(255,255,255,0.4)' }} />
          </div>
        </div>
      </motion.div>

      <motion.div {...restMotion}>
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
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-white/25" />
                <div className="absolute inset-0" style={{ boxShadow: 'inset 0 0 40px 15px rgba(255,255,255,0.35)' }} />
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
                <div className="absolute inset-0 bg-gradient-to-tl from-white/35 via-transparent to-white/20" />
                <div className="absolute inset-0" style={{ boxShadow: 'inset 0 0 50px 18px rgba(255,255,255,0.3)' }} />
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
                  className="relative h-48 w-full overflow-hidden rounded-sm bg-gray-100/70 shadow-[0_24px_34px_-28px_rgba(15,23,42,0.35)] sm:h-56"
                >
                  <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("/about/GT Spring Background.jpg")' }} />
                  <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-white/25" />
                  <div className="absolute inset-0" style={{ boxShadow: 'inset 0 0 45px 15px rgba(255,255,255,0.35)' }} />
                </div>
                <p className="mt-3 text-xs text-gray-500">
                  Georgia Tech campus during the spring
                </p>
              </div>
            </div>
          </div>
          </div>
        </section>

        <section className="mt-20 sm:mt-24 lg:pl-28">
          <div className="w-full lg:max-w-[calc((100%-2.5rem)*11/21+2.5rem+26rem-20px)]">
            <hr className="border-t border-gray-100" />
            <div className="pt-6 space-y-6">
              <p className="text-xs uppercase tracking-[0.4em] text-gray-400">
                Engineering Foundations
              </p>
              <div className="grid gap-8 lg:grid-cols-2">
                <div className="space-y-3 text-sm leading-[1.5rem] text-gray-500">
                  <p className="font-semibold text-gray-700">Great Taste</p>
                  <p>
                    I believe that great taste in software is developed through building and refining
                    production code. Beyond individual features, understanding how software behaves
                    over time—how it scales, performs, and adapts—has helped me develop a stronger
                    intuition for what feels right. I’m not afraid of trying new approaches and
                    consistently strive toward building clear, reliable, and well-crafted systems.
                  </p>
                </div>
                <div className="space-y-3 text-sm leading-[1.5rem] text-gray-500">
                  <p className="font-semibold text-gray-700">
                    Technology with Intent
                  </p>
                  <p>
                    The future of software is compelling to me as systems increasingly anticipate
                    needs and integrate seamlessly into everyday workflows. As software becomes more
                    intelligent and interconnected, I believe its role is to support people without
                    adding friction or complexity. I’m curious about how we can build technology that
                    is purposeful, dependable, and feels natural to use rather than demanding
                    attention.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-32 sm:mt-40 lg:pl-28">
          <div className="w-full lg:max-w-[calc((100%-2.5rem)*11/21+2.5rem+26rem-20px)]">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-start">
              <div className="space-y-6">
                <p className="relative text-xs uppercase tracking-[0.4em] text-gray-400 sm:translate-y-15">
                  Things I love to do
                </p>
                <div className="mt-20 space-y-1">
                  <p className="text-2xl font-medium tracking-tight text-gray-900 sm:text-3xl lg:text-2xl xl:text-3xl">
                    Traveling to new cities
                  </p>
                  <p className="text-2xl font-medium tracking-tight text-gray-900 sm:text-3xl lg:text-2xl xl:text-3xl">
                    Designing and sketching
                  </p>
                  <p className="text-2xl font-medium tracking-tight text-gray-900 sm:text-3xl lg:text-2xl xl:text-3xl">
                    Formula 1 Weekends
                  </p>
                </div>
              </div>

              <div className="relative flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between lg:gap-4">
                <div
                  className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-gray-100 shadow-[0_22px_30px_-24px_rgba(15,23,42,0.25)] sm:aspect-[3/4] sm:w-65 sm:h-105 sm:-translate-y-15"
                >
                  <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("/about/Donald Duck Drawing.jpg")'}} />
                  <div className="absolute inset-0 bg-gradient-to-tl from-white/35 via-transparent to-white/25" />
                  <div className="absolute inset-0" style={{ boxShadow: 'inset 0 0 40px 14px rgba(255,255,255,0.35)' }} />
                </div>
                <div
                  className="relative h-72 w-full overflow-hidden rounded-sm bg-gray-100 shadow-[0_24px_32px_-26px_rgba(15,23,42,0.25)] sm:h-90 sm:w-65 sm:translate-y-[30px]"
                >
                  <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("/about/F1.jpg")' }} />
                  <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-white/30" />
                  <div className="absolute inset-0" style={{ boxShadow: 'inset 0 0 45px 16px rgba(255,255,255,0.35)' }} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </div>
  );
}
