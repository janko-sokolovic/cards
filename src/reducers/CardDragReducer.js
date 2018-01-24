import { ACTIONS } from '../actions/index';

const initialState = {
    isDragging: false,
    draggingCard: null,
    currentTargetList: null,
    sourceList: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case ACTIONS.DRAG_START:
            return { ...state, isDragging: true, card: action.card, sourceList: action.sourceList }
        case ACTIONS.DRAG_END:
            return { ...state, isDragging: false, card: null }
        case ACTIONS.TARGET_ACQUIRED:
            return { ...state, currentTargetList: action.targetList }
        default:
    }

    return state;
}