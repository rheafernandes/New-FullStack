import React,{Fragment} from 'react';

export default class RegisterPage extends React.Component{
    render(){
        return(
            <Fragment>
                <div className="bg-image">
                    <h1 className="text-center register-logo text-light">Friend-Zone</h1>
                    <div className="register-form">
                        <h3 className="text-center register-head">Register</h3>
                        <form className="text-center">
                            <input type="text" placeholder="Enter Username" className="form-control" />
                            <input type="email" placeholder="Enter Email" className="form-control" />
                            <input type="password" placeholder="Enter Password" className="form-control" />
                            <input type="submit" value="Register" className="btn" />
                        </form>
                    </div>
                </div>
            </Fragment>
        );
    }
}