import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createNewBoard } from '../../actions/boardActions';
import PropTypes from 'prop-types';

class CreateBoard extends Component {
    onClick = (event) => {
        this.props.createNewBoard();
    }

    render() {
        return (
            <div className="create-board" onClick={this.onClick}>
                <h3 className="create-board-text">Create a new board...</h3>
            </div>
        );
    }
}

CreateBoard.propTypes = {
    createNewBoard: PropTypes.func.isRequired
}

export default connect(null, { createNewBoard })(CreateBoard);