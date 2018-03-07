import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return(
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <a class="navbar-brand" href="#">
                    <img src="../img/logo.png" width="30" height="30" class="d-inline-block align-top" alt=""></img>
                    SMART CAMPUS
                </a>
                <div class="container-fluid">
                    <ul class="nav navbar-nav">
                        <li class="nav-item"><Link to="/"><a class="nav-link" href="#">Home</a></Link></li>
                        <li class="nav-item"><Link to="/building"><a class="nav-link" href="#">Building</a></Link></li>
                        <li class="nav-item"><Link to="/calendar"><a class="nav-link" href="#">Calendar</a></Link></li>
                    </ul>
                </div>
            </nav>
        );
    }
}
export default Header;