import { connect } from 'react-redux';
import BusinessShow from './business_show';
import { fetchBusiness } from '../actions/business_actions';

const mSTP = (state, ownProps) =>{

  const businessId = ownProps.match.params.businessId;
  return  {
    business: state.entities.businesses[businessId],
    businessId: businessId
}};

const mDTP = dispatch => {
   
    return{
    
    fetchBusiness: (businessId) => dispatch(fetchBusiness(businessId)),
}};

export default connect(mSTP, mDTP)(BusinessShow);