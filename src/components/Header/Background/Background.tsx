import React from "react";

import { CardMedia } from "@mui/material";

interface IProps {
  type: 0 | 1;
}

const Background: React.FC<IProps> = (props) => {
  const { type } = props;

  if (type === 0) {
    return (
      <CardMedia component="picture">
        <CardMedia
          component="source"
          srcSet={`${require("../../../assets/images/header/desktop/main_bg.jpg")} 1x, ${require("../../../assets/images/header/desktop/main_bg_2x.jpg")} 2x,`}
          media="(min-width: 1024px)"
          type="image/jpeg"
        />
        <CardMedia
          component="source"
          srcSet={`${require("../../../assets/images/header/tablet/main_bg.jpg")} 1x, ${require("../../../assets/images/header/tablet/main_bg_2x.jpg")} 2x,`}
          media="(min-width: 480px)"
          type="image/jpeg"
        />
        <CardMedia
          component="source"
          srcSet={`${require("../../../assets/images/header/mobile/main_bg.jpg")} 1x, ${require("../../../assets/images/header/mobile/main_bg_2x.jpg")} 2x`}
          media="(max-width: 480px)"
          type="image/jpeg"
        />
        <CardMedia
          component="img"
          src={require("../../../assets/images/header/mobile/main_bg.jpg")}
          alt="Main background"
          aria-label="Main background"
          loading="lazy"
          height="230px"
          sx={{ position: "absolute", top: "0px", zIndex: "0" }}
        />
      </CardMedia>
    );
  } else {
    return (
      <CardMedia component="picture">
        <CardMedia
          component="source"
          srcSet={`${require("../../../assets/images/header/desktop/secondary_bg.jpg")} 1x, ${require("../../../assets/images/header/desktop/secondary_bg_2x.jpg")} 2x,`}
          media="(min-width: 1024px)"
          type="image/jpeg"
        />
        <CardMedia
          component="source"
          srcSet={`${require("../../../assets/images/header/tablet/secondary_bg.jpg")} 1x, ${require("../../../assets/images/header/tablet/secondary_bg_2x.jpg")} 2x,`}
          media="(min-width: 480px)"
          type="image/jpeg"
        />
        <CardMedia
          component="source"
          srcSet={`${require("../../../assets/images/header/mobile/secondary_bg.jpg")} 1x, ${require("../../../assets/images/header/mobile/secondary_bg_2x.jpg")} 2x`}
          media="(max-width: 480px)"
          type="image/jpeg"
        />
        <CardMedia
          component="img"
          src={require("../../../assets/images/header/mobile/secondary_bg.jpg")}
          alt="Main background"
          aria-label="Secondary background"
          loading="lazy"
          height="230px"
          sx={{ position: "absolute", top: "0px", zIndex: "0" }}
        />
      </CardMedia>
    );
  }
};

export default Background;
