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
    description: "Smart Trip AI is a full-stack travel planning application built using Next.js, Firebase, Tailwind CSS, and Gemini AI.",
    link: "https://smart-trip.netlify.app",
    github: "/",
  },
  {
    image: "/img2.png",
    category: "React",
    name: "Nayaghar",
    description: "Example description for project 2",
    link: "https://reall-estate.netlify.app",
    github: "/",
  },
  {
    image: "/img3.png",
    category: "Javascript",
    name: "CodeKala",
    description: "Example description for project 3",
    link: "https://codekala.netlify.app",
    github: "/",
  },
  {
    image: "/img4.png",
    category: "React",
    name: "Triton College",
    description: "Example description for project 4",
    link: "https://triton-college-website.vercel.app",
    github: "/",
  },
  {
    image: "/img5.png",
    category: "Javascript",
    name: "Third Eye Bakery",
    description: "Example description for project 4",
    link: "https://thirdeyes.netlify.app",
    github: "/",
  },
  {
    image: "/img6.png",
    category: "Javascript",
    name: "Deus Vestis",
    description: "Example description for project 4",
    link: "https://deus-vestis.netlify.app",
    github: "/",
  },
  {
    image: "/img7.png",
    category: "Javascript",
    name: "Coffee Corner",
    description: "Example description for project 4",
    link: "https://coffeecorn.netlify.app",
    github: "/",
  },
  {
    image: "/img8.png",
    category: "Javascript",
    name: "portfolio",
    description: "Example description for project 4",
    link: "https://coffeecorn.netlify.app",
    github: "/",
  },

  {
    image: "/",
    category: "Nextjs",
    name: "Interview Adda",
    description: "nterview Adda lets you take AI-powered mock tests and get a summary of where to improve. ",
    link: "/",
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
