"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Download } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["About", "Skills", "Internships", "Education", "Projects", "Contact"];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-[#0a0a0f]/95 backdrop-blur-xl border-b border-[#C75F71]/20 shadow-lg" 
          : "bg-[#0a0a0f]/60 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-black cursor-pointer text-[#C75F71]"
        >
          MP
        </motion.div>

        <div className="hidden md:flex gap-8 items-center">
          {navItems.map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -2 }}
              className="text-gray-300 hover:text-[#C75F71] transition-colors font-medium text-sm"
            >
              {item}
            </motion.a>
          ))}
          
          <motion.a
            href="/MALAVIKACV.pdf"
            download
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-5 py-2.5 bg-[#C75F71] text-white rounded-full font-semibold text-sm hover:bg-[#C75F71]/90 transition-all"
          >
            <Download size={16} />
            <span>Resume</span>
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
}
