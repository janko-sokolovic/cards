/**
 * Centralize action name strings.
 */
export const ACTIONS = {
    BOARD_ADDED: 'BOARD_ADDED'
}

export function boardAdded(board) {
    return {
        type: ACTIONS.BOARD_ADDED,
        board: board
    }
}