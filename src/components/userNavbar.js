import * as React from 'react';
import PropTypes from 'prop-types';
import {Box, Drawer,Typography,ListItemButton,List,Toolbar, Button,AppBar,  Stack } from '@mui/material';
import { useAuth } from '../context/auth';
import {Link} from "react-router-dom"
import {AiOutlineMenu} from 'react-icons/ai'
import {useNavigate} from "react-router-dom"
// import useChangeRoute from '../hooks/useChangeRoute';


function UserDrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { user, logout } = useAuth()
  const [error, setError] = React.useState()
    const drawerWidth = props.drawerWidth;
    const theme = props.theme;
const navigate = useNavigate();
  // const {loading} = useChangeRoute()

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };




  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center',}} >
      <Stack width="100%" justifyContent="space-between" alignItems='center' direction={"column"} sx={{}}>
        <Link to="/">
        </Link>
        <List sx={{ fontSize: '14px', fontFamily: 'Quicksand', color: '#1D1D1D', opacity: '0.7', ":hover": { opacity: '1' }, display: 'flex', flexDirection: 'column', alignItems: 'left' }}>
          <Link to="/" >
          <ListItemButton>Home</ListItemButton>
          </Link>
          <Link to="/resume" >
            <ListItemButton>Template</ListItemButton>
          </Link>
        </List>
            <Stack spacing={2} alignItems='left'>
              <Link to="/signup" >
              <Button disableElevation sx={{ borderRadius: "20px", fontSize: '14px', ":hover": { backgroundColor: theme.palette.primary.main }, textTransform: 'none', }} variant="contained">Register</Button>
                </Link>
              <Button disableElevation onClick={logout} sx={{ borderRadius: "20px", fontSize: '12px', backgroundColor: 'none', border: '1px solid black', ":hover": { backgroundColor: 'none' }, textTransform: 'none', width: '80px', color: 'black' }}  >Log out</Button>
            </Stack>
      </Stack>
    </Box>
  );


  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box>
      <AppBar
        elevation={0}
        sx={{
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.primary.text,
          // border: "solid red",
          width: {
            md: `calc(100% - ${drawerWidth}px)`,
            sm: "100%",
            xs: "100%",
          },
          ml: `${drawerWidth}px`,
        }}
        component="nav"
        position="fixed"
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems:'center' }}>
          <Link to="/">
            <Typography
              variant="h5"
              component="div"
              sx={{
                flexGrow: 1,
                color: theme.palette.primary.text,
                display: { sm: "block", md: "block" },
              }}
            >
              My Blog
            </Typography>
          </Link>
          <Button
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              // mr: 2,
              marginLeft: "auto",
              color: "primary.text",
              fontSize: "20px",
              display: { sm: "block", md:'none', xs:'block' },
            }}
          >
            <AiOutlineMenu />
          </Button>
          <Box>
            <Stack
              width="100%"
              justifyContent="space-between"
              alignItems="center"
              direction={"row"}
            >
              <List
                sx={{
                  display: "flex",
                  fontSize: "14px",
                  fontFamily: "Quicksand",
                  color: "#1D1D1D",
                  opacity: "0.7",
                  ":hover": { opacity: "1" },
                  marginRight: "100px",
                }}
              >
                {/* <Link to="/">
                  <ListItemButton>Home</ListItemButton>
                </Link>
                <Link to="/resume">
                  <ListItemButton>Template</ListItemButton>
                </Link> */}
              </List>
              <Link to="/user/post">
                <Button
                  disableElevation
                  sx={{
                    borderRadius: "20px",
                    fontSize: "14px",
                    ":hover": { backgroundColor: theme.palette.primary.main },
                    textTransform: "none",
                    display: { md: "block", sm: "none", xs: "none" },
                  }}
                  variant="contained"
                >
                  Go to Editor
                </Button>
              </Link>
              <Link to="/">
                <Button
                  disableElevation
                  sx={{
                    borderRadius: "20px",
                    fontSize: "14px",
                    ":hover": { backgroundColor: theme.palette.primary.main },
                    textTransform: "none",
                    width: "100px",
                    display: { md: "block", sm: "none", xs: "none" },
                  }}
                  variant="contained"
                >
                  Logout
                </Button>
              </Link>
            </Stack>
          </Box>
        </Toolbar>
      </AppBar>

      <Box component="nav">
        <Link to="/">
          <Typography
            variant="h5"
            component="div"
            sx={{
              flexGrow: 1,
              color: theme.palette.primary.main,
              display: { xs: "block", sm: "block", md: "block" },
            }}
          >
            {/* Future Resume */}
          </Typography>
        </Link>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          anchor="left"
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

UserDrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default UserDrawerAppBar;
