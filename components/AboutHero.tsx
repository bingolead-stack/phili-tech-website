"use client";

import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden gradient-bg pt-20">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-10 w-72 h-72 bg-brand-cyan/20 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6"
        >
          About <span className="gradient-text">Us</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto"
        >
          Pioneering the future of technology, one innovation at a time.
        </motion.p>
      </div>
    </section>
  );
}
