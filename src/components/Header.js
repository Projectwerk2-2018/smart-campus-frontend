import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="/">
                    <img src={require("../img/logo.png")} width="28" height="30" className="d-inline-block align-top" alt=""></img>
                    <span className="heading">SMART CAMPUS</span>
                </a>
                <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
                    <ul className="nav navbar-nav">
                        <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/building">Building</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/devices">Devices</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/calendar">Calendar</Link></li>
                    </ul>
                </div>
                <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item my-2 my-lg-0 login">
                        <form className="form-inline">
                            <div className="form-group mb-2">
                                <label className="login_label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required="required"></input>
                            </div>
                            <div className="form-group mx-sm-3 mb-2">
                                <label className="login_label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" required="required"></input>
                            </div>
                            <button type="submit" className="btn btn-light mb-2">Login</button>
                        </form>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
export default Header;