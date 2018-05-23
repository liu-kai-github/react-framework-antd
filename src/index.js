import React from 'react';
import ReactDOM from 'react-dom';

// import {createBrowserHistory} from "history";
// import {Router, Route, Switch} from "react-router";
// const hist = createBrowserHistory();

import {
    // BrowserRouter as Router,
    HashRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import indexRoutes from "src/routes/index.jsx";
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router>
        <Switch>
            {indexRoutes.map((prop, key) => {
                return (
                    <Route
                        path={prop.path}
                        key={key}
                        component={prop.component}
                    />
                );
            })}
        </Switch>
    </Router>,
    document.getElementById('root'));
registerServiceWorker();
