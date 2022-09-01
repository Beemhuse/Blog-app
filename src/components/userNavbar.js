import * as React from 'react';
import PropTypes from 'prop-types';
import {Box, Drawer,Typography,ListItemButton,List,Toolbar, Button,AppBar,  Stack } from '@mui/material';
import { useAuth } from '../context/auth';
import {Link} from "react-router-dom"
// import useChangeRoute from '../hooks/useChangeRoute';

const drawerWidth = 240;
const navItems = ['Future Resume', 'Home', 'Resume Template', "Pricing"];
const theme = {
  palette: {
    primary: {
      main: "#ff5c00",
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
      'Poppins',

    ].join(',')
  }
}


function UserDrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { user } = useAuth()

  // const {loading} = useChangeRoute()

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Stack width="100%" justifyContent="space-between" alignItems='center' direction={"column"} sx={{}}>
        <Link to="/">
        <Typography textDecoration="none"  color={"primary"} sx={{ fontFamily: 'Quicksand', fontSize: '20px',cursor:"pointer" }}>Future Resume</Typography>
        </Link>
        <List sx={{ fontSize: '14px', fontFamily: 'Quicksand', color: '#1D1D1D', opacity: '0.7', ":hover": { opacity: '1' }, display: 'flex', flexDirection: 'column', alignItems: 'left' }}>
          <Link to="/" >
          <ListItemButton>Home</ListItemButton>
          </Link>
          <Link to="/resume" >
            <ListItemButton>Template</ListItemButton>
          </Link>
        </List>

        {
          user
            ? <Box>
              <Link to="/" >
                <Button disableElevation sx={{ borderRadius: "20px", fontSize: '14px', ":hover": { backgroundColor: theme.palette.primary.main }, textTransform: 'none' }} variant="contained">Go to Editor</Button>
              </Link>
            </Box>
            : <Stack spacing={2} alignItems='left'>

              <Link to="/signup" >
              <Button disableElevation sx={{ borderRadius: "20px", fontSize: '14px', ":hover": { backgroundColor: theme.palette.primary.main }, textTransform: 'none', }} variant="contained">Register</Button>
                </Link>
              <Link to="/login" >
              <Button disableElevation sx={{ borderRadius: "20px", fontSize: '12px', backgroundColor: 'none', border: '1px solid black', ":hover": { backgroundColor: 'none' }, textTransform: 'none', width: '80px', color: 'black' }}  >Log in</Button>
                </Link>
            </Stack>
        }

      </Stack>

    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: { md: 'flex', sm: 'block' } }}>
      <AppBar elevation={0} sx={{ backgroundColor: 'white' }} component="nav" position='fixed'>
        <Toolbar sx={{display:'flex', justifyContent:'space-between'}}>
        <Link to="/">
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1, color: theme.palette.primary.main, display: { sm: 'block', md: 'block' } }}
          >
            My Blog
          </Typography>
          </Link>
          <Button
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, marginLeft: 'auto', color: 'black', fontSize: '20px', display: { sm: 'none' } }}
          >
            {/* <AiOutlineMenu /> */}
          </Button>
          <Box >
            <Stack width="100%" justifyContent="space-between" alignItems='center' direction={"row"}>
              <List sx={{ display: 'flex', fontSize: '14px', fontFamily: 'Quicksand', color: '#1D1D1D', opacity: '0.7', ":hover": { opacity: '1' }, marginRight: '100px' }}>
                <Link to="/" >
                <ListItemButton>Home</ListItemButton>
                </Link>
                <Link to="/resume" >
                  <ListItemButton>Template</ListItemButton>
                </Link>
              </List>
              <Link to="/user/post" >
                <Button disableElevation sx={{ borderRadius: "20px", fontSize: '14px', ":hover": { backgroundColor: theme.palette.primary.main }, textTransform: 'none' }} variant="contained">Go to Editor</Button>
              </Link>
              <Link to="/" >
                <Button disableElevation sx={{ borderRadius: "20px", fontSize: '14px', ":hover": { backgroundColor: theme.palette.primary.main }, textTransform: 'none', width: '100px' }} variant="contained">Logout</Button>
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
          sx={{ flexGrow: 1, color: theme.palette.primary.main, display: { xs: 'none', sm: 'block', md: 'block' } }}
        >
          Future Resume
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
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
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
