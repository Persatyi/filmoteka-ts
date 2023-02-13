import React, { useState } from "react";
import ModalWrapper from "components/ModalWrapper";
import MovieModal from "components/Modals/MovieModal";

const Library: React.FC = () => {
  const [open, setOpen] = useState(true);

  return (
    <ModalWrapper open={open} onClose={setOpen}>
      <MovieModal />
    </ModalWrapper>
  );
};

export default Library;
