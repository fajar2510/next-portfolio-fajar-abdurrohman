import React from "react";
import Link from "next/link";
import Image from "next/image";

const certifs = [
  {
    id: 1,
    title: "2D Animation Digitalent KOMINFO",
    date: "May 2024 - Jun 2024(ongoing)",
    img: "/img/certification/digitalent.png",
    link: "/",
    description:
      "2D Animation is a field that explores moving works with a two-dimensional animation style. Where the result resembles a direct hand drawing (manual drawing), complete with coloring but moving. In the process, participants are not only taught to be experts in playing the software (tools, frames, layers, etc.).",
  },
  {
    id: 2,
    title: "Flutter & Javascript Bootcamp",
    date: "Aug 2023 - Dec 2023",
    img: "/img/certification/CODE_ID.jpg",
    link: "/",
    description:
      "Concern in Advance Javascript especially ES6 and structured programming with object oriented, and flexibelity mobile platform.",
  },
  {
    id: 3,
    title: "Harisenin Web Developer Bootcamp 2023",
    date: "Mar 2022 - Jul 2023",
    img: "/img/certification/harisenin.jpg",
    link: "/",
    description:
      "Web Developer Harisenin.com Bootcamp 2023 is Immersive Learning that teaches you how to build web applications from scratch. The Sylabus learn HTML, CSS, Javascript, React.js, Node.js, Express, MySql, and more.",
  },
  {
    id: 4,
    title: "Udemy Web Developer Bootcamp 2023",
    date: "Nov 2022 - May 2023",
    img: "/img/certification/udemy.png",
    link: "https://www.udemy.com/certificate/UC-cc4f5533-976b-46a9-9013-145a56f3b052/",
    description:
      "Learn build Web from scarth, like HTML, CSS, Javascript, React, Node.js, Express, MongoDB, and more.",
  },
  {
    id: 5,
    title: "Dicoding Front End & Backend Developer Junior",
    date: "Nov 2022 - Jan 2023",
    img: "/img/certification/dicoding-header-logo.png",
    link: "/",
    description:
      "Learn and build simple project, Frontend like Javascript DOM manipulation and Backend like crud, and Rest API.",
  },
  {
    id: 6,
    title: "Coursera Google IT Support",
    date: "Sep 2022 - Nov 2022",
    img: "/img/certification/Coursera.png",
    link: "https://www.coursera.org/account/accomplishments/professional-cert/MG8DY2NHJJFY",
    description:
      "Learn the fundamentals of IT support, Networking, Operating System, Cyber Security including modern problem-solving and troubleshooting skills.",
  },
];

const Certification = () => {
  return (
    <div
      id="certification"
      className=" h-full rounded-3xl p-2 lg:p-10 flex flex-col"
    >
      <h2 className="text-3xl font-bold text-black mb-1.5">Course & Certification</h2>
      {/* <span className="mb-3 text-lg font-semibold text-black">
        Course & Certification
      </span> */}

      <ol className="relative border-l border-slate-300 dark:border-slate-700">

        {certifs.map((certif, index) => (
          <li key={certif.id} className="mb-6  ml-4">
            {index === 0 && (
              <h3 className="text-lg font-bold text-black mb-1.5">Training - Bootcamp</h3>
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
            {index === 2 ? (
              <div className="flex flex-wrap gap-3">
                <Link
                  href="https://www.dicoding.com/certificates/MEPJKO35WX3V"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                >
                  Frontend Cert.{" "}
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
                <Link
                  href="https://www.dicoding.com/certificates/1OP85230LPQK"
                  className=" inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                >
                  Backend Cert.
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
              </div>
            ) : (
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
            )}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Certification;
