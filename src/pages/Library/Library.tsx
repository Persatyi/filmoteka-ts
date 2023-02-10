import React, { useState } from "react";
import MovieModal from "components/Modals/MovieModal";

const Library: React.FC = () => {
  const [open, setOpen] = useState(true);

  return <MovieModal open={open} onClose={setOpen} />;
};

export default Library;
