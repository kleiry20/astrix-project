// import Button from "../Button/Button";
import Card from "../ArtistLineup/Card";
import styles from "./EventComponent.module.css";

import QR from "../../assets/qr-code.svg";
import DetailSegment from "../DetailSegment/DetailSegment";

// assets
import Event1 from "../../assets/events/event1.jpg";
import Event2 from "../../assets/events/event2.jpg";
import Event3 from "../../assets/events/event3.jpg";
import Event4 from "../../assets/events/event4.jpg";
import Event5 from "../../assets/events/event5.jpg";

import Artist1 from "../../assets/artists/artist1.jpg";
import Artist5 from "../../assets/artists/artist5.jpg";
import Artist3 from "../../assets/artists/artist3.jpg";

const EventComponent = () => {
  return (
    <div className={styles.eventDiv}>
      <h4 className={styles.heading}>Explore Your First Event</h4>

      <div className={styles.lineup}>
        <DetailSegment />
        <h4 className={styles.heading} style={{ margin: "1rem 0" }}>
          Artist Lineup
        </h4>
        <div className={styles.lineupCards}>
          <Card image={Artist1} size={"small"} />
          <Card image={Artist5} size={"small"} />
          <Card image={Artist3} size={"small"} />
        </div>
      </div>

      <div className={styles.footer}>
        <img className={styles.qrIcon} src={QR} alt="" />
        {/* <Button /> */}
        <button className={styles.btnYellow}>Join Waitlist</button>
      </div>
    </div>
  );
};

export default EventComponent;
