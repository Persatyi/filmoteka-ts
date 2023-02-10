import React from "react";
import { Modal, Box } from "@mui/material";

interface IProps {
  open: boolean;
  onClose: Function;
}

const MovieModal: React.FC<IProps> = ({ open, onClose }) => {
  return (
    <Modal
      open={open}
      onClose={() => onClose(false)}
      aria-labelledby="movie-modal"
    >
      <Box
        component="div"
        sx={{
          pt: { xs: "48px" },
          pl: { xs: "20px" },
          pr: { xs: "20px" },
          pb: { xs: "40px" },
          backgroundColor: "primary.white",

          width: "100px",
          height: "100px",
        }}
      >
        modal
      </Box>
    </Modal>
  );
};

export default MovieModal;
