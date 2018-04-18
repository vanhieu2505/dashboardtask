import { SHOW_HOME_PAGE, CREATE_NEW_BOARD, CANCEL_NEW_BOARD, ADD_NEW_BOARD, SHOW_BOARD, CREATE_NEW_TASK, CREATE_NEW_ITEM, TICK_ITEM } from './types';

export const createNewBoard = () => dispatch => {
    dispatch({
        type: CREATE_NEW_BOARD
    });
};

export const cancelNewBoard = () => dispatch => {    
    dispatch({
        type: CANCEL_NEW_BOARD
    });
};

export const addNewBoard = (newBoard) => dispatch => {
    dispatch({
        type: ADD_NEW_BOARD,
        payload: newBoard        
    })
};

export const showBoard = (selectedBoard) => dispatch => {
    dispatch({
        type: SHOW_BOARD,
        payload: selectedBoard
    });
};

export const createNewTask = (newTask) => dispatch => {
    dispatch({
        type: CREATE_NEW_TASK,
        payload: newTask
    });
}

export const createNewItem = (selectedTask, newItem) => dispatch => {
    dispatch({
        type: CREATE_NEW_ITEM,
        payload: newItem,
        selectedTask: selectedTask
    });
}

export const tickItem = (selectedTask, selectedItem) => dispatch => {
    dispatch({
        type: TICK_ITEM,
        selectedTask: selectedTask,
        selectedItem: selectedItem
    });
}