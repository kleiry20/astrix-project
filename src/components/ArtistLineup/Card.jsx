import styles from "./Card.module.css";

const Card = () => {
  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      <div className={styles.card}>Card</div>
      <div className={styles.card}>Card</div>
      <div className={styles.card}>Card</div>
    </div>
  );
};

export default Card;
