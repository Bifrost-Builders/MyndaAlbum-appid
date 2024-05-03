import React from "react";

/* 

  Styled jsx button element

*/

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string;
}

const Button: React.FC<ButtonProps> = ({ title = "Click here", ...props }) => {
  return (
    <button
      className="h-12 w-44 rounded-[5px] bg-white text-black font-bold text-lg my-1 hover:bg-slate-100 hover:-translate-y-1 hover:transition-all z-30"
      {...props}
    >
      {title}
    </button>
  );
};

export default Button;