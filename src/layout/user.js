import React from "react";
// import {Container, } from "@mui/material";
import UserDrawerAppBar from "../components/userNavbar";
import {
  Grid,
} from "@mui/material/";
import {Outlet} from "react-router-dom"
import PermanentDrawerLeft from './components/sidebar'
import {useAuth} from "../context/auth"

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


export default function UserLayout(props) {
  const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  const [open2, setOpen2] = React.useState(false);
  // const handleOpen2 = () => setOpen2(true);
  // const handleClose2 = () => setOpen2(false);

  const {currentUser} = useAuth()
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
          // border:'solid black'
        }}
      >
        <Outlet />
      </Grid>
        </>

      ):(
<>

</>
      )
    }
      {/* <Container disableGutters> */}
      {/* </Container> */}
    </>
  );
}
