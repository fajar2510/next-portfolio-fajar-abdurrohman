import React from 'react'
import Link from "next/link";
import HeroImage from "@/components/HeroImage";
import SocialButton from "@/components/SocialButton";
import Github from "../../public/github.svg";
import Instagram from "../../public/instagram.svg";
import Linkedin from "../../public/linkedin.svg";
import Replit from "../../public/replit.svg";
// import Twitter from "../../public/twitter.svg";

const Hero = () => {
  return (
    <section id="home" className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4 mb-4">
    <div className="shadow-brutalism h-full lg:h-[28rem] rounded-3xl p-6 lg:p-10 flex flex-col gap-4 lg:gap-8 bg-amber-400 bg-cover">
    {/* <div className="shadow-brutalism h-full lg:h-[28rem]  rounded-3xl p-6 lg:p-10 flex flex-col gap-4 lg:gap-8 bg-[url('/gradient-bg.jpg')] bg-cover"> */}
        <h1 className="text-2xl py-4 pl-4 md:text-2xl lg:text-3xl text-black font-semibold leading-relaxed ">
          Hello! Welcome to My Page🖐 !&nbsp; <br/>
        </h1>  
        <p className="pb-4 pl-4 text-base lg:text-lg text-black"> 
          I’m Fajar Abdurrohman, have strong passion for modern and latest technology <br/>
          For web-mobile development, design, animation and enjoy to learn new things, always open to new opportunities as well. <br/> 
        </p>
        <span className="text-base lg:text-lg text-black font-bold pl-4 pt-0">Let’s explore what I can offer! 🚀</span>
        
        <div className="flex m-4 flex-col lg:flex-row items-center gap-4 justify-self-end mt-auto ">             
          <Link href="mailto:abdurrohmanfajar10@gmail.com?subject=Subjek%20Email&body=Isi%20Email" target="_blank"  className="bg-black text-white  py-3 px-12 rounded-full w-60 text-center tracking-widest lg:w-auto font-bold hover:scale-95 hover:bg-white hover:border hover:border-black hover:text-black  transition-all duration-300 ease-in-out">  Contact me  </Link>
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
            {/* <Link href="#" target="_blank">
              <SocialButton bgColor="twitter">
              <Twitter className="w-5 h-5"/>
            </SocialButton> */}
            <Link href="https://replit.com/@fajar2510" target="_blank">
              <SocialButton bgColor="replit">
              <Replit className="w-5 h-5"/>
            </SocialButton>
            </Link>
            <Link href="https://github.com/fajar2510" target="_blank">
              <SocialButton bgColor="github">
              <Github className="w-5 h-5"/>
            </SocialButton>
            </Link>
          </div>
          <div className="flex p-2 flex-auto">
            <p className=" text-sm font-normal text-black italic">Last updated on 02/01/2025</p>
            </div>
        </div> 
    </div>

    {/* Component Hero Image */}
    <HeroImage/>
  </section>
  )
}

export default Hero;