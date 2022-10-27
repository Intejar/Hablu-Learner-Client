import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';

const Checkout = () => {
    const name = localStorage.getItem('name');
    const price = localStorage.getItem('price');
    return (
        <div>
            <Navbar></Navbar>
            <h1>this is Checkout {name} </h1>
            <h1>this is Checkout {price} </h1>

        </div>
    );
};

export default Checkout;