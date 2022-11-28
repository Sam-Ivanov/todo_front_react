import styles from './HomePageSelectList.module.css';

type HomePageSelectListPropsType = {
   name: string
}

const HomePageSelectList: React.FC<HomePageSelectListPropsType> = ({ name }) => {
   return (
      <div className={styles.item}>
         {name}
      </div>
   );
};

export default HomePageSelectList;