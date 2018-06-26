import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Menubar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img src="http://placehold.it/300x60?text=Logo" width="150" height="30" alt="logo"/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            {
                                localStorage.getItem('user') &&  
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">Logout</Link>
                                </li>
                            }
                        </ul>
                    </div>
                </div>
                </nav>
            </div>
        );
    }
}
