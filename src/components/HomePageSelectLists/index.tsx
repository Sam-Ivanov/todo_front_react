import { useAppSelector } from "../../hooks/redux";
import HomePageSelectList from "../HomePageSelectList";
import styles from './HomePageSelectLists.module.scss';

const HomePageSelectLists: React.FC = () => {
   const listNames = useAppSelector(state => state.auth.data?.todoListNames)

   return (
      <>
         <div className={styles.title}>
            Выберите или создайте новый лист
         </div>
         <div className={styles.container}>
            {listNames?.map((el, index) => <HomePageSelectList key={index} name={el} />)}
         </div>
      </>
   );
};

export default HomePageSelectLists;