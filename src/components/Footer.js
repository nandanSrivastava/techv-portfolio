"use client";

import Image from "next/image";
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";

const SocialIcon = ({ href = "#", icon: Icon, size = 24, className = "" }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className={`transition-colors ${className}`}>
    <Icon size={size} />
  </a>
);

export default function Footer() {
  const socialIcons = [
    { icon: Github, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Twitter, href: "https://twitter.com/" },
    { icon: Instagram, href: "https://www.instagram.com/thetechv/" },
  ];

  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
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
          </p>
          <div className="flex justify-center space-x-6 mb-4">
            {socialIcons.map((social, index) => (
              <SocialIcon
                key={index}
                icon={social.icon}
                href={social.href}
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
  );
}
