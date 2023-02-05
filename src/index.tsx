import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.scss";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <CssBaseline />
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
