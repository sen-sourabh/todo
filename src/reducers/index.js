import { combineReducers } from "redux";
import { amountReducer, calcReducer } from "./reducerTransaction";

const rootReducer = combineReducers({ 
    amountReducer,
    calcReducer
});

export default rootReducer;




