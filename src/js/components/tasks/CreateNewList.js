import React, { Component } from 'react';

class CreateNewList extends Component {
    onClick(event) {

    }

    render() {
        return (
            <div className="add-new-list" onClick={this.onClick.bind(this)}>
                <h4 className="add-new-list-text">Add a list...</h4>
            </div>
        );
    }
}

export default CreateNewList;