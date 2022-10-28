import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';

const FAQ = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Ask now!</h1>
                    <p className="py-6">This is some common ques of our learners</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                            <div className="collapse-title text-xl font-medium">
                                Is Hablu Learner courses available for free?
                            </div>
                            <div className="collapse-content">
                                <p>No. But we have some courses that are specially free for specific students </p>
                            </div>
                        </div>
                        <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                            <div className="collapse-title text-xl font-medium">
                                Duration of all courses?
                            </div>
                            <div className="collapse-content">
                                <p>It depends on the course content. Our data entry courses are the lowest duration Courses</p>
                            </div>
                        </div>
                        <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                            <div className="collapse-title text-xl font-medium">
                                Is Hablu Learner certificate has value in job market?
                            </div>
                            <div className="collapse-content">
                                <p>As we are reknown to all and our instructors are professional so you it's yes! </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default FAQ;