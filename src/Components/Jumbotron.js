import React, { Component } from 'react';


export class Jumbotron extends Component {
  render() {
    return (
      <div className="jumbotron">
        <div className="container-fluid">
          <h1 className="display-4 text-center">Friend-zone</h1>
          <p className="lead text-center">Connect with people all over the world</p>
          <hr className="my-4" />
          <p className="text-center">You're ready to go in 2 Simple steps. Enjoy this virtual world we created</p>
          <div className="text-center">
            <a className="btn btn-secondary btn-lg mr-2" href="#" role="button">Sign Up</a>
            <a className="btn btn-info btn-lg" href="#" role="button">Sign In</a>
          </div>
        </div>
      </div>
    );
  }
}

