import {
  Code,
  Smartphone,
  Globe,
  Zap,
  Users,
  Award,
  CheckCircle,
  Calendar,
  Star,
} from "lucide-react";

export const services = [
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

export const projects = [
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

export const stats = [
  { number: "10+", label: "Projects Completed", icon: CheckCircle },
  { number: "10+", label: "Happy Clients", icon: Users },
  { number: "1+", label: "Years Experience", icon: Calendar },
  { number: "100%", label: "Client Satisfaction", icon: Star },
];

export const testimonials = [
  {
    name: "~ Ripuraj Agro",
    content:
      "TechV completely transformed our business with their outstanding web development services — professional, timely, and truly innovative.",
    rating: 5,
  },
  {
    name: "~ The Magic Monks",
    content:
      "Outstanding technical expertise and project management. They delivered exactly what we needed and more.",
    rating: 5,
  },
  {
    name: "~ Valmiki Vihar Tour & Travels",
    content:
      "TechV’s attention to detail and commitment to quality are truly unmatched. I highly recommend their services.",
    rating: 5,
  },
];

export const SECTIONS = ["home", "about", "services", "portfolio", "contact"];
