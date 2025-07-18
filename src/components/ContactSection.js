"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight, Github, Linkedin, Twitter } from "lucide-react";

const ContactInfo = ({ icon: Icon, title, items }) => (
  <div className="flex items-start justify-center sm:justify-start">
    <Icon className="h-4 w-4 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
    <div className="text-center sm:text-left">
      <h4 className="font-semibold text-gray-900 text-sm">{title}</h4>
      {items.map((item, index) => (
        <p key={index} className="text-gray-600 text-xs">
          {item}
        </p>
      ))}
    </div>
  </div>
);

const SocialIcon = ({ href = "#", icon: Icon, size = 16, className = "" }) => (
  <a href={href} className={`transition-colors ${className}`}>
    <Icon size={size} />
  </a>
);

export default function ContactSection({ scrollToSection }) {
  const socialIcons = [
    { icon: Github, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Twitter, href: "#" },
  ];

  return (
    <section id="contact" className="py-8 lg:py-16 xl:py-24 px-4 sm:px-6 lg:px-8 min-h-[60vh] lg:min-h-[80vh] xl:min-h-[90vh] flex flex-col justify-center bg-white">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-3"
        >
          <h2 className="text-lg font-bold text-gray-900 mb-1">Let's Start Your Project</h2>
          <p className="text-xs text-gray-600 max-w-md mx-auto">
            Ready to transform your business? Get in touch today.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-50 rounded-lg p-3 order-1 lg:order-1"
          >
            <h3 className="text-base font-bold text-gray-900 mb-2">
              Send us a Message
            </h3>
            <form className="space-y-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-medium text-gray-700 mb-1"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-sm"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-medium text-gray-700 mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-sm"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="company"
                  className="block text-xs font-medium text-gray-700 mb-1"
                >
                  Company (Optional)
                </label>
                <input
                  type="text"
                  id="company"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-sm"
                  placeholder="Your company name"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={2}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none text-sm"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded font-semibold transition-all duration-300 flex items-center justify-center gap-1 text-sm"
              >
                Send Message
                <ArrowRight size={16} />
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-3 order-2 lg:order-2 text-center lg:text-left"
          >
            <div className="text-center lg:text-left">
              <h3 className="text-base font-bold text-gray-900 mb-2">
                Get in Touch
              </h3>
              <div className="space-y-2 flex flex-col items-center lg:items-start">
                <ContactInfo
                  icon={Mail}
                  title="Email"
                  items={["hello@techv.com", "support@techv.com"]}
                />
                <ContactInfo
                  icon={Phone}
                  title="Phone"
                  items={["+91 9065628583"]}
                />
                <ContactInfo
                  icon={MapPin}
                  title="Office"
                  items={[
                    "TFT Colony, Valmikinagar,",
                    "West Champaran, Bihar, 845107",
                  ]}
                />
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg p-3 text-white">
              <h4 className="text-sm font-bold mb-1">Ready to Start?</h4>
              <p className="mb-2 text-xs">
                Let's discuss your project and turn your vision into reality.
              </p>
              <div className="flex justify-between items-center">
                <button
                  onClick={() => scrollToSection("home")}
                  className="bg-white text-blue-600 px-3 py-1.5 rounded text-xs font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Started
                </button>
                <div className="flex space-x-3">
                  {socialIcons.map((social, index) => (
                    <SocialIcon
                      key={index}
                      icon={social.icon}
                      href={social.href}
                      className="text-white/80 hover:text-white"
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
