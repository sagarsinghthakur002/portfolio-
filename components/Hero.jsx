"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";
import sagar from "../hero/sagar.png";
import {
  RiBriefcase4Fill,
  RiTodoFill,
  RiArrowDownSLine,
} from "react-icons/ri";
import { ReactTyped } from "react-typed"; // ✅ typed import
//components
import DevImg from "./DevImg";
import Badge from "./Badge";
import Socials from "./Socials";

export default function Hero() {
  return (
    <section className="py-12 xl:py-24 h-[90vh] xl:pt-20 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none px-4 xl:px-0">
      <div className="h-full xl:px-[7rem] px-[1rem] mx-1">
        <div className="flex justify-between gap-x-8 ">
          {/* text */}
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left gap-y-4">
            <div className="text-sm uppercase font-semibold text-primary tracking-[4px] xl:-mt-[70px]">
              web Developer
            </div>


            <h1 className="h1 xl:mb-3 mb-1 min-h-[85px] xl:min-h-[160px]">
              <ReactTyped
                strings={[
                  "Hello, my name is Sagar Thakur",
                  "I am a Front-End Developer",
                ]}
                typeSpeed={60}
                backSpeed={35}
                backDelay={2000}
                loop
              />
            </h1>


            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
              I’m a Front-End Developer specializing in Next.js, React, and
              Tailwind CSS. Passionate about creating responsive, visually
              appealing, and user-friendly websites, I focus on blending design
              with functionality to deliver seamless digital experiences.
            </p>


            <div className="flex flex-col gap-y-4 md:flex-row gap-x-5 mx-auto xl:mx-0 -mt-[4px]">
              <Link href="/contact">
                <Button className="gap-x-2">
                  Contact me <Send size={18} />
                </Button>
              </Link>
              <Link href="/sagarthakur.pdf" download>
                <Button
                  variant="secondary"
                  className="gap-x-2 border-2 border-gray-400 dark:border-gray-600"
                >
                  Download CV
                  <Download size={18} />
                </Button>
              </Link>
            </div>

            {/* ✅ socials stay static */}
            <Socials
              containerStyles="flex gap-x-6 mx-auto xl:mx-0 mt-5 "
              iconsStyles="text-foreground text-[25px] hover:text-primary transition-all cursor-pointer"
            />
          </div>

          {/* image */}
          <div className="hidden xl:flex relative -mt-4">
            <Badge
              containerStyles="absolute top-[24%] -left-[5rem] z-10"
              icon={<RiBriefcase4Fill />}
              endCountNum={1}
              badgeText="Year of Experience"
            />

            <Badge
              containerStyles="absolute top-[70%] -left-[3rem] z-10"
              icon={<RiTodoFill />}
              endCountNum={10}
              endCountText={"+"}
              badgeText="Finished Project"
            />

            <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark text-[5rem] w-[600px] h-[515px] bg-no-repeat absolute -top-1 -right-2"></div>
            <DevImg
              containerStyles="bg-hero_shape w-[537px] h-[485px] bg-no-repeat relative bg-bottom"
              imgSrc={sagar}
            />
          </div>
        </div>

        {/* icon */}
        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
}
