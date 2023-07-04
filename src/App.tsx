import React from "react";
import { Route, Routes } from "react-router-dom";

import { useGetGenresQuery } from "services/APIService";
import { save, genresKey } from "localStorage/localStorage";

import Layout from "components/Layout";
import Home from "pages/Home";
import Library from "pages/Library";
import Queue from "./pages/Queue/Queue";
import NotFoundPage from "pages/NotFoundPage";
import PrivateRoute from "components/PrivateRoute/PrivateRoute";

const App: React.FC = () => {
  const { data, error } = useGetGenresQuery();

  if (error) {
    console.log(error);
  }

  if (data) {
    save(genresKey, data);
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="library"
            element={
              <PrivateRoute>
                <Library />
              </PrivateRoute>
            }
          />
          <Route
            path="queue"
            element={
              <PrivateRoute>
                <Queue />
              </PrivateRoute>
            }
          />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
