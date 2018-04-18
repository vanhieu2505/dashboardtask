import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Input from '../controls/Input';
import { createNewItem, tickItem } from '../../actions/boardActions';

class ListTasks extends Component {    
    onClick(selectedTask, selectedItem, e) {
        this.props.tickItem(selectedTask, selectedItem);
    }

    render() {        
        return (
            this.props.listTasks.map((item, index) => (
                <div className="list-tasks">
                    <div>
                        <h4 key={index}>{item.name}</h4>
                        <hr />
                        <Input enterProcess={this.props.createNewItem} selectedTask={index} />
                        {
                        item.listItems.map((subItem, subIndex) => (
                            <div className={subItem.completed ? "task-item completed" : "task-item"} key={subIndex}>
                                <h5>{subItem.name}</h5>
                                <div className="task-item-tick" onClick={this.onClick.bind(this, index, subIndex)}>&#10004;</div>
                            </div>  
                        ))
                        }
                    </div>
                </div>
            ))
        );
    }
}

const mapStateToProps = (state) => ({
    type: state.board.type,    
    listTasks: state.board.listBoards[state.board.selectedBoard].listTasks
});

ListTasks.propTypes = {
    createNewItem: PropTypes.func.isRequired,
    tickItem: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired,
    listTasks: PropTypes.array
};

export default connect(mapStateToProps, { createNewItem, tickItem })(ListTasks);