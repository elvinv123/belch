import React from 'react';

class SearchIndexItem extends React.Component {

    starRating() {
        const rating = Math.round(parseFloat(this.props.business.average_rating))
        switch (rating) {
            case 5:
                return <img className="hot-rating" src={window.fivestar_img_1} />;
            case 4:
                return <img className="hot-rating" src={window.fourstar_img_1} />;
            case 3:
                return <img className="hot-rating" src={window.threestar_img_1} />;
            case 2:
                return <img className="hot-rating" src={window.twostar_img_1} />;
            case 1:
                return <img className="hot-rating" src={window.onestar_img_1} />;
        }
    }

    render() {
        return (

            <div className="hot-item">
                <Link to={`/businesses/${this.props.business.id}`}><img className="hot-item-pic" src={this.props.business.photoUrls[0]} /></Link>
                <Link to={`/businesses/${this.props.business.id}`}><h1>{this.props.business.name}</h1></Link>
                {this.starRating()}
                <p>{this.props.business.phone_number}</p>
                <p>{this.props.business.address}</p>
            </div>

        )
    }
}

export default SearchIndexItem;