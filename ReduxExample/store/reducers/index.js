import { carsReducer } from "./carReducer";
import { combineReducers } from "redux";

export default combineReducers({
    cars: carsReducer, 
})