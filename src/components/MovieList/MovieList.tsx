import React from "react";
import { Box } from "@mui/material";

interface IProps {
  children: JSX.Element[];
}

const MovieList: React.FC<IProps> = ({ children }) => {
  return (
    <Box
      display="grid"
      gridTemplateColumns={{
        xs: "repeat(1, 1fr)",
        tablet: "repeat(2, 1fr)",
        laptop: "repeat(3, 1fr)",
      }}
      gap={{ xs: 0, tablet: 2 }}
      sx={{ justifyItems: { mobile: "center" } }}
    >
      {children}
    </Box>
  );
};

export default MovieList;
