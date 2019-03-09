import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Home";
import Landing from "./landing/Landing";

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Landing} />
      <Route exact path="/home" component={Home} />
      {/*       <Route path="/about" component={About} />
       */}
    </div>
  </Router>
);

export default App;
