import React, { useState } from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { useContext } from 'react';
import { GoogleAuthProvider } from 'firebase/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaEyeSlash, FaEye } from "react-icons/fa";




const Signin = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    const { logIn } = useContext(AuthContext)
    const { providerLogin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider()
    const [passerror, setPassError] = useState('');
    const [success, setSuccess] = useState(false);
    const [open, setOpen] = useState(false);
    const toggle = () => {
        setOpen(!open)
    }
    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(res => {
                const user = res.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        setSuccess(false)
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        logIn(email, password)
            .then(res => {
                const user = res.user;
                console.log(user)
                setSuccess(true)
                form.reset()
                navigate(from,{replace: true})
            })
            .catch(e => {
                const emsg = e.message;
                setPassError(emsg)
                console.error(e)
            })

    }
    return (
        <div className=''>
            <Navbar></Navbar>
            <div className="hero min-h-screen bg-base-200">
                <form onSubmit={handleSubmit} className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" name='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label flex justify-between">
                                    <span className="label-text">Password</span>
                                    {
                                        (open === false) ? <FaEyeSlash onClick={toggle}></FaEyeSlash> : <FaEye onClick={toggle}></FaEye>
                                    }
                                </label>
                                <input  type={(open === false) ? 'password' : 'text'} name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <p className='text-red-400'>{passerror}</p>
                            {
                                success && <p className='text-success'>Login Successfully.</p>
                            }
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                                <button onClick={handleGoogleSignIn} className='btn btn-primary my-3'>google</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signin;