import React from "react";
import Link from "next/link";
import Image from "next/image";

 const endpoint='https://ik.imagekit.io/fajarblog/porto/'
const certifs = [
  {
    id: 1,
    title: "Alibaba Cloud (AWS)",
    date: "Jul 2024 - Aug 2024",
    img: `${endpoint}certification/alibaba-cloud.jpg`,
    link: "https://drive.google.com/drive/folders/1J4nh3XpmCVpOCjXf4A4sridx5avQzTwK?usp=sharing",
    description:
      "Learn the basics of cloud computing, including cloud architecture, security, and core AWS services. ",
  },
  {
    id: 2,
    title: "Digitalent KOMINFO x HelloMotion - 2D Animation",
    date: "May 2024 - Jun 2024",
    img: `${endpoint}certification/digitalent.png`,
    link: "https://drive.google.com/file/d/1AQqLEGSwQPXqhJw-0g08ki3M-BdDvYzH/view?usp=sharing",
    description:
      "The 2D Animation Bootcamp in collaboration with Hello Motion focuses on creating animations using Adobe Animate.",
  },
  {
    id: 3,
    title: "Skillshare - Figma, UI-UX Design and 2D Animation",
    date: "Feb 2024 - Mar 2024",
    img: `${endpoint}certification/skillshare.jpg`,
    link: "https://drive.google.com/file/d/1-a-bmK1375YFTZoYubHt0y3X31v_jKki/view?usp=sharing",
    description:
      "The Figma course covers the basics of the Figma interface, design principles, and creating interactive prototypes. ",
  },
 
  {
    id: 4,
    title: "Prakerja - Konten Marketing Sosial Media, Konten Desain Grafis, Website Toko Online",
    date: "Feb 2024 - Apr 2024",
    img: `${endpoint}certification/prakerja.jpg`,
    link: "https://drive.google.com/drive/folders/1-Q1odNtWGp88f0UKzxzRHulY18851B_a?usp=sharing",
    description:
      "Prakerja Courses Finished: Konten Marketing Sosial Media – Learn how to create engaging social media content, grow your audience, and increase brand awareness. ",
  },
  {
    id: 5,
    title: "Codecademy - Basic JavaScript, Typescript, CSS, HTML, Command Line, Git & GitHub.",
    date: "Aug 2023 - Dec 2023",
    img: `${endpoint}certification/codecademy.png`,
    link: "https://www.codecademy.com/profiles/fajar2510",
    description:
      "Focused on JavaScript, TypeScript, CSS, HTML, Command Line, Git & GitHub. ",
  },
  {
    id: 6,
    title: "CODE ID - Flutter & Javascript Bootcamp",
    date: "Aug 2023 - Dec 2023",
    img: `${endpoint}certification/CODE_ID.jpg`,
    link: "/",
    description:
      "CODE ID Bootcamp is a 4-month program that teaches you how to build mobile applications using Flutter and JavaScript.",
  },
 
  {
    id: 7,
    title: "Harisenin Web Developer Bootcamp 2023",
    date: "Mar 2023 - Jul 2023",
    img: `${endpoint}certification/harisenin.jpg`,
    link: "https://bit.ly/4cg5Je5",
    description:
      "Harisenin Web Developer Bootcamp 2023 teaches you how to build websites from scratch, covering key technologies such as HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, and more.",
  },
  {
    id: 8,
    title: "Udemy Web Developer Bootcamp 2023",
    date: "Nov 2023 - May 2023",
    img: `${endpoint}certification/udemy.png`,
    link: "https://www.udemy.com/certificate/UC-cc4f5533-976b-46a9-9013-145a56f3b052/",
    description:
      "Udemy Web Developer Bootcamp 2023 teaches you how to build websites from scratch, covering key technologies such as HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, and more.",
  },
  {
    id: 9,
    title: "Dicoding Courses",
    date: "Nov 2022 - Jan 2023",
    img: `${endpoint}certification/dicoding-header-logo.png`,
    link: "https://drive.google.com/drive/folders/1-KSYJ4qUtDQJXWH0eSfk4dEk1UqUQzyt?usp=sharing",
    description:
      "Dicoding Courses Finished: Frontend Web Development, Backend Web Development, Cloud Computing etc.",
  },
  {
    id: 10,
    title: "Coursera Google IT Support",
    date: "Sep 2022 - Nov 2022",
    img: `${endpoint}/certification/Coursera.png`,
    link: "https://www.coursera.org/account/accomplishments/professional-cert/MG8DY2NHJJFY",
    description:
      "The Google IT Support Professional Certificate introduces learners to troubleshooting, customer service, networking, operating systems, system administration, and security.",
  },
];

const Certification = () => {
  return (
    <div
      id="certification"
      className=" h-full rounded-3xl p-2 lg:p-10 flex flex-col"
    >
      <h2 className="text-3xl font-bold text-black mb-1.5">Bootcamp, Course, Learning & Certification</h2>
      {/* <span className="mb-3 text-lg font-semibold text-black">
        Course & Certification
      </span> */}

      <ol className="relative border-l border-slate-300 dark:border-slate-700">

        {certifs.map((certif, index) => (
          <li key={certif.id} className="mb-6  ml-4">
            {index === 0 && (
              <h3 className="text-lg font-bold text-black mb-1.5">Relevant studies</h3>
            )}
            <div className="absolute w-3 h-3 bg-slate-300 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-slate-700 dark:text-slate-300">
              {certif.date}
            </time>
            <div className="flex items-center justify-start py-2 gap-3 ">
              <div className="overflow-hidden rounded-full">
                <Image
                  src={certif.img}
                  width={40}
                  height={40}
                  alt={`${certif.title}`}
                />
              </div>

              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                {certif.title}
              </h3>
            </div>

            <p className="mb-4  text-base font-normal text-slate-600 dark:text-gray-400">
              {certif.description}
            </p>
  
              <Link
                href={certif.link}
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
              >
                Certification{" "}
                <svg
                  className="w-3 h-3 ml-2"
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
           
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Certification;
