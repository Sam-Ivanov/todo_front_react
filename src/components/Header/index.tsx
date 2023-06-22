import { AppBar, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import { List } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import React, { useState } from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { DataUserType, logout } from '../../redux/slices/authSlice';
// import SidebarDrawer from '../SidebarDrawer';
import SidebarDrawer2 from '../SidebarDrawer2';

type HeaderPropsType = {
   isAuth: DataUserType | null
}

const Header: React.FC<HeaderPropsType> = ({ isAuth }) => {

   const [anchorEl, setAnchorEl] = useState(null);
   const [isDrawerOpen, setDrawerOpen] = useState(false);
   const dispatch = useAppDispatch();
   const onClickLogout = () => {
      if (window.confirm('Вы действительно хотите выйти?')) {
         setAnchorEl(null);
         dispatch(logout());
         window.localStorage.removeItem('token');
      } else {
         setAnchorEl(null);
      }
   };
   const handleMenu = (event: any) => {
      setAnchorEl(event.currentTarget);
   };
   const handleClose = () => {
      setAnchorEl(null);
   };

   return (
      <>
         {/* {(todoStatus || authStatus) === 'loading' && <Loader />} */}
         <AppBar position='sticky'>
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
                  ToDoHa
               </Typography>
               {isAuth &&
                  <div>
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
            // <SidebarDrawer
            //    drawerHeader={'TODO LISTS'}
            //    dataUser={isAuth}
            //    drawerOpen={isDrawerOpen}
            //    drawerClose={() => {
            //       setDrawerOpen(false);
            //    }}
            // />
            <SidebarDrawer2
               isdrawerOpen={isDrawerOpen}
               setDrawerOpen={setDrawerOpen}
               dataUser={isAuth}
               drawerHeader={'TODO LISTS'}
            />
         }
      </>
   );
};

export default Header;