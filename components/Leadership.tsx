"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Linkedin, Twitter } from "lucide-react";
import type { Leader } from "@/types";

const leaders: Leader[] = [
  {
    name: "Ian Brown",
    role: "Chief Executive Officer",
    bio: "Visionary leader with 15+ years of experience in technology and business strategy.",
    image: "/team/ian-brown.png",
  },
  {
    name: "Denise Marie Montano",
    role: "Business Development Manager",
    bio: "Drives business expansion by building strategic partnerships and helping clients achieve their digital.",
    image: "/team/denise_marie.png",
  },
  {
    name: "Akash Nai",
    role: "Senior Software Engineer",
    bio: "Experienced software engineer specializing in designing and developing scalable web applications, cloud-based solutions, and modern software architectures",
    image: "/team/Akash_Nai.jpg",
  },
  {
    name: "Ryan Manarang Maglaqui",
    role: "Strategic Partner",
    bio: "Strategic partner supporting growth and innovation in technology ventures.",
    image: "/team/ryan-maglaqui.png",
  },
  {
    name: "Joseph Wadley",
    role: "Operating Manager",
    bio: "Operations expert focused on scaling businesses and optimizing processes for maximum efficiency.",
    image: "/team/joseph-wadley.png",
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((leader, index) => {
            const LeaderAvatar = ({ leader }: { leader: Leader }) => {
              const [imageError, setImageError] = useState(false);
              const [imageLoaded, setImageLoaded] = useState(false);
              const initials = leader.name.split(' ').map(n => n[0]).join('');

              if (!leader.image || imageError) {
                return (
                  <span className="text-3xl font-bold text-brand-navy-dark">
                    {initials}
                  </span>
                );
              }

              return (
                <>
                  {!imageLoaded && (
                    <span className="text-3xl font-bold text-brand-navy-dark">
                      {initials}
                    </span>
                  )}
                  <img
                    src={leader.image}
                    alt={`${leader.name} - ${leader.role}`}
                    className={`w-full h-full object-cover ${imageLoaded ? 'block' : 'hidden'}`}
                    onLoad={() => setImageLoaded(true)}
                    onError={() => {
                      setImageError(true);
                      setImageLoaded(false);
                    }}
                  />
                </>
              );
            };

            return (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-8 rounded-xl bg-gradient-to-br from-brand-navy-light/50 to-brand-navy-dark/50 border border-brand-navy-light hover:border-brand-cyan/50 transition-all duration-300"
              >
                <div className="w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center overflow-hidden bg-gradient-to-br from-brand-cyan to-brand-cyan-dark">
                  <LeaderAvatar leader={leader} />
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
