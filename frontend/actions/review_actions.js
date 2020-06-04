import * as ReviewAPIUtil from "../util/review_api_util";

export const RECEIVE_REVIEW = "RECEIVE_REVIEW";

const receiveReview = ({ review, average_rating, author }) => ({
    type: RECEIVE_REVIEW,
    review,
    average_rating,
    author,
});

export const createReview = review => dispatch => (
    ReviewAPIUtil.createReview(review)
    .then(review => (dispatch(receiveReview(review))
    ))
);