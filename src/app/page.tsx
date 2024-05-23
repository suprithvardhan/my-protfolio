import { HeroSection } from "@/components/HeroSection/HeroSection";
import Projects from "@/components/Projects/Projects";
import Skillset from "@/components/Skillset/Skillset";
import ResumeCard from "@/components/Resume/Resume";
import Contact from "@/components/Contact/Contact"; 
import Image from "next/image";

export default function Home() {
  return (
    <main> 
    <HeroSection />
    <Skillset />
    <Projects />
   <ResumeCard />
   <Contact />
    </main>
  );
}
