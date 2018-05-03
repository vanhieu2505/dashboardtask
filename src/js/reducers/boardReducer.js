import { SHOW_HOME_PAGE, CREATE_NEW_BOARD, CANCEL_NEW_BOARD, ADD_NEW_BOARD, SHOW_BOARD, CREATE_NEW_TASK, CREATE_NEW_ITEM, TICK_ITEM, BEGIN_DRAG, DROP_ITEM } from '../actions/types';

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
        case BEGIN_DRAG:
            return {
                ...state,
                draggedSelectedTask: action.selectedTask,
                draggedSelectedItem: action.selectedItem
            };
        case DROP_ITEM:
            const updatedBoardForDropItem = state.listBoards.map((board, boardIndex) => {
                if (boardIndex == state.selectedBoard) {
                    const updatedBoardForDropItem = board.listTasks.map((task, taskIndex) => {
                        if (taskIndex == state.draggedSelectedTask) {
                            const updatedListItemPopout = task.listItems.filter((itemOut, itemOutIndex) => itemOutIndex !== state.draggedSelectedItem);
                            return {
                                name: task.name,
                                listItems: updatedListItemPopout
                            };
                        } 
                        if (taskIndex == action.selectedTask) {
                            const draggedItem = board.listTasks[state.draggedSelectedTask].listItems[state.draggedSelectedItem];
                            const updatedListItemPopin = [...task.listItems.slice(0, action.selectedItem), 
                                                        , { name: draggedItem.name, completed: draggedItem.completed },
                                                        ...task.listItems.slice(action.selectedItem)];
                            return {
                                name: task.name,
                                listItems: updatedListItemPopin
                            };
                        }
                        return task;
                    });
                    return {
                        name: board.name,
                        listTasks: updatedBoardForDropItem
                    };
                }
                return board;
            });
            
            return {
                ...state,
                draggedSelectedTask: '',
                draggedSelectedItem: '',
                listBoards: updatedBoardForDropItem
            }
        default:
            return state;
    }
}