import React from "react";
import "./button.css";
interface CarouselButtonProps {
  string?: string;
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
}

const Button = ({ string, className }: CarouselButtonProps) => {
  return (
    <button className={`custom-btn btn-7 ${className}`}>
      <span>{string}</span>
    </button>
  );
};

export default Button;
