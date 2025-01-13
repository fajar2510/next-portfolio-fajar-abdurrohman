import Link from "next/link";
import Image from "next/image";

interface EducationProps {
  period: string;
  graduated: string;
  logoSrc: string;
  university: string;
  program: string;
  department: string;
  description: string;
  organizations: string[];
  publications: { title: string; link: string }[];
  // certificates: { href: string; text: string; validity: string; score: string }[];
}

const educationData: EducationProps[] = [
  {
    period: "2017 - 2023",
    graduated: "Graduated on September 2023",
    logoSrc: "/img/unesa.png",
    university: "Universitas Negeri Surabaya",
    program: "Study Program of Information System",
    department: "Major of Informatics Engineering",
    description:
      "Build some project and assignment for Web and Android Applications, System Analyst, IT Hardware, Networking, Troubleshooting, and Business. Extra Join game development community and build some games.",
    organizations: [
      "Bidikmisi Scholarship Student Community",
      "Web Game Development Community",
    ],
    publications: [
      {
        title:
          "Interactive Geographic Information System: Visual Mapping, predict Training fund allocation.",
        link: "#",
      },
    ],
    // certificates: [
    // { href: '/pdf/ENGLISH_PROFICIENCY_TEST_FAJAR_546.pdf', text: 'Test English Proficiency Certif.', validity: 'June 2024 - June 2025', score: 'Score 546' },
    // { href: '/pdf/Sertifikat TEP Fajar Abdurrohman.pdf', text: 'Test English Proficiency Certif.', validity: 'Valid until April 2023 - April 2024', score: 'Score 473' }
    // ]
  },
];

const Education: React.FC = () => {
  return (
    <div
      id="education"
      className="h-full rounded-3xl px-2 lg:px-10 mt-10 flex flex-col"
    >
      <h2 className="text-3xl font-bold text-black mb-1.5">Education</h2>
      <span className="mb-3 text-md font-semibold text-black">
        Latest education
      </span>

      <ul className="relative border-l border-slate-700 dark:border-slate-700">
        {educationData.map((edu, index) => (
          <li key={index} className="ml-4">
            <div className="absolute w-4 h-4 bg-black rounded-full mt-1.5 -left-[0.6rem]"></div>
            <time className="mb-1 text-md font-normal leading-none text-slate-700 dark:text-slate-300">
              {edu.period}{" "}
              <span className="font-bold text-slate-700 italic">
                ({edu.graduated})
              </span>
            </time>

            <div className="flex flex-wrap items-center justify-start py-2 gap-3">
              <div className="overflow-hidden rounded-full">
                <Image
                  src={edu.logoSrc}
                  width={60}
                  height={60}
                  alt="logo unesa"
                />
              </div>
              <div className="flex flex-col">
                <h3 className="text-lg lg:text-xl font-bold text-slate-800 dark:text-white">
                  {edu.university}
                </h3>
                <h4 className="text-sm lg:text-lg font-normal text-slate-800 dark:text-white">
                  {edu.department} <br />
                  {edu.program}
                </h4>
              </div>
            </div>

            <p className="text-base font-normal text-slate-700 dark:text-slate-400">
              {edu.description}
            </p>
            <ol>
              {edu.organizations.map((org, idx) => (
                <li
                  key={idx}
                  className="text-base font-normal text-slate-700 dark:text-slate-400 inline-block mr-2"
                >
                  ▫️ <strong>Organization</strong> {org}
                </li>
              ))}
              {edu.publications.map((pub, idx) => (
                <li
                  key={idx}
                  className="text-base font-normal text-slate-700 dark:text-slate-400"
                >
                  <a href={pub.link} target="_blank">
                    ▫️{" "}
                    <strong className="underline hover:no-underline hover:text-amber-500 transition-all duration-300 ease-in-out">
                      E-Journal Publication
                    </strong>
                  </a>{" "}
                  . {pub.title}
                </li>
              ))}
            </ol>

            {/* {edu.certificates.map((cert, idx) => (
                            <Link key={idx} href={cert.href} download target='_blank' className="mt-4 lg:ml-3 ml-0 inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">
                                <span className='p-1 italic inline-flex'>{cert.text} <span className='text-sm text-gray-500 italic'> ~ {cert.validity} </span> <span className='hidden lg:block italic'> ({cert.score})</span> </span>
                                <svg className="w-3 h-3 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </Link>
                        ))} */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Education;
