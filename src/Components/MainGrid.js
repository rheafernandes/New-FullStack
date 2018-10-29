import React, { Component } from 'react';
import ProfileCard from '../Components/ProfileCard'
import FriendCards from '../Components/FriendCards';


export default class MainGrid extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-3 text-center profile-info">
                        <h5>PROFILE INFORMATION</h5>
                        <ProfileCard userInfo={this.props.userInfo}/>

                    </div>
                    <div className="col-sm-7 text-center friend-list">
                        {
                            this.props.dispChange === false ?
                            <h5>FRIENDS</h5>
                            :<h5>RESULTS</h5>
                        }
                        <div className="d-flex">
                        {
                            this.props.dispChange === false ?
                            this.props.friendList.map(friend=><FriendCards friendName={friend.name}/>)
                            :this.props.friendList.map(searched=><FriendCards friendName={searched.name}/>)
                        }
                        </div>

                    </div>
                    <div className="col-sm-2 text-center">
                    <h5>RECOMMENDATION</h5>
                    </div>
                </div>
            </div>
        );

    }
}