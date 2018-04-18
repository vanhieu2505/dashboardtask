import React, { Component } from 'react';
import CreateBoardContainer from './CreateBoardContainer';
import ListTasksContainer from '../tasks/ListTasksContainer';
import ListBoards from './ListBoards';

class BoardContainer extends Component {    
    render() {
        return(                      
            <div className="board-container">
                <CreateBoardContainer />
                <ListBoards />
                <ListTasksContainer />
            </div>            
        );
    }
}

export default BoardContainer;