import React from "react";

import "./LevelSelection.css";

class LevelSelection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: props.currentLevel,
    };
    this.updateSelectionState = this.updateSelectionState.bind(this);
  }

  updateSelectionState(e) {
    const newLevel = parseInt(e.target.value);
    this.setState({ selected: newLevel });
    this.props.callback(newLevel);
  }

  render() {
    let buttons = this.props.levels.map((v, i) => (
      <div className="radioBtn" key={i}>
        <label className="radioBtn-label">{v}</label>
        <input
          type="radio"
          value={i}
          checked={this.state.selected === i}
          onChange={this.updateSelectionState}
        />
      </div>
    ));
    return <div className="level-selection-grid">{buttons}</div>;
  }
}

export default LevelSelection;
