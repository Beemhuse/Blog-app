import { createContext, useContext, useEffect, useState } from 'react'
import { auth, } from '../config/firebase-config'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged} from "firebase/auth"
// import {addDoc, collection } from "firebase/firestore";
const AuthContext = createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)



  const login= async (email, password) => {
  try {
  const res = await signInWithEmailAndPassword(auth, email, password
  );
  const user = res.user;
  sessionStorage.setItem('Auth Token', res._tokenResponse.refreshToken)
  console.log('New User ==>',user, res.tokenResponse.refreshToken)
  return user;
} catch (error) {
  return { error: error.message };
}
  }

  const logout = async() => {
 try {
 await signOut(auth)
 return true
 } catch (error) {
 return false
 }
};

  // function logout() {
  //   return signOut();
  // }
  // const register = async (email, password) => {
  //   try {
  //     const res = await createUserWithEmailAndPassword(
  //       auth,
  //       email,
  //       password
  //     );
  //     const user = res.user;
  //     await addDoc(collection(db, "users"), {
  //       uid: user.uid,
  //       email: user.email,
  //     });
  //     return true;
  //   } catch (error) {
  //     return {error: error.message}
  //   }
  // };

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
      console.log(currentUser)
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

