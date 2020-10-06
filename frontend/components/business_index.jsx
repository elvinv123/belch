import React from 'react';
import { Link } from "react-router-dom"
import HotNewBusiness from './hot_new_businesses';

class BusinessIndex extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            category: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.category == "") {
            this.props.history.push(`/businesses/search/food`);
        } else {
            this.props.history.push(`/businesses/search/${this.state.category}`);
        }
    }

    handleChange(type) {
        return (e) => this.setState({ [type]: e.target.value });
    }

    componentDidMount(){
        this.props.fetchBusinesses();
    }

    hotNewList() {

        if (!this.props.businesses) return null;
        return (
            <ul>
                {
                    Object.values(this.props.businesses).slice(0,3).map(business =>
                        <HotNewBusiness key={business.id }business = {business} />
                    )
                }
            </ul>
        )
    }

    logged_in() {
        if (this.props.currentUser) {
            return (
                <p><button className="splash-logout-btn" onClick={() => this.props.logout()}>Logout</button></p>
            )
        } else {
            return (
                <div className="splash-logout">
                    <Link to="/login"><button className="splash-login-btn">Log in</button></Link>
                    <Link to="/signup"><button className="splash-signup-btn">Sign Up</button></Link>
                </div>
            )
        }
    }

    render(){
        if (!this.props.businesses) return null;
        const { category } = this.state;
        return(
            <div className="splash-page">
            <div className="splash-header">
                    {this.logged_in()}
                    <img className="splash-page-logo" src={window.logo_img_1} />
                    <form className="search-bar" onSubmit={this.handleSubmit}>
                        <input type="text"
                            value={category}
                            placeholder="Find tacos, bars, pizza"
                            onChange={this.handleChange("category")}
                        />
                        <button type="submit"><img className="magnefying_glass" src={window.search} /></button>
                    </form>
            </div>
            <div className="splash-main-content">
                <h2>Belch New York</h2>
                <section className="hot-new">
                    <h3>Hot & New Businesses</h3>
                    {this.hotNewList()}
                </section>
                <div className="browse-by-category">
                </div>
            </div>
            <div className="footer">
                    <section className="socials">
                        <a href="https://linkedin.com/in/elvin-valette-5b2945a5"><img className="linkedin" src={window.linkedin} /></a>
                        <a href="https://github.com/elvinv123"><img className="github" src={window.github} /></a>
                        <a href="https://angel.co/u/elvin-valette"><img className="angellist" src={window.angellist} /></a>
                        <a href="https://elvinv123.github.io"><img className="portfolio" src={window.portfolio} /></a>
                    </section>
                <img className="footer_img_1" src={window.footer_img_1} />
            </div>
            </div>
        )
    }
}

export default BusinessIndex;