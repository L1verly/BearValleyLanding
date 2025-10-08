import { type ButtonProps } from "../../types/types";

const Button = (props: ButtonProps) => {
  return (
    <a
      target="_blank"
      href={props.href}
      className={
        props.classProps +
        " " +
        `transition-all duration-200 hover:scale-105 active:scale-105 truncate
        font-medium rounded-lg text-base px-8 py-4 text-center`
      }
    >
      <span className="select-none">{props.title}</span>
    </a>
  );
};

export default Button;
