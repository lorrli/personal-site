import React, { Component } from "react";
/* import { Link } from "react-router-dom";
 */ import styles from "./styles.scss";
import NavBar from "../navBar/index";

export default class About extends Component {
  /* handleOnClick() {
    this.props.history.push("/about");
  } */

  render() {
    return (
      <div className="container">
        <NavBar active="about" />
        <div className="header">
          <h1>ABOUT ME</h1>
        </div>
      </div>
    );
  }
}
