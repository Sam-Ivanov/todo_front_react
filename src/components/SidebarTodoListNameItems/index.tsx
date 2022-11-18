import React from 'react';
import SidebarTodoListNameItem from '../SidebarTodoListNameItem';

// const namesTodos = ['Упражнения в зале', 'купить в магазине', 'Дела по дому'];

type SidebarTodoListNameItemsType = {
   todoListNames?: Array<string> | null,
   drawerClose: () => void

}

const SidebarTodoListNameItems: React.FC<SidebarTodoListNameItemsType> = ({ todoListNames, drawerClose }) => {

   return (
      <>
         {todoListNames && [...todoListNames]?.reverse().map((el, index) => <SidebarTodoListNameItem key={index} name={el} drawerClose={drawerClose} />)}
      </>
   );
};

export default SidebarTodoListNameItems;