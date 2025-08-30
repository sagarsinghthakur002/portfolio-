import Services from "../components/Services";
import About from "../components/About";
import Hero from "../components/Hero";
import Work from "../components/Work";
import Cta from "../components/Cta";

// ✅ Add Metadata API
export const metadata = {
  title: "Sagar Thakur - Portfolio",
  description:
    "Portfolio of Sagar Thakur, Front_End  Developer. Explore projects, services, and contact details.",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Work />
      <Cta />
    </main>
  );
}
