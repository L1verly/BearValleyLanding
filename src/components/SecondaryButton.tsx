import Button from "./Button";
import { type CustomButtonProps } from "../types/types";

const colorText = "text-black";
const colorBg = "bg-white";
// "bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300";

const SecondaryButton = (props: CustomButtonProps) => (
  <Button bgColor={colorBg} textColor={colorText} title={props.title} />
);

export default SecondaryButton;
