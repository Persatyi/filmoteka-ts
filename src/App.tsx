import React from "react";
import { Route, Routes } from "react-router-dom";

import Header from "components/Header";
import Home from "pages/Home";
import Library from "pages/Library";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/library" element={<Library />} />
      </Routes>
    </>
  );
};

export default App;
