import Button from "./Button";
import { type CustomButtonProps } from "../../types/types";

const styles = {
  border: "solid 1px var(--color-accent)",
  // hover: {
  //   background: "var(--color-accent)",
  // },
};
// "bg-blue-700 hover:bg-blue-800 focus:ring-blue-300";

const SecondaryButton = (props: CustomButtonProps) => (
  <Button
    styleProps={styles}
    classProps={"text-black"}
    title={props.title}
    href={props.href}
  />
);

export default SecondaryButton;
