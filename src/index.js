import React from 'react';
import ReactDOM from 'react-dom';
import {createBrowserHistory} from "history";
import {Router, Route, Switch} from "react-router";

import indexRoutes from "src/routes/index.jsx";
import './index.css';
import registerServiceWorker from './registerServiceWorker';
const hist = createBrowserHistory();

ReactDOM.render(
    <Router history={hist}>
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
