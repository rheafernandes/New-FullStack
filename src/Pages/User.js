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
      friends: "",
      searchValue: "",
      searchedUsers: "",
      dispChange: false,
      recommendationDisp: false,
      levelOne: [],
      levelTwo: [],
      userDeleted: false,
      userId: this.props.location.state.userId
    }
  }

  handleLevelOne(e) {
    this.setState({
      recommendationDisp: false
    }
    )
    e.preventDefault()
    axios.get(`http://localhost:3001/users/${this.props.location.state.userId}/1`)
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
    axios.get(`http://localhost:3001/users/${this.props.location.state.userId}/2`)
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
    axios.delete(`http://localhost:3001/users/${this.props.location.state.userId}`)
      .then(() => {
        console.log('Deleted User from server');
        this.setState(() => ({ userDeleted: true }));
      }).catch(err => {
        console.error('There was a problem deleting the board. ERR:', err);
      });
  }
  addFriend(friendId) {
    const data = {
      userId: this.props.location.state.userId,
      friendId: friendId
    }
    axios.put(`http://localhost:3001/users/${this.props.location.state.userId}/${friendId}`)
    .then(res =>{
      console.log("adding a friend...")
      axios.get('http://localhost:3001/users/${this.props.location.state.userId}').then(res=>{
        this.setState(()=>({friends:res.data}))
      })
    }

    )
    
    console.log(this.props.location.state.userId + " has added " + friendId);
  }

  removeFriend(friendId) {
    axios.put(`http://localhost:3001/users/${friendId}`,"some data")
    .then(res =>{
      this.setState(()=>({user:res.data}))
    }
    )
    console.log(this.state.userId + " removed " + friendId);
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
    axios.get(`http://localhost:3001/users/${this.state.searchValue}`)
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
    console.log('called componentDidMount()');
    axios.get(`http://localhost:3001/users/${this.props.location.state.userId}`)
      .then(res =>
        this.setState({
          user: res.data,
          friends: res.data.friends
        })
      ).catch(err => {
        console.log("Error retreiving Info");
      });
      // axios.get(`http://localhost:3001/users/${this.props.location.state.userId}`)
      // .then(res =>
      //   this.setState({
      //     friends: res.data.friends
      //   })
      //   ).catch(err => {
      //     console.log("Error retreiving Info");
      //   });
  }
  changeUserPage() {
    axios.get(`http://localhost:3001/users/${this.props.location.state.userId}`)
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
        <Navbar
          handleLevelOne={this.handleLevelOne.bind(this)}
          handleLevelTwo={this.handleLevelTwo.bind(this)}
          handleChangedNewEntry={this.handleChangedNewEntry.bind(this)}
          handleSearchUser={this.handleSearchUser.bind(this)}
          handleChangeDisp={this.handleChangeDisp.bind(this)}
          handleDeleteUser={this.handledeleteUser.bind(this)}
        />
        {
          this.state.user ?
            <MainGrid userInfo={this.state.user}
              friendList={this.state.friends}
              dispChange={this.state.dispChange}
              searchedUsers={this.state.searchedUsers}
              userId={this.state.userId}
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