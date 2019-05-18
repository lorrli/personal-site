import React from "react";
import ReactDOM from "react-dom";
import App from "./src/components/App";
import "./styles/main.scss";
import { BrowserRouter as Router } from "react-router-dom";

const title = "Hi";

ReactDOM.render(
  <Router basename={process.env.PUBLIC_URL}>
    <App />
  </Router>,
  document.getElementById("app")
);

module.hot.accept();
