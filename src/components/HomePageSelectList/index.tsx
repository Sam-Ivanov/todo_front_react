import styles from './HomePageSelectList.module.scss';

type HomePageSelectListPropsType = {
   name: string
}

const HomePageSelectList: React.FC<HomePageSelectListPropsType> = ({ name }) => {
   return (
      <div className={styles.item} onClick={() => {
         console.log(`Открыть лист ${name}`);
      }}>
         {name}
      </div>
   );
};

export default HomePageSelectList;