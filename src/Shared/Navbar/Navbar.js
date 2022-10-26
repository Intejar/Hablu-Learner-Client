import { FaAlignRight } from "react-icons/fa";
import { useState } from 'react';
import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';




const Navbar = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/course-category')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown sm:hidden  md:hidden lg:hidden">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Home</a></li>
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
                        <li><a>FAQ</a></li>
                        <li><a>Blog</a></li>
                    </ul>
                </div>
                <div className="flex-none hidden md:block lg:block">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to='/'>Home</Link></li>
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
                        <li><a>FAQ</a></li>
                        <li><a>Blog</a></li>
                    </ul>
                </div>
            </div>
            <div className="navbar-center">
                <Link className="btn btn-ghost normal-case text-xl" to='/'>daisyUI</Link>
            </div>
            <div className="navbar-end">
                <div className="flex-none">
                    <ul className="menu menu-horizontal p-0">
                        <li><a>Register</a></li>
                        <li><a>SignIn</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;