import React from 'react';
import TodoItem from '../TodoItem';


const TodoItems = ({todos, isTodosLoading}) => {
   return (
      <>
         {(isTodosLoading ? [...Array(1)] : todos).map((el, index) =>
            isTodosLoading
               ?
               (<TodoItem key={index} isLoading={true}/> )
               :
               (<TodoItem key={el._id} completed={el.completed} text={el.text} id={el._id}/>))}
      </>
   );
};

export default TodoItems;


//.sort((a, b) => a.completed - b.completed)