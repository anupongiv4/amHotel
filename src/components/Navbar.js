import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <>
            <div className="nav-bar">
                <div>
                    <Link to="/" className="logo-brand">
                        <h1 className="get">am</h1>
                        <h1 className="rooms">Hotel</h1>
                    </Link>
                </div>
                <div className="nav-list">
                    <ul>
                        <Link to="/" className="link">HOME</Link>
                        <Link to="/rooms/" className="link">Room</Link>
                    </ul>
                </div>

                <div className="login">
                    <a href="#" >Sign up</a>
                    <div className="line">|</div>
                    <a href="#" >Log in</a>
                </div>
            </div>
        </>
    )
}
