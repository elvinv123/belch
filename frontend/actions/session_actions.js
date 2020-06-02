import * as APIUtil from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

const receiveCurrentUser = (user) => ({
    type: RECEIVE_CURRENT_USER,
    user,
});

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
});

const receiveSessionErrors = (errors) => ({
    type: RECEIVE_SESSION_ERRORS,
    errors,
});

export const login = (user) => (dispatch) =>
    APIUtil.login(user)
        .then((currentUser) => dispatch(receiveCurrentUser(currentUser)))
        .fail((errors) => dispatch(receiveSessionErrors(errors)));

export const logout = () => (dispatch) =>
    APIUtil.logout()
        .then(() => dispatch(logoutCurrentUser()))
        .fail((errors) => dispatch(receiveSessionErrors(errors)));

export const signup = (user) => (dispatch) =>
    APIUtil.signup(user)
        .then((currentUser) => dispatch(receiveCurrentUser(currentUser)))
        .fail((errors) => dispatch(receiveSessionErrors(errors)));
