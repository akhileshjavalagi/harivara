import cartReducer from "./Reducer";
import { combineReducers } from "redux";

const totalReducers = combineReducers({
    cartReducer
});
export default totalReducers;