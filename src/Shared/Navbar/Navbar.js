import { FaAlignRight, FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import { useState } from 'react';
import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import logo from '../../assests/images/HL BLACK.png';



const Navbar = () => {
    const [darkToggle, setDarkToggle] = React.useState(false)
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('https://hablu-learner-server.vercel.app/course-category')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div className={` ${darkToggle && 'dark'}`}>
            <div className="navbar bg-base-200  shadow-sm dark:bg-slate-400"  id="theme">
                <div className="navbar-start">
                    <div className="dropdown sm:hidden  md:hidden lg:hidden">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/home'>Home</Link></li>
                            <li tabIndex={0}>
                                <Link to='/'>
                                    Courses
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                </Link>
                                <ul className="p-2 bg-base-100">
                                    {
                                        categories.map(category => <li key={category.id}><Link to={`/category/${category.id}`}>{category.name}</Link> </li>)
                                    }
                                </ul>
                            </li>
                            <li><Link to='/FAQ'>FAQ</Link></li>
                            <li><Link to='/blog'>Blog</Link></li>
                        </ul>
                    </div>
                    <div className="flex-none hidden md:block lg:block">
                        <ul className="menu menu-horizontal p-0">
                            <li><Link to='/home'>Home</Link></li>
                            <li tabIndex={0}>
                                <Link to='/'>
                                    Courses
                                    <svg className="fill-current " xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                </Link>
                                <ul className="p-2 bg-base-100">
                                    {
                                        categories.map(category => <li key={category.id}><Link to={`/category/${category.id}`}>{category.name}</Link> </li>)
                                    }
                                </ul>
                            </li>
                            <li><Link to='/FAQ'>FAQ</Link></li>
                            <li><Link to='/blog'>Blog</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-center justify-center">
                    <img className="h-20" src={logo} alt="" />
                    <Link className="btn btn-ghost normal-case text-xl" to='/'>Hablu Learner</Link>
                </div>
                <div className="navbar-end">
                    <div className="flex-none">
                        <ul className="menu menu-horizontal p-0">
                            <li className="invisible sm:visible md:visible lg:visible"><label className="swap swap-rotate">

                                <input type="checkbox" />

                                <svg onClick={() => setDarkToggle(!darkToggle)} className="swap-on fill-current w-8 h-8 moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                                <svg onClick={() => setDarkToggle(false)} className="swap-off fill-current w-8 h-8 sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                            </label></li>
                            <li className="invisible sm:visible md:visible lg:visible">
                                {
                                    user ? <span>{user.displayName}</span> : <Link to='/register'>Register</Link>

                                }
                            </li>

                            <li>
                                {
                                    user ?
                                        <div className="dropdown dropdown-end">
                                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                                <div className="w-10 rounded-full">
                                                    {
                                                        user.photoURL ?
                                                            <div className="tooltip" data-tip={user.displayName}><img src={user.photoURL} /></div>
                                                            :
                                                            <div className="tooltip" data-tip={user.displayName}><FaUserCircle className="text-3xl"></FaUserCircle></div>
                                                    }
                                                </div>
                                            </label>
                                            <ul tabIndex={0} className="mt-5 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                                                <li>
                                                    <Link to='/profile' className="justify-between">
                                                        Profile
                                                    </Link>
                                                </li>
                                                <li><Link>Settings</Link></li>
                                                <li><Link onClick={handleLogOut}>Logout</Link></li>
                                                <li className="sm:hidden md:hidden lg:hidden"><div className="form-control">
                                                    <label className="label cursor-pointer">
                                                        <span onClick={() => setDarkToggle(false)} className="label-text">Day</span>
                                                        <input onClick={() => setDarkToggle(!darkToggle)} type="checkbox" className="toggle" />
                                                        <span className="label-text">Night</span>
                                                    </label>
                                                </div></li>
                                            </ul>
                                        </div>
                                        :
                                        <Link to='/signIn'>SignIn</Link>
                                }
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;