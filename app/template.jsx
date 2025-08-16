"use client";

import { motion } from "framer-motion";
import "./globals.css";

// hooks
import useScrollProgress from "../hook/useScrollProgress";

// animation variants
const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
};

const Template = ({ children }) => {
  const completion = useScrollProgress();
  // completion = % of page scrolled

  return (
    <>
      {/* Animated page wrapper */}
      <motion.div
        variants={variants}
        initial="hidden"
        animate="enter"
        transition={{ type: "linear", delay: 0.2, duration: 0.5 }}
      >
        {children}
      </motion.div>

      {/* Scroll progress bar */}
      <span
        style={{ transform: `translateY(${completion - 100}%)` }}
        className="fixed top-0 right-0 bottom-0 z-50 w-1 bg-primary transition-all duration-700"
      ></span>

      {/* Just for testing scroll */}
      {/* <div className="h-[4000px]" /> */}
    </>
  );
};

export default Template;
