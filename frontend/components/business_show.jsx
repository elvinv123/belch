import React from 'react';
import { Link, Route} from 'react-router-dom';
import ReviewFormContainer from './review_form_container';
import ReviewListItem from './review_list_item'

class BusinessShow extends React.Component{
    constructor(props) {
        super(props)
        this.state = this.props.business;
        this
    }

    componentDidMount(){
        this.props.fetchBusiness(this.props.businessId)
    }

    reviewList(){

        if (!this.props.business) return null;
        return(
            <ul>
                {
                Object.values(this.props.business.reviews).map(review =>
                    <ReviewListItem key={review.id} review={review} author={this.props.business.authors[review.author_id]}/>
                )
                }
            </ul>
        )
    }

    headerPhotos(){
        return (
            <section className="header-photos">
                {this.props.business.photoUrls.slice(0,4).map((url, index)=> <img key={index} className="header-photo" src={url}/>)}
            </section>
        )
    }


    render(){

        if (!this.props.business) return null;

        return (
           
            <div className="business-page">
                <div className="business-page-header">
                    <img className="business-page-logo" src={window.logo_img_1} />
                    <section className="business-login-signup">
                        <Link to="/login"><button className="business-login-btn">Log in</button></Link>
                        <Link to="/signup"><button className="business-signup-btn">Sign Up</button></Link>
                    </section>
                    <Link to={`/businesses/${this.props.businessId}/review`}>
                        <button className="write-review-header">Write a Review</button>
                    </Link>
                </div>
                <section>
                    {this.headerPhotos()}
                </section>
                <div className="business-maincontent">
                    <div className="business-details-container">
                        <h2 className="business-name">{this.props.business.name}</h2>
                        {this.props.business.phone_number}
                        <section className="write-a-review" >
                            <Link to={`/businesses/${this.props.businessId}/review`}>
                                <img src={window.review_img_1} />
                            </Link>
                        </section>
                    </div>
                {this.reviewList()}
                </div>

                
                <div className="footer">
                    <img className="footer_img_1" src={window.footer_img_1} />
                </div>
            </div>
        )
    }
}

export default BusinessShow;