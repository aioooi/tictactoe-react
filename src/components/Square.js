import React from "react";

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    return <p>{this.props.id}</p>
  }
}

export default Square;