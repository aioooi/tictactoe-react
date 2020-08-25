import React from "react";

import "./Game.css";

import * as ttt from "../lib/tictactoe/tictactoe.js";

import LevelSelection from "./LevelSelection.js";
import Square from "./Square.js";
import Scoreboard from "./Scoreboard.js";

const LEVEL = [
  { label: "trivial", handicap: 90 },
  { label: "easy", handicap: 65 },
  { label: "medium", handicap: 48 },
  { label: "hard", handicap: 24 },
  { label: "impossible", handicap: 5 },
];

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;

    this.DELAY = props.delay < 0 || props.delay > 500 ? 300 : props.delay;
    this.game = null;
    this.level = 2; // default level: 'medium'
    this.locked = false;
    this.playerBegins = this.props.playerBegins;
    this.playerBeginsAfterDraw = !this.playerBegins;

    this.squareRefs = [...Array(9)].map(() => React.createRef());

    this.state = {
      state: [
        [ttt.EMPTY, ttt.EMPTY, ttt.EMPTY],
        [ttt.EMPTY, ttt.EMPTY, ttt.EMPTY],
        [ttt.EMPTY, ttt.EMPTY, ttt.EMPTY],
      ],
      stats: {
        computer: 0,
        draw: 0,
        player: 0,
      },
    };
  }

  componentDidMount() {
    this.newGame();
  }

  async newGame() {
    this.game = new ttt.Game(LEVEL[this.level].handicap, this.playerBegins);
    this.setState({ state: this.game.state }); // [...state]???!

    if (!this.playerBegins) {
      this.locked = true;
      await this.sleep(200);
      this.game.makeMove();
      this.setState({ state: this.game.state }); // [...state]???!
    }
    this.locked = false;
  }

  resetStats() {
    this.setState({
      stats: {
        computer: 0,
        draw: 0,
        player: 0,
      },
    });
  }

  async processResults() {
    const winner = this.game.winner;

    this.setState((state) => {
      let s = { ...state.stats };
      if (winner === ttt.COMPUTER) {
        s.computer += 1;
      } else if (winner === ttt.PLAYER) {
        s.player += 1;
      } else {
        s.draw += 1;
      }
      return { stats: s };
    });

    if (winner === ttt.COMPUTER) {
      this.playerBegins = true;
    } else if (winner === ttt.PLAYER) {
      this.playerBegins = false;
    } else {
      this.playerBegins = this.playerBeginsAfterDraw;
      this.playerBeginsAfterDraw = !this.playerBeginsAfterDraw;
    }

    if (winner !== ttt.EMPTY) {
      const line = this.game._winningLine;
      line.map((v) => this.squareRefs[v].current.highlight());
    }

    await this.sleep(800);
    this.newGame();
  }

  sleep(milliseconds) {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  }

  async userInput(id) {
    const i = Math.floor(id / 3);
    const j = id % 3;

    if (!this.locked) {
      this.locked = true;
      try {
        // human moves
        let gameFinished = this.game.playerMove(i, j);
        this.setState({ state: this.game.state });

        if (gameFinished) {
          this.processResults();
        } else {
          // optional computer move if game not finished
          await this.sleep(
            Math.floor((0.6 + 0.4 * Math.random()) * this.DELAY)
          );
          gameFinished = this.game.makeMove();
          this.setState({ state: this.game.state });

          if (gameFinished) {
            this.processResults();
          } else {
            this.locked = false;
          }
        }
      } catch (e) {
        console.log(e);
        this.locked = false;
      }
    }
  }

  async handleLevelSelection(newLevel) {
    this.level = newLevel;
    this.resetStats();
    this.newGame();
  }

  render() {
    let board = [...new Array(9)].map((v, i) => (
      <Square
        ref={this.squareRefs[i]}
        id={i} // make key available as prop in Square
        key={i}
        owner={this.state.state[Math.floor(i / 3)][i % 3]}
        receiveClick={this.userInput.bind(this)}
      />
    ));
    return (
      <div>
        <div className="board">{board}</div>
        <Scoreboard stats={this.state.stats} />
        <LevelSelection
          callback={this.handleLevelSelection.bind(this)}
          currentLevel={this.level}
          levels={LEVEL.map((v) => v.label)}
        />
      </div>
    );
  }
}

export default Game;
