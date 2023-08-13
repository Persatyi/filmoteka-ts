import React from "react";
import { Root } from "./theme";

interface IPropsType {
  children?: JSX.Element | JSX.Element[];
}

const Container: React.FC<IPropsType> = ({ children }) => {
  return <Root>{children}</Root>;
};

export default Container;
