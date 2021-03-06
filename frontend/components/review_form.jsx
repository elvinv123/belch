import React from "react";
import {Link, Redirect} from "react-router-dom"

class ReviewForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            rating: 4,
            body: "",
            photoFile: null,
            photoUrl: null
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.fetchBusiness(this.props.businessId)
    }


    handleSubmit(e){
        e.preventDefault();
        const businessId = parseInt(this.props.match.params.businessId);

        const formData = new FormData();

        formData.append('review[rating]', this.state.rating)
        formData.append('review[body]', this.state.body)
        formData.append('review[business_id]', businessId)

        if (this.state.photoFile) {
            formData.append('review[photo]', this.state.photoFile)
        }
        
        this.props.createReview(formData).then(()=>{
            if (this.props.errors.length ===0){
                this.props.history.push(`/businesses/${businessId}`)
                
        }
        }); 
    }

    handleFile(e){
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () =>{
            this.setState({photoFile: file, photoUrl: fileReader.result})
        };
        if(file){
            fileReader.readAsDataURL(file);
        }  
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
            return(
            <div className="login-logout">
                <Link to="/login"><button className="review-login-btn">Log in</button></Link>
                <Link to="/signup"><button className="review-signup-btn">Sign Up</button></Link>
            </div>
            )
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
        const preview = this.state.photoUrl ? <img className="review-preview" src={this.state.photoUrl}/> : null;
        
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
                                ></textarea>{preview}
                                <div className="errors">{this.renderErrors()}</div>
                                <input type="file" onChange={this.handleFile.bind(this)}/>
                            </div>
                            <button type="submit"  onClick={this.props.clearErrors()} className="post-review-btn" >Post Review</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default ReviewForm;