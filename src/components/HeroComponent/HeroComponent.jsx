import { useEffect, useState } from "react";
import Header from "../Header/Header";
import styles from "./HeroComponent.module.css";
import Card from "../ArtistLineup/Card";

// assets
import Event2 from "../../assets/events/event2.jpg";
import Event3 from "../../assets/events/event3.jpg";
import Event5 from "../../assets/events/event5.jpg";
import Loc1 from "../../assets/loc1.jpg";
import Loc3 from "../../assets/loc3.jpg";
import Loc5 from "../../assets/loc5.jpg";

import ButtonGroup from "../Button/ButtonGroup/ButtonGroup";

const HeroComponent = () => {
  const [content, setContent] = useState("Content for Button 1");

  // change content view on btn click
  const handleButtonGroupClick = (button) => {
    setContent(button === "button1" ? <EventView /> : <CollectionView />);
  };

  useEffect(() => {
    const cards = document.querySelectorAll(".card");

    cards.forEach((card) => {
      card.addEventListener("animationstart", () => {
        card.classList.add("focus");
      });

      card.addEventListener("animationend", () => {
        card.classList.remove("focus");
      });
    });
  });

  return (
    <div className={styles.hero}>
      <Header />

      <div className={styles.contentWrapper}>
        <div className={styles.contentDiv}>{content}</div>
        <ButtonGroup onButtonClick={handleButtonGroupClick} />
      </div>
    </div>
  );
};

export default HeroComponent;

const CollectionView = () => {
  return (
    <>
      <div className={styles.mainBg}>
        <h1 className={styles.h1Style}>astr ix</h1>
        <h1 className={styles.h1Style}>coll ecti ble</h1>
      </div>

      <div className={`${styles.heroCardDiv}`}>
        <div className={`${styles.heroCardWrapper}`} id="herocardwrapper">
          <Card image={Loc5} size={"large"} />
          <Card image={Loc1} size={"large"} />
          <Card image={Loc3} size={"large"} />
        </div>
      </div>
    </>
  );
};

const EventView = () => {
  return (
    <>
      <div className={styles.mainBg}>
        <h1 className={styles.h1Style}>astr ix</h1>
        <h1 className={styles.h1Style}>eve nts</h1>
      </div>

      <div className={`${styles.heroCardDiv}`}>
        <div className={`${styles.heroCardWrapper}`}>
          <Card image={Event3} size={"large"} />
          <Card image={Event2} size={"large"} />
          <Card image={Event5} size={"large"} />
        </div>
      </div>
    </>
  );
};
