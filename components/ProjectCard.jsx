"use client";

import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader } from "./ui/card";
import { Github, Link2Icon } from "lucide-react";
import { Badge } from "./ui/badge";

const ProjectCard = ({ project }) => {
  return (
    <Card className="relative overflow-hidden">
      <CardHeader className="relative">
        {/* Project Image */}
        <div className="relative w-full h-56">
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover shadow-2xl"
            priority
          />

           {/* Links */}
        <div className="flex gap-x-4 mt-4">
          <Link href={project.link} className="bg-secondary w-[54px] h-[54pz] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover::scale-100 group-hover:opacity-100 transition-all duration-200">
            <Link2Icon className="w-5 h-5 hover:text-primary" />
          </Link>

          <Link href={project.github} className="bg-secondary w-[54px] h-[54pz] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover::scale-100 group-hover:opacity-100 transition-all duration-200" >
            <Github className="w-5 h-5 hover:text-primary" />
          </Link>
        </div>

        </div>
      </CardHeader>

      <div className="h-full px-8 py-6">
        {/* Category */}
        <Badge className="uppercase text-sm font-medium mb-2 absolute top-4 left-5">
          {project.category}
        </Badge>

        {/* Project name */}
        <h4 className="h4 mb-1">{project.name}</h4>

        {/* Project description */}
        <p className="text-muted-foreground text-lg">
          {project.description}
        </p>

        {/* Links */}
        {/* <div className="flex gap-4 mt-4">
          <Link href={project.link}>
            <Link2Icon className="w-5 h-5 hover:text-primary" />
          </Link>
          <Link href={project.github}>
            <Github className="w-5 h-5 hover:text-primary" />
          </Link>
        </div> */}
      </div>
    </Card>
  );
};

export default ProjectCard;
