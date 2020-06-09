import React from 'react';
import { Link, Route} from 'react-router-dom';
import ReviewFormContainer from './review_form_container';
import ReviewListItem from './review_list_item'
import BusinessMap from './business_map'

class BusinessShow extends React.Component{
    constructor(props) {
        super(props)
        this.state = this.props.business;
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
        if (this.props.business.photoUrls)
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

    rating(){
        const rating = Math.round(parseFloat(this.props.business.average_rating))

        switch(rating){
            case 5:
                return <img className="rating" src={window.ratingfive_img_1} />;
            case 4:
                return <img className="rating" src={window.ratingfour_img_1} />;
            case 3:
                return <img className="ratingt" src={window.ratingthree_img_1} />;
            case 2:
                return <img className="rating" src={window.ratingtwo_img_1} />;
            case 1:
                return <img className="rating" src={window.ratingone_img_1} />;
        }
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
                        <div className="rating-reviews">
                            {this.rating()}
                            <p>{Object.values(this.props.business.reviews).length} reviews</p>
                        </div>
                        
                        <section className="buiness-buttons">
                            <section className="write-a-review" >
                                <Link to={`/businesses/${this.props.businessId}/review`}>
                                    <img src={window.review_img_1} />
                                </Link>
                            </section>
                            <button className="add-photo"><img src={window.camera_img_1} /><p>Add Photo</p></button>
                            <button className="share"><img src={window.share_img_1} /><p>Share</p></button>
                            <button className="save"><img src={window.save_img_1} /><p>Save</p></button> 
                        </section>
                    <section className="location-hours">
                        <h2>Location & Hours</h2>
                        <BusinessMap business={this.props.business}/>
                        {this.hours()}
                    </section>
                        
                    </div>

                    <section className="recommended-reviews">
                        <h2>Recommended Reviews</h2>
                        <div className="your-trust">
                            <img src={window.small_logo_img_1}/>
                            <p><strong>Your trust is our top concern,</strong> so businesses can't pay to alter or remove their reviews.</p>
                            <a href="https://www.yelp.com/advertiser_faq">Learn More</a>
                        </div>
                        <img src={window.review_rating_user_img_1}/>
                        <div className="start-review">
                            <img src={window.review_rating_img_1}/>
                            <p><Link to={`/businesses/${this.props.businessId}/review`}>Start your review of <strong>{this.props.business.name}</strong></Link></p>
                        </div>
                    </section>

                {this.reviewList()}
                </div>
                <div className="scroll-info">
                    <section className="website">
                        <img src={window.website_img_1} />
                        <p><a href={this.props.business.website}>{this.props.business.website}</a></p>  
                    </section>
                    <section className="phone">
                        <img src={window.phone_img_1} />
                        <p>{this.props.business.phone_number}</p>
                    </section>
                    <section className="directions">
                        <img src={window.directions_img_1} />
                        <a>Get Directions</a>
                    </section>
                    <section className="message">
                        <img src={window.message_img_1} />
                        <a>Message the Business</a>
                    </section>
                </div>

                
                <div className="footer">
                    <img className="footer_img_1" src={window.footer_img_1} />
                </div>
            </div>
        )
    }
}

export default BusinessShow;