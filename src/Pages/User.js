import React, { Component, Fragment } from 'react';
import Navbar from '../Components/Navbar';
import ProfileCard from '../Components/ProfileCard'
import { Jumbotron } from '../Components/Jumbotron';

export default class User extends Component {
  render() {
    return (
      <Fragment>
        <Navbar/>
        <ProfileCard/>
      </Fragment>

    );
  }
}