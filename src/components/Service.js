import React from 'react';
import Title from './Title';
import { FaBusAlt, FaParking } from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi';
import { MdLocalDrink } from 'react-icons/md';

export default function Service() {
    return (
        <div className="service">
            <Title title="Our service" />
            <div className="service-container">
                <div className="service-item">
                    <FaBusAlt className="react-icons" />
                    <h2>Free bus from airport</h2>
                    <p>
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                </div>
                <div className="service-item">
                    <FaParking className="react-icons" />
                    <h2>Parking service</h2>
                    <p>
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                </div>
                <div className="service-item">
                    <FiPhoneCall className="react-icons" />
                    <h2>Call center 24 hrs</h2>
                    <p>
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                </div>
                <div className="service-item">
                    <MdLocalDrink className="react-icons" />
                    <h2>Free drinking</h2>
                    <p>
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                </div>
            </div>
        </div>
    )
}
