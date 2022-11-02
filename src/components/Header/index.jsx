import React from 'react';
import { AppBar, IconButton, MenuItem, Toolbar, Typography, Menu, Button } from '@mui/material';
import { List } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/slices/authSlice';

const Header = ({ handleLists, isAuth }) => {
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
            {isAuth
               ? <IconButton
                  color="inherit"
                  onClick={handleLists}>
                  <List />
               </IconButton>
               : ''}
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
               ToDo
            </Typography>
            {isAuth
               ? <div>
                  <IconButton
                     size="large"
                     aria-label="account of current user"
                     aria-controls="menu-appbar"
                     aria-haspopup="true"
                     onClick={handleMenu}
                     color="inherit">
                     <Avatar
                        alt="Avatar"
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
                     onClose={handleClose}>
                     <MenuItem onClick={handleClose}>Settings</MenuItem>
                     <MenuItem onClick={onClickLogout}>Logout</MenuItem>
                  </Menu>
               </div>
               : ''}
         </Toolbar>
      </AppBar>
   );
};

export default Header;


