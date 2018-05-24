import React, { Component } from "react";
import PropTypes from "prop-types";

class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ""
    };
  }

  onChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  onKeyPress(e) {
    if (e.key === "Enter") {
      this.props.enterProcess(this.props.selectedTask, e.target.value);
      this.setState({
        value: ""
      });
    }
  }

  render() {
    return (
      <div>
        <input
          type="textbox"
          value={this.state.value}
          onChange={this.onChange.bind(this)}
          onKeyPress={this.onKeyPress.bind(this)}
        />
      </div>
    );
  }
}

Input.propTypes = {
  selectedTask: PropTypes.number,
  enterProcess: PropTypes.func.isRequired
};

export default Input;
