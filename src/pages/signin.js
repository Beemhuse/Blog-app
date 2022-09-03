import React, {useState} from 'react'
import {Grid,Card, CardHeader, CardContent, Alert, TextField, Button, Stack, Typography} from "@mui/material"
import {auth, provider} from "../config/firebase-config"
import {signInWithPopup} from "firebase/auth"
import {useAuth} from "../context/auth"
import { useNavigate } from "react-router";


export default function Signin() {
const navigate=  useNavigate()
    const { login } = useAuth()
    const [data, setState] = useState('')

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // const [passwordConfirm, setPasswordConfirm] = useState('')
    //   const [isSubmit, setIsSubmit] = useState(false)
      const [error, setError] = useState("")
    
    const signInWithGoogle =()=>{
    signInWithPopup(auth, provider).then((result)=>{
        localStorage.setItem("isAuth", true)
    })
}
//   console.log(data)

  function handleChange(e) {
    const { name, value } = e.target;
    console.log(data)
    setState({...data,[name]: value})
  }

  const handleSubmit = async (e)=> {
    e.preventDefault()
setError("")
if (data.email && data.password){
await login(data.email, data.password)
.then(()=>{
navigate('/user/dashboard/post')
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
