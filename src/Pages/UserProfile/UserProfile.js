import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import Navbar from '../../Shared/Navbar/Navbar';


const UserProfile = () => {
    const {user}  = useContext(AuthContext)
    return (
        <div>
            <Navbar></Navbar>
            <div className='hero bg-base-100'>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder={user.displayName} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder={user.email} className="input input-bordered" />
                        </div>
                    
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;