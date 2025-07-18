import { type ButtonProps } from "../types/types";

const Button = (props: ButtonProps) => {
  return (
    <a
      href={props.href}
      className={
        props.classProps +
        " " +
        `transition-all duration-200 hover:scale-105 truncate
        font-medium rounded-lg text-sm px-7 py-4 me-2 mb-2`
      }
      style={{ ...props.styleProps }}
    >
      <span className="select-none">{props.title}</span>
    </a>
  );
};

export default Button;
