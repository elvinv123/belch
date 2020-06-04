import React from "react";
import GreetingContainer from "./greeting_container";
import LoginFormContainer from "./login_form_container";
import SignupFormContainer from "./signup_form_container";
// import { Route } from "react-router-dom";
import { AuthRoute } from "../util/route_util";

const App = (props) => (
    <div>
        <GreetingContainer/>
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
    </div>
);

export default App;