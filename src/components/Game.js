import React from "react";

import "./Game.css";

import LevelSelection from "./LevelSelection.js";
import Square from "./Square.js";
import Stats from "./Stats.js";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      state: [
        [0, -1, 0],
        [0, 1, 0],
        [0, 0, 0],
      ],
    };
  }
  render() {
    let board = [...new Array(9)].map((v, i) => (
      <Square
        id={i}
        owner={this.state.state[Math.floor(i / 3)][i % 3]}
        highlight={false}
      />
    ));
    return (
      <div>
        <div className="board">{board}</div>
        <Stats></Stats>
        <LevelSelection></LevelSelection>
      </div>
    );
  }
}

export default Game;
