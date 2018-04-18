import React, { Component } from 'react';
import { createNewTask } from '../../actions/boardActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class CreateNewList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            taskName: ''
        };
    }

    onChange(event) {
        this.setState({
            taskName: event.target.value
        });
    }

    onKeyPress(event) {
        if(event.key === 'Enter') {
            this.props.createNewTask(event.target.value);
            this.setState({
                taskName: ''
            });
        }
    }

    render() {
        return (
            <div className="add-new-list">
                <input type="textbox" value={this.state.taskName} onChange={this.onChange.bind(this)} onKeyPress={this.onKeyPress.bind(this)} />
            </div>
        );
    }
}

CreateNewList.propTypes = {
    createNewTask: PropTypes.func.isRequired
};

export default connect(null, { createNewTask })(CreateNewList);