import React from "react";
import Link from "next/link";
import HeroImage from "@/components/HeroImage";
import SocialButton from "@/components/SocialButton";
import Github from "../../public/github.svg";
import Instagram from "../../public/instagram.svg";
import Linkedin from "../../public/linkedin.svg";
import Replit from "../../public/replit.svg";
// import Twitter from "../../public/twitter.svg";

interface SocialLinkProps {
  href: string;
  bgColor: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const socialLinks: SocialLinkProps[] = [
  {
    href: "https://www.linkedin.com/in/fajar-abdurrohman/",
    bgColor: "linkedin",
    Icon: Linkedin,
  },
  {
    href: "https://www.instagram.com/fajar.arh25/",
    bgColor: "instagram",
    Icon: Instagram,
  },
  {
    href: "https://replit.com/@fajar2510",
    bgColor: "replit",
    Icon: Replit,
  },
  {
    href: "https://github.com/fajar2510",
    bgColor: "github",
    Icon: Github,
  },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4 mb-4"
    >
      <div className="shadow-brutalism h-full lg:h-[28rem] rounded-3xl p-4 lg:p-10 flex flex-col gap-4 lg:gap-8 bg-amber-400 bg-cover">
        <h1 className="text-lg py-4 pl-4 text-center md:text-start md:text-2xl lg:text-3xl text-black font-semibold leading-relaxed ">
          Hello! Welcome to My Page🖐 !&nbsp; <br />
        </h1>
        <p className="pb-4 pl-4 text-sm text-center md:text-start md:text-base lg:text-lg text-black">
          <span className="font-bold">I’m Fajar Abdurrohman</span>, have strong
          passion for modern and latest technology <br />
          For web-mobile development, design, animation and enjoy to learn new
          things, always open to new opportunities as well. <br />
        </p>
        <span className="text-base lg:text-lg text-black text-center md:text-start font-bold pl-4 pt-0">
          Let’s explore what I can offer! 🚀
        </span>

        <div className="flex m-4 flex-col md:flex-row items-center gap-4 lg:gap-16 mx-auto justify-between mt-auto ">
          <Link
            href="mailto:abdurrohmanfajar10@gmail.com?subject=Subjek%20Email&body=Isi%20Email"
            target="_blank"
            className="bg-black text-white  py-3 px-12 md:px-5 rounded-full w-full md:w-52 lg:w-64 text-lg text-center tracking-widest  
          font-bold hover:scale-95 hover:bg-white hover:border hover:border-black hover:text-black  transition-all duration-300 ease-in-out"
          >
            Contact me
          </Link>
          <div className="flex mt-3 lg:mt-0 justify-self-end items-end gap-4">
            {socialLinks.map(({ href, bgColor, Icon }) => (
              <Link href={href} target="_blank" key={href}>
                <SocialButton bgColor={bgColor}>
                  <Icon className="w-5 h-5" />
                </SocialButton>
              </Link>
            ))}
          </div>
          <div className="flex p-2 flex-auto">
            <p className=" text-sm font-normal text-black italic">
              Last updated on 02/01/2025
            </p>
          </div>
        </div>
      </div>

      <HeroImage />
    </section>
  );
};

export default Hero;