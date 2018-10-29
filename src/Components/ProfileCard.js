import React from 'react';

export default class ProfileCard extends React.Component {
    render() {
        return (
            <div className="card">
                <img className="card-img-top" src="https://articles-images.sftcdn.net/wp-content/uploads/sites/3/2016/01/wallpaper-for-facebook-profile-photo.jpg" alt="Profile Picture"></img>
                <div className="card-body text-center">
                    <h5 className="card-title">XYZ PQR</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-info">Add Friend</a><br/><br/>
                        <div className="row">
                            <div className="col-sm-6">Name</div>
                            <div className="col-sm-6">XYZ PQR</div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">Age</div>
                            <div className="col-sm-6">20</div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">Birthdate</div>
                            <div className="col-sm-6">20-10-1997</div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">Name</div>
                            <div className="col-sm-6">XYZ PQR</div>
                        </div>
                </div>
            </div>
                    );
                }
}