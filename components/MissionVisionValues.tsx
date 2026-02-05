"use client";

import { motion } from "framer-motion";
import { Target, Eye, Heart } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Mission",
    description: "To empower businesses with innovative technology solutions that drive growth, efficiency, and competitive advantage in the digital age.",
  },
  {
    icon: Eye,
    title: "Vision",
    description: "To be the leading technology partner that transforms how businesses operate, innovate, and succeed in an ever-evolving digital landscape.",
  },
  {
    icon: Heart,
    title: "Values",
    description: "Excellence, integrity, innovation, and client-centricity guide everything we do. We're committed to delivering exceptional value, building lasting partnerships, and actively exploring emerging technologies like AI agents to stay at the forefront of innovation.",
  },
];

export default function MissionVisionValues() {
  return (
    <section className="py-20 bg-brand-navy-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Foundation</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            The principles that guide our work and define who we are
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-8 rounded-xl bg-gradient-to-br from-brand-navy-light/50 to-brand-navy-dark/50 border border-brand-navy-light hover:border-brand-cyan/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-brand-cyan to-brand-cyan-dark mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={32} className="text-brand-navy-dark" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-brand-cyan transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
