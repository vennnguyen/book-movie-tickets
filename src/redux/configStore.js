import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
const rootReducer = combineReducers({
  //STATE STORE
});
const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
