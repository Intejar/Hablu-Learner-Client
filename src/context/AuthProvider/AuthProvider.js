import React from 'react';
import { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';
import { unstable_batchedUpdates } from 'react-dom';

export const AuthContext = createContext();

const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);



    const providerLogin = (provider)=>{
        setLoading(true)
        return signInWithPopup(auth, provider);
    }
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logIn = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const updateUserProfile = (profile) =>{
        return updateProfile(auth.currentUser, profile)
    }

    const logOut = ()=>{
        setLoading(true)
        return signOut(auth);
    }
    const emailCheck = () =>{
        return sendEmailVerification(auth.currentUser)
    }
    const passwordReset = (email) =>{
        return sendPasswordResetEmail(auth , email)
    }
    useEffect(() =>{
        const unsubcribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            setLoading(false)
        })
        return ()=>{
            unsubcribe();
        }
    },[])

    const authInfo = {user ,loading, providerLogin, logOut, createUser, logIn, updateUserProfile, emailCheck, passwordReset}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;