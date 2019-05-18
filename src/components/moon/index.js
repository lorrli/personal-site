import React, { Component } from "react";

export default class Moon extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={this.props.className}>
        <h2>{this.props.title}</h2>
        <p>{this.props.description}</p>
      </div>
    );
  }
}
