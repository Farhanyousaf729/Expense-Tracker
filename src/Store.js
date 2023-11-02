import { createStore, combineReducers } from "redux";
import dataReducer from "./Reducer";

const reducer = combineReducers({
    dataReducer
})

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;