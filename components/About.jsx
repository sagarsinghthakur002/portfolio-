import DevImg from "./DevImg";
import sagar from '../hero/sagar.png'
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs" // ✅ use your wrapper
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

        <div className="flex  flex-row px-[7rem]  ">
          {/* left image */}
          {/* <div className="hidden xl:flex  relative">
            <DevImg 
              containerStyles="bg-about_shape_light dark:bg-about_shap_dark w-[505px] h-[505px] bg-no-repeat relative"
              imgSrc={sagar} 
            />
          </div> */}

          {/* right tabs */}
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520] xl:border dark:border:none">
                <TabsTrigger className='w-[162] xl:w-auto ' value="personal">Personal Info</TabsTrigger>
                <TabsTrigger className='w-[162] xl:w-auto ' value="qualification">Qualification</TabsTrigger>
                <TabsTrigger className='w-[162] xl:w-auto ' value="skills">Skills&Tools</TabsTrigger>
              </TabsList>

              <div className="text-lg mt-12 xl:mt-8">
                {/* personal */}
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, ducimus.</h3>
                    <p className="subtitle max-w-xl max-auto xl:mx:0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ducimus magni tenetur iste quod quis fugiat voluptas unde blanditiis reiciendis.</p>
                  </div>
                </TabsContent>
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
