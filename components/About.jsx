import DevImg from "./DevImg";
import Image from "next/image";
import sagar from '../hero/sagar.png'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";

import { User2, MailIcon, HomeIcon, PhoneCall, GraduationCap, Calendar, Briefcase } from "lucide-react";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Sagar Thakur",
  },
  {
    icon: <MailIcon size={20} />,
    text: "sagarsinghthakur002@gmail.com",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Kathmandu, Nepal",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+977 9823407226",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Bachelor in Computer Application (BCA)",
  },
  {
    icon: <Calendar size={20} />,
    text: "Experience",
  },
  {
    icon: <Briefcase size={20} />,
    text: "Skills",
  },
];


const qualificationData = [
  {
    title: "Education",
    data: [
      {
        university: "Kathmandu BernHardt College",
        qualification: "+2 Management",
        year: "2019-2021",
      },
      {
        university: "Triton International College",
        qualification: "Bachelor in Computer Application (BCA)",
        year: "2021 - 2026",
      },
    ]
  },
  {
    title: "Experience",
    data: [
      {
        company: "Codekala",
        role: "Frontend Developer",
        year: "2025",
      },
    ]
  },
];

const skillData = [
  {
    title: "Skills",
    data: [
      { name: "HTML, CSS" },
      { name: "Frontend Development" },
      { name: "JavaScript, React" },
      { name: "Backend Development" },
    ],
  },
  {
    title: "Tools",
    data: [
      { imgPath: "/about/vscode.svg" },
      { imgPath: "/about/wordpress.svg" },
      { imgPath: "/about/figma.svg" },
    ],
  },
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find(item => item.title.toLowerCase() === title.toLowerCase());
  };

  return (
    <section>
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">About Me</h2>

        <div className="flex flex-col xl:flex-row  ">
          <div className="hidden xl:flex flex-1 relative">
            <DevImg 
            containerStyles="bg-about_shape_light dark:bg-about_shap_dark w-[505px] h-[505px] bg-no-repeat relative"
            imgSrc={sagar} />
          </div>


          {/* table */}
          <div className="flex-1">
            <Tabs defaultValue="personal" className="w-full">
              <TabsList>
                <TabsTrigger value="personal">Personal Info</TabsTrigger>
                <TabsTrigger value="qualification">Qualification</TabsTrigger>
                <TabsTrigger value="skills">Skills</TabsTrigger>
              </TabsList>

              <div className="text-lg mt-12 xl:mt-8">
                <TabsContent value="personal">personal info</TabsContent>
                <TabsContent value="qualification">qualification info</TabsContent>
                <TabsContent value="skills">skills info</TabsContent>
              </div>
            </Tabs>
          </div>


        </div>
      </div>
    </section>
  );
};

export default About;
