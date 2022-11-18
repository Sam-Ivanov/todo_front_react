import { Delete } from '@mui/icons-material';
import { Button } from '@mui/material';
import React from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { fetchDeleteCompletedTodo, todosType } from '../../redux/slices/todosSlice';
import TodoItem from '../TodoItem';

type TodoItemsPropsType = {
   mainList: string,
   todos: Array<todosType>,
   isTodosLoading: boolean

}

const TodoItems: React.FC<TodoItemsPropsType> = ({ todos, isTodosLoading, mainList }) => {
   const dispatch = useAppDispatch();
   const todosInMainList = todos.filter(el => el.todoListName === mainList)

   const isShowDelBtn = todosInMainList.find(el => el.completed === true)

   const onClickDeleteCompletedTodos = () => {
      if (window.confirm('Вы действительно хотите удалить все выполненные todo?')) {
         dispatch(fetchDeleteCompletedTodo({ 'todoListName': mainList }))
      }
   }
   return (
      <>
         {
            isShowDelBtn && <div style={{ 'display': 'flex', 'justifyContent': 'center', 'marginBottom': '10px' }}>
               <Button onClick={onClickDeleteCompletedTodos} variant="outlined" startIcon={<Delete />}>
                  Delete all checked
               </Button>
               {/* <button onClick={onClickDeleteCompletedTodos}>Удалить все выполненные</button> */}
            </div>
         }
         {
            <div>
               {(isTodosLoading ? [...Array(1)] : todosInMainList.sort((a, b) => (+b.completed) - (+a.completed)).reverse()).map((el, index) => isTodosLoading
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