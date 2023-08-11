import React from "react";
import { Root } from "./theme";

interface IPropsType {
  children?: JSX.Element | JSX.Element[];
}

const Container: React.FC<IPropsType> = (props) => {
  const { children } = props;
  return <Root>{children}</Root>;
};

export default Container;
