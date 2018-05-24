import React, { Component } from "react";
import BoardTitleInput from "../controls/BoardTitleInput";
import { connect } from "react-redux";
import { cancelNewBoard, addNewBoard } from "../../actions/boardActions";
import PropTypes from "prop-types";

class ActiveCreateBoard extends Component {
  onClick = event => {};

  cancelBoard(event) {
    this.props.cancelNewBoard();
  }

  createBoard(event) {
    this.props.addNewBoard("test 5");
  }

  render() {
    return (
      <div className="active-create-board">
        <div className="active-create-header">
          <h3>Creating a board</h3>
        </div>
        <div className="active-create-input">
          <h5>What shall we call the board?</h5>
          <BoardTitleInput />
        </div>
        <div>
          <button
            className="board-cancel-button"
            onClick={this.cancelBoard.bind(this)}
          >
            Cancel
          </button>
          <button
            className="board-create-button"
            onClick={this.createBoard.bind(this)}
          >
            Create
          </button>
        </div>
      </div>
    );
  }
}

ActiveCreateBoard.propTypes = {
  cancelNewBoard: PropTypes.func.isRequired
};

export default connect(null, { cancelNewBoard, addNewBoard })(
  ActiveCreateBoard
);
