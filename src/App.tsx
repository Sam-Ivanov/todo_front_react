import { Container } from '@mui/material';
import { useEffect } from 'react';
// import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Loader from './components/common/Loader';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import { fetchAuthMe } from './redux/slices/authSlice';

function App() {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(state => state.auth.data);

  const authStatus = useAppSelector(state => state.auth.status);
  const todoStatus = useAppSelector(state => state.todo.status);
  const authDataMessage = useAppSelector(state => state.auth.data?.message);

  if (authDataMessage === "jwt expired") {
    localStorage.removeItem('token');
    dispatch(fetchAuthMe());
  }


  useEffect(() => {
    dispatch(fetchAuthMe());
  }, [dispatch]);

  return (
    <>
      {((authStatus === 'loading' || todoStatus === 'loading') && window.localStorage.token) && <Loader />}

      <Header isAuth={isAuth} />
      <Container maxWidth='lg' sx={{ mt: '1rem' }}>
        <Routes>
          <Route path="/" element={isAuth ? <HomePage /> : <AuthPage />} />
          <Route path="/about" element={isAuth ? <div>ABOUT PAGE</div> : <AuthPage />} />
          {/* <Route path="/chat" element={<ChatPage />} /> */}
          {/* <Route path="/modal" element={<Modal closeModal={() => { console.log('close modal'); }} />} /> */}
          <Route path="*" element={<div>404 NOT FOUND<Link to="/">На главную</Link></div>} />
        </Routes>
      </Container>
    </>
  );
}

export default App;