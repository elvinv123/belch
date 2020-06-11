import React from 'react';
import SearchIndexItem from "./search_index_item"


class Search extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchBusinesses({ category: this.props.match.params.query});
    }

    businessItems() {

        if (!this.props.businesses) return null;
        return (
            <ul>
                {
                    Object.values(this.props.businesses).map(business =>
                        <SearchIndexItem key={business.id} business={business} />
                    )
                }
            </ul>
        )
    }

    render(){
        return(
            <div>
                {this.businessItems()}
            </div>
        )
    }
}

export default Search;

