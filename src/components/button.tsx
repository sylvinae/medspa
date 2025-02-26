import * as React from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?:
    | "black"
    | "purple"
    | "white"
    | "pinkish"
    | "danger"
    | "success"
    | "text";
  className?: string;
  onClick?: () => void;
}
const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  onClick,
  className,
}) => {
  let classes = " ";

  switch (variant) {
    case "black":
      classes += " px-4 py-2 text-white bg-gray-900 rounded-sm";
      break;
    case "purple":
      classes += " px-4 py-2 text-white bg-[#46264B] rounded-sm";
      break;
    case "pinkish":
      classes += " px-4 py-2 text-black bg-[#E0C7C2] rounded-sm";
      break;
    case "white":
      classes +=
        " px-4 py-2 text-black border-[1px] border-gray-800 rounded-sm bg-white";
      break;

    case "text":
      classes += " p-2 text-black";
      break;
    default:
      break;
  }
  return (
    <button className={className + classes} onClick={onClick}>
      {children}
    </button>
  );
};
export default Button;
