import React from 'react';

const Footer = () => {
    return (
        <footer style={{
            position: 'fixed',
            left: 0,
            bottom: 0,
            width: '100%',
            backgroundColor: 'black',
            color: 'white',
            textAlign: 'center',
            opacity: 0.8, // Set the opacity to low
            padding: '10px 0'
        }}>
            © 2024 Dot Cussy. All rights reserved.
        </footer>
    );
};

export default Footer;
