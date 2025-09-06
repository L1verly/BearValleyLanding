import Button from "./Button";
import { type CustomButtonProps } from "../../types/types";

const SecondaryButton = (props: CustomButtonProps) => (
  <Button
    classProps={"text-black border border-(--color-accent)"}
    title={props.title}
    href={props.href}
  />
);

export default SecondaryButton;
