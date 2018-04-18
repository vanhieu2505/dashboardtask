import { SHOW_HOME_PAGE, CREATE_NEW_BOARD, CANCEL_NEW_BOARD, ADD_NEW_BOARD, SHOW_BOARD } from './types';

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

export const showBoard = (key) => dispatch => {
    dispatch({
        type: SHOW_BOARD,
        payload: key
    });
};