import React from "react";

import ScoreboardCell from "./ScoreboardCell.js";

import "./Scoreboard.css";

class Scoreboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stats: props.stats,
    };
  }

  render() {
    return (
      <div className="scoreboard-grid">
        <ScoreboardCell label={"Player"} value={this.props.stats.player} />
        <ScoreboardCell label={"Draw"} value={this.props.stats.draw} />
        <ScoreboardCell label={"Computer"} value={this.props.stats.computer} />
      </div>
    );
  }
}

export default Scoreboard;
