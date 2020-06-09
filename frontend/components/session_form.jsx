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
        debugger
        const user = Object.assign({}, this.state)
        this.props.processForm(user);
    }

    demoLogin(e) {
        // const demo = { email: "demouser@demo.com", password: "demouser"}
        this.setState(this.props.demo)
        // debugger
        // this.props.processForm(this.state).then(console.log("good"));
        // this.handleChange(this.state);
    }

    renderErrors() {
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
        const { email, password } = this.state;
        
        return (
            <>
                <div className="session-page-header">
                    <img className="logo_img_1" src={window.logo_img_1} />
                </div>
                <div className="session-maincontent">
                    <img className="signup_img_1" src={window.signup_img_1} />
                    <div className="session-form-container">
                        <div className="signup-text">
                            <h2>Sign in to Belch</h2>
                            <p className="login-link-header">New to Belch? <Link to="/signup">Sign up</Link></p>
                            <p className="privacy">By continuing, you agree to Belch's <a href="https://terms.yelp.com/tos/en_us/20200101_en_us/">Terms of Service</a> and
                            ackknowledge Belch's <a href="https://terms.yelp.com/privacy/en_us/20200101_en_us/">Privacy Policy</a>
                            </p>
                            {this.renderErrors()}
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
                            <button type="submit" className="session-button" onClick={this.props.clearErrors()}>Sign In</button>
                            <p className="demo-button"><button type="submit" className="session-button" onClick={() => this.demoLogin()}> Demo User</button></p>
                            <p className="login-link">New to Belch? <Link to="/signup">Sign up</Link></p>
                        </form>
                    </div>
                </div>
                <div className="footer">
                    <img className="footer_img_1" src={window.footer_img_1} />
                </div>
            </>
        );
    }
}

export default SessionForm;
