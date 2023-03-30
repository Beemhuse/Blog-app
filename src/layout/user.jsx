import React, {useEffect,} from "react";
import UserDrawerAppBar from "../components/userNavbar";
import {
  Grid,CircularProgress, Box, Typography
} from "@mui/material/";
import {Outlet} from "react-router-dom"
import { useNavigate} from "react-router-dom"
import PermanentDrawerLeft from './components/sidebar'
import {useAuth} from "../context/auth"
import { useDispatch, useSelector } from 'react-redux';
import {signin, selectUser} from "../redux/reducers/user"
const drawerWidth = 150
const theme = {
  palette: {
    primary: {
      main: "#3849aa",
      text:'#ffffff'
    },
    secondary: {
      main: "#7ce761",
    },
  },
  typography: {
    fontFamily: [
      "Nunito",
      "Quicksand",
      "Montserrat",
      "sans-serif",
      "Arial",
      "Roboto",
      "Poppins",
    ].join(","),
  },
};


// const drawerWidth = 150;


export default function UserLayout() {
  // const [open, setOpen] = React.useState(false);
  // const [loading, setLoading] = useState(false)
 
  // const [user, setUser] = React.useState('');
  const navigate = useNavigate()
  const {currentUser} = useAuth()
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  let authToken = sessionStorage.getItem('Auth Token')
  useEffect(()=>{
    if(authToken != null){
      console.log('mounted', authToken, user)
      navigate("/signin")
    }
  }, [authToken, user])

//   useEffect(()=>{
// setUser(currentUser.email)
// console.log(user)
//   }, [])


useEffect(()=>{
  if (currentUser){
    dispatch(
      signin({
        email: currentUser.email,
        uid: currentUser.uid,
        displayName: currentUser.displayName,
        photoUrl: currentUser.photoURL,
      })
    )
  }
  else{

  }
})


  return (
    <>
    {
      currentUser?(
        <>
      <UserDrawerAppBar drawerWidth={drawerWidth} theme={theme} />
      <PermanentDrawerLeft drawerWidth={drawerWidth} theme={theme} />

      <Grid
        item
        md={12}
        sx={{
          // mt: { xs: "70px", sm: "0px", md: "70px" },
          width: { md: `calc(100% - ${drawerWidth}px)`, sm: "100%" },
          minHeight: "100vh",
          ml: { md: `${drawerWidth}px`, sm: "none" },
        }}
      >
        <Typography>Welcome {currentUser.email}</Typography>
        <Outlet />
      </Grid>
        </>

      ):(
<>
<Box>
        <CircularProgress variant="indeterminate" justifyContent='center' sx={{width:'fit-content', margin:'auto'}} />
        </Box>
</>
      )
    }
    </>
  );
}
