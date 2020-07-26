import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegAddressBook, FaPhoneSquareAlt } from 'react-icons/fa';
import { AiTwotoneMail, AiOutlineStar } from 'react-icons/ai';

export default function () {
    return (
        <footer>
            <div className="contact">
                <Link to="/" className="home"> 
                    <p>Home</p>
                </Link>
                <Link to="/rooms/" className="room"> 
                    <p>Room</p>
                </Link>
                <p><FaRegAddressBook /> : 444 am Hotel, Samsen Road, Phra Nakhon 10200, Bangkok, Thailand.</p>
                <p><FaPhoneSquareAlt /> : +666 xxx xxx</p>
                <p><AiTwotoneMail /> : amhotel@amhotel.com</p>
            </div>
            <div className="footer-logo">
                <h2 className="am" >am</h2>
                <h2 className="hotel">Hotel</h2>
                <div>
                    <AiOutlineStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                </div>
            </div>
        </footer>
    )
}
