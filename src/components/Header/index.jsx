import React from 'react';
import { AppBar, IconButton, MenuItem, Toolbar, Typography, Menu, Button } from '@mui/material';
import { List, Login } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
import styles from './Header.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/slices/authSlice';

const Header = ({ handleLists }) => {
   const isAuth = useSelector(state => state.auth.data);
   const dispatch = useDispatch();
   
   const onClickLogout = () => {
      if (window.confirm('Вы действительно хотите выйти?')) {
         dispatch(logout());
         window.localStorage.removeItem('token')
      }
   }

   const [anchorEl, setAnchorEl] = React.useState(null);

   const handleMenu = (event) => {
      setAnchorEl(event.currentTarget);
   };

   const handleClose = () => {
      setAnchorEl(null);
   };

   return (
      <AppBar position='static'>
         <Toolbar >
            <IconButton
               color="inherit"
               onClick={handleLists}
            >
               {/* <Menu /> */}
               {/* <ArrowBackIos/> */}
               <List />

            </IconButton>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
               ToDo
            </Typography>
            {/* <IconButton
               size="large"
               aria-label="account of current user"
               aria-controls="menu-appbar"
               aria-haspopup="true"
               color="inherit"
            >
               <AccountCircle />
            </IconButton> */}
            {isAuth ? (
               <div>
                  <IconButton
                     size="large"
                     aria-label="account of current user"
                     aria-controls="menu-appbar"
                     aria-haspopup="true"
                     onClick={handleMenu}
                     color="inherit"
                  >
                     {/* <AccountCircle /> */}
                     <Avatar alt="Avatar"
                        src=""
                        sx={{ width: 45, height: 45 }} />
                  </IconButton>
                  <Menu
                     id="menu-appbar"
                     anchorEl={anchorEl}
                     anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                     }}
                     keepMounted
                     transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                     }}
                     open={Boolean(anchorEl)}
                     onClose={handleClose}
                  >
                     <MenuItem onClick={handleClose}>Settings</MenuItem>
                     <MenuItem onClick={onClickLogout}>Logout</MenuItem>
                  </Menu>
               </div>
            ) : (
               <>
                  {/* <Link to="/login">
                     <IconButton>
                        <Login />
                     </IconButton>
                  </Link> */}

                  {/* <Link to='/login'>
                     <Button classes={{ root: styles.btn }}>Sign In</Button>
                  </Link>
                  <Link to='/register'>
                     <Button classes={{ root: styles.btn }}>Sign Up</Button>
                  </Link> */}
               </>
            )}

         </Toolbar>
      </AppBar>
   );
};

export default Header;


