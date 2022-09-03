import * as React from "react";
import Box from "@mui/material/Box";
import {
Avatar,
  Typography,
  TextField,
  Stack,
  Button,
  Divider,
  Grid,
  CircularProgress,
} from "@mui/material/";
import { useNavigate } from "react-router-dom";
// import ProfileManager from "../../services/user";
// import image from "../images/dummy-profile-pic-300x300-1.png";

import { useAuth } from "../../context/auth"
// import UserToolBar from "../components/userAppbar";
// import BasicModal from "../owner/modal"
// import Drawer from '../components/drawer'

// import UserToolBar from "../components/userAppbar";
// import BasicModal from "../owner/modal"
// const drawerWidth = 300;
// const profileManager = new ProfileManager()

export default function UserProfile() {
  const [values, setValues] = React.useState({})
  const [file, setFile] = React.useState("")
  const [file1, setFile1] = React.useState("")
  const [loading, setLoading] = React.useState(false)
  const navigate = useNavigate()
  // const [value, setValue] = React.useState([]);
//   const { currentUser } = useAuth();

//   React.useEffect(() => {
//     profileManager
//       .getProfile(currentUser)
//       .catch((e) => {
//         // setValue({});
//         console.log(e);
//       });
//   }, [currentUser]);


  const handleChange = (e) => {
    const {name, value} = e.target
    setValues({...values, [name]:value})
  }
  const handleFile = (event) => {
    setFile(event.target.files[0])
    setFile1(URL.createObjectURL(event.target.files[0]))

  }
//   const handleSubmit = async(e) => {
//     e.preventDefault()
//     setLoading(true);
//     setValues({...values})
    
//     await profileManager.editProfile(values, file).then(() => {
//       navigate("/user/dashboard/restaurants")
//       window.location.reload(true)
//     }).catch(error => {
//       console.log(error);
//     })
//     setLoading(false)
//   }
//   const profileImage = file1

  return (
    <>
      <Grid
        item
        md={12}
        sx={{
              }}
      >
      <form 
    //   onSubmit={handleSubmit}
      >
        <Grid container sx={{

        }} px={5} py={8}>
          <Box
            component="div" 
            // px={5}
            sx={{ flexGrow: 1, bgcolor: "background.default" }}
          >
            <Stack direction='row' justifyContent='space-between' alignItems='center' fullWidth sx={{}}>
            <Typography variant='h5' sx={{ color: "black", fontWeight:'700' }}>Edit Profile</Typography>
            <Avatar sx={{display: {md:'none', sm:'block'}, width:'100px', height:'100px'}} />

            </Stack>
            <Divider color='#E07014' sx={{ color: "", mt: "20px", border:"2px solid #E07014"  }} />
          </Box>
          <Grid item md={12} mt={12}>
            <Grid container spacing={2} p={2} alignItems={"center"}>
              <Grid item md={4} xs={12} sx={{}}>
              
<Button
                  component="label"
                  sx={{  background:'#E07014', color:'white', '&:hover': {
                    backgroundColor: '#E07014',
                    color: '#white',
                } }}
                >
                  Upload File
                  <input type="file" onChange={handleFile} hidden required/>
                </Button>
              </Grid>
              <Grid item md={4} xs={12}>
                <Stack spacing={2} fullWidth>
                  <Typography>First Name</Typography>
                  <TextField name="fullname" onChange={handleChange} label="First Name" variant="outlined" color='warning' />
                  <Typography>State</Typography>
                  <TextField name="state" onChange={handleChange} label="State" variant="outlined" color='warning'/>
                  <Typography>Email Address</Typography>
                  <TextField label="Email Address" variant="outlined" color='warning' />
                </Stack>
              </Grid>
              <Grid item md={4} xs={12}>
                <Stack spacing={2}>
                  <Typography>Last Name</Typography>
                  <TextField label="Last Name" color='warning' variant="outlined" />
                  <Typography>LGA</Typography>
                  <TextField name="lga" onChange={handleChange} label="LGA" color='warning' variant="outlined" />
                  <Typography>Phone Number</Typography>
                  <TextField name="phoneNumber" onChange={handleChange} label="Phone Number" variant="outlined" />
                  
                </Stack>
              </Grid>
            </Grid>
          </Grid>
          {
            loading ? <Stack sx={{padding: "0 50%"}}><CircularProgress color="primary" /></Stack> : <Button
            type="submit"
            sx={{
              margin: "auto",
              width: "15vw",
              backgroundColor: "#E07014",
              color: "white" , '&:hover': {
                backgroundColor: '#E07014',
                color: '#white',
            }
            }}
          >
            Update
          </Button>
          }
          
        </Grid>
        {/* <BasicModal open={open}/> */}
        </form>
      </Grid>

    </>
  );
}
