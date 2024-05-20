import styles from "./Card.module.css";
import PropTypes from "prop-types";

// assets
import Event3 from "../../assets/events/event3.jpg";

const Card = (props) => {
  return (
    <>
      {props.size == "small" && (
        <div
          className={`${styles.card} ${styles.cardSmall} ${
            props.isMiddle ? styles.middleCard : ""
          }`}
          style={{
            backgroundImage: `url(${props.image})`,
          }}
        ></div>
      )}

      {props.size == "large" && (
        <div
          className={`${styles.card} ${styles.cardLarge} animate`}
          style={{
            backgroundImage: `url(${props.image})`,
          }}
        ></div>
      )}
    </>
  );
};

Card.propTypes = {
  image: PropTypes.string,
  size: PropTypes.string,
  isMiddle: PropTypes.bool,
};

Card.defaultProps = {
  image: Event3,
};

export default Card;
