import { Navigation } from "@/components/sections/Navigation";
import { Hero } from "@/components/sections/Hero";
import { Education } from "@/components/sections/Education";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Certifications } from "@/components/sections/Certifications";
import { Awards } from "@/components/sections/Awards";
import { Contact } from "@/components/sections/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <Education />
        <Projects />
        <Skills />
        <Certifications />
        <Awards />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
