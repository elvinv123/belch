import React from 'react';
import { Link } from 'react-router-dom';

class SearchIndexItem extends React.Component {

    starRating() {
        const rating = Math.round(parseFloat(this.props.business.average_rating))
        switch (rating) {
            case 5:
                return <img className="search-rating" src={window.fivestar_img_1} />;
            case 4:
                return <img className="search-rating" src={window.fourstar_img_1} />;
            case 3:
                return <img className="search-rating" src={window.threestar_img_1} />;
            case 2:
                return <img className="search-rating" src={window.twostar_img_1} />;
            case 1:
                return <img className="search-rating" src={window.onestar_img_1} />;
        }
    }


    render() {
        const review = Object.values(this.props.business.reviews)[0]
        return (
            <Link to={`/businesses/${this.props.business.id}`}>
            <div className="search-item">
            <img className="search-item-pic" src={this.props.business.photoUrls[0]} />
                <div className="business-search-info">
                     <h1>{this.props.business.name}</h1>
                    {this.starRating()}
                    <p>{this.props.business.phone_number}</p>
                    <p>{this.props.business.address}</p>
                </div>
            </div>
            </Link>

        )
    }
}

export default SearchIndexItem;