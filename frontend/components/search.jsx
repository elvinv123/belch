import React from 'react';
import SearchIndexItem from "./search_index_item"
import BusinessMap from './business_map'
import { Link } from 'react-router-dom';


class Search extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            category: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(e) {
        e.preventDefault();

        this.props.history.push(`/businesses/search/${this.state.category}`);
    }

    handleChange(type) {
        return (e) => this.setState({ [type]: e.target.value });
    }

    componentDidMount(){
        this.props.fetchBusinesses({ category: this.props.match.params.query});
    }

    businessItems() {
        if (!this.props.businesses) return null;
        return (
            <ul className="search-results">
                {
                    Object.values(this.props.businesses).map(business =>
                        <SearchIndexItem key={business.id} business={business} />
                    )
                }
            </ul>
        )
    }

    logged_in() {
        if (this.props.currentUser) {
            return (
                <p><button className="search-logout" onClick={this.props.logout}>Logout</button></p>
            )
        } else {
            return (
                <div className="search-login-signup">
                    <Link to="/login"><button className="search-login-btn">Log in</button></Link>
                    <Link to="/signup"><button className="search-signup-btn">Sign Up</button></Link>
                </div>
            )
        }
    }

    render(){
        if (!this.props.businesses) return null;
        const { category } = this.state;

        return(
            <div className="search-page">
                <div className="search-page-header">
                    <Link to={`/`}><img className="search-page-logo" src={window.logo_img_1} /></Link>
                    <form className="search-search-bar" onSubmit={this.handleSubmit}>
                        <input type="text"
                            value={category}
                            placeholder="Email"
                            onChange={this.handleChange("category")}
                        />
                        <button type="submit"></button>
                    </form>
                    {this.logged_in()}<BusinessMap businesses={this.props.businesses} />
                </div>
                <section className="search-page-maincontent">
                    {this.businessItems()}
                    
                 </section>
                <div className="footer">
                    <img className="footer_img_1" src={window.footer_img_1} />
                </div>
            </div>
        )
    }
}

export default Search;

