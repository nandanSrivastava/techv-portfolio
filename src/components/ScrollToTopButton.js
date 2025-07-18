"use client";

import { motion } from "framer-motion";
import { ChevronUp } from "lucide-react";

export default function ScrollToTopButton({ showScrollTop, scrollToTop }) {
  if (!showScrollTop) return null;

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-40"
    >
      <ChevronUp size={24} />
    </motion.button>
  );
}
