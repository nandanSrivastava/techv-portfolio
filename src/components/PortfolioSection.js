"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

export default function PortfolioSection({ projects }) {
  return (
    <section id="portfolio" className="py-8 lg:py-16 xl:py-24 px-4 sm:px-6 lg:px-8 min-h-[60vh] lg:min-h-[80vh] xl:min-h-[90vh] flex flex-col justify-center bg-white">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-3"
        >
          <h2 className="text-lg font-bold text-gray-900 mb-1">Our Portfolio</h2>
          <p className="text-xs text-gray-600 max-w-md mx-auto">
            Latest projects and digital transformations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-6 xl:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="flex gap-2 p-2">
                <div className="relative overflow-hidden flex-shrink-0">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-16 h-16 object-cover rounded transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center">
                    <ExternalLink size={8} className="text-white mb-1" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-blue-600 font-semibold mb-0.5">
                    {project.category}
                  </div>
                  <h3 className="text-sm font-bold text-gray-900 mb-1 truncate">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-1 leading-tight text-xs line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-0.5">
                    {project.tech.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-1.5 py-0.5 bg-gray-100 text-gray-700 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-1.5 py-0.5 bg-gray-200 text-gray-600 text-xs rounded">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
