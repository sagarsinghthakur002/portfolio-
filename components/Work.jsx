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
    description: "Travel Planner — full-stack travel planning application built using Next.js, Firebase, Tailwind CSS, and Gemini AI.",
    link: "https://smart-trip.netlify.app",
    github: "/",
  },
  {
    image: "/img2.png",
    category: "react js",
    name: "Nayaghar",
    description: "Real Estate — Responsive React + Tailwind platform with property listings, search & filters, detailed property views, and smooth animated navigation.",
    link: "https://reall-estate.netlify.app",
    github: "/",
  },
  // {
  //   image: "/img3.png",
  //   category: "React ",
  //   name: "CodeKala",
  //   description: "CodeKala Website — Responsive company website for IT services (Web Apps, Graphic Design, Marketing, etc.) built with HTML, CSS, and JavaScript, featuring AOS-powered animations, Slick slider, and a modern interactive design.",
  //   link: "https://codekala.netlify.app",
  //   github: "/",
  // },
  {
    image: "/img4.png",
    category: "React",
    name: "Triton College",
    description: "College Website — Modern React site with ShadCN UI, AOS animations, Slick slider, responsive design, and nteractive campus showcase..",
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
            Explore some of my recent projects, where I combine modern design with efficient development practices. Each project reflects my focus on building responsive, user-friendly, and innovative digital solutions.
          </p>

          <Link href="/projects">
            <Button>All projects</Button>
          </Link>
        </div>

        {/* slider */}
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
          <Swiper
            className="h-[500px]"
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
