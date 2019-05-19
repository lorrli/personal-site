import React, { Component } from "react";
import styles from "./styles.scss";
import Earth from "../../../assets/earth2.svg";
import InlineSVG from "svg-inline-react";

export default class GlobeImage extends Component {
  render() {
    return (
      <div className="globe">
        <InlineSVG src={Earth} alt="Earth" />

        {/*  <svg src={Earth} alt="Earth" title="Earth" /> */}
      </div>
    );
  }
}
