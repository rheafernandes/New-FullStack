import React, { Component } from 'react';
export default class FriendCards extends Component {
    render() {
        return (
            <div class="card" >
                <img class="card-img-top" src="https://articles-images.sftcdn.net/wp-content/uploads/sites/3/2016/01/wallpaper-for-facebook-profile-photo.jpg" alt="Profile Picture"></img>
                <div class="card-body text-center">
                    <h5 class="card-title">
                        <a href="#">XYZ PQR</a>

                    </h5>
                    <a href="#" class="btn btn-danger">x</a><br /><br />
                </div>
            </div>

        );
    }

}
