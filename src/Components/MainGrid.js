import React, { Component } from 'react';
import ProfileCard from '../Components/ProfileCard'
import FriendCards from '../Components/FriendCards';


export default class MainGrid extends Component {
    render() {
        return (
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-3 text-center">
                        PROFILE INFORMATION
                        <ProfileCard/>

                    </div>
                    <div class="col-sm-7 text-center">
                        FRIENDS
                        {
                            [1,2,3,4,5,6].map(i=><FriendCards/>)
                        }
                        
                    </div>
                    <div class="col-sm-2 text-center">
                        RECOMMENDATIONS
                    </div>
                </div>
            </div>
        );

    }
}