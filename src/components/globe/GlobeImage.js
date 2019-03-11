import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.scss";
import Earth from "../../../assets/earth2.svg";

export default class GlobeImage extends Component {
  render() {
    return (
      <div className="globe">
        <Earth alt="Earth" title="Earth" />
      </div>
    );
  }
}
