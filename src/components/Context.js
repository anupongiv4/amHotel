import React, { Component } from 'react'
import { roomtype } from '../data';

const RoomContext = React.createContext();

class RoomProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rooms: [],
            double: [],
            twin: [],
            filteredRooms: [],
            recommend: [],
            type: 'all',
            roomtype: '',
            capacity: 2,
            breakfast: "false",
            price: 0,
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.getRoom = this.getRoom.bind(this);
    }

    componentDidMount() {
        let rooms = this.formatData(roomtype);
        let double = rooms.double;
        let twin = rooms.twin;
        let recommend = rooms.filter(item => item.recommend === true);
        let filteredRooms = rooms.slice(0, 6);

        this.setState({
            rooms: filteredRooms,
            twin,
            double,
            recommend,
            filteredRooms
        })
    }

    formatData(items) {
        let double = items[1].double.map(item => item);
        let twin = items[0].twin.map(item => item);
        let allRoom = double.concat(twin);

        return [...allRoom, double, twin]
    }

    getRoom = slug => {
        let tempRooms = this.state.rooms
        const room = tempRooms.find(item => item.slug === slug)

        return room;
    }


    handleChange(e) {
        const value = e.target.value;
        const name = e.target.name;
        console.log(`${name} = ${value}`)
        
        this.setState({
            [name]: value
        })
    }

    handleClick() {
        const { rooms, roomtype, capacity } = this.state;
        console.log(this.state);

        let tempRooms = rooms;
        let capacityInt = Number(capacity);

        if(roomtype !== 'all' && roomtype !== '') { 
            tempRooms = tempRooms.filter(item => item.type === roomtype);
        }

        if(capacityInt !== 1) {
            tempRooms = tempRooms.filter(item => item.capacity >= capacityInt);
        }

        this.setState({
            filteredRooms: tempRooms
        });
    }

    render() {
        return (
            <RoomContext.Provider value={{...this.state, handleChange: this.handleChange, getRoom: this.getRoom, handleClick: this.handleClick}} >
                {this.props.children}
            </RoomContext.Provider>
        )
    }
}

export{ RoomProvider, RoomContext };