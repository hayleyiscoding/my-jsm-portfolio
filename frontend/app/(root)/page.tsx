import ContactBlock from "@/components/ContactBlock";
import Skills from "@/components/Skills";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Work from "@/components/Work";
import About from "@/components/About";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Work />
      <Projects />
      <Testimonials />
      <ContactBlock />
    </>
  );
}
