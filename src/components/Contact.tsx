import React from "react";
import Link from "next/link";
import SocialButton from "@/components/SocialButton";
import Button from "@/components/Button";

import Github from "../../public/github.svg";
import Instagram from "../../public/instagram.svg";
import Linkedin from "../../public/linkedin.svg";
// import Twitter from "../../public/twitter.svg";
import Replit from "../../public/replit.svg";
import Nextjs from "../../public/img/tech/nextjs.svg";
import TailwindCSS from "../../public/img/tech/tailwindcss.svg";
import Typescript from "../../public/img/tech/Typescript.svg";

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
    href: "https://www.instagram.com/fajarabd25/",
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

const Contact = () => {
  const currentYear = new Date().getFullYear(); // Mendapatkan tahun saat ini
  return (
    <section id="contact" className="mb-8">
      <div className="h-full lg:h-[20rem] shadow-brutalism rounded-3xl p-6  lg:p-10 flex flex-col gap-8 bg-indigo-400">
        <h1 className="text-3xl lg:text-6xl text-black font-semibold dark:text-white text-center lg:text-start">
          Looking to partner or collaborate?
        </h1>
        <p className="flex-1 text-black dark:text-white text-center lg:text-start">
          Don’t hesitate to get in touch! Whether it’s for collaboration or just
          a friendly hello, feel free to contact me at:
          <br />
          <Link
            href="https://www.linkedin.com/in/fajar-abdurrohman/"
            target="_blank"
            className=" font-bold hover:underline"
          >
            abdurrohmanfajar10@gmail.com
          </Link>
        </p>

        {/* Button Contact Me */}
        <div className="flex flex-col lg:flex-row items-center  justify-between">
          <Button
            href="mailto:abdurrohmanfajar10@gmail.com?subject=Subjek%20Email&body=Isi%20Email"
            target="_blank"
          >
            Contact me
          </Button>
          <div className="flex items-center mt-6 lg:mt-0 gap-4">
            {socialLinks.map(({ href, bgColor, Icon }) => (
              <Link href={href} target="_blank" key={href}>
                <SocialButton bgColor={bgColor}>
                  <Icon className="w-5 h-5" />
                </SocialButton>
              </Link>
            ))}
          </div>
          <div>
            <p className="text-black mt-5 md:mt-0 dark:text-white text-sm font-medium text-center lg:text-start leading-tight">
              Copyright © <span className="font-bold">{currentYear}</span> - All
              right reserved by Fajar Abdurrohman.
            </p>
            <div className="flex mb-2 mt-1 justify-center items-center lg:justify-start text-black dark:text-white text-sm font-normal text-center lg:text-start leading-tight">
              This website technology use &nbsp;
              <div className="p-1 flex gap-1.5 rounded-3xl border border-black fill-black-400 bg-white">
                <Nextjs className="h-5 w-5 rounded-full" />
                <TailwindCSS className="h-5 w-5 rounded-full fill-cyan-400" />
                <Typescript className="h-5 w-5 rounded-full 0" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
