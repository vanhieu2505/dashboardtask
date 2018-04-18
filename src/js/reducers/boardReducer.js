import { SHOW_HOME_PAGE, CREATE_NEW_BOARD, CANCEL_NEW_BOARD, ADD_NEW_BOARD, SHOW_BOARD } from '../actions/types';

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
        default:
            return state;
    }
}