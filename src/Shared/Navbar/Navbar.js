import React from 'react';
import { Link } from 'react-router-dom';
import { FaAlignRight } from "react-icons/fa";
import { useState } from 'react';




const Navbar = () => {
    let [open, setOpen] = useState(false)

    return (
        <div>
            <nav className="p-5 bg-white shadow md:flex md:items-center md:justify-between">
                <div className='flex justify-between items-center'>
                    <span className='text-2xl cursor-pointer'>
                        <Link to='/'>Hablu Learner</Link>
                    </span>
                    <span onClick={()=>setOpen(!open)} className='text-3xl cursor-pointer mx-2 md:hidden block'>
                        <ion-icon name={open ? 'close':'menu'}></ion-icon>
                    </span>
                </div>
                <ul className={`md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500 ${open ? 'top-20 opacity-100':'top[-490]'} md:opacity-100 opacity-0`}>
                    <li className='mx-4 my-6 md:my-0'>
                        <Link to='/'>HOME</Link>
                    </li>
                    <li className='mx-4 my-6 md:my-0'>
                        <Link>COURSES</Link>
                    </li>
                    <li className='mx-4 my-6 md:my-0'>
                        <Link>BLOG</Link>
                    </li>
                    <li className='mx-4 my-6 md:my-0'>
                        <Link>FAQ</Link>
                    </li>
                    <li className='mx-4 my-6 md:my-0'>
                        <Link>SIGNIN</Link>
                    </li>
                </ul>


                {/* <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://placeimg.com/80/80/people" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div> */}
            </nav>
        </div>
    );
};

export default Navbar;