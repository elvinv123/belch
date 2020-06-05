import React from "react";
import {Link, Redirect} from "react-router-dom"

class ReviewForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            rating: 4,
            body: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.fetchBusiness(this.props.businessId)
    }

    handleSubmit(e){
        e.preventDefault();
        const businessId = parseInt(this.props.match.params.businessId);
        const review = Object.assign({}, this.state, {
            business_id: businessId
        });
        this.props.createReview(review);
        <Redirect to={`/businesses/${businessId}`} />
    }

    update(field) {
        if(field === "rating"){
            return e => this.setState({ [field]: parseInt(e.currentTarget.value) });
        }
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    starPhrase(){
        switch(this.state.rating){
            case 1:
                return "Eek! Methinks not"
            case 2:
                return "Meh, I've experienced better"
            case 3:
                return "A-OK"
            case 4:
                return "Yay! I'm a fan"
            case 5:
                return "WooHoo! As good as it gets!"
        }
    }

    logged_in(){
        if(this.props.currentUser){
        return(
            <p><button className="logout"onClick={this.props.logout}>Logout</button></p>
        )}else{
            <>
                <button className="business-login-btn"><Link to="/login">Log in</Link></button>
                <button className="business-signup-btn"><Link to="/signup">Sign Up</Link></button>
            </>
        }  
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render(){
        if (!this.props.business) return null;

        return(
            <div className="review-page">
                <div className="review-form-header">
                    <Link to="/"><img className="review-page-logo" src={window.logo_img_1} /></Link>
                    {this.logged_in()}
                    <p>Write a Review</p>
                </div>
                
                <div className="review-page-maincontent">
                    <div className="review-bucket">
                        <p className="business-title"><Link to={`/businesses/${this.props.business.id}`}>{this.props.business.name}</Link></p>
                        <a href="https://www.yelp.com/guidelines"> Read our review guidelines</a>
                        <form onSubmit={this.handleSubmit}> 
                            <div className="review-form-container">
                                <span className="rating">
                                    <input className="rating1" type="radio" name="rating" value="1" checked={this.state.rating ===1} onChange={this.update("rating")}/>
                                    <label htmlFor="rating1">1</label>
                                    <input className="rating2" type="radio" name="rating" value="2" checked={this.state.rating === 2} onChange={this.update("rating")} />
                                    <label htmlFor="rating2">2</label>
                                    <input className="rating3" type="radio" name="rating" value="3" checked={this.state.rating === 3} onChange={this.update("rating")} />
                                    <label htmlFor="rating3">3</label>
                                    <input className="rating4" type="radio" name="rating" value="4" checked={this.state.rating === 4} onChange={this.update("rating")} />
                                    <label htmlFor="rating4">4</label>
                                    <input className="rating5" type="radio" name="rating" value="5" checked={this.state.rating ===5} onChange={this.update("rating")}/>
                                    <label htmlFor="rating5">5</label>
                                </span>
                                <p>{this.starPhrase()}</p>
                                <textarea
                                    value={this.state.body}
                                    onChange={this.update("body")}
                                ></textarea>
                                <div className="errors">{this.renderErrors()}</div>
                            </div>
                            <button type="submit" className="post-review-btn" >Post Review</button>
                            
                        </form>
                    </div>
                    
                    
                </div>
            </div>
        )
    }
}

export default ReviewForm;