import { createStore } from "redux";
import totalReducers from "./reducers";

const store = createStore(
    totalReducers, {}, window.__REDUX_DEVTOOLS_EXTENSION__
&& window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;