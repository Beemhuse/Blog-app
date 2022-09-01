import React, {useState} from 'react'
import {Drawer,Tabs, Tab, Button, List, IconButton} from "@mui/material";
// import MenuIcon from '@mui/icons-material/Menu'
import {Link} from "react-router-dom"
export default function DrawerComp() {
// const pages = ['Home', 'Restaurants', 'About Us', 'Contact Us'];
    
    const [openDrawer, setOpenDrawer] = useState(false)
  return (
    <>
    <Drawer open={openDrawer}
    onClose={()=>setOpenDrawer(false)}
    >
     <List>
     <Tabs
  orientation="vertical"
  aria-label="secondary tabs example"
  sx={{fontWeight:'700',}}
  left
>
     <Tab value="one" label="Home" href="/" />
  <Tab value="two" label="Restaurants" href="/#services"/>
  <Tab value="three" label="About Us" href="/#about"/>
  <Tab value="three" label="Contact Us" href="/#contact"/>
</Tabs>


         <Link to='/signup' style={{textDecoration:'none'}}>
          <Button variant='contained' sx={{marginLeft:'auto',  backgroundColor:'#E04500'}}>LOGIN/Signup</Button>
</Link>

    </List>
    </Drawer>
    <IconButton sx={{color:'white', marginLeft:'auto', }}onClick={()=>setOpenDrawer(!openDrawer)}>
        {/* <MenuIcon sx={{color:'black'}}/> */}
    </IconButton>
    </>
  )
}
