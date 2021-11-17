import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { expenseReducer } from "../reducers/expenses";

const reducer = combineReducers({
    expenses: expenseReducer,
})

const initialState = {};

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
export default store;