import React, { Component } from "react";
import Link from "react-router-dom";
import styles from "./styles.scss";
import Title from "../title/Title";
import GlobeImage from "../globe/GlobeImage";

export default class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = { loaded: false };
    this.overrideScroll = this.overrideScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener("mousewheel", this.overrideScroll, false);
  }

  // componentWillUnmount() {
  //   document.removeEventListener("scroll", this.overrideScroll);
  // }

  handleOnClick() {
    this.props.history.push("/about");
  }

  // function that overrides the scroll
  overrideScroll() {
    console.log("@overrideScroll");
    setTimeout(() => {
      this.setState({ loaded: true });
    }, 10);
  }

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
    return (
      <div>
        {this.state.loaded}
        <div className={"landing " + this.state.loaded ? "hide" : "show"} />
        
      </div>
    );
  }
}
