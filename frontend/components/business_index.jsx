import React from 'react';
import { Link, Redirect } from "react-router-dom"
import HotNewBusinesses from "./hot_new_businesses"
import HotNewBusiness from './hot_new_businesses';

class BusinessIndex extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchBusinesses();
    }

    hotNewList() {

        if (!this.props.businesses) return null;
        return (
            <ul>
                {
                    Object.values(this.props.businesses).map(business =>
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
        return(
            <div className="splash-page">
            <div className="splash-header">
                    {this.logged_in()}
                    <img className="splash-page-logo" src={window.logo_img_1} />
                    <form className="search-bar">
                        <input type="text"/>
                        <button></button>
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
                <img className="footer_img_1" src={window.footer_img_1} />
            </div>
            </div>
        )
    }
}

export default BusinessIndex;