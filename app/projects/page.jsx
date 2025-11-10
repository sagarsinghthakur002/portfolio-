"use client";

import React, { useState } from "react";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";

// sample project data
const projectData = [
  {
    image: "/img1.png",
    category: "React",
    name: "Smart-Trip-AI",
    description: "Travel Planner — Full-stack travel planning app using Next.js, Firebase, Tailwind, and Gemini AI, featuring AI-powered itinerary generation, user authentication, and responsive design..",
    link: "https://smart-trip.netlify.app",
    github: "/",
  },
  {
    image: "/img2.png",
    category: "React",
    name: "Nayaghar",
    description: "Real Estate Website — Responsive React + Tailwind real estate platform with property listings, search & filters, detailed views, and smooth navigation/animations.",
    link: "https://reall-estate.netlify.app",
    github: "/",
  },
  {
    image: "/img3.png",
    category: "Javascript",
    name: "CodeKala",
    description: "Company Website — Responsive website built with HTML, CSS, and JavaScript, featuring AOS-powered animations, Slick slider, and a modern interactive design.",
    link: "https://codekala.netlify.app",
    github: "/",
  },
  {
    image: "/img4.png",
    category: "React",
    name: "Triton College",
    description: "College Website — Modern React-based college website built with ShadCN UI components, AOS animations, and Slick slider, featuring responsive design, smooth navigation, interactive sections, and a clean UI to showcase academic programs and campus details.",
    link: "https://triton-college-website.vercel.app",
    github: "/",
  },
  {
    image: "/img5.png",
    category: "Javascript",
    name: "Third Eye Bakery",
    description: "Bakery Website — Responsive website for a bakery shop built with HTML, CSS, and JavaScript, featuring product showcases, smooth navigation, and a manually coded demo chatbot for basic customer interaction and FAQs.",
    link: "https://thirdeyes.netlify.app",
    github: "/",
  },
  {
    image: "/img6.png",
    category: "React",
    name: "Deus Vestis",
    description: "Clothing Landing Page — Stylish landing page for a clothing brand built with React and Tailwind CSS, featuring responsive design, modern layouts, smooth animations, and an engaging UI optimized for fashion e-commerce.",
    link: "https://deus-vestis.netlify.app",
    github: "/",
  },
  {
    image: "/img7.png",
    category: "Javascript",
    name: "Coffee Corner",
    description: "Coffee Shop Website — Responsive website built with HTML, CSS, and JavaScript, featuring product showcases, smooth navigation, and a modern interactive design to highlight menu items and services.",
    link: "https://coffeecorn.netlify.app",
    github: "/",
  },
  {
    image: "/img8.png",
    category: "Javascript",
    name: "portfolio",
    description: "Portfolio Website — Responsive website built with HTML, CSS, and JavaScript, featuring AOS-powered animations, Slick slider, and a modern interactive design.",
    link: "https://coffeecorn.netlify.app",
    github: "/",
  },
  {
    image: "/img9.png",
    category: "React",
    name: "Deepal",
    description: "Deepal Car Landing Page — Modern, high-performance landing page built with React.js, CSS, and Vite, featuring a clean layout, responsive design, smooth animations, and an engaging UI tailored for automotive branding. ",
    link: "/https://deepal-evolution.netlify.app",
    github: "/",
  },

  {
    image: "/img10.png",
    category: "Nextjs",
    name: "Interview Adda",
    description: "nterview Adda lets you take AI-powered mock tests and get a summary of where to improve. ",
    link: "/",
    github: "/",
  },
  {
    image: "/img11.png",
    category: "Nextjs",
    name: "naved suppliers",
    description: "nterview Adda lets you take AI-powered mock tests and get a summary of where to improve. ",
    link: "https://dry-fish-wholesale.vercel.app",
    github: "/",
  },

];



// remove duplicates & add "all"
const uniqueCategories = ["all", ...new Set(projectData.map((item) => item.category))];

const Projects = () => {
  return (
    <section className="min-h-screen pt-8 px-[1rem] xl:px-[7rem]">
      <div className="container">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Projects
        </h2>

        <Tabs defaultValue="all" className="mb-24 xl:mb-48">
          {/* tabs header */}
          <TabsList
            className="w-full 
              grid grid-cols-4 
              xl:gap-2
              text-sm sm:text-base
              h-full 
              lg:max-w-[640px] 
              mb-12 mx-auto 
              md:border dark:border-none"
          >
            {uniqueCategories.map((cat, index) => (
              <TabsTrigger value={cat} key={index} className="capitalize md:w-auto">
                {cat}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* tabs content */}
          {uniqueCategories.map((cat) => (
            <TabsContent
              value={cat}
              key={cat}
              className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4"
            >
              {projectData
                .filter((project) =>
                  cat === "all" ? true : project.category === cat
                )
                .map((project, index) => (
                  <ProjectCard key={index} project={project} />
                ))}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
