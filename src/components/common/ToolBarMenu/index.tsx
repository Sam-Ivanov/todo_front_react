import styles from './ToolbarMenu.module.scss'
import React from 'react';

type ToolbarMenuProps = {
   children: React.ReactNode
}

const ToolbarMenu = ({ children, ...props }: ToolbarMenuProps) => {
   const [isOpen, setOpen] = React.useState(false);
   return (
      <div className={styles.menuWrapper} onClick={() => { setOpen(!isOpen) }}>
         <div >
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

export default ToolbarMenu;