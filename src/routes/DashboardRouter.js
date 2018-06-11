import React from 'react';
import {
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
// import {Dashboard} from "../layouts";
import App from "../views/App";

function DashboardRouter({match}) {
    return (
        <Switch>
            <Redirect
                from={match.url}
                to={`${match.url}/app`}
                exact
            />
            <Route
                path={`${match.url}/app`}
                component={App}
                exact
            />
            {/*<Route*/}
                {/*path="/dashboard"*/}
                {/*component={Dashboard}*/}
            {/*/>*/}
        </Switch>
    );
}

export default DashboardRouter;
