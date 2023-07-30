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
          <h3 className="text-lg font-bold text-black mb-1.5">Intern+Freelance</h3>
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

      </ol>
    </div>
  );
};

export default Experience;
