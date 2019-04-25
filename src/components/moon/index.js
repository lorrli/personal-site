import React, { Component } from "react";

export default class Moon extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={this.props.className}>
        <h1>hi</h1>
      </div>
    );
  }
}
