import React from 'react';

class BusinessIndex extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchBusinesses();
    }
    render(){
        if (!this.props.businesses) return null;
        return(
            <>
            hello
            </>
        )
    }
}

export default BusinessIndex;