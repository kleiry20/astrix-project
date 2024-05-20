import styles from "./Live.module.css";

const Live = () => {
  return (
    <>
      <div className={styles.live}>
        <h3
          className={`${styles.animate} ${styles.slideIn} ${styles.animateInfinite} ${styles.animateSlow}`}
        >
          Event: Oasis Bus Tour, JLN Stadium, Delhi * Collection Live
        </h3>
      </div>
    </>
  );
};

export default Live;
