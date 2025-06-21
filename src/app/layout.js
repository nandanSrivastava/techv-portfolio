import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "TechV - Professional Software Development Company",
  description:
    "TechV builds exceptional websites and software solutions for businesses. Expert web development, mobile apps, and custom software.",
  keywords:
    "web development, software development, mobile apps, TechV, custom software, responsive design",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased bg-white text-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}
