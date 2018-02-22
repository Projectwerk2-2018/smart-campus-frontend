import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return(
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <ul className="nav navbar-nav">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/building">Building</Link></li>
                        <li><Link to="/schedule">Schedule</Link></li>
                    </ul>
                </div>
            </nav>
        );
    }
}
export default Header;