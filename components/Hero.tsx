"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, TrendingUp, Users, Award } from "lucide-react";

export default function Hero() {
  const stats = [
    { value: "500+", label: "Clients Served", icon: Users },
    { value: "10+", label: "Years Experience", icon: TrendingUp },
    { value: "99%", label: "Satisfaction Rate", icon: Award },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-bg pt-20">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-brand-cyan/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-brand-cyan/10 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, -60, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 mb-8"
          >
            <span className="text-brand-cyan text-sm font-medium">Innovate Beyond</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-balance"
          >
            Empowering Businesses with{" "}
            <span className="gradient-text">Cutting-Edge</span> Innovation
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto text-balance"
          >
            Transform your business with our expert technology solutions and strategic consulting services.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Link
              href="/contact"
              className="group px-8 py-4 bg-brand-cyan text-brand-navy-dark font-semibold rounded-lg hover:bg-brand-cyan-light transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
            >
              <span>Get Started</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 border-2 border-brand-cyan text-brand-cyan font-semibold rounded-lg hover:bg-brand-cyan/10 transition-all duration-300"
            >
              Learn More
            </Link>
          </motion.div>

          {/* Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-cyan/10 mb-4">
                    <Icon className="text-brand-cyan" size={24} />
                  </div>
                  <div className="text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
