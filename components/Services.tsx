"use client";

import { motion } from "framer-motion";
import { Cloud, Code, Database, Shield, Zap, Globe, Brain, type LucideIcon } from "lucide-react";
import type { Service } from "@/types";

const services: Service[] = [
  {
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and migration services to modernize your business operations.",
    icon: "Cloud",
  },
  {
    title: "Custom Development",
    description: "Tailored software solutions built to meet your unique business requirements and goals.",
    icon: "Code",
  },
  {
    title: "Data Analytics",
    description: "Transform raw data into actionable insights with advanced analytics and visualization tools.",
    icon: "Database",
  },
  {
    title: "Security Services",
    description: "Comprehensive cybersecurity solutions to protect your digital assets and sensitive information.",
    icon: "Shield",
  },
  {
    title: "Digital Transformation",
    description: "End-to-end digital transformation strategies to accelerate your business growth.",
    icon: "Zap",
  },
  {
    title: "Enterprise Integration",
    description: "Seamless integration of systems and platforms to streamline your business processes.",
    icon: "Globe",
  },
  {
    title: "AI & Emerging Technologies",
    description: "Exploring and implementing cutting-edge AI agents and emerging technologies to unlock new possibilities for your business.",
    icon: "Brain",
  },
];

const iconMap: Record<string, LucideIcon> = {
  Cloud,
  Code,
  Database,
  Shield,
  Zap,
  Globe,
  Brain,
};

export default function Services() {
  return (
    <section className="py-20 bg-brand-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Comprehensive technology solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative p-8 rounded-xl bg-brand-navy-light/50 border border-brand-navy-light hover:border-brand-cyan/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-brand-cyan to-brand-cyan-dark mb-6 group-hover:scale-110 transition-transform duration-300">
                    {Icon && <Icon size={32} className="text-brand-navy-dark" />}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-brand-cyan transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
