import React from "react";

import CircularProgress from "@mui/material/CircularProgress";

interface IProps {
  theme?: "light" | "main";
}

const ButtonLoader: React.FC<IProps> = ({ theme = "main" }) => {
  return (
    <>
      <CircularProgress
        size={24}
        sx={{
          color: theme === "light" ? "#fff" : "#ff6b08",
          position: "absolute",
          top: "50%",
          left: "50%",
          marginTop: "-12px",
          marginLeft: "-12px",
        }}
      />
    </>
  );
};

export default ButtonLoader;
