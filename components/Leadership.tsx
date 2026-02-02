"use client";

import { motion } from "framer-motion";
import { Linkedin, Twitter } from "lucide-react";
import type { Leader } from "@/types";

const leaders: Leader[] = [
  {
    name: "Sarah Johnson",
    role: "Chief Executive Officer",
    bio: "Visionary leader with 15+ years of experience in technology and business strategy.",
    linkedin: "https://linkedin.com/in/sarahjohnson",
    twitter: "https://twitter.com/sarahjohnson",
  },
  {
    name: "Michael Chen",
    role: "Chief Technology Officer",
    bio: "Tech innovator specializing in cloud architecture and enterprise solutions.",
    linkedin: "https://linkedin.com/in/michaelchen",
    twitter: "https://twitter.com/michaelchen",
  },
  {
    name: "Emily Rodriguez",
    role: "Chief Operating Officer",
    bio: "Operations expert focused on scaling businesses and optimizing processes.",
    linkedin: "https://linkedin.com/in/emilyrodriguez",
  },
];

export default function Leadership() {
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
            Our <span className="gradient-text">Leadership</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Meet the visionary leaders driving innovation at Infralyft LLC
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 rounded-xl bg-gradient-to-br from-brand-navy-light/50 to-brand-navy-dark/50 border border-brand-navy-light hover:border-brand-cyan/50 transition-all duration-300"
            >
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-brand-cyan to-brand-cyan-dark mx-auto mb-6 flex items-center justify-center text-3xl font-bold text-brand-navy-dark">
                {leader.name.split(' ').map(n => n[0]).join('')}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center text-white">{leader.name}</h3>
              <p className="text-brand-cyan text-center mb-4 font-medium">{leader.role}</p>
              <p className="text-gray-400 text-center mb-6 text-sm leading-relaxed">{leader.bio}</p>
              <div className="flex items-center justify-center space-x-4">
                {leader.linkedin && (
                  <a
                    href={leader.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-brand-cyan transition-colors"
                    aria-label={`${leader.name} LinkedIn`}
                  >
                    <Linkedin size={20} />
                  </a>
                )}
                {leader.twitter && (
                  <a
                    href={leader.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-brand-cyan transition-colors"
                    aria-label={`${leader.name} Twitter`}
                  >
                    <Twitter size={20} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
