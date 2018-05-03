import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Input from '../controls/Input';
import { createNewItem } from '../../actions/boardActions';
import TaskItem from './TaskItem';

class ListTasks extends Component {     
    render() {
        console.log(this.props.listTasks);
        
        return (
            this.props.listTasks.map((item, index) => (
                <div className="list-tasks" key={index}>
                    <div>
                        <h4>{item.name}</h4>
                        <hr />
                        <Input enterProcess={this.props.createNewItem} selectedTask={index} />
                        {
                        item.listItems.map((subItem, subIndex) => (
                            <TaskItem key={subIndex} selectedTask={index} selectedItem={subIndex} />
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
    type: PropTypes.string.isRequired,
    listTasks: PropTypes.array
};

export default connect(mapStateToProps, { createNewItem })(ListTasks);