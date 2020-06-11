import { connect } from 'react-redux';
import BusinessShow from './business_show';
import { fetchBusiness } from '../actions/business_actions';
import { logout } from "../actions/session_actions";

const mSTP = (state, ownProps) =>{

  const businessId = ownProps.match.params.businessId;
  // debugger
  return  {
    business: state.entities.businesses[businessId],
    businessId: businessId,
    currentUser: state.entities.users[state.session.id],
    reviews: Object.values(state.entities.reviews),
    authors: state.entities.users
}};

const mDTP = dispatch => {
   
    return{
    
    fetchBusiness: (businessId) => dispatch(fetchBusiness(businessId)),
    logout: () => dispatch(logout()),
}};

export default connect(mSTP, mDTP)(BusinessShow);