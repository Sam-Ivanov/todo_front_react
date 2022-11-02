import { Container } from '@mui/material';
import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import TodoListsDrawer from './components/TodoListsDrawer';
import Home from './pages/Home';
import Login from './components/Login';
import AuthTab from './pages/AuthTab';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAuthMe } from './redux/slices/authSlice';


function App() {
   const dispatch = useDispatch();
   const isAuth = useSelector(state => state.auth.data)
   const [isListsOpen, setListsOpen] = useState(false);


   useEffect(() => {
      dispatch(fetchAuthMe())
   }, [])

   return (
      <>
         <Header handleLists={() => { setListsOpen(true) }} />
         <TodoListsDrawer
            listsOpen={isListsOpen}
            closeLists={() => { setListsOpen(false) }} />
         <Container sx={{ mt: '1rem' }}>
            <Routes>
               <Route path="/" element={isAuth ? <Home /> : <AuthTab />} />
               {/* <Route path="/login" element={<AuthTab />} /> */}
               {/* <Route path='/' element={AuthTab}/> */}
               <Route path="*" element={<div>Страница не существует</div>} />

            </Routes>
         </Container>
      </>
   );
}

export default App;
