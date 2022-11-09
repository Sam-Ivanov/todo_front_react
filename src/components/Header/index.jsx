import React, { useState } from 'react';
import { AppBar, IconButton, MenuItem, Toolbar, Typography, Menu } from '@mui/material';
import { List } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/slices/authSlice';
import SidebarDrawer from '../SidebarDrawer';

const Header = ({ isAuth }) => {
   const [anchorEl, setAnchorEl] = useState(null);
   const [isDrawerOpen, setDrawerOpen] = useState(false);
   const dispatch = useDispatch();
   const onClickLogout = () => {
      if (window.confirm('Вы действительно хотите выйти?')) {
         setAnchorEl(null);
         dispatch(logout());
         window.localStorage.removeItem('token')
      }
   }
   const handleMenu = (event) => {
      setAnchorEl(event.currentTarget);
   };
   const handleClose = () => {
      setAnchorEl(null);
   };

   return (<>
      <AppBar position='static'>
         <Toolbar >
            {isAuth &&
               <IconButton
                  color="inherit"
                  onClick={() => setDrawerOpen(true)}>
                  <List />
               </IconButton>}
            <Typography
               variant="h5"
               component="div"
               sx={{ flexGrow: 1 }}>
               ToDo
            </Typography>
            {isAuth && <div>
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
            </div>}
         </Toolbar>
      </AppBar>
      {isAuth &&
         <SidebarDrawer
            dataUser={isAuth}
            drawerOpen={isDrawerOpen}
            drawerClose={() => { setDrawerOpen(false) }} />}
   </>
   );
};

export default Header;


