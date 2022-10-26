import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';

const Checkout = ({title}) => {
    return (
        <div>
            <Navbar></Navbar>
            <h1>this is Checkout {title}</h1>

        </div>
    );
};

export default Checkout;