import React, { Component, Fragment } from 'react';
import Navbar from '../Components/Navbar';
import ProfileCard from '../Components/ProfileCard';
import MainGrid from '../Components/MainGrid';

export default class User extends Component {
  render() {
    return (
      <Fragment>
        <Navbar/>
        <MainGrid />
        {/* <ProfileCard/> */}
      </Fragment>

    );
  }
}