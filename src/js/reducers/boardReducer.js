import { SHOW_HOME_PAGE, CREATE_NEW_BOARD, CANCEL_NEW_BOARD, ADD_NEW_BOARD, SHOW_BOARD, CREATE_NEW_TASK, CREATE_NEW_ITEM, TICK_ITEM } from '../actions/types';

const initialState = {
    type: SHOW_HOME_PAGE,
    selectedBoard: -1,    
    listBoards: [
        { 
            name: 'test1', 
            listTasks: [] 
        },
        {
            name: 'test2',
            listTasks: []
        }]
};

export default function(state = initialState, action) {
    switch (action.type) {
        case CREATE_NEW_BOARD:
            return {
                ...state,
                type: action.type
            };
        case CANCEL_NEW_BOARD:            
            return {
                ...state,
                type: action.type
            };
        case ADD_NEW_BOARD:
            return {
                ...state,
                type: action.type,
                listBoards: [...state.listBoards, 
                    {
                        name: action.payload,
                        listTasks: []
                    }]
            };
        case SHOW_BOARD:
            return {
                ...state,
                type: action.type,
                selectedBoard: action.payload
            }
        case CREATE_NEW_TASK:
            const updatedBoardsForNewTask = state.listBoards.map((board, index) => {
                if(index === state.selectedBoard) {
                    return {
                        name: board.name,
                        listTasks: [...board.listTasks, { name: action.payload, listItems: [] }]
                    };
                } 
                return board;
            });
            
            return {
                ...state,
                type: action.type,
                listBoards: updatedBoardsForNewTask
            };
        case CREATE_NEW_ITEM:
            const updatedBoardsForNewItem = state.listBoards.map((board, index) => {
                if(index === state.selectedBoard) {
                    const updatedTasks = board.listTasks.map((task, subIndex) => {
                        if(subIndex === action.selectedTask) {
                            return {
                                name: task.name,
                                listItems: [...task.listItems, { name: action.payload, completed: false }]
                            };
                        }
                        return task;
                    });
                    return {
                        name: board.name,
                        listTasks: updatedTasks
                    };
                }
                return board;
            })
            return {
                ...state,
                type: action.type,
                listBoards: updatedBoardsForNewItem
            };
        case TICK_ITEM: 
            const updatedBoardsForTickItem = state.listBoards.map((board, index) => {
                if(index === state.selectedBoard) {
                    const updatedTasksForTickItem = board.listTasks.map((task, subIndex) => {
                        if(subIndex === action.selectedTask) {
                            const updatedItemsForTick = task.listItems.map((item, tickItem) => {
                                if(tickItem === action.selectedItem) {
                                    item.completed = !item.completed;
                                }
                                return item;
                            });
                            return {
                                name: task.name,
                                listItems: updatedItemsForTick
                            };
                        }
                        return task;
                    });
                    return {
                        name: board.name,
                        listTasks: updatedTasksForTickItem
                    };
                }
                return board;
            });
            return {
                ...state,
                type: action.type,
                listBoards: updatedBoardsForTickItem
            };
        default:
            return state;
    }
}