"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Medi Alert",
      description: "MediAlert is a scalable health monitoring platform built to track patient metrics and detect abnormalities. It uses secure authentication and RESTful APIs to manage real-time data flow. The system ensures instant notifications for faster medical response.",
      tech: ["Next.js", "Node.js", "MongoDB", "React.js","JWT"],
      github: "https://github.com/malavikapillai/medical-emergency-portal",
      // live: "",
    },
    {
      title: "Java Task Manager on AWS EC2",
      description: "Developed a Java-based CLI Task Manager application with Maven to handle build automation and dependency management. The project leverages Maven lifecycle phases for efficient compilation and packaging.",
      tech: ["Maven", "Java", "Docker", "AWS","EC2"],
      github: "https://github.com/malavikapillai/java-task-manager",
      // live: "https://project2.vercel.app",
    },
    {
  title: "Konvo",
  description: `Built KONVO, a full-stack online discussion platform using PHP and MySQL with a RESTful API architecture.
Implemented user authentication, group creation, threaded discussions, and nested replies for structured conversations.
Developed a responsive frontend with JavaScript, Tailwind CSS, and jQuery, enabling dynamic updates and a real-time user experience.`,
  tech: ["HTML", "CSS", "Socket.io", "JavaScript", "PHP", "MySQL"],
  github: "https://github.com/malavikapillai/KONVO",
  // live: "https://project3.vercel.app",
},
    {
      title: "ComConnect- AI Assistant",
      description: "Developed an AI-powered chatbot integrating the Gemini LLM API to deliver personalized responses about local resources. Improved response accuracy through prompt engineering and designed a clean web interface for seamless interaction. Deployed the application for real-world accessibility and usability.",
      tech: ["Gemini API", "Javascript", "Prompt Engineering"],
      github: "https://github.com/malavikapillai/CommunityConnect",
      live: "https://marketplace.visualstudio.com",
    },
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center py-20 relative overflow-hidden bg-[#0a0a0f]" ref={ref}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-white">
            Featured <span className="text-[#C75F71]">Projects</span>
          </h2>
          <p className="text-center text-gray-400 mb-16">Showcasing my best work</p>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="group relative p-8 glossy-card rounded-2xl transition-all duration-300 overflow-hidden border border-[#C75F71]/20 hover:border-[#C75F71]/50"
              >
                <div className="absolute inset-0 bg-[#C75F71]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

                <div className="relative z-10">
                  <div className="mb-6">
                    <h3 className="text-3xl font-display font-bold mb-4 text-white transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-lg">{project.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((tech) => (
                      <motion.span
                        key={tech}
                        whileHover={{ scale: 1.05 }}
                        className="px-4 py-2 bg-[#C75F71]/10 rounded-lg text-sm font-medium border border-[#C75F71]/30 hover:border-[#C75F71] transition-all text-gray-300"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 flex items-center justify-center gap-2 px-6 py-3 glass-effect rounded-xl transition-all font-medium border border-[#C75F71]/20 hover:border-[#C75F71]/50"
                    >
                      <Github size={18} />
                      Code
                    </motion.a>
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium bg-[#C75F71] text-white hover:bg-[#C75F71]/90 transition-all"
                    >
                      <ExternalLink size={18} />
                      <span>Live Demo</span>
                    </motion.a>
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
