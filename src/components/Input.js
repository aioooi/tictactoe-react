import React from "react";

import "./Input.css";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.state = {
      value: props.text,
      focus: false,
      disabled: false,
    };
    this.handleFocus = this.handleFocus.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleFocus(e) {
    e.target.select();
    this.setState({ focus: true });
  }

  handleInput(e) {
    e.preventDefault();
    this.setState({ disabled: true, value: this.inputRef.current.value });
  }

  render() {
    let render;
    if (this.state.disabled) {
      render = <div className="cell">{this.state.value}</div>;
    } else {
      const pencil = this.state.focus ? <span></span> : <label>&#x270E;</label>;
      render = (
        <form onSubmit={this.handleInput}>
          <div className="input-form-div">
            {pencil}
            <input
              ref={this.inputRef}
              type="text"
              defaultValue={this.state.value}
              onBlur={this.handleInput}
              onFocus={this.handleFocus}
            />
          </div>
          <input type="submit" />
        </form>
      );
    }
    return render;
  }
}

export default Input;
