import Button from "./Button";
import { type CustomButtonProps } from "../../types/types";

const classStyles = "text-white";
const styles = {
  backgroundColor: "var(--color-accent)",
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
