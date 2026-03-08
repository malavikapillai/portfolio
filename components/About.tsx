"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="min-h-screen flex items-center py-20 bg-[#0a0a0f]" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-white">
            About <span className="text-[#C75F71]">Me</span>
          </h2>
          <p className="text-center text-gray-400 mb-16">Get to know me better</p>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="relative group"
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-full h-96 rounded-2xl relative overflow-hidden shadow-2xl border border-[#C75F71]/30"
              >
                <img 
                  src="/about.jpg" 
                  alt="About Me" 
                  className="w-full h-full object-cover"
                />
                {/* Optional overlay for effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#C75F71]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate 3rd-year BTech student specializing in Full Stack Web Development
                with a strong interest in DevOps practices. I love building scalable, efficient
                applications and automating workflows.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                My journey in tech is driven by curiosity and the desire to create impactful
                solutions. I'm constantly learning new technologies and best practices to stay
                ahead in this ever-evolving field.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                When I'm not coding, you'll find me exploring new frameworks, contributing to
                open-source projects, or vibing with the latest tech trends.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-6">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                  className="p-6 glossy-card rounded-2xl border border-[#C75F71]/20 hover:border-[#C75F71]/40 transition-all group"
                >
                  <h3 className="text-4xl font-display font-bold text-[#C75F71] mb-2">
                    15+
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">Languages Completed</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.7 }}
                  whileHover={{ scale: 1.05 }}
                  className="p-6 glossy-card rounded-2xl border border-[#C75F71]/20 hover:border-[#C75F71]/40 transition-all group"
                >
                  <h3 className="text-4xl font-display font-bold text-[#C75F71] mb-2">
                    3+
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">Years Learning</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
