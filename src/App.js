import { Container } from '@mui/material';
import { useEffect } from 'react';
// import './App.css';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import AuthPage from './pages/AuthPage';
import { Link, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAuthMe } from './redux/slices/authSlice';
import ChatPage from './pages/ChatPage';

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
               <Route path="/" element={isAuth ? <HomePage /> : <AuthPage />} />
               <Route path="/chat" element={<ChatPage />} />
               <Route path="*" element={<div>404 NOT FOUND<Link to="/">На главную</Link></div>} />

            </Routes>
         </Container>
      </>
   );
}

export default App;