import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchUpdateTodoListNames } from '../../redux/slices/authSlice';
import Input from '../common/Input';

type NewSidebarTodoListNameInputType = {
   closeInput: () => void
}

const NewSidebarTodoListNameInput: React.FC<NewSidebarTodoListNameInputType> = ({ closeInput }) => {
   const [inputValue, setInputValue] = useState('');

   const dispatch = useAppDispatch();
   const todoListNames = useAppSelector(state => state.auth.data?.todoListNames);

   const onSubmit = (e: any) => {
      e.preventDefault();
      addListName();
   };

   const addListName = () => {
      if (inputValue === '') {
         return;
      }

      if (todoListNames?.includes(inputValue)) {
         alert('Лист с таким именем уже существует');
         closeInput();
         return;
      }

      if (todoListNames) {
         const newTodoListNames = [...todoListNames];
         newTodoListNames.push(inputValue);
         dispatch(fetchUpdateTodoListNames({ "todoListNames": newTodoListNames }));
         closeInput();
      }
   };

   return (
      <>
         <form onSubmit={onSubmit}>
            <Input
               autoFocus
               // placeholder='new list name'
               value={inputValue}
               onChange={(e) => { setInputValue(e.target.value) }}
               onBlur={() => {
                  addListName();
                  closeInput();
               }}
            />
         </form>
      </>
   );
};

export default NewSidebarTodoListNameInput;