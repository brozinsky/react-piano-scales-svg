import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ThemeContext } from "@/contexts/ThemeContext";
import { ScaleContext } from "@/contexts/ScaleContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeContext>
      <ScaleContext>
        <App />
      </ScaleContext>
    </ThemeContext>
  </React.StrictMode>
);
