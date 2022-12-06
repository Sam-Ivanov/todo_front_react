import { Container } from '@mui/material';
import { useEffect } from 'react';
// import './App.css';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import AuthPage from './pages/AuthPage';
import { Link, Route, Routes } from 'react-router-dom';
import { fetchAuthMe } from './redux/slices/authSlice';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import Modal from './components/common/Modal';
import Loader from './components/common/Loader';

function App() {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(state => state.auth.data);

  const authStatus = useAppSelector(state => state.auth.status);
  const todoStatus = useAppSelector(state => state.todo.status);


  useEffect(() => {
    dispatch(fetchAuthMe());
  }, []);

  return (
    <>
      {((authStatus === 'loading' || todoStatus === 'loading') && window.localStorage.token) && <Loader />}

      <Header isAuth={isAuth} />
      <Container maxWidth='lg' sx={{ mt: '1rem' }}>
        <Routes>
          <Route path="/" element={isAuth ? <HomePage /> : <AuthPage />} />
          {/* <Route path="/chat" element={<ChatPage />} /> */}
          <Route path="*" element={<div>404 NOT FOUND<Link to="/">На главную</Link></div>} />
          <Route path="/modal" element={<Modal closeModal={() => { console.log('close modal') }} />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;