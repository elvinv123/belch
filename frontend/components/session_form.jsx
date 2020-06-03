import React from "react";
import { Link } from "react-router-dom";

class SessionForm extends React.Component {
    constructor(props) {
        super(props);

            this.state = {
            email: "",
            password: "",
            }
            
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoLogin = this.demoLogin.bind(this);
    }

    handleChange(type) {
        return (e) => this.setState({ [type]: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state);
    }

    demoLogin(e) {
        this.setState({ email: "demouser@demo.com", password: "demouser"})
        this.props.processForm(this.state);
    }

    render() {
        const { email, password } = this.state;

        return (
            <>
                <div className="session-page-header"></div>
                <div className="session-maincontent">
                    <img className="signup_img_1" src={window.signup_img_1} />
                    <div className="form-container">
                        <div className="signup-text">
                            <h2>Sign in to Belch</h2>
                            <p className="login-link-header">New to Belch? <Link to="/signup">Sign up</Link></p>
                            <p className="privacy">By continuing, you agree to Belch's <a href="https://terms.yelp.com/tos/en_us/20200101_en_us/">Terms of Service</a> and
                            ackknowledge Belch's <a href="https://terms.yelp.com/privacy/en_us/20200101_en_us/">Privacy Policy</a>
                            </p>
                        </div>
                        <form onSubmit={this.handleSubmit}>
                            <input
                                type="text"
                                value={email}
                                placeholder="Email"
                                className="email-field"
                                onChange={this.handleChange("email")}
                            />
                            <input
                                type="password"
                                value={password}
                                placeholder="Password"
                                className="password-field"
                                onChange={this.handleChange("password")}
                            />
                            <button type="submit" className="session-button" >Sign In</button>
                            <p className="demo-button"><button type="submit" className="session-button" onClick={this.demoLogin}> Demo User</button></p>
                            <p className="login-link">New to Belch? <Link to="/signup">Sign up</Link></p>
                        </form>
                    </div>
                </div>
                <div className="session-footer"></div>
            </>
        );
    }
}

export default SessionForm;
