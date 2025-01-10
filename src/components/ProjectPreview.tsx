import React, { useState } from 'react'
import Arrow from "../../public/arrow.svg"
// import Link from "next/link"
import { motion } from 'framer-motion';

interface Props {
    name?: string | undefined;
    description?: string | undefined;
    imageUrl?: string | undefined;
    bgColor?: string | undefined;
    url?: string | undefined;
    dark?: boolean | undefined;
}


const endpoint='https://ik.imagekit.io/fajarblog/porto/'
const ProjectPreview: React.FC<Props> = ({
    name = "Project Name",  
    description = "Project Description",
    imageUrl = "/project-1.png",
    bgColor = "#e4e4e7",
    url = "#",
    dark = false,
}) => {

    const [hasAnimated, setHasAnimated] = useState(false);

  return (

        <motion.div 
        className={`h-[29rem] lg:h-[30rem] shadow-brutalism rounded-3xl overflow-hidden ${dark ? "dark" : ""}`} 
        style={{background: `${bgColor}`}}
        initial= "initial"
        animate={hasAnimated ? "animate" : "initial"}
        onViewportEnter={() => setHasAnimated(true)} // Animasi hanya terjadi sekali
        variants={PreviewAnimation}
    
        >
        <a href={url} target="_blank" rel="noopener noreferrer">
            <div className='h-full w-full px-4 py-6 duration-[500ms] transition-all ease-in-out hover:scale-105 object-cover bg-cover bg-no-repeat bg-center'
            style={{ backgroundImage: `url('${endpoint}${imageUrl}')`}}>
            <div className='flex'>
                <div className='container rounded-md bg-slate-600 p-0 lg:p-0 lg:bg-transparent'>
                    <h2 className='font-medium text-black text-lg dark:text-white'>{name}</h2>
                    <p className='text-sm text-white'>{description}</p>
                </div>
                {/* Elemen lingkaran dengan panah */}
                <div className='relative flex justify-center items-center'>
                    <div className='border-2 border-black h-14 w-14 bg-white hover:bg-slate-300 rounded-full flex justify-center items-center cursor-pointer'>
                    <Arrow className="w-6 h-6 "/>
                    </div>
                </div>
            </div>
        </div>
        </a>
        <div className="p-2 flex flex-col">
            <h2 className="font-medium text-lg text-black">Simple Try</h2>
            <a href="" target="_blank"> Simple Create Read Update Delete on Laravel 10 </a>
        </div>
    </motion.div>

  );
};

const PreviewAnimation = {
    initial: {
        y: 30,
        opacity: 0,
        scale: 0.9,
    },
    animate: {
        y: 0,
        opacity: 1,
        scale: 1,
        transition: {
            ease: [0.6, 0.01, 0.05, 0.95],
            duration: 0.8,
        },
    },
};

export default ProjectPreview