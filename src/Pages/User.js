import React, { Component, Fragment } from 'react';
import Navbar from '../Components/Navbar';
import MainGrid from '../Components/MainGrid';
import axios from 'axios';


export default class User extends Component {
  constructor() {
    super();
    this.state = {
      user:"",
      friends:[]
    }
  }
  handleChangedNewEntry(e) {
    this.setState({ newListName:e.target.value });
    console.log(this.state.newListName);
  }
  componentDidMount(){
    axios.get('http://localhost:3001/users/maddy123')
    .then(res => 
        this.setState({
          user:res.data,
          friends: res.data.friends
        })
    ).catch (err => {
      console.log("Error retreiving Info");
    });

  }

render() {
  return (
    <Fragment>
      <Navbar />
      {
              this.state.user?
              <MainGrid userInfo={this.state.user} friendList={this.state.friends} />
              :"Please wait till your page loads"
      }

    </Fragment>

  );
}
}