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
  
  onClick(id) {
    console.log(id)
  }

  render() {
    let board = [...new Array(9)].map((v, i) => (
      <Square
        key={i}
        id={i} // make key available as prop in Square
        owner={this.state.state[Math.floor(i / 3)][i % 3]}
        highlight={false}
        receiveClick={this.onClick.bind(this)}
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
