import React from "react";
import { Skeleton, Box } from "@mui/material";

const MovieSkeleton = () => {
  const array = [];

  for (let i = 1; i <= 20; i += 1) {
    array.push({ key: i });
  }

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
      {array.map((el) => (
        <Box gridColumn="span 1" key={el.key}>
          <Skeleton
            animation="wave"
            component="div"
            variant="rounded"
            sx={{
              borderRadius: "5px",
              objectFit: "cover",
              height: "398px",
              overflow: "hidden",
              width: { xs: "280px", tablet: "294px", desktop: "274px" },
            }}
          />
          <Skeleton variant="text" sx={{ fontSize: "1rem", height: "42px" }} />
        </Box>
      ))}
    </Box>
  );
};

export default MovieSkeleton;
