import { carsReducer } from "./carReducer";
import { userReducer, userLogin } from "./userReducer";
import { combineReducers } from "redux";

export default combineReducers({
    cars: carsReducer, 
    user: userReducer, 
    login: userLogin
})