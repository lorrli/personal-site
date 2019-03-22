import React, { Component } from "react";
import Link from "react-router-dom";
import styles from "./styles.scss";
import Title from "../title/Title";
import GlobeImage from "../globe/GlobeImage";

export default class Landing extends Component {
  handleOnClick() {
    this.props.history.push("/about");
  }

  // function that overrides the scroll

  // componentWillMount(), override the window's scroll listener with function

  // onComponentDestroy (will unmount), destroy the event listener set in function above

  render() {
    return [
      <div className="landing">
        <Title />
      </div>,
      <GlobeImage />,
      <div className="circle">
        <h1>About</h1>
        <p>asldkadslkajs</p>
      </div>
    ];
  }
}
