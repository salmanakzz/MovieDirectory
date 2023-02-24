import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { MovieContextPrivider } from "./store/MovieContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MovieContextPrivider>
      <App />
    </MovieContextPrivider>
  </React.StrictMode>
);
