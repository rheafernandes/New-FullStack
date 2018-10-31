import React, { Component, Fragment } from 'react';
import Navbar from '../Components/Navbar';
import MainGrid from '../Components/MainGrid';
import { Redirect } from 'react-router-dom';
import axios from 'axios';


export default class Friends extends Component {
  constructor() {
    super();
    this.state = {
      user: "",
      friends: [1,2,3,4,5,6,7],
      searchValue: "",
      searchedUsers: "",
      dispChange: false,
      recommendationDisp:false,
      levelOne:[],
      levelTwo:[],
      userDeleted: false
    }
  }
  handleLevelOne(e){
    this.setState({
      recommendationDisp:false
    }
    )
    e.preventDefault()
    axios.get(`http://localhost:3001/users/${this.props.match.params.id}`)
    .then(res =>
      this.setState({
        levelOne: res.data,
      })
    ).catch(err => {
      console.log("Error retreiving Info");
    });
  }
  handleLevelTwo(e){
    e.preventDefault();
    this.setState({
      recommendationDisp:true
    }
    )
    axios.get(`http://localhost:3001/users/${this.props.match.params.id}`)
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
    axios.delete(`http://localhost:3001/users/${this.props.match.params.id}`)
      .then(res => {
        console.log('Deleted User from server');
        this.setState(() => ({ userDeleted: true }));
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
    console.log('called componentDidMount()');
    axios.get(`http://localhost:3001/users/${this.props.match.params.id}`)
      .then(res =>
        this.setState({
          user: res.data,
          friends: res.data.friends
        })
      ).catch(err => {
        console.log("Error retreiving Info");
      });
  }
  changeUserPage(){
    axios.get(`http://localhost:3001/users/${this.props.match.params.id}`)
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
    console.log('this.props', this.props.match.params.id);
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
            userId={this.props.match.params.id} 
            levelOne={this.state.levelOne} 
            levelTwo={this.state.levelTwo}
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