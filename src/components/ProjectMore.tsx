interface ProjectProps {
  name: string;
  url: string;
  description: string;
}

const projects: ProjectProps[] = [
  {
    name: "Simple Blog with Laravel 11, TailwindCSS, and SQlite",
    url: "https://github.com/fajar2510/laravel11",
    description: "▫️ Simple Blog with Laravel 11, TailwindCSS, and SQlite",
  },
  {
    name: "Simple CRUD(Create-Read-Update-Delete) with Laravel 10",
    url: "https://github.com/fajar2510/crud-laravel-10",
    description: "▫️ Simple CRUD(Create-Read-Update-Delete) with Laravel 10",
  },
  {
    name: "REST API with Laravel 10 (tested in postman)",
    url: "https://github.com/fajar2510/rest-api-laravel-10",
    description: "▫️ REST API with Laravel 10 (tested in postman)",
  },
  {
    name: "Simple CRUD(Create-Read-Update-Delete) with Next.js, Prisma, and Typescript",
    url: "https://github.com/fajar2510/next-crud",
    description:
      "▫️ Simple CRUD(Create-Read-Update-Delete) with Next.js, Prisma, and Typescript",
  },
  {
    name: "Simple CRUD(Create-Read-Update-Delete) with Express, Axios, MySql, Vite+ReactJs, TailwindCSS",
    url: "https://github.com/fajar2510/nodejs-reactjs-crud",
    description:
      "▫️ Simple CRUD(Create-Read-Update-Delete) with Express, Axios, MySql, Vite+ReactJs, TailwindCSS",
  },
  {
    name: "Blog with Login System, CRUD, Middleware,Typescript, Prisma, TailwindCSS (styling), and MongoDB (Database)",
    url: "https://github.com/fajar2510/myblog-next",
    description:
      "▫️ Blog with Login System, CRUD, Middleware,Typescript, Prisma, TailwindCSS (styling), and MongoDB (Database)",
  },
];

const ProjectMore: React.FC = () => {
  return (
    <div className="p-2 flex flex-col flex-wrap">
      <h2 className="font-semibold text-lg text-black mb-2">more project</h2>
      <ul className="list-disc">
        {projects.map((project, index) => (
          <li key={index} className="flex flex-wrap">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-normal text-slate-700 text-md underline hover:no-underline hover:text-amber-700 transition-all duration-300 ease-in-out"
            >
              {project.description}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectMore;
