import { combineReducers } from "redux";
import BoardListReducer from "./BoardListReducer";
import CardDragReducer from "./CardDragReducer";

const rootReducer = combineReducers({
    boards: BoardListReducer,
    cardDrag: CardDragReducer
});

export default rootReducer;