import React, { Component } from "react";
import ListTasks from "./ListTasks";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import CreateNewList from "./CreateNewList";
import { DragDropContext } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import { showBoard } from "../../actions/boardActions";

class ListTasksContainer extends Component {
  componentWillMount() {
    console.log("here");
    this.props.showBoard(this.props.match.params.id);
  }

  render() {
    console.log(this.props.match.params.id);
    return (
      <div className="board-container">
        <div>
          <div className="single-board">
            <h1>{this.props.listBoards[this.props.selectedBoard].name}</h1>
          </div>
          <div className="board-container">
            <ListTasks />
            <CreateNewList />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  selectedBoard: state.board.selectedBoard,
  listBoards: state.board.listBoards
});

ListTasksContainer.propTypes = {
  selectedBoard: PropTypes.number.isRequired,
  listBoards: PropTypes.array.isRequired,
  showBoard: PropTypes.func.isRequired
};

ListTasksContainer = DragDropContext(HTML5Backend)(ListTasksContainer);

export default connect(mapStateToProps, { showBoard })(ListTasksContainer);
