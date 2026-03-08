"use client";

import { motion } from "framer-motion";
import { Linkedin, Github } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#0a0a0f] px-6">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Main heading */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
              >
                <span className="text-[#C75F71]">Malavika Pillai</span>
                <br />
                <span className="text-white">Full Stack Engineer</span>
              </motion.h1>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-gray-400 leading-relaxed max-w-xl"
            >
              I'm Malavika Manoj Pillai — a 3rd year BTech student who builds scalable systems 
              and automates workflows to create impactful solutions.
            </motion.p>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center gap-4"
            >
              {/* LinkedIn */}
              <motion.a
                href="https://www.linkedin.com/in/malavikapillai123/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="p-4 bg-[#C75F71]/10 border border-[#C75F71]/30 rounded-full hover:bg-[#C75F71]/20 hover:border-[#C75F71] transition-all group"
                style={{
                  boxShadow: "0 0 20px rgba(199, 95, 113, 0.2)",
                }}
              >
                <Linkedin size={24} className="text-[#C75F71]" />
              </motion.a>

              {/* GitHub */}
              <motion.a
                href="https://github.com/malavikapillai"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="p-4 bg-[#C75F71]/10 border border-[#C75F71]/30 rounded-full hover:bg-[#C75F71]/20 hover:border-[#C75F71] transition-all group"
                style={{
                  boxShadow: "0 0 20px rgba(199, 95, 113, 0.2)",
                }}
              >
                <Github size={24} className="text-[#C75F71]" />
              </motion.a>

              {/* LeetCode */}
              <motion.a
                href="https://leetcode.com/u/malu301/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="p-4 bg-[#C75F71]/10 border border-[#C75F71]/30 rounded-full hover:bg-[#C75F71]/20 hover:border-[#C75F71] transition-all group"
                style={{
                  boxShadow: "0 0 20px rgba(199, 95, 113, 0.2)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-6 h-6 fill-[#C75F71]"
                >
                  <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
                </svg>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right side - Visual element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative hidden md:flex items-center justify-center"
          >
            <div className="relative w-full max-w-md aspect-square">
              {/* Glow effect behind */}
              <div 
                className="absolute inset-0 rounded-3xl blur-3xl opacity-30"
                style={{ background: "radial-gradient(circle, #C75F71 0%, transparent 70%)" }}
              />
              
              {/* Main card */}
              <div className="relative w-full h-full bg-gradient-to-br from-[#1a1a2e] to-[#0f0f1a] rounded-3xl border border-[#C75F71]/20 overflow-hidden">
                {/* Image */}
                <div className="relative w-full h-full">
                  <img 
                    src="/profile.jpg" 
                    alt="Malavika Manoj Pillai" 
                    className="w-full h-full object-cover"
                  />
                  {/* Gradient overlay at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0f0f1a] via-[#0f0f1a]/80 to-transparent p-8">
                    <h3 className="text-2xl font-bold text-white mb-2">Malavika Manoj Pillai</h3>
                    <p className="text-gray-400">Building the future</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
