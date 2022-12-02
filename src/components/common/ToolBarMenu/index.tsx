import styles from './ToolBarMenu.module.scss'
import React from 'react';

type ToolBarMenu = {
   children: React.ReactNode
}

const ToolBarMenu = ({ children, ...props }: ToolBarMenu) => {
   const [isOpen, setOpen] = React.useState(false);
   return (
      <div className={styles.menuWrapper} onClick={() => { setOpen(!isOpen) }}>
         <div>
            {children}
         </div>
         <div className={isOpen ? styles.munuItemsWrapper : styles.munuItemsWrapper + ' ' + styles.hiden}>
            <div className={styles.munuItem}>
               Profile
            </div>
            <div className={styles.munuItem}>
               Settings
            </div>
            <div className={styles.munuItem}>
               Logout
            </div>
         </div>
      </div>
   );
};

export default ToolBarMenu;