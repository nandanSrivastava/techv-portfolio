"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star } from "lucide-react";

export default function TestimonialsSection({ testimonials }) {
  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            What Our Clients Say
          </h2>
          <p className="text-base text-gray-600 max-w-xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients
            have to say about working with TechV.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-5"
            >
              <div className="flex items-center mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                "{testimonial.content}"
              </p>
              <div className="flex items-center">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={50}
                  height={50}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
