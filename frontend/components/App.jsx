import React from "react";
import GreetingContainer from "./greeting_container";
import LoginFormContainer from "./login_form_container";
import SignupFormContainer from "./signup_form_container";
import BusinessShowContainer from "./business_show_container"
import { Route } from "react-router-dom";
import { AuthRoute } from "../util/route_util";
import ReviewFormContainer from "./review_form_container"

const App = (props) => (
    <div>
        <GreetingContainer/>
        <Route exact path="/businesses/:businessId" component={BusinessShowContainer} />
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
        <Route exact path="/businesses/:businessId/review" component={ReviewFormContainer} />
    </div>
);

export default App;
