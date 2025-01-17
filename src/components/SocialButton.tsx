import React, { ReactNode } from "react";

interface SocialButtonProps {
  children: ReactNode;
  bgColor?: string | undefined;
}

const SocialButton: React.FC<SocialButtonProps> = ({
  children,
  bgColor = "black",
}) => {
  // REACT.FC untuk penggunaan children
  let bgHoverColorClass;

  switch (bgColor) {
    case "github":
      bgHoverColorClass = "hover:bg-github";
      break;
    case "twitter":
      bgHoverColorClass = "hover:bg-twitter";
      break;
    case "instagram":
      bgHoverColorClass = "hover:bg-instagram";
      break;
    case "linkedin":
      bgHoverColorClass = "hover:bg-linkedin";
      break;
    case "replit":
      bgHoverColorClass = "hover:bg-replit";
      break;
    default:
      bgHoverColorClass = "hover:bg-black";
      break;
  }

  return (
    <button
      className={`group h-10 w-10 lg:h-12 lg:w-12 bg-white ${bgHoverColorClass} border-2 border-black rounded-full  duration-300 ease-in-out transition-all hover:scale-110 flex justify-center items-center`}
    >
      <div className="fill-black group-hover:fill-white transition-colors duration-300 ease-in-out">
        {children}
      </div>
    </button>
  );
};

export default SocialButton;
