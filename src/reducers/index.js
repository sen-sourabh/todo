import { combineReducers } from "redux";
import amountReducer from "./reducerTransaction";

const rootReducer = combineReducers({ 
    amountReducer
});

export default rootReducer;