import React from "react";
// import pic from "../../app/assets/images/signup_illustration.png"
// import { AuthRoute } from "../util/route_util"
// import LoginFormContainer from "./login_form_container";
import { Link } from "react-router-dom";

class UserForm extends React.Component {
    constructor(props) {
        
        super(props);
  
            this.state = {
                email: "",
                password: "",
                fname: "",
                lname: "",
                zipcode: "",
                birthYear: "",
                birthMonth: "",
                birthDay: ""
            }

        
        this.handleSubmit = this.handleSubmit.bind(this);
    }

 
    
    

    handleChange(type) {
       
        return (e) => this.setState( { [type]: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state);
    }

    renderErrors() {
        if(this.props.errors)
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        const { email, password, fname, lname, zipcode, birthYear, birthMonth, birthDay } = this.state;
        this.props.clearErrors();
        const year = () =>{
            const years =[];
            for(let i =2020; i>=1900; i--){
                years.push(<option key={i} value={i}>{i}</option>)
            }
            return years;
        }

        const month = () => {
            const monthsArr = ["January", "February", "March", "April", "May", 
            "June", "July", "August", "September", "October","November","December"];
            const months = [];
            for (let i = 0; i <= 12; i++) {
                months.push(<option key={i} value={i}>{monthsArr[i]}</option>)
            }
            return months;
        }

        const day = () => {
            const days = [];
            for (let i = 1; i <= 31; i++) {
                days.push(<option key={i} value={i}>{i}</option>)
            }
            return days;
        }


        return (
            <section className="signup-page">
            <div className="session-page-header">
                    <Link to={`/`}><img className="logo_img_1" src={window.logo_img_1} /></Link>
            </div>
            <div className="session-maincontent">
                
            <img className="signup_img_1" src={window.signup_img_1} />
            <div className="form-container">
                <div className="signup-text">
                    <h2>Sign Up for Belch</h2>
                    <p>Connect with great local businesses</p>
                    <p className="privacy">By continuing, you agree to Belch's <a href="https://terms.yelp.com/tos/en_us/20200101_en_us/">Terms of Service</a> and
                ackknowledge Belch's <a href="https://terms.yelp.com/privacy/en_us/20200101_en_us/">Privacy Policy</a>
                    </p>
                </div>
                <form className="user-form" onSubmit={this.handleSubmit}>
                    
                    <input
                        className="fname-field"
                        placeholder="First Name"
                        type="text"
                        value={fname}
                        onChange={this.handleChange("fname")}
                    />
                    <input
                        placeholder="Last Name"
                        className="lname-field"
                        type="text"
                        value={lname}
                        onChange={this.handleChange("lname")}
                    />

                    <input
                        placeholder="Email"
                        className="email-field"
                        type="text"
                        value={email}
                        onChange={this.handleChange("email")}
                    />
                    <input
                        className="password-field"
                        placeholder="Password"
                        type="password"
                        value={password}
                        onChange={this.handleChange("password")}
                    />
                        <input
                            className="zipcode-field"
                            placeholder="ZIP Code"
                            type="text"
                            value={zipcode}
                            onChange={this.handleChange("zipcode")}
                        />
                            <div className="birthday-optional">
                                <p className="birthday-P" >Birthday</p><p className="optional-P">Optional</p>
                            </div>
                            
                    <div className="birthday-container">
                        <span>
                            <select name="month" placeholder="Month" className="birthMonth-field" value={birthMonth} onChange={this.handleChange("birthMonth")}>
                                <option value="" disabled defaultValue >Month</option>
                                {month()}
                            </select>
                        </span>
                        <span className="day-span">
                            <select name="day" className="birthDay-field" value={birthDay} onChange={this.handleChange("birthDay")}>
                                    <option value="" disabled defaultValue>Day</option>
                                {day()}
                            </select>
                        </span>
                        <span>
                            <select name="year" className="birthYear-field" value={birthYear} onChange={this.handleChange("birthYear")}>
                                    <option value="" disabled defaultValue>Year</option>
                                {year()}
                            </select>
                        </span>
                        </div>
                        {this.renderErrors()}
                        <button className="session-button"type="submit" onClick={this.props.clearErrors()}>Sign Up</button>
                            <p className="login-link">Already on Belch? <Link to="/login" onClick={this.props.clearErrors()}>Login</Link></p>
                </form>
                </div>
            </div>
                <div className="footer">
                    <img className="footer_img_1" src={window.footer_img_1} />
                </div>
            </section>
        );
    }
}

export default UserForm;
