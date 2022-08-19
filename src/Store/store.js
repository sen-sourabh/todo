import { createStore } from "redux";
import rootReducer from "../reducers";
// import reduxThunk from "redux-thunk";

const store = createStore(rootReducer);

export default store;