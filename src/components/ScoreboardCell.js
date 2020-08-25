import React from "react";

import "./ScoreboardCell.css";

import Input from "./Input.js";

class ScoreboardCell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      classNames: "",
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.value !== prevProps.value) {
      this.setState({ classNames: "scale-animation" });
      setTimeout(() => {
        this.setState({ classNames: "" });
      }, 400);
    }
  }

  render() {
    const label =
      this.props.label === "Player" ? (
        <Input text={"Player"} edit={true} />
      ) : (
        <div className="cell">{this.props.label}</div>
      );
    return (
      <div className={this.state.classNames}>
        {label}
        <div className="cell">{this.props.value}</div>
      </div>
    );
  }
}

export default ScoreboardCell;
