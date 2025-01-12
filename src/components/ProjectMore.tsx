import React from 'react'

const ProjectMore = () => {
  return (
    <div className="p-2 flex flex-col flex-wrap">
    <h2 className="font-semibold text-lg text-black mb-2">more project</h2>
     <ul className="list-disc" >
       <li className="flex flex-wrap">
         <a href="https://github.com/fajar2510/laravel11" target="_blank" className="font-normal text-slate-700 text-md border-b border-slate-300 hover:border-none"> 
         ▫️ Simple Blog with Laravel 11, TailwindCSS, and SQlite  
         </a>
       </li>
       <li className="flex flex-wrap">
         <a href="https://github.com/fajar2510/crud-laravel-10" target="_blank" className="font-normal text-slate-700 text-md border-b border-slate-300 hover:border-none"> 
         ▫️ Simple CRUD(Create-Read-Update-Delete) with Laravel 10  
         </a>
       </li>

       <li className="flex flex-wrap">
         <a href="https://github.com/fajar2510/rest-api-laravel-10" target="_blank" className="font-normal text-slate-700 text-md border-b border-slate-300 hover:border-none"> 
         ▫️ REST API with Laravel 10 (tested in postman) 
         </a>
       </li>

       <li className="flex flex-wrap">
         <a href="https://github.com/fajar2510/next-crud" target="_blank" className="font-normal text-slate-700 text-md border-b border-slate-300 hover:border-none"> 
         ▫️ Simple CRUD(Create-Read-Update-Delete) with Next.js, Prisma, and Typescript
         </a>
       </li>

       <li className="flex flex-wrap">
         <a href="https://github.com/fajar2510/nodejs-reactjs-crud" target="_blank" className="font-normal text-slate-700 text-md border-b border-slate-300 hover:border-none"> 
         ▫️ Simple CRUD(Create-Read-Update-Delete) with Express, Axios, MySql, Vite+ReactJs, TailwindCSS
         </a>
       </li>

       <li className="flex flex-wrap">
         <a href="https://github.com/fajar2510/myblog-next" target="_blank" className="font-normal text-slate-700 text-md border-b border-slate-300 hover:border-none"> 
         ▫️ Blog with Login System, CRUD, Middleware,Typescript, Prisma, TailwindCSS (styling), and MongoDB (Database)
         {/* <span className="text-pink-600 font-semibold text-base">Deployed on Vercel!</span>  */}
         </a>
       </li>
     </ul>
     
      
  </div>
  )
}

export default ProjectMore