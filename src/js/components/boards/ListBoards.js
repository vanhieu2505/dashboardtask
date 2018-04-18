import React, { Component } from 'react';
import { SHOW_BOARD, CREATE_NEW_TASK, CREATE_NEW_ITEM, TICK_ITEM } from '../../actions/types';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { showBoard } from '../../actions/boardActions';

class ListBoards extends Component {
    onClick(index, event){
        this.props.showBoard(index);
    }

    render() {
        if(this.props.type === SHOW_BOARD || this.props.type === CREATE_NEW_TASK || this.props.type === CREATE_NEW_ITEM || this.props.type === TICK_ITEM){
            return null;
        }

        return (
            this.props.listBoards.map((board, index) => (
                <div key={index} className="board" onClick={this.onClick.bind(this, index)}>
                    <h3 className="board-text">{board.name}</h3>
                </div>  
        )));        
    }
}

const mapStateToProps = (state) => ({
    type: state.board.type,
    listBoards: state.board.listBoards
});

ListBoards.propTypes = {
    type: PropTypes.string.isRequired,
    listBoards: PropTypes.array
};

export default connect(mapStateToProps, { showBoard })(ListBoards);