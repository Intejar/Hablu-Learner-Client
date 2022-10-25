import { Container } from 'postcss';
import React from 'react';
import { Outlet } from 'react-router-dom';
import LeftNav from '../Shared/LeftSideNav/LeftNav';
import Navbar from '../Shared/Navbar/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="grid grid-cols-12 gap-3">
                <div className="invisible sm:visible p-5 md:col-span-3 lg:col-span-3"><LeftNav></LeftNav></div>
                <div className="bg-red-100 sm:col-span-12 md:col-span-9 lg:col-span-9"><Outlet></Outlet></div>
            </div>
        </div>
    );
};

export default Main;