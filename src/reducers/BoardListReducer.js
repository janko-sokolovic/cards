import { ACTIONS } from '../actions/index';

/**
 * Basic way to introduce unique id for boards.
 */
let boardCounter = 1;
let listCounter =1;

export default function (state = [], action) {
    switch (action.type) {
        case ACTIONS.BOARD_ADDED:
            action.board.id = boardCounter++;
            return action.board ? [...state, action.board] : state;

        case ACTIONS.CARD_LIST_ADDED:
            return state.map(board => {
                if (board.id !== action.boardId) {
                    return board;
                }
                const list = {
                    ...action.cardList,
                    id: listCounter++
                }
                const lists = [...board.cardLists, list];
                return {
                    id: board.id,
                    name: board.name,
                    cardLists: lists
                    
                }
            });
        default:
    }

    return state;
}