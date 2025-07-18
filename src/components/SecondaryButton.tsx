import Button from "./Button";
import { type CustomButtonProps } from "../types/types";

const classStyles = "text-black";
const styles = {
  border: "solid 1px #046001",
  hover: {
    background: "#046001",
  },
};
// "bg-blue-700 hover:bg-blue-800 focus:ring-blue-300";

const SecondaryButton = (props: CustomButtonProps) => (
  <Button
    styleProps={styles}
    classProps={classStyles}
    title={props.title}
    href={props.href}
  />
);

export default SecondaryButton;
