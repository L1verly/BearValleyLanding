import React from "react";
import { type ButtonProps } from "../types/types";

const Button = (props: ButtonProps) => {
  return (
    <a
      className={
        props.textColor +
        " " +
        `hover:!bg-green-700 transition-all duration-200 hover:scale-105 
        font-medium rounded-lg text-sm px-5 py-3 me-3 mb-2 focus:outline-none focus:ring-4`
      }
      style={{ backgroundColor: props.bgColor }}
    >
      <span className="select-none">{props.title}</span>
    </a>
  );
};

export default Button;
