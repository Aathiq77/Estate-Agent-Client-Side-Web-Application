import React from 'react';
import './AboutUs.css';
import aboutimg from '../../images/about-image.jpg';

const AboutUs = () => {
    return (
        <div className="about-us">

        {/* About Us Section */}
        <div className="about-content">

            {/* Text Section */}
            <div className="text-section">
            <h2>Transforming residential living experiences!</h2>
            <p>
                Lionel Properties (Pvt) Ltd stands as a leading property development company in Sri Lanka renowned for its luxury apartments in Colombo. 
                With a clientele exceeding 20,000 and over 450+ employees, the company has created over 500 upscale residential projects, including Colombo Apartments in central locations throughout the country. 
                Their priority is to deliver dependable solutions to today's home buyers.
            </p>
            </div>

            {/* Image Section */}
            <div className="image-section">
            <img src={aboutimg} alt="About Us" />
            </div>

        </div>

        {/* Best Choice Section */}
        <div className="best-choice">

            {/* Heading */}
            <div className="best-choice-heading">
            <h2>BEST CHOICE OF LIFETIME</h2>
            </div>

            {/* Choice Items */}
            <div className="choice-content">

            {/* Choice 1: Dream Home */}
            <div className="choice-item">
                <h3>FIND YOUR DREAM HOME</h3>
                <p>
                Lionel Properties Pvt Ltd, Sri Lanka's leading property developer, offers a variety of services to help customers find their dream home 
                in the country's most affluent locations with a team of experienced professionals.
                </p>
            </div>

            {/* Choice 2: Best Quality */}
            <div className="choice-item">
                <h3>BEST QUALITY</h3>
                <p>
                Lionel Properties (Pvt) Ltd. is known for its commitment to quality in all of its residential developments, using state-of-the-art 
                technology and ensuring the best construction quality within budget and timeline to exceed customer expectations.
                </p>
            </div>

            {/* Choice 3: Best Design */}
            <div className="choice-item">
                <h3>BEST DESIGN</h3>
                <p>
                Lionel Properties creates unique and elegant designs for their residential projects, blending colonial and Victorian architecture 
                to provide a one-of-a-kind living experience with a touch of history in every corner.
                </p>
            </div>

            </div>

        </div>

        </div>
    );
};

export default AboutUs;
