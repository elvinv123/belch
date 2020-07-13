import React from 'react';
import { Link, Route} from 'react-router-dom';
import ReviewListItem from './review_list_item'
import BusinessMap from './business_map'

class BusinessShow extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            category: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        this.props.fetchBusiness(this.props.match.params.businessId)
    }

    handleSubmit(e) {
        e.preventDefault();

        this.props.history.push(`/businesses/search/${this.state.category}`);
    }

    handleChange(type) {
        return (e) => this.setState({ [type]: e.target.value });
    }

    logged_in() {
        if (this.props.currentUser) {
            return (
                <p><button className="business-logout" onClick={this.props.logout}>Logout</button></p>
            )
        } else {
            return (
                <div className="business-login-signup">
                    <Link to="/login"><button className="business-login-btn">Log in</button></Link>
                    <Link to="/signup"><button className="business-signup-btn">Sign Up</button></Link>
                </div>
            )
        }
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

    rating(){
        
        const rating = Math.round(parseFloat(this.props.business.average_rating))

        switch(rating){
            case 5:
                return <img className="rating" src={window.ratingfive_img_1} />;
            case 4:
                return <img className="rating" src={window.ratingfour_img_1} />;
            case 3:
                return <img className="rating" src={window.ratingthree_img_1} />;
            case 2:
                return <img className="rating" src={window.ratingtwo_img_1} />;
            case 1:
                return <img className="rating" src={window.ratingone_img_1} />;
        }
    }


    render(){

        if (this.props.business){
            const authors = this.props.authors;

            const { category } = this.state;
        return (
           
            <div className="business-page">
                <div className="business-page-header">
                    <Link to={`/`}><img className="business-page-logo" src={window.logo_img_1} /></Link>
                        {this.logged_in()}
                    <form className="business-search-bar" onSubmit={this.handleSubmit}>
                        <input type="text"
                            value={category}
                            placeholder="Find tacos, bars, pizza"
                            onChange={this.handleChange("category")}
                        />
                        <button type="submit"><img className="magnefying_glass" src={window.search} /></button>
                    </form>
                </div>
                <section>
                    {this.headerPhotos()}
                </section>
                <div className="business-left">
                    <div className="business-details-container">
                        <h2 className="business-name">{this.props.business.name}</h2>
                        <div className="rating-reviews">
                            {this.rating()}
                            <p>{this.props.reviews.length} reviews</p>
                        </div>
                        
                        <section className="buiness-buttons">
                            <section className="write-a-review" >
                                <Link to={`/businesses/${this.props.businessId}/review`} onClick={this.props.clearErrors()}>
                                    <img src={window.review_img_1} />
                                </Link>
                            </section>
                         </section>
                    </div>  
                    <div className="scroll-info">
                        <section className="website">
                            <img src={window.website_img_1} />
                            <p><a href={this.props.business.website}>{this.props.business.website}</a></p>
                        </section>
                        <section className="phone">
                            <img src={window.phone_img_1} />
                            <a href={`tel:${this.props.business.phone_number}`}>{this.props.business.phone_number}</a>
                        </section>
                        {/* <section className="directions">
                        <img src={window.directions_img_1} />
                        <a>Get Directions</a>
                    </section>
                    <section className="message">
                        <img src={window.message_img_1} />
                        <a>Message the Business</a>
                    </section> */}
                    </div> 
                            {/* <button className="add-photo"><img src={window.camera_img_1} /><p>Add Photo</p></button>
                            <button className="share"><img src={window.share_img_1} /><p>Share</p></button>
                            <button className="save"><img src={window.save_img_1} /><p>Save</p></button>  */}
                        
                    <section className="location-hours">
                        <h2>Location & Hours</h2>
                        <BusinessMap business={this.props.business}/>
                        {this.hours()}
                    </section>
                        
                    

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

                    <ul>
                        {
                            this.props.reviews.map(review => {
                                return <ReviewListItem key={review.id} review={review} author={authors[review.author_id]} />
                            }
                            )
                        }
                    </ul>

                </div>
               

                
                <div className="footer">
                    <section className="socials">
                        <a href="https://linkedin.com/in/elvin-valette-5b2945a5"><img className="linkedin" src={window.linkedin} /></a>
                        <a href="https://github.com/elvinv123"><img className="github" src={window.github} /></a>
                        <a href="https://angel.co/u/elvin-valette"><img className="angellist" src={window.angellist} /></a>
                        <a href="https://elvinv123.github.io"><img className="portfolio" src={window.portfolio} /></a>
                    </section>
                    <img className="footer_img_1" src={window.footer_img_1} />
                </div>
            </div>
        )}else{
            return null;
        }
    }
}

export default BusinessShow;