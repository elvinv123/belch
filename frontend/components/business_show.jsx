import React from 'react';
import { Link, Route} from 'react-router-dom';
import ReviewFormContainer from './review_form_container';
import ReviewListItem from './review_list_item'
import BusinessMap from './business_map'

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

    hours(){
        const days = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
        const hours = this.props.business.hours.split(",");
        return(
            <div className="hours">
                <ul className="days">
                    {days.map((day, index) => <li key={index}> {day} </li>)}
                </ul>
                <ul className="time">
                    {hours.map((time, index)=> <li key={index}> {time} </li> )}
                </ul>
            </div>
        );
      
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
                <div className="business-left">
                    <div className="business-details-container">
                        <h2 className="business-name">{this.props.business.name}</h2>
                        
                        <section className="write-a-review" >
                            <Link to={`/businesses/${this.props.businessId}/review`}>
                                <img src={window.review_img_1} />
                            </Link>
                        </section>
                    <section className="location-hours">
                        <h2>Location & Hours</h2>
                        <BusinessMap business={this.props.business}/>
                        {this.hours()}
                    </section>
                        
                    </div>
                {this.reviewList()}
                </div>
                <div className="scroll-info">
                    <p className="website"><img src={window.website_img_1} /><a href={this.props.business.website}>{this.props.business.website}</a></p>
                    <p className="phone"><img src={window.phone_img_1}/>{this.props.business.phone_number}</p>
                </div>

                
                <div className="footer">
                    <img className="footer_img_1" src={window.footer_img_1} />
                </div>
            </div>
        )
    }
}

export default BusinessShow;