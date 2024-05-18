import Header from "../Header/Header";
import styles from "./HeroComponent.module.css";

const HeroComponent = () => {
  return (
    <div className={styles.hero}>
      <Header />
      <div className={styles.main}>
        <div className={styles.heading}>
          <h1 className={styles.h1Style}>Astr</h1>
          <h1 className={styles.h1Style}>ix</h1>
        </div>

        <div className={styles.heading}>
          <h1 className={styles.h1Style}>eve</h1>
          <h1 className={styles.h1Style}>nts</h1>
        </div>
      </div>

      <button>Events</button>
      <button>Collections</button>
    </div>
  );
};

export default HeroComponent;
