// import PropTypes from "prop-types";
import styles from "./DetailSegment.module.css";
import { IoLocationOutline } from "react-icons/io5";
import { IoMdTime } from "react-icons/io";

const DetailSegment = () => {
  return (
    <div id="detail-card" className={styles.detailCard}>
      <h1 className={styles.heading}>Event Name</h1>
      <div className={styles.venueTime}>
        <div className={styles.item}>
          <IoLocationOutline className={styles.detailIcon}/> <p className={styles.fontStyle}>Venue</p>
        </div>
        <div className={styles.item}>
          <IoMdTime className={styles.detailIcon}/>
          <p className={styles.fontStyle}>
            {new Date().toLocaleDateString()} @{" "}
            {new Date().toLocaleTimeString()}
          </p>
        </div>
      </div>
      <article className={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi eaque
        corrupti laudantium placeat soluta. Qui quisquam doloribus vitae
        recusandae.
      </article>
    </div>
  );
};

export default DetailSegment;

// DetailCard.propTypes = {
//   name: PropTypes.string,
//   items: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number,
//       name: PropTypes.string,
//       calories: PropTypes.number,
//     })
//   ),
// };

// DetailCard.defaultProps = {
//   name: "Name",
//   category: "Category",
//   items: [],
// };
