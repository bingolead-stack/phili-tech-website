"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Partner } from "@/types";

import { useState } from "react";

const partners: Partner[] = [
  {
    title: "TD SYNNEX",
    description: "TD SYNNEX brings together the most well-known names in IT and emerging technology innovators supported by 23,000 co-workers around the world.",
    image: "/partner_1.jpg",
    url: "https://www.tdsynnex.com/na/us/"
  },
  {
    title: "VENMO",
    description: "Venmo is a fast, secure, and social payment platform that makes sending money, splitting expenses, and shopping easier for millions of users worldwide.",
    image: "/venmo.png",
    url: "https://venmo.com/"
  },
  {
    title: "GLOBAL PAYMENT",
    description: "Global Payments is a global payment technology leader, providing secure, innovative, and seamless payment solutions that help businesses connect with customers and grow worldwide.",
    image: "/GlobalPayments.jpg",
    url: "https://www.globalpayments.com/"
  },
];
export default function Partner() {
  return (
    <section className="py-20 gradient-bg relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-cyan/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-cyan/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Empowering <span className="gradient-text"> Technology </span> Partners
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            {"Success isn't a solo journey. We plug into the pulse of modern industry to help you manage the momentum of change, make fearless decisions, and unlock new dimensions of value."}
          </p>
          {/* <Link
            href="/contact"
            className="group inline-flex items-center space-x-2 px-8 py-4 bg-brand-cyan text-brand-navy-dark font-semibold rounded-lg hover:bg-brand-cyan-light transition-all duration-300 transform hover:scale-105"
          >
            <span>Get in Touch</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link> */}
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => {
                
            return (
                    <motion.div
                    key={partner.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group relative p-8 rounded-xl bg-brand-navy-light/50 border border-brand-navy-light hover:border-brand-cyan/50 transition-all duration-300 hover:transform hover:scale-105"
                    >
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative z-10">
                        <div className="inline-flex items-center justify-center">
                        <>
                                <img
                                    src={partner.image}
                                    alt={`${partner.title} - ${partner.description}`}
                                    className={`w-full h-full object-cover`}
                                />
                        </>
                        
                        </div>
                        
                        <Link href={`${partner.url}`} className="space-x-2" target="_blank">
                        <><h3 className="text-xl font-semibold mb-3 text-white group-hover:text-brand-cyan transition-colors">
                                {partner.title}
                                </h3></>
                                
                                <p className="text-gray-400 leading-relaxed">{partner.description}</p>
                                
                        </Link>
                                
                    </div>
                    </motion.div>
                
            );
            })}
        </div>
      </div>
    </section>
  );
}
