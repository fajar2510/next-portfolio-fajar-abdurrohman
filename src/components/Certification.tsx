import Link from "next/link";
import Image from "next/image";

// const IKIT=process.env.NEXT_PUBLIC_IK_URL_ENDPOINT
const IKIT = "https://ik.imagekit.io/fajarblog/porto/";
const certifs = [
  {
    id: 1,
    title: "Alibaba Cloud (AWS)",
    date: "Jul 2024 - Aug 2024",
    img: `${IKIT}certification/alibaba-cloud.jpg`,
    link: "https://drive.google.com/drive/folders/1J4nh3XpmCVpOCjXf4A4sridx5avQzTwK?usp=sharing",
    description:
      "Learn the basics of cloud computing, including cloud architecture, security, and core AWS services. ",
  },
  {
    id: 2,
    title: "Digitalent KOMINFO x HelloMotion - 2D Animation",
    date: "May 2024 - Jun 2024",
    img: `${IKIT}certification/digitalent.png`,
    link: "https://drive.google.com/file/d/1AQqLEGSwQPXqhJw-0g08ki3M-BdDvYzH/view?usp=sharing",
    description:
      "The 2D Animation Bootcamp in collaboration with Hello Motion focuses on creating animations using Adobe Animate.",
  },
  {
    id: 3,
    title: "Skillshare - Figma, UI-UX Design and 2D Animation",
    date: "Feb 2024 - Mar 2024",
    img: `${IKIT}certification/skillshare.jpg`,
    link: "https://drive.google.com/file/d/1-a-bmK1375YFTZoYubHt0y3X31v_jKki/view?usp=sharing",
    description:
      "The Figma course covers the basics of the Figma interface, design principles, and creating interactive prototypes. ",
  },

  {
    id: 4,
    title:
      "Prakerja - Konten Marketing Sosial Media, Konten Desain Grafis, Website Toko Online",
    date: "Feb 2024 - Apr 2024",
    img: `${IKIT}certification/prakerja.jpg`,
    link: "https://drive.google.com/drive/folders/1-Q1odNtWGp88f0UKzxzRHulY18851B_a?usp=sharing",
    description:
      "Prakerja Courses Finished: Konten Marketing Sosial Media – Learn how to create engaging social media content, grow your audience, and increase brand awareness. ",
  },
  {
    id: 5,
    title:
      "Codecademy - Basic JavaScript, Typescript, CSS, HTML, Command Line, Git & GitHub.",
    date: "Aug 2023 - Dec 2023",
    img: `${IKIT}certification/codecademy.png`,
    link: "https://www.codecademy.com/profiles/fajar2510",
    description:
      "Focused on JavaScript, TypeScript, CSS, HTML, Command Line, Git & GitHub. ",
  },
  {
    id: 6,
    title: "CODE ID - Flutter & Javascript Bootcamp",
    date: "Aug 2023 - Dec 2023",
    img: `${IKIT}certification/CODE_ID.jpg`,
    link: "/",
    description:
      "CODE ID Bootcamp is a 4-month program that teaches you how to build mobile applications using Flutter and JavaScript.",
  },

  {
    id: 7,
    title: "Harisenin Web Developer Bootcamp 2023",
    date: "Mar 2023 - Jul 2023",
    img: `${IKIT}certification/harisenin.jpg`,
    link: "https://bit.ly/4cg5Je5",
    description:
      "Harisenin Web Developer Bootcamp 2023 teaches you how to build websites from scratch, covering key technologies such as HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, and more.",
  },
  {
    id: 8,
    title: "Udemy Web Developer Bootcamp 2023",
    date: "Nov 2023 - May 2023",
    img: `${IKIT}certification/udemy.png`,
    link: "https://www.udemy.com/certificate/UC-cc4f5533-976b-46a9-9013-145a56f3b052/",
    description:
      "Udemy Web Developer Bootcamp 2023 teaches you how to build websites from scratch, covering key technologies such as HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, and more.",
  },
  {
    id: 9,
    title: "Dicoding Courses",
    date: "Nov 2022 - Jan 2023",
    img: `${IKIT}certification/dicoding-header-logo.png`,
    link: "https://drive.google.com/drive/folders/1-KSYJ4qUtDQJXWH0eSfk4dEk1UqUQzyt?usp=sharing",
    description:
      "Dicoding Courses Finished: Frontend Web Development, Backend Web Development, Cloud Computing etc.",
  },
  {
    id: 10,
    title: "Coursera Google IT Support",
    date: "Sep 2022 - Nov 2022",
    img: `${IKIT}/certification/Coursera.png`,
    link: "https://www.coursera.org/account/accomplishments/professional-cert/MG8DY2NHJJFY",
    description:
      "The Google IT Support Professional Certificate introduces learners to troubleshooting, customer service, networking, operating systems, system administration, and security.",
  },
];

const Certification = () => {
  return (
    <div
      id="certification"
      className=" h-full rounded-3xl p-2  lg:pt-0 lg:pl-10 lg:pr-10 lg:pb-10 flex flex-col"
    >
      <h2 className="text-xl md:text-2xl lg:text-3xl text-justify font-bold text-black mb-1.5">
        <span className="hidden md:block">Bootcamp, Course, </span>Learning &
        Certification
      </h2>
      <ul className="relative border-l p-2 m-0 border-slate-500 ">
        {certifs.map((certif, index) => (
          <li key={certif.id} className="mb-0  ml-4">
            {index === 0 && (
              <h3 className="text-base text-justify md:text-lg font-bold mt-2 text-black mb-1.5">
                Relevant studies
              </h3>
            )}
            <div className="absolute w-4 h-4 bg-black rounded-full mt-1.5 -left-[0.6rem] dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-justify text-sm font-medium leading-none text-slate-700 dark:text-slate-300">
              {certif.date}
            </time>
            <div className="flex items-center  justify-start py-1.5 gap-3 border-b border-slate-500">
              <div className="hidden lg:flex overflow-hidden items-center justify-center rounded-2xl w-16 h-16 object-cover">
                <Image
                  src={certif.img}
                  width={80}
                  height={80}
                  alt={`${certif.title}`}
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL={`${IKIT}placeholder.jpg`}
                />
              </div>

              <div className="flex flex-col justify-start">
                <h3 className="text-base text-start md:text-lg font-semibold text-black dark:text-white">
                  {certif.title}
                  <Link
                    href={certif.link}
                    className="inline-flex justify-center items-center p-1 text-black -rotate-45 hover:rotate-0 hover:scale-125 hover:text-amber-500 transition-all duration-300 ease-in-out"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </Link>
                </h3>

                <p className="mb-4 text-justify  text-base font-normal text-slate-800 dark:text-gray-400">
                  {certif.description}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Certification;
