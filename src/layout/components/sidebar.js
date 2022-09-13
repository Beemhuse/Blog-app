import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import {Avatar,Toolbar} from '@mui/material';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link } from "react-router-dom";
import ImageAvatar from './avatar';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';

// const drawerWidth = 150;
const sideBar = [{text:"Profile", to:'profile'}, {text:"Edit Profile", to:'profile'}, {text:"Send Post", to:'post'}, {text:"Drafts", to:"profile"}];

export default function PermanentDrawerLeft(props) {

  const drawerWidth = props.drawerWidth
  const theme = props.theme
  return (
    <Box
      sx={{
        display: "flex",
        marginTop: "70px",
      }}
    >
      <CssBaseline />
      {/* <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
      </AppBar> */}
      <Drawer
        sx={{
          display:{sm:'none', md:'block', xs:'none'},
          width: drawerWidth,
          // flexShrink: 0,
          "& .MuiDrawer-paper": {
            backgroundColor: theme.palette.primary.main,
            width: drawerWidth,
            boxSizing: "border-box",
            color: theme.palette.primary.text,
            padding: "10px",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        {/* <Toolbar /> */}
        <ImageAvatar height ="90px" width="100px" /> 
               {/* <Avatar sx={{width:'100px', height:'90px'}}width={200}/> */}
        <h2 sx={{textAlign:'center', padding:'10px'}}>Dashboard</h2>
        <Divider />
        <List sx={{}}>
          {sideBar.map((item, index) => (
            <ListItem key={item.text} disablePadding>
              <Link to={item.to} style={{textDecoration:'none', color:theme.palette.primary.text}}>
                <ListItemButton>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["All posts", "Trash", "Spam"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
