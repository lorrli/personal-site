import React, { Component } from "react";
/* import styles from "./styles.scss"; */
import NavBar from "../navBar/index";

export default class Work extends Component {
  render() {
    return (
      <div className="container">
        <NavBar active="work" />
        <div className="header">
          <h1>Work</h1>
        </div>
      </div>
    );
  }
}
