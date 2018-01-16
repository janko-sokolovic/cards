import { ACTIONS } from '../actions/index';

/**
 * Basic way to introduce unique id for boards.
 */
let boardCounter = 1;

export default function (state = [], action) {
    switch (action.type) {
        case ACTIONS.BOARD_ADDED:
            action.board.id = boardCounter++;
            return action.board ? [...state, action.board] : state;
        default:
    }

    return state;
}