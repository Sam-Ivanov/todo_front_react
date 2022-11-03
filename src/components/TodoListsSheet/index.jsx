import React from 'react';
import TodoListItem from '../TodoListItem';

const namesTodos = ['Упражнения в зале', 'купить в магазине', 'Дела по дому'];

const TodoListsSheet = ({ todoListNames, drawerClose }) => {

   return (
      <>
         {[...todoListNames]?.reverse().map((el, index) => <TodoListItem key={index} name={el} drawerClose={drawerClose} />)}
      </>
   );
};

export default TodoListsSheet;