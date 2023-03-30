import React, {useState} from 'react'
import {Grid,Alert, TextField, Button, Stack, } from "@mui/material"
import {auth, provider} from "../config/firebase-config"
import {signInWithPopup} from "firebase/auth"
import { useNavigate } from "react-router";
import {useAuth} from "../context/auth"
import { useDispatch, } from "react-redux";
import { signin,} from "../redux/reducers/user";
// import {useAuth} from "../context/auth"



export default function Signin() {
const dispatch = useDispatch();
const navigate=  useNavigate()
    const { login, currentUser } = useAuth()
    const [data, setState] = useState('')
      const [error, setError] = useState("")
    
    const signInWithGoogle =()=>{
    signInWithPopup(auth, provider).then((result)=>{
        localStorage.setItem("isAuth", true)
    })
}

  function handleChange(e) {
    const { name, value } = e.target;
    console.log(data)
    setState({...data,[name]: value})
  }

  const handleSubmit = async (e)=> {
    console.log(currentUser.displayName)
    e.preventDefault()
setError("")
if (data.email && data.password){
await login(data.email, data.password)
.then(()=>{
dispatch(
  signin({
    email: currentUser.email,
    uid: currentUser.uid,
    // displayName: currentUser.displayName,
    photoUrl: currentUser.photoURL,
  })
);

  navigate('/user/dashboard')
})
.catch(e =>{
    setError(e.message)
})
.finally(()=>{

})
}
}
  return (
   <>
   <Grid item md={12} mt={5}>
    <form onSubmit={handleSubmit}>

   
          <TextField label="email" name="email" variant="outlined" onChange={ handleChange  } />
          <TextField label="password" name="password" type="password" variant="outlined" onChange={ handleChange } />
          {error && <Alert severity="error" variant="filled" >{error}</Alert>}
          <Button onClick={handleSubmit}>Sign In</Button>
    </form>
<Stack>

    {/* <Typography>Sign In With Google</Typography> */}
    <Button onClick={signInWithGoogle}>Sign In With Google</Button>
</Stack>
   </Grid>
   </>
    )
}
