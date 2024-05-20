import Card from "../ArtistLineup/Card";
import styles from "./EventComponent.module.css";
import { useState } from "react";
import QR from "../../assets/qr-code.svg";
import DetailSegment from "../DetailSegment/DetailSegment";

// assets
import Artist1 from "../../assets/artists/artist1.jpg";
import Artist5 from "../../assets/artists/artist5.jpg";
import Artist3 from "../../assets/artists/artist3.jpg";

const EventComponent = () => {
  const [cards] = useState([
    { image: Artist1, size: "small" },
    { image: Artist5, size: "small" },
    { image: Artist3, size: "small" },
  ]);

  const DetailSegmentData = [
    {
      name: "Sunburn Festival",
      venue: "Goa",
      date: "12/02/2024",
      time: "18:00",
      description:
        "Sunburn Festival is an electronic dance music festival held in India. It was started by entrepreneur Shailendra Singh of Percept Ltd. Spanning over three to five days.",
    },
  ];

  const middleIndex = Math.floor(cards.length / 2);

  return (
    <div className={styles.eventDiv}>
      <h4 className={styles.heading}>Explore Your First Event</h4>

      <div className={styles.lineup}>
        <DetailSegment data={DetailSegmentData} />
        <h4 className={styles.heading} style={{ margin: "1rem 0" }}>
          Artist Lineup
        </h4>
        <div className={styles.lineupCards}>
          {cards.map((card, index) => (
            <Card
              key={index}
              image={card.image}
              size={card.size}
              isMiddle={index === middleIndex}
            />
          ))}
        </div>
      </div>

      <div className={styles.footer}>
        <a href="">
          <img className={styles.qrIcon} src={QR} alt="qr-code" />
        </a>
        <button className={styles.btnYellow}>Join Waitlist</button>
      </div>
    </div>
  );
};

export default EventComponent;
