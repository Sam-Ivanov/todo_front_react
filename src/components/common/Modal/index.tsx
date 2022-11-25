import { useState } from 'react';
import styles from './Modal.module.css'


type ModalPropsType = {
   title?: string;
   closeModal: () => void;
}



const Modal: React.FC<ModalPropsType> = (props): JSX.Element => {
   const [text, setText] = useState('');


   return (
      <div className={styles.modalContainer} onClick={props.closeModal}>
         <div className={styles.modal} onClick={(e) => { e.stopPropagation() }}>
            {props.title && <div className={styles.title}>{props.title}</div>}
            <div>
               <form onSubmit={(e) => {
                  e.preventDefault(); console.log(text);
               }}>
                  <div>
                     <textarea value={text} onChange={(e) => {
                        setText(e.target.value);
                     }} className={styles.textarea} />
                  </div>
                  <div className={styles.blockBtn}>
                     <button>OK</button>
                     <button onClick={(e) => { e.preventDefault(); console.log('отмена') }}>Cancel</button>
                  </div>
               </form>
            </div>
         </div>
      </div>
   )
}

export default Modal;