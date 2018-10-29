import React from 'react';
import ReactDOM from 'react-dom';
import 'jquery';
import 'react-popper';
import 'popper.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRouter from '../Router/AppRouter';
import '../index.css';
// import '../images/friends_bg.jpg'

ReactDOM.render(<AppRouter /> , document.getElementById('root'));

