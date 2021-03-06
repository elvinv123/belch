import {connect} from "react-redux";
import { fetchBusiness } from '../actions/business_actions';
import {createReview, clearErrors} from "../actions/review_actions";
import { logout } from "../actions/session_actions";
import ReviewForm from "./review_form";

const mSTP = (state, ownProps) => {
    const businessId = ownProps.match.params.businessId;
    return {
    business: state.entities.businesses[businessId],
    businessId: businessId,

    currentUser: state.entities.users[state.session.id],
    errors: state.errors.reviews,
}}

const mDTP = (dispatch) => ({
    createReview: review => dispatch(createReview(review)),
    logout: () => dispatch(logout()),
    fetchBusiness: businessId => dispatch(fetchBusiness(businessId)),
    clearErrors: () => dispatch(clearErrors())
});

export default connect(mSTP, mDTP)(ReviewForm);
