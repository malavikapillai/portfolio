import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Internships from "@/components/Internships";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  return (
    <main className="min-h-screen relative" style={{ isolation: 'auto' }}>
      <CustomCursor />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      {/* <Internships /> */}
      <Education />
      <Projects />
      <Contact />
    </main>
  );
}
