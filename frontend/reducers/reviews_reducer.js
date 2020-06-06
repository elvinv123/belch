import { RECEIVE_REVIEW } from '../actions/review_actions';
import { RECEIVE_BUSINESS } from '../actions/business_actions';

// const reviewsReducer = (state = {}, action) => {
//     Object.freeze(state);
//     switch (action.type) {
//         case RECEIVE_BUSINESS:
//             return Object.assign({}, state, action.reviews);
//         case RECEIVE_REVIEW:
//             const { review } = action;
//             return Object.assign({}, state, { [review.id]: review });
//         default:
//             return state;
//     }
// }

const reviewsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_BUSINESS:
            const reviews =  action.business.reviews ;
            return Object.assign({}, state, reviews) 
        case RECEIVE_REVIEW:
            const { review } = action;
            return Object.assign({}, state, { [review.id]: review });
        default:
            return state;
    }
}

export default reviewsReducer;

