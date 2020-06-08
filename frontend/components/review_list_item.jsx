import React from 'react';
import { formatDate } from '../util/format_date_util';
import { render } from 'react-dom';

class ReviewListItem extends React.Component{
  
    starRating(){
        let rating =this.props.review.rating;
        switch(rating){
            case 5:
                return <img className="fivestar_img_1" src={window.fivestar_img_1} />;
            case 4:
                return <img className="fourstar_img_1" src={window.fourstar_img_1} />;
            case 3:
                return <img className="threestar_img_1" src={window.threestar_img_1} />;
            case 2:
                return <img className="twostar_img_1" src={window.twostar_img_1} />;
            case 1:
                return <img className="onestar_img_1" src={window.onestar_img_1} />;
        }
    }

    profilePic(){
        if(!this.props.author.photoUrl){
            return(
                <img className="profile-pic" src={window.profilepic_img_1} />
            ) 
        }
        return( 
            <img className="profile-pic" src={this.props.author.photoUrl} />
        )
    }

    render()
    {
        return(
            <div className="review-container">
            
            <section className="review-user">
                {this.profilePic()}
                <div className="user-info">
                    <p className="name">{this.props.author.fname} {this.props.author.lname[0]}</p>
                    <p className="zip">{this.props.author.zipcode}</p>
                </div>
                
            </section>
            <section className="review-details">
                <p className="rating">{this.starRating()}</p>
                <p className="date">{formatDate(this.props.review.created_at)}</p>
                <p className="body">{this.props.review.body}</p>
            </section>
            </div>
        )
    }
}

export default ReviewListItem;