import { createContext, useEffect, useState } from "react"
import auth from "../src/firebase/firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext();


const AuthProvider =({children})=>{
      const [loading, setLoading] = useState(true);
      const [user, setUser] = useState(null);


      // create user
      const createUser =(email, password)=>{
            setLoading(true)
            return createUserWithEmailAndPassword(auth, email, password)
      }

      // update user

      const updateUser =(updatedData)=>{
            setLoading(true)
            return updateProfile(auth.currentUser, updatedData)
      }
      // login user
      const logInUser =(email, password)=>{
            setLoading(true)
            return signInWithEmailAndPassword(auth, email, password)
      }

      //User logOut
       const logOutUser =()=>{
            setLoading(true)
            return signOut(auth)
      }

      //observer
      useEffect(()=>{
       const unSubscribe = onAuthStateChanged(auth, currentUser =>{
                  setUser(currentUser);
                  setLoading(false);
            });
            return()=>{
                  unSubscribe();
            }
      }, [])

      const authInfo = {
            createUser,
            logInUser,
            logOutUser,
            updateUser,
            loading,
            user,
            setUser,

      }

      return (
            <AuthContext.Provider value={authInfo}>
                  {children}
            </AuthContext.Provider>
      )
}

export default AuthProvider;