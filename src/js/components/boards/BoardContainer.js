import React, { Component } from 'react';
import CreateBoardContainer from './CreateBoardContainer';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { SHOW_HOME_PAGE, CREATE_NEW_BOARD, CANCEL_NEW_BOARD, ADD_NEW_BOARD, SHOW_BOARD } from '../../actions/types';
import { showBoard } from '../../actions/boardActions';
import ListTasksContainer from '../tasks/ListTasksContainer';

class BoardContainer extends Component {
    onClick(index, event){
        this.props.showBoard(index);
    }

    render() {
        const boards = this.props.listBoards.map((board, index) => (
            <div key={index} className="board" onClick={this.onClick.bind(this, index)}>
                <h3 className="board-text">{board.name}</h3>
            </div>            
        ));
        
        return(                    
            (this.props.type === SHOW_HOME_PAGE
                || this.props.type === CREATE_NEW_BOARD
                || this.props.type === CANCEL_NEW_BOARD
                || this.props.type === ADD_NEW_BOARD)
                && (
                    <div className="board-container">
                        <CreateBoardContainer />
                        {boards}
                    </div>
                )            
        );
    }
}

const mapStateToProps = state => ({
    listBoards: state.board.listBoards,
    showBoard: state.board.showBoard,
    type: state.board.type,
    selectedBoard: state.board.selectedBoard
});

BoardContainer.propTypes = {
    listBoards: PropTypes.array,
    showBoard: PropTypes.func.isRequired,
    selectedBoard: PropTypes.number
};

export default connect(mapStateToProps, { showBoard })(BoardContainer);