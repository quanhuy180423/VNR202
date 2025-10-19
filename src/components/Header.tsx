"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Star } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#hero", label: "Trang chủ" },
    { href: "#context", label: "Bối cảnh" },
    { href: "#timeline", label: "Dòng thời gian" },
    { href: "#significance", label: "Ý nghĩa" },
    { href: "#modern", label: "Hiện đại" },
  ];

  // Function to check if we should use Link component
  const shouldUseLink = () => {
    return pathname === "/explore";
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-900/95 backdrop-blur-md border-b border-red-800/20"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
              <Star className="w-6 h-6 text-yellow-300" />
            </div>
            <div className="text-white">
              <h1 className="text-xl font-bold">Cách mạng tháng Tám</h1>
              <p className="text-xs text-red-200">1945 - 2025</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navItems.map((item, index) => {
              const shouldUseLinks = shouldUseLink();

              return (
                <motion.div key={item.href}>
                  {shouldUseLinks ? (
                    <Link
                      href={{
                        pathname: "/",
                        hash: item.href.substring(1),
                      }}
                      className="text-white hover:text-red-300 transition-colors duration-200 font-medium"
                    >
                      <motion.span
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                        className="block"
                      >
                        {item.label}
                      </motion.span>
                    </Link>
                  ) : (
                    <motion.a
                      href={item.href}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                      className="text-white hover:text-red-300 transition-colors duration-200 font-medium"
                    >
                      {item.label}
                    </motion.a>
                  )}
                </motion.div>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-2"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.nav
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isMobileMenuOpen ? 1 : 0,
            height: isMobileMenuOpen ? "auto" : 0,
          }}
          className="lg:hidden overflow-hidden bg-slate-900/95 backdrop-blur-md rounded-lg mb-4"
        >
          <div className="py-4 space-y-2">
            {navItems.map((item) => {
              const shouldUseLinks = shouldUseLink();

              return (
                <div key={item.href}>
                  {shouldUseLinks ? (
                    <Link
                      href={{
                        pathname: "/",
                        hash: item.href.substring(1),
                      }}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-4 py-2 text-white hover:text-red-300 hover:bg-red-900/20 transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-4 py-2 text-white hover:text-red-300 hover:bg-red-900/20 transition-colors duration-200"
                    >
                      {item.label}
                    </a>
                  )}
                </div>
              );
            })}
          </div>
        </motion.nav>
      </div>
    </motion.header>
  );
};

export default Header;
