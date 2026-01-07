"use client";

import Reveal from "../../components/motion/Reveal";
import PageHeader from "../../components/ui/PageHeader";

interface SkillItem {
  name: string;
  icon?: string;
  color?: string;
}

interface SkillCategory {
  title: string;
  description?: string;
  items: SkillItem[];
  layout?: "grid" | "flow";
}

const skillsData: SkillCategory[] = [
  {
    title: "Languages",
    description: "Core programming languages and markup",
    items: [
      { name: "TypeScript", color: "from-blue-400 to-blue-600" },
      { name: "JavaScript", color: "from-yellow-300 to-yellow-500" },
      { name: "Python", color: "from-blue-300 to-blue-500" },
      { name: "Java", color: "from-orange-400 to-orange-600" },
      { name: "SQL", color: "from-emerald-400 to-emerald-600" },
      { name: "HTML5", color: "from-orange-300 to-orange-500" },
      { name: "CSS", color: "from-blue-300 to-blue-500" },
    ],
    layout: "flow",
  },
  {
    title: "Frameworks & Libraries",
    description: "Core development frameworks and libraries",
    items: [
      { name: "React.js", color: "from-cyan-400 to-cyan-600" },
      { name: "Next.js", color: "from-gray-800 to-black" },
      { name: "Vue.js", color: "from-emerald-400 to-emerald-600" },
      { name: "Node.js", color: "from-emerald-500 to-emerald-700" },
      { name: "React Native", color: "from-cyan-400 to-cyan-600" },
      { name: "PostgreSQL", color: "from-blue-400 to-blue-600" },
    ],
    layout: "grid",
  },
  {
    title: "Tools & Platforms",
    description: "Development tools, cloud platforms, and services",
    items: [
      { name: "AWS", color: "from-orange-400 to-orange-600" },
      { name: "Firebase", color: "from-yellow-400 to-orange-500" },
      { name: "Prisma", color: "from-purple-400 to-purple-600" },
      { name: "Docker", color: "from-blue-400 to-blue-600" },
      { name: "Supabase", color: "from-emerald-400 to-emerald-600" },
      { name: "Git", color: "from-orange-500 to-red-600" },
      { name: "PowerBI", color: "from-yellow-500 to-orange-600" },
      { name: "Jira", color: "from-blue-500 to-blue-700" },
    ],
  },
  {
    title: "Certifications & Recognition",
    description: "Professional certifications and academic honors",
    items: [
      {
        name: "CompTIA Security+",
        color: "from-red-400 to-red-600",
      },
      {
        name: "GIAC Foundations Cybersecurity (GFACT)",
        color: "from-purple-500 to-purple-700",
      },
      {
        name: "National Cyber Scholar with Honors",
        color: "from-indigo-400 to-indigo-600",
      },
      {
        name: "Certiport IT Specialist - Software Development",
        color: "from-cyan-400 to-cyan-600",
      },
      {
        name: "Microsoft Office Suite (Word, Excel, PowerPoint) Certified",
        color: "from-blue-500 to-blue-700",
      },
      {
        name: "1st Place Coding & Programming at FBLA State (Top 1%)",
        color: "from-yellow-400 to-yellow-600",
      },
      {
        name: "3rd Place in the National Cyber League Fall 2023 Challenge (Top 0.5%)",
        color: "from-gray-400 to-gray-600",
      },
      {
        name: "2nd Place AFCEA Augusta International Military CTF",
        color: "from-red-600 to-red-800",
      },
      {
        name: "3rd Place International University of California, Santa Barbara AI iCTF",
        color: "from-green-400 to-green-600",
      },
    ],
  },
];

const SkillBadge = ({
  item,
  index,
}: {
  item: SkillItem;
  index: number;
}) => (
  <Reveal delay={0.02 + index * 0.02}>
    <div
      className="group relative inline-flex items-center gap-3 px-4 py-2.5 rounded-full bg-gradient-to-r from-gray-50 to-gray-100/80 border border-gray-200/60 hover:border-gray-300 transition-all duration-300 hover:shadow-md hover:scale-105 cursor-default"
    >
      {item.color && (
        <div
          className={`h-2 w-2 rounded-full bg-gradient-to-r ${item.color} shadow-sm group-hover:shadow-md transition-shadow`}
        />
      )}
      <span className="text-sm font-medium text-gray-700">{item.name}</span>
    </div>
  </Reveal>
);

const SkillCard = ({
  item,
  index,
}: {
  item: SkillItem;
  index: number;
}) => (
  <Reveal delay={0.02 + index * 0.02}>
    <div className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-gray-50/80 via-gray-50 to-gray-100/60 border border-gray-200/50 p-6 hover:border-gray-300/80 transition-all duration-300 hover:shadow-md hover:scale-105 h-24 flex flex-col justify-center">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${item.color || "from-gray-200 to-gray-300"} opacity-5`}
        />
      </div>
      <div className="relative space-y-2">
        {item.color && (
          <div
            className={`inline-block h-3 w-3 rounded-full bg-gradient-to-r ${item.color} shadow-sm`}
          />
        )}
        <p className="text-sm font-semibold text-gray-800">{item.name}</p>
      </div>
    </div>
  </Reveal>
);

export default function SkillsPage() {
  return (
    <div className="mx-auto w-full max-w-5xl space-y-10">
      {/* Header */}
      <Reveal delay={0.02}>
        <PageHeader
          title="Technical Skills"
          subtitle="A comprehensive overview of my capabilities, expertise, and professional development."
        />
      </Reveal>

      {/* Skills Sections */}
      {skillsData.map((category, categoryIndex) => (
        <Reveal key={category.title} delay={0.04 + categoryIndex * 0.06}>
          <section className="space-y-6">
            {/* Category Header */}
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-gray-900">
                {category.title}
              </h2>
              {category.description && (
                <p className="text-sm text-gray-500">{category.description}</p>
              )}
            </div>

            {/* Skills Grid/Flow */}
            {category.layout === "flow" ? (
              <div className="flex flex-wrap gap-3">
                {category.items.map((item, index) => (
                  <SkillBadge key={item.name} item={item} index={index} />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.items.map((item, index) => (
                  <SkillCard key={item.name} item={item} index={index} />
                ))}
              </div>
            )}
          </section>
        </Reveal>
      ))}

      {/* Summary Section */}
      <Reveal delay={0.24}>
        <section className="mt-8 space-y-3">
          <h3 className="text-lg font-semibold text-gray-900">
            Committed to Continous Learning
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            I'm passionate about expanding my technical skillset and staying current with emerging technologies. Whether it's exploring new frameworks, cloud platforms, or cybersecurity practices, I approach each opportunity to learn as a chance to build better, more scalable solutions.
          </p>
        </section>
      </Reveal>
    </div>
  );
}
