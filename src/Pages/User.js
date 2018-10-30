import React, { Component, Fragment } from 'react';
import Navbar from '../Components/Navbar';
import MainGrid from '../Components/MainGrid';
import axios from 'axios';


export default class User extends Component {
  constructor() {
    super();
    this.state = {
      user: "",
      friends: [],
      searchValue: "",
      searchedUsers: "",
      dispChange: false
    }
  }
  handledeleteUser(e) {
    e.preventDefault();
    axios.delete(`http://localhost:3001//${this.state.user}`)
      .then(res => {
        console.log('Deleted User from server');
      }).catch(err => {
        console.error('There was a problem deleting the board. ERR:', err);
      });
  }
  handleChangeDisp(e) {
    e.preventDefault();
    this.setState({
      dispChange: !this.state.dispChange
    })
  }
  handleChangedNewEntry(e) {
    this.setState({ searchValue: e.target.value });
    console.log(this.state.searchValue);
  }
  handleSearchUser(e) {
    e.preventDefault();
    axios.get('http://localhost:3001/users')
      .then(res =>
        this.setState({
          searchedUsers: res.data,
        })
      ).catch(err => {
        console.log("Error retreiving Info");
      });
    //The below 4 lines are just for testing and are not needed once api is built
    // console.log("All users",this.state.users);
    // const searchedList = this.state.users.filter(user => user.name === searchedValue);
    // this.setState({
    //     searchedUsers: searchedList
    // });
  }
  componentDidMount() {
    axios.get('http://localhost:3001/users/maddy123')
      .then(res =>
        this.setState({
          user: res.data,
          friends: res.data.friends
        })
      ).catch(err => {
        console.log("Error retreiving Info");
      });

  }

  render() {
    return (
      <Fragment>
        <Navbar handleChangedNewEntry={this.handleChangedNewEntry.bind(this)} handleSearchUser={this.handleSearchUser.bind(this)} handleChangeDisp={this.handleChangeDisp.bind(this)} handleDeleteUser={this.handledeleteUser.bind(this)} />
        {
          this.state.user ?
            <MainGrid userInfo={this.state.user} friendList={this.state.friends} dispChange={this.state.dispChange} searchedUsers={this.state.searchedUsers} />
            : "Please wait till your page loads"
        }

      </Fragment>

    );
  }
}