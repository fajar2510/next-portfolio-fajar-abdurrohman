import React from "react";
import Image from "next/image";

const endpoint = "https://ik.imagekit.io/fajarblog/porto/";

interface ExperienceDataProps {
  id: number;
  title: string;
  time: string;
  position: string;
  description: string;
  location?: string;
  images?: { id: number; title: string; urlImage: string }[];
}

const experiences: ExperienceDataProps[] = [
  {
    id: 1,
    title: "Relevant Experience",
    time: "Aug 2020 - Jun 2021",
    position:
      "Web Developer & IT Support - Disnakertrans Jawa Timur (Surabaya)",
    description:
      "Build interactive Web Apps with mapping of labor in East Java, using Georaphics visualization, Leaflet.js, CodeIgniter, MySql, Bootstrap.",
    images: [
      { id: 1, title: "Intern 1", urlImage: `${endpoint}intern/intern1.jpg` },
      { id: 2, title: "Intern 2", urlImage: `${endpoint}intern/intern2.jpeg` },
      {
        id: 3,
        title: "Intern 3",
        urlImage: `${endpoint}intern/intern3_11zon.jpg`,
      },
      { id: 4, title: "Intern 4", urlImage: `${endpoint}intern/intern4.jpeg` },
    ],
  },
  {
    id: 2,
    title: "Freelance",
    time: "Aug 2020 - Jun 2021",
    position:
      "Frontend Mobile Android Flutter - CV. Linas Media Informatika (Gresik)",
    description:
      "Build frontend to ordering food for school canteen application.",
  },
  {
    id: 3,
    title: "Project & Assignment",
    time: "Feb 2018 - Dec 2019",
    position: "Programmer Fullstack - Universitas Negeri Surabaya (Surabaya)",
    description:
      "Build and Development; System Information Accountant(PHP Nattive), System Information Executive(CodeIgniter), System Information Wedding Organizer(Laravel), Mobile Psycholog Consutation(Flutter).",
  },
  // {
  //   id: 4,
  //   title: "General Experience",
  //   time: "Aug 2023 - Present",
  //   position: "Freelance Web Developer/Graphics Design - Ngawi",
  //   description: "Freelance web development and graphic design services.",
  //   location: "Ngawi, East Java, Indonesia",
  // },
  // {
  //     id: 5,
  //     title: "General Experience",
  //     time: "Jan 2024 - Dec 2024",
  //     position: "Freelance & Support System in Election 2024 for President, Vice President, DPR (House of Representatives), DPRD (Regional House of Representatives), DPD (Regional Representative Council), East Java Governor, and Ngawi Regent (District Head) in Village Government - Ngawi",
  //     description: "Support system and freelance work for the 2024 election.",
  //     location: "Ngawi, East Java, Indonesia",
  //     images: [
  //       { id: 1, title: "img 1", urlImage: `${endpoint}pemdes/pemdes00.jpg` },
  //       { id: 2, title: "img 2", urlImage: `${endpoint}pemdes/pemdes01.jpg` },
  //       { id: 3, title: "img 3", urlImage: `${endpoint}pemdes/pemdes3.jpg` },
  //       { id: 4, title: "img 4", urlImage: `${endpoint}pemdes/pemdes4.jpg` },
  //     ],
  //   },
  {
    id: 6,
    title: "General Experience",
    time: "Sept 2021 - Aug 2022",
    position: "Entrepreneurship/Wiraswasta - Surakarta",
    description: "Entrepreneurship and business activities in Surakarta.",
    location: "Surakarta, Central Java, Indonesia",
  },
];

const Experience = () => {
  return (
    <div
      id="experience"
      className="h-full rounded-3xl p-2 lg:p-10 flex flex-col"
    >
      <h2 className="text-3xl font-bold text-black mb-1.5">Experience</h2>
      <ul className="relative border-l p-2 m-0 border-slate-500">
        {experiences.map((exp) => (
          <li key={exp.id} className="mb-1 border-b border-slate-700 ml-4">
            <h3 className="text-justify text-lg font-bold text-black mb-1.5">
              {exp.title}
            </h3>
            <div className="absolute w-4 h-4 bg-black rounded-full mt-1.5 -left-[0.6rem]"></div>
            <time className="text-justify mb-1 text-base md:text-base font-normal leading-none text-slate-700 dark:text-slate-300">
              {exp.time}
            </time>
            <h3 className="text-justify text-base md:text-lg font-semibold text-black dark:text-white">
              {exp.position}
            </h3>
            <p className="text-justify text-base font-normal text-slate-700 dark:text-slate-400">
              {exp.description}
            </p>
            {exp.location && <p>{exp.location}</p>}
            {exp.images && (
              <div className="flex flex-wrap justify-center w-auto md:justify-start gap-1 lg:gap-4 px-1 lg:px-2 py-1">
                {exp.images.map((image) => (
                  <div
                    key={image.id}
                    className="group h-full rounded-md overflow-hidden"
                  >
                    <Image
                      src={image.urlImage}
                      width={138}
                      height={116}
                      alt={image.title}
                      className="rounded-md group-hover:scale-110 duration-300 transition ease-in-out filter grayscale object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Experience;
