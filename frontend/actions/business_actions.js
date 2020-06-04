import * as BusinessAPIUtil from "../util/business_api_util";

export const RECEIVE_BUSINESS = "RECEIVE_BUSINESS";

const receiveBusiness = (business) => ({
    type: RECEIVE_BUSINESS,
    business
})

export const fetchBusiness = (businessId)=> dispatch =>(
    BusinessAPIUtil.fetchBusiness(businessId)
    .then(business => dispatch(receiveBusiness(business)))
)