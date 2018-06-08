import React from 'react';
import {
    Switch,
    Route,
} from "react-router-dom";

import App from "src/views/App";

function IndexRoutes() {
    return (
        <Switch>
            <Route
                path="/"
                // key={key}
                component={App}
            />
            <Route
                path="/app"
                component={App}
            />
        </Switch>
    );
}

export default IndexRoutes;
