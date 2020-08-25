import React from "react";

import "./Square.css";

import * as ttt from "../lib/tictactoe/tictactoe.js";

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;

    this.state = { highlight: false };
  }

  highlight() {
    this.setState({ highlight: true });
    setTimeout(() => this.setState({ highlight: false }), 800);
  }

  render() {
    let tag = "";
    if (this.props.owner === ttt.PLAYER) {
      tag = <span>&#x0fbe;</span>;
    } else if (this.props.owner === ttt.COMPUTER) {
      tag = <span>&#x262f;</span>;
    }

    return (
      <div
        className={
          "square " +
          (this.state.highlight ? "highlight-winning-line " : " ") +
          (this.props.owner !== ttt.EMPTY && !this.state.highlight ? "played" : "")
        }
        onClick={() => this.props.receiveClick(this.props.id)}
      >
        <div className="tag">{tag}</div>
      </div>
    );
  }
}

export default Square;
