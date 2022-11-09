import React from 'react';
import SidebarTodoListNameItem from '../SidebarTodoListNameItem';

// const namesTodos = ['Упражнения в зале', 'купить в магазине', 'Дела по дому'];

const SidebarTodoListNameItems = ({ todoListNames, drawerClose }) => {

   return (
      <>
         {[...todoListNames]?.reverse().map((el, index) => <SidebarTodoListNameItem key={index} name={el} drawerClose={drawerClose} />)}
      </>
   );
};

export default SidebarTodoListNameItems;