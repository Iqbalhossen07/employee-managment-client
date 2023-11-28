// import { NavLink } from "react-router-dom";
// import './navbar.css'
// import { useContext } from "react";
// import { AuthContext } from "../../AuthProvider/AuthProvider";
// import auth from "../../Firebase/Firebase.config";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// // import logo from "../../assets/logo.webp";


// const Navbar = () => {

  

//   const {user,logOut } = useContext(AuthContext)
  
 

//   const logOutButton = ()=>{


//     logOut(auth)
//     .then(()=>{
       
//       toast.info("Logout Successfully");

//     })
//     .catch(error=>{
      
//       toast.error(error.message);
//     })
//   }
//     const links =  
//   <div className="flex items-start justify-center gap-2 text-base flex-col  lg:flex-row ">
//   <NavLink to="/"><li>Home</li></NavLink>
//   <NavLink to="/registration"><li>Register</li></NavLink>
 
 


  



//   </div>
   
//     return (
//         <div className="navbar bg-[#54e2d2]">
//   <div className="navbar-start">
//     <div className="dropdown">
//       <label tabIndex={0} className="btn btn-ghost lg:hidden">
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
//       </label>
//       <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2  bg-[#54e2d2] rounded-box w-52">
//       {links}
//       </ul>
//     </div>
//    {/* <img className="w-12" src="https://i.ibb.co/mHqWn6h/image.png" alt="" /> */}
//    {/* https://i.ibb.co/vw3TYpp/image.png */}
//    <p className="font-medium">Employee Management</p>
//   </div>
//   <div className="navbar-center hidden lg:flex">
//     <ul className="menu menu-horizontal px-1">
//       {links}
//     </ul>
//   </div>
//   <div className="navbar-end ">
//  <div className="dropdown dropdown-end">
//  <div className="flex items-center">
 
//   {
    
//     user && user?.photoURL ? (
//     <>
//       <p>{user?.name}</p>
//       <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
//         <div className="w-10 rounded-full">
//           <img src={user.photoURL} alt="User Avatar" />
//         </div>
//       </label>
//     </>
//   ) : (
//     <p></p>
    
//   )}
 
// </div>


//       <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
//         <NavLink to="/login">
//         <li>
//         Login
//         </li>
//         </NavLink>
//         <NavLink to="/register">
//         <li>Register</li>
//         </NavLink>
//         <li onClick={logOutButton}>Logout</li>
        
//       </ul>
//  </div>
//  <ToastContainer />
//  {/* <NavLink to="/rooms"><button className="btn btn-outline mr-2">Book Now</button></NavLink> */}

//  {
  
//   user ? <button onClick={logOutButton} className="hidden  md:btn md:btn-error">Logout</button> :
//   <NavLink to="/login">
//     <button  className="btn btn-outline  ">Login</button>
    
//   </NavLink>
//  }
 
//   </div>
// </div>
//     );
// };

// export default Navbar;


import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import auth from '../../Firebase/Firebase.config';
import swal from 'sweetalert';
import { toast } from 'react-toastify';

const pages = ['Registration', 'Pricing', 'Blog' , 'Dashboard'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  const {user,logOut } = React.useContext(AuthContext)
  const isUserAuthenticated = !!user;
  
 

  const logOutButton = ()=>{


    logOut(auth)
    .then(()=>{
      swal("oops!", "Logout Successfully", "error");
      // toast.info("Logout Successfully");

    })
    .catch(error=>{
      
      toast.error(error.message);
    })
  }

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        {/* <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                component={Link}
                to={`/${page.toLowerCase()}`}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box> */}
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component=""
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
         

<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            
         <div>
         <Link to="/">  <button >Home</button></Link>
          <Link to="/register">  <button >Registration</button></Link>
          <Link to="/dashboard">  <button >Dashboard</button></Link>
         </div>
          </Box>

          {isUserAuthenticated ? (
            <>
              {/* User is authenticated, show avatar and user menu */}
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map(setting => (
                    <MenuItem
                      key={setting}
                      onClick={setting === 'Logout' ? logOutButton : handleCloseUserMenu}
                    >
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </>
          ) : (
            // User is not authenticated, show Login button
            <Link to="/login">
              <Button color="inherit">Login</Button>
            </Link>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;