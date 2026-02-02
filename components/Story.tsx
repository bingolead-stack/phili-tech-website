"use client";

import { motion } from "framer-motion";

export default function Story() {
  return (
    <section className="py-20 bg-brand-navy">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="prose prose-invert max-w-none"
        >
          <h2 className="text-4xl font-bold mb-8 text-center">
            Our <span className="gradient-text">Story</span>
          </h2>
          <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
            <p>
              Founded with a vision to bridge the gap between cutting-edge technology and business excellence, 
              Infralyft LLC has been at the forefront of digital innovation for over a decade. We started as a 
              small team of passionate technologists who believed that every business, regardless of size, 
              deserves access to world-class technology solutions.
            </p>
            <p>
              Today, we&apos;ve grown into a trusted partner for hundreds of organizations worldwide, helping them 
              navigate the complexities of digital transformation. Our commitment to excellence, combined with 
              our deep technical expertise, has enabled us to deliver solutions that not only meet but exceed 
              our clients&apos; expectations.
            </p>
            <p>
              What sets us apart is our unwavering dedication to understanding our clients&apos; unique challenges 
              and crafting tailored solutions that drive real business value. We don&apos;t just implement technology—we 
              transform businesses, empower teams, and create lasting impact.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
