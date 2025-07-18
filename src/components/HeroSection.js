"use client";

import { motion, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HeroSection({ 
  opacity, 
  scrollToSection, 
  stats 
}) {
  return (
    <section
      id="home"
      className="relative min-h-[80vh] lg:min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20 lg:pt-24 pb-8 lg:pb-0"
    >
      <motion.div
        style={{ opacity }}
        className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10"
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-4 lg:pt-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-3">
            Building Digital
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Excellence
            </span>
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-xl mx-auto mb-4 leading-relaxed">
            We craft exceptional websites and software solutions that drive
            business growth and deliver outstanding user experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <button
              onClick={() => scrollToSection("portfolio")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2"
            >
              View Our Work
              <ArrowRight size={18} />
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-5 py-2.5 rounded-lg font-semibold transition-all duration-300"
            >
              Get Started
            </button>
          </div>
        </motion.div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 mb-8 lg:mb-0">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="text-center"
            >
              <stat.icon className="h-6 w-6 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900 mb-1">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
