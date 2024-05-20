import PropTypes from "prop-types";
import styles from "./DetailSegment.module.css";
import { IoLocationOutline } from "react-icons/io5";
import { IoMdTime } from "react-icons/io";

const DetailSegment = (props) => {
  const { data } = props;

  return (
    <>
      {data.map((item, index) => (
        <div key={index} id="detail-card" className={styles.detailCard}>
          <h1 className={styles.heading}>{item.name}</h1>
          <div className={styles.venueTime}>
            <div className={styles.item}>
              <IoLocationOutline className={styles.detailIcon} />{" "}
              <p className={styles.fontStyle}>{item.venue}</p>
            </div>
            <div className={styles.item}>
              <IoMdTime className={styles.detailIcon} />
              <p className={styles.fontStyle}>
                {item.date} @ {item.time}
              </p>
            </div>
          </div>
          <article className={styles.description}>{item.description}</article>
        </div>
      ))}
    </>
  );
};

export default DetailSegment;

DetailSegment.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      venue: PropTypes.string,
      date: PropTypes.string,
      time: PropTypes.string,
    })
  ),
};

DetailSegment.defaultProps = {
  name: "Name",
  venue: "Venue",
  date: `${new Date().toDateString()}`,
  time: `${new Date().toTimeString()}`,
};
