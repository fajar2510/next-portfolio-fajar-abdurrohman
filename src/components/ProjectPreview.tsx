import React from 'react'
import Arrow from "../../public/arrow.svg"
// import { motion } from 'framer-motion';

interface Props {
    name?: string | undefined;
    description?: string | undefined;
    imageUrl?: string | undefined;
    bgColor?: string | undefined;
    dark?: boolean | undefined;
}

const ProjectPreview: React.FC<Props> = ({
    name = "Project Name",  
    description = "Project Description",
    imageUrl = "/project-1.png",
    bgColor = "#e4e4e7",
    dark = false,
}) => {
  return (

    <div 
    className={`h-[29rem] lg:h-[30rem] rounded-3xl overflow-hidden ${dark ? "dark" : ""}`} 
    style={{background: `${bgColor}`}}
    // initial= "initial"
    // whileInView="animate"
    // variants={PreviewAnimation}
  
    >
        <div className='h-full w-full px-10 py-6 duration-[500ms] transition-all ease-in-out hover:scale-105 object-cover bg-cover bg-no-repeat bg-center'
            style={{ backgroundImage: `url('${imageUrl}')`}}>
            <div className='flex justify-between'>
                <div>
                    <h2 className='font-medium text-black text-lg dark:text-white'>{name}</h2>
                    <p className='text-sm text-white'>{description}</p>
                </div>
                <div className='h-8 w-16 lg:h-10 lg:w-16 bg-white rounded-full flex justify-center items-center cursor-pointer'>
                    <Arrow className="w-4 h-4 lg:w-6 lg:h-6"/>
                </div>
            </div>
        </div>
    </div>
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