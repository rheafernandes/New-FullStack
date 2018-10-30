import React, { Component } from 'react';
import ProfileCard from '../Components/ProfileCard'
import FriendCards from '../Components/FriendCards';
import RecommendationCard from './RecommendationCard';


export default class MainGrid extends Component {
    render() {
        if (this.props.friendList) {

            return (
                <div className="container-fluid d-flex main-grid">
                    <div className="row d-flex">
                        <div className="col-sm-3 text-center profile-info">
                            <h5 class="info-heading text-info">PROFILE INFORMATION</h5>
                            <ProfileCard userInfo={this.props.userInfo} userId= {this.props.userId} />
                        </div>

                        <div className="col-sm-6 text-center friend-list">
                            {
                                this.props.dispChange === false ?
                                    <h5 class="info-heading">FRIENDS</h5>
                                    : <h5 class="info-heading">RESULTS</h5>
                            }
                            <div className="d-flex flex-row">

                                {
                                    this.props.dispChange === false ?
                                        this.props.friendList.map(friend => <FriendCards friendName={friend.name} />)
                                        : this.props.friendList.map(searched => <FriendCards friendName={searched.name} />)
                                }
                            </div>

                        </div>
                        <div className="col-sm-3 text-center recommendation-list">
                            <h5 className="info-heading text-info">RECOMMENDATION</h5>
                            <div className="d-flex flex-column">
                                {
                                    this.props.friendList.map(friend => <RecommendationCard friendName={friend.name} />)
                                }

                            </div>
                        </div>
                    </div>
                </div>
            );

        } else {

            return (
                <div className="container-fluid d-flex main-grid">
                    <div className="row d-flex">
                        <div className="col-sm-3 text-center profile-info">
                            <h5 class="info-heading">PROFILE INFORMATION</h5>
                            <ProfileCard userInfo={this.props.userInfo} userId= {this.props.userId} />
                        </div>

                        <div className="col-sm-6 text-center friend-list">
                            {
                                this.props.dispChange === false ?
                                    <h5 class="info-heading text-info">FRIENDS</h5>
                                    : <h5 class="info-heading text-info">RESULTS</h5>
                            }
                            <div className="d-flex flex-row">

                                {
                                    this.props.dispChange === false ?
                                        [1,2,3,4,5,6,7].map(friend => <FriendCards friendName={friend.name} />)
                                        : [1,2,3,4,5,5,6].map(searched => <FriendCards friendName={searched.name} />)
                                }
                            </div>

                        </div>
                        <div className="col-sm-3 text-center recommendation-list">
                            <h5 className="info-heading text-info">RECOMMENDATION</h5>
                            <div className="d-flex flex-column">
                                {
                                    [1,2,3,4,5,6,7].map(friend => <RecommendationCard friendName={friend.name} />)
                                }

                            </div>
                        </div>
                    </div>
                </div>
            );
        }


    }
}