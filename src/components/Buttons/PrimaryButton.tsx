import Button from "./Button";
import { type CustomButtonProps } from "../../types/types";

const PrimaryButton = (props: CustomButtonProps) => (
  <Button
    classProps={"text-white bg-(--color-accent)"}
    title={props.title}
    href={props.href}
  />
);

export default PrimaryButton;
