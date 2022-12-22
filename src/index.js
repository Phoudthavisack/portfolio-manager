import React from "react";
import ReactDOM from "react-dom";
import Snowfall from "react-snowfall";
// router
import { BrowserRouter, HashRouter } from "react-router-dom";
// css
import "./css/style.css";
//
import App from "./App";

// ----------------------------- //
ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
      <Snowfall
        color="white"
        snowflakeCount={50}
        speed={[0.1, 0.3]}
        rotationSpeed={[0.1, 0.3]}
      />
      <Snowfall
        color="rgba(255,21,0,0.2)"
        snowflakeCount={50}
        speed={[0.1, 0.3]}
        rotationSpeed={[0.1, 0.3]}
      />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
