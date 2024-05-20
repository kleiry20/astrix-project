import { useEffect, useState } from "react";
import "./ButtonGroup.css";

const ButtonGroup = ({ onButtonClick }) => {
  const [activeButton, setActiveButton] = useState("button1");

  useEffect(() => {
    handleButtonClick(activeButton);
  }, []);

  const handleButtonClick = (button) => {
    setActiveButton(button);
    onButtonClick(button); // Notify the parent component
  };

  return (
    <div className="button-group">
      <input
        type="radio"
        id="button1"
        name="button-group"
        checked={activeButton === "button1"}
        onChange={() => handleButtonClick("button1")}
      />
      <label htmlFor="button1" className="button">
        Events
      </label>

      <input
        type="radio"
        id="button2"
        name="button-group"
        checked={activeButton === "button2"}
        onChange={() => handleButtonClick("button2")}
      />
      <label htmlFor="button2" className="button">
        Collections
      </label>

      <div
        className="slider"
        style={{
          transform:
            activeButton === "button1" ? "translateX(0%)" : "translateX(100%)",
        }}
      ></div>
    </div>
  );
};

export default ButtonGroup;
