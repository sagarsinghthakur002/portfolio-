"use client";

import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader } from "./ui/card";
import { Link2Icon, Github } from "lucide-react";
import { Badge } from "./ui/badge";

const ProjectCard = ({ project }) => {
  return (
    <Card className="relative overflow-hidden group"> {/* ✅ Added group here */}
      <CardHeader className="relative">
        {/* Project Image */}
        <div className="relative w-full ">
          <Image
            src={project.image}
            alt={project.name}
            width={500}
            height={500}
            // fill
            className="object-cover shadow-2xl"
            priority
          />

          {/* Hover Icons */}
          <div className="absolute inset-0 flex items-center justify-center gap-4">
            {/* Link Icon */}
            <Link
              href={project.link}
              target="_blank"
              className="bg-white/80 dark:bg-black/80 backdrop-blur-sm 
              w-16 h-16 rounded-full flex items-center justify-center 
              opacity-0 group-hover:opacity-100 
              scale-75 group-hover:scale-100 
              transition-all duration-300 ease-in-out 
              hover:bg-white/90 dark:hover:bg-black/90 
              shadow-md hover:shadow-xl"
            >
              <Link2Icon className="text-slate-800 dark:text-slate-200 w-8 h-8" />
            </Link>

            {/* GitHub Icon */}
            <Link
              href={project.github}
              target="_blank"
              className="bg-secondary w-14 h-14 rounded-full flex justify-center items-center 
              opacity-0 group-hover:opacity-100 
              scale-75 group-hover:scale-100 
              transition-all duration-300 ease-in-out shadow-md hover:shadow-xl"
            >
              <Github className="w-6 h-6 text-slate-800 dark:text-slate-200 hover:text-primary" />
            </Link>
          </div>
        </div>
      </CardHeader>

      {/* Card Content */}
      <div className="h-full px-8 py-1">
        {/* Category */}
        <Badge className="uppercase text-sm font-medium mb-2 absolute top-4 left-5">
          {project.category}
        </Badge>

        {/* Project name */}
        <h4 className="h4 mb-1">{project.name}</h4>

        {/* Project description */}
        <p className="text-muted-foreground text-[15px]">
          {project.description}
        </p>
      </div>
    </Card>
  );
};

export default ProjectCard;
