import React from 'react'

export default function Tiltle(props) {
    return (
        <div className="title">
            {props.title}
            <div className="title-dash"></div>
        </div>
    )
}
