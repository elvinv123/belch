import React from "react";

class SessionForm extends React.Component {
    constructor(props) {
        // debugger
        super(props);
        if (props.formType === 'login'){
                this.state = {
                email: "",
                password: "",
                }
            }
            else{
                this.state = {
                email: "",
                password: "",
                fname: "",
                lname: "",
                zipcode: "",
            }

        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(type) {
        return (e) => this.setState({ [type]: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state);
    }

    render() {
        let { email, password, fname, lname, zipcode } = this.state;
        const signup = () =>{
            if(this.props.formType === 'signup'){
               return( <>
                    <label>First Name:</label>
                    <input
                        type="text"
                        value={fname}
                        onChange={this.handleChange("fname")}
                    />
                    <label>Last Name:</label>
                    <input
                        type="text"
                        value={lname}
                        onChange={this.handleChange("lname")}
                    />
                    <label>Zipcode:</label>
                    <input
                        type="text"
                            value={zipcode}
                        onChange={this.handleChange("zipcode")}
                    />
                </>);
            }
        };
        return (
            <form onSubmit={this.handleSubmit}>
                {this.props.formType === "signup" ? <h1>Sign Up</h1> : <h1>Log In</h1>}
                <label>email:</label>
                <input
                    type="text"
                    value={email}
                    onChange={this.handleChange("email")}
                />
                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={this.handleChange("password")}
                />
                {signup()}
                <button type="submit">{this.props.formType}</button>
            </form>
        );
    }
}

export default SessionForm;
