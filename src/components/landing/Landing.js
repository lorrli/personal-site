import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.scss";
import GlobeImage from "../globe/GlobeImage";

export default class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <div className="a">
          <h1>Lorraine Li</h1>
          <p>description here</p>
        </div>
        <GlobeImage />
      </div>
    );
  }
}