import React from 'react';
import {
    Switch,
    Route,
} from "react-router-dom";

import App from "src/views/App";
import {Dashboard} from "../layouts";

function AppRoutes() {
    return (
        <Switch>
            <Route
                path="/dashboard"
                // key={key}
                component={Dashboard}
            />
            <Route
                path="/"
                component={App}
            />
        </Switch>
    );
}

export default AppRoutes;
