import { Project } from "./types";

export const bettercampus: Project = {
  title: "BetterCampus",
  slug: "bettercampus",
  description:
    "A Canvas LMS browser extension that improves the student experience by making assignments, grades, and themes easier to manage and customize.",
  category: "Previous Work",
  overview:
    "BetterCampus is a Chrome extension built to reduce friction in everyday Canvas usage for students. It enhances the platform by introducing a more flexible task and assignment system alongside customizable themes. The goal was to make Canvas feel less rigid and more aligned with how students actually plan and organize their work. The extension runs seamlessly on top of Canvas without disrupting existing workflows.",
  approach:
    "The extension was built using React and TypeScript, with a focus on modular components that could be reused across different Canvas pages. I worked heavily on integrating assignments and tasks by parsing Canvas data and mapping it into a consistent internal structure. Theme support was implemented by dynamically applying style overrides while preserving Canvas's base layout. Emphasis was placed on performance and maintainability since the extension runs continuously during Canvas sessions.",
  challenges: [
    {
      icon: "🧩",
      title: "Canvas DOM Complexity",
      text: "Canvas pages vary heavily by context, so I had to rely on stable DOM patterns to safely inject and maintain custom UI components.",
    },
    {
      icon: "🎯",
      title: "Assignment and Task Consistency",
      text: "Keeping tasks and assignments in sync required normalizing Canvas data to avoid duplication and state mismatches.",
    },
    {
      icon: "🎨",
      title: "Theming Without Breaking UX",
      text: "Themes were implemented using scoped style overrides to preserve readability and avoid disrupting Canvas's core layout.",
    },
  ],
  metrics: [
    { value: "100+", label: "Flights" },
    { value: "98%", label: "Uptime" },
    { value: "50GB", label: "Data uploaded" },
    { value: "15+", label: "Partners" },
  ],
  media: {
    hero: "/projects/bettercampus/BC-hero.png",
    feat1: "/projects/bettercampus/BC-feat1.png",
    feat2: "/projects/bettercampus/BC-feat2.png",
    wide: "/projects/bettercampus/BC-wide.png",
    final: "/projects/bettercampus/BC-final.jpg",
  },
  imageConfig: {
    hero: {
      aspectRatio: "aspect-video",
      objectFit: "cover",
    },
    features: {
      aspectRatio: "aspect-[4/3]",
      objectFit: "cover",
      cols: 2,
    },
    wide: {
      aspectRatio: "aspect-[16/9]",
      objectFit: "cover",
    },
    final: {
      aspectRatio: "aspect-video",
      objectFit: "cover",
    },
  },
};

export const ivue: Project = {
  title: "iVue",
  slug: "ivue",
  description:
    "A drone operations platform combining live video, real-time telemetry, and a 3D globe for mission planning and control.",
  category: "Previous Work",
  overview:
    "iVue provides operators with a unified interface to control drones, stream live video, and visualize position and telemetry on a global 3D map. It supports mission planning, payload integration, and both education and commercial inspection workflows. Worlds iVue utilizes a Cesium-based globe for geospatial context while iVue RoboControl supplies the telemetry, command, and UI elements for autonomous drone operation.",
  approach:
    "The platform uses low-latency streaming WebRTC for live camera feeds and WebSocket channels for telemetry and command/control. We used a CesiumJS-powered 3D globe to provide accurate geospatial rendering and mission overlays. The architecture is modular to support Develop Air hardware, diverse payloads, and mission automation, with emphasis on resilient connections and failsafe behavior.",
  challenges: [
    {
      icon: "🧭",
      title: "Geospatial Integration",
      text: "Integrating a Cesium-based 3D globe with live telemetry to provide accurate, synchronized geospatial context.",
    },
    {
      icon: "🕹️",
      title: "Operator Workflows",
      text: "Designing responsive, reusable UI controls to streamline operator tasks and maintain cross-system compatibility.",
    },
    {
      icon: "⚡",
      title: "Latency & Reliability",
      text: "Reducing streaming and command latency while implementing resilient fail-safes for unreliable network conditions.",
    },
  ],
  metrics: [
    { value: "100+", label: "Flights" },
    { value: "98%", label: "Uptime" },
    { value: "50GB", label: "Data uploaded" },
    { value: "15+", label: "Partners" },
  ],
  media: {
    hero: "/projects/ivue/iVue-hero.png",
    feat1: "/projects/ivue/iVue-feat1.png",
    feat2: "/projects/ivue/iVue-feat2.jpg",
    wide: "/projects/ivue/iVue-wide.png",
    final: "/projects/ivue/iVue-final.jpg",
  },
  imageConfig: {
    hero: {
      aspectRatio: "aspect-[16/9]",
      objectFit: "contain",
      bgColor: "bg-black",
    },
    features: {
      aspectRatio: "aspect-[4/3]",
      objectFit: "cover",
      cols: 2,
    },
    wide: {
      aspectRatio: "aspect-[16/9]",
      objectFit: "cover",
    },
    final: {
      aspectRatio: "aspect-video",
      objectFit: "cover",
    },
  },
};

export const auxai: Project = {
  title: "AuxAI",
  slug: "auxai",
  description: "An AI-powered assistant that enhances productivity through intelligent automation.",
  category: "Projects",
  overview:
    "AuxAI is an intelligent assistant that learns user workflows and automates repetitive tasks. The system uses natural language processing to understand commands and machine learning to predict user needs.",
  approach:
    "The project combines transformer-based language models with custom fine-tuning for domain-specific tasks. A modular plugin architecture allows integration with various productivity tools and services.",
  challenges: [
    {
      icon: "🔧",
      title: "Architecture",
      text: "Designing a solid, maintainable architecture that supports future features and extensions.",
    },
    {
      icon: "⚙️",
      title: "Integration",
      text: "Working with external platforms and APIs while keeping the UI consistent and stable.",
    },
    {
      icon: "📈",
      title: "Performance",
      text: "Optimizing for speed and responsiveness across different devices and network conditions.",
    },
  ],
  metrics: [
    { value: "100+", label: "Flights" },
    { value: "98%", label: "Uptime" },
    { value: "50GB", label: "Data uploaded" },
    { value: "15+", label: "Partners" },
  ],
  media: {
    hero: "/projects/auxai/AuxAI-hero.png",
    feat1: "/projects/auxai/AuxAI-feat1.png",
    feat2: "/projects/auxai/AuxAI-feat2.jpeg",
    wide: "/projects/auxai/AuxAI-wide.png",
    final: "/projects/auxai/AuxAI-final.jpeg",
  },
  imageConfig: {
    hero: {
      aspectRatio: "aspect-video",
      objectFit: "cover",
    },
    features: {
      aspectRatio: "aspect-[4/3]",
      objectFit: "cover",
      cols: 2,
    },
    wide: {
      aspectRatio: "aspect-[16/9]",
      objectFit: "cover",
    },
    final: {
      aspectRatio: "aspect-video",
      objectFit: "cover",
    },
  },
};

export const notivet: Project = {
  title: "NotiVet",
  slug: "notivet",
  description: "A web app designed to connect veterinary healthcare professionals to pharmaceutical companies via drug updates and targeted notifications.",
  category: "Projects",
  overview:
    "NotiVet helps veterinary clinics stay up to date with emerging treatments by delivering curated, specialty-specific drug updates and searchable medication data. Veterinarians can subscribe to the topics that matter to their practice, save important drugs for quick reference, and message manufacturers directly. Pharmaceutical companies can create targeted notification campaigns to spread the word and track engagement with an analytics dashboard. Our AI assistant, Scooby, provides on-demand, source-backed context to support clinical decisions.",
  approach:
    "We prioritized a clean, mobile-first experience with clear workflows for subscribing, searching, and managing notifications. The frontend is built with Next.js and Tailwind for speed and accessibility, while the backend relies on Prisma + PostgreSQL for reliable, auditable data storage. Notifications are delivered through an event-driven pipeline and instrumented for engagement analytics so manufacturers can measure reach and effectiveness. Scooby integrates grounded LLM responses with our vetted dataset to provide contextual, source-linked answers.",
  challenges: [
    {
      icon: "🔎",
      title: "Reliable Drug Data",
      text: "Finding an authoritative, machine-readable dataset for FDA-approved animal drugs was difficult. We had to validate sources and import a vetted CSV to ensure clinical accuracy.",
    },
    {
      icon: "🤖",
      title: "Trustworthy AI Assistant",
      text: "Making Scooby helpful and safe required grounding answers in our database, fine-tuning for veterinary language, and linking every response to trusted sources and recommended drugs.",
    },
    {
      icon: "🔐",
      title: "Robust Data & Auth",
      text: "Designing a secure, flexible backend involved iterating on database choices and implementing strong authentication and data models; we settled on PostgreSQL for its reliability and tooling.",
    },
  ],
  metrics: [
    { value: "900+", label: "Vetted drugs" },
    { value: "1.2k+", label: "ScoobyAI answers" },
    { value: "48%", label: "Reduced search time" },
    { value: "9", label: "Species covered" },
  ],
  media: {
    hero: "/projects/notivet/NotiVet-feat2.png",
    feat1: "/projects/notivet/NotiVet-feat1.png",
    feat2: "/projects/notivet/NotiVet-hero.png",
    wide: "/projects/notivet/NotiVet-wide.png",
    final: "/projects/notivet/NotiVet-final.png",
  },
  imageConfig: {
    hero: {
      aspectRatio: "aspect-[6/5]",
      objectFit: "cover",
    },
    features: {
      aspectRatio: "aspect-[4/3]",
      objectFit: "cover",
      cols: 2,
    },
    wide: {
      aspectRatio: "aspect-[13/9]",
      objectFit: "cover",
    },
    final: {
      aspectRatio: "aspect-[12/9]",
      objectFit: "cover",
    },
  },
};

export const f1Predictor: Project = {
  title: "F1 Machine Learning Predictor",
  slug: "f1-predictor",
  description:
    "A machine learning model that predicts Formula 1 race outcomes using historical data and real-time analytics.",
  category: "Projects",
  overview:
    "This project applies machine learning techniques to predict Formula 1 race results, qualifying positions, and championship outcomes. The model analyzes historical race data, weather conditions, track characteristics, and driver performance metrics.",
  approach:
    "The prediction pipeline combines gradient boosting models with neural networks to capture both tabular features and temporal patterns. Real-time data ingestion during race weekends enables live prediction updates.",
  challenges: [
    {
      icon: "🔧",
      title: "Architecture",
      text: "Designing a solid, maintainable architecture that supports future features and extensions.",
    },
    {
      icon: "⚙️",
      title: "Integration",
      text: "Working with external platforms and APIs while keeping the UI consistent and stable.",
    },
    {
      icon: "📈",
      title: "Performance",
      text: "Optimizing for speed and responsiveness across different devices and network conditions.",
    },
  ],
  metrics: [
    { value: "100+", label: "Flights" },
    { value: "98%", label: "Uptime" },
    { value: "50GB", label: "Data uploaded" },
    { value: "15+", label: "Partners" },
  ],
  media: {
    hero: "/projects/f1-predictor/hero.png",
    feat1: "/projects/f1-predictor/feat1.png",
    feat2: "/projects/f1-predictor/feat2.png",
    wide: "/projects/f1-predictor/wide.png",
    final: "/projects/f1-predictor/final.png",
  },
};
