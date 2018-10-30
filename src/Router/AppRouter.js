import React, { Component } from 'react';
import {
    Route,
    Switch,
    BrowserRouter
} from "react-router-dom";
import Login  from '../Pages/Login';
import User from '../Pages/User';
import LoginPage from '../Pages/LoginPage';
import RegisterPage from '../Pages/RegisterPage';

export default class AppRouter extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Login}></Route>
                    <Route path="/User/:id" exact component={User}></Route>
                    <Route path="/loginPage" exact component={LoginPage}></Route>
                    <Route path="/registerPage" exact component={RegisterPage}></Route>
                </Switch>
            </BrowserRouter>

        );

    }
}