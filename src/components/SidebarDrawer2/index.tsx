import { useState } from 'react';
import { DataUserType } from "../../redux/slices/authSlice";
import NewSidebarTodoListNameInput from '../NewSidebarTodoListNameInput';
import SidebarTodoListNameItems from '../SidebarTodoListNameItems';
import s from './SidebarDrawer2.module.scss';

import { MdAdd } from 'react-icons/md';

type SidebarDrawerPropsType = {
   drawerHeader: string,
   dataUser: DataUserType | null,
   isdrawerOpen: boolean,
   setDrawerOpen: (value: boolean) => void
}




const SidebarDrawer2: React.FC<SidebarDrawerPropsType> = ({ isdrawerOpen, setDrawerOpen, drawerHeader, dataUser }) => {
   const [isShowInput, setShowInput] = useState(false);

   return (
      <div
         className={isdrawerOpen ? s.blur : s.blurOff}
         onClick={() => {
            setDrawerOpen(false);
            console.log('Drawer closed');
         }}>
         <div
            className={isdrawerOpen ? s.menu + ' ' + s.active : s.menu} >
            <div
               className={s.menuContent}
               onClick={e => e.stopPropagation()}>
               <div className={s.menuHeader}>
                  <div className={s.headerName}>
                     {drawerHeader}
                  </div>
                  <div
                     className={s.addList}
                     onClick={() => {
                        setShowInput(true);
                     }}>
                     <MdAdd />
                  </div>
               </div>
               <div className={s.items}>
                  {isShowInput && <NewSidebarTodoListNameInput closeInput={() => { setShowInput(false) }} />}
                  <SidebarTodoListNameItems
                     todoListNames={dataUser?.todoListNames}
                     drawerClose={() => { setDrawerOpen(false) }}
                  />
                  {/* {dataUser?.todoListNames.map((item, index) => <div key={index}>{item}</div>)} */}
               </div>
            </div>
         </div>
      </div >
   );
};

export default SidebarDrawer2;

