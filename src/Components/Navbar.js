import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';


export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark container-fluid">
                <a className="navbar-brand text-info our-logo" href="#">Friend-Zone</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <form className="form-inline my-2 my-lg-0 ml-auto" onSubmit={this.props.handleSearchUser.bind(this)}> 
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={this.props.handleChangedNewEntry.bind(this)} />
                        <button className="btn btn-outline-info my-2 my-sm-0" type="submit" onClick={this.props.handleChangeDisp.bind(this)}>Search</button>
                    </form>
                    <ul className="navbar-nav ml-auto ">
                        <li className="nav-item">
                            <a className="nav-link text-info" href="#">Delete Account<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-info"><NavLink to="/loginPage">Logout</NavLink></a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-info" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Recommendation
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">Level 1</a>
                                <a className="dropdown-item" href="#">Level 2</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Level 3</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}