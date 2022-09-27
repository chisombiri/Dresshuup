//functional component type from react
import { FC, ReactNode, ButtonHTMLAttributes } from "react";

import {
  BaseButton,
  GoogleAuthButton,
  InvertedButton,
  ButtonSpinner,
} from "./Button-Styles";

export enum button_type_classes {
  base = "base",
  google = "google-sign-in",
  inverted = "inverted",
}

//function returns one of the 3 button types
const getButton = (buttonType = button_type_classes.base): typeof BaseButton =>
  ({
    [button_type_classes.base]: BaseButton,
    [button_type_classes.google]: GoogleAuthButton,
    [button_type_classes.inverted]: InvertedButton,
  }[buttonType]);

export type ButtonProps = {
  children?: ReactNode;
  buttonType?: button_type_classes;
  isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({
  children,
  buttonType,
  isLoading,
  ...otherProps
}) => {
  const CustomButton = getButton(buttonType);
  return (
    <CustomButton disabled={isLoading} {...otherProps}>
      {isLoading ? <ButtonSpinner /> : children}
    </CustomButton>
  );
};

export default Button;
