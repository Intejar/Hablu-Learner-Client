import { Container } from 'postcss';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import LeftNav from '../Shared/LeftSideNav/LeftNav';
import Navbar from '../Shared/Navbar/Navbar';

const Main = () => {
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <div className="">
                <div className="sm:hidden md:hidden lg:hidden">
                    <Outlet></Outlet>
                </div>
                <div className="invisible  md:visible grid grid-cols-12 lg:visible grid grid-cols-12  ">
                    <div className="p-5 md:col-span-3 lg:col-span-3 bg-gray-200 dark:bg-slate-400"><LeftNav></LeftNav></div>
                    <div className="col-span-12  md:col-span-9 lg:col-span-9 bg-slate-300 dark:bg-slate-600"><Outlet></Outlet></div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;