import Head from "next/head";
import Navbar from "@/components/Navbar";
import SocialButton from "@/components/SocialButton";

import Github from "../../public/github.svg";
import Instagram from "../../public/instagram.svg";
import Linkedin from "../../public/linkedin.svg";
import Twitter from "../../public/twitter.svg";
import ProjectPreview from "@/components/ProjectPreview";
import Link from "next/link";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Skill from "@/components/Skill";
import Certification from "@/components/Certification";

export default function Home() {

  return (
    <>
      <Head>
        <title>Fajar Abdurrohman&apos;s Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/faviconF.ico" />
      </Head>
      <Navbar/>

      <section id="home" className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4 mb-4">
        <div className="h-full lg:h-[30rem]  rounded-3xl p-6 lg:p-10 flex flex-col gap-4 lg:gap-8 bg-[url('/gradient-bg.jpg')] bg-cover">
            <h1 className="text-2xl lg:text-4xl text-black font-semibold leading-tight ">
               <div className="flex flex-col lg:flex-row"> Hello🖐 there!&nbsp;
               <span>Nice to meet you!</span> </div> 
            I&apos;am Fajar Abdurrohman</h1>
            
            
           <span className="mt-3 text-lg lg:text-2xl text-slate-700"> 
           Freshgraduate and basically work with Fullstack Developer <br /> 
           with 3+ years of experience in programming.</span>
            <p className="flex font-medium text-md text-slate-700 dark:text-slate-200  leading-relaxed">I care a lot about using programming, because my hobby likes create enviroment to be positive impact and enjoy creating user-centric, delighfull, best practice, security, and human experience.</p>
            
         
            <div className="flex flex-col lg:flex-row items-center gap-4 justify-self-end">
              
              <Link href="mailto:abdurrohmanfajar10@gmail.com?subject=Subjek%20Email&body=Isi%20Email" target="_blank"  className="bg-black text-white font-medium py-3 px-12 rounded-full w-60 text-center tracking-widest lg:w-auto hover:scale-95 hover:bg-transparent hover:border hover:border-black hover:text-black  transition-all duration-300 ease-in-out">  Contact me  </Link>
              <div className="flex mt-3 lg:mt-0 items-center gap-4">
                <Link href="https://www.linkedin.com/in/fajar-abdurrohman/" target="_blank">
                  <SocialButton  bgColor="linkedin">
                    <Linkedin className="w-5 h-5"/>
                  </SocialButton>
                </Link>
                <Link href="https://www.instagram.com/fajar.arh25/" target="_blank">
                <SocialButton bgColor="instagram">
                  <Instagram className="w-5 h-5"/>
                </SocialButton>
                </Link>
                <Link href="https://twitter.com/laststory432" target="_blank">
                  <SocialButton bgColor="twitter">
                  <Twitter className="w-5 h-5"/>
                </SocialButton>
                </Link>
                <Link href="https://github.com/fajar2510" target="_blank">
                  <SocialButton bgColor="github">
                  <Github className="w-5 h-5"/>
                </SocialButton>
                </Link>
                
                
                
              </div>
            </div>
            <p className="text-sm font-normal text-slate-500 italic">Last updated : 14/07/2023</p>
        </div>

        {/* foto layout */}
        <div className="w-full h-[22rem] lg:h-[30rem] rounded-3xl duration-300 transition ease-in-out overflow-hidden group hover:scale-[97%]">
          <div className="h-full group-hover:scale-[107%] duration-300 transition ease-in-out  rounded-3xl p-8 bg-[url('/avatar-profile.png')] bg-cover bg-center "/>
        </div>
      </section>

      <section id="project" className="grid grid-cols-1 lg:grid-cols-3 gap-4 my-4">
        <ProjectPreview
          name="E-Commerce Website"
          description="Project hariSenin.com build Next gen website with Next.js, tailwindcss, and prisma"
          imageUrl="/img/portofolio/ecommerce-project1.png"
          bgColor="#685cdd"
          dark
        />
        <ProjectPreview
          name="Simple Blog and Portfolio"
          description="Build a website with Next.js, tailwindcss, framer motion and add Next Auth"
          imageUrl="/img/portofolio/simpleblog.png"
          bgColor="#181919"
          dark
        />
        <ProjectPreview
          name="Stock Blood Bank Admin"
          description="Blood Bank Management System for Rumah Sakit Islam Surabaya"
          imageUrl="/img/portofolio/siebankdarah1.png"
          bgColor="#E1306C"
          dark
        />
        <ProjectPreview
          name="SIG Tenaga Kerja Jatim"
          description="Interactive Map Cluster Marker with Geographic Information Systems for Labor in East Java"
          imageUrl="/img/portofolio/penta-map1.png"
          bgColor="#4e4e56"
          dark
        />
        <ProjectPreview
          name="System Informtion Accounting"
          description="System Informtion Accounting with Debet and Credit, and Balance Sheet"
          imageUrl="/img/portofolio/siakuntansi1.png"
          bgColor="#938400"
          dark
        />
        <ProjectPreview
          name="Aiku Psycology Consultation"
          description="Aiku Android App Psycology consultation online with Flutter and Firebase"
          imageUrl="/img/portofolio/aiku1.png"
          bgColor="#65BCE7"
          dark
        />
      </section>
      <Education/>
       <Experience/>
        <Certification/>
      <Skill/>
      <Contact/>

     
    </>
  );
}
