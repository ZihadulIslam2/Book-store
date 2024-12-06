import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import {  createContext, useContext, useState } from "react";
import { auth } from "../firebase/firebase.config";

const AuthContext = createContext()

export const useAuth =()=>{
    return useContext(AuthContext)
}
 const googleProvider = new GoogleAuthProvider();
// auth provider
export const AuthProvide = ({children})=>{
    const [currentUser, setCurrentUser] = useState(null)
    const [loading, SetLoading] = useState(true)

    // register a user
    const registerUser = async (email, password)=>{
        return await createUserWithEmailAndPassword(auth, email, password)
    }

    // login the user
    const logInUser = async ( email, password)=>{
        return await signInWithEmailAndPassword(auth,email,password)
    }
// sign up with google
    const signInWithGoogle = async ()=>{
        return await signInWithPopup(auth, googleProvider)

    }

    const value = {
      currentUser,
      registerUser,
      logInUser,
      signInWithGoogle,
    }
    return(
        <AuthContext.Provider value={value}>
             { children}
        </AuthContext.Provider>
    )
}