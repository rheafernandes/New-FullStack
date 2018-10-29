import React, { Component } from 'react';
export default class RecommendationCard extends Component {
    render() {
        return (
            <div className="card col-sm-12 mx-auto my-5 recommendation-card" >
                <img className="card-img-top" src="https://articles-images.sftcdn.net/wp-content/uploads/sites/3/2016/01/wallpaper-for-facebook-profile-photo.jpg" alt="Profile Picture"></img>
                <div className="card-body text-center">
                    <h5 className="card-title">
                        <a href="#">{this.props.friendName}</a>

                    </h5>
                    {/* <a href="#" className="btn float-button btn-danger">x</a><br /><br /> */}
                </div>
            </div>

        );
    }

}
