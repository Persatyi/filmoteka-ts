import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  Typography,
} from "@mui/material";

const MovieCard: React.FC = () => {
  return (
    <Card
      sx={{
        width: { xs: "280px", tablet: "294px", desktop: "274px" },
        height: "440px",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          alt="movie"
          height="398px"
          image={require("../../assets/images/Rectangle.jpg")}
          sx={{
            borderRadius: "5px",
            objectFit: "cover",
            height: "398px",
            overflow: "hidden",
            width: { xs: "280px", tablet: "294px", desktop: "274px" },
          }}
        />
        <CardContent sx={{ pt: "8px", pb: "0px", pl: "3px", pr: "3px" }}>
          <Typography
            component="span"
            sx={{
              fontFamily: "Roboto, sans-serif",
              fontWeight: 500,
              fontSize: "12px",
              lineHeight: 1.16,
            }}
          >
            Lorem ipsum dolor sit amet.
          </Typography>
          <Typography
            component="span"
            sx={{
              display: "flex",
              fontFamily: "Roboto, sans-serif",
              fontWeight: 500,
              fontSize: "12px",
              lineHeight: 1.33,
              color: "custom.main",
            }}
          >
            Movie Name | 2023
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default MovieCard;
