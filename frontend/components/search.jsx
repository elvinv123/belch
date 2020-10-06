import React from 'react';
import SearchIndexItem from "./search_index_item"
import BusinessMap from './business_map'
import { Link, Redirect } from 'react-router-dom';
import createHistory from 'history';


class Search extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            category: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.button = this.button.bind(this);
    }


    handleSubmit(e) {
        e.preventDefault();
        if(this.state.category ==""){
           this.props.history.push(`/businesses/search/food`); 
        }else{
            this.props.history.push(`/businesses/search/${this.state.category}`);
        }
        
        window.location.reload();
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
    button(category){
        
        this.props.history.push(`/businesses/search/${category}`)
        window.location.reload();
    }

    render(){
        if (!this.props.businesses) return null;
        const { category } = this.state;

        return(
            <div className="search-page">
                <div className="search-page-header">
                    <Link to={`/`}><img className="search-page-logo" src={window.logo_img_1} /></Link>
                    <div className="search-search-bar">
                    <form onSubmit={this.handleSubmit}>
                        <input type="text"
                            value={category}
                            placeholder="Find tacos, bars, pizza"
                            onChange={this.handleChange("category")}
                        />
                        <button type="submit"><img className="magnefying_glass" src={window.search} /></button>
                    </form>
                    </div>
                    {this.logged_in()}<BusinessMap businesses={this.props.businesses} />
                </div>
                <section className="search-page-maincontent">
                    <div className="categories-buttons">
                        <section className="cat-buttons">
                            <h2>Categories</h2>
                            <button onClick={() =>this.button("bars")}>Bars</button>
                            <button onClick={() =>this.button("restaurant")}>Restaurants</button>
                            <button onClick={() =>this.button("desserts")}>Desserts</button> 
                        </section>
                             <section className="price-buttons">
                                <button className="d" onClick={() =>this.button("$")}>$</button>
                                <button className="dd"onClick={() =>this.button("$$")}>$$</button>
                                <button className="ddd"onClick={() =>this.button("$$$")}>$$$</button>
                                <button className="dddd" onClick={() =>this.button("$$$$")}>$$$$</button>
                            </section>
                    </div>
                    {this.businessItems()}
                    
                 </section>
                <div className="footer">
                    <section className="search-socials">
                        <a href="https://linkedin.com/in/elvin-valette-5b2945a5"><img className="linkedin" src={window.linkedin} /></a>
                        <a href="https://github.com/elvinv123"><img className="github" src={window.github} /></a>
                        <a href="https://angel.co/u/elvin-valette"><img className="angellist" src={window.angellist} /></a>
                        <a href="https://elvinv123.github.io"><img className="portfolio" src={window.portfolio} /></a>
                    </section>
                    <img className="search-footer_img_1" src={window.footer_img_1} />
                </div>
            </div>
        )
    }
}

export default Search;

