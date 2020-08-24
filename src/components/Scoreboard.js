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

  // componentDidUpdate(nextProps) {
  //   if (this.props.stats !== nextProps.stats) {
  //     this.setState({stats: nextProps.stats});
  //   }
  // }

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
