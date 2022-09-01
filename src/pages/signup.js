import React, {useState} from 'react'
import {Grid,Card, CardHeader, CardContent, Alert, TextField, Button, Stack, Typography} from "@mui/material"
import {auth, provider} from "../config/firebase-config"
import {signInWithPopup} from "firebase/auth"
import {useAuth} from "../context/auth"


export default function Signup() {
    const { register } = useAuth()
    // const [data, setState] = useState({
    //     email: "",
    //     password: "",
    //     passwordConfirm: ""
    //   })
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
      const [isSubmit, setIsSubmit] = useState(false)
      const [error, setError] = useState("")
    
    const signInWithGoogle =()=>{
    signInWithPopup(auth, provider).then((result)=>{
        localStorage.setItem("isAuth", true)
    })
}
//   console.log(data)

//   function handleForm(e) {
//     const { name, value } = e.target;
//     setState({...data,[name]: value})
//   }

  const handleSubmit = async (e)=> {
    e.preventDefault()
setError("")
    try {
await register(email, password)
    }
    catch (err){
        setError(err.message);
    }
}
  return (
   <>
   <Grid item md={12}>
    <form onSubmit={handleSubmit}>

   
          <TextField label="email" name="email" variant="outlined" onChange={ (e) => setEmail (e.target.value)  } />
          <TextField label="password" name="password" type="password" variant="outlined" onChange={ (e) => setPassword (e.target.value) } />
          <TextField label="Password Confirmation" name="passwordConfirm" type="password" variant="outlined" onChange={ (e) => setPasswordConfirm (e.target.value) } />
          {error && <Alert severity="error" variant="filled" >{error}</Alert>}
          <Button onClick={handleSubmit}>Sign UP</Button>
   
    </form>
<Stack>

    <Typography>Sign In With Google</Typography>
    <Button onClick={signInWithGoogle}>Sign In With Google</Button>
</Stack>
   </Grid>
   </>
    )
}
