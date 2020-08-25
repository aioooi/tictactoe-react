import React from "react";
import "./App.css";

import Game from "./components/Game.js";

function App() {
  return (
    <div className="App">
      <h1>Let's Play: Tic Tac Toe</h1>
      <h2>(implemented using React)</h2>
      <div className="game">
        <Game playerBegins={true} delay={300} />
      </div>
    </div>
  );
}

export default App;
