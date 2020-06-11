import * as BusinessAPIUtil from "../util/business_api_util";

export const RECEIVE_BUSINESSES = "RECEIVE_BUSINESSES";
export const RECEIVE_BUSINESS = "RECEIVE_BUSINESS";
export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const RECEIVE_USERS = "RECEIVE_USERS";


const receiveBusinesses = (businesses) => ({
    type: RECEIVE_BUSINESSES,
    businesses
})

const receiveBusiness = (business) => ({
    type: RECEIVE_BUSINESS,
    business
})
//reveviews
//destructure data from business extract review author and average rating
const receiveReviews = (business) => ({
    type: RECEIVE_REVIEWS,
    reviews: business.reviews
})
const receiveUsers = (business) => ({
    type: RECEIVE_USERS,
    users: business.authors
})
// export const fetchBusiness = (businessId)=> dispatch =>(
//     BusinessAPIUtil.fetchBusiness(businessId)
//     .then(business => dispatch(receiveBusiness(business)))
// )

export const fetchBusinesses = (filters) => dispatch => (
    BusinessAPIUtil.fetchBusinesses(filters)
        .then(businesses => dispatch(receiveBusinesses(businesses))
 ))

export const fetchBusiness = (businessId) => dispatch => (
    BusinessAPIUtil.fetchBusiness(businessId)
        .then(business => dispatch(receiveBusiness(business)),
           business => dispatch(receiveReviews(business)),
            business => dispatch(receiveUsers(business))
           
))

 