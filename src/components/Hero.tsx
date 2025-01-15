import Link from "next/link";
import Button from "@/components/Button";
import HeroImage from "@/components/HeroImage";
import SocialButton from "@/components/SocialButton";
import Github from "../../public/github.svg";
import Instagram from "../../public/instagram.svg";
import Linkedin from "../../public/linkedin.svg";
import Replit from "../../public/replit.svg";
// import Twitter from "../../public/twitter.svg";
import { useLastCommit } from "@/pages/hooks/useLastCommit";
import { useToggleTimer } from "@/pages/hooks/useToggleTimer";

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
  const isH1Visible = useToggleTimer(4000); // Toggle setiap 4 detik
  const lastUpdated = useLastCommit(); // Fetch data dari GitHub

  return (
    <section
      id="home"
      className="grid grid-cols-1 md:grid-cols-subgrid lg:grid-cols-[2fr_1fr] gap-4 mb-4"
    >
      <div className="shadow-brutalism h-full lg:h-[28rem] rounded-3xl p-4 lg:p-10 flex justify-center items-center md:justify-start md:items-start flex-col gap-2 md:gap-4 lg:gap-6 bg-amber-400 bg-cover">
        {isH1Visible ? (
          <h1 className="animate-typing overflow-clip whitespace-nowrap border-r-4 border-r-white pr-5  text-lg py-4 pl-4 text-center md:text-start md:text-2xl lg:text-3xl text-black font-semibold leading-relaxed ">
            Hello! Welcome to My Page🖐!
          </h1>
        ) : (
          <h1 className="animate-typing overflow-clip whitespace-nowrap border-r-4 border-r-white pr-5 text-lg py-4 pl-4 text-center md:text-start md:text-2xl lg:text-3xl text-black font-semibold leading-relaxed">
            Appreciate visits, Let&apos;s Explore!
          </h1>
        )}
        <p
          className="pb-4 pl-4  text-sm text-center 
        md:text-start md:text-base lg:text-lg text-black l"
        >
          <span className="font-bold ">I’m Fajar Abdurrohman</span>, have strong
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

        {/* Conctact, sosial, updated */}
        <div className="flex pl-4 flex-wrap m-4 mx-auto w-full items-center gap-2 md:gap-2 lg:gap-4 justify-center lg:justify-between">
          <Button
            href="mailto:abdurrohmanfajar10@gmail.com?subject=Subjek%20Email&body=Isi%20Email"
            target="_blank"
          >
            Contact{" "}
            <span className="inline-block lg:hidden xl:inline-block">me</span>
          </Button>
          <div className="flex mt-2 md:mt-0 items-center gap-4">
            {socialLinks.map(({ href, bgColor, Icon }) => (
              <Link href={href} target="_blank" key={href}>
                <SocialButton bgColor={bgColor}>
                  <Icon className="w-5 h-5" />
                </SocialButton>
              </Link>
            ))}
          </div>
          <div className="inline-flex w-auto md:w-40  p-0">
            {!lastUpdated ? (
              <>
                <p className="text-sm italic pr-2 font-semibold text-slate-800">
                  Github checking
                </p>
                <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-gray-900" />
              </>
            ) : (
              <p className="text-sm italic font-medium text-slate-700">
                {`Updated ${lastUpdated}`}
              </p>
            )}
          </div>
        </div>
      </div>

      <HeroImage />
    </section>
  );
};

export default Hero;
