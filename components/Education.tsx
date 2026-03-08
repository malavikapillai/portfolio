"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Calendar, Award } from "lucide-react";

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const education = [
    {
      degree: "Bachelor of Technology (B.Tech)",
      field: "Computer Science & Engineering",
      institution: "Lovely Professional University",
      location: "Phagwara, Punjab",
      period: "2023 - 2027",
      grade: "CGPA: 8.22/10",
      achievements: [
        "Engineering Minor in Full Stack Development",
        "Open Minor in DevOps",
        "Trained in core CS subjects: DSA, CN, DBMS, OS",
      ],
    },
    {
      degree: "Higher Secondary (12th)",
      field: "Science (PCM)",
      institution: "Campion School",
      location: "Kochi, Kerala",
      period: "2021 - 2023",
      grade: "Percentage: 89%",
      achievements: [
        "Academic Excellence Award in Computer Science",
  "Ranked among top performers in Higher Secondary Board Exams",
      ],
    },
  ];

  return (
    <section id="education" className="min-h-screen flex items-center py-20 bg-[#0a0a0f]" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-white">
            My <span className="text-[#C75F71]">Education</span>
          </h2>
          <p className="text-center text-gray-400 mb-16">Academic Journey & Achievements</p>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="group relative p-8 glossy-card rounded-2xl transition-all duration-300 border border-[#C75F71]/20 hover:border-[#C75F71]/50"
              >
                <div className="absolute inset-0 bg-[#C75F71]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                    <div className="flex items-start gap-4">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                        className="p-4 bg-[#C75F71]/20 rounded-xl border border-[#C75F71]/30"
                      >
                        <GraduationCap size={32} className="text-[#C75F71]" />
                      </motion.div>
                      <div>
                        <h3 className="text-2xl font-display font-bold mb-2 text-white transition-colors">
                          {edu.degree}
                        </h3>
                        <p className="text-xl text-gray-300 mb-1">{edu.field}</p>
                        <p className="text-gray-400">{edu.institution}</p>
                        <p className="text-sm text-gray-500">{edu.location}</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-start md:items-end gap-2">
                      <div className="flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full border border-primary/30">
                        <Calendar size={16} className="text-primary" />
                        <span className="text-sm font-medium">{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 bg-accent/20 rounded-full border border-accent/30">
                        <Award size={16} className="text-accent" />
                        <span className="text-sm font-medium">{edu.grade}</span>
                      </div>
                    </div>
                  </div>

                  {edu.achievements && edu.achievements.length > 0 && (
                    <div className="space-y-2">
                      <p className="text-sm text-gray-500 mb-3">Key Achievements:</p>
                      {edu.achievements.map((achievement, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0 }}
                          animate={isInView ? { opacity: 1 } : {}}
                          transition={{ delay: index * 0.15 + i * 0.05, duration: 0.3 }}
                          className="flex items-start gap-3"
                        >
                          <div className="mt-1.5 w-2 h-2 rounded-full bg-[#C75F71]" />
                          <p className="text-gray-300">{achievement}</p>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
