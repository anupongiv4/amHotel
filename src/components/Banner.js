import React from 'react';
import { Link } from 'react-router-dom';

export default function (props) {
    return (
        <div className="banner">
            {props.title}
            <Link to="/rooms">
                <button>{props.buttonName}</button>
            </Link>
        </div>
    )
}
