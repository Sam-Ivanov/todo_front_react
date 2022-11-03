import { Container } from '@mui/material';
import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import AuthTab from './pages/AuthTab';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAuthMe } from './redux/slices/authSlice';

function App() {
   const dispatch = useDispatch();
   const isAuth = useSelector(state => state.auth.data)

   useEffect(() => {
      dispatch(fetchAuthMe())
   }, [])

   return (
      <>
         <Header isAuth={isAuth} />
         <Container sx={{ mt: '1rem' }}>
            <Routes>
               <Route path="/" element={isAuth ? <Home /> : <AuthTab />} />
            </Routes>
         </Container>
      </>
   );
}

export default App;
