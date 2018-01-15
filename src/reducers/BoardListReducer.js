export default function (state = [], action) {
    switch (action.type) {
        case 'BOARD_ADDED':
            const newE = action.board ?  [...state, action.board] : state;
            console.log(newE);
           return newE;
        default:
    }

    return state;
}