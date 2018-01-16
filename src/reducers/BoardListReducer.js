import { ACTIONS } from '../actions/index';

/**
 * Basic way to introduce unique id for boards.
 */
let boardCounter = 1;
let listCounter = 1;
let cardCounter = 1;

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
        case ACTIONS.CARD_ADDED:
            const current = state.map(board => {
                if (board.id !== action.boardId) {
                    return board;
                }
                const cls = board.cardLists.map(cList => {
                    if (cList.id !== action.cardListId) {
                        return cList;
                    }

                    const card = {
                        ...action.card,
                        id: cardCounter++
                    }

                    const cards = [...cList.cards, card];

                    return {
                        id: cList.id,
                        name: cList.name,
                        cards: cards
                    }
                });

                return {
                    id: board.id,
                    name: board.name,
                    cardLists: cls
                }
            });
            return current;
        default:
    }

    return state;
}