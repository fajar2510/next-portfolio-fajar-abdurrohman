import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface OptionProps {
  value: string;
  label: string;
  file: string;
}

interface NavItemProps {
  href: string;
  label: string;
  target?: string;
  subLabel?: string;
}

const endpoint = "https://ik.imagekit.io/fajarblog/porto/";
const options: OptionProps[] = [
  {
    value: "EN",
    label: "ENG",
    file: `${endpoint}pdf-private/CV EN Fajar Abdurrohman 2024v2.pdf`,
  },
  {
    value: "ID",
    label: "IND",
    file: "#",
  },
];

const navItems: NavItemProps[] = [
  { href: "#home", label: "Home" },
  { href: "#project", label: "Project" },
  { href: "#education", label: "Education" },
  { href: "#experience", label: "Experience" },
  { href: "#certification", label: "Certif" },
  { href: "#technology", label: "Techno" },
  { href: "#contact", label: "Contact" },
];

const Navbar: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<OptionProps>(options[0]);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    const option = options.find((opt) => opt.value === value) || null;
    setSelectedOption(option || options[0]);

    if (value === "ID") {
      alert("Mohon maaf CV Indonesia saat belum tersedia!");
      setSelectedOption(options[1]);
    }
  };

  const handleDownloadClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    if (selectedOption.value === "ID") {
      event.preventDefault();
      alert("Mohon maaf CV Indonesia saat belum tersedia!");
      setSelectedOption(options[1]);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 9);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`navbar sticky bg-white top-0 z-10 px-2 md:px-16 mt-0 pt-0 mx-auto transition-all duration-600 ease-in-out ${
        isScrolled ? "border-b-2 border-black" : ""
      }`}
    >
      <div className="navbar mx-auto  bg-white dark:bg-black ">
        <div className="navbar-start justify-between md:justify-start w-1/3">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost xl:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            {/* Navigasi Mobile - Tablet */}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-6 shadow-brutalism bg-white rounded-box w-52"
            >
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  target={item.target}
                  className="text-base font-bold py-1.5 px-2 text-black hover:translate-x-2 hover:scale-105 hover:no-underline underline transition-all duration-300 ease-in-ou"
                >
                  {item.label}
                </Link>
              ))}
            </ul>
          </div>
          <div className="flex items-center gap-[1ch]">
            <div className="hidden md:inline-block w-5 h-5 bg-yellow-400 rounded-full shadow-brutalism" />
            <span className="text-base md:pl-3 text-black font-semibold md:font-semibold lg:font-bold tracking-widest uppercase">
              Fajar
              <span className="block md:pl-1 md:inline-block text-xs md:text-base tracking-tighter md:tracking-widest font-extralight md:font-semibold lg:font-bold text-black">
                Abdurrohman
              </span>
            </span>
          </div>
        </div>

        {/* Navigasi Dekstop */}
        <div className="navbar-end w-2/3 ">
          <div className="hidden xl:flex flex-col lg:gap-4">
            <ul className="menu text-center justify-content menu-horizontal items-center align-center font-bold gap-1 px-2 ">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  target={item.target}
                  className="text-slate-700 text-base dark:text-white px-2 py-1 rounded-3xl hover:text-white hover:bg-black transition-all duration-300 ease-in-out"
                >
                  {item.label}
                </Link>
              ))}
            </ul>
          </div>
          <div className="shadow-brutalism lg:ml-3 flex gap-2 lg:gap-3 items-center justify-center bg-white text-black font-medium py-2 px-3 lg:px-5 rounded-3xl w-auto group hover:scale-[97%] border border-black hover:text-black transition-all duration-300 ease-in-out">
            <span className="hidden md:block dark:text-black font-bold text-base text-black">
              CV
            </span>

            <select
              name="language"
              className="pl-2 rounded-2xl font-bold text-sm md:text-base text-black bg-white"
              onChange={handleSelectChange}
              defaultValue="EN"
            >
              {options.map((option) => (
                <option
                  key={option.value}
                  value={option.value}
                  className="bg-white text-black hover:bg-amber-400 transition-all duration-300 ease-in-out"
                >
                  {option.label}
                </option>
              ))}
            </select>

            <Link
              href={selectedOption.file}
              download
              target="_blank"
              className="bg-white  px-3 py-1 rounded-3xl group-hover:scale-[105%]  font-medium text-black hover:bg-amber-400 hover:border hover:border-black hover:text-white transition-all duration-300 ease-in-out"
              onClick={handleDownloadClick}
            >
              <Image
                className="lg:hidden"
                src="/download.png"
                width={20}
                height={20}
                alt="Download"
              ></Image>
              <span className="hidden text-black font-semibold text-base lg:block">
                Download
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
