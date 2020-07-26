import React from 'react';
import img from './images/mainbanner.jpg';

export default function About() {
    return (
        <>
            <div className="about">
                <img src={img} alt="banner" />
                <h1>About</h1>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
        </>
    )
}
