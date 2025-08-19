import { GanttChartSquare, BLocks, Gem, Section } from "lucide-react"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,

} from "@/components/ui/card"

const ServicesData = [{
    icon: <GanttChartSquare size={24} strokeWidth={0.8} />,
    title: "Web Development",
    description: "Building responsive and functional websites using modern technologies.",
},
{
    icon: <Blocks size={24} strokeWidth={0.8} />,
    title: "Web Development",
    description: "Building responsive and functional websites using modern technologies.",
},
{
    icon: <Gem  size={24} strokeWidth={0.8} />,
    title: "Web Development",
    description: "Building responsive and functional websites using modern technologies.",
},]
const Services = () => {
    return (
        <Section className="mb-12 xl:mb-36">
            <div className="container mx-auto">
               <h2>My Swrvices</h2>
               <div>
                
               </div>
            </div>
            
        </Section>
    )
}

export default Services
