import React, { useContext } from 'react';
import { RoomContext } from './Context';
import { Link } from 'react-router-dom';

export default function Roomcard(props) {
    const context = useContext(RoomContext);
    const { breakfast } = context;
    return (
        <>
            {props.rooms.map((item, index) => {
                return (
                    <Link to={`/rooms/${item.slug}`} key={index} className="roomcard-link" >
                        <div className="roomcard" >
                            <div className="imageCard">
                                <img src={item.image[0]} alt="room pic" />
                            </div>
                            <div className="txt">
                                <p><strong>{item.name}</strong></p>
                                <p>Price: {breakfast === "true" ? item.price + 500 : item.price} baht</p>
                                <p>Capacity: {item.capacity}</p>
                            </div>
                        </div>
                    </Link>
                )
            })}
        </>
    )
}
