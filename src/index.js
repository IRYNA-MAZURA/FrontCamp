import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { MainLayout, FilmLayout } from "./components/Layout";

import './index.css';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={MainLayout}/>
                <Route exact path='/movie/:id' component={FilmLayout}/>
                <Route path='/:type/:value' component={MainLayout}/>
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));
