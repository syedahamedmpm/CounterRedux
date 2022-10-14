import { createStore } from "redux";
import allReducers from "./reducers/CombineReducers";

const store = createStore(allReducers);

export default store;