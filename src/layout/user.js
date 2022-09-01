// import React from "react";
import {Container, } from "@mui/material";
// import {Outlet} from 'react-router-dom'
import UserDrawerAppBar from "../components/userNavbar";

// export default function UserLayout() {
//   return (
//     <>
//         <UserDrawerAppBar />
//     <Container disableGutters maxWidth={false} sx={{border:'solid red',}}>
// <Outlet />
//          </Container>

//     </>
//   );
// }

import * as React from "react";
// import Box from "@mui/material/Box";
import {
// Avatar,
//   Typography,
//   TextField,
//   Stack,
//   Button,
//   Divider,
  Grid,
} from "@mui/material/";
// import UserToolBar from "../components/userAppbar";
// import BasicModal from "../owner/modal"
// import Drawer from '../components/drawer'
import {Outlet} from "react-router-dom"


const drawerWidth = 300

export default function UserLayout() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [open2, setOpen2] = React.useState(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);

  
  return (
    <>
         <UserDrawerAppBar />
     <Container disableGutters maxWidth={false} sx={{border:'solid red',}}>
      <Grid
        item
        md={12}
        sx={{
          mt: {xs:"70px", sm:'0px', md:'0px'},
          width:{md: `calc(100% - ${drawerWidth}px)`, sm:'100%'},
          ml: {md:`${drawerWidth}px`, sm:'none'},
        }}
      >
        
 <Outlet />
          </Grid>
          </Container>


        {/* <UserToolBar setOpen = {setOpen}
          open = {open}
          handleOpen ={handleOpen}
          handleClose = {handleClose}
          />
          <Drawer
          handleOpen2={handleOpen2}
          
          />
<Outlet />          
<BasicModal open={open2} handleClose={handleClose2} /> */}
        
    </>
  );
}
