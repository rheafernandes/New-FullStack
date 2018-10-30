import React, { Fragment,Component } from 'react';
import Modal from './Modal';
import {NavLink} from 'react-router-dom'

export class Jumbotron extends Component {
  render() {
    return (
      <Fragment>
        <div className="jumbotron">
          <div className="container-fluid">
            <h1 className="display-4 text-center">Friend-zone</h1>
            <p className="lead text-center">Connect with people all over the world</p>
            <hr className="my-4" />
            <p className="text-center">You're ready to go in 2 Simple steps. Enjoy this virtual world we created</p>
              <div className="text-center">
                <NavLink to="/registerPage" className="btn btn-secondary btn-lg mr-2" role="button">Sign Up</NavLink>
                <NavLink to="/loginPage" className="btn btn-info btn-lg" role="button">Sign In</NavLink>
              </div>
            </div>          
          </div>
         <Modal/>
        </Fragment>
    );
  }
}