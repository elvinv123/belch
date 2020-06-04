import {RECEIVE_BUSINESS} from "../actions/business_actions"

const BusinessesReducer = (state={}, action) =>{
    Object.freeze({}, state);

    switch(action.type){
        case RECEIVE_BUSINESS:
            const newBusiness = { [action.business.id]: action.business};
            return Object.assign({}, state, newBusiness)
        default:
            return state;
    }
}

export default BusinessesReducer