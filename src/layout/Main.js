import { Container } from 'postcss';
import React from 'react';
import { Outlet } from 'react-router-dom';
import LeftNav from '../Shared/LeftSideNav/LeftNav';
import Navbar from '../Shared/Navbar/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div class="grid grid-flow-col gap-3">
                <div class="bg-blue-100 col-span-3"><LeftNav></LeftNav></div>
                <div class="bg-red-100 col-span-9"><Outlet></Outlet></div>
            </div>
        </div>
    );
};

export default Main;