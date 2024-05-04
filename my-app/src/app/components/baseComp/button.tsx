import React from "react";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string;
  variant?: "default" | "secondary";
  size?: "default" | "sm";
}

const ButtonVariant = cva(
  "my-1 hover:bg-slate-100 hover:-translate-y-1 hover:transition-all z-30",
  {
    variants: {
      variant: {
        default: "bg-white text-black",
        secondary: "bg-black text-white",
      },
      size: {
        default: "h-12 w-44 rounded-[5px] font-bold text-lg",
        sm: "h-9 w-24 rounded-[3px] font-semibold text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button: React.FC<ButtonProps> = ({
  title = "Click here",
  variant = "default",
  size = "default",
  className,
  ...props
}) => {
  const buttonClasses = twMerge(ButtonVariant({ variant, size }), className);
  return (
    <button className={buttonClasses} {...props}>
      {title}
    </button>
  );
};

export default Button;