import React from "react";

import "./Square.css";

import * as ttt from "../lib/tictactoe/tictactoe.js";

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    let tag = '';
    if (this.props.owner === ttt.PLAYER) {
      tag = <span>&#x0fbe;</span>;
    } else if (this.props.owner === ttt.COMPUTER) {
      tag = <span>&#x262f;</span>;
    }

    return (
      <div
        className={
          "square " +
          (this.props.highlight === true ? "highlight-winning-line " : " ") +
          (this.props.owner !== ttt.EMPTY ? "played" : "")
        }
      >
        <div className="tag">{tag}</div>
      </div>
    );
  }
}

export default Square;
