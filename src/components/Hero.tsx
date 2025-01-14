import React, { useState, useEffect } from "react";
import Link from "next/link";
import HeroImage from "@/components/HeroImage";
import SocialButton from "@/components/SocialButton";
import Github from "../../public/github.svg";
import Instagram from "../../public/instagram.svg";
import Linkedin from "../../public/linkedin.svg";
import Replit from "../../public/replit.svg";
import { lstat } from "fs";
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
  const [isH1Visible, setIsH1Visible] = useState(true);

  const getRelativeTime = (date: Date) => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();

    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const months = Math.floor(days / 30);

    if (months >= 6) {
      return date.toLocaleDateString();
    } else if (months > 0) {
      return `${months} month${months > 1 ? "s" : ""} ago`;
    } else if (weeks > 0) {
      return `${weeks} week${weeks > 1 ? "s" : ""} ago`;
    } else if (days > 0) {
      return `${days} day${days > 1 ? "s" : ""} ago`;
    } else if (hours > 0) {
      return `${hours} hour${hours > 1 ? "s" : ""} ago`;
    } else if (minutes > 0) {
      return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
    } else if (date > now) {
      return `Invalid date`;
    } else {
      return `In a few seconds`;
    }
  };

  // set Last Update
  const lastUpdated = getRelativeTime(new Date("2025-01-02T00:00:00"));

  useEffect(() => {
    // Timer untuk pergantian elemen
    const timer = setInterval(() => {
      setIsH1Visible((prev) => !prev); // Toggle antara h1 dan p
    }, 4000); // Durasi sesuai dengan animasi (4s)

    return () => clearInterval(timer); // Bersihkan timer saat unmount
  }, []);

  return (
    <section
      id="home"
      className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4 mb-4"
    >
      <div className="shadow-brutalism h-full lg:h-[28rem] rounded-3xl p-4 lg:p-10 flex justify-center items-center md:justify-start md:items-start flex-col gap-4 lg:gap-8 bg-amber-400 bg-cover">
        {isH1Visible ? (
          <h1 className="animate-typing overflow-clip whitespace-nowrap border-r-4 border-r-white pr-5  text-lg py-4 pl-4 text-center md:text-start md:text-2xl lg:text-3xl text-black font-semibold leading-relaxed ">
            Hello! Welcome to My Page🖐!
          </h1>
        ) : (
          <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-lg py-4 pl-4 text-center md:text-start md:text-2xl lg:text-3xl text-black font-semibold leading-relaxed">
            Appreciate visits, Let&apos;s Explore!
          </h1>
        )}
        <p
          className="pb-4 pl-4  text-sm text-center 
        md:text-start md:text-base lg:text-lg text-black"
        >
          <span className="font-bold">I’m Fajar Abdurrohman</span>, have strong
          passion for modern and latest technology <br />
          For web-mobile development, design, animation and enjoy to learn new
          things, always open to new opportunities as well. <br />
        </p>
        <span className="group text-base lg:text-lg text-black text-center md:text-start font-bold pl-4 pt-0">
          Let’s explore what I can offer!
          <span className="inline-block  group-hover:scale-150 group-hover:px-2 group-hover:-rotate-45 group-hover:translate-x-4  transition-all duration-300 ease-in-out">
            🚀
          </span>
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
            <p className="text-sm font-semibold text-slate-800">
              Last updated {lastUpdated}
            </p>
          </div>
        </div>
      </div>

      <HeroImage />
    </section>
  );
};

export default Hero;
