"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skills = [
    // Programming Languages (8 items - 2 rows)
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", category: "language" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", category: "language" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", category: "language" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", category: "language" },
    { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", category: "language" },
    { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", category: "language" },
    { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", category: "language" },
    { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", category: "language" },
    
    // Frontend (8 items - 2 rows)
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", category: "frontend" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", category: "frontend" },
    { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", category: "frontend" },
    { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", category: "frontend" },
    { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", category: "frontend" },
    { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", category: "frontend" },
    { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg", category: "frontend" },
    { name: "jQuery", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg", category: "frontend" },
    
    // Backend (8 items - 2 rows)
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", category: "backend" },
    { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", category: "backend" },
    { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg", category: "backend" },
    { name: "Spring", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg", category: "backend" },
    { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg", category: "backend" },
    { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg", category: "backend" },
    { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg", category: "backend" },
    { name: "REST API", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", category: "backend" },
    
    // Databases (4 items - 1 row)
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", category: "database" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", category: "database" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", category: "database" },
    { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg", category: "database" },
    
    // DevOps & Tools (12 items - 3 rows)
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", category: "devops" },
    { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg", category: "devops" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", category: "devops" },
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", category: "devops" },
    { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", category: "devops" },
    { name: "Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg", category: "devops" },
    { name: "Jenkins", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg", category: "devops" },
    { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg", category: "devops" },
    { name: "Nginx", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg", category: "devops" },
    { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg", category: "devops" },
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", category: "devops" },
    { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", category: "devops" },
  ];

  const categories = [
    { id: "language", name: "Languages", side: "left" },
    { id: "frontend", name: "Frontend", side: "left" },
    { id: "backend", name: "Backend", side: "left" },
    { id: "database", name: "Database", side: "right" },
    { id: "devops", name: "DevOps & Tools", side: "right" },
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center py-20 relative overflow-hidden bg-[#0a0a0f]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-white">
            Technical <span className="text-[#C75F71]">Skills</span>
          </h2>
          <p className="text-center text-gray-400 mb-16">Technologies & Tools I work with</p>

          {/* Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column */}
            <div className="space-y-10">
              {categories.filter(cat => cat.side === "left").map((category, catIndex) => {
                const categorySkills = skills.filter(skill => skill.category === category.id);
                
                return (
                  <motion.div
                    key={category.id}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: catIndex * 0.15, duration: 0.6 }}
                  >
                    {/* Category Title */}
                    <div className="flex items-center gap-3 mb-6">
                      <div className="h-1 w-12 rounded-full bg-[#C75F71]" />
                      <h3 className="text-xl font-bold text-[#C75F71]">
                        {category.name}
                      </h3>
                      <div className="h-1 flex-1 rounded-full bg-[#C75F71] opacity-20" />
                    </div>

                    {/* Skills Grid */}
                    <div className="grid grid-cols-4 gap-4">
                      {categorySkills.map((skill, index) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{
                            delay: catIndex * 0.15 + index * 0.05,
                            duration: 0.4,
                            type: "spring",
                            stiffness: 200
                          }}
                          whileHover={{ 
                            scale: 1.15, 
                            y: -8,
                            transition: { duration: 0.2 }
                          }}
                          onHoverStart={() => setHoveredSkill(skill.name)}
                          onHoverEnd={() => setHoveredSkill(null)}
                          className="relative group"
                        >
                          <div 
                            className="flex flex-col items-center gap-3 p-4 rounded-xl glossy-card border transition-all duration-300 cursor-pointer"
                            style={{ 
                              borderColor: hoveredSkill === skill.name ? '#C75F71' : 'rgba(199, 95, 113, 0.2)',
                              backgroundColor: hoveredSkill === skill.name ? 'rgba(199, 95, 113, 0.1)' : 'transparent'
                            }}
                          >
                            {/* Icon */}
                            <div className="relative w-12 h-12 flex items-center justify-center">
                              <img 
                                src={skill.icon} 
                                alt={skill.name}
                                className="w-full h-full object-contain filter transition-all duration-300"
                                style={{
                                  filter: hoveredSkill === skill.name ? 'none' : 'grayscale(30%)'
                                }}
                              />
                              
                              {/* Glow effect on hover */}
                              {hoveredSkill === skill.name && (
                                <motion.div
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={{ opacity: 1, scale: 1.5 }}
                                  className="absolute inset-0 rounded-full blur-xl -z-10 bg-[#C75F71]/40"
                                />
                              )}
                            </div>

                            {/* Name */}
                            <span 
                              className="text-xs font-medium text-center transition-colors duration-300"
                              style={{ 
                                color: hoveredSkill === skill.name ? '#C75F71' : '#9ca3af'
                              }}
                            >
                              {skill.name}
                            </span>
                          </div>

                          {/* Tooltip on hover */}
                          {hoveredSkill === skill.name && (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1.5 bg-[#C75F71] rounded-lg text-xs font-semibold whitespace-nowrap z-50 pointer-events-none text-white"
                              style={{ 
                                boxShadow: '0 4px 20px rgba(199, 95, 113, 0.6)'
                              }}
                            >
                              {skill.name}
                              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-[#C75F71] rotate-45" />
                            </motion.div>
                          )}
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Right Column */}
            <div className="space-y-10">
              {categories.filter(cat => cat.side === "right").map((category, catIndex) => {
                const categorySkills = skills.filter(skill => skill.category === category.id);
                
                return (
                  <motion.div
                    key={category.id}
                    initial={{ opacity: 0, x: 30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: catIndex * 0.15, duration: 0.6 }}
                  >
                    {/* Category Title */}
                    <div className="flex items-center gap-3 mb-6">
                      <div className="h-1 w-12 rounded-full bg-[#C75F71]" />
                      <h3 className="text-xl font-bold text-[#C75F71]">
                        {category.name}
                      </h3>
                      <div className="h-1 flex-1 rounded-full bg-[#C75F71] opacity-20" />
                    </div>

                    {/* Skills Grid */}
                    <div className="grid grid-cols-4 gap-4">
                      {categorySkills.map((skill, index) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{
                            delay: catIndex * 0.15 + index * 0.05,
                            duration: 0.4,
                            type: "spring",
                            stiffness: 200
                          }}
                          whileHover={{ 
                            scale: 1.15, 
                            y: -8,
                            transition: { duration: 0.2 }
                          }}
                          onHoverStart={() => setHoveredSkill(skill.name)}
                          onHoverEnd={() => setHoveredSkill(null)}
                          className="relative group"
                        >
                          <div 
                            className="flex flex-col items-center gap-3 p-4 rounded-xl glossy-card border transition-all duration-300 cursor-pointer"
                            style={{ 
                              borderColor: hoveredSkill === skill.name ? '#C75F71' : 'rgba(199, 95, 113, 0.2)',
                              backgroundColor: hoveredSkill === skill.name ? 'rgba(199, 95, 113, 0.1)' : 'transparent'
                            }}
                          >
                            {/* Icon */}
                            <div className="relative w-12 h-12 flex items-center justify-center">
                              <img 
                                src={skill.icon} 
                                alt={skill.name}
                                className="w-full h-full object-contain filter transition-all duration-300"
                                style={{
                                  filter: hoveredSkill === skill.name ? 'none' : 'grayscale(30%)'
                                }}
                              />
                              
                              {/* Glow effect on hover */}
                              {hoveredSkill === skill.name && (
                                <motion.div
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={{ opacity: 1, scale: 1.5 }}
                                  className="absolute inset-0 rounded-full blur-xl -z-10 bg-[#C75F71]/40"
                                />
                              )}
                            </div>

                            {/* Name */}
                            <span 
                              className="text-xs font-medium text-center transition-colors duration-300"
                              style={{ 
                                color: hoveredSkill === skill.name ? '#C75F71' : '#9ca3af'
                              }}
                            >
                              {skill.name}
                            </span>
                          </div>

                          {/* Tooltip on hover */}
                          {hoveredSkill === skill.name && (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1.5 bg-[#C75F71] rounded-lg text-xs font-semibold whitespace-nowrap z-50 pointer-events-none text-white"
                              style={{ 
                                boxShadow: '0 4px 20px rgba(199, 95, 113, 0.6)'
                              }}
                            >
                              {skill.name}
                              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-[#C75F71] rotate-45" />
                            </motion.div>
                          )}
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
