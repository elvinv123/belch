import * as ReviewAPIUtil from "../util/review_api_util";

export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const RECEIVE_REVIEW_ERRORS = 'RECEIVE_REVIEW_ERRORS';

const receiveReview = ({ review, average_rating, author }) => ({
    type: RECEIVE_REVIEW,
    review,
    average_rating,
    author,
});

export const receiveErrors = errors => ({
    type: RECEIVE_REVIEW_ERRORS,
    errors
});

export const createReview = review => dispatch => (
    ReviewAPIUtil.createReview(review)
    .then(review => (dispatch(receiveReview(review))
    ), err => (
        dispatch(receiveErrors(err.responseJSON))
    ))
);


