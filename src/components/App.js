import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Home";
import Landing from "./landing/Landing";
import About from "./About";

const App = () => (
  <Router>
    <div className="container">
      <Route exact path="/" component={Landing} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/about" component={About} />
    </div>
  </Router>
);

export default App;
