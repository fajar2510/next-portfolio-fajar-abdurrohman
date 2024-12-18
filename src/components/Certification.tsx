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
      "In the AWS Cloud Computing section, you learn about fundamental concepts like availability zones, regions, and global infrastructure through practical simulations. The course covers topics such as deploying and managing cloud servers, utilizing Elastic Compute Service (ECS) for dynamic websites, and understanding the principles of scalability and redundancy in cloud environments. The Alibaba Cloud Object Storage module teaches you how to operate and manage Object Storage Service (OSS), including uploading, securing, and organizing data in the cloud.",
  },
  {
    id: 2,
    title: "Digitalent KOMINFO x HelloMotion - 2D Animation",
    date: "May 2024 - Jun 2024",
    img: `${endpoint}certification/digitalent.png`,
    link: "https://drive.google.com/file/d/1AQqLEGSwQPXqhJw-0g08ki3M-BdDvYzH/view?usp=sharing",
    description:
      "The 2D Animation Bootcamp in collaboration with Hello Motion focuses on creating animations entirely using digital tools, primarily Adobe Animate. The results are vibrant and dynamic animations that showcase professional two-dimensional animation styles. Participants are trained in mastering the software, including working with tools, frames, layers, and keyframes, while also developing a comprehensive understanding of animation principles such as timing, easing, and motion arcs. The animations are finalized and exported using Adobe Media Encoder, ensuring high-quality outputs suitable for various platforms. This bootcamp emphasizes both the creative and technical processes, equipping participants with the skills to produce smooth, professional-grade animations efficiently.",
  },
  {
    id: 3,
    title: "Skillshare - Figma, UI-UX Design and 2D Animation",
    date: "Feb 2024 - Mar 2024",
    img: `${endpoint}certification/skillshare.jpg`,
    link: "https://drive.google.com/file/d/1-a-bmK1375YFTZoYubHt0y3X31v_jKki/view?usp=sharing",
    description:
      "This course equips you with technical skills to create user-friendly and visually appealing designs using Figma, covering advanced features like layer management, component creation, and responsive design grids. It delves into the principles of User Interface (UI) and User Experience (UX), teaching you how to design intuitive navigation flows, wireframes, and prototypes. In the 2D Animation section, the course introduces techniques like keyframing, easing, and path animations to add smooth movements and transitions to your designs. You'll also explore concepts like frame-by-frame animation, layer masking, and timing to make your visuals more dynamic and engaging for interactive applications.",
  },
 
  {
    id: 4,
    title: "Prakerja - Konten Marketing Sosial Media, Konten Desain Grafis, Website Toko Online",
    date: "Feb 2024 - Apr 2024",
    img: `${endpoint}certification/prakerja.jpg`,
    link: "https://drive.google.com/drive/folders/1-Q1odNtWGp88f0UKzxzRHulY18851B_a?usp=sharing",
    description:
      "In the Online Store Website section, you learn to create and manage e-commerce websites using WordPress and WooCommerce. The course covers setting up an online store, managing products, integrating payment methods, and optimizing the website for user experience and SEO. In the Social Media Content Marketing module, you are taught how to design and edit content using tools like Canva for graphics and CapCut for video editing. The course also includes strategies for managing social media accounts effectively, such as content scheduling, audience engagement, and analyzing metrics to improve performance. The Graphic Design segment introduces you to professional design tools like Photoshop and Illustrator, teaching essential principles like composition, color theory, typography, and branding. You also explore how to create eye-catching visuals tailored to marketing objectives.",
  },
  {
    id: 5,
    title: "Codecademy - JavaScript, Typescript, CSS, HTML, Command Line, Git & GitHub.",
    date: "Aug 2023 - Dec 2023",
    img: `${endpoint}certification/codecademy.png`,
    link: "https://www.codecademy.com/profiles/fajar2510",
    description:
      "Focused on fundamental and advanced topics in JavaScript, TypeScript, CSS, HTML, Command Line, Git, and GitHub, providing a strong foundation in front-end and back-end web development tools and workflows.",
  },
  {
    id: 6,
    title: "CODE ID - Flutter & Javascript Bootcamp",
    date: "Aug 2023 - Dec 2023",
    img: `${endpoint}certification/CODE_ID.jpg`,
    link: "/",
    description:
      "Focuses on advanced JavaScript, particularly ES6, and structured programming using object-oriented principles. It also emphasizes the flexibility of Flutter for mobile platform development, allowing participants to build cross-platform mobile applications. The bootcamp covers both front-end and mobile development, providing a comprehensive understanding of modern programming techniques and the ability to create efficient, scalable applications for both web and mobile platforms.",
  },
 
  {
    id: 7,
    title: "Harisenin Web Developer Bootcamp 2023",
    date: "Mar 2023 - Jul 2023",
    img: `${endpoint}certification/harisenin.jpg`,
    link: "https://bit.ly/4cg5Je5",
    description:
      "An immersive learning program that teaches you how to build web applications from scratch. The curriculum covers HTML, CSS, JavaScript, React.js, Node.js, Express, MySQL, and more. The bootcamp emphasizes hands-on projects and practical application, enabling you to create full-stack web applications and gain experience with modern web development technologies and frameworks.",
  },
  {
    id: 8,
    title: "Udemy Web Developer Bootcamp 2023",
    date: "Nov 2023 - May 2023",
    img: `${endpoint}certification/udemy.png`,
    link: "https://www.udemy.com/certificate/UC-cc4f5533-976b-46a9-9013-145a56f3b052/",
    description:
      "Udemy Web Developer Bootcamp 2023 teaches you how to build websites from scratch, covering key technologies such as HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, and more. The bootcamp provides hands-on experience, enabling you to develop full-stack web applications and gain a solid understanding of both front-end and back-end development.",
  },
  {
    id: 9,
    title: "Dicoding Courses",
    date: "Nov 2022 - Jan 2023",
    img: `${endpoint}certification/dicoding-header-logo.png`,
    link: "https://drive.google.com/drive/folders/1-KSYJ4qUtDQJXWH0eSfk4dEk1UqUQzyt?usp=sharing",
    description:
      "Dicoding Courses Finished: Belajar Dasar Google Cloud – Introduction to Google Cloud services, basic cloud concepts, and how to use Google Cloud tools. Memulai Pemrograman dengan Kotlin – Learn the fundamentals of programming with Kotlin, focusing on syntax, control flow, and object-oriented concepts. Belajar Dasar Structured Query Language (SQL) – Master the basics of SQL, including creating, reading, updating, and deleting data in relational databases. Belajar Dasar Manajemen Proyek – Learn the fundamentals of project management, including methodologies like Agile and Waterfall. Belajar Membuat Front-End Web untuk Pemula – Introduction to front-end web development, covering HTML, CSS, and basic JavaScript to create interactive web pages. Belajar Jaringan Komputer untuk Pemula – Learn the basics of computer networking, including network protocols, IP addressing, and how data is transmitted over networks. Belajar Dasar-Dasar DevOps – Understand the principles of DevOps, focusing on continuous integration, continuous delivery, and infrastructure automation. Belajar Dasar Pemrograman Web – Introduction to web programming, covering both front-end and back-end concepts, including HTML, CSS, and JavaScript. Belajar Back-End Pemula dengan JavaScript – Learn back-end development with JavaScript using Node.js to build server-side applications and APIs. Belajar Machine Learning untuk Pemula – Introduction to machine learning, covering key concepts, algorithms, and how to apply them using Python. Cloud Practitioner Essentials (Belajar Dasar AWS Cloud) – Learn the basics of AWS Cloud, including cloud architecture, security, and core AWS services. Belajar Prinsip Pemrograman SOLID – Understand the SOLID principles of object-oriented programming, which help to write clean, maintainable, and scalable code. Belajar Dasar Pemrograman JavaScript – Learn the fundamentals of JavaScript, including variables, data types, functions, and loops. Memulai Pemrograman dengan Python – Introduction to Python programming, covering basic syntax, data types, and programming concepts. Belajar Dasar Visualisasi Data – Learn the basics of data visualization, including how to create charts and graphs to represent data effectively.",
  },
  {
    id: 10,
    title: "Coursera Google IT Support",
    date: "Sep 2022 - Nov 2022",
    img: `${endpoint}/certification/Coursera.png`,
    link: "https://www.coursera.org/account/accomplishments/professional-cert/MG8DY2NHJJFY",
    description:
      "It took approximately 6 months, Learning and successful completion of the Google IT Support Specialization. Complete Course Certificate: 1) Computer Networking 2) Fundamentals IT Security: Defense Against Digital Threats 3) System Administration and IT Infrastructure Services 4) Operating Systems and You: Becoming a Power User 5) Technical Support Fundamentals",
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
            {index === 999 ? (
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
