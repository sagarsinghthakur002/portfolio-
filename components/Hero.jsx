import Link from "next/link"
import { Button } from "./ui/button"
import { Download, Send } from "lucide-react"
import sagar from '../hero/sagar.png'
import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from "react-icons/ri";

//components
import DevImg from "./DevImg";
import Badge from "./Badge";
import Socials from "./Socials";


const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-[90vh] xl:pt-20 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none px-4 xl:px-0">
      <div className=" h-full xl:mx-[7rem]  mx-1">
        <div className="flex justify-between gap-x-8 ">

          {/* text */}
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left gap-y-4" >
            <div className="text-sm uppercase font-semibold  text-primary tracking-[4px] xl:-mt-[70px] ">web Developer</div>
            <h1 className="h1 mb-4 ">Hello, my name is Sagar Thkaur</h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0"> I am a Full-Stack web developer currently working on NextJS and PostgreSQL.As a highly adaptable and skilled web developer,I am passionate about creating functional and aesthetically pleasing websites that provide a great user experience.</p>

            {/* Buttons */}
            <div className="flex flex-col gap-y-4 md:flex-row gap-x-3 mx-auto xl:mx-0  -mt-[4px]">
              <Link href='/contact'>
                <Button className='gap-x-2'>Contact me <Send size={18} /></Button>
              </Link>
              <Link href='/contact'>
                <Button variant='secondary' className='gap-x-2 border-2 border-gray-400 dark:border-gray-600'>
                  Download CV
                  <Download size={18} /></Button>
              </Link>
            </div>
            

            {/* Socials */}
            <Socials
              containerStyles="flex gap-x-6 mx-auto xl:mx-0 mt-5"
              iconsStyles="text-foreground text-[25px] hover:text-primary transition-all cursor-pointer"
            />
          </div>



          {/* image */}
          <div className="hidden xl:flex relative -mt-4">


            {/* badges */}
            {/* <div className="flex  gap-y-1 absolute dark:shadow-2xl-white top-0 left-0 flex-col z-10"> */}
            <Badge
            containerStyles="absolute top-[24%] -left-[5rem] z-10"
             icon={<RiBriefcase4Fill/> }
            endCountNum={1}
            badgeText="Year of Experience"  />
            {/* </div> */}

            {/* badge2 */}
             <Badge
            containerStyles="absolute top-[70%] -left-[3rem] z-10"
             icon={<RiTodoFill/> }
            endCountNum={10}
            endCountText={"+"}
            badgeText="Finished Project"  />



            <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark text-[5rem] w-[600px] h-[515px] bg-no-repeat absolute -top-1 -right-2"></div>
            <DevImg
              containerStyles="bg-hero_shape w-[537px] h-[485px] bg-no-repeat relative bg-bottom"
              imgSrc={sagar}   // ✅ correct
            />
          </div>
        </div>


        {/* icon */}
        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" /> {/* ✅ fixed */}
        </div>
      </div>
    </section>
  )
}

export default Hero
