import React from 'react';
import TodoItem from '../TodoItem';


const TodoItems = ({ todos, isTodosLoading, mainList }) => {
   return (
      <>
         {
            <div>
               {(isTodosLoading ? [...Array(1)] : [...todos].reverse().filter(el => el.todoListName === mainList)).map((el, index) => isTodosLoading
                  ?
                  (<TodoItem key={index} isLoading={true} />)
                  :
                  (<TodoItem key={el._id} completed={el.completed} text={el.text} id={el._id} />))}
            </div>
         }
      </>
   );
};

export default TodoItems;


//.sort((a, b) => a.completed - b.completed)