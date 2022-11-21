import styles from './Modal.module.css'

type ModalPropsType = {
   title?: string;
   closeModal: () => void;
}

const Modal: React.FC<ModalPropsType> = (props): JSX.Element => {

   return (
      <div className={styles.modalContainer} onClick={props.closeModal}>
         <div className={styles.modal} onClick={(e) => { e.stopPropagation() }}>
            {props.title && <div className={styles.title}>{props.title}</div>}
            <div>
               <form >
                  <div>
                     <textarea onChange={() => { }} className={styles.textarea} />
                  </div>
                  <div className={styles.blockBtn}>
                     <button>OK</button>
                     <button>Cancel</button>
                  </div>
               </form>
            </div>
         </div>
      </div>
   )
}

export default Modal;