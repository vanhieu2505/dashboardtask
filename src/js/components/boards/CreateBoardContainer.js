import React, { Component } from 'react';
import CreateBoard from './CreateBoard';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ActiveCreateBoard from './ActiveCreateBoard';
import { CREATE_NEW_BOARD, SHOW_BOARD, CREATE_NEW_TASK, CREATE_NEW_ITEM, TICK_ITEM } from '../../actions/types';

class CreateBoardContainer extends Component {
    render() {
        if(this.props.type === SHOW_BOARD || this.props.type === CREATE_NEW_TASK || this.props.type === CREATE_NEW_ITEM || this.props.type === TICK_ITEM) {
            return null;
        }

        return (
            <div>
                { this.props.type === CREATE_NEW_BOARD ? <ActiveCreateBoard /> : <CreateBoard />}
            </div>
        );
    }
}

CreateBoardContainer.propTypes = {
    tyoe: PropTypes.string
}

const mapStateToProps = state => ({
    type: state.board.type
});

export default connect(mapStateToProps, {})(CreateBoardContainer);