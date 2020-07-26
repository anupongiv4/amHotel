import React from 'react';
import Roomcard from './Roomcard';
import Title from './Title';

export default function RoomList(props) {
    return (
        <div className="roomlist">
            <Title title="Your rooms" />
            <Roomcard rooms={props.rooms} />
        </div>
    )
}
