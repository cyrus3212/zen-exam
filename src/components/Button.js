import React from 'react';

const Button = ({ type }) => {
    return (
        <button className={`btn ${type}`}>Close Shipment</button>
    );
}

export default Button;
