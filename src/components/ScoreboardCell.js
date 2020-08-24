import React from "react";

import "./ScoreboardCell.css";

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
    return (
      <div className={this.state.classNames}>
        <div>{this.props.label}</div>
        <div>{this.props.value}</div>
      </div>
    );
  }
}

export default ScoreboardCell;
