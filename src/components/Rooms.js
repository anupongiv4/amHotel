import React from 'react'
import { RoomContext } from './Context';
import Title from './Title';
import RoomFilter from './Roomfilter';
import RoomList from './RoomList';
import Banner from './Banner';
import Service from './Service';

export default function Rooms() {
    return (
        <RoomContext.Consumer>
            {value => {
                return (
                    <>
                        <Banner title="Find the room that suit you" buttonName="Home" />
                        <Title title="Search" />
                        <RoomFilter rooms={value} />
                        <RoomList rooms={value.filteredRooms}/>
                        <Service />
                    </>
                )
            }}
        </RoomContext.Consumer>
    )
}


