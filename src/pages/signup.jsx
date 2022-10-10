import React, {useState} from 'react'
import {Grid, Alert, TextField, Button, Stack, Typography} from "@mui/material"
import {auth, provider, db} from "../config/firebase-config"
import {signInWithPopup} from "firebase/auth"
import {useAuth} from "../context/auth"
import {useNavigate} from "react-router-dom"
import { addDoc, collection } from "firebase/firestore";

export default function Signup() {
    const { register } = useAuth()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
      // const [isSubmit, setIsSubmit] = useState(false)
      const [error, setError] = useState("")
    
    const signInWithGoogle =()=>{
    signInWithPopup(auth, provider).then((result)=>{
        localStorage.setItem("isAuth", true)
    })
}

const navigate = useNavigate()
//   console.log(data)

//   function handleForm(e) {
//     const { name, value } = e.target;
//     setState({...data,[name]: value})
//   }

//   const handleSubmit = async (e)=> {
//     e.preventDefault()
// setError("")
//     if(password === passwordConfirm){

//         await register(email, password)
            

//           .then(() => {
//             navigate("/user/dashboard/post");
//           })
//           .catch((error) => {
//             setError(error.message);
//           })
//           .finally(() => {});
//     } else{
//         setError('input all Fields')
//         console.log(error)
//     }

// }

  const handleSubmit = async () => {
    if (password === passwordConfirm){

      try {
        const res = await register(email, password);
        const user = res.user;
        await addDoc(collection(db, "users"), {
          uid: user.uid,
          email: user.email,
        })
        sessionStorage.setItem('Auth Token', res._tokenResponse.refreshToken)
        
        navigate('/signin')
        return true;
      } catch (error) {
        setError (error.message)
      }
    }
    else{
      return false;
    }
  };

  return (
   <>
   <Grid container justifyContent='center'>

   <Grid item md={5} mt={5} p = {3}>
    <form onSubmit={handleSubmit}>   
    {error && <Alert severity="error" variant="filled" >{error}</Alert>}
<Stack spacing={2}>

          <TextField label="email" name="email" variant="outlined" onChange={ (e) => setEmail (e.target.value)  } />
          <TextField label="password" name="password" type="password" variant="outlined" onChange={ (e) => setPassword (e.target.value) } />
          <TextField label="Password Confirmation" name="passwordConfirm" type="password" variant="outlined" onChange={ (e) => setPasswordConfirm (e.target.value) } />
          {error && <Alert severity="error" variant="filled" >{error}</Alert>}
          <Button onClick={handleSubmit}>Sign UP</Button>
</Stack>
    </form>
<Stack>
    <Typography>Sign In With Google</Typography>
    <Button onClick={signInWithGoogle}>Sign In With Google</Button>
</Stack>
   </Grid>
   </Grid>
   </>
    )
}
