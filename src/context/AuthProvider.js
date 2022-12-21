import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.config'
export const AuthContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    //create user
    const createSignUp = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email,password)
    }

    // signin
    const login = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // update user
    const updateUser = (userInfo)=>{
        return updateProfile(auth.currentUser, userInfo)
    }


    // Logout
    const Logout = ()=>{
        setLoading(true)
        return signOut(auth)
    }
    // Get the currently signed user 
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            console.log('user ovserving');
            setUser(currentUser);
            setLoading(false)
        })
        return () =>{
            unsubscribe()
        }
    },[])
    const authInfo = {createSignUp, login, updateUser, Logout, user, loading}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;