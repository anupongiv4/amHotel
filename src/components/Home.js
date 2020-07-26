import React from 'react';
import './Home.css';
import Recommend from './Recommend';
import Banner from './Banner';
import Title from './Title';
import About from './About';
import Service from './Service';

export default function Home() {
    return (
        <>
            <Banner title="Feel like your home" buttonName="Search" />
            {/* Display room */}
            <Title title="Recommend" />
            <Recommend />
            <About />
            {/* Sevice */}
            <Service />
        </>
    )
}