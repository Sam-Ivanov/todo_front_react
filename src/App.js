import { TroubleshootTwoTone } from '@mui/icons-material';
import { Container } from '@mui/material';
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import NewTodoInput from './components/NewTodoInput';
import TodoListName from './components/TodoListName';
import TodoLists from './components/TodoLists';

function App() {
   const[isListsOpen, setListsOpen] = useState(true);
   return (<>
      <Header handleLists={()=>{setListsOpen(true)}}/>
      <Container sx={{ mt: '1rem' }}>
         <TodoListName todoListName={"Купить в магазине"} />
         <NewTodoInput />
      </Container>
      <TodoLists
      listsOpen={isListsOpen}
      closeLists={()=>{setListsOpen(false)}}/>
   </>
   );
}

export default App;
