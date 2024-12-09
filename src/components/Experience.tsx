import React from "react";
import Link from "next/link";
import Image from "next/image";

const internImages = [
  {
    id: 1,
    title: "Intern 1",
    urlImage: "/img/intern/intern1.jpg",
  },
  {
    id: 2,
    title: "Intern 2",
    urlImage: "/img/intern/intern2.jpeg",
  },
  {
    id: 3,
    title: "Intern 3",
    urlImage: "/img/intern/intern3.jpg",
  },
  {
    id: 4,
    title: "Intern 4",
    urlImage: "/img/intern/intern4.jpeg",
  },
];


const Experience = () => {
  return (
    <div
      id="experience"
      className="h-full rounded-3xl p-2 lg:p-10 flex flex-col"
    >
      <h2 className="text-3xl font-bold text-black mb-1.5">Experience</h2>
      {/* <span className="mb-3 text-lg font-semibold text-black">
        Intern
      </span> */}

      <ol className="relative border-l border-slate-300 dark:border-slate-700">
        <li className="mb-6 border-b border-slate-200 ml-4">
          <h3 className="text-lg font-bold text-black mb-1.5">Relevant Experience</h3>
          <div className="absolute w-3 h-3 bg-slate-400 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-md font-normal leading-none text-slate-600 dark:text-slate-300">
            Aug 2020 - Jun 2021
          </time>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Web Developer & IT Support - Disnakertrans Jawa Timur (Surabaya)
          </h3>
          <p className="text-base font-normal text-slate-600 dark:text-slate-400">
            Build interactive Web Apps with mapping of labor in East Java, using
            Georaphics visualization, Leaflet.js, CodeIgniter, MySql, Bootstrap
            .
          </p>
          <div className="flex flex-wrap justify-start gap-1 lg:gap-4 px-1 lg:px-2 py-1">
            {internImages.map((internImage) => (
              <div
                key={internImage.id}
                className="group h-full rounded-md overflow-hidden"
              >
                <Image
                  src={internImage.urlImage}
                  width={138}
                  height={116}
                  alt={`${internImage.title}`}
                  className=" rounded-md group-hover:scale-110 duration-300 transition ease-in-out filter grayscale object-cover"
                />
              </div>
            ))}
          </div>
        </li>


        <li className="mb-6 border-b border-slate-200 ml-4">
          <h3 className="text-lg font-bold text-black mb-1.5">Freelance</h3>
          <div className="absolute w-3 h-3 bg-slate-400 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-md font-normal leading-none text-slate-600 dark:text-slate-300">
            Aug 2020 - Jun 2021
          </time>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Frontend Mobile Android Flutter - CV. Linas Media Informatika (Gresik)
          </h3>
          <p className="text-base font-normal text-slate-600 dark:text-slate-400">
            Build frontend to ordering food for school canteen application.
          </p>
          
        </li>

        <li className="mb-6 border-b border-slate-200 ml-4">
          <h3 className="text-lg font-bold text-black mb-1.5">Project & Assignment</h3>
          <div className="absolute w-3 h-3 bg-slate-400 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-md font-normal leading-none text-slate-600 dark:text-slate-300">
             Feb 2018 - Dec 2019
          </time>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Programmer Fullstack - Universitas Negeri Surabaya (Surabaya)
          </h3>
          <p className="text-base font-normal text-slate-600 dark:text-slate-400">
            Build and Development; <br />
            ▫️ System Information Accountant(<em>PHP Nattive</em>), <br />
            ▫️ System Information Executive(<em>CodeIgniter</em>), <br />
            ▫️ System Information Wedding Organizer(<em>Laravel</em>), <br />
            ▫️ Mobile Psycholog Consutation(<em>Flutter</em>).
          </p>
        </li>
      </ol>

      {/* General Experience */}
      <ol className="relative border-l border-slate-300 dark:border-slate-700">

      <li className="mb-6 border-b border-slate-200 ml-4">
          <h3 className="text-lg font-bold text-black mb-1.5">General Experience</h3>
          <div className="absolute w-3 h-3 bg-slate-400 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-md font-normal leading-none text-slate-600 dark:text-slate-300">
            Aug 2023 - Present
          </time>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Freelance Web Developer/Graphics Design - Ngawi
          </h3>
          <p>Ngawi, East Java, Indonesia</p>
        
         
        </li>
        <li className="mb-6 border-b border-slate-200 ml-4">
        
          <div className="absolute w-3 h-3 bg-slate-400 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-md font-normal leading-none text-slate-600 dark:text-slate-300">
            Jan 2024 - Dec 2024
          </time>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Freelance & Support System in Election 2024 for President, Vice President, DPR (House of Representatives), DPRD (Regional House of Representatives), DPD (Regional Representative Council), East Java Governor, and Ngawi Regent (District Head) in Village Government - Ngawi
          </h3>
          <p>Ngawi, East Java, Indonesia</p>
        
         
        </li>
        <li className="mb-6 border-b border-slate-200 ml-4">
          <div className="absolute w-3 h-3 bg-slate-400 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-md font-normal leading-none text-slate-600 dark:text-slate-300">
            Sept 2021 - Aug 2022
          </time>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Entrepreneurship/Wiraswasta - Surakarta
          </h3>
          <p>Surakarta, Central Java, Indonesia</p>
        
        </li>
      </ol>
    </div>
  );
};

export default Experience;
