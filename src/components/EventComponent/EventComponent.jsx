// import Button from "../Button/Button";
import Card from "../ArtistLineup/Card";
import DetailCard from "../DetailCard/DetailCard";
import styles from "./EventComponent.module.css";

import QR from "../../assets/qr-code.svg";

const EventComponent = () => {
  return (
    <div className={styles.eventDiv}>
      <h4 className={styles.heading}>Explore Your First Event</h4>
      <DetailCard />

      <div className={styles.lineup}>
        <h4 className={styles.heading}>Artist Lineup</h4>
        <Card />
      </div>

      <div className={styles.footer}>
        <img src={QR} alt="" />
        {/* <Button /> */}
        <button className={styles.btnYellow}>Join Waitlist</button>
      </div>
    </div>
  );
};

export default EventComponent;
