import React from 'react';
import Roomcard from './Roomcard';
import { RoomContext } from './Context';

export default function Recommend() {
    return (
        <RoomContext.Consumer>
            {value => {
                return (
                    <div className="recommend">
                        <div className="roomCard-container">
                            <Roomcard rooms={value.recommend} />
                        </div>
                    </div>
                )
            }}
        </RoomContext.Consumer>
    )
}
