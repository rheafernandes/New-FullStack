import React, { Component } from 'react';
export default class FriendCards extends Component {
    render() {
        return (
            <div className="card col-sm-3 mr-5 my-5" >
                <img className="card-img-top" src="https://articles-images.sftcdn.net/wp-content/uploads/sites/3/2016/01/wallpaper-for-facebook-profile-photo.jpg" alt="Profile Picture"></img>
                <div className="card-body text-center">
                    <h5 className="card-title">
                        <a href="#">{this.props.friendName}</a>

                    </h5>
                    <a href="#" className="btn float-button btn-danger">x</a><br /><br />
                </div>
            </div>

        );
    }

}
