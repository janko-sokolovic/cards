/**
 * Centralize action name strings.
 */
export const ACTIONS = {
    BOARD_ADDED: 'BOARD_ADDED',
    CARD_LIST_ADDED: 'CARD_LIST_ADDED',
    CARD_ADDED: 'CARD_ADDED',
    DRAG_START: 'DRAG_START',
    DRAG_END: 'DRAG_END',
    TARGET_ACQUIRED: 'TARGET_ACQUIRED',
    CARD_MOVED: 'CARD_MOVED'
}

export function boardAdded(board) {
    return {
        type: ACTIONS.BOARD_ADDED,
        board: board
    }
}

export function cardListAdded(boardId, cardList) {
    return {
        type: ACTIONS.CARD_LIST_ADDED,
        boardId,
        cardList
    }
}

export function cardAdded(boardId, cardListId, card) {
    return {
        type: ACTIONS.CARD_ADDED,
        boardId,
        cardListId,
        card
    }
}

export function dragStart(card, sourceList) {
    return {
        type: ACTIONS.DRAG_START,
        card,
        sourceList
    }
}

export function dragEnd() {
    return {
        type: ACTIONS.DRAG_END
    }
}

export function targetAcquired(currentTargetList) {
    return {
        type: ACTIONS.TARGET_ACQUIRED,
        targetList: currentTargetList
    }
}

export function moveCard(card, targetList, sourceList) {
    return {
        type: ACTIONS.CARD_MOVED,
        card,
        targetList,
        sourceList
    }
}