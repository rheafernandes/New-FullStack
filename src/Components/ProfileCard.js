import React from 'react';
import axios from 'axios';

export default class ProfileCard extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            user:""
        }
    }

    componentDidMount(){
        axios.get('http://localhost:3001/users/maddy123')
            .then(res=> 
                this.setState(
                    {
                        user:res.data.name
                    }
                )    
            )
    }

    render() {
        return (
            <div className="card profile-card bg-dark text-light">
                <img className="card-img-top" src="https://articles-images.sftcdn.net/wp-content/uploads/sites/3/2016/01/wallpaper-for-facebook-profile-photo.jpg" alt="Profile Picture"></img>
                <div className="card-body text-center">
                    <h5 className="card-title">{this.props.userInfo.name}</h5>
                    <p className="card-text">{this.props.userInfo.description}</p>
                        {this.props.userInfo.name!==this.state.user?<div><a href="#" className="btn btn-info">Add Friend</a><br/><br/></div>:null}
                        <div className="row">
                            <div className="col-sm-6">Name</div>
                            <div className="col-sm-6">{this.props.userInfo.name}</div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">Age</div>
                            <div className="col-sm-6">{this.props.userInfo.age}</div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">Birthdate</div>
                            <div className="col-sm-6">{this.props.userInfo.birthdate}</div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">Interests</div>
                            <div className="col-sm-6">XYZ PQR</div>
                        </div>
                </div>
            </div>
                    );
                }
}