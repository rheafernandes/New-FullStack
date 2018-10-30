import React, { Component } from 'react';
import ProfileCard from '../Components/ProfileCard'
import FriendCards from '../Components/FriendCards';
import RecommendationCard from './RecommendationCard';


export default class MainGrid extends Component {
    render() {
        return (
            <div className="container-fluid main-grid">
                <div className="row d-flex">
                    <div className="col-sm-3 text-center profile-info">
<<<<<<< HEAD
                        <h5 class="info-heading text-info">PROFILE INFORMATION</h5>
                        <ProfileCard userInfo={this.props.userInfo}/>
=======
                        <h5 class="info-heading">PROFILE INFORMATION</h5>
                        <ProfileCard userInfo={this.props.userInfo} />
>>>>>>> 6360e19451c4bc424490bfd646b234ec31690a42

                    </div>

                    <div className="col-sm-6 text-center friend-list">
                        {
                            this.props.dispChange === false ?
                            <h5 class="info-heading">FRIENDS</h5>
                            :<h5 class="info-heading">RESULTS</h5>


                        }
                        <div className="d-flex flex-row">

                            {
                                this.props.dispChange === false ?
                                this.props.friendList.map(friend => <FriendCards friendName={friend.name} />)
                                :this.props.friendList.map(searched => <FriendCards friendName={searched.name} />)
                            }
                        </div>

                    </div>
                    <div className="col-sm-3 text-center recommendation-list">
                    <h5 className="info-heading text-info">RECOMMENDATION</h5>
                    <div className="d-flex flex-column">
                        {
                            this.props.friendList.map(friend=><RecommendationCard friendName={friend.name}/>)
                        }

                        </div>
                    </div>
                </div>
            </div>
        );

    }
}