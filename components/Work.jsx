"use client";

import Link from "next/link";
import { Button } from "./ui/button";

// import swiper react component
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

import ProjectCard from "../components/ProjectCard";



const projectData = [
  {
    image: "/img1.png",
    category: "react js",
    name: "Smart-Trip-AI",
    description: "Smart Trip AI is a full-stack travel planning application built using Next.js, Firebase, Tailwind CSS, and Gemini AI.",
    link: "https://smart-trip.netlify.app",
    github: "/",
  },
  {
    image: "/img2.png",
    category: "react js",
    name: "Nayaghar",
    description: "Example description for project 2",
    link: "https://reall-estate.netlify.app",
    github: "/",
  },
  {
    image: "/img3.png",
    category: "React ",
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
];

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-28 xl:px-[7rem] px-[1rem] ">
      <div className="container mx-auto">
        {/* text */}
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">Latest project</h2>
          <p className="subtitle mb-8">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus vero
            laboriosam facere accusamus voluptatibus distinctio odio deleniti
            tempora quo cum!
          </p>

          <Link href="/projects">
            <Button>All projects</Button>
          </Link>
        </div>

        {/* slider */}
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
          <Swiper
            className="h-[480px]"
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 2 },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {projectData.slice(0, 4).map((project, index) => (
              <SwiperSlide key={index}>
                <ProjectCard project={project} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
