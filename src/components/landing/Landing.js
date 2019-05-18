import React, { Component } from "react";
import Link from "react-router-dom";
import styles from "./styles.scss";
import Title from "../title/Title";
import GlobeImage from "../globe/GlobeImage";
import Stars from "../stars/index";
import Moon from "../moon/index";

export default class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = { loaded: false };
    this.scrolled = false;
    this.overrideScroll = this.overrideScroll.bind(this);
    this.overrideScrollUp = this.overrideScrollUp.bind(this);
    // this.handleOnClick = this.handleOnClick.bind(this);
  }

  componentDidMount() {
    window.addEventListener("mousewheel", this.overrideScroll);
    // window.addEventListener("mousewheel", this.overrideScrollUp);
  }

  // componentWillUnmount() {
  //   document.removeEventListener("scroll", this.overrideScroll);
  // }

  handleOnClick(path) {
    console.log("onclick");
    console.log("props", this.props);
    this.props.history.push("/" + path);
  }

  // function that overrides the scroll
  //TODO: rename to scroll down
  overrideScroll(event) {
    // setTimeout(() => {
    // if (this.scrolled) {
    //   return;
    // }
    if (event.deltaY > 0) {
      console.log("hiiii " + event.deltaY);
      this.scrolled = true;
      this.setState({ loaded: true });
      window.removeEventListener("mousewheel", this.overrideScroll);
      window.addEventListener("mousewheel", this.overrideScrollUp);
    }
    // }, 100);
  }

  overrideScrollUp(event) {
    // if (this.scrolled) {
    //   return;
    // }
    if (event.deltaY < 0) {
      console.log("scrolled up" + event.deltaY);
      this.setState({ loaded: false });
      window.removeEventListener("mousewheel", this.overrideScrollUp);
      window.addEventListener("mousewheel", this.overrideScroll);
    }
  }

  // componentWillMount(), override the window's scroll listener with function

  // onComponentDestroy (will unmount), destroy the event listener set in function above

  render() {
    console.log("2", this.state.loaded);
    console.log("3", this.scrolled);
    /*     let moonArray = [];
     */

    let moonTitleArray = ["About", "Work", "Hi3", "Hi4"];
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
        <Stars />
        <div className={"landing " + (this.state.loaded ? "hide" : "show")}>
          <Title />
        </div>
        <div
          className={
            "globe-container " + (this.state.loaded ? "scrolled-up" : "default")
          }
        >
          <GlobeImage />
          {/*  {{for ( i = 0; i < 3; i++) {
               <Moon className={"moon-" +i} backgroundColor={SVGFEGaussianB />     
          }}} */}
          <div
            className={
              "planet-container " +
              (this.state.loaded ? "scrolled-up" : "default")
            }
            /* onClick={() => this.handleOnClick(moonTitleArray[idx])} */
          >
            {[...Array(4)].map((val, idx) => {
              return (
                <div onClick={() => this.handleOnClick(moonTitleArray[idx])}>
                  <Moon className={"moon " + idx} title={moonTitleArray[idx]} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
