import styles from "./Header.module.css";
import logoIcon from "../../assets/logo.svg";
import "../../App.css";

const Header = () => {
  return (
    <nav className={styles.headerContainer}>
      <img className={`${styles.logoIcon}  rotate`} src={logoIcon} alt="icon" />
      <h3 className={styles.headerTitle}>Astrix.</h3>
    </nav>
  );
};

export default Header;
