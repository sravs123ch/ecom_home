import React from "react";
import { motion } from "framer-motion";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "link";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  isLoading = false,
  leftIcon,
  rightIcon,
  className = "",
  disabled,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

  const variantStyles = {
    primary:
      "bg-[#FF5A5F] text-white hover:bg-[#FF5A5F] focus-visible:ring-[#FF5A5F]",
    secondary:
      "bg-emerald-600 text-white hover:bg-emerald-700 focus-visible:ring-emerald-500",
    outline:
      "border border-slate-300 bg-transparent hover:bg-slate-100 text-slate-700 focus-visible:ring-slate-400",
    ghost:
      "bg-transparent hover:bg-slate-100 text-slate-700 focus-visible:ring-slate-400",
    link: "bg-transparent underline-offset-4 hover:underline text-indigo-600 hover:text-indigo-700 p-0 focus-visible:ring-indigo-500",
  };

  const sizeStyles = {
    sm: "text-sm h-8 px-3",
    md: "text-sm h-10 px-4 py-2",
    lg: "text-base h-12 px-6",
  };

  const widthStyle = fullWidth ? "w-full" : "";

  const allStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyle} ${className}`;

  return (
    <motion.button
      className={allStyles}
      disabled={isLoading || disabled}
      whileTap={{ scale: 0.97 }}
      {...(props as any)}
    >
      {isLoading && (
        <svg
          className="mr-2 h-4 w-4 animate-spin"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      )}
      {!isLoading && leftIcon && <span className="mr-2">{leftIcon}</span>}
      {children}
      {!isLoading && rightIcon && <span className="ml-2">{rightIcon}</span>}
    </motion.button>
  );
};
