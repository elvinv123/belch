import React from "react";

class ReviewForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            rating: 0,
            body: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        const businessId = parseInt(this.props.match.params.businessId);
        const review = Object.assign({}, this.state, {
            business_id: businessId
        });
        this.props.createReview(review);
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    render(){
        return(
            <>
                <div className="review-page-maincontent">
                    <form onSubmit={this.handleSubmit}>
                        <span className="rating">
                            <input className="rating5" type="radio" name="rating" value="5" checked={this.state.rating ===5} onChange={this.update("rating")}/>
                            <label for="rating5">5</label>
                            <input className="rating4" type="radio" name="rating" value="4" checked={this.state.rating ===4} onChange={this.update("rating")}/>
                            <label for="rating4">4</label>
                            <input className="rating3" type="radio" name="rating" value="3" checked={this.state.rating ===3} onChange={this.update("rating")}/>
                            <label for="rating3">3</label>
                            <input className="rating2" type="radio" name="rating" value="2" checked={this.state.rating === 2} onChange={this.update("rating")}/>
                            <label for="rating2">2</label>
                            <input className="rating1" type="radio" name="rating" value="1" checked={this.state.rating ===1} onChange={this.update("rating")}/>
                            <label for="rating1">1</label>
                        </span>
                        <textarea
                            cols="30"
                            rows="10"
                            value={this.state.body}
                            onChange={this.update("body")}
                        />
                        <input type="submit"/>
                    </form>
                </div>
            </>
        )
    }
}

export default ReviewForm;