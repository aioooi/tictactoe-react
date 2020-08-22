import React from "react";

import LevelSelection from "./LevelSelection.js";
import Square from "./Square.js"
import Stats from "./Stats.js";

class Game extends React.Component {
  render() {
    let board = [...new Array(9)].map((v, i) => <Square id={i}></Square>);
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
