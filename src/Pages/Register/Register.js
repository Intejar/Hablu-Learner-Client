import { GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import Navbar from '../../Shared/Navbar/Navbar';

const Register = () => {
    const { providerLogin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider()
    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(res => {
                const user = res.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className='flex justify-center'>
                <div>
                    <h1>this is register</h1>

                    <button onClick={handleGoogleSignIn} className='btn btn-primary'>google</button>
                </div>
            </div>
        </div>
    );
};

export default Register;