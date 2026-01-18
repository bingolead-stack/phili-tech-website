"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Team() {
  return (
    <section className="py-20 bg-brand-navy">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Join Our <span className="gradient-text">Team</span>
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            We&apos;re always looking for talented individuals who share our passion for innovation and excellence. 
            Explore opportunities to grow your career with us.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center space-x-2 px-8 py-4 bg-brand-cyan text-brand-navy-dark font-semibold rounded-lg hover:bg-brand-cyan-light transition-all duration-300 transform hover:scale-105"
          >
            <span>View Open Positions</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
