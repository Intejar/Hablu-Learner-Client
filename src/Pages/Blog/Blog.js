import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';


const Blog = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Ques and Answer</h1>
                        <p className="py-6">Ques of programming hero.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                                <div className="collapse-title text-xl font-medium">
                                    what is cors?
                                </div>
                                <div className="collapse-content">
                                    <p> cors is very important to use because for security purpose it won't allow us to use api in client site. if we install cors and useCors then in client site api will work </p>
                                </div>
                            </div>
                            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                                <div className="collapse-title text-xl font-medium">
                                    Why are you using firebase? What other options do you have to implement authentication?
                                </div>
                                <div className="collapse-content">
                                    <p>Firebase is very easy to handle. It resourses help us to authenticate a person with gmail. As Firebase is collapse with google so we can easily identify user authenticity. There are many alternative of firebase like-MongoDB.
                                        Oracle Database.
                                        Amazon Redshift.
                                        DataStax Enterprise.
                                        Redis Enterprise Cloud.
                                        Cloudera Enterprise Data Hub.</p>
                                </div>
                            </div>
                            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                                <div className="collapse-title text-xl font-medium">
                                    How does the private route work?
                                </div>
                                <div className="collapse-content">
                                    <p>When we cover a route inside a private route then private route don't allow to see that children route without impliment the system of private route. Basically if we st login system in private route and in children route we have some info. If we want to see that info then we have to login first as like our system is checking rather user logged in or not.</p>
                                </div>
                            </div>
                            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                                <div className="collapse-title text-xl font-medium">
                                    What is Node? How does Node work?                                </div>
                                <div className="collapse-content">
                                    <p>It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;