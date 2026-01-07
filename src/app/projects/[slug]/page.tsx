"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { use } from "react";
import { motion, useReducedMotion } from "framer-motion";

import Reveal from "../../../components/motion/Reveal";
import Section from "../../../components/ui/Section";

const projects = [
  {
    title: "BetterCampus",
    slug: "bettercampus",
    description: "A comprehensive platform for managing tasks and assignments, designed to improve student productivity.",
    overview:
      "BetterCampus is a full-stack application built to streamline academic task management for students. The platform provides intuitive interfaces for tracking assignments, deadlines, and course materials, helping millions of users stay organized throughout their academic journey.",
    approach:
      "Built with a modern React frontend and robust backend infrastructure, the system emphasizes real-time synchronization and offline-first capabilities. The architecture prioritizes scalability to handle high-traffic periods like exam seasons.",
    challenges:
      "Key challenges included optimizing database queries for complex scheduling operations, implementing reliable push notifications across platforms, and ensuring data consistency during concurrent updates from multiple devices.",
  },
  {
    title: "iVue",
    slug: "ivue",
    description: "A remote drone interface enabling real-time control and monitoring of drone operations.",
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
  const shouldReduceMotion = useReducedMotion();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="mx-auto w-full max-w-4xl space-y-12">
      <Reveal delay={0.02}>
        <motion.header
          layoutId={`project-card-${project.slug}`}
          className="space-y-3 rounded-lg bg-gray-100/50 p-6"
        >
          <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
            {project.title}
          </h1>
          <p className="text-base text-gray-500">{project.description}</p>
        </motion.header>
      </Reveal>

      <div className="space-y-10">
        <Reveal delay={0.04}>
          <Section title="Overview">
            <p className="text-sm text-gray-500">{project.overview}</p>
          </Section>
        </Reveal>
        <Reveal delay={0.06}>
          <Section title="Technical Approach">
            <p className="text-sm text-gray-500">{project.approach}</p>
          </Section>
        </Reveal>
        <Reveal delay={0.08}>
          <Section title="Challenges">
            <p className="text-sm text-gray-500">{project.challenges}</p>
          </Section>
        </Reveal>
      </div>
    </div>
  );
}
