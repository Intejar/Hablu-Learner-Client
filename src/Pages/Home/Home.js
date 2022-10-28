import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import py from '../../assests/images/PYTHON.png';
import c from '../../assests/images/C++.png';
import html from '../../assests/images/JS HTML CSS.png';
import r from '../../assests/images/REACT.png';
import hack from '../../assests/images/ETHICAL HACKING.png';
import excel from '../../assests/images/EXCEL.png';
import vfx from '../../assests/images/VFX ADVANCE.png';
import cover from '../../assests/images/COVER.png';
import certificate from '../../assests/images/CERTIFICATE.png'

const Home = () => {
    return (
        <div className=''>
            <Navbar></Navbar>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${cover})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello Learner</h1>
                        <p className="mb-5">Hablu Learner provides you some excellent courses on IT. Learn and achieve your goal!!</p>
                        <button className="btn btn-primary"><Link to='/signIn'>Get Started</Link></button>
                    </div>
                </div>
            </div>
            <div className="hero min-h-screen bg-slate-200 dark:bg-slate-500">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={certificate} className="max-w-sm rounded-lg shadow-2xl h-50 w-50" />
                    <div>
                        <h1 className="text-5xl font-bold">Get Certified!</h1>
                        <p className="py-6"> Our certifiacte ensure your skill</p>
                        <p><ul className="steps steps-vertical">
                            <li className="step step-primary">Register</li>
                            <li className="step step-primary">Choose Course</li>
                            <li className="step step-primary">Purchase</li>
                            <li className="step step-primary">Get Certification</li>
                        </ul></p>
                    </div>
                </div>
            </div>
            <div className="hero min-h-screen bg-slate-400">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
                        <div className="carousel-item">
                            <img src={vfx} className="h-60 w-60 rounded-box" />
                        </div>
                        <div className="carousel-item">
                            <img src={excel} className="h-60 w-60 rounded-box" />
                        </div>
                        <div className="carousel-item">
                            <img src={hack} className="h-60 w-60 rounded-box" />
                        </div>
                        <div className="carousel-item">
                            <img src={py} className="h-60 w-60 rounded-box" />
                        </div>
                        <div className="carousel-item">
                            <img src={c} className="h-60 w-60 rounded-box" />
                        </div>
                        <div className="carousel-item">
                            <img src={html} className="h-60 w-60 rounded-box" />
                        </div>
                        <div className="carousel-item">
                            <img src={r} className="h-60 w-60 rounded-box" />
                        </div>
                    </div>
                    <div>
                        <h1 className="text-5xl font-bold">Our Courses!</h1>
                        <p className="py-6">We have 6 category of courses that is trending right now!</p>
                        <div><button className="btn btn-primary"><Link to='/'>See Courses</Link></button></div>
                        <div className="mt-5 stats stats-vertical lg:stats-horizontal shadow">

                            <div className="stat">
                                <div className="stat-title">Downloads</div>
                                <div className="stat-value">31K</div>
                                <div className="stat-desc">Jan 1st - Feb 1st</div>
                            </div>

                            <div className="stat">
                                <div className="stat-title">New Users</div>
                                <div className="stat-value">4,200</div>
                                <div className="stat-desc">↗︎ 400 (22%)</div>
                            </div>

                            <div className="stat">
                                <div className="stat-title">New Registers</div>
                                <div className="stat-value">1,200</div>
                                <div className="stat-desc">↘︎ 90 (14%)</div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="hero min-h-screen bg-slate-600">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
                        <div className="carousel-item">
                            <img src={r} className="rounded-box h-60 w-60" />
                        </div>
                        <div className="carousel-item">
                            <img src={hack} className="rounded-box h-60 w-60" />
                        </div>
                        <div className="carousel-item">
                            <img src={excel} className="rounded-box h-60 w-60" />
                        </div>
                        <div className="carousel-item">
                            <img src={vfx} className="rounded-box h-60 w-60" />
                        </div>
                    </div>
                    <div className="indicator">
                        <span className="indicator-item badge badge-primary">new</span>
                        <div>
                            <h1 className="text-5xl font-bold">Hablu Offer!</h1>
                            <p className="py-6">Get upto 50% off on this courses!!</p>
                            <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
                                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                                    <span className="countdown font-mono text-5xl">
                                        <span style={{ "--value": 15 }}></span>
                                    </span>
                                    days
                                </div>
                                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                                    <span className="countdown font-mono text-5xl">
                                        <span style={{ "--value": 10 }}></span>
                                    </span>
                                    hours
                                </div>
                                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                                    <span className="countdown font-mono text-5xl">
                                        <span style={{ "--value": 24 }}></span>
                                    </span>
                                    min
                                </div>
                                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                                    <span className="countdown font-mono text-5xl">
                                        <span style={{ "--value": 54 }}></span>
                                    </span>
                                    sec
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;