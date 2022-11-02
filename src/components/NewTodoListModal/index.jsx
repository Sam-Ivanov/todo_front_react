import React from 'react';

const NewTodoListModal = ({closeModal}) => {
   return (
      <div>
         <input type="text" />
         <button >add</button>
         <button onClick={closeModal}>close</button>
      </div>
   );
};

export default NewTodoListModal;