import React, { Component } from "react";

import styles from "./styles.scss";

export default class NavBar extends Component {
  /* let prevScrollpos = window.pageYOffset; */
  myFunction() {
    console.log("clicked me");
    let x = document.getElementById("myNavbar");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }
  render() {
    return (
      <div className="navbar" id="myNavbar">
        <a href="/" className="navbar-left">
          Home
        </a>
        <a
          /*  className={this.props.active == "resume" ? "active" : null} */
          href="../../../assets/3ADevResume.pdf"
          target="_blank"
        >
          Resume
        </a>
        <a
          className={this.props.active == "work" ? "active" : null}
          href="work"
        >
          Work
        </a>
        <a
          className={this.props.active == "about" ? "active" : null}
          href="about"
        >
          About
        </a>
        <a
          href="javascript:void(0);"
          className="icon"
          onClick={() => this.myFunction()}
        >
          <i className="fa fa-bars" />
        </a>
      </div>

      /* <div className="navbar" id="myNavbar">
        <div className="navbar-left">
          <a href="/">Home</a>
        </div>
        <div
          className={"navbar-right " + (this.props.active ? "active" : null)}
        >
          <a
            className={this.props.active == "about" ? "active" : null}
            href="about"
          >
            About
          </a>
          <a
            className={this.props.active == "work" ? "active" : null}
            href="work"
          >
            Work
          </a>
          <a
            className={this.props.active == "resume" ? "active" : null}
            href="resume"
          >
            Resume
          </a>
        </div>
        <a
          href="javascript:void(0);"
          className="icon"
          onClick={() => this.myFunction()}
        >
          <i className="fa fa-bars" />
        </a>
      </div> */
    );
  }
}
