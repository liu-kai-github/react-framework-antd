import React from 'react';
import {
    Switch,
    Route,
} from "react-router-dom";

// import App from "src/views/App";
import {Dashboard} from "src/layouts";
import NormalLogin from "src/views/Login";

function AppRoutes() {
    return (
        <Switch>
            <Route
                path="/dashboard"
                component={Dashboard}
            />
            <Route
                path="/"
                component={NormalLogin}
            />
        </Switch>
    );
}

export default AppRoutes;
