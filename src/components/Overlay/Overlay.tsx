import React from "react";
import Backdrop from "@mui/material/Backdrop";

interface IProps {
  onClose: Function;
  children: JSX.Element;
  open: boolean;
}

const Overlay: React.FC<IProps> = ({ onClose, children, open }) => {
  const handleClick = (e: React.SyntheticEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <Backdrop
      sx={{
        color: "#fff",
        zIndex: (theme) => theme.zIndex.drawer + 1,
        overflowY: "auto",
        alignItems: { xs: "start", tablet: "center" },
      }}
      open={open}
      onClick={handleClick}
    >
      {children}
    </Backdrop>
  );
};

export default Overlay;
