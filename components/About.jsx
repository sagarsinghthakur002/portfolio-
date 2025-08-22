import DevImg from "./DevImg"; 
import sagar from '../hero/sagar.png' 
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs" // ✅ use your wrapper 
import { User2, MailIcon, HomeIcon, PhoneCall, GraduationCap, Calendar, Briefcase } from "lucide-react"; 
import { get } from "react-hook-form"; 
import html from '../skill/html.png' 
import css from '../skill/css.png' 
import js from '../skill/js.png' 
import react from '../skill/react.png' 
import tailwind from '../skill/tailwind.png' 
import nextjs from '../skill/nextjs.png' 

const infoData = [ 
  { icon: <User2 size={20} />, text: "Sagar Thakur", }, 
  { icon: <PhoneCall size={20} />, text: "+977 9823407226", }, 
  { icon: <HomeIcon size={20} />, text: "Kathmandu, Nepal", }, 
  { icon: <MailIcon size={20} />, text: "sagarsinghthakur002@gmail.com", }, 
  { icon: <GraduationCap size={20} />, text: "Bachelor in Computer Application", }, 
  // { 
  // icon: <Calendar size={20} />, 
  // text: "Experience", 
  // }, 
  // { 
  // icon: <Briefcase size={20} />, 
  // text: "Skills", 
  // }, 
]; 

const qualificationData = [ 
  { 
    title: "Education", 
    data: [ 
      { university: "Kathmandu BernHardt College", qualification: "+2 Management", year: "2019-2021", }, 
      { university: "Triton International College", qualification: "Bachelor in Computer Application", year: "2021 - 2026", }, 
    ] 
  }, 
  { 
    title: "Experience", 
    data: [ 
      { company: "Codekala", role: "Frontend Developer", year: "2025", }, 
    ] 
  }, 
]; 

// const skillData = [ 
// { 
// title: "Skills", 
// data: [ 
// { imgPath: "../component/skill/css-2.web" }, 
// { imgPath: "/about/wordpress.svg" }, 
// { imgPath: "/about/figma.svg" }, 
// ], 
// }, 
// { 
// title: "Tools", 
// data: [ 
// { imgPath: "/about/vscode.svg" }, 
// { imgPath: "/about/wordpress.svg" }, 
// { imgPath: "/about/figma.svg" }, 
// ], 
// }, 
// ]; 

const skillData = [ 
  { 
    title: "Skills", 
    data: [ 
      { name: "HTML", imgPath: html }, 
      { name: "CSS", imgPath: css }, 
      { name: "Javascript", imgPath: js }, 
      { name: "ReactJS", imgPath: react }, 
      { name: "TailwindCSS", imgPath: tailwind }, 
      { name: "Nextjs", imgPath: nextjs }, 
    ], 
  }, 
  { 
    title: "Tools", 
    data: [ 
      { name: "VSCode", imgPath: "/components/skill/vscode.webp" }, 
      { name: "Postman", imgPath: "/components/skill/postman.webp" }, 
      { name: "Figma", imgPath: "/components/skill/figma.webp" }, 
    ], 
  }, 
]; 

const About = () => { 
  const getData = (arr, title) => { 
    return arr.find(item => item.title.toLowerCase() === title.toLowerCase()); 
  }; 
  return ( 
    <section className=" h-[85vh] "> 
      <div className="container "> 
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">About Me</h2> 
        <div className="flex flex-row xl:px-[7rem] px-4 "> 
          {/* left image */} 
          {/* <div className="hidden xl:flex relative"> 
            <DevImg containerStyles="bg-about_shape_light dark:bg-about_shap_dark w-[505px] h-[505px] bg-no-repeat relative" imgSrc={sagar} /> 
          </div> */} 
          {/* right tabs */} 
          <div className="flex-1"> 
            <Tabs defaultValue="personal"> 
              <TabsList className="w-full grid grid-cols-3 xl:max-w-[520] xl:border dark:border:none"> 
                <TabsTrigger className='w-auto xl:w-[250] ' value="personal">Personal Info</TabsTrigger> 
                <TabsTrigger className='w-auto xl:w-[250] ' value="qualification">Qualification</TabsTrigger> 
                <TabsTrigger className='w-auto xl:w-[250] ' value="skills">Skills&Tools</TabsTrigger> 
              </TabsList>
              <div className="text-lg mt-12 xl:mt-8"> 
                {/* personal */} 
                <TabsContent value="personal"> 
                  <div className="text-center xl:text-left"> 
                    <h3 className="h3 mb-4">Building scalable and user-friendly web apps for 1 years.</h3> 
                    <p className="subtitle max-w-xl max-auto xl:mx:0">Blending creativity with clean code, I design and build web applications that are not only scalable but also intuitive and visually engaging.</p> 
                    {/* icons */} 
                    <div className="grid xl:grid-cols-2 gap-4 mb-12"> 
                      {infoData.map((item, index) => { 
                        return ( 
                          <div key={index} className="flex items-center gap-4 mb-4"> 
                            <div className="text-primary">{item.icon}</div> 
                            <div className="text-gray-600 dark:text-gray-300">{item.text}</div> 
                          </div> 
                        ); 
                      } )} 
                    </div> 
                  </div> 
                </TabsContent> 
                <TabsContent value="qualification" className={"grid grid-cols-2 gap-8"}> 
                  <div> 
                    <div className="h3 xl:mb-[2rem] text-center xl:text-left mb-14"> 
                      <h3 className="h3 " >My Awesome Journey</h3> 
                    </div> 
                    {/* Experience & Education */} 
                    {/* Experience */} 
                    <div className="flex gap-x-4 items-center text-[22px] text-primary mb-4"> 
                      <Briefcase /> 
                      <h4 className="capitalize font-medium"> {getData(qualificationData, "Experience").title} </h4> 
                    </div> 
                    <div> 
                      {getData(qualificationData, "Experience").data.map((item, index) => { 
                        const { company, role, year } = item; 
                        return ( 
                          <div key={index} className="flex flex-col gap-2 mb-4"> 
                            <h5 className="text-xl leading-none font-semibold">{company}</h5> 
                            <p className="text-lg leading-nonen text-muted-foreground ">{role}</p> 
                            <span className="text-sm text-gray-500">{year}</span> 
                          </div> 
                        ); 
                      })} 
                    </div> 
                  </div> 
                  {/* Education */} 
                  <div className="mt-6"> 
                    <div className="flex gap-x-4 items-center text-[22px] text-primary mb-4"> 
                      <GraduationCap /> 
                      <h4 className="capitalize font-medium"> {getData(qualificationData, "Education").title} </h4> 
                    </div> 
                    <div> 
                      {getData(qualificationData, "Education").data.map((item, index) => { 
                        const { university, qualification, year } = item; 
                        return ( 
                          <div key={index} className="flex flex-col gap-2 mb-4"> 
                            <h5 className="text-lg font-semibold">{university}</h5> 
                            <p className="text-lg leading-nonen text-muted-foreground">{qualification}</p> 
                            <span className="text-sm text-gray-500 mb-4">{year}</span> 
                          </div> 
                        ); 
                      })} 
                    </div> 
                  </div> 
                </TabsContent> 
                <TabsContent value="skills"> 
                  <div className="text-center xl:text-left"> 
                    <h3 className="h3 mb-8">What I Use</h3> 
                    {skillData.map((section, idx) => ( 
                      <div key={idx} className="mb-8"> 
                        <h4 className="text-xl font-semibold mb-4">{section.title}</h4> 
                        <div className="border-b border-border mb-6"></div> 
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"> 
                          {section.data.map((item, index) => ( 
                            <div key={index} className="flex flex-col items-center gap-2"> 
                              <img src={item.imgPath} alt={item.name} className="w-12 h-12 object-contain" /> 
                              <span className="text-sm text-gray-300">{item.name}</span> 
                            </div> 
                          ))} 
                        </div> 
                      </div> 
                    ))} 
                  </div> 
                </TabsContent> 
              </div> 
            </Tabs> 
          </div> 
        </div> 
      </div > 
    </section > 
  ); 
}; 

export default About;
