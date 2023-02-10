import { Box } from "@mui/material";

import Container from "../Container";

import sprite from "assets/images/Sprite/sprite.svg";

const currentTime = new Date();
const year = currentTime.getFullYear();

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        pt: { xs: "30px" },
        pb: { xs: "30px" },
        backgroundColor: "#F7F7F7",
      }}
    >
      <Container>
        <Box
          component="p"
          sx={{
            textAlign: "center",
            color: "#545454",
            fontFamily: "Roboto, sans-serif",
            fontWeight: 400,
            fontSize: { xs: "14px", tablet: "16px" },
            lineHeight: 1.14,
          }}
        >
          &#169; {year} | All Rights Reserved | Developed with &nbsp;
          <svg width="14px" height="12px">
            <use href={`${sprite}#icon-heart`}></use>
          </svg>
          &nbsp; by Alex Persatyi
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
