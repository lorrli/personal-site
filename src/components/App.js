import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Landing from "./landing/Landing";
import About from "./about/About";
import Work from "./work/index";
import Background from "./background/index";

const App = () => (
  <Router>
    <div className="container">
      <Route exact path="/" component={Landing} />
      <Route exact path="/about" component={About} />
      <Route exact path="/work" component={Work} />
      {/*clean this up*/}
      <Route exact path="/background" component={Background} />
    </div>
  </Router>
);

export default App;
