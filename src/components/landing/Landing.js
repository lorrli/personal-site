import React, { Component } from "react";
import Link from "react-router-dom";
import styles from "./styles.scss";
import Title from "../title/Title";
import GlobeImage from "../globe/GlobeImage";

export default class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = { loaded: false };
    this.scrolled = false;
    this.overrideScroll = this.overrideScroll.bind(this);
    // this.handleOnClick = this.handleOnClick.bind(this);
  }

  componentDidMount() {
    window.addEventListener("mousewheel", this.overrideScroll);
  }

  componentWillUnmount() {
    document.removeEventListener("scroll", this.overrideScroll);
  }

  handleOnClick() {
    console.log("props", this.props);
    this.props.history.push("/about");
  }

  // function that overrides the scroll
  overrideScroll(event) {
    // setTimeout(() => {
    if (this.scrolled) {
      return;
    }
    if (event.deltaY > 0) {
      this.scrolled = true;
      this.setState({ loaded: true });
      window.removeEventListener("mousewheel", this.overrideScroll);
    }
    // }, 100);
  }

  // componentWillMount(), override the window's scroll listener with function

  // onComponentDestroy (will unmount), destroy the event listener set in function above

  render() {
    console.log("2", this.state.loaded);
    console.log("3", this.scrolled);
    // return [
    // <div className="landing">
    //   <Title />
    // </div>,
    // <GlobeImage />,
    // <div className="circle">
    //   <h1>About</h1>
    //   <p>asldkadslkajs</p>
    // </div>
    /*       <div>
        {this.state.loaded}
        <div className={"landing " + this.state.loaded ? "hide" : "show"} />
        
      </div> */
    // );
    return (
      <div>
        {/*  Hello world
        {this.state.loaded} */}

        <div className={"landing " + (this.state.loaded ? "hide" : "show")}>
          <Title />
        </div>
        <GlobeImage />
        <div className="circle" onClick={() => this.handleOnClick()}>
          <h1>About</h1>
          <p>asldkadslkajs</p>
        </div>
      </div>
    );
  }
}
