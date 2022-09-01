import { createContext, useContext, useEffect, useState } from 'react'
import { auth } from '../config/firebase-config'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged} from "firebase/auth"

const AuthContext = createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)

  function login(email, password) {
    console.log('Login====>', email + password)
    return signInWithEmailAndPassword(auth, email, password)

  }

  function logout() {
    return signOut();
  }
  function register(email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  function getUser() {
    return auth.currentUser
  }

  function isAdmin() {
    return currentUser.getIdTokenResult()
    .then((idTokenResult) => {
      if (!!idTokenResult.claims.admin) {
        return true
      } else {
        return false
      }
    })
  }

  // function isEditor() {

  // }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setCurrentUser(currentUser)
      setLoading(false)
    })
    return () =>{
      unsubscribe()
    
    } 
    }, [])

  const value = {
    currentUser,
    getUser,
    register,
    logout,
    login,
    isAdmin
  }

  return (
    <AuthContext.Provider value={value}>
      { !loading && children }
    </AuthContext.Provider>
  )

}