import { Store, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./rootReducer";

const enhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));
const store: Store = createStore(rootReducer, enhancer);
export default store;
