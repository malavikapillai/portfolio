"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export default function Internships() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const internships = [
    {
      company: "Wissen Technology",
      role: "Software Engineering Intern",
      location: "Bangalore, India",
      period: "March 2024 - Present",
    },
  ];

  return (
    <section id="internships" className="min-h-screen flex items-center py-20 relative overflow-hidden bg-[#0a0a0f]" ref={ref}>
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-4 text-center">
            Work <span className="text-[#C75F71]">Experience</span>
          </h2>
          <p className="text-center text-gray-400 mb-16 text-lg">Internships & Professional Journey</p>

          <div className="space-y-8">
            {internships.map((internship, index) => (
              <motion.div
                key={internship.company}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="group relative p-8 glossy-card rounded-2xl transition-all duration-300 border border-[#C75F71]/20 hover:border-[#C75F71]/50"
              >
                <div className="absolute inset-0 bg-[#C75F71]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                        className="p-4 bg-[#C75F71]/20 rounded-xl border border-[#C75F71]/30"
                      >
                        <Briefcase size={32} className="text-[#C75F71]" />
                      </motion.div>
                      <div>
                        <h3 className="text-2xl font-display font-bold mb-2 text-white transition-colors">
                          {internship.role}
                        </h3>
                        <p className="text-xl text-[#C75F71] font-semibold mb-1">{internship.company}</p>
                        <div className="flex flex-wrap gap-3 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <MapPin size={14} />
                            {internship.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar size={14} />
                            {internship.period}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
