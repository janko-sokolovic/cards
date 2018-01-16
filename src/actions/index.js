/**
 * Centralize action name strings.
 */
export const ACTIONS = {
    BOARD_ADDED: 'BOARD_ADDED',
    CARD_LIST_ADDED: 'CARD_LIST_ADDED'
}

export function boardAdded(board) {
    return {
        type: ACTIONS.BOARD_ADDED,
        board: board
    }
}

export function cardListAdded(board) {
    return {
        type: ACTIONS.CARD_LIST_ADDED,
        board: board
    }
}