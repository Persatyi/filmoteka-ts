import React from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "components/Layout";
import Home from "pages/Home";
import Library from "pages/Library";
import Queue from "./pages/Queue/Queue";
import NotFoundPage from "pages/NotFoundPage";

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="library" element={<Library />} />
          <Route path="queue" element={<Queue />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
