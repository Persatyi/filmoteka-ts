import React from "react";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";

import { fetchGenres } from "services/APIService";
import { save, genres } from "localStorage/localStorage";
import { useAppDispatch } from "hooks/hooks";

import Layout from "components/Layout";
import Home from "pages/Home";
import Library from "pages/Library";
import Queue from "./pages/Queue/Queue";
import NotFoundPage from "pages/NotFoundPage";

const App: React.FC = () => {
  const dispatch = useAppDispatch();

  const fetchData = async () => {
    await fetchGenres()
      .then((data) => {
        if (data !== null && data !== undefined) {
          save(genres, data);
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    fetchData();
  });

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="library" element={<Library />} />
          <Route path="queue" element={<Queue />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
