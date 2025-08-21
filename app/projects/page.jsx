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
    image: "/work/4.png",
    category: "react js",
    name: "naxa website",
    description: "Example description for project 1",
    link: "/",
    github: "/",
  },
  {
    image: "/work/3.png",
    category: "Nextjs",
    name: "naxa website",
    description: "Example description for project 2",
    link: "/",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "react js",
    name: "naxa website",
    description: "Example description for project 3",
    link: "/",
    github: "/",
  },
  {
    image: "/work/1.png",
    category: "Javascript",
    name: "naxa website",
    description: "Example description for project 4",
    link: "/",
    github: "/",
  },
];

// remove duplicates & add "all"
const uniqueCategories = ["all", ...new Set(projectData.map((item) => item.category))];

const Projects = () => {
  return (
    <section className="min-h-screen pt-12 px-[1rem] xl:px-[7rem]">
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
