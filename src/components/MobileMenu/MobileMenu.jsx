import { AiOutlineClose } from "react-icons/ai";
import styles from "./MobileMenu.module.css";

export const MobileMenu = ({ toggleMenu }) => {
  return (
    <div className={styles.wrapper}>
      <button className={styles.iconBtn} type="button" onClick={toggleMenu}>
        <AiOutlineClose size={32} color="#F8F8F8" />
      </button>
      <ul className={styles.navList}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/favorites">Favorites</a>
        </li>
      </ul>
    </div>
  );
};
