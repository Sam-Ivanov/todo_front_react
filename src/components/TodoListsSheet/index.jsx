import React from 'react';
import TodoListItem from '../TodoListItem';

const namesTodos = ['Упражнения в зале', 'купить в магазине', 'Дела по дому'];

const TodoListsSheet = (props) => {
   return (
      <>
         {namesTodos.map((el,index) => <TodoListItem key={index} name={el} />)}
      </>
   );
};

export default TodoListsSheet;