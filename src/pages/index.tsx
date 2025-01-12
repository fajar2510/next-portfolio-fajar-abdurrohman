import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero"
import ProjectMain from "@/components/ProjectMain";
import ProjectMore from "@/components/ProjectMore";
import AnimationDesign from "@/components/AnimationDesign"
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Skill from "@/components/Skill";
import Certification from "@/components/Certification";
// import Nextjs from "../../public/img/tech/nextjs.svg"
// import TailwindCSS from "../../public/img/tech/tailwindcss.svg"
// import Typescript from "../../public/img/tech/Typescript.svg"

export default function Home() {
  return (
    <div  className="w-full bg-white dark:bg-slate-800 mx-auto scroll-smooth">
      {/* Header */}
      <Header/>

        {/* Navbar component start */}
        <Navbar />
        {/* Navbar component end */}

        {/* Body Content start */}
        <div className="w-full px-2 md:px-4 lg:px-16">
          {/* Section Hero */}
          <Hero/>
          
          {/* Section Project Main */}
          <ProjectMain/>

          {/* Section Animation */}
          <AnimationDesign/>

          {/* Section Project More */}
          <ProjectMore/>

          {/* Section Education */}
          <Education/>

          {/* Section Experience */}
          <Experience/>
          
          {/* Section Certification, Learning, & Courses */}
          <Certification/>

          {/* Section Skill */}
          <Skill/>

          {/* Section Contact me */}
          <Contact/>

        </div>
    </div>
  );
}
