import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import BusinessesReducer from "./businesses_reducer";


export default combineReducers({
    users: usersReducer,
    businesses: BusinessesReducer
});
