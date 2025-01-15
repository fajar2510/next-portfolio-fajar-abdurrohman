import Link from "next/link";

interface ButtonProps {
  href: string;
  target?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({
  // default params
  href,
  target = "_self",
  children,
  className = "",
  variant = "primary",
}) => {
  const variantClass = (() => {
    switch (variant) {
      case "primary":
        return "bg-black text-white border-black hover:bg-white hover:text-black";
      case "secondary":
        return "bg-amber-500 text-black border-amber-500 hover:bg-amber-600 hover:text-white";
      default:
        return "";
    }
  })();

  return (
    <Link
      href={href}
      target={target}
      className={`tracking-widest px-8 py-3 md:px-10 lg:px-16  text-sm md:text-base  border-2 font-bold rounded-full hover:scale-95 transition-all duration-300 ease-in-out  ${variantClass} ${className}`}
    >
      {children}
    </Link>
  );
};

export default Button;
