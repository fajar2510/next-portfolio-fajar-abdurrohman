import Head from "next/head";
import Navbar from "@/components/Navbar";
import SocialButton from "@/components/SocialButton";

import Github from "../../public/github.svg";
import Instagram from "../../public/instagram.svg";
import Linkedin from "../../public/linkedin.svg";
// import Twitter from "../../public/twitter.svg";
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
        <title>Fajar Abdurrohman Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/faviconF.ico" />
      </Head>
      <Navbar/>

      <section id="home" className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4 mb-4">
        <div className="h-full lg:h-[30rem]  rounded-3xl p-6 lg:p-10 flex flex-col gap-4 lg:gap-8 bg-[url('/gradient-bg.jpg')] bg-cover">
            <h1 className="text-2xl md:text-2xl lg:text-3xl text-black font-semibold leading-tight ">
               <div className="flex flex-col lg:flex-row">Hello🖐 !&nbsp;
               <span>Glad to meet you, Sir!</span> </div> 
               I am Fajar Abdurrohman</h1>
            
            
           <span className="mt-3 text-lg lg:text-2xl text-slate-700"> 
           I am really Freshgraduated and basically work with Fullstack Dev. <br /> 
           for any cases from System Requirement step until Maintenance.</span>
            <p className="flex font-medium text-md text-slate-700 dark:text-slate-200  leading-relaxed">I care a lot about using programming, because i just likes that! and love to create environment to be positive impact and enjoy creating to efficient for human experience.</p>
            
         
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
                {/* <Link href="https://twitter.com/laststory432" target="_blank">
                  <SocialButton bgColor="twitter">
                  <Twitter className="w-5 h-5"/>
                </SocialButton>
                </Link> */}
                <Link href="https://github.com/fajar2510" target="_blank">
                  <SocialButton bgColor="github">
                  <Github className="w-5 h-5"/>
                </SocialButton>
                </Link>
                
                
                
              </div>
            </div>
            <p className="text-sm font-normal text-slate-500 italic">Last updated : 05/05/2024</p>
        </div>

        {/* foto layout */}
        <div className="w-full h-[22rem] lg:h-[30rem] rounded-3xl duration-300 transition ease-in-out overflow-hidden group hover:scale-[97%]">
          <div className="h-full group-hover:scale-[107%] duration-300 transition ease-in-out  rounded-3xl p-8 bg-[url('/avatar-profile.png')] bg-cover bg-center "/>
        </div>
      </section>

      <section id="project" className="grid grid-cols-1 lg:grid-cols-3 gap-4 my-4">
        <ProjectPreview
          name="Shoe Store Web Apps."
          description="Project hariSenin.com build with Next.js, Tailwindcss, Strapi for CMS, and Stripe Payment"
          imageUrl="/img/portofolio/shoe-store.png"
          bgColor="#685cdd"
          dark
          url="https://github.com/OngkyRinaldo/project9-shoes-market"
        />
        <ProjectPreview
          name="Clothing E-Commerce"
          description="Deployed in Netlify! Build a website simple Clothing Store, with React.js, Sass, and Firebase"
          imageUrl="/img/portofolio/crwn-clothing.png"
          bgColor="#181919"
           url="https://clothing-web-app.netlify.app/"
          dark
        />
        <ProjectPreview
          name="Stock Blood Bank Admin"
          description="System Information Executive for Blood Bank Management case study Rumah Sakit Islam Surabaya (MySql, CodeIgniter, Bootstrap)"
          imageUrl="/img/portofolio/siebankdarah1.png"
          bgColor="#E1306C"
           url="https://github.com/fajar2510/Stock-blood-rsibd"
          dark
        />
        <ProjectPreview
          name="SIG Tenaga Kerja Jatim"
          description="Interactive Map Cluster Marker with Geographic Information Systems for Labor in East Java with Leaflet.js (MySql, CodeIgniter, Bootstrap)"
          imageUrl="/img/portofolio/penta-map1.png"
          bgColor="#4e4e56"
           url="https://github.com/fajar2510/pentamap"
          dark
        />
        <ProjectPreview
          name="System Information Accounting"
          description="System Informtion Accounting with Debet and Credit, and Balance Sheet (MySql, PHP Nattive, Bootstrap)"
          imageUrl="/img/portofolio/siakuntansi1.png"
          bgColor="#938400"
           url="https://github.com/fajar2510/sia-akuntansi"
          dark
        />
        <ProjectPreview
          name="Aiku Psycology Consultation"
          description="Aiku Android App Psycology consultation online with Flutter(Dart), CodeIgniter, MySql, and Firebase Auth"
          imageUrl="/img/portofolio/aiku1.png"
          bgColor="#65BCE7"
           url="https://drive.google.com/file/d/15bjWCoaVqfwC0JEIWP8G4xqhlnXkJ0OY/view?usp=sharing"
          dark
        />

         
      </section>

      <div className="p-2 flex flex-col flex-wrap">
          <h2 className="font-semibold text-lg text-black mb-2">more project</h2>
           <ul className="list-disc" >
             <li className="flex flex-wrap">
               <a href="https://github.com/fajar2510/crud-laravel-10" target="_blank" className="font-normal text-slate-600 text-md border-b border-slate-300 hover:border-none"> 
               ▫️ Simple CRUD(Create-Read-Update-Delete) with Laravel 10  
               </a>
             </li>

             <li className="flex flex-wrap">
               <a href="https://github.com/fajar2510/rest-api-laravel-10" target="_blank" className="font-normal text-slate-600 text-md border-b border-slate-300 hover:border-none"> 
               ▫️ REST API with Laravel 10 (tested in postman) 
               </a>
             </li>

             <li className="flex flex-wrap">
               <a href="https://github.com/fajar2510/next-crud" target="_blank" className="font-normal text-slate-600 text-md border-b border-slate-300 hover:border-none"> 
               ▫️ Simple CRUD(Create-Read-Update-Delete) with Next.js, Prisma, and Typescript
               </a>
             </li>

             <li className="flex flex-wrap">
               <a href="https://github.com/fajar2510/nodejs-reactjs-crud" target="_blank" className="font-normal text-slate-600 text-md border-b border-slate-300 hover:border-none"> 
               ▫️ Simple CRUD(Create-Read-Update-Delete) with Express, Axios, MySql, Vite+ReactJs, TailwindCSS
               </a>
             </li>

             <li className="flex flex-wrap">
               <a href="https://github.com/fajar2510/myblog-next" target="_blank" className="font-normal text-slate-600 text-md border-b border-slate-300 hover:border-none"> 
               ▫️ Blog with Login System, CRUD, Middleware,Typescript, Prisma, TailwindCSS (styling), and MongoDB (Database)
               {/* <span className="text-pink-600 font-semibold text-base">Deployed on Vercel!</span>  */}
               </a>
             </li>
           </ul>
           
            
        </div>

      <Education/>
       <Experience/>
        <Certification/>
      <Skill/>
      <Contact/>

     
    </>
  );
}
