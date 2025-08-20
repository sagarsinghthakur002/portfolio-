import Services from "../components/Services";
import About from "../components/About";
import Hero from "../components/Hero";
import Work from "../components/Work"

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Work />
    </main>
  );
}
