import {
    RECEIVE_CURRENT_USER,
    RECEIVE_SESSION_ERRORS,
    CLEAR_SESSION_ERRORS
} from "../actions/session_actions";

export default (state = [], action) => {
    switch (action.type) {
        case RECEIVE_SESSION_ERRORS:
            return state.concat(action.errors);
        case RECEIVE_CURRENT_USER:
            return [];
        case CLEAR_SESSION_ERRORS:

            return [];
        default:
            return state;
    }
};
