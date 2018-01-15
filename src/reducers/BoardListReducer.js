import { ACTIONS } from '../actions/index';

export default function (state = [], action) {
    switch (action.type) {
        case ACTIONS.BOARD_ADDED:
            return action.board ? [...state, action.board] : state;
        default:
    }

    return state;
}