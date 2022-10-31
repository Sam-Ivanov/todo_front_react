import { AccountCircle, Delete } from '@mui/icons-material';
import { AppBar, Container, IconButton, Toolbar, Typography } from '@mui/material';
import React from 'react';

const Header = ({handleLists}) => {
   return (
      <AppBar position='static'>
         <Toolbar >
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
               TODO
            </Typography>
            <IconButton
               size="large"
               aria-label="account of current user"
               aria-controls="menu-appbar"
               aria-haspopup="true"
               color="inherit"
               onClick={handleLists}
            >
               <AccountCircle />
            </IconButton>
         </Toolbar>
      </AppBar>
   );
};

export default Header;

