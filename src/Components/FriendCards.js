import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';

export default class FriendCards extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            showFriend:false
        }
    }

    showFriendData(e){
        e.preventDefault();
        // console.log();
        this.setState({
            showFriend:true
        });
    }
    
    render() {
        console.log("Friend id:",this.props.friendId);
        return (
            <div className="card col-sm-3 mx-2 my-5 friend-card" >
                <img className="card-img-top" src="https://articles-images.sftcdn.net/wp-content/uploads/sites/3/2016/01/wallpaper-for-facebook-profile-photo.jpg" alt="Profile Picture"></img>
                <div className="card-body text-center">
                    <h5 className="card-title">
                        <a href="#" onClick={this.showFriendData.bind(this)}>{this.props.friendName}</a>
                        {(this.state.showFriend) ? <Redirect to={{
                            pathname:"/User",
                            state:{
                                userId:this.props.friendId
                        }}}/>:null}
                    </h5>
                    <a href="#" className="btn float-button btn-danger">x</a><br /><br />
                </div>
            </div>

        );
    }

}
