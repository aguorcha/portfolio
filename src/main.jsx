import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./i18n";
import { Analytics } from "@vercel/analytics/react";
import { Home } from "./components/Home";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Home></Home>
    <Analytics />
  </React.StrictMode>
);
