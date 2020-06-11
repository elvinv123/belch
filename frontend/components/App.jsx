import React from "react";
import LoginFormContainer from "./login_form_container";
import SignupFormContainer from "./signup_form_container";
import BusinessShowContainer from "./business_show_container"
import { Route, Switch } from "react-router-dom";
import { AuthRoute } from "../util/route_util";
import ReviewFormContainer from "./review_form_container"
import BusinessIndexContainer from "./business_index_container"
import SearchContainer from "./search_container"

const App = (props) => (
    <div>
        <Switch>
        <Route exact path="/" component={BusinessIndexContainer} />
        <Route exact path="/businesses/:businessId" component={BusinessShowContainer} />
        <Route exact path="/businesses/search/:query" component={SearchContainer} />
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
        <Route exact path="/businesses/:businessId/review" component={ReviewFormContainer} />
        </Switch>
        
    </div>
);

export default App;
