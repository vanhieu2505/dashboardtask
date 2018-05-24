import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { showBoard } from "../../actions/boardActions";
import { Link } from "react-router-dom";

class ListBoards extends Component {
  onClick(index, event) {
    this.props.showBoard(index);
  }

  render() {
    return this.props.listBoards.map((board, index) => (
      <div key={index} className="board">
        <h3 className="board-text">
          <Link to={"/board/" + board.name}>{board.name}</Link>
        </h3>
      </div>
    ));
  }
}

const mapStateToProps = state => ({
  listBoards: state.board.listBoards
});

ListBoards.propTypes = {
  listBoards: PropTypes.array
};

export default connect(mapStateToProps, { showBoard })(ListBoards);
