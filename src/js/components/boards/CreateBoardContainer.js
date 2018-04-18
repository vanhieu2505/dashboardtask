import React, { Component } from 'react';
import CreateBoard from './CreateBoard';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ActiveCreateBoard from './ActiveCreateBoard';
import { CREATE_NEW_BOARD } from '../../actions/types';

class CreateBoardContainer extends Component {
    render() {
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