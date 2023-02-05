import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { Root, theme } from "./theme";

interface IPropsType {
  children?: JSX.Element;
}

const Container: React.FC<IPropsType> = (props) => {
  const { children } = props;
  return (
    <ThemeProvider theme={theme}>
      <Root>{children}</Root>
    </ThemeProvider>
  );
};

export default Container;
