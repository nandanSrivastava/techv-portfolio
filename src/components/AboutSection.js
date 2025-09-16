"use client";

import { motion } from "framer-motion";
import { CheckCircle, Shield, Clock, Award, Users } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-8 lg:py-16 xl:py-24 px-4 sm:px-6 lg:px-8 min-h-[60vh] lg:min-h-[80vh] xl:min-h-[90vh] flex flex-col justify-center bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-3"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            About TechV
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-sm">
            We are a team of passionate developers, designers, and strategists
            committed to delivering exceptional digital solutions.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-lg font-bold text-gray-900 mb-3">
              Our Mission
            </h3>
            <p className="text-gray-600 mb-3 leading-relaxed text-sm">
              At TechV, we believe in the power of technology to transform
              businesses. Our mission is to create innovative digital
              solutions that not only meet but exceed our clients'
              expectations.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed text-sm">
              We combine technical expertise with creative thinking to deliver
              projects that drive real business results and provide
              exceptional user experiences.
            </p>
            <div className="space-y-2">
              {[
                "Expert Development Team",
                "Agile Development Process",
                "24/7 Support & Maintenance",
                "Cutting-edge Technologies",
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-4 text-white">
              <h4 className="text-lg font-bold mb-3">Why Choose TechV?</h4>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Shield className="h-5 w-5 mr-3" />
                  <span className="text-sm">Secure & Scalable Solutions</span>
                </li>
                <li className="flex items-center">
                  <Clock className="h-5 w-5 mr-3" />
                  <span className="text-sm">On-time Project Delivery</span>
                </li>
                <li className="flex items-center">
                  <Award className="h-5 w-5 mr-3" />
                  <span className="text-sm">Industry Best Practices</span>
                </li>
                <li className="flex items-center">
                  <Users className="h-5 w-5 mr-3" />
                  <span className="text-sm">Dedicated Project Manager</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
