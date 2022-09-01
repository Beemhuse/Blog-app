import React, { useState, useEffect } from "react";
import {
  Drawer,
  Button,
  List,
  ListItem,
  Typography,
  // Stack,
} from "@mui/material";
// import { useAuth } from "../../context/auth";
import { Link, useNavigate } from "react-router-dom";


const drawerWidth = 300;
// const profileManager = new ProfileManager();

export default function Dashboard() {
  const [openDrawer, setOpenDrawer] = useState(false);
  // const [value, setValue] = useState([]);
//   const { currentUser, logout } = useAuth();

  // const navigate = useNavigate();

//   useEffect(() => {
//     profileManager
//       .getProfile(currentUser)
//       .then((data) => {
//         setValue(data);
//       })
//       .catch((e) => {
//         setValue({});
//         console.log(e);
//       });
//   }, [currentUser]);
//   const handleLogout = async () => {
//     await logout()
//       .then(() => {
//         navigate("/");
//       })
//       .catch((e) => {
//         console.log(e);
//       });
//   };

// const profileImage = value.image;

  return (
    <>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        sx={{
          flexShrink: 2,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            display: { sm: "none", md: "block", xs: "none" },
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
               <List component="nav">
          <ListItem
            disablePadding
            sx={{
              flexDirection: "column",
              alignItems: "flex-start",
              paddingLeft: "10px ",
            }}
          >
            <Typography style={{ fontSize: "20px", fontWeight: "700" }}>
              create Post
            </Typography>
            <Typography style={{ fontSize: "15px", fontWeight: "500" }}>
              View Posts
            </Typography>
            <Typography style={{ fontSize: "15px", fontWeight: "700" }}>
              {/* {value.phoneNumber} */}
            </Typography>
          </ListItem>
        </List>

        <List>
          <ListItem
            sx={{
              flexDirection: "column",
              alignItems: "flex-start",
              padding: "0px ",
            }}
          >
            <Link to="restaurants" style={{ textDecoration: "none" }}>
              <Button sx={{ width: "100%" }}>create Posts</Button>
            </Link>
            <Link to="direction" style={{ textDecoration: "none" }}>
              <Button sx={{ color: "black" }}>View Posts</Button>
            </Link>
            <Button sx={{ color: "black" }}>Log Out</Button>
            {/* <Button onClick={() => handleLogout()} sx={{ color: "black" }}>
              Log out
            </Button> */}
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}
