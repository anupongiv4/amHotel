import React, { useContext } from 'react'
import { RoomContext } from './Context';

export default function Roomfilter() {
    const context = useContext(RoomContext);
    const { handleChange, handleClick } = context;

    return (
        <section>
            <form className="formfilter">
                {/* Select type */}
                <div className="roomtype">
                    <label htmlFor="roomtype">Room type</label>
                    <select name="roomtype" id="roomtype" onChange={handleChange}>
                        <option value="all">All</option>
                        <option value="superior">Superior</option>
                        <option value="deluxe">Deluxe</option>
                        <option value="premier">Premier</option>
                    </select>
                </div>
                {/* end select type */}
                {/* Capacity */}
                <div className="capacity">
                    <label  htmlFor="capacity">Capacity</label>
                    <select name="capacity" id="capacity" onChange={handleChange}>
                        <option value="2" >2</option>
                        <option value="3" >3</option>
                        <option value="4" >4</option>
                    </select>
                </div>
                {/* end Capacity type */}
                {/* breakfast type */}
                <div className="breakfast">
                    <label htmlFor="breakfast">Breakfast</label>
                    <select name="breakfast" id="breakfast" onChange={handleChange}>
                        <option value="false" >Not included</option>
                        <option value="true" >Included</option>
                    </select>
                </div>
                {/* end breakfast type */}
            </form>
            <input type="submit" value="Confirm" className="submitInput" onClick={handleClick}/>
        </section>
    )
}
