import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import styles from './AuthPage.module.css';
import Login from '../../components/Login';
import Registration from '../../components/Registration';

function TabPanel(props: any) {
   const { children, value, index, ...other } = props;

   return (
      <div
         role="tabpanel"
         hidden={value !== index}
         id={`simple-tabpanel-${index}`}
         aria-labelledby={`simple-tab-${index}`}
         {...other}
      >
         {value === index && (
            <Box sx={{ p: 3 }}>
               <Typography component="div">{children}</Typography>
            </Box>
         )}
      </div>
   );
}

TabPanel.propTypes = {
   children: PropTypes.node,
   index: PropTypes.number.isRequired,
   value: PropTypes.number.isRequired,
};

function a11yProps(index: any) {
   return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
   };
}

export default function AuthPage() {
   const [value, setValue] = React.useState(0);

   const handleChange = (event: any, newValue: any) => {
      setValue(newValue);
   };

   return (
      <div className={styles.container}>
         <Box classes={{ root: styles.root }} sx={{ width: '600px' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
               <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                  <Tab label="Sign In" {...a11yProps(0)} />
                  <Tab label="Registration" {...a11yProps(1)} />
               </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
               <Login />
            </TabPanel>
            <TabPanel value={value} index={1}>
               <Registration />
            </TabPanel>
         </Box>
      </div>
   );
}



