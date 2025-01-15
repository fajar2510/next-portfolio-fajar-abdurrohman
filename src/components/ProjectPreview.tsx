import React, { useState } from "react";
import Arrow from "../../public/arrow.svg";
import { motion } from "framer-motion";

interface ProjectPreviewProps {
  name?: string | undefined;
  description?: string | undefined;
  imageUrl?: string | undefined;
  bgColor?: string | undefined;
  url?: string | undefined;
  dark?: boolean | undefined;
}

const IKIT = process.env.NEXT_PUBLIC_IK_URL_ENDPOINT;

const ProjectPreview: React.FC<ProjectPreviewProps> = ({
  name,
  description,
  imageUrl,
  bgColor,
  url,
  dark = false,
}) => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <motion.div
      className={`h-[29rem] lg:h-[30rem] shadow-brutalism rounded-3xl overflow-hidden ${
        dark ? "dark" : ""
      }`}
      style={{ background: `${bgColor}` }}
      initial="initial"
      animate={isVisible ? "animate" : "exit"}
      onViewportEnter={() => setIsVisible(true)}
      onViewportLeave={() => setIsVisible(false)}
      viewport={{ once: false, amount: 0.2 }}
      variants={PreviewAnimation}
    >
      <a href={url} target="_blank" rel="noopener noreferrer">
        <div
          className="h-full w-full px-4 py-6 duration-[400ms] transition-all ease-in-out hover:scale-[102%] object-cover bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: `url('${IKIT}${imageUrl}')` }}
        >
          <div className="flex">
            <div className="container rounded-xl bg-black p-1.5 lg:p-2 lg:bg-transparent">
              <h2 className="font-bold text-black text-lg dark:text-white leading-relaxed">
                {name}
              </h2>
              <p className="text-sm font-normal text-white leading-snug">
                {description}
              </p>
            </div>
            <div className="relative flex justify-center items-center">
              <div className="border-2 border-black h-14 w-14 bg-white hover:bg-amber-400 rounded-full flex justify-center items-center cursor-pointer">
                <Arrow className="w-6 h-6 " />
              </div>
            </div>
          </div>
        </div>
      </a>
    </motion.div>
  );
};

const PreviewAnimation = {
  initial: {
    x: 30,
    opacity: 0.7,
    scale: 1,
  },
  animate: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 1,
    },
  },
  // exit: {
  //   y: -10,
  //   opacity: 0,
  //   scale: 0.9,
  // },
};

export default ProjectPreview;
