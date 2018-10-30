import React,{Fragment} from 'react';
import {NavLink} from 'react-router-dom';

export default class LoginPage extends React.Component{
    render(){
        return(
            <Fragment>
                <div className="container-fluid bg-image">
                    <h1 className="text-center login-logo text-light">Friend-Zone</h1>
                    <div className="login-form">
                        <h3 className="text-center login-head">Login</h3>
                        <form className="text-center">
                            <input type="text" placeholder="Enter Username" className="form-control" />
                            <NavLink to="/User"><input type="submit" value="Login" className="btn btn-info" /></NavLink>
                        </form>
                    </div>
                </div>
            </Fragment>
        );
    }
}