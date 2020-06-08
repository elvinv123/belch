import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";
import {createReview} from "./util/review_api_util"
import {fetchBusiness} from "./actions/business_actions"


document.addEventListener("DOMContentLoaded", () => {
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser },
            },
            session: { id: window.currentUser.id },
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    // const store = configureStore();
    const root = document.getElementById("root");
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.createReview = createReview;
    window.fetchBusiness =fetchBusiness();
    ReactDOM.render(<Root store={store}/>, root);
});