import React from 'react';
import { Link, Route} from 'react-router-dom';
import ReviewFormContainer from './review_form_container';

class BusinessShow extends React.Component{
    constructor(props) {
        super(props)
        this.state = this.props.business;
        this
    }

    componentDidMount(){
        this.props.fetchBusiness(this.props.businessId)
    }




    render(){

        if (!this.props.business) return null;

        return (
            <>
                <div className="business-page-header">
                    {/* <img className="business-page-logo" src={window.logo_img_1} /> */}
                    <button className="business-login-btn"><Link to="/login">Log in</Link></button>
                    <button className="business-signup-btn"><Link to="/signup">Sign Up</Link></button>
                </div>

                <div className="business-maincontent">
                    <h2 className="business-name">{this.props.business.name}</h2>
                    <div className="details-container">
                        {this.props.business.phone_number}
                        <Link to={`/businesses/${this.props.businessId}/review`}> leave a review </Link>
                    </div>
                
                </div>

                
                <div className="footer">
                    <img className="footer_img_1" src={window.footer_img_1} />
                </div>
            </>
        )
    }
}

export default BusinessShow;