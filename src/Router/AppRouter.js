import React, { Component } from 'react';
import {
    Route,
    Switch,
    BrowserRouter
} from "react-router-dom";
import Login  from '../Pages/Login';
import User from '../Pages/User';
export default class AppRouter extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Login}></Route>
                    <Route path="/User" exact component={User}></Route>

                </Switch>
            </BrowserRouter>

        );

    }
}