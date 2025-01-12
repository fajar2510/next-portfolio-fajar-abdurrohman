// import Image from 'next/image'
// import Link from 'next/link'
import CodeIgniter from "../../public/img/tech/codeigniter.svg"
import Laravel from "../../public/img/tech/laravel.svg"
import Bootstrap from "../../public/img/tech/bootstrap.svg"
import MySQL from "../../public/img/tech/mysql.svg"
import Postgre from "../../public/img/tech/postgre.svg"
import Github from "../../public/img/tech/github.svg"
import Flutter from "../../public/img/tech/flutter.svg"
import TailwindCSS from "../../public/img/tech/tailwindcss.svg"
import Reactjs from "../../public/img/tech/reactjs.svg"
import Nodejs from "../../public/img/tech/nodejs.svg"
import Nextjs from "../../public/img/tech/nextjs.svg"
import Prisma from "../../public/img/tech/prisma.svg"
import AdoAnimate from "../../public/img/tech/adobe-animate.svg"
import AdoIllustrator from "../../public/img/tech/adobe-illustrator.svg"
// import Alibaba from "../../public/img/tech/alibaba-com.svg"
// import Capcut from "../../public/img/tech/Capcut-logo.png"
import Figma from "../../public/img/tech/figma-logo.svg"


const Skill = () => {
    return (
        <div id='technology' className='flex p-2 -mt-2 lg:-mt-10 lg:p-1  flex-col mb-10'>

            {/* Skill Technical */}
            <h2 className='text-2xl lg:text-3xl font-bold text-black mb-1.5'>Technical Skills</h2>
            <span className='mb-3 text-md font-semibold text-slate-800'>Technology or Stack use</span>

            <div className='flex flex-wrap gap-2 lg:gap-3 justify-evenly mt-3 mb-5 '>
                {[
                    { Component: CodeIgniter, name: "CodeIgniter", bgColor: "bg-orange-200", fill: "fill-orange-500" },
                    { Component: Laravel, name: "Laravel", bgColor: "bg-pink-200", fill: "fill-orange-500" },
                    { Component: Bootstrap, name: "Bootstrap", bgColor: "bg-indigo-200", fill: "fill-indigo-500" },
                    { Component: Github, name: "Github", bgColor: "bg-slate-200", fill: "fill-slate-900" },
                    { Component: MySQL, name: "MySQL", bgColor: "bg-blue-200", fill: "fill-blue-600" },
                    { Component: Postgre, name: "PostgreSQL", bgColor: "bg-blue-200", fill: "fill-blue-500" },
                    { Component: Flutter, name: "Flutter", bgColor: "bg-cyan-200", fill: "fill-cyan-400" },
                    { Component: TailwindCSS, name: "TailwindCSS", bgColor: "bg-cyan-200", fill: "fill-cyan-400" },
                    { Component: Reactjs, name: "React.js", bgColor: "bg-cyan-200", fill: "fill-cyan-400" },
                    { Component: Nodejs, name: "Node.js", bgColor: "bg-green-200", fill: "fill-green-700" },
                    { Component: Nextjs, name: "Next.js", bgColor: "bg-slate-200", fill: "fill-slate-900" },
                    { Component: Prisma, name: "Prisma", bgColor: "bg-indigo-200", fill: "fill-indigo-500" },
                    { Component: AdoAnimate, name: "Adobe Animate", bgColor: "bg-orange-200", fill: "fill-orange-500" },
                    { Component: AdoIllustrator, name: "Adobe Illustrator", bgColor: "bg-cyan-200", fill: "fill-cyan-500" },
                    { Component: Figma, name: "Figma", bgColor: "bg-pink-200", fill: "fill-pink-500" }
                ].map(({ Component, name, bgColor, fill }) => (

                    <div key={name} className={`flex flex-col gap-1 items-center h-32 w-32 lg:h-40 lg:w-40 ${bgColor} border-2 border-black overflow-hidden justify-center m-2 p-3 md:p-6 rounded-3xl`}>
                        <Component className={`h-32 w-32 lg:h-44 lg:w-44  ${fill}`} />
                        <span className=' text-sm lg:text-base lg:text-md text-center font-semibold md:font-bold text-slate-700 tracking-widest hidden md:block'>{name}</span>
                    </div>
                ))}
            </div>

            {/* Skill Non-Technical */}
            <div className='flex flex-col gap-2 lg:gap-4 mt-5'>
                <h2 className='text-2xl lg:text-3xl font-bold text-black '>non-Technical Skills</h2>
                <div className='flex flex-col md:flex-row md:flex-wrap justify-between gap-2'>
                    <p className='text-lg font-bold text-black text-center bg-yellow-300 border-2 border-black px-3 py-2 rounded-3xl'>Attention to Detail</p>
                    <p className='text-lg font-bold text-black text-center bg-pink-300 border-2 border-black px-3 py-2 rounded-3xl'>Critical Thinking</p>
                    <p className='text-lg font-bold text-black text-center bg-green-300 border-2 border-black px-3 py-2 rounded-3xl'>Empathy</p>
                    <p className='text-lg font-bold text-black text-center bg-blue-300 border-2 border-black px-3 py-2 rounded-3xl'>Flexibility</p>
                    <p className='text-lg font-bold text-black text-center bg-purple-300 border-2 border-black px-3 py-2 rounded-3xl'>Respectfulness</p>
                    <p className='text-lg font-bold text-black text-center bg-red-300 border-2 border-black px-3 py-2 rounded-3xl'>Organized</p>
                    <p className='text-lg font-bold text-black text-center bg-orange-300 border-2 border-black px-3 py-2 rounded-3xl'>Teamwork</p>
                </div>
            {/* <div className='flex flex-wrap gap-3 items-center justify-between'>
               
                <div className="w-[22rem] h-[20rem] lg:h-[20rem] mb-5 rounded-3xl duration-300 transition ease-in-out border border-1 border-slate-500   overflow-hidden group hover:scale-[97%]">
                    <div className="h-[20rem] group-hover:scale-[105%] duration-300 transition ease-in-out  rounded-3xl p-8 bg-[url('https://ik.imagekit.io/fajarblog/porto/skill/nontech3.jpeg')] bg-cover bg-center "/>
                </div>
               
                <div className="w-[22rem] h-[20rem] lg:h-[20rem] mb-5 rounded-3xl duration-300 transition ease-in-out border border-1 border-slate-500   overflow-hidden group hover:scale-[97%]">
                    <div className="h-[20rem] group-hover:scale-[105%] duration-300 transition ease-in-out  rounded-3xl p-8 bg-[url('https://ik.imagekit.io/fajarblog/porto/skill/nontech1.jpeg')] bg-cover bg-center "/>
                </div>
              
                <div className="w-[22rem] h-[20rem] lg:h-[20rem] mb-5 rounded-3xl duration-300 transition ease-in-out border border-1 border-slate-500   overflow-hidden group hover:scale-[97%]">
                    <div className="h-[20rem] group-hover:scale-[105%] duration-300 transition ease-in-out  rounded-3xl p-8 bg-[url('https://ik.imagekit.io/fajarblog/porto/skill/nontech2.jpeg')] bg-cover bg-center "/>
                </div>
            </div> */}

            </div>
        </div>
    )
}

export default Skill