import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./styles/main.scss";

const title = "Hi";

ReactDOM.render(<App />, document.getElementById("app"));

module.hot.accept();
