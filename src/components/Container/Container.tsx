import React from "react";
import s from "./Container.module.scss";

interface IPropsType {
  children: JSX.Element;
  className?: string;
}

const Container: React.FC<IPropsType> = (props) => {
  const { children, className } = props;
  return <div className={`${s.container} ${className}`}>{children}</div>;
};

export default Container;
