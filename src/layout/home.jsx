import React from "react";
import {Container, } from "@mui/material";
// import image from "../images/Rectangle4.png";
import {Outlet} from 'react-router-dom'
import DrawerAppBar from "../components/navbar";

export default function HomeLayout() {
  return (
    <>
        <DrawerAppBar />
    <Container disableGutters maxWidth={false} sx={{border:'solid red',}}>
<Outlet />
         </Container>

    </>
  );
}