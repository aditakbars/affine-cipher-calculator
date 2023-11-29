import { Link } from 'react-router-dom';

import React from 'react';

const About = () => {
    return (
        <div className="container">
            <h1>About This App</h1>
                <div className='img-container'> 
                    <img src='https://source.unsplash.com/200x200?minion' alt='prof'/>
                </div>
            <p>
                This Affine Cipher Calculator is created by Aditya Akbar Subakti as a remedial project for the mid-semester exam
            in the Cryptography course. It is a simple web-based tool to encrypt and decrypt messages using the Affine Cipher algorithm.
            </p>
            <Link to="/"><h4 className='link'> Click here to go back to the Calculator </h4></Link>
        </div>
    );
};

export default About;
