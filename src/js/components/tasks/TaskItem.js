import React, { Component } from "react";
import { tickItem, beginDrag, dropItem } from "../../actions/boardActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { DragSource, DropTarget } from "react-dnd";
import { Item_Types } from "../../Constants";

const taskItemSource = {
  beginDrag(props) {
    props.beginDrag(props.selectedTask, props.selectedItem);
    return {};
  },

  endDrag(props) {}
};

const taskItemTarget = {
  drop(props) {
    props.dropItem(props.selectedTask, props.selectedItem);
  }
};

class TaskItem extends Component {
  static propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired,
    connectDropTarget: PropTypes.func.isRequired
  };

  onClick(selectedTask, selectedItem, e) {
    this.props.tickItem(selectedTask, selectedItem);
  }

  render() {
    const { connectDragSource, isDragging, connectDropTarget } = this.props;
    const item = this.props.listTasks[this.props.selectedTask].listItems[
      this.props.selectedItem
    ];
    return connectDropTarget(
      connectDragSource(
        <div className={item.completed ? "task-item completed" : "task-item"}>
          <h5>{item.name}</h5>
          <div
            className="task-item-tick"
            onClick={this.onClick.bind(
              this,
              this.props.selectedTask,
              this.props.selectedItem
            )}
          >
            &#10004;
          </div>
        </div>
      )
    );
  }
}

TaskItem.propTypes = {
  tickItem: PropTypes.func.isRequired,
  listTasks: PropTypes.array,
  beginDrag: PropTypes.func.isRequired,
  dropItem: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  listTasks: state.board.listBoards[state.board.selectedBoard].listTasks
});

TaskItem = DragSource(
  Item_Types.TASK_ITEM,
  taskItemSource,
  (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  })
)(TaskItem);

TaskItem = DropTarget(Item_Types.TASK_ITEM, taskItemTarget, connect => ({
  connectDropTarget: connect.dropTarget()
}))(TaskItem);

export default connect(mapStateToProps, { tickItem, beginDrag, dropItem })(
  TaskItem
);
