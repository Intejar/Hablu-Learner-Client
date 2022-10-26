import { toastController } from '@ionic/core';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../Shared/Navbar/Navbar';
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { AuthContext } from '../../context/AuthProvider/AuthProvider';


const Register = () => {
    const {createUser} = useContext(AuthContext)
    const [passerror, setPassError] = useState('');
    const [success, setSuccess] = useState(false);
    const [open, setOpen] = useState(false);
    const [weak , setWeak] = useState(false)
    const toggle = () => {
        setOpen(!open)
    }
    const passCheck = (event)=>{
        const pass = event.target.value;
        if(pass.length >= 6){
            setWeak(!weak)
        }
    }

    const HandleSubmit = (event) => {
        event.preventDefault()
        setSuccess(false)
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        if (password !== confirm) {
            setPassError('password does not match!')
        }
        if (!/[A-Z]/.test(password)) {
            setPassError('Please use uppercase character.');
            return;
        }

        if (!/[0-9]/.test(password)) {
            setPassError('Please use number')
            return;
        }
        createUser(email,password)
        .then(res=>{
            const user = res.user
            console.log(user)
            setSuccess(true)
            form.reset()
        })
        .catch(error =>{
            const errorMessage = error.message
            setPassError(errorMessage)
            console.error(error)
        })
        console.log(name, email, password)
    }
    return (
        <div className=''>
            <Navbar></Navbar>
            <form onSubmit={HandleSubmit} className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <p><ul className="steps steps-vertical">
                            <li className="step step-primary">Register</li>
                            <li className="step">Choose Course</li>
                            <li className="step">Purchase</li>
                            <li className="step">Develop Your Skill</li>
                        </ul></p>
                        <p className='text-red-500'>Password must contain one uppercase,one digit and 6 character long!! <progress className={`progress w-56 ${(weak === false)? 'progress-error':'progress-success'}  `} value={(weak === false)? '20':'80'} max="100"></progress></p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text">Gender</span>
                                </label>
                                <select className="select select-bordered w-full max-w-xs">
                                    <option disabled selected>Gender</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Others</option>
                                </select>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label flex justify-between">
                                    <span className="label-text">Password</span>
                                    {
                                        (open === false) ? <FaEyeSlash onClick={toggle}></FaEyeSlash> : <FaEye onClick={toggle}></FaEye>
                                    }
                                </label>
                                <input onChange={passCheck} type={(open === false) ? 'password' : 'text'} name='password' placeholder="password" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label flex justify-between">
                                    <span className="label-text">Confirm Password</span>
                                    {
                                        (open === false) ? <FaEyeSlash onClick={toggle}></FaEyeSlash> : <FaEye onClick={toggle}></FaEye>
                                    }
                                </label>
                                <input onChange={passCheck} type={(open === false) ? 'password' : 'text'} name='confirm' placeholder="confirm password" className="input input-bordered" />


                                <label className="label">
                                    <Link to='/signIn' className="label-text-alt link link-hover">Already Have An Account?</Link>
                                </label>
                            </div>
                            <p className='text-red-400'>{passerror}</p>
                            {
                                success && <p className='text-success'>User created successully.</p>
                            }
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Register;