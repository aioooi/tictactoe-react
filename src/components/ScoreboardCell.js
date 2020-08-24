import React from "react";

import "./ScoreboardCell.css"

class ScoreboardCell extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>{this.props.label}</div>
        <div>{this.props.value}</div>
      </div>
    );
  }
}

export default ScoreboardCell;