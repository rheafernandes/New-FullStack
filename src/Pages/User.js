import React, { Component, Fragment } from 'react';
import Navbar from '../Components/Navbar';
import ProfileCard from '../Components/ProfileCard'

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