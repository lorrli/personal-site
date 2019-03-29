import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Landing from "./landing/Landing";
import About from "./about/About";

const App = () => (
  <Router>
    <div className="container">
      <Route exact path="/" component={Landing} />
      <Route exact path="/about" component={About} />
    </div>
  </Router>
);

export default App;
