import React from 'react';
import BusinessMap from './business_map';
import BusinessIndex from './business_index';

class Search extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchBusinesses();
    }
    render(){
        return(
            <div>
                <BusinessMap businesses={this.props.businesses}/>
                <BusinessIndex businesses={this.props.businesses} fetchBusinesses={this.props.fetchBusinesses}/>
            </div>
        )
    }
}

export default Search;