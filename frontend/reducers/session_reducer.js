import {
    RECEIVE_CURRENT_USER,
    LOGOUT_CURRENT_USER,
} from "../actions/session_actions";

export default (state = { id: null }, action) => {
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            debugger
            return { id: action.user.id };
        case LOGOUT_CURRENT_USER:
            return { id: null };
        default:
            return state;
    }
};
