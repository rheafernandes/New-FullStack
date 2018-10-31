import React, { Component, Fragment } from 'react';
import Navbar from '../Components/Navbar';
import MainGrid from '../Components/MainGrid';
import { Redirect } from 'react-router-dom';
import axios from 'axios';


export default class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      friends: [],
      searchValue: "",
      searchedUsers: [],
      dispChange: false,
      recommendationDisp: false,
      levelOne: [],
      levelTwo: [],
      userDeleted: false,
      username: this.props.location.state.username
    }
  }

  handleLevelOne(e) {
    this.setState({
      recommendationDisp: false
    }
    )
    e.preventDefault()
    axios.get(`http://localhost:8080/api/v1/recommendL1/${this.props.location.state.username}/1`)
      .then(res =>
        this.setState({
          levelOne: res.data,
        })
      ).catch(err => {
        console.log("Error retreiving Info");
      });
  }
  handleLevelTwo(e) {
    e.preventDefault();
    this.setState({
      recommendationDisp: true
    }
    )
    axios.get(`http://localhost:8080/api/v1/recommendL1/${this.props.location.state.username}/2`)
      .then(res =>
        this.setState({
          levelTwo: res.data,
        })
      ).catch(err => {
        console.log("Error retreiving Info");
      });
  }

  handledeleteUser(e) {
    e.preventDefault();
    axios.delete(`http://localhost:8080/api/v1/deleteuser/${this.props.location.state.username}`)
      .then(() => {
        console.log('Deleted User from server');
        this.setState(() => ({ userDeleted: true }));
      }).catch(err => {
        console.error('There was a problem deleting the board. ERR:', err);
      });
  }
  addFriend(friendId) {
    const data = {
      username: this.props.location.state.username,
      friendId: friendId
    }
    axios.put(`http://localhost:8080/api/v1/addfriend/${this.props.location.state.username}/${friendId}`)
    .then(res =>{
      console.log("adding a friend...")
      axios.get(`http://localhost:8080/api/v1/getuserfriends/${this.props.location.state.username}`)
      .then(res=>{
        this.setState(()=>({friends:res.data}))
      })
    }

    )
    
    console.log(this.props.location.state.username + " has added " + friendId);
  }

  removeFriend(friendId) {
    axios.put(`http://localhost:8080/api/v1/deleteuserfriend/${this.props.location.state.username}/${friendId}`)
    .then(res =>{
      this.setState(()=>({user:res.data}))
    }
    ).then(axios.get(`http://localhost:8080/api/v1/getuserfriends/${this.props.location.state.username}`)
      .then(res =>
        this.setState({
          friends: res.data
        })
        ).catch(err => {
          console.log("Error retreiving Info");
        }));
    console.log(this.state.username + " removed " + friendId);
  }

  handleChangeDisp(e) {
    e.preventDefault();
    this.setState({
      dispChange: !this.state.dispChange
    })
    this.handleSearchUser()
  }
  handleChangedNewEntry(e) {
    this.setState({ searchValue: e.target.value });
  }
  handleSearchUser() {
    axios.get(`http://localhost:8080/api/v1/searchusers/${this.state.searchValue}`)
      .then(res =>
        this.setState({
          searchedUsers: res.data
        })
      ).catch(err => {
        console.log("Error retreiving Info");
      });
  }
  componentDidMount() {
    console.log('called componentDidMount()');
    axios.get(`http://localhost:8080/api/v1/getUserDetails/${this.props.location.state.username}`)
      .then(res =>
        this.setState({
          user: res.data,
        })
      ).catch(err => {
        console.log("Error retreiving Info");
      });
      axios.get(`http://localhost:8080/api/v1/getuserfriends/${this.props.location.state.username}`)
      .then(res =>
        this.setState({
          friends: res.data
        })
        ).catch(err => {
          console.log("Error retreiving Info");
        });
  }
  changeUserPage() {
    axios.get(`http://localhost:8080/api/v1/getUserDetails/${this.props.location.state.username}`)
      .then(res =>
        this.setState({
          user: res.data,
        })
      ).catch(err => {
        console.log("Error retreiving Info");
      });
      axios.get(`http://localhost:8080/api/v1/getuserfriends/${this.props.location.state.username}`)
      .then(res =>
        this.setState({
          friends: res.data
        })
        ).catch(err => {
          console.log("Error retreiving Info");
        });
  }

  render() {
    return (
      <Fragment>
        <Navbar
          handleLevelOne={this.handleLevelOne.bind(this)}
          handleLevelTwo={this.handleLevelTwo.bind(this)}
          handleChangedNewEntry={this.handleChangedNewEntry.bind(this)}
          // handleSearchUser={this.handleSearchUser.bind(this)}
          handleChangeDisp={this.handleChangeDisp.bind(this)}
          handleDeleteUser={this.handledeleteUser.bind(this)}
        />
        {
          this.state.user ?
            <MainGrid userInfo={this.state.user}
              friendList={this.state.friends}
              dispChange={this.state.dispChange}
              searchedUsers={this.state.searchedUsers}
              username={this.state.username}
              levelOne={this.state.levelOne}
              levelTwo={this.state.levelTwo}
              addFriend={this.addFriend.bind(this)}
              removeFriend={this.removeFriend.bind(this)}
              recommendationDisp={this.state.recommendationDisp}
              changeUserPage={this.changeUserPage.bind(this)}
            />
            : "Please wait till your page loads"
        }

        {(this.state.userDeleted) ? <Redirect to="/loginPage" /> : null}

      </Fragment>
    );
  }
}