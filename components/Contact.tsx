"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thanks for reaching out! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "malavika301@gmail.com" },
    { icon: Phone, label: "Phone", value: "+91 79077 32914" },
    { icon: MapPin, label: "Kochi", value: "India" },
  ];

  return (
    <section id="contact" className="min-h-screen flex items-center py-20 relative overflow-hidden bg-[#0a0a0f]" ref={ref}>
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-white">
            Get In <span className="text-[#C75F71]">Touch</span>
          </h2>
          <p className="text-center text-gray-400 mb-16">Let's create something amazing together</p>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-3xl font-display font-bold mb-6 text-[#C75F71]">
                  Let's work together
                </h3>
                <p className="text-gray-300 leading-relaxed mb-8 text-lg">
                  I'm always open to discussing new projects, creative ideas, or opportunities
                  to be part of your vision. Feel free to reach out!
                </p>
              </div>

              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.03, x: 5 }}
                  className="group flex items-center gap-4 p-5 glossy-card rounded-2xl border border-[#C75F71]/10 hover:border-[#C75F71]/30 transition-all"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="p-4 bg-[#C75F71]/20 rounded-xl border border-[#C75F71]/30"
                  >
                    <info.icon size={24} className="text-[#C75F71]" />
                  </motion.div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">{info.label}</p>
                    <p className="text-lg font-medium transition-colors text-white">{info.value}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.form
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div className="relative">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  onFocus={() => setFocused("name")}
                  onBlur={() => setFocused(null)}
                  className="w-full px-6 py-4 glass-effect border border-white/10 rounded-2xl focus:border-primary focus:outline-none transition-all text-lg bg-transparent text-white placeholder:text-gray-500"
                />
                {focused === "name" && (
                  <motion.div
                    layoutId="input-glow"
                    className="absolute inset-0 border-2 border-primary rounded-2xl pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                )}
              </div>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  onFocus={() => setFocused("email")}
                  onBlur={() => setFocused(null)}
                  className="w-full px-6 py-4 glass-effect border border-white/10 rounded-2xl focus:border-primary focus:outline-none transition-all text-lg bg-transparent text-white placeholder:text-gray-500"
                />
                {focused === "email" && (
                  <motion.div
                    layoutId="input-glow"
                    className="absolute inset-0 border-2 border-primary rounded-2xl pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                )}
              </div>
              <div className="relative">
                <textarea
                  placeholder="Your Message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                  className="w-full px-6 py-4 glossy-card border border-primary/20 rounded-2xl focus:border-primary focus:outline-none transition-all resize-none text-lg text-white placeholder:text-gray-500 bg-transparent"
                />
                {focused === "message" && (
                  <motion.div
                    layoutId="input-glow"
                    className="absolute inset-0 border-2 border-primary rounded-2xl pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                )}
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full relative flex items-center justify-center gap-3 px-8 py-5 rounded-2xl font-display font-semibold text-lg overflow-hidden bg-[#C75F71] text-black hover:bg-[#C75F71]/90 transition-all"
                style={{
                  boxShadow: "0 0 30px rgba(199, 95, 113, 0.3)",
                }}
              >
                <Send size={20} />
                <span>Send Message</span>
              </motion.button>
            </motion.form>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-20 text-center"
          >
            <div className="inline-block p-6 glossy-card rounded-2xl">
              <p className="text-gray-400">
                © 2024 Portfolio. Built with{" "}
                <span className="text-[#C75F71] font-semibold">
                  Next.js & Framer Motion
                </span>
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
