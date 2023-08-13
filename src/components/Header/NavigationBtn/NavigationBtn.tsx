import React from "react";
import { StyledButton } from "./NavigationBtnTheme";

interface IPropsType {
  children?: string | undefined;
  variant?: "contained" | "outlined" | "text";
  size?: "large" | "small" | "medium";
}

const NavigationBtn: React.FC<IPropsType> = ({
  children,
  variant = "contained",
  size = "large",
}) => {
  return (
    <StyledButton size={size} variant={variant}>
      {children}
    </StyledButton>
  );
};

export default NavigationBtn;
