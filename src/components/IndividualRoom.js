import React, { Component } from 'react';
import { RoomContext } from './Context';
import StyledBanner from './StyledBanner';
import defaultImg from './images/mainbanner.jpg';
import Service from './Service';
import { Link } from 'react-router-dom';


export default class IndividualRoom extends Component {
    constructor(props) {
        super(props)
        this.state = {
            slug: this.props.match.params.slug,
            defaultImg: defaultImg
        }
    }
    static contextType = RoomContext;
    
    render() {
        let { getRoom, breakfast } = this.context
        let room = getRoom(this.state.slug);
        let roomImg = room.image.slice(1,4);

        return (
            <>
                <StyledBanner img={ room.image[0] || this.state.defaultImg } >
                    {room.name}
                </StyledBanner>
                <div className="display-img" >
                    {roomImg.map((item, index) => {
                        return <img src={item} alt="room-img" key={index} />
                    })}

                </div>
                <div className="room-info">
                    <div className="room-detail">
                        <div className="description">
                            {room.description}
                        </div>
                        <div className="description-detail">
                            <p><strong>Price: </strong>{breakfast === "true" ? room.price + 500 : room.price} baht</p>
                            <p><strong>Capacity: </strong>{room.capacity} people</p>
                            <p><strong>Size: </strong>{room.size}</p>
                            <p><strong>Breakfast: </strong>{breakfast === "true" ? "Included" : "Not included"}</p>
                        </div>
                    </div>
                    <div className="feature">
                        <h4>Features</h4>
                        <ul>
                            {room.feature.map((item, index) => <li key={index}>{item}</li>)}
                        </ul>
                    </div>
                </div>
                <div className="button-singleroom">
                    <Link to="#">
                        <button>Confirm</button>
                    </Link>
                </div>
                <Service />
            </>
        )
    }
}
