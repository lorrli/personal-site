import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

const title = "Hi";

ReactDOM.render(<App />, document.getElementById("app"));

module.hot.accept();
