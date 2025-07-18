import Button from "./Button";
import { type CustomButtonProps } from "../types/types";

const classStyles = "text-white hover:";
// const colorBg = "hover:bg-blue-800 focus:ring-blue-300";
const styles = {
  backgroundColor: "#046001",
};

const PrimaryButton = (props: CustomButtonProps) => (
  <Button
    styleProps={styles}
    classProps={classStyles}
    title={props.title}
    href={props.href}
  />
);

export default PrimaryButton;
