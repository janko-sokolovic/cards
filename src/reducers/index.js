import { combineReducers } from "redux";
import BoardListReducer from "./BoardListReducer";

const rootReducer = combineReducers({
    boards: BoardListReducer
});

export default rootReducer;