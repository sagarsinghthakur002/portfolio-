"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

import Logo from "./Logo";
import ThemeToggler from "./ThemeToggler";


function Header() {
  const [header, setHeader] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Handle scroll direction & header background
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          setIsScrollingUp(currentScrollY < lastScrollY);
          setHeader(currentScrollY > 100);
          setLastScrollY(currentScrollY);

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.header
      className={`
        ${header ? "py-3 bg-white/80 shadow-lg backdrop-blur-md dark:bg-accent/90" : "py-5 dark:bg-transparent"}
        ${!isScrollingUp && "translate-y-[-100%]"} 
        sticky top-0 z-30 transition-all duration-300
        ${pathname === "/" ? "bg-[#fafafa]/80" : ""}
        xl:px-[6rem] px-[1rem]
      `}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto max-w-7xl  px-[1rem]">
        <div className="flex items-center  justify-between xl:py-2">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="flex-shrink-0"
          >
            <Logo />
          </motion.div>

          {/* Desktop Nav */}
          <nav
            className="hidden xl:flex flex-1 justify-center "
            role="navigation"
            aria-label="Main menu"
          >
            <a
              href="/"
              className="relative px-2 py-1 text-sm font-medium hover:text-primary transition-all duration-200 group"

            >
              Home
              <span className="absolute left-0 bottom-0 h-[2px] bg-primary w-0 group-hover:w-full transition-all duration-200" />
            </a>
            <a
              href="/projects"
              className="relative px-2 py-1 text-sm font-medium hover:text-primary transition-all duration-200 group"
            >
              My projecs
              <span className="absolute left-0 bottom-0 h-[2px] bg-primary w-0 group-hover:w-full transition-all duration-200" />
            </a>

            <a
              href="/contact"
              className="relative px-2 py-1 text-sm font-medium hover:text-primary transition-all duration-200 group"
            >
              Contact
              <span className="absolute left-0 bottom-0 h-[2px] bg-primary w-0 group-hover:w-full transition-all duration-200" />
            </a>
          </nav>

          {/* Controls */}
          <div className="flex items-center gap-x-6">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <ThemeToggler />
            </motion.div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="xl:hidden text-gray-800 dark:text-white"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            id="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="xl:hidden mt-4 flex flex-col gap-4 bg-white dark:bg-accent/90 shadow-lg rounded-xl p-6 mx-4 items-center justify-center"
          >
            <a
              href="/"
              className="text-sm font-medium hover:text-primary transition"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
            <a
              href="/projects"
              className="text-sm font-medium hover:text-primary transition"
              onClick={() => setIsOpen(false)}
            >
              My Projects
            </a>

            <a
              href="/contact"
              className="text-sm font-medium hover:text-primary transition"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>



          </motion.nav>
        )}
      </AnimatePresence>

      {/* Divider when scrolled */}
      <AnimatePresence>
        {header && (
          <motion.div
            className="absolute bottom-0 left-0 w-full h-[1px] bg-gray-200 dark:bg-gray-700/30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Header;




