import React from "react";
import Backdrop from "@mui/material/Backdrop";

interface IProps {
  onClick: Function;
  children: JSX.Element;
  open: boolean;
}

const Overlay: React.FC<IProps> = ({ onClick, children, open }) => {
  const handleClick = (e: React.SyntheticEvent) => {
    if (e.target === e.currentTarget) onClick();
  };

  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open}
      onClick={handleClick}
    >
      {children}
    </Backdrop>
  );
};

export default Overlay;
