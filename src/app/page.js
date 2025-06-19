"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Menu,
  X,
  Code,
  Smartphone,
  Globe,
  Zap,
  Users,
  Award,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Github,
  Linkedin,
  Twitter,
  CheckCircle,
  ArrowRight,
  Star,
  Calendar,
  Clock,
  Shield,
  ChevronUp,
} from "lucide-react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  // Constants for consistent sizing
  const ICON_SIZES = { sm: 16, md: 20, lg: 24 };
  const SECTIONS = ["home", "about", "services", "portfolio", "contact"];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const section of SECTIONS) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navItems = SECTIONS.map((section) => ({
    id: section,
    label: section.charAt(0).toUpperCase() + section.slice(1),
  }));

  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description:
        "Custom websites and web applications built with cutting-edge technologies.",
      features: [
        "Responsive Design",
        "SEO Optimized",
        "Fast Performance",
        "Modern UI/UX",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Smartphone,
      title: "Mobile Applications",
      description:
        "Native and cross-platform mobile apps for iOS and Android platforms.",
      features: [
        "React Native",
        "Flutter",
        "Native iOS/Android",
        "Progressive Web Apps",
      ],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Code,
      title: "Custom Software",
      description:
        "Tailored software solutions designed to meet your specific business needs.",
      features: [
        "Enterprise Solutions",
        "API Development",
        "Cloud Integration",
        "Database Design",
      ],
      color: "from-purple-500 to-violet-500",
    },
    {
      icon: Zap,
      title: "Digital Transformation",
      description:
        "Modernize your business processes with innovative digital solutions.",
      features: [
        "Process Automation",
        "System Integration",
        "Legacy Modernization",
        "Consulting",
      ],
      color: "from-orange-500 to-red-500",
    },
  ];

  const projects = [
    {
      title: "FinTech Dashboard",
      category: "Web Application",
      description:
        "A comprehensive financial management platform with real-time analytics and reporting.",
      tech: ["React", "Node.js", "MongoDB", "Chart.js"],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      link: "#",
    },
    {
      title: "E-Commerce Platform",
      category: "Full Stack",
      description:
        "Modern e-commerce solution with advanced inventory management and payment processing.",
      tech: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      link: "#",
    },
    {
      title: "CRM System",
      category: "Enterprise Software",
      description:
        "Customer relationship management system with advanced automation features.",
      tech: ["Angular", "Spring Boot", "MySQL", "Docker"],
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      link: "#",
    },
    {
      title: "Learning Platform",
      category: "Educational Technology",
      description:
        "Online learning platform with video streaming and progress tracking.",
      tech: ["React", "Express.js", "WebRTC", "Redis"],
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
      link: "#",
    },
  ];

  const stats = [
    { number: "100+", label: "Projects Completed", icon: CheckCircle },
    { number: "50+", label: "Happy Clients", icon: Users },
    { number: "2+", label: "Years Experience", icon: Calendar },
    { number: "100%", label: "Client Satisfaction", icon: Star },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO, Digital Innovations",
      content:
        "TechV transformed our business with their exceptional web development services. Professional, timely, and innovative.",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      rating: 5,
    },
    {
      name: "Michael Chen",
      position: "CTO, StartupFlow",
      content:
        "Outstanding technical expertise and project management. They delivered exactly what we needed and more.",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      position: "Marketing Director, GrowthCorp",
      content:
        "The team's attention to detail and commitment to quality is unmatched. Highly recommend TechV.",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      rating: 5,
    },
  ]; // Helper functions for consistent styling
  const getSectionClasses = (bgColor = "bg-white") =>
    `py-8 lg:py-16 xl:py-24 px-4 sm:px-6 lg:px-8 min-h-[60vh] lg:min-h-[80vh] xl:min-h-[90vh] flex flex-col justify-center ${bgColor}`;

  const getContainerClasses = (maxWidth = "max-w-3xl") => `${maxWidth} mx-auto`;

  const getHeaderClasses = () => "text-center mb-3";

  const getTitleClasses = () => "text-lg font-bold text-gray-900 mb-1";

  const getSubtitleClasses = () => "text-xs text-gray-600 max-w-md mx-auto";
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

  const SocialIcon = ({
    href = "#",
    icon: Icon,
    size = ICON_SIZES.sm,
    className = "",
  }) => (
    <a href={href} className={`transition-colors ${className}`}>
      <Icon size={size} />
    </a>
  );

  const socialIcons = [
    { icon: Github, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Twitter, href: "#" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {" "}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center"
            >
              <Image
                src="/techv_logo.png"
                alt="TechV Logo"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </motion.div>
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    activeSection === item.id
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-700 hover:text-blue-600"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            {/* Mobile menu button */}
            <button
              className="md:hidden text-gray-700 p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="px-4 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${
                    activeSection === item.id
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </nav>{" "}
      {/* Hero Section */}
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
            {" "}
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
          </motion.div>{" "}
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
      </section>{" "}
      {/* About Section */}
      <section id="about" className={getSectionClasses()}>
        <div className={getContainerClasses("max-w-5xl")}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={getHeaderClasses()}
          >
            {" "}
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              About TechV
            </h2>{" "}
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
              {" "}
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Our Mission
              </h3>
              <p className="text-gray-600 mb-3 leading-relaxed text-sm">
                At TechV, we believe in the power of technology to transform
                businesses. Our mission is to create innovative digital
                solutions that not only meet but exceed our clients'
                expectations.
              </p>{" "}
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
              {" "}
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
      </section>{" "}
      {/* Services Section */}
      <section id="services" className={getSectionClasses("bg-gray-50")}>
        <div className={getContainerClasses()}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={getHeaderClasses()}
          >
            <h2 className={getTitleClasses()}>Our Services</h2>
            <p className={getSubtitleClasses()}>
              Digital solutions to help your business thrive.
            </p>
          </motion.div>{" "}
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
                  </div>{" "}
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
                      ))}{" "}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>{" "}
      <section id="portfolio" className={getSectionClasses()}>
        <div className={getContainerClasses()}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={getHeaderClasses()}
          >
            <h2 className={getTitleClasses()}>Our Portfolio</h2>
            <p className={getSubtitleClasses()}>
              Latest projects and digital transformations.
            </p>
          </motion.div>{" "}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-6 xl:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                {" "}
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
                      {" "}
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
            ))}{" "}
          </div>
        </div>
      </section>
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
      </section>{" "}
      {/* Contact Section */}
      <section id="contact" className={getSectionClasses()}>
        <div className={getContainerClasses()}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={getHeaderClasses()}
          >
            <h2 className={getTitleClasses()}>Let's Start Your Project</h2>
            <p className={getSubtitleClasses()}>
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
                </div>{" "}
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
            </motion.div>{" "}
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-3 order-2 lg:order-2 text-center lg:text-left"
            >
              {" "}
              <div className="text-center lg:text-left">
                {" "}
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
                  />{" "}
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
                  </button>{" "}
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
      <footer className="bg-gray-900 text-white py-6">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {" "}
          <div className="text-center">
            <div className="flex justify-center mb-2">
              <Image
                src="/techv_logo.png"
                alt="TechV Logo"
                width={100}
                height={35}
                className="h-6 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-gray-400 mb-3 text-sm">
              Building digital excellence, one project at a time.
            </p>{" "}
            <div className="flex justify-center space-x-6 mb-4">
              {socialIcons.map((social, index) => (
                <SocialIcon
                  key={index}
                  icon={social.icon}
                  href={social.href}
                  size={ICON_SIZES.lg}
                  className="text-gray-400 hover:text-white"
                />
              ))}
            </div>
            <div className="border-t border-gray-800 pt-4">
              <p className="text-gray-400 text-sm">
                © 2025 TechV. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-40"
        >
          <ChevronUp size={24} />
        </motion.button>
      )}
    </div>
  );
}
