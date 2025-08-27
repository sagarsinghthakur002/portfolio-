import { GanttChartSquare, Blocks, Gem } from "lucide-react"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const ServicesData = [
    {
        icon: <GanttChartSquare size={36} strokeWidth={1.5} />,
        title: "Web Development",
        description:
            "I build robust and scalable web applications tailored to your business needs, ensuring high performance and seamless user experiences.",
    },
    {
        icon: <Gem size={36} strokeWidth={1.5} />,
        title: "App Development",
        description:
            "I develop intuitive and feature-rich mobile applications for both Android and iOS platforms, enhancing your mobile presence.",
    },
    {
        icon: <Blocks size={36} strokeWidth={1.5} />,
        title: "Web Designing",
        description:
            "I create visually appealing and user-friendly web designs that captivate your audience and drive engagement, making your brand stand out.",
    },
]

const Services = () => {
    return (
        <section className="mb-16 xl:mb-36 xl:px-[7rem] mt-20">
            <div className="container mx-auto px-4">
                <h2 className="section-title mx-auto mb-16 text-center font-bold xl:mb-24">
                    My Services
                </h2>

                {/* grid items */}
                <div className="grid gap-y-16 justify-center xl:grid-cols-3 xl:gap-x-10 xl:gap-y-24">
                    {ServicesData.map((item, index) => (
                        <Card
                            key={index}
                            className="relative flex w-full max-w-[400px] flex-col items-center justify-center rounded-2xl border border-gray-300 bg-white p-8 shadow-md transition-all hover:-translate-y-2 hover:shadow-xl dark:border-neutral-600 dark:bg-neutral-900"
                        >
                            {/* Rounded Icon */}
                            <CardHeader className="absolute -top-[40px] items-center justify-center">
                                <div className="flex h-[80px] w-[80px] items-center justify-center rounded-full bg-gray-100 shadow-md dark:bg-neutral-800 transition-transform hover:scale-105">
                                    {item.icon}
                                </div>
                            </CardHeader>

                            <CardContent className="pt-12 text-center">
                                <CardTitle className="mb-3 text-xl font-semibold">
                                    {item.title}
                                </CardTitle>
                                <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                                    {item.description}
                                </CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services
