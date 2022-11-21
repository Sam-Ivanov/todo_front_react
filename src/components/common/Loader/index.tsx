import styles from './Loader.module.css'

const Loader = () => {
   return (
      <div className={styles.loaderContainer}>
         <div className={styles.loadContainer}>
            <div className={styles.linespinner}></div>
         </div>
      </div>
   );
}

export default Loader