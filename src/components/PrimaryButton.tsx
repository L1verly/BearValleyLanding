import Button from "./Button";
import { type CustomButtonProps } from "../types/types";

const colorText = "text-white";
// const colorBg = "hover:bg-blue-800 focus:ring-blue-300";
const colorBg = "#046001";

const PrimaryButton = (props: CustomButtonProps) => (
  <Button bgColor={colorBg} textColor={colorText} title={props.title} />
);

export default PrimaryButton;
