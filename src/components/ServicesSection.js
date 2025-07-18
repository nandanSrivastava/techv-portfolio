"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function ServicesSection({ services }) {
  return (
    <section id="services" className="py-8 lg:py-16 xl:py-24 px-4 sm:px-6 lg:px-8 min-h-[60vh] lg:min-h-[80vh] xl:min-h-[90vh] flex flex-col justify-center bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-3"
        >
          <h2 className="text-lg font-bold text-gray-900 mb-1">Our Services</h2>
          <p className="text-xs text-gray-600 max-w-md mx-auto">
            Digital solutions to help your business thrive.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md p-2 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-start gap-2">
                <div
                  className={`w-6 h-6 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center flex-shrink-0`}
                >
                  <service.icon className="h-3 w-3 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-bold text-gray-900 mb-1">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-2 leading-tight text-xs">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {service.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="inline-flex items-center text-gray-700 text-xs bg-gray-50 px-1.5 py-0.5 rounded"
                      >
                        <CheckCircle className="h-2 w-2 text-green-500 mr-1" />
                        {feature}
                      </span>
                    ))}
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
