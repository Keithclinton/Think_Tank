import React from "react";
import ReactDOM from "react-dom/client"; // Use the new ReactDOM client
import ThinkTankLanding from "./Home";
import "./index.css"; // Ensure this file exists

const root = ReactDOM.createRoot(document.getElementById("root")); // Create a root
root.render(
  <React.StrictMode>
    <ThinkTankLanding />
  </React.StrictMode>
);
