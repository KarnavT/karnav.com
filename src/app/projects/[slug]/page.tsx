"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { use } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import Reveal from "../../../components/motion/Reveal";

const projects = [
  {
    title: "BetterCampus",
    slug: "bettercampus",
    description: "Feature packed extension for Canvas. BetterCampus makes Canvas finally feel like it was built for students. From dark mode and themes to GPA tracking and smarter to-dos — we got you covered.",
    category: "Previous Work",
    overview:
      "BetterCampus is a browser extension with over 1,500,000 users that transforms the Canvas LMS experience for students. The platform provides fully customizable dark mode with dozens of themes, custom dashboards with gradient cards and color palettes, smarter to-do lists with assignment previews, an integrated GPA calculator for college and high school, and comprehensive dashboard upgrades including notes, grades display, and sidebar cleanup. Built by students, for students, BetterCampus has earned a 4.9-star rating from over 7,700 reviews.",
    approach:
      "Built with a modern frontend architecture that integrates seamlessly with Canvas LMS, the extension uses content scripts and DOM manipulation to enhance the existing interface without breaking core functionality. The system emphasizes performance optimization to ensure the extension doesn't slow down Canvas, supports both Chrome and Firefox browsers, and maintains compatibility across Canvas updates. Features like theme scheduling, GPA calculation, and dashboard customization are implemented using efficient local storage and reactive UI updates.",
    challenges:
      "Key challenges included maintaining compatibility with Canvas LMS updates across different institutions, ensuring the extension performs well even on slower devices, implementing a theme engine that supports user-created themes while preventing CSS conflicts, building a robust GPA calculator that works with various grading systems, and managing state synchronization between multiple Canvas tabs. The team also had to carefully design features that enhance rather than interfere with Canvas's core functionality.",
  },
  {
    title: "iVue",
    slug: "ivue",
    description: "A remote drone interface enabling real-time control and monitoring of drone operations.",
    category: "Previous Work",
    overview:
      "iVue provides operators with a comprehensive interface for remote drone control, featuring live video streaming, telemetry visualization, and mission planning capabilities. The system enables safe and efficient drone operations from anywhere.",
    approach:
      "The interface leverages WebRTC for low-latency video streaming and WebSocket connections for real-time telemetry data. Custom visualization components display flight metrics, battery status, and environmental conditions in an intuitive dashboard.",
    challenges:
      "Managing network latency for responsive controls, implementing reliable failsafe mechanisms for connection drops, and optimizing video compression for varying bandwidth conditions were primary technical challenges.",
  },
  {
    title: "AuxAI",
    slug: "auxai",
    description: "An AI-powered assistant that enhances productivity through intelligent automation.",
    category: "Projects",
    overview:
      "AuxAI is an intelligent assistant that learns user workflows and automates repetitive tasks. The system uses natural language processing to understand commands and machine learning to predict user needs.",
    approach:
      "The project combines transformer-based language models with custom fine-tuning for domain-specific tasks. A modular plugin architecture allows integration with various productivity tools and services.",
    challenges:
      "Balancing model accuracy with response latency, handling ambiguous user inputs gracefully, and maintaining user privacy while enabling personalization were key considerations during development.",
  },
  {
    title: "NotiVet",
    slug: "notivet",
    description: "A notification and management system for veterinary practices and pet owners.",
    category: "Projects",
    overview:
      "NotiVet connects veterinary clinics with pet owners through a unified communication platform. The system handles appointment scheduling, medication reminders, and health record management.",
    approach:
      "A mobile-first design ensures accessibility for pet owners on the go, while the clinic dashboard provides comprehensive practice management tools. The backend uses event-driven architecture for reliable notification delivery.",
    challenges:
      "Designing notification systems that are helpful without being intrusive, ensuring HIPAA-like compliance for pet health records, and integrating with existing veterinary practice management software required careful consideration.",
  },
  {
    title: "F1 Machine Learning Predictor",
    slug: "f1-predictor",
    description: "A machine learning model that predicts Formula 1 race outcomes using historical data and real-time analytics.",
    category: "Projects",
    overview:
      "This project applies machine learning techniques to predict Formula 1 race results, qualifying positions, and championship outcomes. The model analyzes historical race data, weather conditions, track characteristics, and driver performance metrics.",
    approach:
      "The prediction pipeline combines gradient boosting models with neural networks to capture both tabular features and temporal patterns. Real-time data ingestion during race weekends enables live prediction updates.",
    challenges:
      "Handling the high dimensionality of F1 data, accounting for regulation changes between seasons, and modeling the inherent unpredictability of motorsport events required innovative feature engineering and ensemble techniques.",
  },
];

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = use(params);
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="mx-auto w-full max-w-6xl">
      {/* Category Header */}
      <Reveal delay={0}>
        <div className="mb-2">
          <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
            {project.category}
          </p>
        </div>
      </Reveal>

      {/* Hero Section */}
      <Reveal delay={0.1}>
        <div className="mb-8 mt-12 space-y-5">
          <h1 className="text-4xl font-medium tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
            {project.title}
          </h1>
          <p className="text-sm leading-relaxed text-gray-600 md:text-base">
            {project.description}
          </p>
        </div>
      </Reveal>

      {/* Divider */}
      <Reveal delay={0.15}>
        <div className="mb-4">
          <hr className="border-t border-gray-200" />
        </div>
      </Reveal>

      {/* Hero Image Placeholder */}
      <Reveal delay={0.2}>
        <div className="mt-12 mb-12 overflow-hidden rounded-xl bg-gradient-to-br from-gray-100 to-gray-200">
          <div className="flex aspect-video items-center justify-center">
            <div className="text-center">
              <div className="mb-3 text-4xl">📸</div>
              <p className="text-xs font-medium text-gray-500">Hero Image</p>
              <p className="text-[10px] text-gray-400">Place your main project image here</p>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Overview Section */}
      <Reveal delay={0.3}>
        <div className="mb-20 grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-900">
              Overview
            </h2>
          </div>
          <div className="md:col-span-8">
            <p className="text-sm leading-relaxed text-gray-600 md:text-base">
              {project.overview}
            </p>
          </div>
        </div>
      </Reveal>

      {/* Feature Showcase 1 */}
      <Reveal delay={0.4}>
        <div className="mb-12">
          <div className="mb-16 grid gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-900">
                Technical Approach
              </h2>
            </div>
            <div className="md:col-span-8">
              <p className="text-sm leading-relaxed text-gray-600 md:text-base">
                {project.approach}
              </p>
            </div>
          </div>
          
          {/* Image Grid */}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="overflow-hidden rounded-xl bg-gradient-to-br from-blue-50 to-indigo-100">
              <div className="flex aspect-[4/3] items-center justify-center">
                <div className="text-center">
                  <div className="mb-2 text-4xl">🖼️</div>
                  <p className="text-xs font-medium text-gray-600">Feature Image 1</p>
                  <p className="text-[10px] text-gray-400">Add technical screenshot</p>
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-xl bg-gradient-to-br from-violet-50 to-purple-100">
              <div className="flex aspect-[4/3] items-center justify-center">
                <div className="text-center">
                  <div className="mb-2 text-4xl">🖼️</div>
                  <p className="text-xs font-medium text-gray-600">Feature Image 2</p>
                  <p className="text-[10px] text-gray-400">Add technical screenshot</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Full Width Media Section */}
      <Reveal delay={0.5}>
        <div className="mb-20">
          <div className="overflow-hidden rounded-xl bg-gradient-to-br from-emerald-50 to-teal-100">
            <div className="flex aspect-[21/9] items-center justify-center">
              <div className="text-center">
                <div className="mb-3 text-5xl">🎨</div>
                <p className="text-xs font-medium text-gray-600">Wide Feature Image</p>
                <p className="text-[10px] text-gray-400">Showcase your interface or workflow</p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Challenges & Solutions */}
      <Reveal delay={0.6}>
        <div>
          <div className="mb-12 grid gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-900">
                Challenges
              </h2>
            </div>
            <div className="md:col-span-8">
              <p className="text-sm leading-relaxed text-gray-600 md:text-base">
                {project.challenges}
              </p>
            </div>
          </div>

          {/* Challenge Cards */}
          <div className="mb-20 grid gap-8 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-100 transition-all duration-300 hover:shadow-lg hover:ring-gray-200"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-2xl transition-transform duration-300 group-hover:scale-110">
                  {i === 1 ? "⚡" : i === 2 ? "🎯" : "🚀"}
                </div>
                <h3 className="mb-3 text-lg font-semibold text-gray-900">
                  Challenge {i}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  Add specific challenge details and how you overcame them with innovative solutions.
                </p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Key Metrics or Features */}
      <Reveal delay={0.7}>
        <div className="mb-32">
          <h2 className="mb-12 text-center text-sm font-semibold uppercase tracking-wider text-gray-900">
            Impact
          </h2>
          <div className="grid gap-8 md:grid-cols-4">
            {[
              { value: "2M+", label: "Users" },
              { value: "99.9%", label: "Uptime" },
              { value: "50ms", label: "Response Time" },
              { value: "4.9★", label: "Rating" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="mb-2 text-5xl font-semibold tracking-tight text-gray-900">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Closing Image */}
      <Reveal delay={0.8}>
        <div className="mb-20">
          <div className="overflow-hidden rounded-xl bg-gradient-to-br from-amber-50 to-orange-100">
            <div className="flex aspect-video items-center justify-center">
              <div className="text-center">
                <div className="mb-3 text-4xl">✨</div>
                <p className="text-xs font-medium text-gray-600">Final Showcase Image</p>
                <p className="text-[10px] text-gray-400">Add a compelling closing visual</p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
