import React, { Component } from 'react';
import ListTasks from './ListTasks';
import { connect } from 'react-redux';
import { SHOW_BOARD, CREATE_NEW_TASK, CREATE_NEW_ITEM, TICK_ITEM } from '../../actions/types';
import PropTypes from 'prop-types';
import CreateNewList from './CreateNewList';

class ListTasksContainer extends Component {
    render() {
        if(this.props.type === SHOW_BOARD || this.props.type === CREATE_NEW_TASK || this.props.type === CREATE_NEW_ITEM || this.props.type === TICK_ITEM) {
            return (
                <div>
                    <div className="single-board">
                        <h1>{this.props.listBoards[this.props.selectedBoard].name}</h1>
                    </div>
                    <div className="board-container">
                        <ListTasks />
                        <CreateNewList />
                    </div>
                </div>
            );
        } else {
            return null;
        }        
    }
}

const mapStateToProps = (state) => ({
    type: state.board.type,
    selectedBoard: state.board.selectedBoard,
    listBoards: state.board.listBoards
});

ListTasksContainer.propTypes = {
    type: PropTypes.string.isRequired,
    selectedBoard: PropTypes.number.isRequired,
    listBoards: PropTypes.array.isRequired
};

export default connect(mapStateToProps, {})(ListTasksContainer);