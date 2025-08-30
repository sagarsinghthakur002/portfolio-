import DevImg from "./DevImg"; 
import sagar from '../hero/sagar.png' 
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs" 
import { User2, MailIcon, HomeIcon, PhoneCall, GraduationCap, Calendar, Briefcase } from "lucide-react"; 
import { get } from "react-hook-form"; 
import html from '../skill/html.png' 
import css from '../skill/css.png' 
import js from '../skill/js.png' 
import react from '../skill/react.png' 
import tailwind from '../skill/tailwind.png' 
import nextjs from '../skill/nextjs.png' 

const infoData = [ 
  { icon: <User2 size={20} />, text: "Sagar Thakur" }, 
  { icon: <PhoneCall size={20} />, text: "+977 9823407226" }, 
  { icon: <HomeIcon size={20} />, text: "Kathmandu, Nepal" }, 
  { icon: <MailIcon size={20} />, text: "sagarsinghthakur002@gmail.com" }, 
  { icon: <GraduationCap size={20} />, text: "Bachelor in Computer Application" }
]; 

const qualificationData = [ 
  { 
    title: "Education", 
    data: [ 
      { university: "Kathmandu BernHardt College", qualification: "+2 Management", year: "2019-2021" }, 
      { university: "Triton International College", qualification: "Bachelor in Computer Application", year: "2021 - 2026" }
    ] 
  }, 
  { 
    title: "Experience", 
    data: [ 
      { company: "Codekala", role: "Frontend Developer", year: "2025" }
    ] 
  }
]; 

const skillData = [ 
  { 
    title: "Skills", 
    data: [ 
      { name: "HTML", imgPath: html },
      { name: "CSS", imgPath: css },
      { name: "Javascript", imgPath: js },
      { name: "ReactJS", imgPath: react },
      { name: "TailwindCSS", imgPath: tailwind },
      { name: "Nextjs", imgPath: nextjs }
    ] 
  }, 
  { 
    title: "Tools", 
    data: [ 
      { name: "VSCode", imgPath: "/components/skill/vscode.webp" }, 
      { name: "Figma", imgPath: "/components/skill/figma.webp" }
    ] 
  }
]; 

const About = () => { 
  const getData = (arr, title) => { 
    return arr.find(item => item.title.toLowerCase() === title.toLowerCase()); 
  }; 
  
  return ( 
    <section className="py-12 xl:py-24 min-h-[auto] xl:min-h-[860px]">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 xl:mb-20 text-center mx-auto">About Me</h2> 
        <div className="flex flex-col xl:flex-row gap-x-12 gap-y-10 xl:px-[6rem] px-[1rem]">
          <div className="flex-1"> 
            <Tabs defaultValue="personal" className="w-full"> 
              <TabsList className="grid grid-cols-3 md:w-full xl:border dark:xl:border-none mx-auto xl:mx-0 h-fit"> 
                <TabsTrigger className="w-auto" value="personal">Personal Info</TabsTrigger> 
                <TabsTrigger className="w-auto" value="qualification">Qualification</TabsTrigger> 
                <TabsTrigger className="w-auto" value="skills">Skills&Tools</TabsTrigger> 
              </TabsList> 
              
              <div className="text-lg mt-12 xl:mt-10"> 
                <TabsContent value="personal"> 
                  <div className="text-center xl:text-left space-y-8"> 
                    <h3 className="h3">Building scalable and user-friendly web apps for 1 years.</h3> 
                    <p className="subtitle max-w-xl mx-auto xl:mx-0">Blending creativity with clean code, I design and build web applications that are not only scalable but also intuitive and visually engaging.</p> 
                    <div className="grid xl:grid-cols-2 gap-x-6 gap-y-4 mb-12"> 
                      {infoData.map((item, index) => { 
                        return ( 
                          <div key={index} className="flex items-center gap-x-4 mx-auto xl:mx-0 justify-center xl:justify-start"> 
                            <div className="text-primary">{item.icon}</div> 
                            <div className="font-medium">{item.text}</div> 
                          </div> 
                        ); 
                      })} 
                    </div> 
                  </div> 
                </TabsContent> 
                
                <TabsContent value="qualification"> 
                  <div>
                    <h3 className="h3 mb-8 text-center xl:text-left">My Awesome Journey</h3> 
                    <div className="grid md:grid-cols-2 gap-y-10 gap-x-8"> 
                      <div className="flex flex-col gap-y-6"> 
                        <div className="flex gap-x-4 items-center text-[22px] text-primary"> 
                          <Briefcase /> 
                          <h4 className="capitalize font-semibold text-xl">{getData(qualificationData, "Experience").title}</h4> 
                        </div> 
                        <div className="flex flex-col gap-y-8"> 
                          {getData(qualificationData, "Experience").data.map((item, index) => { 
                            const { company, role, year } = item; 
                            return ( 
                              <div key={index} className="flex gap-x-6 group"> 
                                <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                  <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] top-0"></div>
                                </div>
                                <div className="flex-1"> 
                                  <div className="font-semibold text-xl leading-snug mb-1">{company}</div> 
                                  <div className="text-lg leading-snug text-muted-foreground mb-2">{role}</div> 
                                  <div className="text-base font-medium text-muted-foreground/80">{year}</div> 
                                </div> 
                              </div> 
                            ); 
                          })} 
                        </div> 
                      </div> 
                  
                      <div className="flex flex-col gap-y-6"> 
                        <div className="flex gap-x-4 items-center text-[22px] text-primary"> 
                          <GraduationCap /> 
                          <h4 className="capitalize font-semibold text-xl">{getData(qualificationData, "Education").title}</h4> 
                        </div> 
                        <div className="flex flex-col gap-y-8"> 
                          {getData(qualificationData, "Education").data.map((item, index) => { 
                            const { university, qualification, year } = item; 
                            return ( 
                              <div key={index} className="flex gap-x-6 group"> 
                                <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                  <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] top-0"></div>
                                </div>
                                <div className="flex-1"> 
                                  <div className="font-semibold text-xl leading-snug mb-1">{university}</div> 
                                  <div className="text-lg leading-snug text-muted-foreground mb-2">{qualification}</div> 
                                  <div className="text-base font-medium text-muted-foreground/80">{year}</div> 
                                </div> 
                              </div> 
                            ); 
                          })} 
                        </div> 
                      </div> 
                    </div>
                  </div>
                </TabsContent> 
                
                <TabsContent value="skills"> 
                  <div className="text-center xl:text-left space-y-12"> 
                    <h3 className="h3">What I Use</h3> 
                    <div>
                      <h4 className="text-xl font-semibold mb-4">Skills</h4>
                      <div className="border-b border-border mb-6"></div>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-6 gap-y-4 justify-center xl:justify-start">
                        {getData(skillData, "Skills").data.map((item, index) => ( 
                          <div key={index} className="group flex items-center gap-x-3 p-3 rounded-md hover:bg-secondary/50 transition-colors duration-300 cursor-pointer justify-center xl:justify-start"> 
                            <img src={item.imgPath} alt={item.name} className="w-[40px] h-[40px] object-contain transition-transform duration-300 group-hover:scale-110" />
                            <span className="font-medium">{item.name}</span> 
                          </div> 
                        ))} 
                      </div> 
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-4">Tools</h4>
                      <div className="border-b border-border mb-6"></div>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-6 gap-y-4 justify-center xl:justify-start">
                        {getData(skillData, "Tools").data.map((item, index) => ( 
                          <div key={index} className="group flex items-center gap-x-3 p-3 rounded-md hover:bg-secondary/50 transition-colors duration-300 cursor-pointer justify-center xl:justify-start"> 
                            <img src={item.imgPath} alt={item.name} className="w-[40px] h-[40px] object-contain transition-transform duration-300 group-hover:scale-110" />
                            <span className="font-medium">{item.name}</span> 
                          </div> 
                        ))} 
                      </div> 
                    </div>
                  </div> 
                </TabsContent> 
              </div> 
            </Tabs> 
          </div> 
        </div> 
      </div> 
    </section> 
  ); 
}; 

export default About;