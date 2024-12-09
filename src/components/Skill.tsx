import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
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
        <div id='technology' className='flex p-2 -mt-2 lg:-mt-10 lg:p-10  flex-col mb-10'>
            <h2 className='text-2xl lg:text-3xl font-bold text-black mb-1.5'>Skill Technical</h2>
            <span className='mb-3 text-md font-semibold text-slate-500'>Technologies and frameworks I have learned from the beginning to the present.</span>

            <div className='flex flex-wrap gap-2 lg:gap-3 justify-evenly mt-3 mb-5 '>
                <div className='flex flex-col gap-3 items-center h-32 w-32 lg:h-40 lg:w-40 bg-gradient-to-t to-orange-200 from-yellow-100 overflow-hidden justify-center m-2 p-8  rounded-full '>
                    <CodeIgniter className="h-32 w-32 lg:h-40 lg:w-40 rounded-full fill-orange-500" />
                    <span className='text-sm lg:text-md font-semibold text-slate-700 tracking-widest'>CodeIgniter</span>
                </div>
                <div className='flex flex-col gap-3 items-center h-32 w-32 lg:h-40 lg:w-40 bg-gradient-to-t to-pink-200 from-yellow-100 overflow-hidden justify-center m-2 p-8  rounded-full '>
                    <Laravel className="h-32 w-32 lg:h-40 lg:w-40 rounded-full fill-orange-500" />
                    <span className='text-sm lg:text-md font-semibold text-slate-700 tracking-widest'>Laravel</span>
                </div>
                <div className='flex flex-col gap-3 items-center h-32 w-32 lg:h-40 bg lg:w-40 bg-gradient-to-t to-indigo-200 from-emerald-100 overflow-hidden justify-center m-2 p-8  rounded-full '>
                    <Bootstrap className="h-32 w-32 lg:h-40 lg:w-40 rounded-full fill-indigo-500" />
                    <span className='text-sm lg:text-md font-semibold text-slate-700 tracking-widest'>Bootstrap</span>
                </div>
                <div className='flex flex-col gap-3 items-center h-32 w-32 lg:h-40 lg:w-40 bg-gradient-to-t to-slate-200 from-gray-100 overflow-hidden justify-center m-2 p-8  rounded-full '>
                    <Github className="h-32 w-32 lg:h-40 lg:w-40 rounded-full fill-slate-900" />
                    <span className='text-sm lg:text-md font-semibold text-slate-700 tracking-widest'>Github</span>
                </div>
                <div className='flex flex-col gap-3 items-center h-32 w-32 lg:h-40 lg:w-40 bg-gradient-to-t to-blue-200 from-indigo-100 overflow-hidden justify-center m-2 p-8  rounded-full '>
                    <MySQL className="h-32 w-32 lg:h-40 lg:w-40 rounded-full fill-blue-600" />
                    <span className='text-sm lg:text-md font-semibold text-slate-700 tracking-widest'>Github</span>
                </div>
                <div className='flex flex-col gap-3 items-center h-32 w-32 lg:h-40 lg:w-40 bg-gradient-to-t to-blue-200 from-cyan-100 overflow-hidden justify-center m-2 p-8  rounded-full '>
                    <Postgre className="h-32 w-32 lg:h-40 lg:w-40 rounded-full fill-blue-500" />
                    <span className='text-sm lg:text-md font-semibold text-slate-700 tracking-widest'>PostgreSQL</span>
                </div>
                <div className='flex flex-col gap-3 items-center h-32 w-32 lg:h-40 lg:w-40 bg-gradient-to-t to-cyan-200 from-blue-100 overflow-hidden justify-center m-2 p-8  rounded-full '>
                    <Flutter className="h-32 w-32 lg:h-40 lg:w-40 rounded-full fill-cyan-400" />
                    <span className='text-sm lg:text-md font-semibold text-slate-700 tracking-widest'>Flutter</span>
                </div>
                <div className='flex flex-col gap-3 items-center h-32 w-32 lg:h-40 lg:w-40 bg-gradient-to-t to-cyan-200 from-slate-100 overflow-hidden justify-center m-2 p-8  rounded-full '>
                    <TailwindCSS className="h-32 w-32 lg:h-40 lg:w-40 rounded-full fill-cyan-400" />
                    <span className='text-sm lg:text-md font-semibold text-slate-700 tracking-widest'>TailwindCSS</span>
                </div>
                <div className='flex flex-col gap-3 items-center h-32 w-32 lg:h-40 lg:w-40 bg-gradient-to-t to-cyan-200 from-slate-100 overflow-hidden justify-center m-2 p-8  rounded-full '>
                    <Reactjs className="h-32 w-32 lg:h-40 lg:w-40 rounded-full fill-cyan-400" />
                    <span className='text-sm lg:text-md font-semibold text-slate-700 tracking-widest'>React.js</span>
                </div>
                <div className='flex flex-col gap-3 items-center h-32 w-32 lg:h-40 lg:w-40 bg-gradient-to-t to-green-200 from-emerald-100 overflow-hidden justify-center m-2 p-8  rounded-full '>
                    <Nodejs className="h-32 w-32 lg:h-40 lg:w-40 rounded-full fill-green-700" />
                    <span className='text-sm lg:text-md font-semibold text-slate-700 tracking-widest'>Node.js</span>
                </div>
                <div className='flex flex-col gap-3 items-center h-32 w-32 lg:h-40 lg:w-40 bg-gradient-to-t to-slate-200 from-gray-100 overflow-hidden justify-center m-2 p-8  rounded-full '>
                    <Nextjs className="h-32 w-32 lg:h-40 lg:w-40 rounded-full fill-slate-900" />
                    <span className='text-sm lg:text-md font-semibold text-slate-700 tracking-widest'>Next.js</span>
                </div>
                <div className='flex flex-col gap-3 items-center h-32 w-32 lg:h-40 lg:w-40 bg-gradient-to-t to-indigo-200 from-slate-100 overflow-hidden justify-center m-2 p-8  rounded-full '>
                    <Prisma className="h-32 w-32 lg:h-40 lg:w-40 rounded-full fill-indigo-500" />
                    <span className='text-sm lg:text-md font-semibold text-slate-700 tracking-widest'>Prisma</span>
                </div>
                <div className='flex flex-col gap-3 items-center h-32 w-32 lg:h-40 lg:w-40 bg-gradient-to-t to-orange-200 from-slate-100 overflow-hidden justify-center m-2 p-8  rounded-full '>
                    <AdoAnimate className="h-32 w-32 lg:h-40 lg:w-40 rounded-full fill-orange-500" />
                    <span className='text-sm lg:text-md font-semibold text-slate-700 text-center tracking-widest'>Adobe Animate</span>
                </div>
                <div className='flex flex-col gap-3 items-center h-32 w-32 lg:h-40 lg:w-40 bg-gradient-to-t to-cyan-200 from-slate-100 overflow-hidden justify-center m-2 p-8  rounded-full '>
                    <AdoIllustrator className="h-32 w-32 lg:h-40 lg:w-40 rounded-full fill-cyan-500" />
                    <span className='text-sm lg:text-md font-semibold text-slate-700 text-center tracking-widest'>Adobe Illustrator</span>
                </div>
                {/* <div className='flex flex-col gap-3 items-center h-32 w-32 lg:h-40 lg:w-40 bg-gradient-to-t to-indigo-200 from-slate-100 overflow-hidden justify-center m-2 p-8  rounded-full '>
                    <Alibaba className="h-32 w-32 lg:h-40 lg:w-40 rounded-full fill-indigo-500" />
                    <span className='text-sm lg:text-md font-semibold text-slate-700 tracking-widest'>Alibaba Cloud</span>
                </div> */}
                {/* <div className='flex flex-col gap-3 items-center h-32 w-32 lg:h-40 lg:w-40 bg-gradient-to-t to-indigo-200 from-slate-100 overflow-hidden justify-center m-2 p-8  rounded-full '>
                    <Capcut className="h-32 w-32 lg:h-40 lg:w-40 rounded-full fill-indigo-500" />
                    <span className='text-sm lg:text-md font-semibold text-slate-700 tracking-widest'>Prisma</span>
                </div> */}
                <div className='flex flex-col gap-3 items-center h-32 w-32 lg:h-40 lg:w-40 bg-gradient-to-t to-pink-200 from-slate-100 overflow-hidden justify-center m-2 p-8  rounded-full '>
                    <Figma className="h-32 w-32 lg:h-40 lg:w-40 rounded-full fill-pink-500" />
                    <span className='text-sm lg:text-md font-semibold text-slate-700 text-center tracking-widest'>Figma</span>
                </div>
            </div>
            <div className='flex flex-wrap gap-2 lg:gap-6 mt-5'>
                <h2 className='text-2xl lg:text-3xl font-bold text-black mb-1'>Skills non-Technical :</h2>
                <p className=' text-lg  text-justify font-semibold text-slate-500'> Attention to Detail, Critical Thinking, Empathy, Flexibility, Respectfulness, Organized, Teamwork.</p>
            </div>
        </div>
    )
}

export default Skill